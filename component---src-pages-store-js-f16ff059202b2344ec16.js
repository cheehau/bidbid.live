(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5DSb":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("fthc"),i=n("otPn");t.a=function(){return a.a.createElement(i.a,{height:{min:"300px"},fill:!0,align:"center",justify:"center",alignContent:"center"},a.a.createElement(i.a,{animation:"jiggle"},a.a.createElement(o.a,{size:"xlarge"})))}},Ga68:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("YwZP"),i=n("zLVn"),c=n("vOnD"),l=n("/Rk8"),u=n("+Wdg"),s={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},d=Object(c.css)(["align-items:",";"],(function(e){return s[e.align]})),f={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},m=Object(c.css)(["align-content:",";"],(function(e){return f[e.alignContent]})),p={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},g=Object(c.css)(["justify-items:",";"],(function(e){return p[e.justify]})),b={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},h=Object(c.css)(["justify-content:",";"],(function(e){return b[e.justifyContent]})),v={flex:"1fr",full:"100%","1/2":"50%","1/4":"25%","2/4":"50%","3/4":"75%","1/3":"33.33%","2/3":"66.66%"},y=function(e,t){return Array.isArray(e)?"minmax("+(t.global.size[e[0]]||e[0])+", "+(t.global.size[e[1]]||e[1])+")":"flex"===e?"1fr":"minmax("+(t.global.size[e]||e)+", 1fr)"},w=function(e,t,n){var r=v[e];return!n||!r||t.fillContainer&&"horizontal"!==t.fillContainer||console.warn("Grid needs `fill` when using fractional row sizes"),r||t.theme.global.size[e]||e},O=c.default.div.attrs((function(e){return{"aria-label":e.a11yTitleProp}})).withConfig({displayName:"StyledGrid",componentId:"sc-1wofa1l-0"})(["display:grid;box-sizing:border-box;"," "," "," "," "," "," "," "," "," "," "," ",""],l.f,(function(e){return e.fillContainer&&("horizontal"===(t=e.fillContainer)?"width: 100%;":"vertical"===t?"height: 100%;":t?"\n      width: 100%;\n      height: 100%;\n    ":void 0);var t}),(function(e){return e.align&&d}),(function(e){return e.alignContent&&m}),(function(e){return e.areas&&function(e){if(Array.isArray(e.rowsProp)&&Array.isArray(e.columns)||console.warn("Grid `areas` requires `rows` and `columns` to be arrays."),Array.isArray(e.areas)&&e.areas.every((function(e){return Array.isArray(e)})))return"grid-template-areas: "+e.areas.map((function(e){return'"'+e.join(" ")+'"'})).join(" ")+";";var t=e.rowsProp.map((function(){return e.columns.map((function(){return"."}))}));return e.areas.forEach((function(e){for(var n=e.start[1];n<=e.end[1];n+=1)for(var r=e.start[0];r<=e.end[0];r+=1)t[n][r]=e.name})),"grid-template-areas: "+t.map((function(e){return'"'+e.join(" ")+'"'})).join(" ")+";"}(e)}),(function(e){return e.columns&&function(e){return Array.isArray(e.columns)?Object(c.css)(["grid-template-columns:",";"],e.columns.map((function(t){return Array.isArray(t)?"minmax("+w(t[0],e)+", "+w(t[1],e)+")":w(t,e)})).join(" ")):"object"==typeof e.columns?Object(c.css)(["grid-template-columns:repeat( ",","," );"],"number"==typeof(t=e.columns.count)?t:"auto-"+t,y(e.columns.size,e.theme)):Object(c.css)(["grid-template-columns:repeat( auto-fill,"," );"],y(e.columns,e.theme));var t}(e)}),(function(e){return e.gap&&function(e){if("string"==typeof e.gap){var t=e.theme.global.edgeSize[e.gap]||e.gap;return"grid-gap: "+t+" "+t+";"}return e.gap.row&&e.gap.column?"\n      grid-row-gap: "+(e.theme.global.edgeSize[e.gap.row]||e.gap.row)+";\n      grid-column-gap: "+(e.theme.global.edgeSize[e.gap.column]||e.gap.column)+";\n    ":e.gap.row?"\n      grid-row-gap: "+(e.theme.global.edgeSize[e.gap.row]||e.gap.row)+";\n    ":e.gap.column?"\n      grid-column-gap: "+(e.theme.global.edgeSize[e.gap.column]||e.gap.column)+";\n    ":""}(e)}),(function(e){return e.justify&&g}),(function(e){return e.justifyContent&&h}),(function(e){return e.pad&&Object(l.c)("padding",e.pad,e.responsive,e.theme.global.edgeSize.responsiveBreakpoint,e.theme)}),(function(e){return e.rowsProp&&function(e){return Array.isArray(e.rowsProp)?Object(c.css)(["grid-template-rows:",";"],e.rowsProp.map((function(t){return Array.isArray(t)?"minmax("+w(t[0],e,!0)+", "+w(t[1],e,!0)+")":w(t,e,!0)})).join(" ")):Object(c.css)(["grid-auto-rows:",";"],e.theme.global.size[e.rowsProp])}(e)}),(function(e){return e.theme.grid&&e.theme.grid.extend}));function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}O.defaultProps={},Object.setPrototypeOf(O.defaultProps,u.a);var x=Object(r.forwardRef)((function(e,t){var n=e.a11yTitle,r=e.fill,o=e.responsive,i=void 0===o||o,c=e.rows,l=e.tag,u=e.as,s=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["a11yTitle","fill","responsive","rows","tag","as"]);return a.a.createElement(O,j({ref:t,a11yTitleProp:n,as:!u&&l?l:u,fillContainer:r,responsive:i,rowsProp:c},s))}));x.displayName="Grid";var E=x;E.available="undefined"!=typeof window&&window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid");var C=n("otPn"),S=Object(r.createContext)({});function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var P=Object(r.forwardRef)((function(e,t){var n,o=e.activeIndex,i=e.animate,c=void 0===i||i,l=e.children,u=e.multiple,s=e.onActive,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["activeIndex","animate","children","multiple","onActive"]),f=Object(r.useState)([]),m=f[0],p=f[1],g=Object(r.useState)(),b=g[0],h=g[1],v=("number"==typeof(n=o)?[n]:n)||[];void 0===o&&o===b||v.join()===m.join()||(p(v),h(o));return a.a.createElement(C.a,A({ref:t,role:"tablist"},d),r.Children.toArray(l).filter((function(e){return e})).map((function(e,t){return a.a.createElement(S.Provider,{key:t,value:{active:m.indexOf(t)>-1,animate:c,onPanelChange:function(){return function(e){var t=[].concat(m||[]),n=t.indexOf(e);n>-1?t.splice(n,1):u?t.push(e):t=[e],p(t),s&&s(t)}(t)}}},e)})))}));P.displayName="Accordion";var z=P,k=n("cVt8"),F=n("F5WI"),I=n("T1Te"),M=n("eaSK"),N=Object(c.default)(C.a).withConfig({displayName:"Collapsible__AnimatedBox",componentId:"sc-15kniua-0"})(["",""],(function(e){return"transition: max-"+e.dimension+" "+e.speedProp+"ms, opacity "+e.speedProp+"ms;\n      opacity: "+(e.open?1:0)+";\n      overflow: "+(e.animate||!e.open?"hidden":"visible")+";\n      max-"+e.dimension+": "+(e.open?"unset":0)+";\n    "})),T=Object(r.forwardRef)((function(e,t){var n=e.children,o=e.direction,i=e.open,l=Object(r.useContext)(c.ThemeContext)||u.a.theme,s=Object(r.useState)(i),d=s[0],f=s[1],m=Object(r.useState)(!1),p=m[0],g=m[1],b=Object(r.useState)(),h=b[0],v=b[1],y=Object(r.useState)(l.collapsible.minSpeed),w=y[0],O=y[1],j=Object(r.useMemo)((function(){return"horizontal"===o?"width":"height"}),[o]),x=Object(M.a)(t);return Object(r.useEffect)((function(){i!==d&&(g(!0),f(i))}),[d,i]),Object(r.useEffect)((function(){if(p){var e=setTimeout((function(){g(!1),v(void 0),x.current.removeAttribute("style")}),w);return function(){return clearTimeout(e)}}}),[p,x,w]),Object(r.useEffect)((function(){if(p){var e=l.collapsible,t=e.minSpeed,n=e.baseline,r=x.current;r.style["max-"+j]="unset";var a=r.getBoundingClientRect();r.removeAttribute("style");var o=a[j];r.style["max-"+j]=d?0:o+"px",v(o);var i=Math.max(o/n*t,t);O(i)}}),[p,x,j,d,l]),Object(r.useLayoutEffect)((function(){if(p&&h){var e=x.current;requestAnimationFrame((function(){requestAnimationFrame((function(){e.style["max-"+j]=d?h+"px":0}))}))}}),[p,x,j,d,h]),a.a.createElement(N,{"aria-hidden":!d,ref:x,open:d,animate:p,dimension:j,speedProp:w},n)}));T.displayName="Collapsible";var R=T,B=n("ACV0");function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var q=Object(r.forwardRef)((function(e,t){var n=e.children,o=e.header,i=e.label,l=e.onClick,s=e.onMouseOut,d=e.onMouseOver,f=e.onFocus,m=e.onBlur,p=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","header","label","onClick","onMouseOut","onMouseOver","onFocus","onBlur"]),g=Object(r.useContext)(c.ThemeContext)||u.a.theme,b=Object(r.useContext)(S),h=b.active,v=b.animate,y=b.onPanelChange,w=Object(r.useState)(void 0),O=w[0],j=w[1],x=Object(r.useState)(),E=x[0],A=x[1],P=Object(r.useMemo)((function(){return Object(k.c)(g.accordion.icons.color||"control",g)}),[g]),z=Object(r.useMemo)((function(){return h?g.accordion.icons.collapse:g.accordion.icons.expand}),[h,g.accordion.icons]),M=JSON.stringify({dark:"light-4",light:"dark-3"});JSON.stringify(g.accordion.hover.color)!==M&&console.warn("The theme style for accordion.hover.color is deprecated, \n        use accordion.hover.heading.color instead.");var N,T=g.accordion.hover&&JSON.stringify(g.accordion.hover.heading.color)!==M?g.accordion.hover.heading.color:g.accordion.hover.color,q=g.accordion.border,G=g.accordion.panel.border;return G&&(N={bottom:"-"+Object(F.b)(g.global.borderSize[G.size]||G.size||g.global.borderSize.xsmall)+"px"}),a.a.createElement(C.a,{ref:t,flex:!1,onClick:l,border:G,margin:N},a.a.createElement(I.a,{role:"tab","aria-selected":h,"aria-expanded":h,plain:!!g.button.default||void 0,onClick:y,onMouseOver:function(e){j(T),d&&d(e)},onMouseOut:function(e){j(void 0),s&&s(e)},onFocus:function(e){j(T),A(!0),f&&f(e)},onBlur:function(e){j(void 0),A(!1),m&&m(e)},style:E?{zIndex:1}:void 0},o||a.a.createElement(C.a,L({align:"center",direction:"row",justify:"between"},p),"string"==typeof i?a.a.createElement(C.a,{pad:{horizontal:"xsmall"}},a.a.createElement(B.a,{level:g.accordion.heading&&g.accordion.heading.level||4,margin:g.accordion.heading&&g.accordion.heading.margin||void 0,color:O},i)):i,z&&a.a.createElement(C.a,{pad:{horizontal:"small"}},a.a.createElement(z,{color:P})))),a.a.createElement(C.a,{border:q},v?a.a.createElement(R,{open:h},n):h&&n))}));q.displayName="AccordionPanel";var G=q,J=n("XDYV"),U=n("zpb6"),V=n("5DSb"),W=n("dI71"),D=n("LXcg"),K=new D.d.LiveQueryClient({applicationId:"32hrI9O4UWscR1vOtkNt62eoLtZgyS9SUIEwp0HL",serverURL:"wss://bidbid.b4a.io",javascriptKey:"tnEpnIhi6dUdW3IcBxWcOegn6UvrcM1dIk6VfK5w"}),Z=n("ZmBq"),X=function(e){var t=e.data;return a.a.createElement(Z.a,{columns:[{property:"message",header:a.a.createElement(J.a,null,"Message"),primary:!0,render:function(e){return a.a.createElement(J.a,null,e.message)}}],data:t})},Y=(a.a.Component,a.a.Component,n("fhwx")),_=n.n(Y),H=n("nG1s"),Q=n("P3Am"),$=function(e){var t=e.products;return a.a.createElement(C.a,null,a.a.createElement(H.a,{dataList:t.map((function(e){return{title:e.get("name"),thumbnail:e.get("photo")&&e.get("photo").url(),cta:a.a.createElement(a.a.Fragment,null,a.a.createElement(Q.a,{placeholder:"Chat",margin:"small",reverse:!0}))}}))}))},ee=function(e){e.products;return a.a.createElement("iframe",{src:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbidbid.live%2Fvideos%2F698353137752272%2F&width=720",width:"720",height:"405",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",allowFullScreen:"true"})},te=function(e){e.location,e.pathContext,e.pageContext,e.storeName;var t=e.id,n=(Object(i.a)(e,["location","pathContext","pageContext","storeName","id"]),Object(r.useState)([])),o=n[0],c=n[1],l=Object(r.useState)(null),u=l[0],s=l[1],d=Object(r.useState)([]),f=(d[0],d[1],Object(r.useState)(null)),m=(f[0],f[1],Object(r.useState)({})),p=(m[0],m[1],Object(r.useState)({}));p[0],p[1],u&&_()("<div>"+u.get("description"));return Object(r.useEffect)((function(){Object(U.d)(t).then((function(e){s(e)})),Object(U.c)(t).then((function(e){return c(e)}))}),[t]),a.a.createElement(a.a.Fragment,null,!o.length&&a.a.createElement(V.a,null),a.a.createElement(E,{gap:"small",pad:"small",fill:!0,areas:[{name:"nav",start:[0,0],end:[0,0]},{name:"main",start:[1,0],end:[1,0]}],columns:["medium","auto"],rows:["auto"]},a.a.createElement(z,{gridArea:"nav"},a.a.createElement(G,{label:"Panel 1"},a.a.createElement(C.a,{pad:"medium",background:"light-2"},a.a.createElement(J.a,null,"One"))),a.a.createElement(G,{label:"Panel 2"},a.a.createElement(C.a,{pad:"medium",background:"light-2"},a.a.createElement(J.a,null,"Two")))),a.a.createElement(C.a,{flex:!1,gridArea:"main",direction:"row"},a.a.createElement(ee,{products:o}))),a.a.createElement($,{products:o}))};t.default=function(){return a.a.createElement(o.Router,{basepath:"/store"},a.a.createElement(te,{path:"/:id"}))}}}]);
//# sourceMappingURL=component---src-pages-store-js-f16ff059202b2344ec16.js.map