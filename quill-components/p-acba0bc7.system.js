System.register([],(function(e,t){"use strict";return{execute:function(){const s="quill-components";let n;let l;let o;let $=false;let r=false;let c=false;let i=false;let a=0;let f=false;const d=typeof window!=="undefined"?window:{};const u=d.CSS;const m=d.document||{head:{}};const h={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n)};const g=e=>Promise.resolve(e);const p=(()=>{try{new CSSStyleSheet;return true}catch(e){}return false})();const y="{visibility:hidden}.hydrated{visibility:inherit}";const b=(e,t="")=>{{return()=>{}}};const w=(e,t)=>{{return()=>{}}};const N=new WeakMap;const R=(e,t,s)=>{let n=je.get(e);if(p&&s){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}je.set(e,n)};const S=(e,t,s,n)=>{let l=C(t.$tagName$);let o=je.get(l);e=e.nodeType===11?e:m;if(o){if(typeof o==="string"){e=e.head||e;let s=N.get(e);let $;if(!s){N.set(e,s=new Set)}if(!s.has(l)){{if(h.$cssShim$){$=h.$cssShim$.createHostStyle(n,l,o,!!(t.$flags$&10));const e=$["s-sc"];if(e){l=e;s=null}}else{$=m.createElement("style");$.innerHTML=o}e.insertBefore($,e.querySelector("link"))}if(s){s.add(l)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]}}return l};const v=e=>{const t=e.$cmpMeta$;const s=e.$hostElement$;const n=t.$flags$;const l=b("attachStyles",t.$tagName$);const o=S(s.getRootNode(),t,e.$modeName$,s);if(n&10){s["s-sc"]=o;s.classList.add(o+"-h");if(n&2){s.classList.add(o+"-s")}}l()};const C=(e,t)=>"sc-"+e;const T={};const E=e=>e!=null;const M=e=>{e=typeof e;return e==="object"||e==="function"};const j=e=>`__sc_import_${e.replace(/\s|-/g,"_")}`;const L=e("h",(e,t,...s)=>{let n=null;let l=null;let o=false;let $=false;let r=[];const c=t=>{for(let s=0;s<t.length;s++){n=t[s];if(Array.isArray(n)){c(n)}else if(n!=null&&typeof n!=="boolean"){if(o=typeof e!=="function"&&!M(n)){n=String(n)}if(o&&$){r[r.length-1].$text$+=n}else{r.push(o?x(null,n):n)}$=o}}};c(s);if(t){if(t.name){l=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter(t=>e[t]).join(" ")}}}const i=x(e,null);i.$attrs$=t;if(r.length>0){i.$children$=r}{i.$name$=l}return i});const x=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{s.$attrs$=null}{s.$name$=null}return s};const U=e("H",{});const A=e=>e&&e.$tag$===U;const k=(e,t,s,n,l,o)=>{if(s!==n){let r=Ce(e,t);let c=t.toLowerCase();if(t==="class"){const t=e.classList;const l=P(s);const o=P(n);t.remove(...l.filter(e=>e&&!o.includes(e)));t.add(...o.filter(e=>e&&!l.includes(e)))}else if(t==="ref"){if(n){n(e)}}else{const c=M(n);if((r||c&&n!==null)&&!l){try{if(!e.tagName.includes("-")){let l=n==null?"":n;if(t==="list"){r=false}else if(s==null||e[t]!=l){e[t]=l}}else{e[t]=n}}catch($){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!r||o&4||l)&&!c){n=n===true?"":n;{e.setAttribute(t,n)}}}}};const B=/\s/;const P=e=>!e?[]:e.split(B);const I=(e,t,s,n)=>{const l=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;const o=e&&e.$attrs$||T;const $=t.$attrs$||T;{for(n in o){if(!(n in $)){k(l,n,o[n],undefined,s,t.$flags$)}}}for(n in $){k(l,n,o[n],$[n],s,t.$flags$)}};const O=(e,t,s,r)=>{let a=t.$children$[s];let f=0;let d;let u;let h;if(!$){c=true;if(a.$tag$==="slot"){if(n){r.classList.add(n+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$flags$&1){d=a.$elm$=m.createTextNode("")}else{d=a.$elm$=m.createElement(a.$flags$&2?"slot-fb":a.$tag$);{I(null,a,i)}if(E(n)&&d["s-si"]!==n){d.classList.add(d["s-si"]=n)}if(a.$children$){for(f=0;f<a.$children$.length;++f){u=O(e,a,f,d);if(u){d.appendChild(u)}}}}{d["s-hn"]=o;if(a.$flags$&(2|1)){d["s-sr"]=true;d["s-cr"]=l;d["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[s];if(h&&h.$tag$===a.$tag$&&e.$elm$){_(e.$elm$,false)}}}return d};const _=(e,t)=>{h.$flags$|=1;const s=e.childNodes;for(let n=s.length-1;n>=0;n--){const e=s[n];if(e["s-hn"]!==o&&e["s-ol"]){F(e).insertBefore(e,D(e));e["s-ol"].remove();e["s-ol"]=undefined;c=true}if(t){_(e,t)}}h.$flags$&=~1};const z=(e,t,s,n,l,o)=>{let $=e["s-cr"]&&e["s-cr"].parentNode||e;let r;for(;l<=o;++l){if(n[l]){r=O(null,s,l,e);if(r){n[l].$elm$=r;$.insertBefore(r,D(t))}}}};const H=(e,t,s,n,l)=>{for(;t<=s;++t){if(n=e[t]){l=n.$elm$;X(n);{r=true;if(l["s-ol"]){l["s-ol"].remove()}else{_(l,true)}}l.remove()}}};const q=(e,t,s,n)=>{let l=0;let o=0;let $=t.length-1;let r=t[0];let c=t[$];let i=n.length-1;let a=n[0];let f=n[i];let d;while(l<=$&&o<=i){if(r==null){r=t[++l]}else if(c==null){c=t[--$]}else if(a==null){a=n[++o]}else if(f==null){f=n[--i]}else if(V(r,a)){W(r,a);r=t[++l];a=n[++o]}else if(V(c,f)){W(c,f);c=t[--$];f=n[--i]}else if(V(r,f)){if(r.$tag$==="slot"||f.$tag$==="slot"){_(r.$elm$.parentNode,false)}W(r,f);e.insertBefore(r.$elm$,c.$elm$.nextSibling);r=t[++l];f=n[--i]}else if(V(c,a)){if(r.$tag$==="slot"||f.$tag$==="slot"){_(c.$elm$.parentNode,false)}W(c,a);e.insertBefore(c.$elm$,r.$elm$);c=t[--$];a=n[++o]}else{{d=O(t&&t[o],s,o,e);a=n[++o]}if(d){{F(r.$elm$).insertBefore(d,D(r.$elm$))}}}}if(l>$){z(e,n[i+1]==null?null:n[i+1].$elm$,s,n,o,i)}else if(o>i){H(t,l,$)}};const V=(e,t)=>{if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};const D=e=>e&&e["s-ol"]||e;const F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const W=(e,t)=>{const s=t.$elm$=e.$elm$;const n=e.$children$;const l=t.$children$;const o=t.$tag$;{{if(o==="slot");else{I(e,t,i)}}if(n!==null&&l!==null){q(s,n,t,l)}else if(l!==null){z(s,null,t,l,0,l.length-1)}else if(n!==null){H(n,0,n.length-1)}}};const Q=e=>{let t=e.childNodes;let s;let n;let l;let o;let $;let r;for(n=0,l=t.length;n<l;n++){s=t[n];if(s.nodeType===1){if(s["s-sr"]){$=s["s-sn"];s.hidden=false;for(o=0;o<l;o++){if(t[o]["s-hn"]!==s["s-hn"]){r=t[o].nodeType;if($!==""){if(r===1&&$===t[o].getAttribute("slot")){s.hidden=true;break}}else{if(r===1||r===3&&t[o].textContent.trim()!==""){s.hidden=true;break}}}}}Q(s)}}};const G=[];const J=e=>{let t;let s;let n;let l;let o;let $;let c=0;let i=e.childNodes;let a=i.length;for(;c<a;c++){t=i[c];if(t["s-sr"]&&(s=t["s-cr"])){n=s.parentNode.childNodes;l=t["s-sn"];for($=n.length-1;$>=0;$--){s=n[$];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==t["s-hn"]){if(K(s,l)){o=G.find(e=>e.$nodeToRelocate$===s);r=true;s["s-sn"]=s["s-sn"]||l;if(o){o.$slotRefNode$=t}else{G.push({$slotRefNode$:t,$nodeToRelocate$:s})}if(s["s-sr"]){G.map(e=>{if(K(e.$nodeToRelocate$,s["s-sn"])){o=G.find(e=>e.$nodeToRelocate$===s);if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}})}}else if(!G.some(e=>e.$nodeToRelocate$===s)){G.push({$nodeToRelocate$:s})}}}}if(t.nodeType===1){J(t)}}};const K=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const X=e=>{{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(X)}};const Y=(e,t)=>{const s=e.$hostElement$;const i=e.$cmpMeta$;const a=e.$vnode$||x(null,null);const f=A(t)?t:L(null,null,t);o=s.tagName;f.$tag$=null;f.$flags$|=4;e.$vnode$=f;f.$elm$=a.$elm$=s;{n=s["s-sc"]}{l=s["s-cr"];$=(i.$flags$&1)!==0;r=false}W(a,f);{if(c){h.$flags$|=1;J(f.$elm$);let e;let t;let s;let n;let l;let o;let $=0;for(;$<G.length;$++){e=G[$];t=e.$nodeToRelocate$;if(!t["s-ol"]){s=m.createTextNode("");s["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=s,t)}}for($=0;$<G.length;$++){e=G[$];t=e.$nodeToRelocate$;if(e.$slotRefNode$){n=e.$slotRefNode$.parentNode;l=e.$slotRefNode$.nextSibling;s=t["s-ol"];while(s=s.previousSibling){o=s["s-nr"];if(o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&n!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}n.insertBefore(t,l)}}}else{if(t.nodeType===1){t.hidden=true}}}h.$flags$&=~1}if(r){Q(f.$elm$)}G.length=0}};const Z=e("g",e=>Re(e).$hostElement$);const ee=e("c",(e,t,s)=>{const n=Z(e);return{emit:e=>te(n,t,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:e})}});const te=(e,t,s)=>{const n=new CustomEvent(t,s);e.dispatchEvent(n);return n};const se=(e,t)=>{if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))}};const ne=(e,t)=>{{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}const s=b("scheduleUpdate",e.$cmpMeta$.$tagName$);const n=e.$ancestorComponent$;const l=e.$lazyInstance$;const o=()=>le(e,l,t);se(e,n);let $;s();return ae($,()=>Oe(o))};const le=(e,t,s)=>{const n=e.$hostElement$;const l=b("update",e.$cmpMeta$.$tagName$);const o=n["s-rc"];if(s){v(e)}const $=b("render",e.$cmpMeta$.$tagName$);{{Y(e,oe(t))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(o){o.map(e=>e());n["s-rc"]=undefined}$();l();{const t=n["s-p"];const s=()=>$e(e);if(t.length===0){s()}else{Promise.all(t).then(s);e.$flags$|=4;t.length=0}}};const oe=e=>{try{e=e.render()}catch(t){Te(t)}return e};const $e=e=>{const t=e.$cmpMeta$.$tagName$;const s=e.$hostElement$;const n=b("postUpdate",t);const l=e.$lazyInstance$;const o=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{fe(s)}{ie(l,"componentDidLoad")}n();{e.$onReadyResolve$(s);if(!o){ce()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ie(()=>ne(e,false))}e.$flags$&=~(4|512)}};const re=e=>{{const t=Re(e);const s=t.$hostElement$.isConnected;if(s&&(t.$flags$&(2|16))===2){ne(t,false)}return s}};const ce=e=>{{fe(m.documentElement)}{h.$flags$|=2}Ie(()=>te(d,"appload",{detail:{namespace:s}}))};const ie=(e,t,s)=>{if(e&&e[t]){try{return e[t](s)}catch(n){Te(n)}}return undefined};const ae=(e,t)=>e&&e.then?e.then(t):t();const fe=e=>e.classList.add("hydrated");const de=(e,t)=>{if(e!=null&&!M(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};const ue=(e,t)=>Re(e).$instanceValues$.get(t);const me=(e,t,s,n)=>{const l=Re(e);const o=l.$instanceValues$.get(t);const $=l.$flags$;const r=l.$lazyInstance$;s=de(s,n.$members$[t][0]);if((!($&8)||o===undefined)&&s!==o){l.$instanceValues$.set(t,s);if(r){if(n.$watchers$&&$&128){const e=n.$watchers$[t];if(e){e.map(e=>{try{r[e](s,o,t)}catch(n){Te(n)}})}}if(($&(2|16))===2){ne(l,false)}}}};const he=(e,t,s)=>{if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}const n=Object.entries(t.$members$);const l=e.prototype;n.map(([e,[n]])=>{if(n&31||s&2&&n&32){Object.defineProperty(l,e,{get(){return ue(this,e)},set(s){me(this,e,s,t)},configurable:true,enumerable:true})}});if(s&1){const t=new Map;l.attributeChangedCallback=function(e,s,n){h.jmp(()=>{const s=t.get(e);this[s]=n===null&&typeof this[s]==="boolean"?false:n})};e.observedAttributes=n.filter(([e,t])=>t[0]&15).map(([e,s])=>{const n=s[1]||e;t.set(n,e);return n})}}return e};const ge=async(e,t,s,n,l)=>{if((t.$flags$&32)===0){t.$flags$|=32;{l=Me(s);if(l.then){const e=w();l=await l;e()}if(!l.isProxied){{s.$watchers$=l.watchers}he(l,s,2);l.isProxied=true}const e=b("createInstance",s.$tagName$);{t.$flags$|=8}try{new l(t)}catch(r){Te(r)}{t.$flags$&=~8}{t.$flags$|=128}e()}const e=C(s.$tagName$);if(!je.has(e)&&l.style){const t=b("registerStyles",s.$tagName$);let n=l.style;R(e,n,!!(s.$flags$&1));t()}}const o=t.$ancestorComponent$;const $=()=>ne(t,true);if(o&&o["s-rc"]){o["s-rc"].push($)}else{$()}};const pe=e=>{if((h.$flags$&1)===0){const t=Re(e);const s=t.$cmpMeta$;const n=b("connectedCallback",s.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(s.$flags$&(4|8)){ye(e)}}{let s=e;while(s=s.parentNode||s.host){if(s["s-p"]){se(t,t.$ancestorComponent$=s);break}}}if(s.$members$){Object.entries(s.$members$).map(([t,[s]])=>{if(s&31&&e.hasOwnProperty(t)){const s=e[t];delete e[t];e[t]=s}})}{ge(e,t,s)}}n()}};const ye=e=>{const t=e["s-cr"]=m.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const be=e=>{if((h.$flags$&1)===0){const t=Re(e);const s=t.$lazyInstance$;if(h.$cssShim$){h.$cssShim$.removeHost(e)}{ie(s,"componentDidUnload")}}};const we=e("b",(e,t={})=>{const s=b();const n=[];const l=t.exclude||[];const o=d.customElements;const $=m.head;const r=$.querySelector("meta[charset]");const c=m.createElement("style");const i=[];let a;let f=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",m.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.map(e=>e[1].map(t=>{const s={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{s.$members$=t[2]}{s.$watchers$={}}const $=s.$tagName$;const r=class extends HTMLElement{constructor(e){super(e);e=this;ve(e,s)}connectedCallback(){if(a){clearTimeout(a);a=null}if(f){i.push(this)}else{h.jmp(()=>pe(this))}}disconnectedCallback(){h.jmp(()=>be(this))}forceUpdate(){re(this)}componentOnReady(){return Re(this).$onReadyPromise$}};s.$lazyBundleIds$=e[0];if(!l.includes($)&&!o.get($)){n.push($);o.define($,he(r,s,1))}}));{c.innerHTML=n+y;c.setAttribute("data-styles","");$.insertBefore(c,r?r.nextSibling:$.firstChild)}f=false;if(i.length){i.map(e=>e.connectedCallback())}else{{h.jmp(()=>a=setTimeout(ce,30))}}s()});const Ne=new WeakMap;const Re=e=>Ne.get(e);const Se=e("r",(e,t)=>Ne.set(t.$lazyInstance$=e,t));const ve=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{s.$onReadyPromise$=new Promise(e=>s.$onReadyResolve$=e);e["s-p"]=[];e["s-rc"]=[]}return Ne.set(e,s)};const Ce=(e,t)=>t in e;const Te=e=>console.error(e);const Ee=new Map;const Me=(e,s,n)=>{const l=e.$tagName$.replace(/-/g,"_");const o=e.$lazyBundleIds$;const $=Ee.get(o);if($){return $[l]}return t.import(`./${o}.entry.js${""}`).then(e=>{{Ee.set(o,e)}return e[l]},Te)};const je=new Map;const Le=[];const xe=[];const Ue=[];const Ae=(e,t)=>s=>{e.push(s);if(!f){f=true;if(t&&h.$flags$&4){Ie(Pe)}else{h.raf(Pe)}}};const ke=e=>{for(let s=0;s<e.length;s++){try{e[s](performance.now())}catch(t){Te(t)}}e.length=0};const Be=(e,t)=>{let s=0;let n=0;while(s<e.length&&(n=performance.now())<t){try{e[s++](n)}catch(l){Te(l)}}if(s===e.length){e.length=0}else if(s!==0){e.splice(0,s)}};const Pe=()=>{a++;ke(Le);const e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;Be(xe,e);Be(Ue,e);if(xe.length>0){Ue.push(...xe);xe.length=0}if(f=Le.length+xe.length+Ue.length>0){h.raf(Pe)}else{a=0}};const Ie=e=>g().then(e);const Oe=Ae(xe,true);const _e=e("a",()=>{if(!(u&&u.supports&&u.supports("color","var(--c)"))){return t.import("./p-9c81688a.system.js").then(()=>{if(h.$cssShim$=d.__cssshim){return h.$cssShim$.i()}else{return 0}})}return g()});const ze=e("p",()=>{{h.$cssShim$=d.__cssshim}const e=Array.from(m.querySelectorAll("script")).find(e=>new RegExp(`/${s}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===s);const n=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then(){}}}{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,d.location.href)).href;{He(n.resourcesUrl,e)}if(!d.customElements){return t.import("./p-2d6966bf.system.js").then(()=>n)}}return g(n)});const He=(e,t)=>{const n=j(s);try{d[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;d[n]=l=>{const o=new URL(l,e).href;let $=s.get(o);if(!$){const e=m.createElement("script");e.type="module";e.crossOrigin=t.crossOrigin;e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"}));$=new Promise(t=>{e.onload=()=>{t(d[n].m);e.remove()}});s.set(o,$);m.head.appendChild(e)}return $}}}}}}));