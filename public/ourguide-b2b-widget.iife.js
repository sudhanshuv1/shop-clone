(function(){"use strict";var H,m,ce,A,ue,de,fe,pe,J,K,Q,P={},ge=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,D=Array.isArray;function I(e,n){for(var t in n)e[t]=n[t];return e}function Y(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function he(e,n,t){var o,s,r,a={};for(r in n)r=="key"?o=n[r]:r=="ref"?s=n[r]:a[r]=n[r];if(arguments.length>2&&(a.children=arguments.length>3?H.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return B(e,a,o,s,null)}function B(e,n,t,o,s){var r={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++ce,__i:-1,__u:0};return s==null&&m.vnode!=null&&m.vnode(r),r}function F(e){return e.children}function j(e,n){this.props=e,this.context=n}function L(e,n){if(n==null)return e.__?L(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?L(e):null}function me(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return me(e)}}function ve(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!W.__r++||ue!=m.debounceRendering)&&((ue=m.debounceRendering)||de)(W)}function W(){for(var e,n,t,o,s,r,a,_=1;A.length;)A.length>_&&A.sort(fe),e=A.shift(),_=A.length,e.__d&&(t=void 0,o=void 0,s=(o=(n=e).__v).__e,r=[],a=[],n.__P&&((t=I({},o)).__v=o.__v+1,m.vnode&&m.vnode(t),Z(n.__P,t,o,n.__n,n.__P.namespaceURI,32&o.__u?[s]:null,r,s??L(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,we(r,t,a),o.__e=o.__=null,t.__e!=s&&me(t)));W.__r=0}function be(e,n,t,o,s,r,a,_,c,l,u){var i,f,d,y,T,k,g,h=o&&o.__k||ge,w=n.length;for(c=Ge(t,n,h,c,w),i=0;i<w;i++)(d=t.__k[i])!=null&&(f=d.__i==-1?P:h[d.__i]||P,d.__i=i,k=Z(e,d,f,s,r,a,_,c,l,u),y=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&ne(f.ref,null,d),u.push(d.ref,d.__c||y,d)),T==null&&y!=null&&(T=y),(g=!!(4&d.__u))||f.__k===d.__k?c=ye(d,c,e,g):typeof d.type=="function"&&k!==void 0?c=k:y&&(c=y.nextSibling),d.__u&=-7);return t.__e=T,c}function Ge(e,n,t,o,s){var r,a,_,c,l,u=t.length,i=u,f=0;for(e.__k=new Array(s),r=0;r<s;r++)(a=n[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[r]=B(null,a,null,null,null):D(a)?a=e.__k[r]=B(F,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[r]=B(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[r]=a,c=r+f,a.__=e,a.__b=e.__b+1,_=null,(l=a.__i=qe(a,t,c,i))!=-1&&(i--,(_=t[l])&&(_.__u|=2)),_==null||_.__v==null?(l==-1&&(s>u?f--:s<u&&f++),typeof a.type!="function"&&(a.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,a.__u|=4))):e.__k[r]=null;if(i)for(r=0;r<u;r++)(_=t[r])!=null&&(2&_.__u)==0&&(_.__e==o&&(o=L(_)),Ee(_,_));return o}function ye(e,n,t,o){var s,r;if(typeof e.type=="function"){for(s=e.__k,r=0;s&&r<s.length;r++)s[r]&&(s[r].__=e,n=ye(s[r],n,t,o));return n}e.__e!=n&&(o&&(n&&e.type&&!n.parentNode&&(n=L(e)),t.insertBefore(e.__e,n||null)),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function qe(e,n,t,o){var s,r,a,_=e.key,c=e.type,l=n[t],u=l!=null&&(2&l.__u)==0;if(l===null&&_==null||u&&_==l.key&&c==l.type)return t;if(o>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<n.length;)if((l=n[a=s>=0?s--:r++])!=null&&(2&l.__u)==0&&_==l.key&&c==l.type)return a}return-1}function xe(e,n,t){n[0]=="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||ze.test(n)?t:t+"px"}function z(e,n,t,o,s){var r,a;e:if(n=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||xe(e.style,n,"");if(t)for(n in t)o&&t[n]==o[n]||xe(e.style,n,t[n])}else if(n[0]=="o"&&n[1]=="n")r=n!=(n=n.replace(pe,"$1")),a=n.toLowerCase(),n=a in e||n=="onFocusOut"||n=="onFocusIn"?a.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o?t.u=o.u:(t.u=J,e.addEventListener(n,r?Q:K,r)):e.removeEventListener(n,r?Q:K,r);else{if(s=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!="-"?e.removeAttribute(n):e.setAttribute(n,n=="popover"&&t==1?"":t))}}function ke(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=J++;else if(n.t<t.u)return;return t(m.event?m.event(n):n)}}}function Z(e,n,t,o,s,r,a,_,c,l){var u,i,f,d,y,T,k,g,h,w,v,C,S,N,M,R,E,$=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[_=n.__e=t.__e]),(u=m.__b)&&u(n);e:if(typeof $=="function")try{if(g=n.props,h="prototype"in $&&$.prototype.render,w=(u=$.contextType)&&o[u.__c],v=u?w?w.props.value:u.__:o,t.__c?k=(i=n.__c=t.__c).__=i.__E:(h?n.__c=i=new $(g,v):(n.__c=i=new j(g,v),i.constructor=$,i.render=Xe),w&&w.sub(i),i.state||(i.state={}),i.__n=o,f=i.__d=!0,i.__h=[],i._sb=[]),h&&i.__s==null&&(i.__s=i.state),h&&$.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=I({},i.__s)),I(i.__s,$.getDerivedStateFromProps(g,i.__s))),d=i.props,y=i.state,i.__v=n,f)h&&$.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),h&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(h&&$.getDerivedStateFromProps==null&&g!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,v),n.__v==t.__v||!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,v)===!1){for(n.__v!=t.__v&&(i.props=g,i.state=i.__s,i.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.some(function(O){O&&(O.__=n)}),C=0;C<i._sb.length;C++)i.__h.push(i._sb[C]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,v),h&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,y,T)})}if(i.context=v,i.props=g,i.__P=e,i.__e=!1,S=m.__r,N=0,h){for(i.state=i.__s,i.__d=!1,S&&S(n),u=i.render(i.props,i.state,i.context),M=0;M<i._sb.length;M++)i.__h.push(i._sb[M]);i._sb=[]}else do i.__d=!1,S&&S(n),u=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++N<25);i.state=i.__s,i.getChildContext!=null&&(o=I(I({},o),i.getChildContext())),h&&!f&&i.getSnapshotBeforeUpdate!=null&&(T=i.getSnapshotBeforeUpdate(d,y)),R=u,u!=null&&u.type===F&&u.key==null&&(R=Se(u.props.children)),_=be(e,D(R)?R:[R],n,t,o,s,r,a,_,c,l),i.base=n.__e,n.__u&=-161,i.__h.length&&a.push(i),k&&(i.__E=i.__=null)}catch(O){if(n.__v=null,c||r!=null)if(O.then){for(n.__u|=c?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;r[r.indexOf(_)]=null,n.__e=_}else{for(E=r.length;E--;)Y(r[E]);ee(n)}else n.__e=t.__e,n.__k=t.__k,O.then||ee(n);m.__e(O,n,t)}else r==null&&n.__v==t.__v?(n.__k=t.__k,n.__e=t.__e):_=n.__e=Ve(t.__e,n,t,o,s,r,a,c,l);return(u=m.diffed)&&u(n),128&n.__u?void 0:_}function ee(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ee)}function we(e,n,t){for(var o=0;o<t.length;o++)ne(t[o],t[++o],t[++o]);m.__c&&m.__c(n,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(r){r.call(s)})}catch(r){m.__e(r,s.__v)}})}function Se(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:D(e)?e.map(Se):I({},e)}function Ve(e,n,t,o,s,r,a,_,c){var l,u,i,f,d,y,T,k=t.props||P,g=n.props,h=n.type;if(h=="svg"?s="http://www.w3.org/2000/svg":h=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((d=r[l])&&"setAttribute"in d==!!h&&(h?d.localName==h:d.nodeType==3)){e=d,r[l]=null;break}}if(e==null){if(h==null)return document.createTextNode(g);e=document.createElementNS(s,h,g.is&&g),_&&(m.__m&&m.__m(n,r),_=!1),r=null}if(h==null)k===g||_&&e.data==g||(e.data=g);else{if(r=r&&H.call(e.childNodes),!_&&r!=null)for(k={},l=0;l<e.attributes.length;l++)k[(d=e.attributes[l]).name]=d.value;for(l in k)if(d=k[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=d;else if(!(l in g)){if(l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g)continue;z(e,l,null,d,s)}}for(l in g)d=g[l],l=="children"?f=d:l=="dangerouslySetInnerHTML"?u=d:l=="value"?y=d:l=="checked"?T=d:_&&typeof d!="function"||k[l]===d||z(e,l,d,k[l],s);if(u)_||i&&(u.__html==i.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),n.__k=[];else if(i&&(e.innerHTML=""),be(n.type=="template"?e.content:e,D(f)?f:[f],n,t,o,h=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,a,r?r[0]:t.__k&&L(t,0),_,c),r!=null)for(l=r.length;l--;)Y(r[l]);_||(l="value",h=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[l]||h=="progress"&&!y||h=="option"&&y!=k[l])&&z(e,l,y,k[l],s),l="checked",T!=null&&T!=e[l]&&z(e,l,T,k[l],s))}return e}function ne(e,n,t){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&n==null||(e.__u=e(n))}else e.current=n}catch(s){m.__e(s,t)}}function Ee(e,n,t){var o,s;if(m.unmount&&m.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||ne(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){m.__e(r,n)}o.base=o.__P=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&Ee(o[s],n,t||typeof e.type!="function");t||Y(e.__e),e.__c=e.__=e.__e=void 0}function Xe(e,n,t){return this.constructor(e,t)}function Je(e,n,t){var o,s,r,a;n==document&&(n=document.documentElement),m.__&&m.__(e,n),s=(o=!1)?null:n.__k,r=[],a=[],Z(n,e=n.__k=he(F,null,[e]),s||P,P,n.namespaceURI,s?null:n.firstChild?H.call(n.childNodes):null,r,s?s.__e:n.firstChild,o,a),we(r,e,a)}H=ge.slice,m={__e:function(e,n,t,o){for(var s,r,a;n=n.__;)if((s=n.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,o||{}),a=s.__d),a)return s.__E=s}catch(_){e=_}throw e}},ce=0,j.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=I({},this.state),typeof e=="function"&&(e=e(I({},t),this.props)),e&&I(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),ve(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ve(this))},j.prototype.render=F,A=[],de=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fe=function(e,n){return e.__v.__b-n.__v.__b},W.__r=0,pe=/(PointerCapture)$|Capture$/i,J=0,K=ke(!1),Q=ke(!0);var Ke=0;function p(e,n,t,o,s,r){n||(n={});var a,_,c=n;if("ref"in c)for(_ in c={},n)_=="ref"?a=n[_]:c[_]=n[_];var l={type:e,props:c,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ke,__i:-1,__u:0,__source:s,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(_ in a)c[_]===void 0&&(c[_]=a[_]);return m.vnode&&m.vnode(l),l}var U,b,te,Ce,G=0,Ne=[],x=m,Te=x.__b,$e=x.__r,Ie=x.diffed,Oe=x.__c,Ae=x.unmount,Re=x.__;function oe(e,n){x.__h&&x.__h(b,e,G||n),G=0;var t=b.__H||(b.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Qe(e,n,t){var o=oe(U++,2);if(o.t=e,!o.__c&&(o.__=[nn(void 0,n),function(_){var c=o.__N?o.__N[0]:o.__[0],l=o.t(c,_);c!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=b,!b.__f)){var s=function(_,c,l){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(f){return!!f.__c});if(u.every(function(f){return!f.__N}))return!r||r.call(this,_,c,l);var i=o.__c.props!==_;return u.forEach(function(f){if(f.__N){var d=f.__[0];f.__=f.__N,f.__N=void 0,d!==f.__[0]&&(i=!0)}}),r&&r.call(this,_,c,l)||i};b.__f=!0;var r=b.shouldComponentUpdate,a=b.componentWillUpdate;b.componentWillUpdate=function(_,c,l){if(this.__e){var u=r;r=void 0,s(_,c,l),r=u}a&&a.call(this,_,c,l)},b.shouldComponentUpdate=s}return o.__N||o.__}function q(e,n){var t=oe(U++,3);!x.__s&&Pe(t.__H,n)&&(t.__=e,t.u=n,b.__H.__h.push(t))}function re(e){return G=5,Le(function(){return{current:e}},[])}function Le(e,n){var t=oe(U++,7);return Pe(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function Ye(e,n){return G=8,Le(function(){return e},n)}function Ze(){for(var e;e=Ne.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(V),e.__H.__h.forEach(se),e.__H.__h=[]}catch(n){e.__H.__h=[],x.__e(n,e.__v)}}x.__b=function(e){b=null,Te&&Te(e)},x.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Re&&Re(e,n)},x.__r=function(e){$e&&$e(e),U=0;var n=(b=e.__c).__H;n&&(te===b?(n.__h=[],b.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(n.__h.forEach(V),n.__h.forEach(se),n.__h=[],U=0)),te=b},x.diffed=function(e){Ie&&Ie(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Ne.push(n)!==1&&Ce===x.requestAnimationFrame||((Ce=x.requestAnimationFrame)||en)(Ze)),n.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),te=b=null},x.__c=function(e,n){n.some(function(t){try{t.__h.forEach(V),t.__h=t.__h.filter(function(o){return!o.__||se(o)})}catch(o){n.some(function(s){s.__h&&(s.__h=[])}),n=[],x.__e(o,t.__v)}}),Oe&&Oe(e,n)},x.unmount=function(e){Ae&&Ae(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{V(o)}catch(s){n=s}}),t.__H=void 0,n&&x.__e(n,t.__v))};var Me=typeof requestAnimationFrame=="function";function en(e){var n,t=function(){clearTimeout(o),Me&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,35);Me&&(n=requestAnimationFrame(t))}function V(e){var n=b,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),b=n}function se(e){var n=b;e.__c=e.__(),b=n}function Pe(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function nn(e,n){return typeof n=="function"?n(e):n}const tn={isOpen:!1,messages:[],isStreaming:!1,error:null};function Ue(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function on(e,n){switch(n.type){case"OPEN":return{...e,isOpen:!0,error:null};case"CLOSE":return{...e,isOpen:!1};case"LOAD_MESSAGES":return{...e,messages:n.messages};case"ADD_USER_MESSAGE":return{...e,error:null,messages:[...e.messages,{id:n.id,role:"user",content:n.content}]};case"START_STREAMING":return{...e,isStreaming:!0,error:null,messages:[...e.messages,{id:n.id,role:"assistant",content:"",isStreaming:!0}]};case"APPEND_TEXT":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,content:o.content+n.text}),{...e,messages:t}}case"ADD_TOOL_CALL":{const t=[...e.messages],o=t[t.length-1];if(o&&o.role==="assistant"){const s=[...o.toolCalls??[],n.toolCall];t[t.length-1]={...o,toolCalls:s}}return{...e,messages:t}}case"SET_TOOL_RESULT":{const t=[...e.messages],o=t[t.length-1];if(o&&o.role==="assistant"&&o.toolCalls){const s=o.toolCalls.map(r=>r.id===n.toolCallId?{...r,result:n.result,status:"done"}:r);t[t.length-1]={...o,toolCalls:s}}return{...e,messages:t}}case"FINISH_STREAMING":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,isStreaming:!1}),{...e,isStreaming:!1,messages:t}}case"SET_ERROR":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,isStreaming:!1}),{...e,isStreaming:!1,error:n.error,messages:t}}case"CLEAR_MESSAGES":return{...e,messages:[],error:null};default:return e}}async function He(e,n,t,o,s){const r=await fetch(`${e}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,messages:t,endUserSessionId:o,...s?{conversationId:s}:{}})});if(!r.ok){const a=await r.json().catch(()=>({error:"Request failed"}));throw new Error(a.error||`HTTP ${r.status}`)}if(!r.body)throw new Error("No response stream available");return{stream:r.body,conversationId:r.headers.get("X-Conversation-Id")}}async function rn(e,n,t,o,s){const r=await fetch(`${e}/api/widget/identify`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,endUserSessionId:t,token:o,name:s})}),a=await r.json().catch(()=>({}));if(!r.ok)throw new Error(a.error||`HTTP ${r.status}`);return a}async function sn(e,n,t){const o=await fetch(`${e}/api/widget/reset-user`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,endUserSessionId:t})}),s=await o.json().catch(()=>({}));if(!o.ok)throw new Error(s.error||`HTTP ${o.status}`);return s}const ie={};function an(e){Object.assign(ie,e)}function ln(e){return ie[e]}function _n(e){return e in ie}async function De(e,n){const t=e.getReader(),o=new TextDecoder;let s="";try{for(;;){const{done:r,value:a}=await t.read();if(r)break;s+=o.decode(a,{stream:!0});const _=s.split(`

`);s=_.pop()??"";for(const c of _)Be(c.trim(),n)}s.trim()&&Be(s.trim(),n),n.onFinish()}catch(r){const a=r instanceof Error?r.message:"Stream read failed";n.onError(a)}finally{t.releaseLock()}}function Be(e,n){const t=e.split(`
`);for(const o of t){if(!o.startsWith("data: "))continue;const s=o.slice(6);if(s==="[DONE]")return;try{const r=JSON.parse(s);switch(r.type){case"text-delta":r.delta&&n.onTextDelta(r.delta);break;case"tool-input-available":r.toolCallId&&r.toolName&&n.onToolCall(r.toolCallId,r.toolName,r.input??{});break;case"tool-output-available":r.toolCallId&&n.onToolResult(r.toolCallId,r.output);break;case"tool-call":r.toolCallId&&r.toolName&&n.onToolCall(r.toolCallId,r.toolName,r.input??{});break;case"tool-result":r.toolCallId&&n.onToolResult(r.toolCallId,r.output);break;case"error":n.onError(r.errorText??r.reason??"Unknown error");break;case"abort":n.onError(r.reason??"Response aborted");break;default:break}}catch{}}}function cn(e,n){if(!n)return e;let t=e;for(const[o,s]of Object.entries(n))t=t.replace(`:${o}`,encodeURIComponent(s));return t}function un(e){var o;const n=e.replace(/\/$/,"")||"/",t=document.querySelectorAll("a[href]");for(const s of t){const r=s;if((((o=r.pathname)==null?void 0:o.replace(/\/$/,""))||"/")===n)return r.click(),console.log(`[Ourguide-B2B] Navigated via anchor click: ${e}`),!0}return!1}function dn(e){var s,r;const n=window,t=n.next;if((s=t==null?void 0:t.router)!=null&&s.push)return t.router.push(e),console.log(`[Ourguide-B2B] Navigated via Next.js router: ${e}`),!0;if(n.__NUXT__){const a=n.$nuxt;if((r=a==null?void 0:a.$router)!=null&&r.push)return a.$router.push(e),console.log(`[Ourguide-B2B] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function fn(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Ourguide-B2B] Navigated via pushState: ${e}`),!0}catch{return!1}}async function pn(e,n){const t=cn(e,n);return un(t)||dn(t)||fn(t)||(console.log(`[Ourguide-B2B] Navigated via hard navigation: ${t}`),window.location.href=t),!0}const gn="og2-chat-",hn="og2-enduser-session-",ae="og2-conv-";function le(e){return`${gn}${e}`}function Fe(e){return`${hn}${e}`}function je(){var n,t;const e=(t=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:t.call(n);return e||`${Date.now()}-${Math.random().toString(16).slice(2)}`}function _e(e){const n=Fe(e);try{const t=localStorage.getItem(n);if(t&&t.trim())return t;const o=`sess_${je()}`;return localStorage.setItem(n,o),o}catch{return`sess_${je()}`}}function mn(e){try{localStorage.removeItem(Fe(e))}catch{}}function vn(e,n){try{const t=n.map(({isStreaming:o,...s})=>s);sessionStorage.setItem(le(e),JSON.stringify(t))}catch{}}function bn(e){try{const n=sessionStorage.getItem(le(e));return n?JSON.parse(n):[]}catch{return[]}}function yn(e){try{sessionStorage.removeItem(le(e)),sessionStorage.removeItem(`${ae}${e}`)}catch{}}function xn(e,n){try{sessionStorage.setItem(`${ae}${e}`,n)}catch{}}function kn(e){try{return sessionStorage.getItem(`${ae}${e}`)}catch{return null}}function wn({productId:e,apiUrl:n,position:t}){const[o,s]=Qe(on,tn),r=re(null),a=re(null),_=re(null);q(()=>{_.current=kn(e);const i=bn(e);i.length>0&&s({type:"LOAD_MESSAGES",messages:i})},[e]),q(()=>{!o.isStreaming&&o.messages.length>0&&vn(e,o.messages)},[o.messages,o.isStreaming,e]),q(()=>{o.isOpen&&!o.isStreaming&&setTimeout(()=>{var i;return(i=r.current)==null?void 0:i.focus()},50)},[o.isOpen,o.isStreaming]),q(()=>{var i;(i=a.current)==null||i.scrollIntoView({behavior:"smooth"})},[o.messages]);const c=Ye(async i=>{const f=i.trim();if(!f||o.isStreaming)return;r.current&&(r.current.value="");const d=Ue();s({type:"ADD_USER_MESSAGE",id:d,content:f});const y=[...o.messages.map(w=>({role:w.role,content:w.content})),{role:"user",content:f}],T=Ue();s({type:"START_STREAMING",id:T});const k=new Map,g=new Map,h=w=>({onTextDelta:v=>{s({type:"APPEND_TEXT",text:v})},onToolCall:(v,C,S)=>{const N={id:v,name:C,args:S,status:"calling"};k.set(v,N),s({type:"ADD_TOOL_CALL",toolCall:N}),w&&_n(C)&&g.set(v,{name:C,args:S})},onToolResult:(v,C)=>{s({type:"SET_TOOL_RESULT",toolCallId:v,result:C});const S=k.get(v);if((S==null?void 0:S.name)==="navigate_to_page"){const N=C;N.route&&(N.confidence??0)>=.5&&pn(N.route,N.params)}},onError:v=>{s({type:"SET_ERROR",error:v})}});try{const w=_e(e),{stream:v,conversationId:C}=await He(n,e,y,w,_.current||void 0);C&&!_.current&&(_.current=C,xn(e,C));let S=!1;if(await De(v,{...h(!0),onError:E=>{S=!0,s({type:"SET_ERROR",error:E})},onFinish:()=>{}}),S||g.size===0){S||s({type:"FINISH_STREAMING"});return}const N=[];for(const[E,{name:$,args:O}]of g){const Nn=ln($);let X;try{X=await Nn(O)}catch(We){X={status:"error",error:We instanceof Error?We.message:"Handler failed"}}s({type:"SET_TOOL_RESULT",toolCallId:E,result:X}),N.push({toolCallId:E,toolName:$,args:O,result:X})}const M=[...y,{role:"assistant",content:N.map(E=>({type:"tool-call",toolCallId:E.toolCallId,toolName:E.toolName,input:E.args}))},{role:"tool",content:N.map(E=>({type:"tool-result",toolCallId:E.toolCallId,toolName:E.toolName,output:{type:"json",value:E.result}}))}],{stream:R}=await He(n,e,M,void 0,_.current||void 0);await De(R,{...h(!1),onFinish:()=>{s({type:"FINISH_STREAMING"})}})}catch(w){const v=w instanceof Error?w.message:"Something went wrong";s({type:"FINISH_STREAMING"}),s({type:"SET_ERROR",error:v})}},[o.messages,o.isStreaming,n,e]);function l(i){i.key==="Enter"&&!i.shiftKey&&r.current&&(i.preventDefault(),c(r.current.value))}function u(){yn(e),_.current=null,s({type:"CLEAR_MESSAGES"})}return p("div",{className:`og2-container og2-${t}`,children:[o.isOpen&&p("div",{className:"og2-panel",children:[p("div",{className:"og2-panel-header",children:[p("span",{className:"og2-panel-title",children:"Assistant"}),p("div",{className:"og2-header-actions",children:[o.messages.length>0&&p("button",{className:"og2-clear-btn",onClick:u,"aria-label":"Clear chat",title:"Clear chat",children:p("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"})})}),p("button",{className:"og2-close-btn",onClick:()=>s({type:"CLOSE"}),"aria-label":"Close",children:p("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:p("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),p("div",{className:"og2-messages",children:[o.messages.length===0&&!o.error&&p("div",{className:"og2-empty-state",children:"Ask me anything or tell me where you'd like to go."}),o.messages.map(i=>p("div",{className:`og2-message og2-message-${i.role}`,children:p("div",{className:"og2-bubble",children:[i.content,i.isStreaming&&p("span",{className:"og2-cursor"}),Sn(i.toolCalls)]})},i.id)),o.error&&p("div",{className:"og2-message og2-message-error",children:p("div",{className:"og2-bubble",children:o.error})}),p("div",{ref:a})]}),p("div",{className:"og2-input-area",children:[p("input",{ref:r,className:"og2-input",type:"text",placeholder:"Ask anything or navigate...",onKeyDown:l,disabled:o.isStreaming}),p("button",{className:"og2-send-btn",onClick:()=>r.current&&c(r.current.value),disabled:o.isStreaming,children:o.isStreaming?p("span",{className:"og2-spinner og2-spinner-sm"}):p("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"})})})]})]}),p("button",{className:"og2-trigger",onClick:()=>s(o.isOpen?{type:"CLOSE"}:{type:"OPEN"}),"aria-label":o.isOpen?"Close assistant":"Open assistant",children:o.isOpen?p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:p("path",{d:"M6 6L18 18M18 6L6 18"})}):p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})})]})}function Sn(e){return!e||e.length===0?null:p("div",{className:"og2-tool-calls",children:e.map(n=>p("div",{className:"og2-tool-indicator",children:[n.status==="calling"&&p("span",{className:"og2-spinner og2-spinner-sm"}),n.status==="done"&&p("svg",{className:"og2-tool-check",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M20 6L9 17L4 12"})}),p("span",{className:"og2-tool-label",children:En(n)})]},n.id))})}function En(e){if(e.name==="navigate_to_page"){if(e.status==="calling")return"Finding the right page...";const n=e.result;return n!=null&&n.route?`Navigated to ${n.route}`:"No matching page found"}return e.name}const Cn=`/* Ourguide-B2B Widget - All classes prefixed with og2- */

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
  width: 380px;
  max-height: 520px;
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
  flex-shrink: 0;
}

.og2-panel-title {
  font-size: 14px;
  font-weight: 600;
  color: #18181b;
}

.og2-header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.og2-clear-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;
  padding: 4px;
  display: flex;
  border-radius: 4px;
}

.og2-clear-btn:hover {
  color: #18181b;
  background: #f4f4f5;
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
  scroll-behavior: smooth;
}

.og2-empty-state {
  text-align: center;
  color: #a1a1aa;
  font-size: 13px;
  padding: 24px 16px;
}

.og2-message {
  margin-bottom: 12px;
  font-size: 13px;
}

.og2-message:last-child {
  margin-bottom: 0;
}

/* User messages — right aligned, dark */
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
  white-space: pre-wrap;
  word-break: break-word;
}

/* Assistant messages — left aligned, light */
.og2-message-assistant .og2-bubble {
  display: inline-block;
  background: #f4f4f5;
  color: #3f3f46;
  padding: 8px 12px;
  border-radius: 12px 12px 12px 2px;
  max-width: 85%;
  white-space: pre-wrap;
  word-break: break-word;
}

.og2-message-error .og2-bubble {
  display: inline-block;
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
  padding: 8px 12px;
  border-radius: 12px 12px 12px 2px;
  max-width: 85%;
  font-size: 12px;
}

/* Streaming cursor */
.og2-cursor {
  display: inline-block;
  width: 2px;
  height: 14px;
  background: #3f3f46;
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: og2-blink 0.8s step-end infinite;
}

@keyframes og2-blink {
  50% { opacity: 0; }
}

/* Tool call indicators */
.og2-tool-calls {
  margin-top: 6px;
}

.og2-tool-indicator {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
  font-size: 11px;
  color: #71717a;
}

.og2-tool-check {
  color: #16a34a;
  flex-shrink: 0;
}

.og2-tool-label {
  line-height: 1.3;
}

/* Input area */
.og2-input-area {
  padding: 12px 16px;
  border-top: 1px solid #f4f4f5;
  display: flex;
  gap: 8px;
  flex-shrink: 0;
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

.og2-input:disabled {
  background: #fafafa;
  color: #a1a1aa;
}

.og2-send-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  background: #18181b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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
  flex-shrink: 0;
}

.og2-spinner-sm {
  width: 12px;
  height: 12px;
  border-width: 1.5px;
}

.og2-send-btn .og2-spinner-sm {
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: white;
}

@keyframes og2-spin {
  to { transform: rotate(360deg); }
}
`;(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="ourguide-b2b-widget"]');if(!e){console.error("[Ourguide-B2B] Could not find script element");return}const n=e.dataset.productId||"",t=e.dataset.apiUrl??"http://localhost:3000",o=e.dataset.position??"bottom-right";if(!n){console.error("[Ourguide-B2B] data-product-id is required");return}async function s(l,u){try{if(l==="registerTools"){u&&typeof u=="object"&&an(u);return}if(l==="identify"){const i=u??{};if(!i.token||typeof i.token!="string"||!i.token.trim()){console.warn("[Ourguide-B2B] identify: token is required");return}const f=_e(n);await rn(t,n,f,i.token,i.name);return}if(l==="resetUser"){const i=_e(n);await sn(t,n,i),mn(n);return}}catch(i){const f=i instanceof Error?i.message:"Unknown error";console.warn(`[Ourguide-B2B] ${l} failed: ${f}`)}}const r=window,a=Array.isArray(r.ourguide)?r.ourguide:[];r.ourguide=(l,u)=>{s(l,u)};for(const l of a)Array.isArray(l)&&(l[0]==="identify"||l[0]==="resetUser"||l[0]==="registerTools")&&s(l[0],l[1]);const _=document.createElement("style");_.textContent=Cn,document.head.appendChild(_);const c=document.createElement("div");c.id="og2-widget-root",document.body.appendChild(c),Je(he(wn,{productId:n,apiUrl:t,position:o}),c)})()})();
