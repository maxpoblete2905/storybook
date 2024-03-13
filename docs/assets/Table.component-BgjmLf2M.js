import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as k,R as u}from"./index-DH5ua8nC.js";import{u as _,c as N}from"./ThemeProvider-BHT--WVz.js";import{F as E}from"./Form-BU-uEKGz.js";import{B as g}from"./Button-DFxwYlNq.js";const V=k.forwardRef(({bsPrefix:e,className:t,striped:r,bordered:a,borderless:i,hover:o,size:l,variant:c,responsive:s,...C},P)=>{const d=_(e,"table"),w=N(t,d,c&&`${d}-${c}`,l&&`${d}-${l}`,r&&`${d}-${typeof r=="string"?`striped-${r}`:"striped"}`,a&&`${d}-bordered`,i&&`${d}-borderless`,o&&`${d}-hover`),v=n.jsx("table",{...C,className:w,ref:P});if(s){let f=`${d}-responsive`;return typeof s=="string"&&(f=`${f}-${s}`),n.jsx("div",{className:f,children:v})}return v}),$=V;var x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=u.createContext&&u.createContext(x),B=["attr","size","title"];function T(e,t){if(e==null)return{};var r=S(e,t),a,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function S(e,t){if(e==null)return{};var r={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},m.apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(a){I(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function I(e,t,r){return t=z(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e){var t=q(e,"string");return typeof t=="symbol"?t:String(t)}function q(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O(e){return e&&e.map((t,r)=>u.createElement(t.tag,h({key:r},t.attr),O(t.child)))}function p(e){return t=>u.createElement(D,m({attr:h({},e.attr)},t),O(e.child))}function D(e){var t=r=>{var{attr:a,size:i,title:o}=e,l=T(e,B),c=i||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),u.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,l,{className:s,style:h(h({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&u.createElement("title",null,o),e.children)};return b!==void 0?u.createElement(b.Consumer,null,r=>t(r)):t(x)}function M(e){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"},child:[]}]})(e)}function F(e){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"},child:[]}]})(e)}function A(e){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"},child:[]},{tag:"path",attr:{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"},child:[]}]})(e)}const j=({data:e,columns:t,selectedItemIds:r,handleCheckboxChange:a,handleEditClick:i,handleDeleteClick:o})=>n.jsxs($,{striped:!0,bordered:!0,hover:!0,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"check"}),t.map(l=>n.jsx("th",{style:{width:l.width??"150px",textAlign:l.align??"left"},children:l.label},l.key)),n.jsx("th",{children:"Acciones"})]})}),n.jsx("tbody",{children:e.map(l=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx(E.Check,{type:"checkbox",checked:r.includes(l.id),onChange:()=>a(l.id)})}),t.map(c=>{var s;return n.jsx("td",{children:(s=l[c.key])==null?void 0:s.toString()},c.key)}),n.jsxs("td",{children:[n.jsx(g,{variant:"danger",className:"ml-2",onClick:()=>o(l.id),children:n.jsx(A,{})}),n.jsx(g,{variant:"primary",className:"ml-2",onClick:()=>i(l),children:n.jsx(M,{})})]})]},l.id))})]});try{j.displayName="TableComponent",j.__docgenInfo={description:"",displayName:"TableComponent",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn[]"}},selectedItemIds:{defaultValue:null,description:"",name:"selectedItemIds",required:!0,type:{name:"number[]"}},handleCheckboxChange:{defaultValue:null,description:"",name:"handleCheckboxChange",required:!0,type:{name:"(id: number) => void"}},handleEditClick:{defaultValue:null,description:"",name:"handleEditClick",required:!0,type:{name:"(row: T) => void"}},handleDeleteClick:{defaultValue:null,description:"",name:"handleDeleteClick",required:!0,type:{name:"(id: number) => void"}}}}}catch{}export{A as B,j as T,F as a};