_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"30+C":function(e,n,t){"use strict";var a=t("wx14"),i=t("Ff2n"),o=t("q1tI"),l=(t("17x9"),t("iuhU")),c=t("kKAo"),r=t("H2TA"),d=o.forwardRef((function(e,n){var t=e.classes,r=e.className,d=e.raised,s=void 0!==d&&d,u=Object(i.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(a.a)({className:Object(l.a)(t.root,r),elevation:s?8:1,ref:n},u))}));n.a=Object(r.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d)},RQJL:function(e,n,t){e.exports={"page-container":"page_page-container__3LRmt","page-columns-container":"page_page-columns-container__34P3E","page-header-label":"page_page-header-label__O6BoI","page-header-divider":"page_page-header-divider__1xXS6"}},WD4f:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return t("eL0V")}])},ZB9j:function(e,n,t){e.exports={"content-card-button":"contentCard_content-card-button__3KMQQ",dark:"contentCard_dark__XyZzZ","children-container":"contentCard_children-container__ZVPhn","cta-container":"contentCard_cta-container__2mIEq","arrow-container":"contentCard_arrow-container__ekP9F"}},eL0V:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return O}));var a=t("o0o1"),i=t.n(a),o=t("HaE+"),l=t("ODXe"),c=t("q1tI"),r=t("hDQs"),d=t("TLva"),s=t("nSCH"),u=t("R/WZ"),v=t("ofer"),m=t("YK1M"),g=t("30+C"),p=t("oa/T"),f=t("ZB9j"),h=t("nOHt"),_=t("Uv/k"),b=c.createElement,N=Object(u.a)((function(e){return{root:{borderRadius:5,boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.15)"},content:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 20px"},mainContent:{flexGrow:1},title:{color:"#fff",fontFamily:"Titillium Web, sans-serif",fontSize:"24px",textTransform:"uppercase"}}})),w=function(e){var n=e.title,t=e.content,a=e.actions,i=e.variant,o=void 0===i?"dark":i,l=N(),c=Object(h.useRouter)(),r="dark"===o?"#fff":"#333";return b(g.a,{className:"".concat(l.root," ").concat(f["content-card-button"]," ").concat(f[o])},b(p.a,{className:l.content},b("div",{className:"row"},b("div",{className:"col-9"},b("div",{className:"row"},b("div",{className:"col-12"},b(v.a,{style:{color:r,fontSize:24,fontFamily:"Titillium Web"}},n))),b("div",{className:"row",style:{marginTop:10}},b("div",{className:"col-12"},b(_.a,{content:t,style:{color:r,fontSize:16,fontFamily:"Titillium Web"}})))),b("div",{className:"col-3"},(null!==a&&void 0!==a?a:[]).map((function(e){return b("div",{className:"row",style:{marginTop:10}},b("div",{className:"col-12"},b(m.a,{style:{fontSize:14},onClick:function(){return function(e){var n,t,a=null!==(n=null===e||void 0===e?void 0:e.url)&&void 0!==n?n:null;if(a&&(null===a||void 0===a||null===(t=a.trim())||void 0===t?void 0:t.length)>0){var i,o,l=null!==(i=null===e||void 0===e?void 0:e.target)&&void 0!==i?i:null;l&&(null===l||void 0===l||null===(o=l.trim())||void 0===o?void 0:o.length)>0&&"_blank"===l?window.open(a,"_blank"):null===c||void 0===c||c.push(a)}}(e)}},null===e||void 0===e?void 0:e.label)))}))))))},x=t("RQJL"),C=t.n(x),S=c.createElement,y=Object(u.a)((function(e){return{sectionsMenuContainer:{position:"fixed"},sectionsMenu:{}}}));var O=!0;n.default=function(e){var n,t,a,u,g,p,f,_,b,N=e.params,O=c.useState({}),T=Object(l.a)(O,2),j=T[0],k=T[1],E=y(),I=Object(h.useRouter)();Object(c.useEffect)((function(){var e,n,t=null===I||void 0===I||null===(e=I.asPath)||void 0===e||null===(n=e.match(/#([a-z0-9]+)/gi))||void 0===n?void 0:n.toString();t&&(console.log("@@@@@@scroll to hash",t),setTimeout((function(){var e;null===(e=document.getElementById(t.substr(1,t.length-1)))||void 0===e||e.scrollIntoView()})))}),[]);var z=function(){var e=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.e)(N.slug);case 2:n=e.sent,k(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=(null===j||void 0===j?void 0:j.enableSectionsMenu)&&!!(null===j||void 0===j?void 0:j.sections),L=H?"col-9":"col-12",M=(null===(n=null!==(t=null===j||void 0===j?void 0:j.content_cards)&&void 0!==t?t:[])||void 0===n?void 0:n.length)>0,W=null===(a=null===j||void 0===j?void 0:j.showTitle)||void 0===a||a,A=!!(null===j||void 0===j?void 0:j.sections)&&(null===j||void 0===j||null===(u=j.sections)||void 0===u?void 0:u.length)>0;return Object(c.useEffect)((function(){z()}),[]),S(d.a,{headerCarousel:null!==(g=j.header_carousel)&&void 0!==g?g:null,fixedHeader:!0,transparentHeader:!1,variant:null!==(p=null===j||void 0===j?void 0:j.variant)&&void 0!==p?p:"light",mainClassName:"with-fixed-header"},S("div",{className:"container ".concat(C.a["page-container"])},W?S("div",{className:"row"},S("div",{className:"col-12"},S(v.a,{variant:"h4",className:"".concat(C.a["page-header-label"]," text-center")},null===j||void 0===j?void 0:j.title),S("div",{className:C.a["page-header-divider"]}))):null,M?S("div",{className:"container ".concat(x["page-container"])},(null!==(f=null===j||void 0===j?void 0:j.content_cards)&&void 0!==f?f:[]).map((function(e){return S("div",{className:"row",style:{marginBottom:40}},S(w,{title:null===e||void 0===e?void 0:e.title,content:null===e||void 0===e?void 0:e.content,actions:null===e||void 0===e?void 0:e.actions}))}))):null,S("div",{className:"row"},H?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return S("div",{className:"col-3 d-flex justify-content-center"},S("div",{className:E.sectionsMenuContainer},S("div",{className:E.sectionsMenu},null===e||void 0===e?void 0:e.map((function(e){return S(m.a,{style:{fontSize:11,marginTop:10},onClick:function(){return window.location.href="#".concat(null===e||void 0===e?void 0:e.id)}},null===e||void 0===e?void 0:e.header)})))))}(null!==(_=null===j||void 0===j?void 0:j.sections)&&void 0!==_?_:[]):null,A?S("div",{className:L},(null!==(b=null===j||void 0===j?void 0:j.sections)&&void 0!==b?b:[]).map((function(e,n){return function(e,n){var t;return S(s.a,{sectionData:e,variant:e.variant?e.variant:n%2===0?"light":"dark",asContainer:null!==(t=null===e||void 0===e?void 0:e.asContainer)&&void 0!==t&&t})}(e,n)}))):null)))}},nSCH:function(e,n,t){"use strict";var a=t("o0o1"),i=t.n(a),o=t("HaE+"),l=t("q1tI"),c=t("nOHt"),r=t("ofer"),d=t("rqmy"),s=t("YK1M"),u=t("pNLH"),v=t.n(u),m=t("d0Tl"),g=t("Uv/k"),p=t("N39q"),f=l.createElement;n.a=function(e){var n,t,a,l,u=e.sectionData,h=e.variant,_=void 0===h?"light":h,b=e.asContainer,N=void 0!==b&&b,w=e.openImageCreditsDialog,x=Object(c.useRouter)(),C=function(){var e=Object(o.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}if(!n.startsWith("http")){e.next=5;break}window.open(n),e.next=7;break;case 5:return e.next=7,x.push(n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S={fontSize:null!==(n=null===u||void 0===u?void 0:u.fontSize)&&void 0!==n?n:p.a.SECTIONS.mainContentTextStyle.fontSize,textAlign:null!==(t=null===u||void 0===u?void 0:u.textAlign)&&void 0!==t?t:p.a.SECTIONS.mainContentTextStyle.textAlign};return f("section",{id:u.id,className:"".concat(v.a["page-section"]," ").concat(v.a[_])},f("div",{className:v.a["page-section-main-container"]},Object(d.b)(null===u||void 0===u?void 0:u.header)?f("div",{className:v.a["page-section-header"]},f(r.a,{variant:"h5",align:"center",gutterBottom:!0,className:v.a["page-section-header-label"]},u.header),f("div",{className:v.a["page-section-header-divider"]})):null,Object(d.b)(null===u||void 0===u?void 0:u.content)?f("div",{className:"row",style:{marginTop:10}},f("div",{className:"col-12"},f(g.a,{content:null!==(a=u.content)&&void 0!==a?a:"",style:S}))):null,(null!==(l=null===u||void 0===u?void 0:u.rows)&&void 0!==l?l:[]).map((function(e){var n,t,a,i,o,l,c={fontSize:null!==(n=null===e||void 0===e?void 0:e.fontSize)&&void 0!==n?n:p.a.SECTIONS.rowContentTextStyle.fontSize,textAlign:null!==(t=null===e||void 0===e?void 0:e.textAlign)&&void 0!==t?t:p.a.SECTIONS.mainContentTextStyle.textAlign},u=(null!==(a=e.columns)&&void 0!==a?a:[]).length>0?"col-".concat(Math.ceil(12/(null!==(i=e.columns)&&void 0!==i?i:[]).length)):"col-12";return f("div",{className:N?"container":null,id:null!==(o=null===e||void 0===e?void 0:e.id)&&void 0!==o?o:""},f("div",{className:"row",style:{marginTop:20}},f("div",{className:"col-12"},Object(d.b)(e.header)?f(r.a,{variant:"h6",gutterBottom:!0,className:v.a["page-section-sub-header"]},e.header):null)),f("div",{className:"row",style:{marginTop:20}},(null!==(l=e.columns)&&void 0!==l?l:[]).map((function(e){var n,t,a,i,o,l;return f("div",{className:u},Object(d.b)(e.content)?f("div",{className:"row"},f("div",{className:"col-12"},f(g.a,{content:null!==(n=null===e||void 0===e?void 0:e.content)&&void 0!==n?n:"",style:c}))):null,(null===e||void 0===e?void 0:e.image)?f("div",{className:"row"},f("div",{className:"col-12 text-center"},f("div",{style:{position:"relative",display:"inline-block"}},f("img",{src:Object(m.a)(null===e||void 0===e?void 0:e.image),style:{maxWidth:null!==(t=null===e||void 0===e||null===(a=e.image)||void 0===a?void 0:a.maxWidth)&&void 0!==t?t:null===(i=p.a.SECTIONS.rowContentImageStyle)||void 0===i?void 0:i.maxWidth,width:"100%"}}),(null===e||void 0===e||null===(o=e.image)||void 0===o?void 0:o.imageCreditsLabel)?f("div",{className:v.a["page-section-col-image-credits-label"],onClick:function(){var n;return w(null===e||void 0===e||null===(n=e.image)||void 0===n?void 0:n.imageCreditsContent)}},f("span",null,null===e||void 0===e||null===(l=e.image)||void 0===l?void 0:l.imageCreditsLabel)):null))):null)})),e.cta?f("div",{className:"col-12 text-center",style:{marginTop:40}},f(s.a,{onClick:function(){var n;return C(null===e||void 0===e||null===(n=e.cta)||void 0===n?void 0:n.url)},variant:"primary",style:{margin:"0 auto",fontSize:16},isCta:!0},e.cta.label)):null))}))))}},"oa/T":function(e,n,t){"use strict";var a=t("wx14"),i=t("Ff2n"),o=t("q1tI"),l=(t("17x9"),t("iuhU")),c=t("H2TA"),r=o.forwardRef((function(e,n){var t=e.classes,c=e.className,r=e.component,d=void 0===r?"div":r,s=Object(i.a)(e,["classes","className","component"]);return o.createElement(d,Object(a.a)({className:Object(l.a)(t.root,c),ref:n},s))}));n.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(r)},pNLH:function(e,n,t){e.exports={"page-section":"page-section_page-section__3rbo5",light:"page-section_light__KY3Zx","page-section-sub-header":"page-section_page-section-sub-header__2PZhA",dark:"page-section_dark__12WnX","page-section-main-container":"page-section_page-section-main-container__1uiC6","page-section-header":"page-section_page-section-header__1aSgU","page-section-header-label":"page-section_page-section-header-label__3O2wU","page-section-header-divider":"page-section_page-section-header-divider__2JDjB","page-section-col-image-credits-label":"page-section_page-section-col-image-credits-label__f7_Lx"}},rqmy:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));var a=function(e){return!0},i=function(e){return!!e&&e.trim().length>0}}},[["WD4f",1,2,6,0,3,4,5,7]]]);