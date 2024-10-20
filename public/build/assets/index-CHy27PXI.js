import{r as u,j as R,b as ke,U as j,t as Ae}from"./app-BxEub3I0.js";function ue(e,t=[]){let r=[];function o(n,l){const i=u.createContext(l),c=r.length;r=[...r,l];function a(v){const{scope:g,children:x,...d}=v,b=(g==null?void 0:g[e][c])||i,p=u.useMemo(()=>d,Object.values(d));return R.jsx(b.Provider,{value:p,children:x})}function h(v,g){const x=(g==null?void 0:g[e][c])||i,d=u.useContext(x);if(d)return d;if(l!==void 0)return l;throw new Error(`\`${v}\` must be used within \`${n}\``)}return a.displayName=n+"Provider",[a,h]}const s=()=>{const n=r.map(l=>u.createContext(l));return function(i){const c=(i==null?void 0:i[e])||n;return u.useMemo(()=>({[`__scope${e}`]:{...i,[e]:c}}),[i,c])}};return s.scopeName=e,[o,Ee(s,...t)]}function Ee(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(n){const l=o.reduce((i,{useScope:c,scopeName:a})=>{const v=c(n)[`__scope${a}`];return{...i,...v}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function Pe(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function fe(...e){return t=>e.forEach(r=>Pe(r,t))}function H(...e){return u.useCallback(fe(...e),e)}var Y=u.forwardRef((e,t)=>{const{children:r,...o}=e,s=u.Children.toArray(r),n=s.find(Te);if(n){const l=n.props.children,i=s.map(c=>c===n?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:c);return R.jsx(ee,{...o,ref:t,children:u.isValidElement(l)?u.cloneElement(l,void 0,i):null})}return R.jsx(ee,{...o,ref:t,children:r})});Y.displayName="Slot";var ee=u.forwardRef((e,t)=>{const{children:r,...o}=e;if(u.isValidElement(r)){const s=ze(r);return u.cloneElement(r,{...Ne(o,r.props),ref:t?fe(t,s):s})}return u.Children.count(r)>1?u.Children.only(null):null});ee.displayName="SlotClone";var Me=({children:e})=>R.jsx(R.Fragment,{children:e});function Te(e){return u.isValidElement(e)&&e.type===Me}function Ne(e,t){const r={...t};for(const o in t){const s=e[o],n=t[o];/^on[A-Z]/.test(o)?s&&n?r[o]=(...i)=>{n(...i),s(...i)}:s&&(r[o]=s):o==="style"?r[o]={...s,...n}:o==="className"&&(r[o]=[s,n].filter(Boolean).join(" "))}return{...e,...r}}function ze(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var je=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],pe=je.reduce((e,t)=>{const r=u.forwardRef((o,s)=>{const{asChild:n,...l}=o,i=n?Y:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),R.jsx(i,{...l,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Ft(e,t){e&&ke.flushSync(()=>e.dispatchEvent(t))}function G(e,t,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e==null||e(s),r===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function Fe(e){const t=e+"CollectionProvider",[r,o]=ue(t),[s,n]=r(t,{collectionRef:{current:null},itemMap:new Map}),l=x=>{const{scope:d,children:b}=x,p=j.useRef(null),m=j.useRef(new Map).current;return R.jsx(s,{scope:d,itemMap:m,collectionRef:p,children:b})};l.displayName=t;const i=e+"CollectionSlot",c=j.forwardRef((x,d)=>{const{scope:b,children:p}=x,m=n(i,b),y=H(d,m.collectionRef);return R.jsx(Y,{ref:y,children:p})});c.displayName=i;const a=e+"CollectionItemSlot",h="data-radix-collection-item",v=j.forwardRef((x,d)=>{const{scope:b,children:p,...m}=x,y=j.useRef(null),k=H(d,y),I=n(a,b);return j.useEffect(()=>(I.itemMap.set(y,{ref:y,...m}),()=>void I.itemMap.delete(y))),R.jsx(Y,{[h]:"",ref:k,children:p})});v.displayName=a;function g(x){const d=n(e+"CollectionConsumer",x);return j.useCallback(()=>{const p=d.collectionRef.current;if(!p)return[];const m=Array.from(p.querySelectorAll(`[${h}]`));return Array.from(d.itemMap.values()).sort((I,E)=>m.indexOf(I.ref.current)-m.indexOf(E.ref.current))},[d.collectionRef,d.itemMap])}return[{Provider:l,Slot:c,ItemSlot:v},g,o]}var Ge=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{},_e=Ae.useId||(()=>{}),Oe=0;function Le(e){const[t,r]=u.useState(_e());return Ge(()=>{r(o=>o??String(Oe++))},[e]),t?`radix-${t}`:""}function oe(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...r)=>{var o;return(o=t.current)==null?void 0:o.call(t,...r)},[])}function Ve({prop:e,defaultProp:t,onChange:r=()=>{}}){const[o,s]=Ue({defaultProp:t,onChange:r}),n=e!==void 0,l=n?e:o,i=oe(r),c=u.useCallback(a=>{if(n){const v=typeof a=="function"?a(e):a;v!==e&&i(v)}else s(a)},[n,e,s,i]);return[l,c]}function Ue({defaultProp:e,onChange:t}){const r=u.useState(e),[o]=r,s=u.useRef(o),n=oe(t);return u.useEffect(()=>{s.current!==o&&(n(o),s.current=o)},[o,s,n]),r}var $e=u.createContext(void 0);function De(e){const t=u.useContext($e);return e||t||"ltr"}var X="rovingFocusGroup.onEntryFocus",We={bubbles:!1,cancelable:!0},Z="RovingFocusGroup",[te,be,Be]=Fe(Z),[Ke,Gt]=ue(Z,[Be]),[qe,Ye]=Ke(Z),me=u.forwardRef((e,t)=>R.jsx(te.Provider,{scope:e.__scopeRovingFocusGroup,children:R.jsx(te.Slot,{scope:e.__scopeRovingFocusGroup,children:R.jsx(Ze,{...e,ref:t})})}));me.displayName=Z;var Ze=u.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,orientation:o,loop:s=!1,dir:n,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:c,onEntryFocus:a,preventScrollOnEntryFocus:h=!1,...v}=e,g=u.useRef(null),x=H(t,g),d=De(n),[b=null,p]=Ve({prop:l,defaultProp:i,onChange:c}),[m,y]=u.useState(!1),k=oe(a),I=be(r),E=u.useRef(!1),[B,L]=u.useState(0);return u.useEffect(()=>{const S=g.current;if(S)return S.addEventListener(X,k),()=>S.removeEventListener(X,k)},[k]),R.jsx(qe,{scope:r,orientation:o,dir:d,loop:s,currentTabStopId:b,onItemFocus:u.useCallback(S=>p(S),[p]),onItemShiftTab:u.useCallback(()=>y(!0),[]),onFocusableItemAdd:u.useCallback(()=>L(S=>S+1),[]),onFocusableItemRemove:u.useCallback(()=>L(S=>S-1),[]),children:R.jsx(pe.div,{tabIndex:m||B===0?-1:0,"data-orientation":o,...v,ref:x,style:{outline:"none",...e.style},onMouseDown:G(e.onMouseDown,()=>{E.current=!0}),onFocus:G(e.onFocus,S=>{const V=!E.current;if(S.target===S.currentTarget&&V&&!m){const F=new CustomEvent(X,We);if(S.currentTarget.dispatchEvent(F),!F.defaultPrevented){const z=I().filter(A=>A.focusable),w=z.find(A=>A.active),K=z.find(A=>A.id===b),q=[w,K,...z].filter(Boolean).map(A=>A.ref.current);ve(q,h)}}E.current=!1}),onBlur:G(e.onBlur,()=>y(!1))})})}),ge="RovingFocusGroupItem",he=u.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:r,focusable:o=!0,active:s=!1,tabStopId:n,...l}=e,i=Le(),c=n||i,a=Ye(ge,r),h=a.currentTabStopId===c,v=be(r),{onFocusableItemAdd:g,onFocusableItemRemove:x}=a;return u.useEffect(()=>{if(o)return g(),()=>x()},[o,g,x]),R.jsx(te.ItemSlot,{scope:r,id:c,focusable:o,active:s,children:R.jsx(pe.span,{tabIndex:h?0:-1,"data-orientation":a.orientation,...l,ref:t,onMouseDown:G(e.onMouseDown,d=>{o?a.onItemFocus(c):d.preventDefault()}),onFocus:G(e.onFocus,()=>a.onItemFocus(c)),onKeyDown:G(e.onKeyDown,d=>{if(d.key==="Tab"&&d.shiftKey){a.onItemShiftTab();return}if(d.target!==d.currentTarget)return;const b=Qe(d,a.orientation,a.dir);if(b!==void 0){if(d.metaKey||d.ctrlKey||d.altKey||d.shiftKey)return;d.preventDefault();let m=v().filter(y=>y.focusable).map(y=>y.ref.current);if(b==="last")m.reverse();else if(b==="prev"||b==="next"){b==="prev"&&m.reverse();const y=m.indexOf(d.currentTarget);m=a.loop?He(m,y+1):m.slice(y+1)}setTimeout(()=>ve(m))}})})})});he.displayName=ge;var Je={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Xe(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Qe(e,t,r){const o=Xe(e.key,r);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Je[o]}function ve(e,t=!1){const r=document.activeElement;for(const o of e)if(o===r||(o.focus({preventScroll:t}),document.activeElement!==r))return}function He(e,t){return e.map((r,o)=>e[(t+o)%e.length])}var _t=me,Ot=he;function ye(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=ye(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function et(){for(var e,t,r=0,o="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=ye(e))&&(o&&(o+=" "),o+=t);return o}const ne="-",tt=e=>{const t=ot(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const i=l.split(ne);return i[0]===""&&i.length!==1&&i.shift(),xe(i,t)||rt(l)},getConflictingClassGroupIds:(l,i)=>{const c=r[l]||[];return i&&o[l]?[...c,...o[l]]:c}}},xe=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),s=o?xe(e.slice(1),o):void 0;if(s)return s;if(t.validators.length===0)return;const n=e.join(ne);return(l=t.validators.find(({validator:i})=>i(n)))==null?void 0:l.classGroupId},le=/^\[(.+)\]$/,rt=e=>{if(le.test(e)){const t=le.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},ot=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return st(Object.entries(e.classGroups),r).forEach(([n,l])=>{re(l,o,n,t)}),o},re=(e,t,r,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?t:ae(t,s);n.classGroupId=r;return}if(typeof s=="function"){if(nt(s)){re(s(o),t,r,o);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([n,l])=>{re(l,ae(t,n),r,o)})})},ae=(e,t)=>{let r=e;return t.split(ne).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},nt=e=>e.isThemeGetter,st=(e,t)=>t?e.map(([r,o])=>{const s=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([l,i])=>[t+l,i])):n);return[r,s]}):e,it=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const s=(n,l)=>{r.set(n,l),t++,t>e&&(t=0,o=r,r=new Map)};return{get(n){let l=r.get(n);if(l!==void 0)return l;if((l=o.get(n))!==void 0)return s(n,l),l},set(n,l){r.has(n)?r.set(n,l):s(n,l)}}},we="!",lt=e=>{const{separator:t,experimentalParseClassName:r}=e,o=t.length===1,s=t[0],n=t.length,l=i=>{const c=[];let a=0,h=0,v;for(let p=0;p<i.length;p++){let m=i[p];if(a===0){if(m===s&&(o||i.slice(p,p+n)===t)){c.push(i.slice(h,p)),h=p+n;continue}if(m==="/"){v=p;continue}}m==="["?a++:m==="]"&&a--}const g=c.length===0?i:i.substring(h),x=g.startsWith(we),d=x?g.substring(1):g,b=v&&v>h?v-h:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:d,maybePostfixModifierPosition:b}};return r?i=>r({className:i,parseClassName:l}):l},at=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},ct=e=>({cache:it(e.cacheSize),parseClassName:lt(e),...tt(e)}),dt=/\s+/,ut=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=t,n=[],l=e.trim().split(dt);let i="";for(let c=l.length-1;c>=0;c-=1){const a=l[c],{modifiers:h,hasImportantModifier:v,baseClassName:g,maybePostfixModifierPosition:x}=r(a);let d=!!x,b=o(d?g.substring(0,x):g);if(!b){if(!d){i=a+(i.length>0?" "+i:i);continue}if(b=o(g),!b){i=a+(i.length>0?" "+i:i);continue}d=!1}const p=at(h).join(":"),m=v?p+we:p,y=m+b;if(n.includes(y))continue;n.push(y);const k=s(b,d);for(let I=0;I<k.length;++I){const E=k[I];n.push(m+E)}i=a+(i.length>0?" "+i:i)}return i};function ft(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Ce(t))&&(o&&(o+=" "),o+=r);return o}const Ce=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=Ce(e[o]))&&(r&&(r+=" "),r+=t);return r};function pt(e,...t){let r,o,s,n=l;function l(c){const a=t.reduce((h,v)=>v(h),e());return r=ct(a),o=r.cache.get,s=r.cache.set,n=i,i(c)}function i(c){const a=o(c);if(a)return a;const h=ut(c,r);return s(c,h),h}return function(){return n(ft.apply(null,arguments))}}const C=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Se=/^\[(?:([a-z-]+):)?(.+)\]$/i,bt=/^\d+\/\d+$/,mt=new Set(["px","full","screen"]),gt=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ht=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,yt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,M=e=>_(e)||mt.has(e)||bt.test(e),T=e=>O(e,"length",Et),_=e=>!!e&&!Number.isNaN(Number(e)),Q=e=>O(e,"number",_),D=e=>!!e&&Number.isInteger(Number(e)),wt=e=>e.endsWith("%")&&_(e.slice(0,-1)),f=e=>Se.test(e),N=e=>gt.test(e),Ct=new Set(["length","size","percentage"]),St=e=>O(e,Ct,Re),Rt=e=>O(e,"position",Re),It=new Set(["image","url"]),kt=e=>O(e,It,Mt),At=e=>O(e,"",Pt),W=()=>!0,O=(e,t,r)=>{const o=Se.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},Et=e=>ht.test(e)&&!vt.test(e),Re=()=>!1,Pt=e=>yt.test(e),Mt=e=>xt.test(e),Tt=()=>{const e=C("colors"),t=C("spacing"),r=C("blur"),o=C("brightness"),s=C("borderColor"),n=C("borderRadius"),l=C("borderSpacing"),i=C("borderWidth"),c=C("contrast"),a=C("grayscale"),h=C("hueRotate"),v=C("invert"),g=C("gap"),x=C("gradientColorStops"),d=C("gradientColorStopPositions"),b=C("inset"),p=C("margin"),m=C("opacity"),y=C("padding"),k=C("saturate"),I=C("scale"),E=C("sepia"),B=C("skew"),L=C("space"),S=C("translate"),V=()=>["auto","contain","none"],F=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto",f,t],w=()=>[f,t],K=()=>["",M,T],U=()=>["auto",_,f],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],A=()=>["solid","dashed","dotted","double","none"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],J=()=>["start","end","center","between","around","evenly","stretch"],$=()=>["","0",f],ie=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>[_,f];return{cacheSize:500,separator:":",theme:{colors:[W],spacing:[M,T],blur:["none","",N,f],brightness:P(),borderColor:[e],borderRadius:["none","","full",N,f],borderSpacing:w(),borderWidth:K(),contrast:P(),grayscale:$(),hueRotate:P(),invert:$(),gap:w(),gradientColorStops:[e],gradientColorStopPositions:[wt,T],inset:z(),margin:z(),opacity:P(),padding:w(),saturate:P(),scale:P(),sepia:$(),skew:P(),space:w(),translate:w()},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":ie()}],"break-before":[{"break-before":ie()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),f]}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",D,f]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:$()}],shrink:[{shrink:$()}],order:[{order:["first","last","none",D,f]}],"grid-cols":[{"grid-cols":[W]}],"col-start-end":[{col:["auto",{span:["full",D,f]},f]}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":[W]}],"row-start-end":[{row:["auto",{span:[D,f]},f]}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...J()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...J(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...J(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[L]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[L]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",f,t]}],"min-w":[{"min-w":[f,t,"min","max","fit"]}],"max-w":[{"max-w":[f,t,"none","full","min","max","fit","prose",{screen:[N]},N]}],h:[{h:[f,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[f,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[f,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[f,t,"auto","min","max","fit"]}],"font-size":[{text:["base",N,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Q]}],"font-family":[{font:[W]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",f]}],"line-clamp":[{"line-clamp":["none",_,Q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",M,f]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...A(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",M,T]}],"underline-offset":[{"underline-offset":["auto",M,f]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",f]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),Rt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",St]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},kt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[d]}],"gradient-via-pos":[{via:[d]}],"gradient-to-pos":[{to:[d]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...A(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:A()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...A()]}],"outline-offset":[{"outline-offset":[M,f]}],"outline-w":[{outline:[M,T]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[M,T]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,At]}],"shadow-color":[{shadow:[W]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...se(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":se()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",N,f]}],grayscale:[{grayscale:[a]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[v]}],saturate:[{saturate:[k]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[a]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[v]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[k]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:P()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:P()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[I]}],"scale-x":[{"scale-x":[I]}],"scale-y":[{"scale-y":[I]}],rotate:[{rotate:[D,f]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[B]}],"skew-y":[{"skew-y":[B]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[M,T,Q]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Nt=pt(Tt);function Lt(...e){return Nt(et(e))}function Ie(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Ie(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function zt(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=Ie(e))&&(o&&(o+=" "),o+=t);return o}const ce=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,de=zt,Vt=(e,t)=>r=>{var o;if((t==null?void 0:t.variants)==null)return de(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:s,defaultVariants:n}=t,l=Object.keys(s).map(a=>{const h=r==null?void 0:r[a],v=n==null?void 0:n[a];if(h===null)return null;const g=ce(h)||ce(v);return s[a][g]}),i=r&&Object.entries(r).reduce((a,h)=>{let[v,g]=h;return g===void 0||(a[v]=g),a},{}),c=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((a,h)=>{let{class:v,className:g,...x}=h;return Object.entries(x).every(d=>{let[b,p]=d;return Array.isArray(p)?p.includes({...n,...i}[b]):{...n,...i}[b]===p})?[...a,v,g]:a},[]);return de(e,l,c,r==null?void 0:r.class,r==null?void 0:r.className)};export{Ot as I,pe as P,_t as R,Y as S,ue as a,Gt as b,G as c,De as d,Lt as e,Vt as f,oe as g,H as h,Ft as i,Ge as j,Fe as k,fe as l,Le as m,Ve as u};
