(function(){"use strict";var A,h,te,C,re,oe,_e,ie,j,z,V,P={},se=[],He=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function N(e,n){for(var t in n)e[t]=n[t];return e}function G(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ae(e,n,t){var r,_,o,a={};for(o in n)o=="key"?r=n[o]:o=="ref"?_=n[o]:a[o]=n[o];if(arguments.length>2&&(a.children=arguments.length>3?A.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return L(e,a,r,_,null)}function L(e,n,t,r,_){var o={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:_??++te,__i:-1,__u:0};return _==null&&h.vnode!=null&&h.vnode(o),o}function M(e){return e.children}function F(e,n){this.props=e,this.context=n}function E(e,n){if(n==null)return e.__?E(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?E(e):null}function le(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return le(e)}}function ce(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!R.__r++||re!=h.debounceRendering)&&((re=h.debounceRendering)||oe)(R)}function R(){for(var e,n,t,r,_,o,a,l=1;C.length;)C.length>l&&C.sort(_e),e=C.shift(),l=C.length,e.__d&&(t=void 0,r=void 0,_=(r=(n=e).__v).__e,o=[],a=[],n.__P&&((t=N({},r)).__v=r.__v+1,h.vnode&&h.vnode(t),J(n.__P,t,r,n.__n,n.__P.namespaceURI,32&r.__u?[_]:null,o,_??E(r),!!(32&r.__u),a),t.__v=r.__v,t.__.__k[t.__i]=t,he(o,t,a),r.__e=r.__=null,t.__e!=_&&le(t)));R.__r=0}function ue(e,n,t,r,_,o,a,l,u,s,c){var i,p,d,y,k,x,m,g=r&&r.__k||se,S=n.length;for(u=Oe(t,n,g,u,S),i=0;i<S;i++)(d=t.__k[i])!=null&&(p=d.__i==-1?P:g[d.__i]||P,d.__i=i,x=J(e,d,p,_,o,a,l,u,s,c),y=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&X(p.ref,null,d),c.push(d.ref,d.__c||y,d)),k==null&&y!=null&&(k=y),(m=!!(4&d.__u))||p.__k===d.__k?u=de(d,u,e,m):typeof d.type=="function"&&x!==void 0?u=x:y&&(u=y.nextSibling),d.__u&=-7);return t.__e=k,u}function Oe(e,n,t,r,_){var o,a,l,u,s,c=t.length,i=c,p=0;for(e.__k=new Array(_),o=0;o<_;o++)(a=n[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=L(null,a,null,null,null):B(a)?a=e.__k[o]=L(M,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=L(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,u=o+p,a.__=e,a.__b=e.__b+1,l=null,(s=a.__i=Ue(a,t,u,i))!=-1&&(i--,(l=t[s])&&(l.__u|=2)),l==null||l.__v==null?(s==-1&&(_>c?p--:_<c&&p++),typeof a.type!="function"&&(a.__u|=4)):s!=u&&(s==u-1?p--:s==u+1?p++:(s>u?p--:p++,a.__u|=4))):e.__k[o]=null;if(i)for(o=0;o<c;o++)(l=t[o])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=E(l)),me(l,l));return r}function de(e,n,t,r){var _,o;if(typeof e.type=="function"){for(_=e.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=e,n=de(_[o],n,t,r));return n}e.__e!=n&&(r&&(n&&e.type&&!n.parentNode&&(n=E(e)),t.insertBefore(e.__e,n||null)),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function Ue(e,n,t,r){var _,o,a,l=e.key,u=e.type,s=n[t],c=s!=null&&(2&s.__u)==0;if(s===null&&l==null||c&&l==s.key&&u==s.type)return t;if(r>(c?1:0)){for(_=t-1,o=t+1;_>=0||o<n.length;)if((s=n[a=_>=0?_--:o++])!=null&&(2&s.__u)==0&&l==s.key&&u==s.type)return a}return-1}function pe(e,n,t){n[0]=="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||He.test(n)?t:t+"px"}function D(e,n,t,r,_){var o,a;e:if(n=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||pe(e.style,n,"");if(t)for(n in t)r&&t[n]==r[n]||pe(e.style,n,t[n])}else if(n[0]=="o"&&n[1]=="n")o=n!=(n=n.replace(ie,"$1")),a=n.toLowerCase(),n=a in e||n=="onFocusOut"||n=="onFocusIn"?a.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?r?t.u=r.u:(t.u=j,e.addEventListener(n,o?V:z,o)):e.removeEventListener(n,o?V:z,o);else{if(_=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!="-"?e.removeAttribute(n):e.setAttribute(n,n=="popover"&&t==1?"":t))}}function fe(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=j++;else if(n.t<t.u)return;return t(h.event?h.event(n):n)}}}function J(e,n,t,r,_,o,a,l,u,s){var c,i,p,d,y,k,x,m,g,S,$,W,O,Pe,q,U,ne,w=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),o=[l=n.__e=t.__e]),(c=h.__b)&&c(n);e:if(typeof w=="function")try{if(m=n.props,g="prototype"in w&&w.prototype.render,S=(c=w.contextType)&&r[c.__c],$=c?S?S.props.value:c.__:r,t.__c?x=(i=n.__c=t.__c).__=i.__E:(g?n.__c=i=new w(m,$):(n.__c=i=new F(m,$),i.constructor=w,i.render=Be),S&&S.sub(i),i.state||(i.state={}),i.__n=r,p=i.__d=!0,i.__h=[],i._sb=[]),g&&i.__s==null&&(i.__s=i.state),g&&w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=N({},i.__s)),N(i.__s,w.getDerivedStateFromProps(m,i.__s))),d=i.props,y=i.state,i.__v=n,p)g&&w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),g&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(g&&w.getDerivedStateFromProps==null&&m!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,$),n.__v==t.__v||!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,$)===!1){for(n.__v!=t.__v&&(i.props=m,i.state=i.__s,i.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.some(function(T){T&&(T.__=n)}),W=0;W<i._sb.length;W++)i.__h.push(i._sb[W]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,$),g&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,y,k)})}if(i.context=$,i.props=m,i.__P=e,i.__e=!1,O=h.__r,Pe=0,g){for(i.state=i.__s,i.__d=!1,O&&O(n),c=i.render(i.props,i.state,i.context),q=0;q<i._sb.length;q++)i.__h.push(i._sb[q]);i._sb=[]}else do i.__d=!1,O&&O(n),c=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Pe<25);i.state=i.__s,i.getChildContext!=null&&(r=N(N({},r),i.getChildContext())),g&&!p&&i.getSnapshotBeforeUpdate!=null&&(k=i.getSnapshotBeforeUpdate(d,y)),U=c,c!=null&&c.type===M&&c.key==null&&(U=ge(c.props.children)),l=ue(e,B(U)?U:[U],n,t,r,_,o,a,l,u,s),i.base=n.__e,n.__u&=-161,i.__h.length&&a.push(i),x&&(i.__E=i.__=null)}catch(T){if(n.__v=null,u||o!=null)if(T.then){for(n.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,n.__e=l}else{for(ne=o.length;ne--;)G(o[ne]);K(n)}else n.__e=t.__e,n.__k=t.__k,T.then||K(n);h.__e(T,n,t)}else o==null&&n.__v==t.__v?(n.__k=t.__k,n.__e=t.__e):l=n.__e=Ae(t.__e,n,t,r,_,o,a,u,s);return(c=h.diffed)&&c(n),128&n.__u?void 0:l}function K(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(K)}function he(e,n,t){for(var r=0;r<t.length;r++)X(t[r],t[++r],t[++r]);h.__c&&h.__c(n,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){h.__e(o,_.__v)}})}function ge(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:B(e)?e.map(ge):N({},e)}function Ae(e,n,t,r,_,o,a,l,u){var s,c,i,p,d,y,k,x=t.props||P,m=n.props,g=n.type;if(g=="svg"?_="http://www.w3.org/2000/svg":g=="math"?_="http://www.w3.org/1998/Math/MathML":_||(_="http://www.w3.org/1999/xhtml"),o!=null){for(s=0;s<o.length;s++)if((d=o[s])&&"setAttribute"in d==!!g&&(g?d.localName==g:d.nodeType==3)){e=d,o[s]=null;break}}if(e==null){if(g==null)return document.createTextNode(m);e=document.createElementNS(_,g,m.is&&m),l&&(h.__m&&h.__m(n,o),l=!1),o=null}if(g==null)x===m||l&&e.data==m||(e.data=m);else{if(o=o&&A.call(e.childNodes),!l&&o!=null)for(x={},s=0;s<e.attributes.length;s++)x[(d=e.attributes[s]).name]=d.value;for(s in x)if(d=x[s],s!="children"){if(s=="dangerouslySetInnerHTML")i=d;else if(!(s in m)){if(s=="value"&&"defaultValue"in m||s=="checked"&&"defaultChecked"in m)continue;D(e,s,null,d,_)}}for(s in m)d=m[s],s=="children"?p=d:s=="dangerouslySetInnerHTML"?c=d:s=="value"?y=d:s=="checked"?k=d:l&&typeof d!="function"||x[s]===d||D(e,s,d,x[s],_);if(c)l||i&&(c.__html==i.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(i&&(e.innerHTML=""),ue(n.type=="template"?e.content:e,B(p)?p:[p],n,t,r,g=="foreignObject"?"http://www.w3.org/1999/xhtml":_,o,a,o?o[0]:t.__k&&E(t,0),l,u),o!=null)for(s=o.length;s--;)G(o[s]);l||(s="value",g=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[s]||g=="progress"&&!y||g=="option"&&y!=x[s])&&D(e,s,y,x[s],_),s="checked",k!=null&&k!=e[s]&&D(e,s,k,x[s],_))}return e}function X(e,n,t){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&n==null||(e.__u=e(n))}else e.current=n}catch(_){h.__e(_,t)}}function me(e,n,t){var r,_;if(h.unmount&&h.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||X(r,null,n)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){h.__e(o,n)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&me(r[_],n,t||typeof e.type!="function");t||G(e.__e),e.__c=e.__=e.__e=void 0}function Be(e,n,t){return this.constructor(e,t)}function Le(e,n,t){var r,_,o,a;n==document&&(n=document.documentElement),h.__&&h.__(e,n),_=(r=!1)?null:n.__k,o=[],a=[],J(n,e=n.__k=ae(M,null,[e]),_||P,P,n.namespaceURI,_?null:n.firstChild?A.call(n.childNodes):null,o,_?_.__e:n.firstChild,r,a),he(o,e,a)}A=se.slice,h={__e:function(e,n,t,r){for(var _,o,a;n=n.__;)if((_=n.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(e)),a=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,r||{}),a=_.__d),a)return _.__E=_}catch(l){e=l}throw e}},te=0,F.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N({},this.state),typeof e=="function"&&(e=e(N({},t),this.props)),e&&N(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),ce(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ce(this))},F.prototype.render=M,C=[],oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_e=function(e,n){return e.__v.__b-n.__v.__b},R.__r=0,ie=/(PointerCapture)$|Capture$/i,j=0,z=fe(!1),V=fe(!0);var Me=0;function f(e,n,t,r,_,o){n||(n={});var a,l,u=n;if("ref"in u)for(l in u={},n)l=="ref"?a=n[l]:u[l]=n[l];var s={type:e,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Me,__i:-1,__u:0,__source:_,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return h.vnode&&h.vnode(s),s}var H,v,Q,ve,Y=0,be=[],b=h,ye=b.__b,xe=b.__r,ke=b.diffed,we=b.__c,Ne=b.unmount,Se=b.__;function Z(e,n){b.__h&&b.__h(v,e,Y||n),Y=0;var t=v.__H||(v.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Fe(e,n,t){var r=Z(H++,2);if(r.t=e,!r.__c&&(r.__=[qe(void 0,n),function(l){var u=r.__N?r.__N[0]:r.__[0],s=r.t(u,l);u!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.__f)){var _=function(l,u,s){if(!r.__c.__H)return!0;var c=r.__c.__H.__.filter(function(p){return!!p.__c});if(c.every(function(p){return!p.__N}))return!o||o.call(this,l,u,s);var i=r.__c.props!==l;return c.forEach(function(p){if(p.__N){var d=p.__[0];p.__=p.__N,p.__N=void 0,d!==p.__[0]&&(i=!0)}}),o&&o.call(this,l,u,s)||i};v.__f=!0;var o=v.shouldComponentUpdate,a=v.componentWillUpdate;v.componentWillUpdate=function(l,u,s){if(this.__e){var c=o;o=void 0,_(l,u,s),o=c}a&&a.call(this,l,u,s)},v.shouldComponentUpdate=_}return r.__N||r.__}function Ce(e,n){var t=Z(H++,3);!b.__s&&Ee(t.__H,n)&&(t.__=e,t.u=n,v.__H.__h.push(t))}function Re(e){return Y=5,De(function(){return{current:e}},[])}function De(e,n){var t=Z(H++,7);return Ee(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function Ie(){for(var e;e=be.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(I),e.__H.__h.forEach(ee),e.__H.__h=[]}catch(n){e.__H.__h=[],b.__e(n,e.__v)}}b.__b=function(e){v=null,ye&&ye(e)},b.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Se&&Se(e,n)},b.__r=function(e){xe&&xe(e),H=0;var n=(v=e.__c).__H;n&&(Q===v?(n.__h=[],v.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(n.__h.forEach(I),n.__h.forEach(ee),n.__h=[],H=0)),Q=v},b.diffed=function(e){ke&&ke(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(be.push(n)!==1&&ve===b.requestAnimationFrame||((ve=b.requestAnimationFrame)||We)(Ie)),n.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Q=v=null},b.__c=function(e,n){n.some(function(t){try{t.__h.forEach(I),t.__h=t.__h.filter(function(r){return!r.__||ee(r)})}catch(r){n.some(function(_){_.__h&&(_.__h=[])}),n=[],b.__e(r,t.__v)}}),we&&we(e,n)},b.unmount=function(e){Ne&&Ne(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{I(r)}catch(_){n=_}}),t.__H=void 0,n&&b.__e(n,t.__v))};var $e=typeof requestAnimationFrame=="function";function We(e){var n,t=function(){clearTimeout(r),$e&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,35);$e&&(n=requestAnimationFrame(t))}function I(e){var n=v,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),v=n}function ee(e){var n=v;e.__c=e.__(),v=n}function Ee(e,n){return!e||e.length!==n.length||n.some(function(t,r){return t!==e[r]})}function qe(e,n){return typeof n=="function"?n(e):n}const Te={state:"idle",query:"",route:null,error:null,reasoning:null};function je(e,n){switch(n.type){case"OPEN":return{...e,state:"open",error:null};case"CLOSE":return{...e,state:"idle",query:"",error:null,reasoning:null};case"SUBMIT":return{...e,state:"thinking",query:n.query,error:null,reasoning:null};case"ROUTE_FOUND":return{...e,state:"navigating",route:n.route,reasoning:n.reasoning};case"NO_MATCH":return{...e,state:"error",route:null,error:n.reasoning};case"NAV_SUCCESS":return{...e,state:"success"};case"NAV_FAILED":return{...e,state:"error",error:n.error};case"API_ERROR":return{...e,state:"error",error:n.error};case"RESET":return Te;default:return e}}async function ze(e,n,t){const r=await fetch(`${e}/api/navigate`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,query:t})});if(!r.ok){const _=await r.json().catch(()=>({error:"Request failed"}));throw new Error(_.error||`HTTP ${r.status}`)}return r.json()}function Ve(e,n){if(!n)return e;let t=e;for(const[r,_]of Object.entries(n))t=t.replace(`:${r}`,encodeURIComponent(_));return t}function Ge(e){var r;const n=e.replace(/\/$/,"")||"/",t=document.querySelectorAll("a[href]");for(const _ of t){const o=_;if((((r=o.pathname)==null?void 0:r.replace(/\/$/,""))||"/")===n)return o.click(),console.log(`[Ourguide-B2B] Navigated via anchor click: ${e}`),!0}return!1}function Je(e){var _,o;const n=window,t=n.next;if((_=t==null?void 0:t.router)!=null&&_.push)return t.router.push(e),console.log(`[Ourguide-B2B] Navigated via Next.js router: ${e}`),!0;if(n.__NUXT__){const a=n.$nuxt;if((o=a==null?void 0:a.$router)!=null&&o.push)return a.$router.push(e),console.log(`[Ourguide-B2B] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function Ke(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Ourguide-B2B] Navigated via pushState: ${e}`),!0}catch{return!1}}async function Xe(e,n){const t=Ve(e,n);return Ge(t)||Je(t)||Ke(t)||(console.log(`[Ourguide-B2B] Navigated via hard navigation: ${t}`),window.location.href=t),!0}function Qe({productId:e,apiUrl:n,position:t}){const[r,_]=Fe(je,Te),o=Re(null);Ce(()=>{if(r.state==="success"){const s=setTimeout(()=>_({type:"RESET"}),2e3);return()=>clearTimeout(s)}},[r.state]),Ce(()=>{r.state==="open"&&setTimeout(()=>{var s;return(s=o.current)==null?void 0:s.focus()},50)},[r.state]);async function a(s){if(s.trim()){_({type:"SUBMIT",query:s.trim()});try{const c=await ze(n,e,s.trim());if(!c.route||c.confidence<.5){_({type:"NO_MATCH",reasoning:c.reasoning||"Couldn't find a matching page. Try rephrasing."});return}_({type:"ROUTE_FOUND",route:c.route,confidence:c.confidence,reasoning:c.reasoning,params:c.params});const i=await Xe(c.route,c.params);_(i?{type:"NAV_SUCCESS"}:{type:"NAV_FAILED",error:"Navigation failed. The page may not exist."})}catch(c){const i=c instanceof Error?c.message:"Something went wrong";_({type:"API_ERROR",error:i})}}}function l(s){s.key==="Enter"&&o.current&&a(o.current.value)}const u=r.state!=="idle";return f("div",{className:`og2-container og2-${t}`,children:[u&&f("div",{className:"og2-panel",children:[f("div",{className:"og2-panel-header",children:[f("span",{className:"og2-panel-title",children:"Where do you want to go?"}),f("button",{className:"og2-close-btn",onClick:()=>_({type:"CLOSE"}),"aria-label":"Close",children:f("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),f("div",{className:"og2-messages",children:[r.query&&f("div",{className:"og2-message og2-message-user",children:f("div",{className:"og2-bubble",children:r.query})}),r.state==="thinking"&&f("div",{className:"og2-message og2-message-system",children:f("div",{className:"og2-bubble",children:[f("span",{className:"og2-spinner"}),"Finding the right page..."]})}),r.state==="navigating"&&f("div",{className:"og2-message og2-message-system",children:f("div",{className:"og2-bubble",children:[f("span",{className:"og2-spinner"}),"Navigating to ",r.route,"..."]})}),r.state==="success"&&f("div",{className:"og2-message og2-message-success",children:f("div",{className:"og2-bubble",children:["Done! Navigated to ",r.route]})}),r.state==="error"&&f("div",{className:"og2-message og2-message-error",children:f("div",{className:"og2-bubble",children:r.error})}),r.reasoning&&r.state!=="error"&&r.state!=="thinking"&&f("div",{className:"og2-message og2-message-system",children:f("div",{className:"og2-bubble",style:{fontSize:"12px",opacity:.7},children:r.reasoning})})]}),(r.state==="open"||r.state==="error")&&f("div",{className:"og2-input-area",children:[f("input",{ref:o,className:"og2-input",type:"text",placeholder:"e.g., billing settings",onKeyDown:l}),f("button",{className:"og2-send-btn",onClick:()=>o.current&&a(o.current.value),children:"Go"})]})]}),f("button",{className:"og2-trigger",onClick:()=>_(u?{type:"CLOSE"}:{type:"OPEN"}),"aria-label":u?"Close navigation helper":"Open navigation helper",children:u?f("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:f("path",{d:"M6 6L18 18M18 6L6 18"})}):f("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("circle",{cx:"11",cy:"11",r:"8"}),f("path",{d:"M21 21L16.65 16.65"})]})})]})}const Ye=`/* Ourguide-B2B Widget - All classes prefixed with og2- */

.og2-container {
  position: fixed;
  z-index: 2147483647;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #1a1a1a;
}

.og2-container.og2-bottom-right {
  bottom: 20px;
  right: 20px;
}

.og2-container.og2-bottom-left {
  bottom: 20px;
  left: 20px;
}

/* Floating trigger button */
.og2-trigger {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #18181b;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.og2-trigger:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.og2-trigger svg {
  width: 24px;
  height: 24px;
}

/* Chat panel */
.og2-panel {
  position: absolute;
  bottom: 64px;
  right: 0;
  width: 360px;
  max-height: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid #e4e4e7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.og2-panel-header {
  padding: 14px 16px;
  border-bottom: 1px solid #f4f4f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.og2-panel-title {
  font-size: 14px;
  font-weight: 600;
  color: #18181b;
}

.og2-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;
  padding: 4px;
  display: flex;
  border-radius: 4px;
}

.og2-close-btn:hover {
  color: #18181b;
  background: #f4f4f5;
}

/* Messages area */
.og2-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  min-height: 80px;
}

.og2-message {
  margin-bottom: 12px;
  font-size: 13px;
}

.og2-message-user {
  text-align: right;
}

.og2-message-user .og2-bubble {
  display: inline-block;
  background: #18181b;
  color: white;
  padding: 8px 12px;
  border-radius: 12px 12px 2px 12px;
  max-width: 85%;
  text-align: left;
}

.og2-message-system .og2-bubble {
  display: inline-block;
  background: #f4f4f5;
  color: #3f3f46;
  padding: 8px 12px;
  border-radius: 12px 12px 12px 2px;
  max-width: 85%;
}

.og2-message-success .og2-bubble {
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.og2-message-error .og2-bubble {
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

/* Input area */
.og2-input-area {
  padding: 12px 16px;
  border-top: 1px solid #f4f4f5;
  display: flex;
  gap: 8px;
}

.og2-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  font-size: 13px;
  outline: none;
  font-family: inherit;
  color: #18181b;
  background: white;
}

.og2-input:focus {
  border-color: #a1a1aa;
  box-shadow: 0 0 0 2px rgba(161, 161, 170, 0.2);
}

.og2-input::placeholder {
  color: #a1a1aa;
}

.og2-send-btn {
  padding: 8px 14px;
  background: #18181b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
}

.og2-send-btn:hover {
  background: #27272a;
}

.og2-send-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

/* Spinner */
.og2-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #e4e4e7;
  border-top-color: #18181b;
  border-radius: 50%;
  animation: og2-spin 0.6s linear infinite;
  vertical-align: middle;
  margin-right: 6px;
}

@keyframes og2-spin {
  to { transform: rotate(360deg); }
}
`;(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="ourguide-b2b-widget"]');if(!e){console.error("[Ourguide-B2B] Could not find script element");return}const n=e.dataset.productId,t=e.dataset.apiUrl??"http://localhost:3000",r=e.dataset.position??"bottom-right";if(!n){console.error("[Ourguide-B2B] data-product-id is required");return}const _=document.createElement("style");_.textContent=Ye,document.head.appendChild(_);const o=document.createElement("div");o.id="og2-widget-root",document.body.appendChild(o),Le(ae(Qe,{productId:n,apiUrl:t,position:r}),o)})()})();
