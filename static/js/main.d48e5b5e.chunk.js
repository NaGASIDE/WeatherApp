(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{57:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c.n(s),n=c(27),i=c.n(n),j=(c(57),c(11)),l=c(8),d=c(10),r=c(17),b=c(39),o=c(13),m=c(9),O="CITY.ADD_CITY",x="CITY.DELETE_CITY",u=function(e){return{type:O,payload:e}},h=function(e){return{type:x,payload:e}},p=(c(64),c(2)),y=function(e){var t=e.city,c=(t.main.temp-275.15).toFixed(),s=Object(o.useSpring)({to:{opacity:1},from:{opacity:0}}),a=Object(m.b)();return Object(p.jsxs)(o.animated.div,{className:"city",style:s,children:[Object(p.jsx)("p",{className:"city-name",children:t.name}),Object(p.jsxs)("p",{className:"city-temp",children:[c,"\xb0"]}),Object(p.jsx)(b.a,{className:"city-icon",onClick:function(){return a(h(t.key))}})]})},f=c(88),N=(c(66),function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(m.b)(),i=Object(m.c)((function(e){return e.city})),l=Object(o.useSpring)({to:{opacity:1},from:{opacity:0}});return Object(p.jsxs)(o.animated.div,{className:"add-city",style:l,children:[Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)("button",{className:"add-city-button",children:Object(p.jsx)(r.a,{})})}),Object(p.jsx)("p",{className:"add-city-title",children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430\u043c\u0438"}),Object(p.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",value:c,onChange:function(e){a(e.target.value)},onKeyPress:function(e){"Enter"==e.key&&c.length>3&&(n(h(c.id)),n(u({id:Object(f.a)(),city:c})),a(""))}}),i.map((function(e,t,c){if(c[t%2==0?t:null])return Object(p.jsx)(s.Suspense,{children:Object(p.jsx)(y,{city:c[t%2==0?t:null]},c[t%2==0?t:null].id)})}))]})}),v=c(52),g=(c(71),function(e){var t=e.onClose,c=e.isOpen,s=e.children;return c&&Object(n.createPortal)(Object(p.jsx)("div",{className:"modal",onClick:t,children:s}),document.getElementById("portal"))}),k=(c(72),function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(m.c)((function(e){return e.city[1]})),i=function(){a((function(e){return!e}))};return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(g,{isOpen:c,onClose:i,children:Object(p.jsx)("div",{className:"modal",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(p.jsx)("p",{children:"\u041e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0435"})]})})}),Object(p.jsx)(j.b,{to:"/add-city",children:Object(p.jsx)("button",{className:"header-button",children:Object(p.jsx)(b.b,{})})}),Object(p.jsx)("h3",{className:"header-title",children:n?n.city.name:"\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"}),Object(p.jsx)("button",{className:"header-button",onClick:i,children:Object(p.jsx)(v.a,{})})]})}),w=c(23),q=(c(73),function(){return Object(p.jsx)("span",{className:"air-quality-index",children:Object(p.jsxs)("p",{children:[" ",Object(p.jsx)(w.b,{})," \u0418\u041a\u0412 21 "]})})}),T=c(40),C=(c(74),function(){var e=Object(m.c)((function(e){return e.city[0]}));return Object(p.jsxs)("div",{className:"temp",children:[Object(p.jsx)("div",{className:"temp-title-block",children:Object(p.jsxs)("p",{className:"temp-title",children:[e?(e.main.temp-275.15).toFixed():"00",Object(p.jsx)("sup",{children:"\xb0"})]})}),Object(p.jsx)("p",{className:"temp-footer",children:e?e.weather[0].main:"\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"}),Object(p.jsx)(q,{}),Object(p.jsx)(j.b,{to:"/five-days",children:Object(p.jsxs)("a",{className:"temp-more",children:["\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",Object(p.jsx)(T.a,{className:"temp-icon"})]})})]})}),F=c(21),S=c(28);c(75);function _(e){if(""===e)return c[0];var t=e.substring(0,e.length-1),c=[Object(p.jsx)(w.a,{className:"day-icon"}),Object(p.jsx)(F.b,{className:"day-icon-grey"}),Object(p.jsx)(r.c,{className:"day-icon-grey"}),Object(p.jsx)(r.d,{className:"day-icon-grey"}),Object(p.jsx)(F.a,{className:"day-icon-grey"}),Object(p.jsx)(F.c,{className:"day-icon-grey"}),Object(p.jsx)(S.b,{className:"day-icon-grey"}),Object(p.jsx)(F.e,{className:"day-icon-blue"}),Object(p.jsx)(S.a,{className:"day-icon-grey"})];return c[["01","02","03","04","09","10","11","13","50"].indexOf(t)]}var E=function(e){var t=e.data,c="Today"==t?0:"Tomorrow"==t?7:14,s="Today"==t?3:"Tomorrow"==t?11:18,a=Object(m.c)((function(e){return e.city[1]}));return Object(p.jsxs)("div",{className:"day",children:[a?_(a.list[c].weather[0].icon):Object(p.jsx)(w.a,{className:"day-icon"}),Object(p.jsx)("p",{className:"day-text",children:t}),Object(p.jsxs)("p",{className:"day-temp",children:[a?(a.list[c].main.temp-275.15).toFixed():"00",Object(p.jsx)("sup",{children:"\xb0"})," / ",a?(a.list[s].main.temp-275.15).toFixed():"00",Object(p.jsx)("sup",{children:"\xb0"})," "]})]})},I=(c(76),function(){return Object(p.jsxs)("div",{className:"days",children:[Object(p.jsx)(E,{data:"Today"}),Object(p.jsx)(E,{data:"Tomorrow"}),Object(p.jsx)(E,{data:"Day after tomorrow"}),Object(p.jsx)(j.b,{to:"/five-days",children:Object(p.jsx)("button",{className:"days-button",children:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 5 \u0434\u043d\u0435\u0439"})})]})});c(77);function D(e){if(""===e)return c[0];var t=e.substring(0,e.length-1),c=[Object(p.jsx)(w.a,{className:"day-temp-item-icon"}),Object(p.jsx)(F.b,{className:"day-temp-item-icon"}),Object(p.jsx)(r.c,{className:"day-temp-item-icon"}),Object(p.jsx)(r.d,{className:"day-temp-item-icon"}),Object(p.jsx)(F.a,{className:"day-temp-item-icon"}),Object(p.jsx)(F.c,{className:"day-temp-item-icon"}),Object(p.jsx)(S.b,{className:"day-temp-item-icon"}),Object(p.jsx)(F.e,{className:"day-temp-item-icon"}),Object(p.jsx)(S.a,{className:"day-temp-item-icon"})];return c[["01","02","03","04","09","10","11","13","50"].indexOf(t)]}var Y=function(e){var t,c=e.num,s=Object(m.c)((function(e){return e.city}));return Object(p.jsxs)("div",{className:"day-temp-item",children:[Object(p.jsx)("p",{className:"day-temp-item-title",children:s.length?(t=s[1].list[c].dt_txt,t.split(" ")[1].substring(0,t.split(" ")[1].length-3)):"00"}),Object(p.jsxs)("p",{className:"day-temp",children:[" ",s.length?(s[1].list[c].main.temp-275.15).toFixed():"00"," ",Object(p.jsx)("sup",{children:"\xb0"})]}),s.length?D(s[1].list[c].weather[0].icon):Object(p.jsx)(w.a,{className:"day-temp-item-icon"}),Object(p.jsxs)("p",{className:"day-temp-item-air",children:[s.length?s[1].list[c].wind.speed.toFixed():"00"," \u043c/c"]})]})},A=(c(78),function(){return Object(p.jsxs)("div",{className:"day-temp-block",children:[Object(p.jsx)(Y,{num:"0"}),Object(p.jsx)(Y,{num:"1"}),Object(p.jsx)(Y,{num:"2"}),Object(p.jsx)(Y,{num:"3"}),Object(p.jsx)(Y,{num:"4"}),Object(p.jsx)(Y,{num:"5"}),Object(p.jsx)(Y,{num:"6"}),Object(p.jsx)(Y,{num:"7"})]})});c(79);function B(e){var t=new Date(1e3*e);return t.getHours()+":"+("0"+t.getMinutes()).substr(-2)}var J=function(){var e=Object(m.c)((function(e){return e.city}));return Object(p.jsxs)("div",{className:"day-data",children:[Object(p.jsxs)("div",{className:"sunset",children:[Object(p.jsxs)("p",{children:["\u0412\u043e\u0441\u0445\u043e\u0434 ",Object(p.jsx)("br",{})," ",e.length?B(e[1].city.sunrise):"00"," "]}),Object(p.jsxs)("p",{children:["\u0417\u0430\u043a\u0430\u0442 ",Object(p.jsx)("br",{})," ",e.length?B(e[1].city.sunset):"00"," "]})]}),Object(p.jsxs)("div",{className:"day-data-block",children:[Object(p.jsx)("p",{className:"day-data-block-title",children:"\u041e\u0449\u0443\u0449\u0430\u0435\u043c\u043e\u0441\u0442\u044c"}),Object(p.jsxs)("p",{className:"day-data-block-text",children:[e.length?(e[0].main.feels_like-275.15).toFixed():"00",Object(p.jsx)("sup",{children:"\xb0"})]})]}),Object(p.jsxs)("div",{className:"day-data-block",children:[Object(p.jsx)("p",{className:"day-data-block-title",children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(p.jsxs)("p",{className:"day-data-block-text",children:[e.length?e[0].main.humidity:"00","%"]})]}),Object(p.jsxs)("div",{className:"day-data-block",children:[Object(p.jsx)("p",{className:"day-data-block-title",children:"\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c"}),Object(p.jsxs)("p",{className:"day-data-block-text",children:[e.length?e[0].visibility/1e3:"00","  \u043a\u043c"]})]}),Object(p.jsxs)("div",{className:"day-data-block",children:[Object(p.jsx)("p",{className:"day-data-block-title",children:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(p.jsxs)("p",{className:"day-data-block-text",children:[e.length?e[0].main.pressure:"00","mbar"]})]}),Object(p.jsxs)("div",{className:"day-data-block",children:[Object(p.jsx)("p",{className:"day-data-block-title",children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430"}),Object(p.jsxs)("p",{className:"day-data-block-text",children:[e.length?e[0].wind.speed:"00"," \u043c/c"]})]}),Object(p.jsxs)("div",{className:"day-data-block",children:[Object(p.jsx)("p",{className:"day-data-block-title",children:"\u041f\u043e\u0440\u044b\u0432 \u0432\u0435\u0442\u0440\u0430"}),Object(p.jsxs)("p",{className:"day-data-block-text",children:[e.length?e[0].wind.deg:"00"," \u043c/c"]})]})]})},M=(c(80),function(){return Object(p.jsx)("div",{className:"aqi-block",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"aqi-block-title",children:"\u0418\u043d\u0434\u0435\u043a\u0441 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430"}),Object(p.jsxs)("p",{className:"aqi-block-text",children:[" ",Object(p.jsx)(w.b,{}),"  21"]})]}),Object(p.jsx)(j.b,{className:"aqi-block-more",to:"/aqi",children:Object(p.jsxs)("a",{className:"aqi-block-more",children:["\u041f\u043e\u043b\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0418\u041a\u0412 ",Object(p.jsx)(T.a,{}),"  "]})})]})})}),P=(c(81),function(){var e=Object(o.useSpring)({to:{opacity:1},from:{opacity:0}});return Object(p.jsxs)(o.animated.div,{className:"home",style:e,children:[Object(p.jsx)(k,{}),Object(p.jsx)(C,{}),Object(p.jsx)(I,{}),Object(p.jsx)(A,{}),Object(p.jsx)(J,{}),Object(p.jsx)(M,{}),Object(p.jsxs)("p",{className:"footer",children:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0430 ",Object(p.jsx)("h3",{children:"nagaside"})," "]})]})});c(82);function H(e){return e.split(" ")[0].split("-")}var K=function(e){var t=e.num,c=Object(m.c)((function(e){return e.city})),s=c.length?c[1].list[t].dt_txt:"00",a=c.length?(c[1].list[t].main.temp-275.15).toFixed():"00",n=c.length?(c[1].list[t+5].main.temp-275.15).toFixed():"00",i=c.length?c[1].list[t+5].wind.speed.toFixed(1):"00";return Object(p.jsxs)("div",{className:"f-day",children:[Object(p.jsxs)("p",{className:"f-day-title",children:[H(s)[1]," ",Object(p.jsx)("br",{})," ",H(s)[2]]}),Object(p.jsxs)("div",{className:"f-day-morning",children:[Object(p.jsx)(r.b,{className:"f-day-morning-icon"}),Object(p.jsx)("p",{children:a})]}),Object(p.jsxs)("div",{className:"f-day-night",children:[Object(p.jsx)(F.d,{className:"f-day-night-icon"}),Object(p.jsx)("p",{children:n})]}),Object(p.jsxs)("p",{className:"f-day-wind",children:[i," ",Object(p.jsx)("br",{})," \u043c/c"]})]})},L=(c(83),function(){var e=Object(o.useSpring)({to:{opacity:1},from:{opacity:0}});return Object(p.jsxs)(o.animated.div,{className:"five-days-temp",style:e,children:[Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)("button",{className:"add-city-button",children:Object(p.jsx)(r.a,{})})}),Object(p.jsx)("p",{className:"add-city-title",children:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 5 \u0434\u043d\u0435\u0439"}),Object(p.jsx)(K,{num:0}),Object(p.jsx)(K,{num:7}),Object(p.jsx)(K,{num:15}),Object(p.jsx)(K,{num:23}),Object(p.jsx)(K,{num:31})]})}),z=(c(84),function(){var e=Object(o.useSpring)({to:{opacity:1},from:{opacity:0}});return Object(p.jsxs)(o.animated.div,{className:"add-city",style:e,children:[Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)("button",{className:"add-city-button",children:Object(p.jsx)(r.a,{})})}),Object(p.jsx)("p",{className:"add-city-title",children:"\u0418\u043d\u0434\u0435\u043a\u0441 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0432\u043e\u0437\u0434\u0443\u0437\u0445\u0430"}),Object(p.jsxs)("div",{className:"aqi-page",children:[Object(p.jsxs)("p",{children:[" ",Object(p.jsx)("p",{children:"21"})," \u0425\u043e\u0440\u043e\u0448\u0438\u0439"]}),Object(p.jsx)("p",{children:"Air quality is good. A perfect day for a walk!"}),Object(p.jsx)("hr",{}),Object(p.jsx)("a",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435  \u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 "})]}),Object(p.jsxs)("p",{className:"footer",children:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0430 ",Object(p.jsx)("h3",{children:"nagaside"})," "]})]})}),G=(c(85),function(){return Object(p.jsx)(j.a,{children:Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/aqi",component:z}),Object(p.jsx)(l.a,{path:"/add-city",component:N}),Object(p.jsx)(l.a,{path:"/five-days",component:L}),Object(p.jsx)(l.a,{path:"/",component:P})]})})})}),Q=c(41),R=c(24),U=[],V=Object(Q.a)({city:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case O:return e=Object(R.a)(t),fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(c.payload.city,"&appid=cf0328590b7fd3dec8b9bb899f788ffc")).then((function(t){return t.json().then((function(t){200==t.cod?e.push(t):console.log("api_error")}))})),fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(c.payload.city,"&appid=cf0328590b7fd3dec8b9bb899f788ffc")).then((function(t){return t.json().then((function(t){200==t.cod?e.push(t):console.log("api_error")}))})),e;case x:return e=(e=Object(R.a)(t)).filter((function(e){return e.key!=c.payload}))}return t}}),W=Object(Q.b)(V),X=document.getElementById("root");i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m.a,{store:W,children:Object(p.jsx)(G,{})})}),X)}},[[86,1,2]]]);
//# sourceMappingURL=main.d48e5b5e.chunk.js.map