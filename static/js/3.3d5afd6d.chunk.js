(window.webpackJsonpmyapp=window.webpackJsonpmyapp||[]).push([[3],{348:function(e,t,n){e.exports=n.p+"static/media/logo.10919850.svg"},349:function(e,t,n){e.exports=n.p+"static/media/man-mobile.2afa7771.svg"},350:function(e,t,n){e.exports=n.p+"static/media/html.d882d855.svg"},351:function(e,t,n){e.exports=n.p+"static/media/css.29637879.svg"},352:function(e,t,n){e.exports=n.p+"static/media/javascript.cf53a810.svg"},353:function(e,t,n){e.exports=n.p+"static/media/man-laptop-v1.3cdf7897.svg"},354:function(e,t,n){e.exports=n(355)},355:function(e,t,n){"use strict";var a,r=(a=n(0))&&"object"==typeof a&&"default"in a?a.default:a,o=n(41);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var r=n[a],o=Object.getOwnPropertyDescriptor(t,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}}(e.prototype.constructor=e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e,t,n,a,r,o,s,l){if(!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,a,r,o,s,l],u=0;(i=new Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}};function u(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select()}}var m={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},p="_";function d(e,t,n){var a="",r="",o=null,s=[];if(void 0===t&&(t=p),null==n&&(n=m),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(e){l=!l&&"\\"===e||(l||!n[e]?(s.push(a.length),a.length===s.length-1&&(r+=e)):o=a.length+1,a+=e,!1)}),{maskChar:t,formatChars:n,prefix:r,mask:a,lastEditablePosition:o,permanents:s}}function f(e,t){return-1!==e.permanents.indexOf(t)}function g(e,t,n){var a=e.mask,r=e.formatChars;if(!n)return!1;if(f(e,t))return a[t]===n;var o=r[a[t]];return new RegExp(o).test(n)}function h(e,t){return t.split("").every(function(t,n){return f(e,n)||!g(e,n,t)})}function v(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&f(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var r=a.length,o=t.length;o>=a.length;o--){var s=t[o];if(!f(e,o)&&g(e,o,s)){r=o+1;break}}return r}function E(e,t){return v(e,t)===e.mask.length}function y(e,t){var n=e.maskChar,a=e.mask,r=e.prefix;if(!n){for((t=b(e,"",t,0)).length<r.length&&(t=r);t.length<a.length&&f(e,t.length);)t+=a[t.length];return t}if(t)return b(e,y(e,""),t,0);for(var o=0;o<a.length;o++)f(e,o)?t+=a[o]:t+=n;return t}function b(e,t,n,a){var r=e.mask,o=e.maskChar,s=e.prefix,l=n.split(""),i=E(e,t);return!o&&a>t.length&&(t+=r.slice(t.length,a)),l.every(function(n){for(;u=n,f(e,c=a)&&u!==r[c];){if(a>=t.length&&(t+=r[a]),l=n,o&&f(e,a)&&l===o)return!0;if(++a>=r.length)return!1}var l,c,u;return!g(e,a,n)&&n!==o||(a<t.length?t=o||i||a<s.length?t.slice(0,a)+n+t.slice(a+1):(t=t.slice(0,a)+n+t.slice(a),y(e,t)):o||(t+=n),++a<r.length)}),t}function k(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!f(e,a))return a;return null}function N(e){return e||0===e?e+"":""}function w(e,t,n,a,r){var o=e.mask,s=e.prefix,l=e.lastEditablePosition,i=t,c="",u=0,m=0,p=Math.min(r.start,n.start);return n.end>r.start?m=(u=function(e,t,n,a){var r=e.mask,o=e.maskChar,s=n.split(""),l=a;return s.every(function(t){for(;s=t,f(e,n=a)&&s!==r[n];)if(++a>=r.length)return!1;var n,s;return(g(e,a,t)||t===o)&&a++,a<r.length}),a-l}(e,0,c=i.slice(r.start,n.end),p))?r.length:0:i.length<a.length&&(m=a.length-i.length),i=a,m&&(1!==m||r.length||(p=r.start===n.start?k(e,n.start):function(e,t){for(var n=t;0<=n;--n)if(!f(e,n))return n;return null}(e,n.start)),i=function(e,t,n,a){var r=n+a,o=e.maskChar,s=e.mask,l=e.prefix,i=t.split("");if(o)return i.map(function(t,a){return a<n||r<=a?t:f(e,a)?s[a]:o}).join("");for(var c=r;c<i.length;c++)f(e,c)&&(i[c]="");return n=Math.max(l.length,n),i.splice(n,r-n),t=i.join(""),y(e,t)}(e,i,p,m)),i=b(e,i,c,p),(p+=u)>=o.length?p=o.length:p<s.length&&!u?p=s.length:p>=s.length&&p<l&&u&&(p=k(e,p)),c||(c=null),{value:i=y(e,i),enteredString:c,selection:{start:p,end:p}}}function C(e){return"function"==typeof e}function O(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function S(e){return(O()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function x(e){(O()||clearTimeout)(e)}var I=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=S(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(x(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=o.findDOMNode(i(i(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=v(n.maskOptions,n.value),t=k(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,a){void 0===a&&(a={});var r=n.getInputDOMNode(),o=n.isFocused();r&&o&&(a.deferred||u(r,e,t),null!==n.selectionDeferId&&x(n.selectionDeferId),n.selectionDeferId=S(function(){n.selectionDeferId=null,u(r,e,t)}),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,a=e.maskChar,r=e.permanents,o=e.formatChars;return{mask:t,maskChar:a,permanents:r,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:o}},n.isInputAutofilled=function(e,t,a,r){var o=n.getInputDOMNode();try{if(o.matches(":-webkit-autofill"))return!0}catch(c){}return!n.focused||r.end<a.length&&t.end===e.length},n.onChange=function(e){var t=i(i(n)).beforePasteState,a=i(i(n)).previousSelection,r=n.props.beforeMaskedValueChange,o=n.getInputValue(),s=n.value,l=n.getSelection();n.isInputAutofilled(o,l,s,a)&&(s=y(n.maskOptions,""),a={start:0,end:0,length:0}),t&&(a=t.selection,s=t.value,l={start:a.start+o.length,end:a.start+o.length,length:0},o=s.slice(0,a.start)+o+s.slice(a.end),n.beforePasteState=null);var c=w(n.maskOptions,o,l,s,a),u=c.enteredString,m=c.selection,p=c.value;if(C(r)){var d=r({value:p,selection:m},{value:s,selection:a},u,n.getBeforeMaskedValueChangeConfig());p=d.value,m=d.selection}n.setInputValue(p),C(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(m.start,m.end,{deferred:!0}):n.setSelection(m.start,m.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions,r=a.mask,o=a.prefix;if(n.focused=!0,n.mounted=!0,r){if(n.value)v(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var s=y(n.maskOptions,o),l=y(n.maskOptions,s),i=v(n.maskOptions,l),c=k(n.maskOptions,i),u={start:c,end:c};if(C(t)){var m=t({value:l,selection:u},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());l=m.value,u=m.selection}var p=l!==n.getInputValue();p&&n.setInputValue(l),p&&C(n.props.onChange)&&n.props.onChange(e),n.setSelection(u.start,u.end)}n.runSaveSelectionLoop()}C(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,a&&!n.props.alwaysShowMask&&h(n.maskOptions,n.value)){var r="";C(t)&&(r=t({value:r,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var o=r!==n.getInputValue();o&&n.setInputValue(r),o&&C(n.props.onChange)&&n.props.onChange(e)}C(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){if(!n.focused&&document.addEventListener){n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",function e(t){if(document.removeEventListener("mouseup",e),n.focused){var a=Math.abs(t.clientX-n.mouseDownX),r=Math.abs(t.clientY-n.mouseDownY),o=Math.max(a,r),s=(new Date).getTime()-n.mouseDownTime;(o<=10&&s<=200||o<=5&&s<=300)&&n.setCursorToEnd()}})}C(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){C(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&C(n.props.inputRef)&&n.props.inputRef(e)};var a=t.mask,r=t.maskChar,s=t.formatChars,l=t.alwaysShowMask,c=t.beforeMaskedValueChange,m=t.defaultValue,p=t.value;n.maskOptions=d(a,r,s),null==m&&(m=""),null==p&&(p=m);var f=N(p);if(n.maskOptions.mask&&(l||f)&&(f=y(n.maskOptions,f),C(c))){var g=t.value;null==t.value&&(g=m),f=c({value:f,selection:null},{value:g=N(g),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=f,n}l(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,r=t.mask,o=t.maskChar,s=t.formatChars,l=this.maskOptions,i=a||this.isFocused(),c=null!=this.props.value,u=c?N(this.props.value):this.value,m=e?e.start:null;if(this.maskOptions=d(r,o,s),this.maskOptions.mask){!l.mask&&this.isFocused()&&this.runSaveSelectionLoop();var p=this.maskOptions.mask&&this.maskOptions.mask!==l.mask;if(l.mask||c||(u=this.getInputValue()),(p||this.maskOptions.mask&&(u||i))&&(u=y(this.maskOptions,u)),p){var f=v(this.maskOptions,u);(null===m||f<m)&&(m=E(this.maskOptions,u)?f:k(this.maskOptions,f))}!this.maskOptions.mask||!h(this.maskOptions,u)||i||c&&this.props.value||(u="");var g={start:m,end:m};if(C(n)){var b=n({value:u,selection:g},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());u=b.value,g=b.selection}this.value=u;var w=this.getInputValue()!==this.value;w?(this.setInputValue(this.value),this.forceUpdate()):p&&this.forceUpdate();var O=!1;null!=g.start&&null!=g.end&&(O=!e||e.start!==g.start||e.end!==g.end),(O||w)&&this.setSelection(g.start,g.end)}else l.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&x(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){C(n)||c(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],l=s({},a);o.forEach(function(e){return delete l[e]}),e=n(l),o.filter(function(t){return null!=e.props[t]&&e.props[t]!==a[t]}).length&&c(!1)}else e=r.createElement("input",s({ref:this.handleRef},a));var i={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(i.onChange=this.onChange,i.onPaste=this.onPaste,i.onMouseDown=this.onMouseDown),null!=a.value&&(i.value=this.value)),e=r.cloneElement(e,i)},t}(r.Component);e.exports=I},356:function(e,t,n){e.exports=n.p+"static/media/mail.ae7e47dd.svg"},357:function(e,t,n){e.exports=n.p+"static/media/cellphone.1a0fe3e3.svg"},358:function(e,t,n){e.exports=n.p+"static/media/phone.ca2f60a3.svg"},359:function(e,t,n){e.exports=n.p+"static/media/facebook.20caa7d0.svg"},360:function(e,t,n){e.exports=n.p+"static/media/instagram.f263dbf1.svg"},361:function(e,t,n){e.exports=n.p+"static/media/linkedin.569eb74a.svg"},362:function(e,t,n){e.exports=n.p+"static/media/twitter.3e993ec3.svg"},363:function(e,t,n){e.exports=n.p+"static/media/pinterest.603e7eb0.svg"},364:function(e,t,n){e.exports=n.p+"static/media/user-superstar-2x.0592ecbe.jpg"},365:function(e,t,n){e.exports=n.p+"static/media/sign-out.a9a773c4.svg"},366:function(e,t,n){e.exports=n.p+"static/media/line-menu.3b500131.svg"},367:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);var o=function(){return r.a.createElement("div",{className:"assignment"},r.a.createElement("div",{className:"assignment-layout"},r.a.createElement("div",{className:"assignment-info-block"},r.a.createElement("h1",{className:"assignment-header"},"Test assignment for Frontend Developer position"),r.a.createElement("p",{className:"assignment-text"},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!"),r.a.createElement("button",{onClick:function(){return function(e){var t=document.getElementById(e);if(t){window.scroll(0,0);var n=t.getBoundingClientRect();window.scroll(n.x,n.y-174)}}("agencySignUp")},className:"assignment-button"},"Sign Up"))))},s=n(349),l=n.n(s),i=n(9);var c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"agencyAbout",className:"get-quainted-first-block"},r.a.createElement("h2",{className:"headerH2Mobile"},"Let's get ac quainted"),r.a.createElement("div",{className:"get-quainted-first-block-img"},r.a.createElement("img",{src:l.a,alt:""})),r.a.createElement("div",{className:"get-quainted-first-block-info"},r.a.createElement("h2",null,"Let's get ac quainted"),r.a.createElement("h3",null,"I am cool frontend developer"),r.a.createElement("div",{className:"get-quainted-first-block-info-text"},r.a.createElement("p",null,"When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load."),r.a.createElement("p",null,"Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.")),r.a.createElement(i.b,{onClick:function(){return function(e){var t=document.getElementById(e);if(t){window.scroll(0,0);var n=t.getBoundingClientRect();window.scroll(n.x,n.y-174)}}("agencySignUp")},to:"/agency/main/signUp",className:"get-quainted-first-block-info-signup"},"Sign Up"))))},u=n(350),m=n.n(u),p=n(351),d=n.n(p),f=n(352),g=n.n(f);var h=function(e){var t=e.data,n=t.img,a=t.h3,o=t.p;return t.width,r.a.createElement("div",{className:"getQuaintedSecondBlockItem"},r.a.createElement("img",{src:n,alt:""}),r.a.createElement("div",{className:"getQuaintedSecondBlockItemText"},r.a.createElement("h3",null,a),r.a.createElement("p",null,o)))},v=[{img:m.a,h3:"I'm in love with HTML",p:"Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications."},{img:d.a,h3:"CSS is my best friend",p:"Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation \nof a document written in a markup language \nlike HTML."},{img:g.a,h3:"JavaScript is my passion",p:"JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."}];var E=function(){return r.a.createElement("div",{id:"agencyRelationships",className:"getQuaintedSecondBlock"},r.a.createElement("h2",{className:"getQuaintedSecondBlockH2"},"About my relationships with web-development"),r.a.createElement("div",{className:"getQuaintedSecondBlockItems"},v.map(function(e){return r.a.createElement(h,{key:e.h3+e.p,data:e})})))};var y=function(){return r.a.createElement("div",{className:"get-quainted"},r.a.createElement(c,null),r.a.createElement(E,null))},b=n(353),k=n.n(b);var N=function(){return r.a.createElement("div",{id:"agencyRequirements",className:"requirements"},r.a.createElement("h2",{className:"requirementsHeader"},"General requirements for the test task"),r.a.createElement("div",{className:"requirementsBlock"},r.a.createElement("div",{className:"requirementsTextBlock"},r.a.createElement("p",null,"Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too."),r.a.createElement("p",null," If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics."),r.a.createElement("p",null,"Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.")),r.a.createElement("div",{className:"requirementsImage"},r.a.createElement("img",{src:k.a,alt:""}))))},w=n(19),C=n(20),O=n(23),S=n(21),x=n(22),I=n(16),P=function(e){var t=e.img,n=e.name,a=e.position,o=e.email,s=e.phone,l=e.i,i=e.showed;return r.a.createElement("div",{className:" ".concat(l<3?"cheerfulUser":i?"cheerfulUser mobile active":"cheerfulUser mobile")},r.a.createElement("div",{className:"cheerfulUserImg"},r.a.createElement("img",{src:t,alt:""})),r.a.createElement("div",{className:"cheerfulUserInfo"},r.a.createElement("h3",{className:"cheerfulUserName"},n),r.a.createElement("p",{className:"cheerfulUserPosition"},a),r.a.createElement("p",{className:"cheerfulUserEmail"},o.length>50?o.slice(0,50)+"...":o),r.a.createElement("p",{className:"cheerfulUserPhone"},s)))},U=function(e){var t=e.users,n=Object(a.useState)(!1),o=Object(I.a)(n,2),s=o[0],l=o[1];return r.a.createElement("div",{className:"cheerfulUsers"},r.a.createElement("h2",null,"Our cheerful users"),r.a.createElement("h4",null,"Attention! Sorting users by registration date"),r.a.createElement("div",{className:"cheerfulUsersBlock"},t&&t.map(function(e,t){return r.a.createElement(P,{key:e.email+e.name,i:t,img:e.photo,name:e.name,position:e.position,email:e.email,phone:e.phone,showed:s})})),r.a.createElement("button",{onClick:function(){return l(!s)},className:"cheerfulUsersBtn"},"Show more"))},A=n(142),j=n(143),M=n(354),R=n.n(M),T=function(e){var t,n=(t=e.input.name).charAt(0).toUpperCase()+t.slice(1);return r.a.createElement("div",{onClick:function(e){e.target.parentNode.lastElementChild.style.top="-12px",e.target.parentNode.lastElementChild.style.zIndex=1},className:"formRegisterToJob".concat(n)},r.a.createElement("div",{className:"formRegisterToJob".concat(n,"Input")},r.a.createElement("input",Object.assign({onBlur:function(e){console.log(e.target,e.target.valueOf),""===e.target.value&&(e.target.parentNode.lastElementChild.style.top="10px",e.target.parentNode.lastElementChild.style.zIndex=-1)},type:e.type,pattern:e.mask},e.input)),r.a.createElement("div",null,n)),r.a.createElement("div",{className:"formRegisterToJobNameError"},e.error&&r.a.createElement("span",{className:"formRegisterToJobError"},e.error)))},D=function(e){return r.a.createElement("div",{className:"formRegisterToJobName"},r.a.createElement("div",{onClick:function(e){e.target.parentNode.lastElementChild.style.top="-12px",e.target.parentNode.lastElementChild.style.zIndex=1},className:"formRegisterToJobPhoneInput"},r.a.createElement(R.a,Object.assign({className:e.className,maskChar:"-",mask:"+38 ( 099 \\) 999 99 99",value:e.value,onChange:e.onChange,onBlur:function(e){""===e.target.value&&(e.target.parentNode.lastElementChild.style.top="10px",e.target.parentNode.lastElementChild.style.zIndex=-1)}},e.input),function(e){return r.a.createElement("input",Object.assign({type:"tel"},e))}),r.a.createElement("div",null,r.a.createElement("span",null,"Phone"))),r.a.createElement("div",{className:"formRegisterToJobPhoneError"},e.error&&r.a.createElement("span",{className:"formRegisterToJobError"},e.error)))},B=function(e){var t=e.input,n=(e.meta,e.positions),a=e.error;return r.a.createElement("div",{className:"formRegisterToJobPosition"},r.a.createElement("div",{className:"formRegisterToJobPositionInput"},r.a.createElement("select",Object.assign({name:"position",id:""},t),"...select your position",r.a.createElement("option",null,"...select your position"),n&&n.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})),r.a.createElement("div",null,"Position")),r.a.createElement("div",{className:"formRegisterToJobPositionError"},a&&r.a.createElement("span",{className:"formRegisterToJobError"},a)))},F=function(e){return r.a.createElement("div",{className:"formRegisterToJobPhoto"},r.a.createElement("div",{className:"formRegisterToJobPhotoInput"},r.a.createElement(L,e),r.a.createElement("div",null,r.a.createElement("span",null,"Photo"))),r.a.createElement("div",{className:"formRegisterToJobPhotoError"},e.error&&r.a.createElement("span",{className:"formRegisterToJobError"},e.error)))},L=function(e){var t=e.input,n=e.setFileName,a=e.fileName;return r.a.createElement("div",{className:"formRegisterToJobPhotoInputFile"},r.a.createElement("div",{className:"formRegisterToJobPhotoInputFileName"},a||"Photo file name"),r.a.createElement("div",{className:"formRegisterToJobPhotoInputFileBtn"},r.a.createElement("input",{accept:"image/*",id:"raised-button-file",type:"file",onChange:function(e){t.onChange(e.target.files[0]),n(e.target.files[0].name)}}),r.a.createElement("button",null,"Upload")))},J=n(11),V=Object(j.a)({form:"registerToJob"})(function(e){var t=e.handleSubmit,n=e.result,o=e.positions,s=e.filename,l=Object(a.useState)(null),i=Object(I.a)(l,2),c=i[0],u=i[1],m=function(){var e=document.getElementById("animated-btn"),t=290,n=40;e.style.background="#ef6c00",e.style.opacity="0.9",e.style.borderRadius="7px",e.style.color="black";var a=setInterval(function(){t-=10,n-=1,e.style.width=t+"px",e.style.height=n+"px",t<=200&&(clearInterval(a),e.style.backgroundColor="rgb(215,215,215)",e.style.color="#8d8c8c")},100)},p=n&&!n.success;return r.a.createElement("form",{onSubmit:t,className:" formRegisterToJob"},r.a.createElement(A.a,{name:"name",type:"text",error:p&&n.fails.name&&n.fails.name[0],component:T}),r.a.createElement(A.a,{name:"email",type:"email",error:p&&n.fails.email&&n.fails.email[0],component:T}),r.a.createElement(A.a,{name:"phone",type:"tel",error:p&&n.fails.phone&&n.fails.phone[0],mask:"+38 ( 099 \\) 999 99 99",component:D}),r.a.createElement(A.a,{name:"position_id",error:p&&n.fails.position_id&&n.fails.position_id[0],component:B,positions:o}),r.a.createElement(A.a,{name:"photo",error:p&&n.fails.photo&&n.fails.photo[0],filename:s,component:F,fileName:c,setFileName:u}),n&&n.success&&n.message&&r.a.createElement("div",{style:{margin:"0 auto"},onClick:function(e){e.target.style.display="none"},className:"formRegisterToJobResult"},r.a.createElement("div",{className:"formRegisterToJobResultLayer"},"Congratulations !!!",r.a.createElement("div",null,r.a.createElement("p",{style:{margin:"20px 20px 20px 0"}},"You have successfully pass the registration")),r.a.createElement("div",{onClick:function(e){e.target.parentNode.style.display="none"},className:"formRegisterToJobResultOK"},"ok"))),r.a.createElement("button",{onClick:function(){m(),u(null)},className:"registerToJobSignUp"},r.a.createElement("div",{style:{margin:"auto",zIndex:"-1"},id:"animated-btn"},"Sign Up")))}),q=Object(J.b)(function(e){return{result:e.agency.result,filename:e.form.registerToJob}})(V),H=n(100),z=Object(J.b)(function(e){return{imageName:e.agency.formData,positions:e.agency.positions}},{addFormData:H.a,addNewUser:H.b})(function(e){var t=e.addFormData,n=(e.resetForm,e.positions),a=e.addNewUser;return r.a.createElement("div",{id:"agencySignUp",className:"registerToJob"},r.a.createElement("h2",{className:"registerToJobHeader"},"Register to get a work"),r.a.createElement("h4",{className:"registerToJobAttention"}," Attention! After successful registration and alert, update the list of users in the block from the top"),r.a.createElement(q,{positions:n,onSubmit:function(e){var n=new FormData,r=e.phone&&e.phone.replace(/[-()\s]/g,"");n.append("name",e.name),n.append("email",e.email),n.append("phone",r),n.append("position_id",e.position_id),n.append("photo",e.photo),t(n),a(n)}}))});var W=function(e){return r.a.createElement("div",{className:"getWork"},r.a.createElement(U,e),r.a.createElement(z,e))},Q=function(e){function t(){return Object(w.a)(this,t),Object(O.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.getAgencyUsers(),this.props.getAgencyPositions()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,this.props))}}]),t}(a.Component),_=Object(J.b)(function(e){return{users:e.agency.users}},{getAgencyUsers:H.f,getAgencyPositions:H.d})(Q);var X=function(){return r.a.createElement("div",{className:"agency-layout"},r.a.createElement(o,null),r.a.createElement(y,null),r.a.createElement(N,null),r.a.createElement(_,null))},Y=n(348),G=n.n(Y),Z=n(6),K=n(26);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach(function(t){Object(K.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var te=function(e){var t=e.onMouseLeave,n=Object(a.useState)({mainPage:!0,id:null}),o=Object(I.a)(n,2),s=o[0],l=o[1],c=function(e){l(ee({},s,{id:e,mainPage:!0}));var t=document.getElementById(e);if(t){window.scroll(0,0);var n=t.getBoundingClientRect();window.scroll(n.x,n.y-174)}};return Object(a.useEffect)(function(){s.mainPage&&c(s.id)},[s.mainPage,s.id]),r.a.createElement("menu",{className:"agency-header-menu",onMouseLeave:t},r.a.createElement(i.b,{onClick:function(){return c("agencyAbout")},className:"agency-header-menu-item",to:"/agency/main/about"},"About me "),r.a.createElement(i.b,{onClick:function(){return c("agencyRelationships")},className:"agency-header-menu-item",to:"/agency/main/relationships"},"Relationships "),r.a.createElement(i.b,{onClick:function(){return c("agencyRequirements")},className:"agency-header-menu-item",to:"/agency/main/requirements"},"Requirements "),r.a.createElement(i.b,{onClick:function(){return l(ee({},s,{mainPage:!1}))},className:"agency-header-menu-item",to:"/agency/users"},"Users "),r.a.createElement(i.b,{onClick:function(){return c("agencySignUp")},className:"agency-header-menu-item",to:"/agency/main/signUp"},"Sign Up"))},ne=Object(Z.f)(function(){return r.a.createElement("div",{className:"agencyFooterHeader"},r.a.createElement("div",{className:"agencyFooterHeaderLogo"},r.a.createElement("img",{src:G.a,alt:""})),r.a.createElement(te,null))}),ae=n(356),re=n.n(ae),oe=n(357),se=n.n(oe),le=n(358),ie=n.n(le),ce=function(){return r.a.createElement("div",{className:"first"},r.a.createElement("div",null,r.a.createElement("img",{src:re.a,alt:""}),r.a.createElement("span",{style:{marginLeft:"9px"}},"work.of.future@gmail.com")),r.a.createElement("div",null,r.a.createElement("img",{style:{margin:"23px 0"},src:ie.a,alt:""}),r.a.createElement("span",{style:{marginLeft:"11px"}},"+38 (050) 789 24 98")),r.a.createElement("div",null,r.a.createElement("img",{src:se.a,alt:""}),r.a.createElement("span",{style:{marginLeft:"14px"}},"+38 (095) 556 08 45")))},ue=function(){return r.a.createElement("div",{style:{textAlign:"right"},className:"second"},r.a.createElement("div",null,r.a.createElement("span",null,"News")),r.a.createElement("div",null,r.a.createElement("span",null,"Blog")),r.a.createElement("div",null,r.a.createElement("span",null,"Partners")),r.a.createElement("div",null,r.a.createElement("span",null,"Shop")))},me=function(){return r.a.createElement("div",{style:{textAlign:"right"},className:"fifth"},r.a.createElement("div",null,r.a.createElement("span",null,"FAQ")),r.a.createElement("div",null,r.a.createElement("span",null,"Terms")),r.a.createElement("div",null,r.a.createElement("span",null,"Conditions")),r.a.createElement("div",null,r.a.createElement("span",null,"Help")))},pe=function(){return r.a.createElement("div",{style:{textAlign:"right"},className:"third"},r.a.createElement("div",null,r.a.createElement("span",null,"Overview")),r.a.createElement("div",null,r.a.createElement("span",null,"Design")),r.a.createElement("div",null,r.a.createElement("span",null,"Code")),r.a.createElement("div",null,r.a.createElement("span",null,"Collaborate")))},de=function(){return r.a.createElement("div",{style:{textAlign:"right"},className:"fourth"},r.a.createElement("div",null,r.a.createElement("span",null,"Tutorials")),r.a.createElement("div",null,r.a.createElement("span",null,"Resources")),r.a.createElement("div",null,r.a.createElement("span",null,"Guides")),r.a.createElement("div",null,r.a.createElement("span",null,"Examples")))},fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null),r.a.createElement(ue,null),r.a.createElement(pe,null),r.a.createElement(de,null),r.a.createElement(me,null))},ge=n(359),he=n.n(ge),ve=n(360),Ee=n.n(ve),ye=n(361),be=n.n(ye),ke=n(362),Ne=n.n(ke),we=n(363),Ce=n.n(we),Oe=function(){return r.a.createElement("div",{className:"agencyFooterFooter"},r.a.createElement("div",{className:"agencyFooterFooterInfo"},r.a.createElement("span",null,"\xa9")," abz.agency specially for the test task"),r.a.createElement("div",{className:"agencyFooterFooterIcons"},r.a.createElement("img",{src:he.a,alt:""}),r.a.createElement("img",{src:be.a,alt:""}),r.a.createElement("img",{src:Ee.a,alt:""}),r.a.createElement("img",{src:Ne.a,alt:""}),r.a.createElement("img",{src:Ce.a,alt:""})))},Se=function(){return r.a.createElement("div",{className:"agencyFooter"},r.a.createElement("div",{className:"agencyFooterLayout"},r.a.createElement(ne,null),r.a.createElement(fe,null),r.a.createElement(Oe,null)))},xe=n(364),Ie=n.n(xe),Pe=n(365),Ue=n.n(Pe),Ae=n(366),je=n.n(Ae),Me=function(e){var t=e.user,n=Object(a.useState)(!1),o=Object(I.a)(n,2),s=o[0],l=o[1];return r.a.createElement("div",{className:"agency-header"},r.a.createElement("img",{src:G.a,alt:""}),r.a.createElement("div",{className:"AgencyHeaderMenuLogin ".concat(s?" showed":"")},r.a.createElement(te,{onMouseLeave:function(){l(!1)}}),r.a.createElement("div",{className:"agency-login"},r.a.createElement("div",{className:"agency-user-info"},r.a.createElement("div",{className:"agency-user-name"},t?t.name:"Superstar"),r.a.createElement("div",{className:"agency-user-email"},t?t.email:"Superstar@gmail.com")),r.a.createElement("div",{className:"agency-login-icons"},r.a.createElement("img",{className:"agency-user-icon",src:t?t.photo:Ie.a,alt:""}),r.a.createElement("img",{className:"agency-sign-out",src:Ue.a,alt:""})))),r.a.createElement("div",{onClick:function(){l(!s)},className:"AgencyHeaderMenuIcon"},r.a.createElement("img",{src:je.a,alt:""})))},Re=function(e){function t(){return Object(w.a)(this,t),Object(O.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.getAgencyUser()}},{key:"render",value:function(){return r.a.createElement(Me,this.props)}}]),t}(a.Component),Te=Object(J.b)(function(e){return{user:e.agency.currentUser}},{getAgencyUser:H.e})(Re),De=function(e){var t=e.name,n=e.email,a=e.photo,o=e.position,s=e.phone;return r.a.createElement("div",{className:"AgencyUser"},r.a.createElement("div",{className:"AgencyUsersIcon"},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:"AgencyUsersInfo"},r.a.createElement("div",{className:"AgencyUsersName"},r.a.createElement("h4",null," ",t.toUpperCase()," ")),r.a.createElement("div",{className:"AgencyUsersEmail"},r.a.createElement("span",null,"Email : ",n," ")),r.a.createElement("div",{className:"AgencyUsersPhone"},r.a.createElement("span",null,"Phone : ",s," ")),r.a.createElement("div",{className:"AgencyUsersPosition"},r.a.createElement("span",null,"Position : ",o," "))))},Be=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).onAgencyUsersBtn=function(){n.props.history.goBack()},n.onAgencyUsersPageBtn=function(e){n.props.getAgencyUsers(e,10)},n.lengthValidate=function(e){return e.length>20?e.slice(0,21)+"...":e},n}return Object(x.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.getAgencyUsers(1,10),window.scroll(0,0)}},{key:"render",value:function(){var e=this,t=this.props.users,n=0;this.props.totalCount&&(n=Math.ceil(this.props.totalCount/10));for(var a=[],o=1;o<=n;o++)a.push(o);return r.a.createElement("div",{className:"AgencyUsersBlock"},r.a.createElement("div",{className:"AgencyUsersPageBtns"},a.map(function(t){return r.a.createElement("button",{onClick:function(){return e.onAgencyUsersPageBtn(t)},key:"page"+t,className:"AgencyUsersPageBtn"},t)})),r.a.createElement("div",{className:"AgencyUsers"},t&&t.map(function(t){return r.a.createElement(De,{key:t.id,name:t.name,email:e.lengthValidate(t.email),phone:t.phone,position:t.position,photo:t.photo})})),r.a.createElement("button",{onClick:this.onAgencyUsersBtn,className:"AgencyUsersBtn"},"Back"))}}]),t}(a.Component),Fe=Object(J.b)(function(e){return{users:e.agency.users,totalCount:e.agency.totalCount}},{getAgencyUsers:H.f})(Object(Z.f)(Be)),Le={maxWidth:"1140px",margin:"0 auto",position:"relative",top:"64px"},Je=function(e){return r.a.createElement("div",{style:Le,className:"AgencyLayout"},e.children)};t.default=function(){return r.a.createElement("div",{className:"agency"},r.a.createElement("div",{className:"AgencyHeaderLayout"},r.a.createElement(Te,null)),r.a.createElement("div",{className:"AgencyLayout"},r.a.createElement(Z.b,{path:"/agency/main",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(Z.b,{path:"/agency/users",render:function(){return r.a.createElement(Je,null,r.a.createElement(Fe,null))}})),r.a.createElement(Se,null))}}}]);
//# sourceMappingURL=3.3d5afd6d.chunk.js.map