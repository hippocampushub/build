_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"8rj6":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),c=n("HaE+"),o=n("ODXe"),u=n("q1tI"),s=n("/MKj"),i=n("p46w"),f=n.n(i),l=n("N39q"),p=function(){return function(t){var e;return null!==(e=f.a.get(t))&&void 0!==e?e:null}(l.a.AUTH_COOKIE_KEY)},d=n("kzYg"),v=n("kkwK");function g(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:v.a.LOGIN_REQUEST}),n.next=3,Object(d.h)(t,e);case 3:if(!(c=n.sent).success){n.next=7;break}return r({type:v.a.LOGIN_SUCCESS,isLogged:!0}),n.abrupt("return");case 7:r((a=c.error,{type:v.a.LOGIN_ERROR,error:a,isLogged:!1}));case 8:case"end":return n.stop()}var a}),n)})));return function(t){return n.apply(this,arguments)}}()}function h(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:v.a.VERIFY_TOKEN_REQUEST}),e.next=3,Object(d.k)(t);case 3:if(!(r=e.sent).success){e.next=7;break}return n({type:v.a.VERIFY_TOKEN_SUCCESS,isLogged:!0}),e.abrupt("return");case 7:n((a=r.error,{type:v.a.VERIFY_TOKEN_ERROR,error:a,isLogged:!1}));case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()}var b=n("r9w1"),m=n("YK1M"),w=n("Iv90"),E=n("d0Tl"),O=n("RD7I"),_=u.createElement,y=Object(O.a)((function(t){return{root:{color:"#fff"},label:{color:"#fff"},input:{color:"#fff"}}}));function R(t){t.login;var e=t.logo,n=u.useState(""),r=Object(o.a)(n,2),a=r[0],c=r[1],s=u.useState(""),i=Object(o.a)(s,2),f=i[0],l=i[1],p=y();return _("div",{className:w["login-form-container"]},_("form",{className:"form"},e?_("img",{src:Object(E.a)(e)}):null,_("div",{className:"row"},_("div",{className:"col-12"},_("div",{className:"input-group"},_(b.a,{InputLabelProps:{className:p.label,classes:{focused:p.label}},InputProps:{className:p.input,classes:{focused:p.label}},fullWidth:!0,variant:"outlined",label:"Username",name:"username",value:a,onChange:function(t){return c(t.target.value)}})))),_("div",{className:"row",style:{marginTop:20}},_("div",{className:"col-12"},_("div",{className:"input-group"},_(b.a,{InputLabelProps:{className:p.label,classes:{focused:p.label}},InputProps:{className:p.input,classes:{focused:p.label}},fullWidth:!0,variant:"outlined",label:"Password",name:"password",value:f,onChange:function(t){return l(t.target.value)}})))),_("div",{className:"row",style:{position:"absolute",bottom:20,left:0,right:0}},_("div",{className:"col-12",onClick:function(){}},_(m.a,{style:{margin:"0 auto"}},"Login")))))}var N=n("hDQs"),k=u.createElement;e.default=Object(s.b)((function(t,e){var n;return{isLogged:null!==(n=t.auth.isLogged)&&void 0!==n&&n}}),(function(t){return{login:function(){var e=Object(c.a)(a.a.mark((function e(n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(g(n,r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),verifyToken:function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(h(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(t){var e,n=t.children,r=t.isLogged,s=t.login,i=t.verifyToken,f=u.useState(),l=Object(o.a)(f,2),d=l[0],v=l[1],g=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(N.a)();case 3:e=t.sent,v(e),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){g(),function(){var t=p();t&&t.trim().length>0&&i(t)}()}),[]),k("div",null,r?{children:n}:k(R,{login:function(t,e){t&&e&&s(t,e)},logo:null!==(e=null===d||void 0===d?void 0:d.logo)&&void 0!==e?e:null}))}))},Iv90:function(t,e,n){t.exports={"login-form-container":"login_login-form-container__zRvzS"}},dpcX:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_privateRouteContainer",function(){return n("8rj6")}])},kkwK:function(t,e,n){"use strict";e.a={LOGIN_REQUEST:"LOGIN_REQUEST",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_ERROR:"LOGIN_ERROR",VERIFY_TOKEN_REQUEST:"VERIFY_TOKEN_REQUEST",VERIFY_TOKEN_SUCCESS:"VERIFY_TOKEN_SUCCESS",VERIFY_TOKEN_ERROR:"VERIFY_TOKEN_ERROR"}},kzYg:function(t,e,n){"use strict";n.d(e,"i",(function(){return v})),n.d(e,"j",(function(){return g})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return b})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return w})),n.d(e,"c",(function(){return E})),n.d(e,"e",(function(){return O})),n.d(e,"h",(function(){return y})),n.d(e,"k",(function(){return R})),n.d(e,"a",(function(){return _}));var r=n("o0o1"),a=n.n(r),c=n("HaE+"),o=n("vDqi"),u=n.n(o),s=n("N39q"),i=null!=="https://facility-hub.cineca.it"?"https://facility-hub.cineca.it":"http://localhost:5000",f={login:"/auth/login",verifyToken:"/auth/verifyToken"},l={filters:function(t){return"/filters/".concat(t)},types:function(t){return"/types/".concat(t)},datasets:function(){return"/search/dataset"},models:function(){return"/search/model"}},p={datasets:function(){return"/download/dataset"},models:function(){return"/download/model"}},d=function(t){try{return t&&200===t.status?t.data:null}catch(e){throw e}},v=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,o,s,f,p,v,g,h;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.data_type,r=void 0===n?null:n,c=e.query,o=e.filters,s=e.page,f=void 0===s?0:s,p=e.hitsPerPage,v=void 0===p?20:p,g="".concat(i).concat(l.datasets(),"/").concat(f,"/").concat(v),t.prev=2,t.next=5,u.a.post(g,{data_type:r,query:c,filters:o});case 5:return h=t.sent,t.abrupt("return",d(h));case 9:t.prev=9,t.t0=t.catch(2),console.error("@@@@error retrieving datasets"),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,o,s,f,p,v;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query,r=e.filters,c=e.page,o=void 0===c?0:c,s=e.hitsPerPage,f=void 0===s?20:s,p="".concat(i).concat(l.models(),"/").concat(o,"/").concat(f),t.prev=2,t.next=5,u.a.post(p,{query:n,filters:r});case 5:return v=t.sent,t.abrupt("return",d(v));case 9:t.prev=9,t.t0=t.catch(2),console.error("@@@@error retrieving datasets"),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r,c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.indexName,r=e.type,c="".concat(i).concat(l.filters(n)),r&&(c="".concat(c,"/").concat(r)),t.prev=3,t.next=6,u.a.get(c);case 6:return o=t.sent,t.abrupt("return",d(o));case 10:t.prev=10,t.t0=t.catch(3),console.error("@@@@error retrieving data filters"),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i).concat(l.types(e)),t.prev=1,t.next=4,u.a.get(n);case 4:return r=t.sent,t.abrupt("return",d(r));case 8:t.prev=8,t.t0=t.catch(1),console.error("@@@@@error retrieving data types"),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e="".concat(i).concat(p.datasets(),"/all");return t&&t.trim().length>0&&(e+="?data_type=".concat(t)),e},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e="".concat(i).concat(p.datasets(),"?ids=").concat(t.join(","));return e},E=function(){return"".concat(i).concat(p.datasets(),"/all")},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e="".concat(i).concat(p.datasets(),"?ids=").concat(t.join(","));return e},_=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(s.a.MORPHOLOGY_VIEWER_BASE_URL).concat(e),t.next=4,u.a.get(n);case 4:return r=t.sent,t.abrupt("return",!!r&&!!r.status&&200===r.status);case 8:t.prev=8,t.t0=t.catch(0);case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i).concat(f.login),t.prev=1,t.next=4,u.a.post(r,{username:e,password:n});case 4:if(200!==t.sent.status){t.next=7;break}return t.abrupt("return",{success:!0});case 7:return t.abrupt("return",{error:"Something was wrong"});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",{error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),R=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i).concat(f.verifyToken),t.prev=1,t.next=4,u.a.post(n,{token:e});case 4:if(200!==t.sent.status){t.next=7;break}return t.abrupt("return",{success:!0});case 7:return t.abrupt("return",{error:"Something was wrong"});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",{error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},p46w:function(t,e,n){var r,a;!function(c){if(void 0===(a="function"===typeof(r=c)?r.call(e,n,e,t):r)||(t.exports=a),!0,t.exports=c(),!!0){var o=window.Cookies,u=window.Cookies=c();u.noConflict=function(){return window.Cookies=o,u}}}((function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function a(){}function c(e,n,c){if("undefined"!==typeof document){"number"===typeof(c=t({path:"/"},a.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var o=JSON.stringify(n);/^[\{\[]/.test(o)&&(n=o)}catch(i){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var s in c)c[s]&&(u+="; "+s,!0!==c[s]&&(u+="="+c[s].split(";")[0]));return document.cookie=e+"="+n+u}}function o(t,n){if("undefined"!==typeof document){for(var a={},c=document.cookie?document.cookie.split("; "):[],o=0;o<c.length;o++){var u=c[o].split("="),s=u.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var i=e(u[0]);if(s=(r.read||r)(s,i)||e(s),n)try{s=JSON.parse(s)}catch(f){}if(a[i]=s,t===i)break}catch(f){}}return t?a[t]:a}}return a.set=c,a.get=function(t){return o(t,!1)},a.getJSON=function(t){return o(t,!0)},a.remove=function(e,n){c(e,"",t(n,{expires:-1}))},a.defaults={},a.withConverter=n,a}((function(){}))}))}},[["dpcX",1,2,0,3,5,8,9]]]);