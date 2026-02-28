(function(){"use strict";var ee,y,Me,B,Re,Oe,Ae,Le,ge,fe,_e,V={},He=[],xn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ne=Array.isArray;function A(e,n){for(var t in n)e[t]=n[t];return e}function pe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Be(e,n,t){var o,r,i,a={};for(i in n)i=="key"?o=n[i]:i=="ref"?r=n[i]:a[i]=n[i];if(arguments.length>2&&(a.children=arguments.length>3?ee.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return te(e,a,o,r,null)}function te(e,n,t,o,r){var i={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Me,__i:-1,__u:0};return r==null&&y.vnode!=null&&y.vnode(i),i}function oe(e){return e.children}function re(e,n){this.props=e,this.context=n}function U(e,n){if(n==null)return e.__?U(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?U(e):null}function Pe(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Pe(e)}}function De(e){(!e.__d&&(e.__d=!0)&&B.push(e)&&!ie.__r++||Re!=y.debounceRendering)&&((Re=y.debounceRendering)||Oe)(ie)}function ie(){for(var e,n,t,o,r,i,a,c=1;B.length;)B.length>c&&B.sort(Ae),e=B.shift(),c=B.length,e.__d&&(t=void 0,o=void 0,r=(o=(n=e).__v).__e,i=[],a=[],n.__P&&((t=A({},o)).__v=o.__v+1,y.vnode&&y.vnode(t),he(n.__P,t,o,n.__n,n.__P.namespaceURI,32&o.__u?[r]:null,i,r??U(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,We(i,t,a),o.__e=o.__=null,t.__e!=r&&Pe(t)));ie.__r=0}function ze(e,n,t,o,r,i,a,c,g,l,_){var s,f,p,m,E,S,b,v=o&&o.__k||He,$=n.length;for(g=wn(t,n,v,g,$),s=0;s<$;s++)(p=t.__k[s])!=null&&(f=p.__i==-1?V:v[p.__i]||V,p.__i=s,S=he(e,p,f,r,i,a,c,g,l,_),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&be(f.ref,null,p),_.push(p.ref,p.__c||m,p)),E==null&&m!=null&&(E=m),(b=!!(4&p.__u))||f.__k===p.__k?g=Ue(p,g,e,b):typeof p.type=="function"&&S!==void 0?g=S:m&&(g=m.nextSibling),p.__u&=-7);return t.__e=E,g}function wn(e,n,t,o,r){var i,a,c,g,l,_=t.length,s=_,f=0;for(e.__k=new Array(r),i=0;i<r;i++)(a=n[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[i]=te(null,a,null,null,null):ne(a)?a=e.__k[i]=te(oe,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[i]=te(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[i]=a,g=i+f,a.__=e,a.__b=e.__b+1,c=null,(l=a.__i=kn(a,t,g,s))!=-1&&(s--,(c=t[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(r>_?f--:r<_&&f++),typeof a.type!="function"&&(a.__u|=4)):l!=g&&(l==g-1?f--:l==g+1?f++:(l>g?f--:f++,a.__u|=4))):e.__k[i]=null;if(s)for(i=0;i<_;i++)(c=t[i])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=U(c)),Ve(c,c));return o}function Ue(e,n,t,o){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,n=Ue(r[i],n,t,o));return n}e.__e!=n&&(o&&(n&&e.type&&!n.parentNode&&(n=U(e)),t.insertBefore(e.__e,n||null)),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function kn(e,n,t,o){var r,i,a,c=e.key,g=e.type,l=n[t],_=l!=null&&(2&l.__u)==0;if(l===null&&c==null||_&&c==l.key&&g==l.type)return t;if(o>(_?1:0)){for(r=t-1,i=t+1;r>=0||i<n.length;)if((l=n[a=r>=0?r--:i++])!=null&&(2&l.__u)==0&&c==l.key&&g==l.type)return a}return-1}function je(e,n,t){n[0]=="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||xn.test(n)?t:t+"px"}function se(e,n,t,o,r){var i,a;e:if(n=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||je(e.style,n,"");if(t)for(n in t)o&&t[n]==o[n]||je(e.style,n,t[n])}else if(n[0]=="o"&&n[1]=="n")i=n!=(n=n.replace(Le,"$1")),a=n.toLowerCase(),n=a in e||n=="onFocusOut"||n=="onFocusIn"?a.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o?t.u=o.u:(t.u=ge,e.addEventListener(n,i?_e:fe,i)):e.removeEventListener(n,i?_e:fe,i);else{if(r=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!="-"?e.removeAttribute(n):e.setAttribute(n,n=="popover"&&t==1?"":t))}}function Fe(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=ge++;else if(n.t<t.u)return;return t(y.event?y.event(n):n)}}}function he(e,n,t,o,r,i,a,c,g,l){var _,s,f,p,m,E,S,b,v,$,M,D,H,le,F,z,K,d=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(g=!!(32&t.__u),i=[c=n.__e=t.__e]),(_=y.__b)&&_(n);e:if(typeof d=="function")try{if(b=n.props,v="prototype"in d&&d.prototype.render,$=(_=d.contextType)&&o[_.__c],M=_?$?$.props.value:_.__:o,t.__c?S=(s=n.__c=t.__c).__=s.__E:(v?n.__c=s=new d(b,M):(n.__c=s=new re(b,M),s.constructor=d,s.render=En),$&&$.sub(s),s.state||(s.state={}),s.__n=o,f=s.__d=!0,s.__h=[],s._sb=[]),v&&s.__s==null&&(s.__s=s.state),v&&d.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=A({},s.__s)),A(s.__s,d.getDerivedStateFromProps(b,s.__s))),p=s.props,m=s.state,s.__v=n,f)v&&d.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),v&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(v&&d.getDerivedStateFromProps==null&&b!==p&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(b,M),n.__v==t.__v||!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(b,s.__s,M)===!1){for(n.__v!=t.__v&&(s.props=b,s.state=s.__s,s.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.some(function(h){h&&(h.__=n)}),D=0;D<s._sb.length;D++)s.__h.push(s._sb[D]);s._sb=[],s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(b,s.__s,M),v&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(p,m,E)})}if(s.context=M,s.props=b,s.__P=e,s.__e=!1,H=y.__r,le=0,v){for(s.state=s.__s,s.__d=!1,H&&H(n),_=s.render(s.props,s.state,s.context),F=0;F<s._sb.length;F++)s.__h.push(s._sb[F]);s._sb=[]}else do s.__d=!1,H&&H(n),_=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++le<25);s.state=s.__s,s.getChildContext!=null&&(o=A(A({},o),s.getChildContext())),v&&!f&&s.getSnapshotBeforeUpdate!=null&&(E=s.getSnapshotBeforeUpdate(p,m)),z=_,_!=null&&_.type===oe&&_.key==null&&(z=Ge(_.props.children)),c=ze(e,ne(z)?z:[z],n,t,o,r,i,a,c,g,l),s.base=n.__e,n.__u&=-161,s.__h.length&&a.push(s),S&&(s.__E=s.__=null)}catch(h){if(n.__v=null,g||i!=null)if(h.then){for(n.__u|=g?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,n.__e=c}else{for(K=i.length;K--;)pe(i[K]);me(n)}else n.__e=t.__e,n.__k=t.__k,h.then||me(n);y.__e(h,n,t)}else i==null&&n.__v==t.__v?(n.__k=t.__k,n.__e=t.__e):c=n.__e=Sn(t.__e,n,t,o,r,i,a,g,l);return(_=y.diffed)&&_(n),128&n.__u?void 0:c}function me(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(me)}function We(e,n,t){for(var o=0;o<t.length;o++)be(t[o],t[++o],t[++o]);y.__c&&y.__c(n,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(i){i.call(r)})}catch(i){y.__e(i,r.__v)}})}function Ge(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ne(e)?e.map(Ge):A({},e)}function Sn(e,n,t,o,r,i,a,c,g){var l,_,s,f,p,m,E,S=t.props||V,b=n.props,v=n.type;if(v=="svg"?r="http://www.w3.org/2000/svg":v=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(l=0;l<i.length;l++)if((p=i[l])&&"setAttribute"in p==!!v&&(v?p.localName==v:p.nodeType==3)){e=p,i[l]=null;break}}if(e==null){if(v==null)return document.createTextNode(b);e=document.createElementNS(r,v,b.is&&b),c&&(y.__m&&y.__m(n,i),c=!1),i=null}if(v==null)S===b||c&&e.data==b||(e.data=b);else{if(i=i&&ee.call(e.childNodes),!c&&i!=null)for(S={},l=0;l<e.attributes.length;l++)S[(p=e.attributes[l]).name]=p.value;for(l in S)if(p=S[l],l!="children"){if(l=="dangerouslySetInnerHTML")s=p;else if(!(l in b)){if(l=="value"&&"defaultValue"in b||l=="checked"&&"defaultChecked"in b)continue;se(e,l,null,p,r)}}for(l in b)p=b[l],l=="children"?f=p:l=="dangerouslySetInnerHTML"?_=p:l=="value"?m=p:l=="checked"?E=p:c&&typeof p!="function"||S[l]===p||se(e,l,p,S[l],r);if(_)c||s&&(_.__html==s.__html||_.__html==e.innerHTML)||(e.innerHTML=_.__html),n.__k=[];else if(s&&(e.innerHTML=""),ze(n.type=="template"?e.content:e,ne(f)?f:[f],n,t,o,v=="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,a,i?i[0]:t.__k&&U(t,0),c,g),i!=null)for(l=i.length;l--;)pe(i[l]);c||(l="value",v=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[l]||v=="progress"&&!m||v=="option"&&m!=S[l])&&se(e,l,m,S[l],r),l="checked",E!=null&&E!=e[l]&&se(e,l,E,S[l],r))}return e}function be(e,n,t){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&n==null||(e.__u=e(n))}else e.current=n}catch(r){y.__e(r,t)}}function Ve(e,n,t){var o,r;if(y.unmount&&y.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||be(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){y.__e(i,n)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&Ve(o[r],n,t||typeof e.type!="function");t||pe(e.__e),e.__c=e.__=e.__e=void 0}function En(e,n,t){return this.constructor(e,t)}function Nn(e,n,t){var o,r,i,a;n==document&&(n=document.documentElement),y.__&&y.__(e,n),r=(o=!1)?null:n.__k,i=[],a=[],he(n,e=n.__k=Be(oe,null,[e]),r||V,V,n.namespaceURI,r?null:n.firstChild?ee.call(n.childNodes):null,i,r?r.__e:n.firstChild,o,a),We(i,e,a)}ee=He.slice,y={__e:function(e,n,t,o){for(var r,i,a;n=n.__;)if((r=n.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),a=r.__d),a)return r.__E=r}catch(c){e=c}throw e}},Me=0,re.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=A({},this.state),typeof e=="function"&&(e=e(A({},t),this.props)),e&&A(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),De(this))},re.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),De(this))},re.prototype.render=oe,B=[],Oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ae=function(e,n){return e.__v.__b-n.__v.__b},ie.__r=0,Le=/(PointerCapture)$|Capture$/i,ge=0,fe=Fe(!1),_e=Fe(!0);var Tn=0;function u(e,n,t,o,r,i){n||(n={});var a,c,g=n;if("ref"in g)for(c in g={},n)c=="ref"?a=n[c]:g[c]=n[c];var l={type:e,props:g,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Tn,__i:-1,__u:0,__source:r,__self:i};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)g[c]===void 0&&(g[c]=a[c]);return y.vnode&&y.vnode(l),l}var q,x,ve,qe,X=0,Xe=[],k=y,Je=k.__b,Ke=k.__r,Ye=k.diffed,Qe=k.__c,Ze=k.unmount,en=k.__;function ye(e,n){k.__h&&k.__h(x,e,X||n),X=0;var t=x.__H||(x.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function J(e){return X=1,nn(an,e)}function nn(e,n,t){var o=ye(q++,2);if(o.t=e,!o.__c&&(o.__=[an(void 0,n),function(c){var g=o.__N?o.__N[0]:o.__[0],l=o.t(g,c);g!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=x,!x.__f)){var r=function(c,g,l){if(!o.__c.__H)return!0;var _=o.__c.__H.__.filter(function(f){return!!f.__c});if(_.every(function(f){return!f.__N}))return!i||i.call(this,c,g,l);var s=o.__c.props!==c;return _.forEach(function(f){if(f.__N){var p=f.__[0];f.__=f.__N,f.__N=void 0,p!==f.__[0]&&(s=!0)}}),i&&i.call(this,c,g,l)||s};x.__f=!0;var i=x.shouldComponentUpdate,a=x.componentWillUpdate;x.componentWillUpdate=function(c,g,l){if(this.__e){var _=i;i=void 0,r(c,g,l),i=_}a&&a.call(this,c,g,l)},x.shouldComponentUpdate=r}return o.__N||o.__}function j(e,n){var t=ye(q++,3);!k.__s&&sn(t.__H,n)&&(t.__=e,t.u=n,x.__H.__h.push(t))}function P(e){return X=5,tn(function(){return{current:e}},[])}function tn(e,n){var t=ye(q++,7);return sn(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function on(e,n){return X=8,tn(function(){return e},n)}function Cn(){for(var e;e=Xe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ae),e.__H.__h.forEach(xe),e.__H.__h=[]}catch(n){e.__H.__h=[],k.__e(n,e.__v)}}k.__b=function(e){x=null,Je&&Je(e)},k.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),en&&en(e,n)},k.__r=function(e){Ke&&Ke(e),q=0;var n=(x=e.__c).__H;n&&(ve===x?(n.__h=[],x.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(n.__h.forEach(ae),n.__h.forEach(xe),n.__h=[],q=0)),ve=x},k.diffed=function(e){Ye&&Ye(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Xe.push(n)!==1&&qe===k.requestAnimationFrame||((qe=k.requestAnimationFrame)||$n)(Cn)),n.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),ve=x=null},k.__c=function(e,n){n.some(function(t){try{t.__h.forEach(ae),t.__h=t.__h.filter(function(o){return!o.__||xe(o)})}catch(o){n.some(function(r){r.__h&&(r.__h=[])}),n=[],k.__e(o,t.__v)}}),Qe&&Qe(e,n)},k.unmount=function(e){Ze&&Ze(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{ae(o)}catch(r){n=r}}),t.__H=void 0,n&&k.__e(n,t.__v))};var rn=typeof requestAnimationFrame=="function";function $n(e){var n,t=function(){clearTimeout(o),rn&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,35);rn&&(n=requestAnimationFrame(t))}function ae(e){var n=x,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),x=n}function xe(e){var n=x;e.__c=e.__(),x=n}function sn(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function an(e,n){return typeof n=="function"?n(e):n}const In={isOpen:!1,messages:[],isStreaming:!1,error:null};function ln(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function Mn(e,n){var t;switch(n.type){case"OPEN":return{...e,isOpen:!0,error:null};case"CLOSE":return{...e,isOpen:!1};case"LOAD_MESSAGES":return{...e,messages:n.messages};case"ADD_USER_MESSAGE":return{...e,error:null,messages:[...e.messages,{id:n.id,role:"user",content:n.content}]};case"START_STREAMING":return{...e,isStreaming:!0,error:null,messages:[...e.messages,{id:n.id,role:"assistant",content:"",isStreaming:!0}]};case"APPEND_TEXT":{const o=[...e.messages],r=o[o.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(o[o.length-1]={...r,content:r.content+n.text}),{...e,messages:o}}case"ADD_TOOL_CALL":{const o=[...e.messages],r=o[o.length-1];if(r&&r.role==="assistant"){const i=[...r.toolCalls??[],n.toolCall];o[o.length-1]={...r,toolCalls:i}}return{...e,messages:o}}case"SET_TOOL_RESULT":{const o=[...e.messages],r=o[o.length-1];if(r&&r.role==="assistant"&&r.toolCalls){const i=r.toolCalls.map(a=>a.id===n.toolCallId?{...a,result:n.result,status:"done"}:a);o[o.length-1]={...r,toolCalls:i}}return{...e,messages:o}}case"FINISH_STREAMING":{const o=[...e.messages],r=o[o.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(!r.content&&((t=r.toolCalls)!=null&&t.length)?o.pop():o[o.length-1]={...r,isStreaming:!1}),{...e,isStreaming:!1,messages:o}}case"SET_ERROR":{const o=[...e.messages],r=o[o.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(o[o.length-1]={...r,isStreaming:!1}),{...e,isStreaming:!1,error:n.error,messages:o}}case"CLEAR_MESSAGES":return{...e,messages:[],error:null};default:return e}}function Rn(e){return new Promise((n,t)=>{const o=new FileReader;o.onload=()=>{const r=o.result;n(r.split(",")[1])},o.onerror=()=>t(new Error("Failed to read file")),o.readAsDataURL(e)})}async function On(e,n){try{const t=await fetch(`${e}/api/products/${n}/config`,{headers:{"ngrok-skip-browser-warning":"true"}});return t.ok?await t.json():{}}catch{return{}}}async function cn(e,n,t,o,r,i){const a={productId:n,messages:t,endUserSessionId:o};r&&(a.conversationId=r),i&&i.length>0&&(a.attachments=i);const c=await fetch(`${e}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(a)});if(!c.ok){const g=await c.json().catch(()=>({error:"Request failed"}));throw new Error(g.error||`HTTP ${c.status}`)}if(!c.body)throw new Error("No response stream available");return{stream:c.body,conversationId:c.headers.get("X-Conversation-Id")}}async function An(e,n,t,o,r){const i=await fetch(`${e}/api/widget/identify`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,endUserSessionId:t,token:o,name:r})}),a=await i.json().catch(()=>({}));if(!i.ok)throw new Error(a.error||`HTTP ${i.status}`);return a}async function Ln(e,n,t){const o=await fetch(`${e}/api/widget/reset-user`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,endUserSessionId:t})}),r=await o.json().catch(()=>({}));if(!o.ok)throw new Error(r.error||`HTTP ${o.status}`);return r}const we={};function un(e){Object.assign(we,e)}function Hn(e){return we[e]}function Bn(e){return e in we}async function dn(e,n){const t=e.getReader(),o=new TextDecoder;let r="";try{for(;;){const{done:i,value:a}=await t.read();if(i)break;r+=o.decode(a,{stream:!0});const c=r.split(`

`);r=c.pop()??"";for(const g of c)gn(g.trim(),n)}r.trim()&&gn(r.trim(),n),n.onFinish()}catch(i){const a=i instanceof Error?i.message:"Stream read failed";n.onError(a)}finally{t.releaseLock()}}function gn(e,n){const t=e.split(`
`);for(const o of t){if(!o.startsWith("data: "))continue;const r=o.slice(6);if(r==="[DONE]")return;try{const i=JSON.parse(r);switch(i.type){case"text-delta":i.delta&&n.onTextDelta(i.delta);break;case"tool-input-available":i.toolCallId&&i.toolName&&n.onToolCall(i.toolCallId,i.toolName,i.input??{},i.providerMetadata);break;case"tool-output-available":i.toolCallId&&n.onToolResult(i.toolCallId,i.output);break;case"tool-call":i.toolCallId&&i.toolName&&n.onToolCall(i.toolCallId,i.toolName,i.input??{});break;case"tool-result":i.toolCallId&&n.onToolResult(i.toolCallId,i.output);break;case"error":n.onError(i.errorText??i.reason??"Unknown error");break;case"abort":n.onError(i.reason??"Response aborted");break;default:break}}catch{}}}function Pn(e,n){if(!n)return e;let t=e;for(const[o,r]of Object.entries(n))t=t.replace(`:${o}`,encodeURIComponent(r));return t}function Dn(e){var o;const n=e.replace(/\/$/,"")||"/",t=document.querySelectorAll("a[href]");for(const r of t){const i=r;if((((o=i.pathname)==null?void 0:o.replace(/\/$/,""))||"/")===n)return i.click(),console.log(`[Ourguide-B2B] Navigated via anchor click: ${e}`),!0}return!1}function zn(e){var r,i;const n=window,t=n.next;if((r=t==null?void 0:t.router)!=null&&r.push)return t.router.push(e),console.log(`[Ourguide-B2B] Navigated via Next.js router: ${e}`),!0;if(n.__NUXT__){const a=n.$nuxt;if((i=a==null?void 0:a.$router)!=null&&i.push)return a.$router.push(e),console.log(`[Ourguide-B2B] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function Un(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Ourguide-B2B] Navigated via pushState: ${e}`),!0}catch{return!1}}async function jn(e,n){const t=Pn(e,n);return Dn(t)||zn(t)||Un(t)||(console.log(`[Ourguide-B2B] Navigated via hard navigation: ${t}`),window.location.href=t),!0}const Fn="og2-chat-",Wn="og2-enduser-session-",ke="og2-conv-";function Se(e){return`${Fn}${e}`}function fn(e){return`${Wn}${e}`}function _n(){var n,t;const e=(t=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:t.call(n);return e||`${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ee(e){const n=fn(e);try{const t=localStorage.getItem(n);if(t&&t.trim())return t;const o=`sess_${_n()}`;return localStorage.setItem(n,o),o}catch{return`sess_${_n()}`}}function Gn(e){try{localStorage.removeItem(fn(e))}catch{}}function Vn(e,n){try{const t=n.map(({isStreaming:o,...r})=>r);sessionStorage.setItem(Se(e),JSON.stringify(t))}catch{}}function qn(e){try{const n=sessionStorage.getItem(Se(e));return n?JSON.parse(n):[]}catch{return[]}}function Ne(e){try{sessionStorage.removeItem(Se(e)),sessionStorage.removeItem(`${ke}${e}`)}catch{}}function Xn(e,n){try{sessionStorage.setItem(`${ke}${e}`,n)}catch{}}function Jn(e){try{return sessionStorage.getItem(`${ke}${e}`)}catch{return null}}const Kn=10,Yn=30,Te=500,Qn="og2-widget-root",Zn=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","NAV","HEADER","FOOTER"]),et="a[href], button, input, select, textarea";function Ce(e){if(!(e instanceof HTMLElement)||e.hidden||e.getAttribute("aria-hidden")==="true")return!1;const n=getComputedStyle(e);return n.display!=="none"&&n.visibility!=="hidden"}function $e(e){return!!e.closest(`#${Qn}`)}function nt(e){var t,o;if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){if(e.id){const r=document.querySelector(`label[for="${e.id}"]`);if((t=r==null?void 0:r.textContent)!=null&&t.trim())return r.textContent.trim()}return e.getAttribute("aria-label")||e.placeholder||e.getAttribute("name")||""}const n=(o=e.innerText)==null?void 0:o.trim();return n||e.getAttribute("aria-label")||e.getAttribute("title")||""}function pn(e,n){return e.length<=n?e:e.slice(0,n-3)+"..."}function tt(){var _;const e=window.location.pathname+window.location.search,n=document.title||"",t=document.querySelectorAll("h1, h2, h3"),o=[];for(const s of t){if(o.length>=Kn)break;if($e(s)||!Ce(s))continue;const f=(_=s.innerText)==null?void 0:_.trim();f&&!o.includes(f)&&o.push(f)}const r=document.querySelectorAll(et),i=[],a=new Set;for(const s of r){if(i.length>=Yn)break;if($e(s)||!Ce(s))continue;const f=nt(s);if(!f)continue;const p=`${s.tagName}:${f}`;if(a.has(p))continue;a.add(p);const m={tag:s.tagName.toLowerCase(),text:pn(f,80)};if(s instanceof HTMLInputElement&&(m.type=s.type),s instanceof HTMLAnchorElement&&s.href)try{const E=new URL(s.href);m.href=E.pathname+E.search}catch{m.href=s.getAttribute("href")||void 0}i.push(m)}const c=document.querySelector("main")||document.body;let g="";function l(s){var p;if(g.length>=Te)return;if(s.nodeType===Node.TEXT_NODE){const m=(p=s.textContent)==null?void 0:p.trim();m&&(g+=(g?" ":"")+m);return}if(s.nodeType!==Node.ELEMENT_NODE)return;const f=s;if(!Zn.has(f.tagName)&&!$e(f)&&Ce(f)){for(const m of f.childNodes)if(l(m),g.length>=Te)return}}return l(c),g=pn(g.replace(/\s+/g," ").trim(),Te),{url:e,title:n,headings:o,interactiveElements:i,visibleText:g}}un({capture_screen:async()=>{console.log("[Ourguide] capture_screen tool invoked — capturing DOM snapshot");const e=tt();return console.log("[Ourguide] capture_screen result",{url:e.url,title:e.title}),e}});const hn={none:"none",soft:"0 2px 8px rgba(0,0,0,0.08)",medium:"0 4px 16px rgba(0,0,0,0.12)",strong:"0 8px 32px rgba(0,0,0,0.18)","extra-strong":"0 16px 48px rgba(0,0,0,0.28)"};function ot(e,n){if(!e||!n)return;const t=(c,g)=>{g!=null&&g!==""&&e.style.setProperty(c,String(g))},{colors:o,typography:r,dimensions:i,shadow:a}=n;o&&(t("--og2-bg",o.background),t("--og2-border",o.border),t("--og2-text",o.text),t("--og2-messages-bg",o.messagesBackground),t("--og2-agent-bubble",o.agentBubble),t("--og2-agent-bubble-text",o.agentBubbleText),t("--og2-user-bubble",o.userBubble),t("--og2-user-bubble-text",o.userBubbleText),t("--og2-user-bubble-border",o.userBubbleBorder)),r&&(t("--og2-font",r.fontFamily),t("--og2-font-weight",r.fontWeight),t("--og2-line-height",r.lineHeight),r.fontSize&&t("--og2-font-size",`${r.fontSize}px`),r.headerSize&&t("--og2-header-size",`${r.headerSize}px`),typeof r.letterSpacing=="number"&&t("--og2-letter-spacing",`${r.letterSpacing}px`)),i&&(i.width&&t("--og2-width",`${i.width}px`),i.maxHeight&&t("--og2-height",`${i.maxHeight}px`),i.borderRadius!==void 0&&t("--og2-radius",`${i.borderRadius}px`),i.padding!==void 0&&t("--og2-padding",`${i.padding}px`)),a&&hn[a]&&t("--og2-shadow",hn[a])}function rt(e,n){if(console.log("[Ourguide] applyBubble called",{el:e,bubble:n}),!e||!n){console.warn("[Ourguide] applyBubble skipped — el or bubble is falsy",{el:e,bubble:n});return}const t=(o,r)=>{r!=null&&r!==""&&e.style.setProperty(o,String(r))};n.background&&t("--og2-bubble-bg",n.background),n.border&&t("--og2-bubble-border",n.border),n.icon&&t("--og2-bubble-icon",n.icon),n.buttonSize&&t("--og2-bubble-size",`${n.buttonSize}px`),n.iconSize&&t("--og2-bubble-icon-size",`${n.iconSize}px`),n.right!==void 0&&t("--og2-bubble-right",`${n.right}px`),n.bottom!==void 0&&t("--og2-bubble-bottom",`${n.bottom}px`)}function it({productId:e,apiUrl:n}){const[t,o]=nn(Mn,In),r=P(null),i=P(null),a=P(null),c=P(null),g=P(null),l=P(null),[_,s]=J(""),[f,p]=J([]),[m,E]=J([]),[S,b]=J(!1),[v,$]=J(!1),M=P(null);j(()=>{console.log("[Ourguide] fetchConfig called",{apiUrl:n,productId:e}),On(n,e).then(d=>{var h;console.log("[Ourguide] config received",d),console.log("[Ourguide] config.bubble",d.bubble),console.log("[Ourguide] triggerRef.current",g.current),ot(c.current,d.appearance),rt(c.current,d.bubble),console.log("[Ourguide] applyBubble done. triggerRef styles:",(h=g.current)==null?void 0:h.style.cssText)})},[n,e]);const D=on(()=>{Ne(e),a.current=null,o({type:"FINISH_STREAMING"}),o({type:"CLEAR_MESSAGES"})},[e]);j(()=>{a.current=Jn(e);const d=qn(e);d.length>0&&o({type:"LOAD_MESSAGES",messages:d})},[e]),j(()=>{const d=h=>{const w=h.detail;w!=null&&w.productId&&w.productId!==e||D()};return window.addEventListener("og2:resetUser",d),()=>{window.removeEventListener("og2:resetUser",d)}},[e,D]),j(()=>{!t.isStreaming&&t.messages.length>0&&Vn(e,t.messages)},[t.messages,t.isStreaming,e]),j(()=>{t.isOpen&&!t.isStreaming&&setTimeout(()=>{var d;return(d=r.current)==null?void 0:d.focus()},50)},[t.isOpen,t.isStreaming]),j(()=>{var d;(d=i.current)==null||d.scrollIntoView({behavior:"smooth"})},[t.messages]);const H=on(async d=>{const h=d.trim(),w=[...f];if(!h&&w.length===0||t.isStreaming)return;s(""),p([]),r.current&&(r.current.style.height="auto");const L=w.length>0?w.map(N=>`[${N.name}]`).join(" "):"",W=[h,L].filter(Boolean).join(" "),ce=ln();o({type:"ADD_USER_MESSAGE",id:ce,content:W});let Y=[];if(w.length>0)try{Y=await Promise.all(w.map(async N=>({name:N.name,type:N.type,data:await Rn(N)})))}catch{o({type:"SET_ERROR",error:"Failed to read attached files"});return}const Q=[...t.messages.map(N=>({role:N.role,content:N.content})),{role:"user",content:h||"Please review the attached file(s)."}],Z=ln();o({type:"START_STREAMING",id:Z});const G=new Map,Ie=new Map,mn=N=>({onTextDelta:T=>{o({type:"APPEND_TEXT",text:T})},onToolCall:(T,R,O,I)=>{const ue={id:T,name:R,args:O,status:"calling",providerMetadata:I};G.set(T,ue),o({type:"ADD_TOOL_CALL",toolCall:ue}),N&&Bn(R)&&Ie.set(T,{name:R,args:O,providerMetadata:I})},onToolResult:(T,R)=>{o({type:"SET_TOOL_RESULT",toolCallId:T,result:R});const O=G.get(T);if((O==null?void 0:O.name)==="navigate_to_page"){const I=R;I.route&&(I.confidence??0)>=.5&&jn(I.route,I.params)}},onError:T=>{o({type:"SET_ERROR",error:T})}});try{const N=Ee(e),{stream:T,conversationId:R}=await cn(n,e,Q,N,a.current||void 0,Y);R&&!a.current&&(a.current=R,Xn(e,R));let O=!1;if(await dn(T,{...mn(!0),onError:C=>{O=!0,o({type:"SET_ERROR",error:C})},onFinish:()=>{}}),O||Ie.size===0){O||o({type:"FINISH_STREAMING"});return}const I=[];for(const[C,{name:bn,args:vn,providerMetadata:ut}]of Ie){const dt=Hn(bn);let de;try{de=await dt(vn)}catch(yn){de={status:"error",error:yn instanceof Error?yn.message:"Handler failed"}}o({type:"SET_TOOL_RESULT",toolCallId:C,result:de}),I.push({toolCallId:C,toolName:bn,args:vn,result:de,providerMetadata:ut})}const ue=[...Q,{role:"assistant",content:I.map(C=>({type:"tool-call",toolCallId:C.toolCallId,toolName:C.toolName,input:C.args,...C.providerMetadata?{providerOptions:C.providerMetadata}:{}}))},{role:"tool",content:I.map(C=>({type:"tool-result",toolCallId:C.toolCallId,toolName:C.toolName,output:{type:"json",value:C.result}}))}],{stream:ct}=await cn(n,e,ue,void 0,a.current||void 0);await dn(ct,{...mn(!1),onFinish:()=>{o({type:"FINISH_STREAMING"})}})}catch(N){const T=N instanceof Error?N.message:"Something went wrong";o({type:"FINISH_STREAMING"}),o({type:"SET_ERROR",error:T})}},[t.messages,t.isStreaming,n,e,f]);function le(d){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),H(_))}function F(){if(t.messages.length>0){const d=t.messages.find(L=>L.role==="user"),h=d?d.content.slice(0,30):"Conversation",w=t.messages[t.messages.length-1].content.slice(0,50);E(L=>[{id:Date.now(),title:h,preview:w,messages:[...t.messages]},...L])}Ne(e),a.current=null,o({type:"CLEAR_MESSAGES"}),b(!1)}function z(d){o({type:"LOAD_MESSAGES",messages:d.messages}),E(h=>h.filter(w=>w.id!==d.id)),b(!1)}function K(){var L;const d=window.SpeechRecognition||window.webkitSpeechRecognition;if(!d)return;if(v){(L=M.current)==null||L.stop(),$(!1);return}const h=new d;h.lang="en-US",h.interimResults=!0,h.continuous=!0;const w=_.trimEnd();h.onresult=W=>{let ce="",Y="";for(let Z=0;Z<W.results.length;Z++){const G=W.results[Z];G.isFinal?ce+=G[0].transcript:Y+=G[0].transcript}const Q=(ce+Y).trim();s(w?`${w} ${Q}`:Q)},h.onend=()=>$(!1),h.onerror=()=>$(!1),M.current=h,h.start(),$(!0)}return u("div",{className:"og2-container",ref:c,children:[t.isOpen&&u("div",{className:"og2-panel",children:[u("div",{className:"og2-panel-header",children:[u("span",{className:"og2-panel-title",children:"Assistant"}),u("div",{className:"og2-header-actions",children:[u("button",{className:"og2-action-btn",onClick:F,"aria-label":"New conversation",title:"New conversation",children:u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u("path",{d:"M12 5v14M5 12h14"})})}),u("button",{className:"og2-action-btn",onClick:()=>b(d=>!d),"aria-label":"Recent conversations",title:"Recent conversations",children:u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),u("path",{d:"M3 3v5h5"}),u("path",{d:"M12 7v5l4 2"})]})}),u("button",{className:"og2-close-btn",onClick:()=>o({type:"CLOSE"}),"aria-label":"Close",children:u("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:u("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),S&&u("div",{className:"og2-history-panel",children:[u("div",{className:"og2-history-header",children:[u("span",{className:"og2-history-title",children:"Recent Conversations"}),u("button",{className:"og2-action-btn",onClick:()=>b(!1),"aria-label":"Close history",children:u("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:u("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),u("div",{className:"og2-history-list",children:m.length===0?u("p",{className:"og2-history-empty",children:"No conversations yet"}):m.map(d=>u("button",{className:"og2-history-item",onClick:()=>z(d),children:[u("span",{className:"og2-history-item-title",children:d.title}),u("span",{className:"og2-history-item-preview",children:d.preview})]},d.id))})]}),u("div",{className:"og2-messages",children:u("div",{className:"og2-messages-inner",children:[u("div",{className:"og2-message og2-message-assistant",children:u("div",{className:"og2-bubble",children:"Hi! What can I do for you today?"})}),t.messages.map(d=>{var h;return d.isStreaming&&!d.content&&!((h=d.toolCalls)!=null&&h.length)?u("div",{className:"og2-message og2-message-assistant",children:u("span",{className:"og2-shimmer-text",children:"Thinking"})},d.id):u("div",{className:`og2-message og2-message-${d.role}`,children:u("div",{className:"og2-bubble",children:[d.content,d.isStreaming&&u("span",{className:"og2-cursor"}),st(d.toolCalls,d.isStreaming&&!d.content)]})},d.id)}),t.error&&u("div",{className:"og2-message og2-message-error",children:u("div",{className:"og2-bubble",children:t.error})}),u("div",{ref:i})]})}),u("div",{className:"og2-footer",children:[u("div",{className:"og2-powered-by",children:[u("svg",{className:"og2-powered-by-logo",width:"20",height:"20",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u("circle",{cx:"20",cy:"20",r:"9",stroke:"#38bdf8",strokeWidth:"2.2",fill:"none"}),u("circle",{cx:"20",cy:"20",r:"11",stroke:"#38bdf8",strokeWidth:"0.6",fill:"none",opacity:"0.25"})]}),u("p",{className:"og2-powered-by-text",children:"Powered by Ourguide"})]}),u("div",{className:"og2-input-area",children:[f.length>0&&u("div",{className:"og2-file-chips",children:f.map((d,h)=>u("span",{className:"og2-file-chip",children:[u("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),u("polyline",{points:"13 2 13 9 20 9"})]}),d.name.length>18?`${d.name.slice(0,16)}…`:d.name,u("button",{className:"og2-file-chip-remove",onClick:()=>p(w=>w.filter((L,W)=>W!==h)),"aria-label":`Remove ${d.name}`,children:"×"})]},h))}),u("textarea",{ref:r,className:"og2-input",rows:1,value:_,onInput:d=>{s(d.target.value),d.target.style.height="auto",d.target.style.height=`${d.target.scrollHeight}px`},onKeyDown:le,placeholder:"Message..."}),u("div",{className:"og2-input-toolbar",children:[u("div",{className:"og2-input-toolbar-left",children:[u("button",{className:"og2-upload-btn",onClick:()=>{var d;return(d=l.current)==null?void 0:d.click()},"aria-label":"Attach file",title:"Attach file",children:u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.42 16.41a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),u("input",{ref:l,type:"file",multiple:!0,style:{display:"none"},onChange:d=>{const h=Array.from(d.target.files??[]);h.length>0&&p(w=>[...w,...h]),d.target.value=""}}),u("button",{className:`og2-mic-btn${v?" og2-mic-active":""}`,onClick:K,"aria-label":"Voice input",title:"Voice input",children:u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3"}),u("path",{d:"M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8"})]})})]}),u("button",{className:`og2-send-btn${_.trim()||f.length>0?" og2-send-active":""}`,onClick:()=>H(_),children:u("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u("path",{d:"M12 19V5M5 12l7-7 7 7"})})})]})]})]})]}),u("button",{ref:g,className:"og2-trigger",onClick:()=>o(t.isOpen?{type:"CLOSE"}:{type:"OPEN"}),"aria-label":t.isOpen?"Close assistant":"Open assistant",children:t.isOpen?u("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:u("path",{d:"M6 6L18 18M18 6L6 18"})}):u("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})})]})}function st(e,n){return!e||e.length===0?null:u("div",{className:"og2-tool-calls",children:e.map(t=>{const o=n&&t.name==="capture_screen"&&t.status==="done"?"calling":t.status;return u("div",{className:"og2-tool-indicator",children:[o==="calling"&&u("span",{className:"og2-spinner og2-spinner-sm"}),o==="done"&&u("svg",{className:"og2-tool-check",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:u("path",{d:"M20 6L9 17L4 12"})}),u("span",{className:"og2-tool-label",children:at(t,n)})]},t.id)})})}function at(e,n){if(e.name==="navigate_to_page"){if(e.status==="calling")return"Finding the right page...";const t=e.result;return t!=null&&t.route?`Navigated to ${t.route}`:"No matching page found"}return e.name==="capture_screen"?e.status==="calling"||n?"Looking at your screen...":"Screen captured":e.name}const lt=`/* Ourguide-B2B Widget - All classes prefixed with og2- */

.og2-container {
  position: fixed;
  z-index: 2147483647;
  font-family: var(--og2-font, 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  font-size: var(--og2-font-size, 14px);
  font-weight: var(--og2-font-weight, 400);
  line-height: var(--og2-line-height, 1.5);
  letter-spacing: var(--og2-letter-spacing, 0px);
  color: var(--og2-text, #18181b);
  bottom: var(--og2-bubble-bottom, 16px);
  right: var(--og2-bubble-right, 16px);
}

/* ── Floating trigger button ── */
.og2-trigger {
  width: var(--og2-bubble-size, 48px);
  height: var(--og2-bubble-size, 48px);
  border-radius: 50%;
  background: var(--og2-bubble-bg, var(--og2-agent-bubble, #18181b));
  color: var(--og2-bubble-icon, var(--og2-agent-bubble-text, #ffffff));
  border: 1px solid var(--og2-bubble-border, transparent);
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
  width: var(--og2-bubble-icon-size, 20px);
  height: var(--og2-bubble-icon-size, 20px);
}

/* ── Chat panel ── */
.og2-panel {
  position: absolute;
  bottom: 64px;
  right: 0;
  width: var(--og2-width, 400px);
  height: var(--og2-height, 600px);
  background: var(--og2-bg, #ffffff);
  border-radius: var(--og2-radius, 24px);
  box-shadow: var(--og2-shadow, 0 4px 16px rgba(0, 0, 0, 0.12));
  border: 1px solid var(--og2-border, #e4e4e7);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Header ── */
.og2-panel-header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--og2-border, #e4e4e7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background: var(--og2-bg, #ffffff);
}

.og2-panel-title {
  font-size: var(--og2-header-size, 16px);
  font-weight: 600;
  color: var(--og2-text, #18181b);
}

.og2-header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.og2-action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--og2-text, #000000);
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: opacity 0.15s ease;
}

.og2-action-btn:hover {
  opacity: 0.7;
}

.og2-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--og2-text, #000000);
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: opacity 0.15s ease;
}

.og2-close-btn:hover {
  opacity: 0.7;
}

/* ── History panel ── */
.og2-history-panel {
  margin: 8px 12px;
  border-radius: 12px;
  border: 1px solid var(--og2-border, #e4e4e7);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
  background: var(--og2-bg, #ffffff);
  max-height: 180px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}

.og2-history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid var(--og2-border, #e4e4e7);
  flex-shrink: 0;
}

.og2-history-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--og2-text, #18181b);
}

.og2-history-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.og2-history-empty {
  text-align: center;
  font-size: 12px;
  color: #a1a1aa;
  padding: 20px 12px;
  margin: 0;
}

.og2-history-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  text-align: left;
  background: none;
  border: none;
  border-bottom: 1px solid var(--og2-border, #e4e4e7);
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.og2-history-item:last-child {
  border-bottom: none;
}

.og2-history-item:hover {
  opacity: 0.7;
}

.og2-history-item-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--og2-text, #18181b);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.og2-history-item-preview {
  font-size: 11px;
  color: #a1a1aa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Messages outer wrapper ── */
.og2-messages {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: var(--og2-bg, #ffffff);
}

/* ── Messages inner scrollable rounded container ── */
.og2-messages-inner {
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0;
  margin: 0 16px;
  border-radius: 16px;
  background: var(--og2-messages-bg, #ffffff);
  scroll-behavior: smooth;
  box-sizing: border-box;
}

/* ── Message rows ── */
.og2-message {
  font-size: var(--og2-font-size, 14px);
  display: flex;
  align-items: flex-end;
}

.og2-message-assistant {
  justify-content: flex-start;
}

.og2-message-user {
  justify-content: flex-end;
  align-items: flex-end;
}

/* ── Agent bubble: light bg, black text ── */
.og2-message-assistant .og2-bubble {
  display: inline-block;
  background: var(--og2-agent-bubble, #f4f4f5);
  color: var(--og2-agent-bubble-text, #18181b);
  padding: 10px 16px;
  border-radius: 24px;
  max-width: 88%;
  white-space: pre-wrap;
  word-break: break-word;
}

/* ── User bubble: MongoDB dark green bg, white text ── */
.og2-message-user .og2-bubble {
  display: inline-block;
  background: var(--og2-user-bubble, #1e3a5f);
  color: var(--og2-user-bubble-text, #ffffff);
  border: 1px solid var(--og2-user-bubble-border, #1e3a5f);
  padding: 10px 16px;
  border-radius: 24px;
  max-width: 88%;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
}

.og2-message-error {
  justify-content: flex-start;
}

.og2-message-error .og2-bubble {
  display: inline-block;
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
  padding: 10px 16px;
  border-radius: 24px;
  max-width: 80%;
  font-size: 12px;
}

/* ── Shimmer "Thinking" text ── */
.og2-shimmer-text {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  padding: 4px 0;
  background: linear-gradient(
    90deg,
    #71717a 0%,
    #71717a 40%,
    #d4d4d8 50%,
    #71717a 60%,
    #71717a 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: og2-shimmer 1.5s ease-in-out infinite;
}

@keyframes og2-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ── Streaming cursor ── */
.og2-cursor {
  display: inline-block;
  width: 2px;
  height: 14px;
  background: var(--og2-agent-bubble-text, #ffffff);
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: og2-blink 0.8s step-end infinite;
}

@keyframes og2-blink {
  50% { opacity: 0; }
}

/* ── Tool call indicators ── */
.og2-tool-calls {
  margin-top: 6px;
}

.og2-tool-indicator {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
  font-size: 11px;
  color: #a1a1aa;
}

.og2-tool-check {
  color: #16a34a;
  flex-shrink: 0;
}

.og2-tool-label {
  line-height: 1.3;
}

/* ── Footer ── */
.og2-footer {
  padding: 16px;
  background: var(--og2-bg, #ffffff);
  flex-shrink: 0;
}

/* ── Powered by ── */
.og2-powered-by {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 8px;
}

.og2-powered-by-logo {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.og2-powered-by-text {
  font-size: 12px;
  font-weight: 700;
  color: #6b7280;
  text-align: center;
}

/* ── Input wrapper: pill with border, two-row layout ── */
.og2-input-area {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 16px;
  padding: 10px 8px 8px 14px;
  border: 1px solid var(--og2-border, #e4e4e7);
  background: var(--og2-bg, #ffffff);
}

/* ── Bottom toolbar: icons left, send right ── */
.og2-input-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.og2-input-toolbar-left {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: -6px;
}

/* ── Grows to fill; stacks file chips above textarea ── */
.og2-input-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* ── File chips row ── */
.og2-file-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 4px;
}

.og2-file-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--og2-text, #18181b);
  background: var(--og2-messages-bg, #f4f4f5);
  border: 1px solid var(--og2-border, #e4e4e7);
  border-radius: 6px;
  padding: 2px 6px 2px 5px;
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.og2-file-chip-remove {
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;
  font-size: 13px;
  line-height: 1;
  padding: 0;
  margin-left: 2px;
  flex-shrink: 0;
  transition: color 0.15s ease;
}

.og2-file-chip-remove:hover {
  color: #ef4444;
}

/* ── Textarea ── */
.og2-input {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: var(--og2-font-size, 14px);
  font-family: var(--og2-font, inherit);
  font-weight: var(--og2-font-weight, 400);
  color: var(--og2-text, #18181b);
  background: transparent;
  max-height: 120px;
  overflow-y: auto;
  line-height: var(--og2-line-height, 1.5);
  padding: 0;
  box-sizing: border-box;
}

.og2-input::placeholder {
  color: #a1a1aa;
}

/* ── Icon-only action buttons (mic, upload) ── */
.og2-mic-btn,
.og2-upload-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: none;
  color: #52525b;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  transition: color 0.15s ease;
}

.og2-mic-btn:hover,
.og2-upload-btn:hover {
  color: var(--og2-text, #18181b);
}

.og2-mic-btn.og2-mic-active {
  color: #ef4444;
}

/* ── Send button: gray when empty, blue when has text ── */
.og2-send-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  background: #d1d5db;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.og2-send-btn:hover {
  transform: scale(1.06);
}

.og2-send-btn.og2-send-active {
  background: #2563eb;
  color: #ffffff;
}

/* ── Spinner ── */
.og2-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid var(--og2-border, #e4e4e7);
  border-top-color: var(--og2-agent-bubble, #18181b);
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
`;(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="ourguide-b2b-widget"]');if(!e){console.error("[Ourguide-B2B] Could not find script element");return}const n=e.dataset.productId||"",t=e.dataset.apiUrl??"http://localhost:3000";if(!n){console.error("[Ourguide-B2B] data-product-id is required");return}async function o(l,_){try{if(l==="registerTools"){_&&typeof _=="object"&&un(_);return}if(l==="identify"){const s=_??{};if(!s.token||typeof s.token!="string"||!s.token.trim()){console.warn("[Ourguide-B2B] identify: token is required");return}const f=Ee(n);await An(t,n,f,s.token,s.name);return}if(l==="resetUser"){const s=Ee(n);await Ln(t,n,s),Gn(n),Ne(n),window.dispatchEvent(new CustomEvent("og2:resetUser",{detail:{productId:n}}));return}}catch(s){const f=s instanceof Error?s.message:"Unknown error";console.warn(`[Ourguide-B2B] ${l} failed: ${f}`)}}const r=window,i=Array.isArray(r.ourguide)?r.ourguide:[];r.ourguide=(l,_)=>{o(l,_)};for(const l of i)Array.isArray(l)&&(l[0]==="identify"||l[0]==="resetUser"||l[0]==="registerTools")&&o(l[0],l[1]);const a=document.createElement("link");a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(a);const c=document.createElement("style");c.textContent=lt,document.head.appendChild(c);const g=document.createElement("div");g.id="og2-widget-root",document.body.appendChild(g),Nn(Be(it,{productId:n,apiUrl:t}),g)})()})();
