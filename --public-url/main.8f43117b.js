parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}var n=function(){function t(a){e(this,t),this.selector=a.selector,this.targetDate=a.targetDate}return a(t,[{key:"StartCoutn",value:function(){var e=this;console.log(this.targetDate),daysValElem=document.querySelector("".concat(this.selector,' [data-value="days"]')),hoursValElem=document.querySelector("".concat(this.selector,' [data-value="hours"]')),minsValElem=document.querySelector("".concat(this.selector,' [data-value="mins"]')),secsValElem=document.querySelector("".concat(this.selector,' [data-value="secs"]')),setInterval(function(){var t=e.targetDate.getTime()-Date.now(),a=e.getTimeComponents(t),n=a.days,o=a.hours,r=a.mins,s=a.secs;daysValElem.textContent=n,hoursValElem.textContent=o,minsValElem.textContent=r,secsValElem.textContent=s},1e3)}},{key:"getTimeComponents",value:function(e){return{days:Math.floor(e/864e5),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}}]),t}(),o=new n({selector:"#timer-1",targetDate:new Date("Jan 01, 2021")});o.StartCoutn();
},{}]},{},["epB2"], null)