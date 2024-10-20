import{r as f,j as e,U as u,W as z,Y as B,a as L}from"./app-BxEub3I0.js";import{T as v,I as h}from"./TextInput-TRGHMDmh.js";import{I as p}from"./InputLabel-Q3esc13z.js";import{G as U}from"./GuestLayout-CxqAWAKd.js";import{u as N,P as w,c as O,a as W,b as P,d as Y,R as H,I as J,e as C,f as K}from"./index-CHy27PXI.js";import{P as Q}from"./PrimaryButton-B83lGQ-N.js";import"./theme-provider-LKB_rmE8.js";var X="Toggle",y=f.forwardRef((a,s)=>{const{pressed:n,defaultPressed:r=!1,onPressedChange:o,...l}=a,[i=!1,t]=N({prop:n,onChange:o,defaultProp:r});return e.jsx(w.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":a.disabled?"":void 0,...l,ref:s,onClick:O(a.onClick,()=>{a.disabled||t(!i)})})});y.displayName=X;var _=y,x="ToggleGroup",[I,de]=W(x,[P]),k=P(),G=u.forwardRef((a,s)=>{const{type:n,...r}=a;if(n==="single"){const o=r;return e.jsx(Z,{...o,ref:s})}if(n==="multiple"){const o=r;return e.jsx(ee,{...o,ref:s})}throw new Error(`Missing prop \`type\` expected on \`${x}\``)});G.displayName=x;var[R,F]=I(x),Z=u.forwardRef((a,s)=>{const{value:n,defaultValue:r,onValueChange:o=()=>{},...l}=a,[i,t]=N({prop:n,defaultProp:r,onChange:o});return e.jsx(R,{scope:a.__scopeToggleGroup,type:"single",value:i?[i]:[],onItemActivate:t,onItemDeactivate:u.useCallback(()=>t(""),[t]),children:e.jsx(E,{...l,ref:s})})}),ee=u.forwardRef((a,s)=>{const{value:n,defaultValue:r,onValueChange:o=()=>{},...l}=a,[i=[],t]=N({prop:n,defaultProp:r,onChange:o}),c=u.useCallback(d=>t((m=[])=>[...m,d]),[t]),b=u.useCallback(d=>t((m=[])=>m.filter(q=>q!==d)),[t]);return e.jsx(R,{scope:a.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:c,onItemDeactivate:b,children:e.jsx(E,{...l,ref:s})})});G.displayName=x;var[ae,te]=I(x),E=u.forwardRef((a,s)=>{const{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:o=!0,orientation:l,dir:i,loop:t=!0,...c}=a,b=k(n),d=Y(i),m={role:"group",dir:d,...c};return e.jsx(ae,{scope:n,rovingFocus:o,disabled:r,children:o?e.jsx(H,{asChild:!0,...b,orientation:l,dir:d,loop:t,children:e.jsx(w.div,{...m,ref:s})}):e.jsx(w.div,{...m,ref:s})})}),j="ToggleGroupItem",S=u.forwardRef((a,s)=>{const n=F(j,a.__scopeToggleGroup),r=te(j,a.__scopeToggleGroup),o=k(a.__scopeToggleGroup),l=n.value.includes(a.value),i=r.disabled||a.disabled,t={...a,pressed:l,disabled:i},c=u.useRef(null);return r.rovingFocus?e.jsx(J,{asChild:!0,...o,focusable:!i,active:l,ref:c,children:e.jsx(T,{...t,ref:s})}):e.jsx(T,{...t,ref:s})});S.displayName=j;var T=u.forwardRef((a,s)=>{const{__scopeToggleGroup:n,value:r,...o}=a,l=F(j,n),i={role:"radio","aria-checked":a.pressed,"aria-pressed":void 0},t=l.type==="single"?i:void 0;return e.jsx(y,{...t,...o,ref:s,onPressedChange:c=>{c?l.onItemActivate(r):l.onItemDeactivate(r)}})}),V=G,A=S;const D=K("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),se=f.forwardRef(({className:a,variant:s,size:n,...r},o)=>e.jsx(_,{ref:o,className:C(D({variant:s,size:n,className:a})),...r}));se.displayName=_.displayName;const M=f.createContext({size:"default",variant:"default"}),$=f.forwardRef(({className:a,variant:s,size:n,children:r,...o},l)=>e.jsx(V,{ref:l,className:C("flex items-center justify-center gap-1",a),...o,children:e.jsx(M.Provider,{value:{variant:s,size:n},children:r})}));$.displayName=V.displayName;const g=f.forwardRef(({className:a,children:s,variant:n,size:r,...o},l)=>{const i=f.useContext(M);return e.jsx(A,{ref:l,className:C(D({variant:i.variant||n,size:i.size||r}),a),...o,children:s})});g.displayName=A.displayName;function me(){const{data:a,setData:s,post:n,processing:r,errors:o,reset:l}=z({name:"",username:"",email:"",password:"",password_confirmation:"",platforms:[]}),i=t=>{t.preventDefault(),n(route("register"),{onFinish:()=>l("password","password_confirmation")})};return a.name.length&&a.username.length&&a.email.length&&a.password.length&&a.password_confirmation.length,console.log(a),e.jsxs(U,{children:[e.jsx(B,{title:"Register"}),e.jsxs("section",{className:"mt-4 mb-8",children:[e.jsx("h1",{className:"text-primary text-center font-bold text-5xl",children:"Collaborista"}),e.jsx("p",{className:"text-primary text-center font-extralight text-2xl",children:"Join as a creator"})]}),e.jsx("form",{onSubmit:i,children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(p,{htmlFor:"name",value:"Name (can be first name, or full name)"}),e.jsx(v,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",onChange:t=>s("name",t.target.value),required:!0}),e.jsx(h,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"username",value:"Username"}),e.jsx(v,{id:"username",name:"username",value:a.username,className:"mt-1 block w-full",autoComplete:"username",onChange:t=>s("username",t.target.value),required:!0}),e.jsx(h,{message:o.username,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"email",value:"Email"}),e.jsx(v,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"email",onChange:t=>s("email",t.target.value),required:!0}),e.jsx(h,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"password",value:"Password"}),e.jsx(v,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:t=>s("password",t.target.value),required:!0}),e.jsx(h,{message:o.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(v,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:t=>s("password_confirmation",t.target.value),required:!0}),e.jsx(h,{message:o.password_confirmation,className:"mt-2"})]}),e.jsx(p,{className:"text-lg mt-6",htmlFor:"platforms",value:"Which platforms do you create content for?"}),e.jsx("p",{className:"text-sm opacity-75",children:"Select at least one option"}),e.jsxs($,{variant:"outline",type:"multiple",className:"mt-4",onValueChange:t=>{t&&s("platforms",t)},children:[e.jsx(g,{className:"font-bold radix-state-on:bg-red-600 radix-state-on:text-white",value:"youtube",children:"YouTube"}),e.jsx(g,{className:"font-bold radix-state-on:bg-fuchsia-500 radix-state-on:text-white",value:"instagram",children:"Instagram"}),e.jsx(g,{className:"font-bold radix-state-on:bg-purple-600 radix-state-on:text-white",value:"twitch",children:"Twitch"}),e.jsx(g,{className:"font-bold radix-state-on:bg-foreground radix-state-on:text-background",value:"tiktok",children:"TikTok"}),e.jsx(g,{className:"font-bold radix-state-on:bg-blue-600 radix-state-on:text-white",value:"linkedin",children:"LinkedIn"})]}),e.jsxs("div",{className:"mt-6 flex items-center justify-end",children:[e.jsx(L,{href:route("login"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e.jsx(Q,{className:"ms-4",disabled:r,children:"Register"})]})]})})]})}export{me as default};
