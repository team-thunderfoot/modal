(()=>{var e={226:(e,t,s)=>{e.exports=s(687)},687:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});const o=class{_getElements(e){return"object"==typeof e?[e]:document.querySelectorAll(e)}hide(e){this._hideElements(this._getElements(e))}_hideElements(e){var t,s=e.length;for(t=0;t<s;t++)this._hideElement(e[t])}_hideElement(e){this._styleElement(e,"display","none")}show(e,t){var s=this._getElements(e);t&&this._hideElements(s),this._showElements(s)}_showElements(e){var t,s=e.length;for(t=0;t<s;t++)this._showElement(e[t])}_showElement(e){this._styleElement(e,"display","block")}addStyle(e,t,s){this._styleElements(this._getElements(e),t,s)}_styleElements(e,t,s){var o,a=e.length;for(o=0;o<a;o++)this._styleElement(e[o],t,s)}_styleElement(e,t,s){e.style.setProperty(t,s)}toggleShow(e){var t,s=this._getElements(e),o=s.length;for(t=0;t<o;t++)"none"==s[t].style.display?this._styleElement(s[t],"display","block"):this._styleElement(s[t],"display","none")}addClass(e,t){this._addClassElements(this._getElements(e),t)}_addClassElements(e,t){var s,o=e.length;for(s=0;s<o;s++)this._addClassElement(e[s],t)}_addClassElement(e,t){var s,o,a;for(o=e.className.split(" "),a=t.split(" "),s=0;s<a.length;s++)-1==o.indexOf(a[s])&&(e.className+=" "+a[s])}removeClass(e,t){this._removeClassElements(this._getElements(e),t)}_removeClassElements(e,t){var s,o=e.length;for(s=0;s<o;s++)this._removeClassElement(e[s],t)}_removeClassElement(e,t){var s,o,a;for(o=e.className.split(" "),a=t.split(" "),s=0;s<a.length;s++)for(;o.indexOf(a[s])>-1;)o.splice(o.indexOf(a[s]),1);e.className=o.join(" ")}toggleClass(e,t,s){this._toggleClassElements(this._getElements(e),t,s)}_toggleClassElements(e,t,s){var o,a=e.length;for(o=0;o<a;o++)this._toggleClassElement(e[o],t,s)}_toggleClassElement(e,t,s){var o,a,i,r,l,n,d;if(a=s||"",i=(o=t||"").split(" "),r=a.split(" "),n=e.className.split(" "),0==r.length){for(d=!0,l=0;l<i.length;l++)-1==n.indexOf(i[l])&&(d=!1);d?this._removeClassElement(e,o):this._addClassElement(e,o)}else{for(d=!0,l=0;l<i.length;l++)-1==n.indexOf(i[l])&&(d=!1);d?(this._removeClassElement(e,o),this._addClassElement(e,a)):(this._removeClassElement(e,a),this._addClassElement(e,o))}}getBrowser(e){switch(e){case"chrome":return-1!=navigator.userAgent.indexOf("Chrome")&&!navigator.userAgent.match(/edg/i)||navigator.userAgent.indexOf("CriOS")>=0;case"safari":return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!(navigator.userAgent.indexOf("CriOS")>=0);case"firefox":return"undefined"!=typeof InstallTrigger;case"ie":return!!document.documentMode;case"edge":return!(!navigator.userAgent.match(/edg/i)&&-1==navigator.userAgent.indexOf("Edge/"));default:return null}}getTypeDevice(e){var t=navigator.userAgent||navigator.vendor||window.opera;switch(e){case"touch":return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;case"android":return/android/i.test(t);case"ios":return"boolean"==typeof navigator.standalone;default:return null}}filterHTML(e,t,s){var o,a,i,r,l,n,d;for(o=this._getElements(e),r=0;r<o.length;r++)for(a=o[r].querySelectorAll(t),l=0;l<a.length;l++){for(d=0,a[l].innerText.toUpperCase().indexOf(s.toUpperCase())>-1&&(d=1),i=a[l].getElementsByTagName("*"),n=0;n<i.length;n++)i[n].innerText.toUpperCase().indexOf(s.toUpperCase())>-1&&(d=1);1==d?this.addStyle(a[l],"display","block"):this.addStyle(a[l],"display","none")}}matches(e,t,s="class"){if(!e)return!1;if(Array.isArray(t)){if("class"!==s){const o=e.getAttribute(s);return t.some((e=>e===o))}{const s=e.classList;if(s){const e=Array.from(s);return t.some((t=>e.includes(t)))}}}else{if("class"!==s)return e.getAttribute(s)===t;{const s=e.classList;if(s){const e=Array.from(s).join(" "),o=new RegExp(`\\b${t}\\b`);return null!==e.match(o)}}}return!1}sortArray(e,t="alphabetical"){return"alphabetical"===t?e.sort(((e,t)=>{const s=e.toLowerCase(),o=t.toLowerCase();return s<o?-1:s>o?1:0})):"number"===t?e.sort(((e,t)=>e-t)):(console.error("Invalid sorting type. Please choose 'alphabetical' or 'number'."),e)}}}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=s(226);new class{constructor(){this.init()}init(){const t=new class{constructor(t){this.backdrop=t.backdrop,this.backdropActiveClass=t.backdropActiveClass,this.modal=t.modal,this.modalActiveClass=t.modalActiveClass,this.modalID=t.modalIdTarget,this.timeBackDrop=0,this.timeModal=0,this.onshow=t.onShow,this.onhide=t.onHide,this.JSUTIL=new e.default,this.init(),this.events()}init(){}events(){document.querySelectorAll(`[tf-ds-modal-target='${this.modalID}']`).forEach((e=>{e.addEventListener("click",(e=>this.show()))})),document.querySelectorAll(`[tf-ds-modal-close='${this.modalID}']`).forEach((e=>{e.addEventListener("click",(e=>this.hide()))}))}async hide(){if(await this.tf_sto(this.timeModal),this.JSUTIL.removeClass(document.getElementById(`${this.modalID}`),this.modalActiveClass),await this.tf_sto(this.timeBackDrop),this.JSUTIL.removeClass(document.querySelector(`.${this.backdrop}`),this.backdropActiveClass),await this.tf_sto(this.timeBackDrop),document.querySelector(`.${this.backdrop}`)){var e=document.querySelector(`.${this.backdrop}`);e.parentNode.removeChild(e)}this.onhide&&this.onhide()}async show(e){var t=document.createElement("div");t.className=this.backdrop,document.body.appendChild(t);const s=getComputedStyle(document.querySelector(`.${this.backdrop}`));Object.keys(s).forEach((e=>{"transitionDuration"==e&&(this.timeBackDrop=s[e])})),this.timeBackDropSplit=String(this.timeBackDrop).split("s"),this.timeBackDrop=1e3*parseFloat(this.timeBackDropSplit[0]);const o=getComputedStyle(document.querySelector(`.${this.modal}`));Object.keys(o).forEach((e=>{"transitionDuration"==e&&(this.timeModal=o[e])})),this.timeModalSplit=String(this.timeModal).split("s"),this.timeModal=1e3*parseFloat(this.timeModalSplit[0]),await this.tf_sto(this.timeBackDrop),this.JSUTIL.toggleClass(document.querySelector(`.${this.backdrop}`),this.backdropActiveClass),await this.tf_sto(this.timeModal),this.JSUTIL.toggleClass(document.getElementById(this.modalID),this.modalActiveClass),document.querySelector(`.${this.backdrop}`)&&document.querySelector(`.${this.backdrop}`).addEventListener("click",(e=>this.hide())),this.onshow&&this.onshow()}async tf_sto(e){return new Promise(((t,s)=>{isNaN(e)?s(new Error("is not a number")):setTimeout(t,e)}))}destroy(){document.querySelectorAll(`[tf-ds-modal-target='${this.modalID}']`).forEach((e=>{e.removeEventListener("click",(e=>this.show()))})),document.querySelectorAll(`[tf-ds-modal-close='${this.modalID}']`).forEach((e=>{e.removeEventListener("click",(e=>this.hide()))})),this.JSUTIL.removeClass(document.querySelector(`.${this.modal}`),this.modal),this.JSUTIL=null}}({backdrop:"c--modal-backdrop-a",backdropActiveClass:"c--modal-backdrop-a--is-active",modal:"c--modal-a",modalIdTarget:"modal-1",modalActiveClass:"c--modal-a--is-active",onHide:()=>{},onShow:()=>{}});document.querySelector(".js--destroy-modal").addEventListener("click",(e=>{e.preventDefault(),t.destroy()}))}}})()})();