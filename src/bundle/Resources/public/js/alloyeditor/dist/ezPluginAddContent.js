!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ezPluginAddContent=t():(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezPluginAddContent=t())}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=57)}({57:function(e,t,n){"use strict";!function(e){if(!e.CKEDITOR.plugins.get("ezaddcontent")){var t=function(e,t,n,o){var r=e.createElement(t);return r.setAttributes(o),r.setHtml(n||"<br>"),r},n=function(e,t){var n={editor:e,target:t.$,name:"eZAddContentDone"};e.fire("editorInteraction",{nativeEvent:n,selectionData:e.getSelectionData()})},o=function(e,t){var n=e.elementPath();if(n&&n.block){var o=n.elements;t.insertAfter(o[o.length-2])}else e.widgets&&e.widgets.focused?t.insertAfter(e.widgets.focused.wrapper):e.insertElement(t)},r={exec:function(e,r){var i=t(e.document,r.tagName,r.content,r.attributes),u=i;o(e,u),r.focusElement&&(u=i.findOne(r.focusElement)),e.eZ.moveCaretToElement(e,u),n(e,u)}};e.CKEDITOR.plugins.add("ezaddcontent",{requires:["ezcaret"],init:function(e){e.eZ=e.eZ||{},e.eZ.appendElement=o.bind(e,e),e.addCommand("eZAddContent",r)}})}}(window)}}).default});
//# sourceMappingURL=ezPluginAddContent.js.map