(function ($) {
    if ($.fn.inputmask == undefined) {
        $.inputmask = {
            
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                escapeChar: "\\",
                mask: null,
                oncomplete: $.noop, 
                onincomplete: $.noop, 
                oncleared: $.noop, 
                repeat: 0, 
                greedy: true, 
                autoUnmask: false, 
                clearMaskOnLostFocus: true,
                insertMode: true, 
                clearIncomplete: false, 
                aliases: {}, 
                onKeyUp: $.noop, 
                onKeyDown: $.noop, 
                showMaskOnFocus: true, 
                showMaskOnHover: false, 
                onKeyValidation: $.noop, 
                skipOptionalPartCharacter: " ", 
                
                numericInput: false, 
                radixPoint: "", 
                
                definitions: {
                    '9': {
                        validator: "[0-9]",
                        cardinality: 1
                    },
                    'a': {
                        validator: "[A-Za-z\u0410-\u044F\u0401\u0451]",
                        cardinality: 1
                    },
                    '*': {
                        validator: "[A-Za-z\u0410-\u044F\u0401\u04510-9]",
                        cardinality: 1
                    }
                },
                keyCode: {
                    ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91
                },
                
                ignorables: [9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                getMaskLength: function (buffer, greedy, repeat, currentBuffer, opts) {
                    var calculatedLength = buffer.length;
                    if (!greedy && repeat > 1) {
                        calculatedLength += (buffer.length * (repeat - 1));
                    }
                    return calculatedLength;
                }
            },
            val: $.fn.val, 
            escapeRegex: function (str) {
                var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
                return str.replace(new RegExp('(\\' + specials.join('|\\') + ')', 'gim'), '\\$1');
            }
        };

        $.fn.inputmask = function (fn, options) {
            var opts = $.extend(true, {}, $.inputmask.defaults, options);
            var pasteEvent = isInputEventSupported('paste') ? 'paste' : 'input';

            var iphone = navigator.userAgent.match(/iphone/i) != null;
            var android = navigator.userAgent.match(/android.*safari.*/i) != null,
	    	android534;
            if (android) {
                var browser = navigator.userAgent.match(/safari.*/i);
                var version = parseInt(new RegExp(/[0-9]+/).exec(browser));
                android = (version <= 533);
                android534 = (533 < version <= 534);
            }
            var caretposCorrection = null;
            var masksets,
	        activeMasksetIndex = 0;

            if (typeof fn == "string") {
                switch (fn) {
                    case "mask":
                        
                        resolveAlias(opts.alias, options);
                        masksets = generateMaskSets();

                        return this.each(function () {
                            mask(this);
                        });
                        break;
                    case "unmaskedvalue":
                        masksets = this.data('inputmask')['masksets'];
                        activeMasksetIndex = this.data('inputmask')['activeMasksetIndex'];
                        opts.definitions = this.data('inputmask')['definitions'];
                        return unmaskedvalue(this);
                        break;
                    case "remove":
                        return this.each(function () {
                            var $input = $(this), input = this;
                            setTimeout(function () {
                                if ($input.data('inputmask')) {
                                    masksets = $input.data('inputmask')['masksets'];
                                    activeMasksetIndex = $input.data('inputmask')['activeMasksetIndex'];
                                    opts.definitions = $input.data('inputmask')['definitions'];
                                    
                                    input._valueSet(unmaskedvalue($input, true));
                                    
                                    $input.removeData('inputmask');
                                    
                                    $input.unbind(".inputmask");
                                    $input.removeClass('focus.inputmask');
                                    
                                    var valueProperty;
                                    if (Object.getOwnPropertyDescriptor)
                                        valueProperty = Object.getOwnPropertyDescriptor(input, "value");
                                    if (valueProperty && valueProperty.get) {
                                        if (input._valueGet) {
                                            Object.defineProperty(input, "value", {
                                                get: input._valueGet,
                                                set: input._valueSet
                                            });
                                        }
                                    } else if (document.__lookupGetter__ && input.__lookupGetter__("value")) {
                                        if (input._valueGet) {
                                            input.__defineGetter__("value", input._valueGet);
                                            input.__defineSetter__("value", input._valueSet);
                                        }
                                    }
                                    delete input._valueGet;
                                    delete input._valueSet;
                                }
                            }, 0);
                        });
                        break;
                    case "getemptymask": 
                        if (this.data('inputmask')) {
                            masksets = this.data('inputmask')['masksets'];
                            activeMasksetIndex = this.data('inputmask')['activeMasksetIndex'];
                            return masksets[activeMasksetIndex]['_buffer'].join('');
                        }
                        else return "";
                    case "hasMaskedValue": 
                        return this.data('inputmask') ? !this.data('inputmask')['autoUnmask'] : false;
                    case "isComplete":
                        masksets = this.data('inputmask')['masksets'];
                        activeMasksetIndex = this.data('inputmask')['activeMasksetIndex'];
                        opts.definitions = this.data('inputmask')['definitions'];
                        return isComplete(this[0].split(''));
                    default:
                        
                        if (!resolveAlias(fn, options)) {
                            
                            
                            opts.mask = fn;
                        }
                        masksets = generateMaskSets();

                        return this.each(function () {
                            mask(this);
                        });

                        break;
                }
            } else if (typeof fn == "object") {
                opts = $.extend(true, {}, $.inputmask.defaults, fn);

                resolveAlias(opts.alias, fn); 
                masksets = generateMaskSets();

                return this.each(function () {
                    mask(this);
                });
            } else if (fn == undefined) {
                
                return this.each(function () {
                    var attrOptions = $(this).attr("data-inputmask");
                    if (attrOptions && attrOptions != "") {
                        try {
                            attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
                            var options = $.parseJSON("{" + attrOptions + "}");
                            opts = $.extend(true, {}, $.inputmask.defaults, options);
                            resolveAlias(opts.alias, options);
                            opts.alias = undefined;
                            $(this).inputmask(opts);
                        } catch (ex) { } 
                    }
                });
            }

            
            function isInputEventSupported(eventName) {
                var el = document.createElement('input'),
		        eventName = 'on' + eventName,
		        isSupported = (eventName in el);
                if (!isSupported) {
                    el.setAttribute(eventName, 'return;');
                    isSupported = typeof el[eventName] == 'function';
                }
                el = null;
                return isSupported;
            }

            function resolveAlias(aliasStr, options) {
                var aliasDefinition = opts.aliases[aliasStr];
                if (aliasDefinition) {
                    if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias); 
                    $.extend(true, opts, aliasDefinition);  
                    $.extend(true, opts, options);  
                    return true;
                }
                return false;
            }

            function getMaskTemplate(mask) {
                var escaped = false, outCount = 0, greedy = opts.greedy, repeat = opts.repeat;
                if (mask.length == 1 && greedy == false) { opts.placeholder = ""; } 
                var singleMask = $.map(mask.split(""), function (element, index) {
                    var outElem = [];
                    if (element == opts.escapeChar) {
                        escaped = true;
                    }
                    else if ((element != opts.optionalmarker.start && element != opts.optionalmarker.end) || escaped) {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            for (var i = 0; i < maskdef.cardinality; i++) {
                                outElem.push(getPlaceHolder(outCount + i));
                            }
                        } else {
                            outElem.push(element);
                            escaped = false;
                        }
                        outCount += outElem.length;
                        return outElem;
                    }
                });

                
                var repeatedMask = singleMask.slice();
                for (var i = 1; i < repeat && greedy; i++) {
                    repeatedMask = repeatedMask.concat(singleMask.slice());
                }

                return { "mask": repeatedMask, "repeat": repeat, "greedy": greedy };
            }

            
            function getTestingChain(mask) {
                var isOptional = false, escaped = false;
                var newBlockMarker = false; 

                return $.map(mask.split(""), function (element, index) {
                    var outElem = [];

                    if (element == opts.escapeChar) {
                        escaped = true;
                    } else if (element == opts.optionalmarker.start && !escaped) {
                        isOptional = true;
                        newBlockMarker = true;
                    }
                    else if (element == opts.optionalmarker.end && !escaped) {
                        isOptional = false;
                        newBlockMarker = true;
                    }
                    else {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            var prevalidators = maskdef["prevalidator"], prevalidatorsL = prevalidators ? prevalidators.length : 0;
                            for (var i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator["validator"], cardinality = prevalidator["cardinality"];
                                outElem.push({ fn: validator ? typeof validator == 'string' ? new RegExp(validator) : new function () { this.test = validator; } : new RegExp("."), cardinality: cardinality ? cardinality : 1, optionality: isOptional, newBlockMarker: isOptional == true ? newBlockMarker : false, offset: 0, casing: maskdef["casing"], def: element });
                                if (isOptional == true) 
                                    newBlockMarker = false;
                            }
                            outElem.push({ fn: maskdef.validator ? typeof maskdef.validator == 'string' ? new RegExp(maskdef.validator) : new function () { this.test = maskdef.validator; } : new RegExp("."), cardinality: maskdef.cardinality, optionality: isOptional, newBlockMarker: newBlockMarker, offset: 0, casing: maskdef["casing"], def: element });
                        } else {
                            outElem.push({ fn: null, cardinality: 0, optionality: isOptional, newBlockMarker: newBlockMarker, offset: 0, casing: null, def: element });
                            escaped = false;
                        }
                        
                        newBlockMarker = false;
                        return outElem;
                    }
                });
            }

            function generateMaskSets() {  
                var ms = [];
                function markOptional(maskPart) { 
                    return opts.optionalmarker.start + maskPart + opts.optionalmarker.end;
                }
                function generateMask(maskPrefix, maskPart) {
                    var maskParts = maskPart.split(opts.optionalmarker.end, 2);
                    var newMask, maskTemplate;


                    var masks = maskParts[0].split(opts.optionalmarker.start);
                    if (masks.length > 1) {
                        newMask = maskPrefix + masks[0] + markOptional(masks[1]) + (maskParts.length > 1 ? maskParts[1] : "");
                        maskTemplate = getMaskTemplate(newMask);
                        ms.push({
                            "_buffer": maskTemplate["mask"],
                            "tests": getTestingChain(newMask),
                            "lastValidPosition": 0,
                            "greedy": maskTemplate["greedy"],
                            "repeat": maskTemplate["repeat"]
                        });
                        newMask = maskPrefix + masks[0] + (maskParts.length > 1 ? maskParts[1] : "");
                        maskTemplate = getMaskTemplate(newMask);
                        ms.push({
                            "_buffer": maskTemplate["mask"],
                            "tests": getTestingChain(newMask),
                            "lastValidPosition": 0,
                            "greedy": maskTemplate["greedy"],
                            "repeat": maskTemplate["repeat"]
                        });
                        if (maskParts.length > 1 && maskParts[1].split(opts.optionalmarker.start).length > 1) {
                            generateMask(maskPrefix + masks[0] + markOptional(masks[1]), maskParts[1]);
                            generateMask(maskPrefix + masks[0], maskParts[1]);
                        }
                    }
                    else {
                        newMask = maskPrefix + maskParts;
                        maskTemplate = getMaskTemplate(newMask);
                        ms.push({
                            "_buffer": maskTemplate["mask"],
                            "tests": getTestingChain(newMask),
                            "lastValidPosition": 0,
                            "greedy": maskTemplate["greedy"],
                            "repeat": maskTemplate["repeat"]
                        });
                    }

                }

                generateMask("", opts.mask.toString());
                return ms;
            }

            
            function getActiveMaskSet() {
                return masksets[activeMasksetIndex];
            }

            function getActiveTests() {
                return getActiveMaskSet()['tests'];
            }

            function getActiveBuffer() {
                return getActiveMaskSet()['_buffer'];
            }

            function isValid(pos, c, buffer, strict, isRTL) { 
                function _isValid(position, activeMaskset) {
                    var testPos = determineTestPosition(position), loopend = c ? 1 : 0, chrs = '';
                    for (var i = activeMaskset['tests'][testPos].cardinality; i > loopend; i--) {
                        chrs += getBufferElement(buffer, testPos - (i - 1));
                    }

                    if (c) {
                        chrs += c;
                    }

                    
                    return activeMaskset['tests'][testPos].fn != null ? activeMaskset['tests'][testPos].fn.test(chrs, buffer, position, strict, opts) : false;
                }

                if (strict) return _isValid(pos, getActiveMaskSet()); 

                var results = [], result = false, currentActiveMasksetIndex = activeMasksetIndex;
                $.each(masksets, function (index, value) {
                    var activeMaskset = this;
                    activeMasksetIndex = index;

                    var maskPos = pos;
                    if (currentActiveMasksetIndex != activeMasksetIndex && !isMask(pos)) {
                        if (c == activeMaskset['_buffer'][maskPos] || c == opts.skipOptionalPartCharacter) { 
                            results[index] = { "refresh": true };  
                            activeMaskset['lastValidPosition'] = maskPos;
                            return false;
                        }

                        maskPos = isRTL ? seekPrevious(buffer, pos) : seekNext(buffer, pos);
                    }
                    if ((isRTL || opts.numericInput) ? activeMaskset['lastValidPosition'] <= opts.numericInput ? getMaskLength(buffer) : seekNext(buffer, maskPos) : activeMaskset['lastValidPosition'] >= seekPrevious(buffer, maskPos)) {
                        if (maskPos >= 0 && maskPos < getMaskLength(buffer)) {
                            results[index] = _isValid(maskPos, activeMaskset);
                            if (results[index] !== false) {
                                if (results[index] === true) {
                                    results[index] = { "pos": maskPos }; 
                                }
                                activeMaskset['lastValidPosition'] = results[index].pos || maskPos; 
                            } else activeMaskset['lastValidPosition'] = isRTL ? seekNext(buffer, pos) : seekPrevious(buffer, pos); 
                        }
                    }
                });
                activeMasksetIndex = currentActiveMasksetIndex; 
                determineActiveMasksetIndex(buffer, pos, currentActiveMasksetIndex, isRTL);
                result = results[activeMasksetIndex] || result;
                setTimeout(function () { opts.onKeyValidation.call(this, result, opts); }, 0); 
                return result;
            }

            function determineActiveMasksetIndex(buffer, pos, currentActiveMasksetIndex, isRTL) {
                $.each(masksets, function (index, value) {
                    var activeMaskset = this;
                    if ((isRTL || opts.numericInput) ? activeMaskset['lastValidPosition'] <= pos : activeMaskset['lastValidPosition'] >= pos) {
                        activeMasksetIndex = index;
                        
                        if (activeMasksetIndex != currentActiveMasksetIndex) {
                            var abl = getMaskLength(buffer), bufTemplate = getActiveBuffer();
                            if (isRTL || opts.numericInput) {
                                buffer.reverse();
                                bufTemplate.reverse();
                            }
                            buffer.length = pos; 
                            for (var i = pos; i < abl; i++) {
                                var testPos = determineTestPosition(i);
                                setBufferElement(buffer, i, getBufferElement(bufTemplate, testPos));
                            }
                            if (isRTL) {
                                buffer.reverse();
                            }
                        }
                        return false; 
                    }
                });
            }

            function isMask(pos) {
                var testPos = determineTestPosition(pos);
                var test = getActiveTests()[testPos];

                return test != undefined ? test.fn : false;
            }

            function determineTestPosition(pos) {
                return pos % getActiveTests().length;
            }

            function getPlaceHolder(pos) {
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }

            function getMaskLength(currentBuffer) {
                return opts.getMaskLength(getActiveBuffer(), getActiveMaskSet()['greedy'], getActiveMaskSet()['repeat'], currentBuffer, opts);
            }

            
            function seekNext(buffer, pos) {
                var maskL = getMaskLength(buffer);
                if (pos >= maskL) return maskL;
                var position = pos;
                while (++position < maskL && !isMask(position)) { };
                return position;
            }
            
            function seekPrevious(buffer, pos) {
                var position = pos;
                if (position <= 0) return 0;

                while (--position > 0 && !isMask(position)) { };
                return position;
            }

            function setBufferElement(buffer, position, element) {
                

                var test = getActiveTests()[determineTestPosition(position)];
                var elem = element;
                if (elem != undefined) {
                    switch (test.casing) {
                        case "upper":
                            elem = element.toUpperCase();
                            break;
                        case "lower":
                            elem = element.toLowerCase();
                            break;
                    }
                }

                buffer[position] = elem;
            }
            function getBufferElement(buffer, position, autoPrepare) {
                if (autoPrepare) position = prepareBuffer(buffer, position);
                return buffer[position];
            }

            
            function prepareBuffer(buffer, position, isRTL) {
                var j;
                if (isRTL) {
                    while (position < 0 && buffer.length < getMaskLength(buffer)) {
                        j = getActiveBuffer().length - 1;
                        position = getActiveBuffer().length;
                        while (getActiveBuffer()[j] !== undefined) {
                            buffer.unshift(getActiveBuffer()[j--]);
                        }
                    }
                } else {
                    while (buffer[position] == undefined && buffer.length < getMaskLength(buffer)) {
                        j = 0;
                        while (getActiveBuffer()[j] !== undefined) { 
                            buffer.push(getActiveBuffer()[j++]);
                        }
                    }
                }

                return position;
            }

            function writeBuffer(input, buffer, caretPos) {
                input._valueSet(buffer.join(''));
                if (caretPos != undefined) {
                    if (android) {
                        setTimeout(function () {
                            caret(input, caretPos);
                        }, 100);
                    }
                    else caret(input, caretPos);
                }
            };
            function clearBuffer(buffer, start, end) {
                for (var i = start, maskL = getMaskLength(buffer) ; i < end && i < maskL; i++) {
                    setBufferElement(buffer, i, getBufferElement(getActiveBuffer().slice(), i));
                }
            };

            function setReTargetPlaceHolder(buffer, pos) {
                var testPos = determineTestPosition(pos);
                setBufferElement(buffer, pos, getBufferElement(getActiveBuffer(), testPos));
            }

            function checkVal(input, buffer, clearInvalid, skipRadixHandling) {
                var isRTL = $(input).data('inputmask')['isRTL'],
                    inputValue = truncateInput(input._valueGet(), isRTL).split('');

                var maskL = getMaskLength(buffer);
                if (isRTL) { 
                    var inputValueRev = inputValue.reverse(); inputValueRev.length = maskL;

                    for (var i = 0; i < maskL; i++) {
                        var targetPosition = determineTestPosition(maskL - (i + 1));
                        if (getActiveTests()[targetPosition].fn == null && inputValueRev[i] != getBufferElement(getActiveBuffer(), targetPosition)) {
                            inputValueRev.splice(i, 0, getBufferElement(getActiveBuffer(), targetPosition));
                            inputValueRev.length = maskL;
                        } else {
                            inputValueRev[i] = inputValueRev[i] || getBufferElement(getActiveBuffer(), targetPosition);
                        }
                    }
                    inputValue = inputValueRev.reverse();
                }
                clearBuffer(buffer, 0, buffer.length);
                buffer.length = getActiveBuffer().length;
                var lastMatch = -1, checkPosition = -1, np, ivl = inputValue.length, rtlMatch = ivl == 0 ? maskL : -1;
                for (var i = 0; i < ivl; i++) {
                    for (var pos = checkPosition + 1; pos < maskL; pos++) {
                        if (isMask(pos)) {
                            var c = inputValue[i];
                            if ((np = isValid(pos, c, buffer, !clearInvalid, isRTL)) !== false) {
                                if (np !== true) {
                                    pos = np.pos != undefined ? np.pos : pos; 
                                    c = np.c != undefined ? np.c : c; 
                                }
                                setBufferElement(buffer, pos, c);
                                lastMatch = checkPosition = pos;
                            } else {
                                setReTargetPlaceHolder(buffer, pos);
                                if (c == getPlaceHolder(pos)) {
                                    checkPosition = pos;
                                    rtlMatch = pos;
                                }
                            }
                            break;
                        } else {   
                            setReTargetPlaceHolder(buffer, pos);
                            if (lastMatch == checkPosition) 
                                lastMatch = pos;
                            checkPosition = pos;
                            if (inputValue[i] == getBufferElement(buffer, pos))
                                break;
                        }
                    }
                }
                
                if (getActiveMaskSet()['greedy'] == false) {
                    var newBuffer = truncateInput(buffer.join(''), isRTL).split('');
                    while (buffer.length != newBuffer.length) {  
                        isRTL ? buffer.shift() : buffer.pop();
                    }
                }

                if (clearInvalid) {
                    writeBuffer(input, buffer);
                }
                return isRTL ? (opts.numericInput ? (opts.radixPoint != "" && $.inArray(opts.radixPoint, buffer) != -1 && skipRadixHandling !== true ? $.inArray(opts.radixPoint, buffer) : seekNext(buffer, maskL)) : seekNext(buffer, rtlMatch)) : seekNext(buffer, lastMatch);
            }

            function escapeRegex(str) {
                return $.inputmask.escapeRegex.call(this, str);
            }

            function truncateInput(inputValue, rtl) {
                return rtl ? inputValue.replace(new RegExp("^(" + escapeRegex(getActiveBuffer().join('')) + ")*"), "") : inputValue.replace(new RegExp("(" + escapeRegex(getActiveBuffer().join('')) + ")*$"), "");
            }

            function clearOptionalTail(input, buffer) {
                checkVal(input, buffer, false);
                var tmpBuffer = buffer.slice(), testPos, pos;
                if ($(input).data('inputmask')['isRTL']) {
                    for (var pos = 0; pos <= tmpBuffer.length - 1; pos++) {
                        var testPos = determineTestPosition(pos);
                        if (getActiveTests()[testPos].optionality) {
                            if (!isMask(pos) || !isValid(pos, buffer[pos], buffer, true))
                                tmpBuffer.splice(0, 1);
                            else break;
                        } else break;
                    }
                } else {
                    for (var pos = tmpBuffer.length - 1; pos >= 0; pos--) {
                        var testPos = determineTestPosition(pos);
                        if (getActiveTests()[testPos].optionality) {
                            if (!isMask(pos) || !isValid(pos, buffer[pos], buffer, true))
                                tmpBuffer.pop();
                            else break;
                        } else break;
                    }
                }
                writeBuffer(input, tmpBuffer);
            }

            
            function unmaskedvalue($input, skipDatepickerCheck) {
                var input = $input[0];
                if (getActiveTests() && (skipDatepickerCheck === true || !$input.hasClass('hasDatepicker'))) {
                    var buffer = getActiveBuffer().slice();
                    checkVal(input, buffer);
                    return $.map(buffer, function (element, index) {
                        return isMask(index) && isValid(index, element, buffer, true) ? element : null;
                    }).join('');
                }
                else {
                    return input._valueGet();
                }
            }

            function caret(input, begin, end) {
                var npt = input.jquery && input.length > 0 ? input[0] : input;
                if (typeof begin == 'number') {
                    if (!$(input).is(':visible')) {
                        return;
                    }
                    end = (typeof end == 'number') ? end : begin;
                    if (opts.insertMode == false && begin == end) end++; 
                    if (npt.setSelectionRange) {
                        if (end == begin) {
                            npt.focus();
                            npt.setSelectionRange(begin, end);
                        } else {
                            npt.select();
                            npt.selectionStart = begin;
                            npt.selectionEnd = android534 ? begin : end;
                        }
                    } else if (npt.createTextRange) {
                        var range = npt.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', begin);
                        range.select();
                    }
                    npt.focus();
                    if (android && end != npt.selectionEnd) caretposCorrection = { begin: begin, end: end };
                } else {
                    if (!$(input).is(':visible')) {
                        return { begin: 0, end: 0 };
                    }
                    var caretpos = android ? caretposCorrection : null, caretposCorrection = null;
                    if (caretpos == null) {
                        if (npt.setSelectionRange) {
                            begin = npt.selectionStart;
                            end = npt.selectionEnd;
                        } else if (document.selection && document.selection.createRange) {
                            var range = document.selection.createRange();
                            begin = 0 - range.duplicate().moveStart('character', -100000);
                            end = begin + range.text.length;
                        }
                        caretpos = { begin: begin, end: end };
                    }
                    return caretpos;
                }
            };

            function isComplete(buffer) {
                var complete = false;
                currentActiveMasksetIndex = activeMasksetIndex, highestValidPosition = 0;
                $.each(masksets, function (ndx, ms) {
                    activeMasksetIndex = ndx;
                    var aml = getMaskLength(buffer);
                    if (ms["lastValidPosition"] >= highestValidPosition && ms["lastValidPosition"] == (aml - 1)) {
                        var msComplete = true;
                        for (var i = 0; i < aml; i++) {
                            var mask = isMask(i);
                            if ((mask && buffer[i] == getPlaceHolder(i)) || (!mask && buffer[i] != getActiveBuffer()[i])) {
                                msComplete = false;
                                break;
                            }
                        }
                        complete = complete || msComplete;
                        if (complete) 
                            return false;
                    }
                    highestValidPosition = ms["lastValidPosition"];
                });
                activeMasksetIndex = currentActiveMasksetIndex; 
                return complete;
            }

            function mask(el) {
                var $input = $(el);
                if (!$input.is(":input")) return;

                var buffer = getActiveBuffer().slice();

                
                getActiveMaskSet()['greedy'] = getActiveMaskSet()['greedy'] ? getActiveMaskSet()['greedy'] : getActiveMaskSet()['repeat'] == 0;

                
                var maxLength = $input.prop('maxLength');
                if (getMaskLength(buffer) > maxLength && maxLength > -1) { 
                    if (maxLength < getActiveBuffer().length) getActiveBuffer().length = maxLength;
                    if (getActiveMaskSet()['greedy'] == false) {
                        getActiveMaskSet()['repeat'] = Math.round(maxLength / getActiveBuffer().length);
                    }
                    $input.prop('maxLength', getMaskLength(buffer) * 2);
                }

                
                $input.data('inputmask', {
                    'masksets': masksets,
                    'activeMasksetIndex': activeMasksetIndex,
                    'autoUnmask': opts.autoUnmask,
                    'definitions': opts.definitions,
                    'isRTL': false
                });

                patchValueProperty(el);

                
                var buffer = getActiveBuffer().slice(),
                undoBuffer = el._valueGet(),

                skipKeyPressEvent = false, 
                ignorable = false,
                lastPosition = -1,
                firstMaskPos = seekNext(buffer, -1),
                lastMaskPos = seekPrevious(buffer, getMaskLength(buffer)),
                isRTL = false;
                if (el.dir == "rtl" || opts.numericInput) {
                    el.dir = "ltr"
                    $input.css("text-align", "right");
                    $input.removeAttr("dir");
                    var inputData = $input.data('inputmask');
                    inputData['isRTL'] = true;
                    $input.data('inputmask', inputData);
                    isRTL = true;
                }

                
                $input.unbind(".inputmask");
                $input.removeClass('focus.inputmask');
                
                $input.bind("mouseenter.inputmask", function () {
                    var $input = $(this), input = this;
                    if (!$input.hasClass('focus.inputmask') && opts.showMaskOnHover) {
                        var nptL = input._valueGet().length;
                        if (nptL < buffer.length) {
                            if (nptL == 0)
                                buffer = getActiveBuffer().slice();
                            writeBuffer(input, buffer);
                        }
                    }
                }).bind("blur.inputmask", function () {
                    var $input = $(this), input = this, nptValue = input._valueGet();
                    $input.removeClass('focus.inputmask');
                    if (nptValue != undoBuffer) {
                        $input.change();
                    }
                    if (opts.clearMaskOnLostFocus && nptValue != '') {
                        if (nptValue == getActiveBuffer().join(''))
                            input._valueSet('');
                        else { 
                            clearOptionalTail(input, buffer);
                        }
                    }
                    if (!isComplete(buffer)) {
                        $input.trigger("incomplete");
                        if (opts.clearIncomplete) {
                            if (opts.clearMaskOnLostFocus)
                                input._valueSet('');
                            else {
                                buffer = getActiveBuffer().slice();
                                writeBuffer(input, buffer);
                            }
                        }
                    }
                }).bind("focus.inputmask", function () {
                    var $input = $(this), input = this, nptValue = input._valueGet();
                    if (opts.showMaskOnFocus && !$input.hasClass('focus.inputmask') && (!opts.showMaskOnHover || (opts.showMaskOnHover && nptValue == ''))) {
                        var nptL = nptValue.length;
                        if (nptL < buffer.length) {
                            if (nptL == 0)
                                buffer = getActiveBuffer().slice();
                            caret(input, checkVal(input, buffer, true));
                        }
                    }
                    $input.addClass('focus.inputmask');
                    undoBuffer = input._valueGet();
                }).bind("mouseleave.inputmask", function () {
                    var $input = $(this), input = this;
                    if (opts.clearMaskOnLostFocus) {
                        if (!$input.hasClass('focus.inputmask')) {
                            if (input._valueGet() == getActiveBuffer().join('') || input._valueGet() == '')
                                input._valueSet('');
                            else { 
                                clearOptionalTail(input, buffer);
                            }
                        }
                    }
                }).bind("click.inputmask", function () {
                    var input = this;
                    setTimeout(function () {
                        var selectedCaret = caret(input);
                        if (selectedCaret.begin == selectedCaret.end) {
                            var clickPosition = selectedCaret.begin;
                            lastPosition = checkVal(input, buffer, false);
                            determineInputDirection(input, selectedCaret);
                            if (isRTL)
                                caret(input, clickPosition > lastPosition && (isValid(clickPosition, buffer[clickPosition], buffer, true, isRTL) !== false || !isMask(clickPosition)) ? clickPosition : lastPosition);
                            else
                                caret(input, clickPosition < lastPosition && (isValid(clickPosition, buffer[clickPosition], buffer, true, isRTL) !== false || !isMask(clickPosition)) ? clickPosition : lastPosition);
                        }
                    }, 0);
                }).bind('dblclick.inputmask', function () {
                    var input = this;
                    setTimeout(function () {
                        caret(input, 0, lastPosition);
                    }, 0);
                }).bind("keydown.inputmask", keydownEvent
                ).bind("keypress.inputmask", keypressEvent
                ).bind("keyup.inputmask", keyupEvent
                ).bind(pasteEvent + ".inputmask dragdrop.inputmask drop.inputmask", function () {
                    var input = this;
                    setTimeout(function () {
                        caret(input, checkVal(input, buffer, true));
                        if (isComplete(buffer))
                            $input.trigger("complete");
                    }, 0);
                }).bind('setvalue.inputmask', function () {
                    var input = this;
                    undoBuffer = input._valueGet();
                    checkVal(input, buffer, true);
                    if (input._valueGet() == getActiveBuffer().join(''))
                        input._valueSet('');
                }).bind('complete.inputmask', opts.oncomplete)
                .bind('incomplete.inputmask', opts.onincomplete)
                .bind('cleared.inputmask', opts.oncleared);

                
                lastPosition = checkVal(el, buffer, true);

             
                var activeElement;
                try {
                    activeElement = document.activeElement;
                } catch (e) { }
                if (activeElement === el) { 
                    $input.addClass('focus.inputmask');
                    caret(el, lastPosition);
                } else if (opts.clearMaskOnLostFocus) {
                    if (el._valueGet() == getActiveBuffer().join('')) {
                        el._valueSet('');
                    } else {
                        clearOptionalTail(el, buffer);
                    }
                }

                installEventRuler(el);

                
                function installEventRuler(npt) {
                    var events = $._data(npt).events;

                    $.each(events, function (eventType, eventHandlers) {
                        $.each(eventHandlers, function (ndx, eventHandler) {
                            if (eventHandler.namespace == "inputmask") {
                                var handler = eventHandler.handler;
                                eventHandler.handler = function () {
                                    if (this.readOnly || this.disabled)
                                        return false;
                                    return handler.apply(this, arguments);
                                };
                            }
                        });
                    });
                }

                function patchValueProperty(npt) {
                    var valueProperty;
                    if (Object.getOwnPropertyDescriptor)
                        valueProperty = Object.getOwnPropertyDescriptor(npt, "value");
                    if (valueProperty && valueProperty.get) {
                        if (!npt._valueGet) {

                            npt._valueGet = valueProperty.get;
                            npt._valueSet = valueProperty.set;

                            Object.defineProperty(npt, "value", {
                                get: function () {
                                    var $self = $(this), inputData = $(this).data('inputmask'), masksets = inputData['masksets'],
                                    activeMasksetIndex = inputData['activeMasksetIndex'];
                                    return inputData && inputData['autoUnmask'] ? $self.inputmask('unmaskedvalue') : this._valueGet() != masksets[activeMasksetIndex]['_buffer'].join('') ? this._valueGet() : '';
                                },
                                set: function (value) {
                                    this._valueSet(value); $(this).triggerHandler('setvalue.inputmask');
                                }
                            });
                        }
                    } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                        if (!npt._valueGet) {
                            npt._valueGet = npt.__lookupGetter__("value");
                            npt._valueSet = npt.__lookupSetter__("value");

                            npt.__defineGetter__("value", function () {
                                var $self = $(this), inputData = $(this).data('inputmask'), masksets = inputData['masksets'],
                                    activeMasksetIndex = inputData['activeMasksetIndex'];
                                return inputData && inputData['autoUnmask'] ? $self.inputmask('unmaskedvalue') : this._valueGet() != masksets[activeMasksetIndex]['_buffer'].join('') ? this._valueGet() : '';
                            });
                            npt.__defineSetter__("value", function (value) {
                                this._valueSet(value); $(this).triggerHandler('setvalue.inputmask');
                            });
                        }
                    } else {
                        if (!npt._valueGet) {
                            npt._valueGet = function () { return this.value; }
                            npt._valueSet = function (value) { this.value = value; }
                        }
                        if ($.fn.val.inputmaskpatch != true) {
                            $.fn.val = function () {
                                if (arguments.length == 0) {
                                    var $self = $(this);
                                    if ($self.data('inputmask')) {
                                        if ($self.data('inputmask')['autoUnmask'])
                                            return $self.inputmask('unmaskedvalue');
                                        else {
                                            var result = $.inputmask.val.apply($self);
                                            var inputData = $(this).data('inputmask'), masksets = inputData['masksets'],
                                            activeMasksetIndex = inputData['activeMasksetIndex'];
                                            return result != masksets[activeMasksetIndex]['_buffer'].join('') ? result : '';
                                        }
                                    } else return $.inputmask.val.apply($self);
                                } else {
                                    var args = arguments;
                                    return this.each(function () {
                                        var $self = $(this);
                                        var result = $.inputmask.val.apply($self, args);
                                        if ($self.data('inputmask')) $self.triggerHandler('setvalue.inputmask');
                                        return result;
                                    });
                                }
                            };
                            $.extend($.fn.val, {
                                inputmaskpatch: true
                            });
                        }
                    }
                }

                function determineInputDirection(input, pos) {
                    
                    if (opts.numericInput && opts.radixPoint != "") {
                        var nptStr = input._valueGet();
                        var radixPosition = nptStr.indexOf(opts.radixPoint);
                        isRTL = pos.begin <= radixPosition || pos.end <= radixPosition || radixPosition == -1;
                    }
                }

                
                function shiftL(start, end, c) {
                    while (!isMask(start) && start - 1 >= 0) start--;
                    for (var i = start; i < end && i < getMaskLength(buffer) ; i++) {
                        if (isMask(i)) {
                            setReTargetPlaceHolder(buffer, i);
                            var j = seekNext(buffer, i);
                            var p = getBufferElement(buffer, j);
                            if (p != getPlaceHolder(j)) {
                                if (j < getMaskLength(buffer) && isValid(i, p, buffer, true, isRTL) !== false && getActiveTests()[determineTestPosition(i)].def == getActiveTests()[determineTestPosition(j)].def) {
                                    setBufferElement(buffer, i, getBufferElement(buffer, j));
                                    setReTargetPlaceHolder(buffer, j); 
                                } else {
                                    if (isMask(i))
                                        break;
                                }
                            } else if (c == undefined) break;
                        } else {
                            setReTargetPlaceHolder(buffer, i);
                        }
                    }
                    if (c != undefined)
                        setBufferElement(buffer, isRTL ? end : seekPrevious(buffer, end), c);

                    buffer = truncateInput(buffer.join(''), isRTL).split('');
                    if (buffer.length == 0) buffer = getActiveBuffer().slice();

                    return start; 
                }
                function shiftR(start, end, c, full) { 
                    for (var i = start; i <= end && i < getMaskLength(buffer) ; i++) {
                        if (isMask(i)) {
                            var t = getBufferElement(buffer, i);
                            setBufferElement(buffer, i, c);
                            if (t != getPlaceHolder(i)) {
                                var j = seekNext(buffer, i);
                                if (j < getMaskLength(buffer)) {
                                    if (isValid(j, t, buffer, true, isRTL) !== false && getActiveTests()[determineTestPosition(i)].def == getActiveTests()[determineTestPosition(j)].def)
                                        c = t;
                                    else {
                                        if (isMask(j))
                                            break;
                                        else c = t;
                                    }
                                } else break;
                            } else if (full !== true) break;
                        } else
                            setReTargetPlaceHolder(buffer, i);
                    }
                    var lengthBefore = buffer.length;
                    buffer = truncateInput(buffer.join(''), isRTL).split('');
                    if (buffer.length == 0) buffer = getActiveBuffer().slice();

                    return end - (lengthBefore - buffer.length);  
                };

                function keydownEvent(e) {
                    
                    skipKeyPressEvent = false;

                    var input = this, k = e.keyCode, pos = caret(input);

                    determineInputDirection(input, pos);

                    
                    if (k == opts.keyCode.BACKSPACE || k == opts.keyCode.DELETE || (iphone && k == 127)) {
                        var maskL = getMaskLength(buffer);
                        if (pos.begin == 0 && pos.end == maskL) { 
                            activeMasksetIndex = 0; 
                            buffer = getActiveBuffer().slice();
                            writeBuffer(input, buffer);
                            caret(input, checkVal(input, buffer, false));
                        } else if ((pos.end - pos.begin) > 1 || ((pos.end - pos.begin) == 1 && opts.insertMode)) { 
                            clearBuffer(buffer, pos.begin, pos.end);
                            determineActiveMasksetIndex(buffer, pos.begin, activeMasksetIndex);
                            writeBuffer(input, buffer, isRTL ? checkVal(input, buffer, false) : pos.begin);
                        } else { 
                            var beginPos = pos.begin;
                            if (k == opts.keyCode.DELETE) {
                                if (beginPos < firstMaskPos)
                                    beginPos = firstMaskPos;
                                if (beginPos < maskL) {
                                    if (opts.numericInput && opts.radixPoint != "" && buffer[beginPos] == opts.radixPoint) {
                                        beginPos = (buffer.length - 1 == beginPos)  ? beginPos : seekNext(buffer, beginPos);
                                        beginPos = shiftL(beginPos, maskL);
                                    } else {
                                        if (isRTL) {
                                            beginPos = shiftR(firstMaskPos, beginPos, getPlaceHolder(beginPos), true);
                                            beginPos = seekNext(buffer, beginPos);
                                        } else {
                                            beginPos = shiftL(beginPos, maskL);
                                        }
                                    }
                                    determineActiveMasksetIndex(buffer, beginPos, activeMasksetIndex);
                                    writeBuffer(input, buffer, beginPos);
                                }
                            } else if (k == opts.keyCode.BACKSPACE) { 
                                if (beginPos > firstMaskPos) {
                                    beginPos -= 1;
                                    if (opts.numericInput && opts.radixPoint != "" && buffer[beginPos] == opts.radixPoint) {
                                        beginPos = shiftR(firstMaskPos, (buffer.length - 1 == beginPos)  ? beginPos : beginPos - 1, getPlaceHolder(beginPos), true);
                                        beginPos++;
                                    } else {
                                        if (isRTL) {
                                            beginPos = shiftR(firstMaskPos, beginPos, getPlaceHolder(beginPos), true);
                                            beginPos = buffer[beginPos + 1] == opts.radixPoint ? beginPos + 1 : seekNext(buffer, beginPos);
                                        } else {
                                            beginPos = shiftL(beginPos, maskL);
                                        }
                                    }
                                    determineActiveMasksetIndex(buffer, beginPos, activeMasksetIndex);
                                    writeBuffer(input, buffer, beginPos);
                                }
                            }
                        }
                        if (input._valueGet() == getActiveBuffer().join(''))
                            $(input).trigger('cleared');

                        e.preventDefault(); 
                    } else if (k == opts.keyCode.END || k == opts.keyCode.PAGE_DOWN) { 
                        setTimeout(function () {
                            var caretPos = checkVal(input, buffer, false, true);
                            if (!opts.insertMode && caretPos == getMaskLength(buffer) && !e.shiftKey) caretPos--;
                            caret(input, e.shiftKey ? pos.begin : caretPos, caretPos);
                        }, 0);
                    } else if (k == opts.keyCode.HOME || k == opts.keyCode.PAGE_UP) {
                        caret(input, 0, e.shiftKey ? pos.begin : 0);
                    }
                    else if (k == opts.keyCode.ESCAPE) {
                        input._valueSet(undoBuffer);
                        caret(input, 0, checkVal(input, buffer));
                    } else if (k == opts.keyCode.INSERT) {
                        opts.insertMode = !opts.insertMode;
                        caret(input, !opts.insertMode && pos.begin == getMaskLength(buffer) ? pos.begin - 1 : pos.begin);
                    } else if (e.ctrlKey && k == 88) {
                        setTimeout(function () {
                            caret(input, checkVal(input, buffer, true));
                        }, 0);
                    } else if (!opts.insertMode) { 
                        if (k == opts.keyCode.RIGHT) {
                            var caretPos = pos.begin == pos.end ? pos.end + 1 : pos.end;
                            caretPos = caretPos < getMaskLength(buffer) ? caretPos : pos.end;
                            caret(input, e.shiftKey ? pos.begin : caretPos, e.shiftKey ? caretPos + 1 : caretPos);
                        } else if (k == opts.keyCode.LEFT) {
                            var caretPos = pos.begin - 1;
                            caretPos = caretPos > 0 ? caretPos : 0;
                            caret(input, caretPos, e.shiftKey ? pos.end : caretPos);
                        }
                    }

                    opts.onKeyDown.call(this, e, buffer, opts); 
                    ignorable = $.inArray(k, opts.ignorables) != -1;
                }

                function keypressEvent(e) {
                    
                    if (skipKeyPressEvent) return false;
                    skipKeyPressEvent = true;

                    var input = this, $input = $(input);

                    e = e || window.event;
                    var k = e.which || e.charCode || e.keyCode,
                        c = String.fromCharCode(k);

                    if (opts.numericInput && c == opts.radixPoint) {
                        var nptStr = input._valueGet();
                        var radixPosition = nptStr.indexOf(opts.radixPoint);
                        caret(input, seekNext(buffer, radixPosition != -1 ? radixPosition : getMaskLength(buffer)));
                    }

                    if (e.ctrlKey || e.altKey || e.metaKey || ignorable) {
                        return true;
                    } else {
                        if (k) {
                            $input.trigger('input');

                            var pos = caret(input), maskL = getMaskLength(buffer), writeOutBuffer = true;
                            clearBuffer(buffer, pos.begin, pos.end);

                            if (isRTL) {
                                var p = seekPrevious(buffer, pos.end), np;
                                if ((np = isValid(p == maskL || getBufferElement(buffer, p) == opts.radixPoint ? seekPrevious(buffer, p) : p, c, buffer, false, isRTL)) !== false) {
                                    var refresh = false;
                                    if (np !== true) {
                                        refresh = np["refresh"]; 
                                        p = np.pos != undefined ? np.pos : p; 
                                        c = np.c != undefined ? np.c : c; 
                                    }
                                    if (refresh !== true) {
                                        maskL = getMaskLength(buffer); 
                                        var firstUnmaskedPosition = firstMaskPos;
                                        if (opts.insertMode == true) {
                                            if (getActiveMaskSet()['greedy'] == true) {
                                                var bfrClone = buffer.slice();
                                                while (getBufferElement(bfrClone, firstUnmaskedPosition, true) != getPlaceHolder(firstUnmaskedPosition) && firstUnmaskedPosition <= p) {
                                                    firstUnmaskedPosition = firstUnmaskedPosition == maskL ? (maskL + 1) : seekNext(buffer, firstUnmaskedPosition);
                                                }
                                            }
                                            if (firstUnmaskedPosition <= p && (getActiveMaskSet()['greedy'] || buffer.length < maskL)) {
                                                if (buffer[firstMaskPos] != getPlaceHolder(firstMaskPos) && buffer.length < maskL) {
                                                    var offset = prepareBuffer(buffer, -1, isRTL);
                                                    if (pos.end != 0) p = p + offset;
                                                    maskL = buffer.length;
                                                }
                                                shiftL(firstUnmaskedPosition, p, c);
                                            } else writeOutBuffer = false;
                                        } else setBufferElement(buffer, p, c);
                                    }

                                    if (writeOutBuffer) {
                                        writeBuffer(input, buffer, opts.numericInput ? p + 1 : p);
                                        setTimeout(function () { 
                                            if (isComplete(buffer))
                                                $input.trigger("complete");
                                        }, 0);
                                    }
                                } else if (android) writeBuffer(input, buffer, pos.begin);
                            }
                            else {
                                var p = seekNext(buffer, pos.begin - 1), np;
                                prepareBuffer(buffer, p, isRTL);
                                if ((np = isValid(p, c, buffer, false, isRTL)) !== false) {
                                    var refresh = false;
                                    if (np !== true) {
                                        refresh = np["refresh"]; 
                                        p = np.pos != undefined ? np.pos : p; 
                                        c = np.c != undefined ? np.c : c; 
                                    }
                                    if (refresh !== true) {
                                        if (opts.insertMode == true) {
                                            var lastUnmaskedPosition = getMaskLength(buffer);
                                            var bfrClone = buffer.slice();
                                            while (getBufferElement(bfrClone, lastUnmaskedPosition, true) != getPlaceHolder(lastUnmaskedPosition) && lastUnmaskedPosition >= p) {
                                                lastUnmaskedPosition = lastUnmaskedPosition == 0 ? -1 : seekPrevious(buffer, lastUnmaskedPosition);
                                            }
                                            if (lastUnmaskedPosition >= p)
                                                shiftR(p, buffer.length, c);
                                            else writeOutBuffer = false;
                                        } else setBufferElement(buffer, p, c);
                                    }
                                    if (writeOutBuffer) {
                                        var next = seekNext(buffer, p);
                                        writeBuffer(input, buffer, next);

                                        setTimeout(function () { 
                                            if (isComplete(buffer))
                                                $input.trigger("complete");
                                        }, 0);
                                    }
                                } else if (android) writeBuffer(input, buffer, pos.begin);
                            }
                            e.preventDefault();
                        }
                    }
                }

                function keyupEvent(e) {
                    var $input = $(this), input = this;
                    var k = e.keyCode;
                    opts.onKeyUp.call(this, e, buffer, opts); 
                    if (k == opts.keyCode.TAB && $input.hasClass('focus.inputmask') && input._valueGet().length == 0 && opts.showMaskOnFocus) {
                        buffer = getActiveBuffer().slice();
                        writeBuffer(input, buffer);
                        if (!isRTL) caret(input, 0);
                        undoBuffer = input._valueGet();
                    }
                }
            }

            return this; 
        };
    }
})(jQuery);