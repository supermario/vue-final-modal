import{ref as e,watch as n,nextTick as t,reactive as o,computed as r,onMounted as i,onBeforeUnmount as a,withDirectives as l,openBlock as u,createElementBlock as s,normalizeStyle as c,normalizeClass as f,withKeys as d,createVNode as v,Transition as p,mergeProps as m,toHandlers as y,withCtx as h,createCommentVNode as b,createElementVNode as g,withModifiers as w,renderSlot as x,Fragment as S,renderList as z,vShow as E,createBlock as M,resolveDynamicComponent as T,createSlots as C,markRaw as O,shallowReactive as k}from"vue";function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){V(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,n,t,o,r,i,a){try{var l=e[i](a),u=l.value}catch(e){return void t(e)}l.done?n(u):Promise.resolve(u).then(o,r)}function L(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function B(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,n,t){return n&&B(e.prototype,n),t&&B(e,t),e}function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function I(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var N=function(e){return function(e,n){return I(e.querySelectorAll(n)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},$=function(e){return e==document.activeElement},H=function(){function e(){L(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}return D(e,[{key:"lastElement",get:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",get:function(){return this.elements[0]||null}},{key:"isEnabled",get:function(){return!!this.root}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||$(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;$(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=N(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}]),e}(),F=null;var K="enter",U="entering",W="leave",Y="leavng",q=function(){var n=e(null),t={beforeEnter:function(){n.value=U},afterEnter:function(){n.value=K},beforeLeave:function(){n.value=Y},afterLeave:function(){n.value=W}};return{state:n,listeners:t}},G={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},X=function(e){var n=e.targetTouches?e.targetTouches[0]:e;return{x:n.clientX,y:n.clientY}},Z=function(e,n,t){return"number"!=typeof e&&(e=Math.min(n,t)||n),"number"!=typeof t&&(t=Math.max(n,e)),Math.min(Math.max(n,e),t)},J=function(e){return e&&Number(e.replace(/px$/,""))||0},Q={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},ee=function(e,n,t){n&&n.addEventListener(Q[e].pc,t),n&&n.addEventListener(Q[e].m,t,{passive:!1})},ne=function(e,n,t){n&&n.removeEventListener(Q[e].pc,t),n&&n.removeEventListener(Q[e].m,t)};function te(o){var r=o.props,i=o.visible,a=o.visibility,l=o.vfmContainer,u=o.vfmContent,s=o.vfmResize,c=o.modalTransitionState,f=o.onEvent,d=void 0===f?function(){}:f,v=e(null),p=e({});function m(e){e.stopPropagation();var n,t="resize",o="drag",i=e.target.getAttribute("direction");if(i)n=t;else{if(!function(e,n,t){return""===t||I(n.querySelectorAll(t)).includes(e.target)}(e,u.value,r.dragSelector))return;n=o}v.value="".concat(n,":start"),null==d||d(e);var a,s,c,f,m=X(e),y=l.value.getBoundingClientRect(),h=u.value.getBoundingClientRect(),b="absolute"===window.getComputedStyle(u.value).position,g=J(p.value.top),w=J(p.value.left),x=function(){if(r.fitParent){var e={absolute:function(){return{minTop:0,minLeft:0,maxTop:y.height-h.height,maxLeft:y.width-h.width}},relative:function(){return{minTop:g+y.top-h.top,minLeft:w+y.left-h.left,maxTop:g+y.bottom-h.bottom,maxLeft:w+y.right-h.right}}};return b?e.absolute():e.relative()}return{}}(),S=n===t&&(a=document.body,s="cursor",c=G[i],f=a.style[s],a.style[s]=c,function(){a.style[s]=f}),z=function(e){e.stopPropagation(),v.value="".concat(n,":move"),null==d||d(e);var a,l,u=X(e),s={x:u.x-m.x,y:u.y-m.y};n===t&&(s=function(e,n,t,o,i){var a=function(e){var t,o=n[e.axis];o=r.fitParent?Z(e.min,o,e.max):o;var a=Z(e.minEdge,e.getEdge(o),e.maxEdge);return o=e.getOffsetAxis(a,i),V(t={},e.edgeName,a),V(t,e.axis,o),t},l=function(e,n,i,a){var l,u=o[n],s=t[e]-o[e],c=(l=n).charAt(0).toUpperCase()+l.slice(1);return{axis:i,edgeName:n,min:a?s:-u,max:a?u:s,minEdge:r["min".concat(c)],maxEdge:r["max".concat(c)],getEdge:function(e){return o[n]-e*(a?1:-1)},getOffsetAxis:function(e,t){var r=o[n]-e;return t?a?r:0:(a?1:-1)*r/2}}},u={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},s={x:0,y:0};return e.split("").forEach((function(e){var n=l.apply(void 0,I(u[e]));s=A(A({},s),a(n))})),s}(i,s,y,h,b)),b?(a=h.top-y.top+s.y,l=h.left-y.left+s.x):(a=g+s.y,l=w+s.x),n===o&&r.fitParent&&(a=Z(x.minTop,a,x.maxTop),l=Z(x.minLeft,l,x.maxLeft));var c=A(A(A({position:"relative",top:a+"px",left:l+"px",margin:"unset",touchAction:"none"},b&&{position:"absolute",transform:"unset",width:h.width+"px",height:h.height+"px"}),s.width&&{width:s.width+"px"}),s.height&&{height:s.height+"px"});p.value=A(A({},p.value),c)};ee("move",document,z),ee("up",document,(function e(o){o.stopPropagation(),n===t&&S&&S(),setTimeout((function(){v.value="".concat(n,":end"),null==d||d(o)})),ne("move",document,z),ne("up",document,e)}))}function y(){ee("down",u.value,m),p.value.touchAction="none"}function h(){ne("down",u.value,m)}function b(){a.resize=!0,t((function(){ee("down",s.value,m)}))}function g(){ne("down",s.value,m),a.resize=!1}return n(c,(function(e){switch(e){case K:r.drag&&y(),r.resize&&b();break;case W:r.keepChangedStyle||(p.value={})}})),n((function(){return r.drag}),(function(e){i.value&&(e?y():h())})),n((function(){return r.resize}),(function(e){i.value&&(e?b():g())})),n((function(){return r.keepChangedStyle}),(function(e){e||(p.value={})})),{state:v,dragResizeStyle:p,removeDragDown:h,removeResizeDown:g}}var oe=!1;if("undefined"!=typeof window){var re={get passive(){oe=!0}};window.addEventListener("testPassive",null,re),window.removeEventListener("testPassive",null,re)}var ie,ae,le="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),ue=[],se=!1,ce=0,fe=-1,de=function(e,n){var t=!1;return function(e){for(var n=[];e;){if(n.push(e),e.classList.contains("vfm"))return n;e=e.parentElement}return n}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e);return["auto","scroll"].includes(n.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,n){return!(0===e.scrollTop&&n<0||e.scrollTop+e.clientHeight+n>=e.scrollHeight&&n>0)}(e,n)&&(t=!0)})),t},ve=function(e){return ue.some((function(){return de(e,-ce)}))},pe=function(e){var n=e||window.event;return!!ve(n.target)||(n.touches.length>1||(n.preventDefault&&n.preventDefault(),!1))},me=function(e,n){if(e){if(!ue.some((function(n){return n.targetElement===e}))){var t={targetElement:e,options:n||{}};ue=[].concat(I(ue),[t]),le?(e.ontouchstart=function(e){1===e.targetTouches.length&&(fe=e.targetTouches[0].clientY)},e.ontouchmove=function(n){1===n.targetTouches.length&&function(e,n){ce=e.targetTouches[0].clientY-fe,!ve(e.target)&&(n&&0===n.scrollTop&&ce>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(n)&&ce<0?pe(e):e.stopPropagation())}(n,e)},se||(document.addEventListener("touchmove",pe,oe?{passive:!1}:void 0),se=!0)):function(e){if(void 0===ae){var n=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(n&&t>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);ae=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+t,"px")}}void 0===ie&&(ie=document.body.style.overflow,document.body.style.overflow="hidden")}(n)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},ye=function(e){e?(ue=ue.filter((function(n){return n.targetElement!==e})),le?(e.ontouchstart=null,e.ontouchmove=null,se&&0===ue.length&&(document.removeEventListener("touchmove",pe,oe?{passive:!1}:void 0),se=!1)):ue.length||(void 0!==ae&&(document.body.style.paddingRight=ae,ae=void 0),void 0!==ie&&(document.body.style.overflow=ie,ie=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},he=function(){},be={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:function(e){return-1!==["if","show"].indexOf(e)}},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var n=j(e);return"boolean"===n||"string"===n||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(n){return-1!==e.indexOf(n)})).length===e.length}},minWidth:{type:[Number,String],default:0},minHeight:{type:[Number,String],default:0},maxWidth:{type:[Number,String],default:1/0},maxHeight:{type:[Number,String],default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(l,u){var s=u.emit,c=Symbol("vfm"),f=e(null),d=e(null),v=e(null),p=e(null),m=e(null),y=e(null),h=e(null),b=(null==F&&(F=new H),F),g=e(!1),w=o({modal:!1,overlay:!1,resize:!1}),x=q(),S=x.state,z=x.listeners,E=q(),M=E.state,T=E.listeners,C=e(!1),O=e({}),k=te({props:l,visible:g,visibility:w,vfmContainer:d,vfmContent:v,vfmResize:p,modalTransitionState:M,onEvent:function(e){s(_.value,e)}}),_=k.state,j=k.dragResizeStyle,P=k.removeDragDown,L=k.removeResizeDown,B=e(null),D=he,V=he,R=r((function(){return"string"==typeof l.overlayTransition?{name:l.overlayTransition}:A({},l.overlayTransition)})),N=r((function(){return"string"==typeof l.transition?{name:l.transition}:A({},l.transition)})),$=r((function(){return(l.hideOverlay||S.value===W)&&M.value===W})),U=r((function(){return!1===l.zIndex?!!l.zIndexAuto&&+l.zIndexBase+2*(h.value||0):l.zIndex})),G=r((function(){return A({},!1!==U.value&&{zIndex:U.value})})),X=r((function(){var e=[j.value];return Array.isArray(l.contentStyle)?e.push.apply(e,I(l.contentStyle)):e.push(l.contentStyle),e}));function Z(){return{uid:c,props:l,emit:s,vfmContainer:d,vfmContent:v,vfmResize:p,vfmOverlayTransition:m,vfmTransition:y,getAttachElement:ne,modalStackIndex:h,visibility:w,handleLockScroll:ee,$focusTrap:b,toggle:ie,params:O}}function J(){if(l.modelValue){if(s("_before-open",oe({type:"_before-open"})),re("before-open",!1))return void V("show");var e=ne();if(e||!1===l.attach){!1!==l.attach&&e.appendChild(f.value);var n=l.api.openedModals.findIndex((function(e){return e.uid===c}));-1!==n&&l.api.openedModals.splice(n,1),l.api.openedModals.push(Z()),h.value=l.api.openedModals.length-1,ee(),l.api.openedModals.filter((function(e){return e.uid!==c})).forEach((function(n,t){n.getAttachElement()===e&&(n.modalStackIndex.value=t,n.visibility.overlay=!1)})),g.value=!0,w.overlay=!0,w.modal=!0}else!1!==e&&console.warn("Unable to locate target ".concat(l.attach))}}function Q(){var e=l.api.openedModals.findIndex((function(e){return e.uid===c}));if(-1!==e&&l.api.openedModals.splice(e,1),l.api.openedModals.length>0){var n=l.api.openedModals[l.api.openedModals.length-1];n.props.focusTrap&&t((function(){n.$focusTrap.enable(n.vfmContainer.value),n.$focusTrap.firstElement.focus()})),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}l.drag&&P(),l.resize&&L(),_.value=null,w.overlay=!1,w.modal=!1}function ee(){l.modelValue&&t((function(){l.lockScroll?me(d.value,{reserveScrollBarGap:!0}):ye(d.value)}))}function ne(){return!1!==l.attach&&("string"==typeof l.attach?!!window&&window.document.querySelector(l.attach):l.attach)}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return A({ref:Z()},e)}function re(e,n){var o=!1,r=oe({type:e,stop:function(){o=!0}});return s(e,r),!!o&&(C.value=!0,t((function(){s("update:modelValue",n)})),!0)}function ie(e,n){var t=arguments;return new Promise((function(o,r){D=function(e){o(e),D=he},V=function(e){r(e),V=he};var i="boolean"==typeof e?e:!l.modelValue;i&&2===t.length&&(O.value=n),s("update:modelValue",i)}))}return n((function(){return l.modelValue}),(function(e){if(C.value)C.value=!1;else if(J(),!e){if(s("_before-close",oe({type:"_before-close"})),re("before-close",!0))return void V("hide");Q()}})),n((function(){return l.lockScroll}),ee),n((function(){return l.hideOverlay}),(function(e){l.modelValue&&!e&&(w.overlay=!0)})),n((function(){return l.attach}),J),n($,(function(e){e&&(g.value=!1,d.value.style.display="none")}),{flush:"post"}),n(M,(function(e){switch(e){case K:(l.focusRetain||l.focusTrap)&&d.value.focus(),l.focusTrap&&b.enable(d.value),s("_opened"),s("opened",oe({type:"opened"})),D("show");break;case Y:b.enabled&&b.disable();break;case W:h.value=null,l.lockScroll&&ye(d.value);var n=!1,t=oe({type:"closed",stop:function(){n=!0}});if(s("_closed"),s("closed",t),D("hide"),n)return;O.value={}}})),l.api.modals.push(Z()),i((function(){J()})),a((function(){var e;Q(),l.lockScroll&&d.value&&ye(d.value),null==f||null===(e=f.value)||void 0===e||e.remove();var n=l.api.modals.findIndex((function(e){return e.uid===c}));l.api.modals.splice(n,1)})),{root:f,vfmContainer:d,vfmContent:v,vfmResize:p,vfmOverlayTransition:m,vfmTransition:y,computedOverlayTransition:R,computedTransition:N,overlayListeners:z,modalListeners:T,visible:g,visibility:w,params:O,calculateZIndex:U,bindStyle:G,bindContentStyle:X,onMousedown:function(e){B.value=null==e?void 0:e.target},onMouseupContainer:function(){B.value===d.value&&"resize:move"!==_.value&&(s("click-outside",oe({type:"click-outside"})),l.clickToClose&&s("update:modelValue",!1))},onEsc:function(){g.value&&l.escToClose&&s("update:modelValue",!1)}}}},ge=["aria-expanded"],we={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},xe=["direction"];!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),be.render=function(e,n,t,o,r,i){return"if"!==t.displayDirective||o.visible?l((u(),s("div",{key:0,ref:"root",style:c(o.bindStyle),class:f(["vfm vfm--inset",[!1===t.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":t.nonModal}]]),onKeydown:n[3]||(n[3]=d((function(){return o.onEsc&&o.onEsc.apply(o,arguments)}),["esc"]))},[v(p,m(o.computedOverlayTransition,y(o.overlayListeners)),{default:h((function(){return[!t.hideOverlay&&o.visibility.overlay?(u(),s("div",{key:0,class:f(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",t.overlayClass]),style:c(t.overlayStyle)},null,6)):b("v-if",!0)]})),_:1},16),v(p,m(o.computedTransition,y(o.modalListeners)),{default:h((function(){return[l(g("div",{ref:"vfmContainer",class:f(["vfm__container vfm--absolute vfm--inset vfm--outline-none",t.classes]),style:c(t.styles),"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[1]||(n[1]=w((function(){return o.onMouseupContainer&&o.onMouseupContainer.apply(o,arguments)}),["self"])),onMousedown:n[2]||(n[2]=w((function(){return o.onMousedown&&o.onMousedown.apply(o,arguments)}),["self"]))},[g("div",{ref:"vfmContent",class:f(["vfm__content",[t.contentClass,{"vfm--prevent-auto":t.nonModal}]]),style:c(o.bindContentStyle),onMousedown:n[0]||(n[0]=function(e){return o.onMousedown(null)})},[x(e.$slots,"default",{params:o.params,close:function(){return e.$emit("update:modelValue",!1)}}),o.visibility.resize&&o.visibility.modal?(u(),s("div",we,[(u(!0),s(S,null,z(t.resizeDirections,(function(e){return u(),s("div",{key:e,direction:e,class:f(["vfm--resize-".concat(e),"vfm--absolute vfm--prevent-auto"])},null,10,xe)})),128))],512)):b("v-if",!0)],38)],46,ge),[[E,o.visibility.modal]])]})),_:3},16)],38)),[[E,"show"!==t.displayDirective||o.visible]]):b("v-if",!0)},be.__scopeId="data-v-72c09f54",be.__file="src/VueFinalModal.vue";var Se={methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},closed:function(e,n){this.slice(e),n.closed&&n.closed()},beforeClose:function(e){e.value&&(null==e||e.rejectClose("hide"))},beforeOpen:function(e,n,t){var o,r=this;return(o=function*(){e.ref.params.value=n.params,yield r.$nextTick(),yield r.$nextTick(),n.value||(r.slice(t),null==n||n.reject("show"))},function(){var e=this,n=arguments;return new Promise((function(t,r){var i=o.apply(e,n);function a(e){P(i,t,r,a,l,"next",e)}function l(e){P(i,t,r,a,l,"throw",e)}a(void 0)}))})()},isString:function(e){return"string"==typeof e}}},ze={class:"modals-container"},Ee=["innerHTML"];Se.render=function(e,n,t,o,r,i){return u(),s("div",ze,[(u(!0),s(S,null,z(e.api.dynamicModals,(function(e,n){return u(),M(T(e.component),m({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(n){return e.value=n}},y(e.on),{on_beforeClose:function(n){return i.beforeClose(e)},on_closed:function(t){return i.closed(n,e)},on_beforeOpen:function(t){return i.beforeOpen(t,e,n)},on_opened:e.opened}),C({_:2},[z(e.slots,(function(e,n){return{name:n,fn:h((function(){return[b(" eslint-disable vue/no-v-html "),i.isString(e)?(u(),s("div",{key:0,innerHTML:e},null,8,Ee)):(u(),M(T(e.component),m({key:1},e.bind,y(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])})),128))])},Se.__file="src/ModalsContainer.vue";var Me=function(){function e(){var n=this;L(this,e);var t=function(e){var t=A(A({},e),{},{props:A({},e.props)});return Object.assign(t.props,{api:{type:Object,default:function(){return n}}}),O(t)};this.modals=[],this.openedModals=[],this.VueFinalModal=t(be),this.dynamicModals=k([]),this.ModalsContainer=t(Se)}return D(e,[{key:"show",value:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];switch(j(e)){case"string":return this.toggle.apply(this,[e,!0].concat(t));case"object":var r=this.useModal(e,t[0]),i=r.show;return i()}}},{key:"hide",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.toggle(n,!1)}},{key:"hideAll",value:function(){return this.hide.apply(this,I(this.openedModals.map((function(e){return e.props.name}))))}},{key:"toggle",value:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var r=Array.isArray(e)?this.get.apply(this,I(e)):this.get(e);return Promise.allSettled(r.map((function(e){return e.toggle.apply(e,t)})))}},{key:"get",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.modals.filter((function(e){return n.includes(e.props.name)}))}},{key:"existModal",value:function(e){return-1!==this.dynamicModals.indexOf(e)}},{key:"useModal",value:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=o(A({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},params:t},e)),i=function(){return n.existModal(r)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise((function(e,t){r.value=!0,r.reject=t,r.opened=function(){e("show")},n.dynamicModals.push(r)}))},a=function(){return n.existModal(r)?new Promise((function(e,n){r.value=!1,r.rejectClose=n,r.closed=function(){e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed")};return{show:i,hide:a,options:r}}}]),e}(),Te=function(){var e=new Me;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},Ce=Te(),Oe=Ce.$vfm,ke=Ce.VueFinalModal,_e=Ce.ModalsContainer,Ae=Ce.useModal;export{Oe as $vfm,Me as ModalInstance,_e as ModalsContainer,ke as VueFinalModal,Te as createModalInstance,Ae as useModal};
//# sourceMappingURL=VueFinalModal.esm.js.map
