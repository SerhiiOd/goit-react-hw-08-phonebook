"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[915],{1156:function(e,n,r){r.d(n,{D:function(){return s}});var t,a=r(168),s=r(9256).ZP.h1(t||(t=(0,a.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n\n  background: rgb(255, 59, 0);\n  background: linear-gradient(\n    90deg,\n    rgba(255, 59, 0, 1) 25%,\n    rgba(52, 255, 0, 1) 50%,\n    rgba(198, 255, 0, 1) 75%\n  );\n\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"])))},4915:function(e,n,r){r.r(n),r.d(n,{Register:function(){return Z},default:function(){return b}});var t=r(9439),a=r(2791),s=r(9434),o=r(9273),i=r(4554),l=r(4909),u=r(3736),c=r(6126),d=r(9952),m=r(2752),p=r(3817),h=r(5218),f=r(184),x=function(){var e=(0,a.useState)(""),n=(0,t.Z)(e,2),r=n[0],x=n[1],g=(0,a.useState)(""),Z=(0,t.Z)(g,2),b=Z[0],v=Z[1],w=(0,a.useState)(""),j=(0,t.Z)(w,2),C=j[0],k=j[1],z=(0,a.useState)(""),P=(0,t.Z)(z,2),S=P[0],y=P[1],A=(0,s.I0)(),_=function(e){var n=e.target,r=n.name,t=n.value;switch(r){case"username":x(t);break;case"email":v(t);break;case"password":k(t);break;case"passwordConfirm":y(t)}};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(i.Z,{component:"form",sx:{maxWidth:"400px",margin:"0 auto"},autoComplete:"on",onSubmit:function(e){if(e.preventDefault(),C.toLowerCase()!==S.toLowerCase())return h.Am.error("Passwords didn't match. Please try again");A((0,o.z2)({name:r.trim(),email:b.toLowerCase().trim(),password:C.trim()})),x(""),v(""),k(""),y("")},children:[(0,f.jsx)(l.Z,{onChange:_,value:r,margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",type:"text",InputProps:{startAdornment:(0,f.jsx)(c.Z,{position:"start",children:(0,f.jsx)(d.Z,{})})}}),(0,f.jsx)(l.Z,{onChange:_,value:b,margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"email",InputProps:{startAdornment:(0,f.jsx)(c.Z,{position:"start",children:(0,f.jsx)(m.Z,{})})}}),(0,f.jsx)(l.Z,{onChange:_,value:C,margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password (seven or more characters )",type:"password",id:"password",inputProps:{pattern:".{7,}",title:"seven or more characters"},InputProps:{startAdornment:(0,f.jsx)(c.Z,{position:"start",children:(0,f.jsx)(p.Z,{})})}}),(0,f.jsx)(l.Z,{onChange:_,value:S,margin:"normal",required:!0,fullWidth:!0,name:"passwordConfirm",label:"Confirm password",type:"password",id:"passwordConfirm",InputProps:{startAdornment:(0,f.jsx)(c.Z,{position:"start",children:(0,f.jsx)(p.Z,{})})}}),(0,f.jsx)(u.Z,{type:"submit",fullWidth:!0,color:"inherit",variant:"contained",sx:{mt:3,mb:2},children:"Submit"})]})})},g=r(1156),Z=function(){return(0,f.jsxs)("main",{children:[(0,f.jsx)(g.D,{children:"Create new account"}),(0,f.jsx)(x,{})]})},b=Z},9952:function(e,n,r){var t=r(4836);n.Z=void 0;var a=t(r(5649)),s=r(184),o=(0,a.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");n.Z=o},2752:function(e,n,r){var t=r(4836);n.Z=void 0;var a=t(r(5649)),s=r(184),o=(0,a.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}),"AlternateEmail");n.Z=o},3817:function(e,n,r){var t=r(4836);n.Z=void 0;var a=t(r(5649)),s=r(184),o=(0,a.default)((0,s.jsx)("path",{d:"M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"Key");n.Z=o}}]);
//# sourceMappingURL=915.a0e960e6.chunk.js.map