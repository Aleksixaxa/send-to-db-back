(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(14),s=n.n(a),l=n(3),j=(n(19),n(5)),o=n.n(j),r=n(0);var b=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),j=s[0],b=s[1],u=Object(c.useState)(""),h=Object(l.a)(u,2),d=h[0],O=h[1],x=Object(c.useState)([]),p=Object(l.a)(x,2),v=p[0],f=p[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("label",{children:"Name: "}),Object(r.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)}}),Object(r.jsx)("label",{children:"Email: "}),Object(r.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)}}),Object(r.jsx)("label",{children:"Review: "}),Object(r.jsx)("input",{id:"review",type:"text",onChange:function(e){O(e.target.value)}}),Object(r.jsx)("button",{onClick:function(){o.a.post("http://localhost:3001/create",{name:n,email:j,review:d}).then((function(){console.log()}))},children:"Send!"})]}),Object(r.jsx)("button",{className:"btn",onClick:function(){o.a.get("http://localhost:3001/reviews",{name:n,email:j,review:d}).then((function(e){f(e.data)}))},children:"Show Reviews"}),v.map((function(e,t){return Object(r.jsxs)("div",{className:"revMap",children:[Object(r.jsx)("h4",{children:e.name}),Object(r.jsx)("h3",{children:e.email}),Object(r.jsx)("h3",{children:e.review})]},e.id)}))]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),u()}},[[39,1,2]]]);
//# sourceMappingURL=main.c83fc82d.chunk.js.map