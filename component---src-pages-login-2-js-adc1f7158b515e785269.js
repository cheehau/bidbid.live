(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+hgf":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),o=n("jCe7");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){return r.a.createElement(o.a,c({viewBox:"0 0 24 24",a11yTitle:"Facebook"},e),r.a.createElement("path",{fill:"#3B5998",fillRule:"evenodd",d:"M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"}))}},"463D":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),o=n("vOnD"),c=n("+Wdg"),l=n("cVt8"),i=n("otPn"),s=n("/Rk8"),u=o.default.a.withConfig({displayName:"StyledAnchor",componentId:"sc-1rp7lwl-0"})(["box-sizing:border-box;"," color:",";"," text-decoration:",";cursor:pointer;"," "," "," "," "," ",""],(function(e){return function(e){if(e.size){var t=e.size||"medium",n=e.theme.text[t];return Object(o.css)(["font-size:",";line-height:",";"],n.size,n.height)}return Object(o.css)(["font-size:inherit;line-height:inherit;"])}(e)}),(function(e){return Object(l.c)(e.colorProp||e.theme.anchor.color,e.theme)}),(function(e){return e.weight?"font-weight: "+e.weight+";":e.theme.anchor.fontWeight&&"font-weight: "+e.theme.anchor.fontWeight+";"}),(function(e){return e.hasIcon?"none":e.theme.anchor.textDecoration}),s.f,(function(e){return!e.disabled&&e.theme.anchor.hover&&Object(o.css)(["&:hover{"," "," ","}"],e.theme.anchor.hover.textDecoration&&"text-decoration: "+e.theme.anchor.hover.textDecoration+";",e.theme.anchor.hover.fontWeight&&"font-weight: "+e.theme.anchor.hover.fontWeight+";",e.theme.anchor.hover.extend)}),(function(e){return e.hasIcon&&!e.hasLabel&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "}),(function(e){return e.disabled&&"\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n"}),(function(e){return e.focus&&Object(s.e)()}),(function(e){return e.theme.anchor.extend}));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}u.defaultProps={},Object.setPrototypeOf(u.defaultProps,c.a);var h=Object(a.forwardRef)((function(e,t){var n=e.a11yTitle,s=e.children,h=e.color,m=e.disabled,d=e.href,g=e.icon,b=e.label,p=e.onBlur,v=e.onClick,w=e.onFocus,j=e.reverse,O=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["a11yTitle","children","color","disabled","href","icon","label","onBlur","onClick","onFocus","reverse"]),E=Object(a.useContext)(o.ThemeContext)||c.a.theme,C=Object(a.useState)(),L=C[0],y=C[1];Object(a.useEffect)((function(){(g||b)&&s&&console.warn("Anchor should not have children if icon or label is provided")}),[s,g,b]);var x=g;g&&!g.props.color&&(x=Object(a.cloneElement)(g,{color:Object(l.c)(h||E.anchor.color,E)}));var P=j?b:x,k=j?x:b;return r.a.createElement(u,f({},O,{ref:t,"aria-label":n,colorProp:h,disabled:m,hasIcon:!!g,focus:L,hasLabel:b,reverse:j,href:m?void 0:d,onClick:m?void 0:v,onFocus:function(e){y(!0),w&&w(e)},onBlur:function(e){y(!1),p&&p(e)}}),P&&k?r.a.createElement(i.a,{as:"span",direction:"row",align:"center",gap:"small",responsive:!1,style:{display:"inline-flex"}},P,k):P||k||s)}));h.displayName="Anchor";var m=h},Jje6:function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),o=n.n(r),c=n("4416"),l=n("otPn");t.a=function(e){var t=e.children,n=Object(a.a)(e,["children"]),r=o.a.useContext(c.a);return n=Object.assign({margin:{left:"0",right:"0",top:"small",bottom:"0"},width:{max:["xxsmall","xsmall","small"].includes(r)?"100%":"80%"},gap:"small"},n),o.a.createElement(l.a,n,t)}},RqND:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("P3Am"),c=n("LXcg"),l=n("Jje6"),i=n("ww3E");t.a=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],s=Object(a.useState)(""),u=s[0],f=s[1];return r.a.createElement(l.a,{margin:"0"},"Name:",r.a.createElement(o.a,{value:t.fullname,onChange:function(e){n(Object.assign({},t,{fullName:e.target.value}))},placeholder:"Name"}),"Email:",r.a.createElement(o.a,{value:t.email,onChange:function(e){n(Object.assign({},t,{username:e.target.value,email:e.target.value}))},placeholder:"email"}),"Password:",r.a.createElement(o.a,{value:t.password,onChange:function(e){n(Object.assign({},t,{password:e.target.value}))},type:"password",placeholder:"Password"}),r.a.createElement(l.a,{direction:"row"},r.a.createElement(i.a,{label:"Create Account",primary:!0,message:u,onClick:function(){if(t.fullName&&t.email&&t.password){if(!(t.password.split("").length<8))return c.e.Cloud.run("saveUserProfile",{email:t.email,fullName:t.fullName,password:t.password}).then((function(e){f("Account Created. Please verify your email")})).catch((function(e){f(e.message)}));f("Password should be at least 8 characters")}}})))}},aFd4:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("P3Am"),c=n("463D"),l=n("ww3E"),i=n("LXcg"),s=n("zpb6"),u=n("Jje6");t.a=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],f=Object(a.useState)(""),h=f[0],m=f[1];return r.a.createElement(u.a,{margin:"0",direction:"column"},r.a.createElement(u.a,null,"Email:",r.a.createElement(o.a,{value:t.email,onChange:function(e){n(Object.assign({},t,{username:e.target.value,email:e.target.value}))},placeholder:"email"})),r.a.createElement(u.a,null,"Password:",r.a.createElement(o.a,{value:t.password,onChange:function(e){n(Object.assign({},t,{password:e.target.value}))},type:"password",placeholder:"password"})),r.a.createElement(u.a,null,r.a.createElement(c.a,{href:"/reset"}," Reset Password ")),r.a.createElement(u.a,{direction:"row"},r.a.createElement(l.a,{message:h,label:"Login",primary:!0,onClick:function(){return t.email&&t.password?Object(i.t)(t.email,t.password).then((function(e){return Object(s.a)("/")})).catch((function(e){return m(e.message)})):m("Please fill up username/password")}})))}},"fD+R":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("ACV0"),c=n("+hgf"),l=n("zpb6"),i=n("aFd4"),s=n("RqND"),u=n("LXcg"),f=n("Jje6"),h=n("ww3E");t.default=function(){var e=Object(a.useState)({}),t=(e[0],e[1],Object(a.useState)(""));t[0],t[1];return r.a.createElement(f.a,{margin:"0"},r.a.createElement(o.a,{level:3}," Login"),r.a.createElement(i.a,null),r.a.createElement(f.a,{gap:"small",direction:"row",wrap:!0},r.a.createElement(h.a,{onClick:function(){return Object(u.h)((function(e){return Object(l.a)("/")}))},icon:r.a.createElement(c.a,null),label:"Login with Facebook",primary:!0})),r.a.createElement(o.a,{level:4},"Or Create An Account"),r.a.createElement(s.a,null))}},ww3E:function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),o=n.n(r),c=n("T1Te"),l=n("Jje6");t.a=function(e){var t=e.onClick,n=e.disabled,i=e.message,s=Object(a.a)(e,["onClick","disabled","message"]),u=Object(r.useState)(!1),f=u[0],h=u[1];return o.a.createElement(l.a,{direction:"row"},o.a.createElement(c.a,Object.assign({},s,{onClick:function(){var e=t&&t();e&&e.then&&(h(!0),e.then((function(e){return h(!1)})))},disabled:n||f})),o.a.createElement(l.a,{margin:"0",justify:"center"},i))}},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-login-2-js-adc1f7158b515e785269.js.map