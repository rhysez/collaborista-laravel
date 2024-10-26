import{r as f,j as e,U as c,W as z,Y as B,a as U}from"./app-C2Ev03eb.js";import{T as v,I as h}from"./TextInput-Cz4AyZVK.js";import{I as g}from"./InputLabel-BoxH0qHb.js";import{G as L}from"./GuestLayout-CxtGllO1.js";import{u as N,P as b,c as O,a as W,b as P,d as H,R as J,I as Y,e as w,f as K}from"./index-D-WcN70w.js";import{P as Q}from"./PrimaryButton-D1kBJwX_.js";import"./theme-provider-CQOMv55V.js";var X="Toggle",C=f.forwardRef((a,s)=>{const{pressed:t,defaultPressed:o=!1,onPressedChange:r,...n}=a,[i=!1,u]=N({prop:t,onChange:r,defaultProp:o});return e.jsx(b.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":a.disabled?"":void 0,...n,ref:s,onClick:O(a.onClick,()=>{a.disabled||u(!i)})})});C.displayName=X;var T=C,x="ToggleGroup",[_,me]=W(x,[P]),I=P(),y=c.forwardRef((a,s)=>{const{type:t,...o}=a;if(t==="single"){const r=o;return e.jsx(Z,{...r,ref:s})}if(t==="multiple"){const r=o;return e.jsx(ee,{...r,ref:s})}throw new Error(`Missing prop \`type\` expected on \`${x}\``)});y.displayName=x;var[R,k]=_(x),Z=c.forwardRef((a,s)=>{const{value:t,defaultValue:o,onValueChange:r=()=>{},...n}=a,[i,u]=N({prop:t,defaultProp:o,onChange:r});return e.jsx(R,{scope:a.__scopeToggleGroup,type:"single",value:i?[i]:[],onItemActivate:u,onItemDeactivate:c.useCallback(()=>u(""),[u]),children:e.jsx(F,{...n,ref:s})})}),ee=c.forwardRef((a,s)=>{const{value:t,defaultValue:o,onValueChange:r=()=>{},...n}=a,[i=[],u]=N({prop:t,defaultProp:o,onChange:r}),m=c.useCallback(d=>u((p=[])=>[...p,d]),[u]),l=c.useCallback(d=>u((p=[])=>p.filter(q=>q!==d)),[u]);return e.jsx(R,{scope:a.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:m,onItemDeactivate:l,children:e.jsx(F,{...n,ref:s})})});y.displayName=x;var[ae,se]=_(x),F=c.forwardRef((a,s)=>{const{__scopeToggleGroup:t,disabled:o=!1,rovingFocus:r=!0,orientation:n,dir:i,loop:u=!0,...m}=a,l=I(t),d=H(i),p={role:"group",dir:d,...m};return e.jsx(ae,{scope:t,rovingFocus:r,disabled:o,children:r?e.jsx(J,{asChild:!0,...l,orientation:n,dir:d,loop:u,children:e.jsx(b.div,{...p,ref:s})}):e.jsx(b.div,{...p,ref:s})})}),j="ToggleGroupItem",E=c.forwardRef((a,s)=>{const t=k(j,a.__scopeToggleGroup),o=se(j,a.__scopeToggleGroup),r=I(a.__scopeToggleGroup),n=t.value.includes(a.value),i=o.disabled||a.disabled,u={...a,pressed:n,disabled:i},m=c.useRef(null);return o.rovingFocus?e.jsx(Y,{asChild:!0,...r,focusable:!i,active:n,ref:m,children:e.jsx(G,{...u,ref:s})}):e.jsx(G,{...u,ref:s})});E.displayName=j;var G=c.forwardRef((a,s)=>{const{__scopeToggleGroup:t,value:o,...r}=a,n=k(j,t),i={role:"radio","aria-checked":a.pressed,"aria-pressed":void 0},u=n.type==="single"?i:void 0;return e.jsx(C,{...u,...r,ref:s,onPressedChange:m=>{m?n.onItemActivate(o):n.onItemDeactivate(o)}})}),S=y,V=E;const A=K("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),te=f.forwardRef(({className:a,variant:s,size:t,...o},r)=>e.jsx(T,{ref:r,className:w(A({variant:s,size:t,className:a})),...o}));te.displayName=T.displayName;const D=f.createContext({size:"default",variant:"default"}),M=f.forwardRef(({className:a,variant:s,size:t,children:o,...r},n)=>e.jsx(S,{ref:n,className:w("flex items-center justify-center gap-1",a),...r,children:e.jsx(D.Provider,{value:{variant:s,size:t},children:o})}));M.displayName=S.displayName;const $=f.forwardRef(({className:a,children:s,variant:t,size:o,...r},n)=>{const i=f.useContext(D);return e.jsx(V,{ref:n,className:w(A({variant:i.variant||t,size:i.size||o}),a),...r,children:s})});$.displayName=V.displayName;function de({platforms:a}){const{data:s,setData:t,post:o,processing:r,errors:n,reset:i}=z({name:"",username:"",email:"",password:"",password_confirmation:"",platform_ids:[]});console.log(s);const u=()=>a.map((l,d)=>e.jsx($,{className:"font-bold radix-state-on:bg-red-600 radix-state-on:text-white",value:l.id,children:l.display_name},d)),m=l=>{l.preventDefault(),o(route("register"),{onFinish:()=>i("password","password_confirmation")})};return e.jsxs(L,{children:[e.jsx(B,{title:"Register"}),e.jsxs("section",{className:"mt-4 mb-8",children:[e.jsx("h1",{className:"text-primary text-center font-bold text-5xl",children:"Collaborista"}),e.jsx("p",{className:"text-primary text-center font-extralight text-2xl",children:"Join as a creator"})]}),e.jsx("form",{onSubmit:m,children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(g,{htmlFor:"name",value:"Name (can be first name, or full name)"}),e.jsx(v,{id:"name",name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"name",onChange:l=>t("name",l.target.value),required:!0}),e.jsx(h,{message:n.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(g,{htmlFor:"username",value:"Username"}),e.jsx(v,{id:"username",name:"username",value:s.username,className:"mt-1 block w-full",autoComplete:"username",onChange:l=>t("username",l.target.value),required:!0}),e.jsx(h,{message:n.username,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(g,{htmlFor:"email",value:"Email"}),e.jsx(v,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"email",onChange:l=>t("email",l.target.value),required:!0}),e.jsx(h,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(g,{htmlFor:"password",value:"Password"}),e.jsx(v,{id:"password",type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:l=>t("password",l.target.value),required:!0}),e.jsx(h,{message:n.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(g,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(v,{id:"password_confirmation",type:"password",name:"password_confirmation",value:s.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:l=>t("password_confirmation",l.target.value),required:!0}),e.jsx(h,{message:n.password_confirmation,className:"mt-2"})]}),e.jsx(g,{className:"text-lg mt-6",htmlFor:"platforms",value:"Which platforms do you create content for?"}),e.jsx("p",{className:"text-sm opacity-75",children:"Select at least one option"}),e.jsx(M,{variant:"outline",type:"multiple",className:"mt-4",onValueChange:l=>{l&&t("platform_ids",l)},children:e.jsx(u,{})}),e.jsxs("div",{className:"mt-6 flex items-center justify-end",children:[e.jsx(U,{href:route("login"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e.jsx(Q,{className:"ms-4",disabled:r,children:"Register"})]})]})})]})}export{de as default};
