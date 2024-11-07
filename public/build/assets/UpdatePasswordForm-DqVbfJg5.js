import{r as w,W as v,j as s}from"./app-DymL0p5r.js";import{T as n,I as d}from"./TextInput-DQ0H3TP9.js";import{I as c}from"./InputLabel-CNF_ZdDF.js";import{P as y}from"./PrimaryButton-CnFT2KOE.js";import{X as _}from"./transition-mdKL6nWS.js";function k({className:x=""}){const p=w.useRef(null),l=w.useRef(null),{data:e,setData:a,errors:t,put:f,reset:o,processing:j,recentlySuccessful:h}=v({current_password:"",password:"",password_confirmation:""}),g=r=>{r.preventDefault(),f(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:u=>{var i,m;u.password&&(o("password","password_confirmation"),(i=p.current)==null||i.focus()),u.current_password&&(o("current_password"),(m=l.current)==null||m.focus())}})};return s.jsxs("section",{className:x,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:g,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(c,{htmlFor:"current_password",value:"Current Password"}),s.jsx(n,{id:"current_password",ref:l,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(d,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password",value:"New Password"}),s.jsx(n,{id:"password",ref:p,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(d,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(n,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(d,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(y,{disabled:j,children:"Save"}),s.jsx(_,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Saved."})})]})]})]})}export{k as default};
