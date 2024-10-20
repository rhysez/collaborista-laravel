import{r as g,j as e,U as u,W as z,Y as B,a as L}from"./app-DyDl4uPD.js";import{T as v,I as h}from"./TextInput-Db_W5VSH.js";import{I as p}from"./InputLabel-CD_wB2_A.js";import{G as U}from"./GuestLayout-BIAbU8db.js";import{u as y,P as N,c as Y,a as O,b as k,d as W,R as H,I as J,e as C,f as K,B as Q}from"./index-Bxhp8foO.js";import"./theme-provider-BxQdWpYw.js";var X="Toggle",T=g.forwardRef((a,r)=>{const{pressed:o,defaultPressed:t=!1,onPressedChange:n,...i}=a,[l=!1,c]=y({prop:o,onChange:n,defaultProp:t});return e.jsx(N.button,{type:"button","aria-pressed":l,"data-state":l?"on":"off","data-disabled":a.disabled?"":void 0,...i,ref:r,onClick:Y(a.onClick,()=>{a.disabled||c(!l)})})});T.displayName=X;var _=T,f="ToggleGroup",[I,ue]=O(f,[k]),R=k(),G=u.forwardRef((a,r)=>{const{type:o,...t}=a;if(o==="single"){const n=t;return e.jsx(Z,{...n,ref:r})}if(o==="multiple"){const n=t;return e.jsx(ee,{...n,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${f}\``)});G.displayName=f;var[F,S]=I(f),Z=u.forwardRef((a,r)=>{const{value:o,defaultValue:t,onValueChange:n=()=>{},...i}=a,[l,c]=y({prop:o,defaultProp:t,onChange:n});return e.jsx(F,{scope:a.__scopeToggleGroup,type:"single",value:l?[l]:[],onItemActivate:c,onItemDeactivate:u.useCallback(()=>c(""),[c]),children:e.jsx(V,{...i,ref:r})})}),ee=u.forwardRef((a,r)=>{const{value:o,defaultValue:t,onValueChange:n=()=>{},...i}=a,[l=[],c]=y({prop:o,defaultProp:t,onChange:n}),d=u.useCallback(s=>c((x=[])=>[...x,s]),[c]),j=u.useCallback(s=>c((x=[])=>x.filter(q=>q!==s)),[c]);return e.jsx(F,{scope:a.__scopeToggleGroup,type:"multiple",value:l,onItemActivate:d,onItemDeactivate:j,children:e.jsx(V,{...i,ref:r})})});G.displayName=f;var[ae,te]=I(f),V=u.forwardRef((a,r)=>{const{__scopeToggleGroup:o,disabled:t=!1,rovingFocus:n=!0,orientation:i,dir:l,loop:c=!0,...d}=a,j=R(o),s=W(l),x={role:"group",dir:s,...d};return e.jsx(ae,{scope:o,rovingFocus:n,disabled:t,children:n?e.jsx(H,{asChild:!0,...j,orientation:i,dir:s,loop:c,children:e.jsx(N.div,{...x,ref:r})}):e.jsx(N.div,{...x,ref:r})})}),b="ToggleGroupItem",E=u.forwardRef((a,r)=>{const o=S(b,a.__scopeToggleGroup),t=te(b,a.__scopeToggleGroup),n=R(a.__scopeToggleGroup),i=o.value.includes(a.value),l=t.disabled||a.disabled,c={...a,pressed:i,disabled:l},d=u.useRef(null);return t.rovingFocus?e.jsx(J,{asChild:!0,...n,focusable:!l,active:i,ref:d,children:e.jsx(P,{...c,ref:r})}):e.jsx(P,{...c,ref:r})});E.displayName=b;var P=u.forwardRef((a,r)=>{const{__scopeToggleGroup:o,value:t,...n}=a,i=S(b,o),l={role:"radio","aria-checked":a.pressed,"aria-pressed":void 0},c=i.type==="single"?l:void 0;return e.jsx(T,{...c,...n,ref:r,onPressedChange:d=>{d?i.onItemActivate(t):i.onItemDeactivate(t)}})}),A=G,D=E;const M=K("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),se=g.forwardRef(({className:a,variant:r,size:o,...t},n)=>e.jsx(_,{ref:n,className:C(M({variant:r,size:o,className:a})),...t}));se.displayName=_.displayName;const $=g.createContext({size:"default",variant:"default"}),w=g.forwardRef(({className:a,variant:r,size:o,children:t,...n},i)=>e.jsx(A,{ref:i,className:C("flex items-center justify-center gap-1",a),...n,children:e.jsx($.Provider,{value:{variant:r,size:o},children:t})}));w.displayName=A.displayName;const m=g.forwardRef(({className:a,children:r,variant:o,size:t,...n},i)=>{const l=g.useContext($);return e.jsx(D,{ref:i,className:C(M({variant:l.variant||o,size:l.size||t}),a),...n,children:r})});m.displayName=D.displayName;function de(){const[a,r]=g.useState("Account"),{data:o,setData:t,post:n,processing:i,errors:l,reset:c}=z({name:"",username:"",email:"",password:"",password_confirmation:"",platforms:[],tags:[]}),d=s=>{s.preventDefault(),n(route("register"),{onFinish:()=>c("password","password_confirmation")})};return[{name:"youtube",display_name:"YouTube",color:"#dc2626"},{name:"instagram",display_name:"Instagram",color:"#d946ef"},{name:"twitch",display_name:"Twitch",color:"#7c3aed"},{name:"tiktok",display_name:"TikTok",color:"#f8fafc"},{name:"linkedin",display_name:"LinkedIn",color:"#2563eb"}].map(s=>e.jsx(m,{className:`font-bold radix-state-on:bg-[${s.color}] radix-state-on:text-white`,value:s.name,children:s.display_name},s.name)),console.log(o),e.jsxs(U,{children:[e.jsx(B,{title:"Register"}),e.jsxs("section",{className:"mt-4 mb-8",children:[e.jsx("h1",{className:"text-primary text-center font-bold text-5xl",children:"Collaborista"}),e.jsx("p",{className:"text-primary text-center font-extralight text-2xl",children:"Join as a creator"})]}),e.jsx("form",{onSubmit:d,children:a=="Account"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(p,{htmlFor:"name",value:"Name (can be first name, or full name)"}),e.jsx(v,{id:"name",name:"name",value:o.name,className:"mt-1 block w-full",autoComplete:"name",onChange:s=>t("name",s.target.value),required:!0}),e.jsx(h,{message:l.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"username",value:"Username"}),e.jsx(v,{id:"username",name:"username",value:o.username,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>t("username",s.target.value),required:!0}),e.jsx(h,{message:l.username,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"email",value:"Email"}),e.jsx(v,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"email",onChange:s=>t("email",s.target.value),required:!0}),e.jsx(h,{message:l.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"password",value:"Password"}),e.jsx(v,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>t("password",s.target.value),required:!0}),e.jsx(h,{message:l.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(v,{id:"password_confirmation",type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>t("password_confirmation",s.target.value),required:!0}),e.jsx(h,{message:l.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[e.jsx(L,{href:route("login"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e.jsx(Q,{onClick:()=>r("Platform"),className:"rounded-full hover:bg-manuka ml-4",children:"Next"})]})]}):a=="Platform"?e.jsxs(e.Fragment,{children:[e.jsx(p,{htmlFor:"platforms",value:"Which platforms do you create content for?"}),e.jsx("p",{className:"text-sm opacity-75",children:"Select at least one option"}),e.jsxs(w,{variant:"outline",type:"multiple",className:"mt-4",onValueChange:s=>{s&&t("platforms",s)},children:[e.jsx(m,{className:"font-bold radix-state-on:bg-red-600 radix-state-on:text-white",value:"youtube",children:"YouTube"}),e.jsx(m,{className:"font-bold radix-state-on:bg-fuchsia-500 radix-state-on:text-white",value:"instagram",children:"Instagram"}),e.jsx(m,{className:"font-bold radix-state-on:bg-purple-600 radix-state-on:text-white",value:"twitch",children:"Twitch"}),e.jsx(m,{className:"font-bold radix-state-on:bg-foreground radix-state-on:text-background",value:"tiktok",children:"TikTok"}),e.jsx(m,{className:"font-bold radix-state-on:bg-blue-600 radix-state-on:text-white",value:"linkedin",children:"LinkedIn"})]}),e.jsx(p,{className:"mt-4",htmlFor:"tags",value:"Pick some tags to describe your content"}),e.jsx("p",{className:"text-sm opacity-75",children:"Select at least one option"}),e.jsx(w,{variant:"outline",type:"multiple",className:"mt-4",onValueChange:s=>{s&&t("tags",s)},children:e.jsx(m,{className:"font-bold radix-state-on:bg-manuka radix-state-on:text-white",value:"vlogging",children:"vlogging"})})]}):e.jsx("p",{children:"Personal"})})]})}export{de as default};
