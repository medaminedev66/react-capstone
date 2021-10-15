(this["webpackJsonpcountries-of-the-world"]=this["webpackJsonpcountries-of-the-world"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(15),i=c.n(r),a=c(31),o=(c(48),c(49),c(5)),j=c(11),l=(c(53),c(9)),d=c(32),u=c(34),b=c(64),h=c(65),O=[{selectedBy:"name"}],x="settings/SELECT_BY",f=c(1);var m=function(e){var t=e.title,c=Object(o.g)(),s=Object(j.b)(),r=Object(n.useState)(!1),i=Object(l.a)(r,2),a=i[0],O=i[1],m=Object(n.useState)(!0),p=Object(l.a)(m,2),A=p[0],v=p[1],g=function(e){O(!1),s(function(e){return{type:x,payload:e}}(e))};return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"bar","data-testid":"bar",children:[Object(f.jsx)(d.a,{icon:u.a,size:"2x",onClick:function(){c.push("/countries-of-the-world/")}}),Object(f.jsx)("h2",{children:t}),Object(f.jsx)(d.a,{icon:u.b,size:"2x",onClick:function(){return v(!0),void O(!0)}})]}),Object(f.jsxs)(b.a,{show:a,fullscreen:A,onHide:function(){return O(!1)},text:"dark",bg:"dark",children:[Object(f.jsx)(b.a.Header,{closeButton:!0,children:Object(f.jsx)(b.a.Title,{text:"primary",children:"Select country by:"})}),Object(f.jsx)(b.a.Body,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(h.a.Item,{onClick:function(){return g("name")},children:"Name (Z-A)"}),Object(f.jsx)(h.a.Item,{onClick:function(){return g("population")},children:"population"}),Object(f.jsx)(h.a.Item,{onClick:function(){return g("region")},children:"Region"})]})})]})]})},p=function(e){return Number.isNaN(Number(e))||e<9999?e:e<1e6?"".concat(Math.round(e/1e3)," K"):e<1e7?"".concat((e/1e6).toFixed(2)," M"):e<1e9?"".concat(Math.round(e/1e6)," M"):e<1e12?"".concat(Math.round(e/1e9)," B"):"1T+"};var A=function(e){var t=e.obj;return Object(f.jsxs)("div",{className:"country",children:[Object(f.jsx)("img",{className:"flag-country",src:t.flags.png,alt:"flag"}),Object(f.jsx)("p",{className:"h2 p",children:t.name}),Object(f.jsxs)("p",{className:"p",children:["pp:\xa0",p(t.population)]}),Object(f.jsxs)("p",{className:"p",children:["Region:\xa0",p(t.region)]})]})},v=c(2),g=c(35),N=c.n(g),y=c(40),w=[],R="countries/FETCH_DATA",B="countries/UPDATE_STATE",k=function(e){return{type:B,payload:e}},M=function(e){var t=Object(j.b)(),c=Object(o.g)(),n=e.countries,s=n[Math.floor(Math.random()*n.length)];return Object(f.jsxs)("div",{className:"Random-country",onClick:function(){return e=s.name,t(k(e)),void c.push("/countries-of-the-world/details");var e},"aria-hidden":"true","data-testid":"Random-country",children:[Object(f.jsxs)("div",{className:"country-select",children:[Object(f.jsx)("img",{className:"flag",src:s?s.flags.png:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOgSURBVEiJnZVvTNVlFMc/57k/hHTYBVkRpqzJ8EUNa7iFLuLmi3Bt+aKCRRK0srBpKxxZbZW3tl4UswihPwaJU8Hl5qauFm8aW5PlnAOkco4UUTIJ5Z8wg/u7z+mN9/a7VyTg++p3znPO93vOc357jjBLPFlWthzXVyfwqAqXRXXH0eamQ/+XJ7MhDwSCzuKMC6dAcjxuK0YDR/Y3/TxTrhPvKAoGFyQNjWf7jNvfVFMzAuDP6F1lMTlxoUYtzwEzChiv8cLWqsDCqxN9xkq3ugmD5Vu2vwNgrWOnTxeNfA0OXy+4MjRa0turSdMKFBUV+RRpAdKj3Yl+VLalas3YlWXdQEccuxXLfoCBq6PPW2vbRGlelDwWM5eoQHLaikwPebREAw+3tQVdR3wbgMMKQ6CnReSZIwf3tAOIaEEkQYWAlyA6Ayc8dCnsu3MYSIkp02e6AA4faOgHno6/JACrNIuwEUgSaIyp0GuUb92+AXQfsBhQoGZvXfW26UjjMTAwfnfYp6kZaclnbisA8FJlZao7lfAQRi/s3VV9bjbkXpy7PLQc3M1gxkIJWi+v1dYm+qect0QpRPjTqHwYfPPVX+dKDNDT05Moi/xngUwAEY6Z1MmET0X5AFiLUmTRtmD1l3fNR8Dc4c+MkAOoUmAUfTYubkkYfXw+AheXpp0HfovYAkcd4BqQ6g0U4dp8BB4Tcfv6RvJDzlQpxowNpy9pdozo21alBVhwM67VjP/dOh8BgMxM/zCwK1oswLsff7HSiKxDbL+ZGPw+GAze5mmYGb909eQh0gjcA9Tl5WS9H/Ob1u/5Lj3khgtEufT6KyXtcxY4/cdZIDtiWzQQfSo+/+ZAbsh1z4AeVNHjNbubv5oLuaoKyFKvTzD3RgUs5j3A7zmtqGnct3K2AiKiCrujgnDRxfnBsw/Uf0uW69zq86D1+MkHCJtyREZDOPVrclZsO9HZ04pIunUSj+Xfv2w4OoPPGlpeFNXoQyXQnWSv56akZCfekH92CJIHetJMarC09ImxH9tPZUmYLmDhzQI7R/86v7q4uDjsLSJ6RZWbSr5FtBhoUeWTkGVdRUVF6IZM1gpSBTwCUmkT5WsALOv/IweQB5Mz7suK7zJmZb6xaeMhIH6RF8aaUgggYX6P3YeMmIkF/fECJt4RD1HpjPVoB0BhQe5PilaB9qrQoaJPFRaumpixg+nghtmc4GiDImsVToialyNn6/NX7wR2zpT/L/sqUVMZd9+sAAAAAElFTkSuQmCC",alt:"flag"}),Object(f.jsx)("h2",{children:s?s.name:"Picking..."})]}),Object(f.jsxs)("p",{children:["Let's discover\xa0",Object(f.jsx)("span",{children:s?s.name:"?"})]})]})};var C=function(){var e=Object(j.c)((function(e){return e.countriesReducer})),t=Object(j.c)((function(e){return e.settingReducer})),c=Object(n.useState)({redirect:!1}),s=Object(l.a)(c,2),r=s[0],i=s[1],a=Object(j.b)();return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"continent",children:Object(f.jsx)(M,{countries:e})}),Object(f.jsxs)("div",{className:"countries-title",children:["All countries Selected by\xa0",t[0].selectBy?t[0].selectBy:"Alphabets"]}),Object(f.jsxs)("div",{className:"countries","data-testid":"countries",children:[r.redirect?Object(f.jsx)(o.a,{to:"/countries-of-the-world/details"}):"",e.sort((function(e,c){var n=t[0].selectBy;return e[n]<c[n]?1:e[n]>c[n]?-1:0})).map((function(e){return Object(f.jsx)("div",{className:"countr",onClick:function(){return t=e.name,i({redirect:!0}),void a(k(t));var t},"aria-hidden":"true",children:Object(f.jsx)(A,{obj:e})},e.name)}))]})]})};var T=function(){var e=Object(j.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(y.a)(N.a.mark((function e(t){var c,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v2/all");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,t({type:R,payload:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{title:"All countries"}),Object(f.jsx)(C,{})]})};var U=function(){var e=Object(j.c)((function(e){return e.countriesReducer}));return Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{title:"Selected country"}),e.map((function(e){return!0===e.selected?Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"head",children:Object(f.jsxs)("div",{className:"country-select",children:[Object(f.jsx)("img",{className:"flag",src:e.flags.png,alt:"flag"}),Object(f.jsx)("h2",{children:e.name})]})}),Object(f.jsxs)("div",{className:"countries-title",children:[e.name,"'s information"]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("h3",{children:"Capital:"}),Object(f.jsx)("p",{children:e.capital})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("h3",{children:"Independent:"}),Object(f.jsx)("p",{children:e.independent?"Yes":"No"})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("h3",{children:"Subregion:"}),Object(f.jsx)("p",{children:e.subregion})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("h3",{children:"Region:"}),Object(f.jsx)("p",{children:e.region})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("h3",{children:"Population:"}),Object(f.jsx)("p",{children:e.population})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("h3",{children:"Time zone:"}),Object(f.jsx)("p",{children:e.timezones})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("h3",{children:"Currency:"}),Object(f.jsx)("p",{children:e.currencies?e.currencies[0].name:"not exist"})]})]}):""}))]})},S=c(27),z=c(41),P=c.n(z),Q=c(42),V=Object(S.b)({countriesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return t.payload;case B:return e.map((function(e){return e.name===t.payload?Object(v.a)(Object(v.a)({},e),{},{selected:!0}):e}));default:return e}},settingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type===x?[{selectBy:t.payload}]:e}}),Y=Object(S.c)(V,Object(S.a)(P.a,Q.a));var D=function(){return Object(f.jsx)(j.a,{store:Y,children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/countries-of-the-world/",children:Object(f.jsx)(T,{})}),Object(f.jsx)(o.b,{path:"/countries-of-the-world/details",children:Object(f.jsx)(U,{})})]})})};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(a.a,{children:Object(f.jsx)(D,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.eab2aafb.chunk.js.map