import{j as o,r as e}from"./app-DymL0p5r.js";function x({message:t,className:a="",...n}){return t?o.jsx("p",{...n,className:"text-sm text-red-600 dark:text-red-400 "+a,children:t}):null}const i=e.forwardRef(function({type:a="text",className:n="",isFocused:s=!1,...c},f){const u=e.useRef(null);return e.useImperativeHandle(f,()=>({focus:()=>{var r;return(r=u.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;s&&((r=u.current)==null||r.focus())},[s]),o.jsx("input",{...c,type:a,className:"rounded-md border-zinc-200 dark:border-zinc-600 shadow-sm focus:border-manuka focus:ring-manuka dark:bg-zinc-800 dark:text-gray-300 dark:focus:border-manuka dark:focus:ring-manuka "+n,ref:u})});export{x as I,i as T};
