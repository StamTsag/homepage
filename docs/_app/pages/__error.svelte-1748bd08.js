import{S as z,i as E,s as H,e as c,t as _,k as S,c as m,a as d,h as p,d as f,m as g,f as o,g as h,G as v,j as y,n as x}from"../chunks/index-e11cf551.js";function j(a){let e,i,l,s,r;return{c(){e=c("h1"),i=_(a[1]),l=S(),s=c("h1"),r=_(a[0]),this.h()},l(t){e=m(t,"H1",{style:!0});var n=d(e);i=p(n,a[1]),n.forEach(f),l=g(t),s=m(t,"H1",{style:!0});var u=d(s);r=p(u,a[0]),u.forEach(f),this.h()},h(){o(e,"text-align","center"),o(e,"font-size","6vh"),o(s,"text-align","center"),o(s,"font-size","5vh")},m(t,n){h(t,e,n),v(e,i),h(t,l,n),h(t,s,n),v(s,r)},p(t,[n]){n&2&&y(i,t[1]),n&1&&y(r,t[0])},i:x,o:x,d(t){t&&f(e),t&&f(l),t&&f(s)}}}function C({error:a,status:e}){return{props:{status:`${e}`,err:`${a.message}`}}}function k(a,e,i){let{err:l,status:s}=e;return a.$$set=r=>{"err"in r&&i(0,l=r.err),"status"in r&&i(1,s=r.status)},[l,s]}class G extends z{constructor(e){super(),E(this,e,k,j,H,{err:0,status:1})}}export{G as default,C as load};