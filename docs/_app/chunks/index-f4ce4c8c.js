import{P as y}from"./index-e11cf551.js";function m(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:n=400,easing:s=y}={}){const c=+getComputedStyle(o).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*c}`}}function g(o,{delay:t=0,duration:n=400,easing:s=m,start:c=0,opacity:r=0}={}){const e=getComputedStyle(o),a=+e.opacity,f=e.transform==="none"?"":e.transform,p=1-c,u=a*(1-r);return{delay:t,duration:n,easing:s,css:(d,i)=>`
			transform: ${f} scale(${1-p*i});
			opacity: ${a-u*i}
		`}}export{$ as f,g as s};
