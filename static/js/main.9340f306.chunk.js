(this["webpackJsonpreact-for-beginners-cra"]=this["webpackJsonpreact-for-beginners-cra"]||[]).push([[0],{33:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(16),i=n.n(s),a=n(11),j=n(2),o=n(8),u=n.n(o),b=n(10),d=n(15),h=n(1);var O=function(e){var t=e.id,n=e.posterImage,r=e.title,c=e.summary,s=e.genres;return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:n,alt:r}),Object(h.jsx)("h2",{children:Object(h.jsx)(a.b,{to:"/movie/".concat(t),children:r})}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("ul",{children:s.map((function(e){return Object(h.jsx)("li",{children:e},e)}))})]})};var l=function(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),i=Object(d.a)(s,2),a=i[0],j=i[1],o=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){o()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"CHOCOFLIX"}),n?Object(h.jsx)("strong",{children:"loading..."}):Object(h.jsx)("div",{children:a.map((function(e){return Object(h.jsx)(O,{id:e.id,posterImage:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})]})};var m=function(){var e=Object(j.f)().id,t=function(){var t=Object(b.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://yts.mx/api/v2/movie_details.json?movie_id=").concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){t()})),Object(h.jsx)("h1",{children:"Detail"})};var x=function(){return Object(h.jsx)(a.a,{children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/movie/:id",children:Object(h.jsx)(m,{})}),Object(h.jsx)(j.a,{path:"/",children:Object(h.jsx)(l,{})})]})})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9340f306.chunk.js.map