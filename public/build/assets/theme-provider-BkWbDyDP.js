import{r as o,j as h}from"./app-CY2a2Vcx.js";const u={theme:"system",setTheme:()=>null},m=o.createContext(u);function T({children:t,defaultTheme:n="system",storageKey:r="vite-ui-theme",...a}){const[s,i]=o.useState(()=>localStorage.getItem(r)||n);o.useEffect(()=>{const e=window.document.documentElement;if(e.classList.remove("light","dark"),s==="system"){const d=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(d);return}e.classList.add(s)},[s]);const c={theme:s,setTheme:e=>{localStorage.setItem(r,e),i(e)}};return h.jsx(m.Provider,{...a,value:c,children:t})}const x=()=>{const t=o.useContext(m);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t};export{T,x as u};
