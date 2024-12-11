(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{18463:function(e,n,t){"use strict";var a=t(87462),r=t(45987),o=t(67294),i=t(86010),s=t(79895),c=t(52543),l=o.forwardRef((function(e,n){var t=e.classes,c=e.className,l=e.raised,d=void 0!==l&&l,u=(0,r.Z)(e,["classes","className","raised"]);return o.createElement(s.Z,(0,a.Z)({className:(0,i.Z)(t.root,c),elevation:d?8:1,ref:n},u))}));n.Z=(0,c.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},79912:function(e,n,t){"use strict";var a=t(87462),r=t(45987),o=t(67294),i=t(86010),s=t(52543),c=o.forwardRef((function(e,n){var t=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,d=(0,r.Z)(e,["classes","className","component"]);return o.createElement(l,(0,a.Z)({className:(0,i.Z)(t.root,s),ref:n},d))}));n.Z=(0,s.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},94697:function(e,n,t){"use strict";var a=t(87462),r=t(45987),o=t(67294),i=t(86010),s=t(52543),c=t(22318),l=o.forwardRef((function(e,n){var t=e.action,s=e.avatar,l=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,f=e.disableTypography,m=void 0!==f&&f,v=e.subheader,h=e.subheaderTypographyProps,Z=e.title,g=e.titleTypographyProps,N=(0,r.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=Z;null==x||x.type===c.Z||m||(x=o.createElement(c.Z,(0,a.Z)({variant:s?"body2":"h5",className:l.title,component:"span",display:"block"},g),x));var y=v;return null==y||y.type===c.Z||m||(y=o.createElement(c.Z,(0,a.Z)({variant:s?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},h),y)),o.createElement(p,(0,a.Z)({className:(0,i.Z)(l.root,d),ref:n},N),s&&o.createElement("div",{className:l.avatar},s),o.createElement("div",{className:l.content},x,y),t&&o.createElement("div",{className:l.action},t))}));n.Z=(0,s.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(l)},79322:function(e,n,t){"use strict";t.d(n,{_:function(){return p}});var a=t(67294),r=t(41120),o=t(18463),i=t(94697),s=t(79912),c=t(85893),l=(0,r.Z)((function(e){return{cardContainer:{marginTop:20}}})),d=(0,r.Z)((function(e){return{root:{boxShadow:"0 0 10px #33333333",paddingTop:0,paddingBottom:0,borderRadius:5}}})),u=(0,r.Z)((function(e){return{root:{paddingLeft:0,paddingRight:0,paddingTop:"0px !important",paddingBottom:"0px !important"}}}));var p=(0,a.forwardRef)((function(e,n){return function(e,n){var t=d(),a=l(),r=u(),p=e.title,f=e.onClick,m=e.children,v=p&&p.trim().length>0;return(0,c.jsx)("div",{className:a.cardContainer,children:(0,c.jsxs)(o.Z,{classes:t,onClick:f,children:[v?(0,c.jsx)(i.Z,{style:{paddingTop:0},title:p}):null,(0,c.jsx)(s.Z,{classes:r,children:m})]})})}(e)}))},55689:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var a=t(50029),r=t(16835),o=t(87794),i=t.n(o),s=t(67294),c=t(27919),l=t(27161);var d=t(41120),u=t(79322),p=t(85893),f=(0,d.Z)((function(e){return{cardStyle:{marginBottom:20},title:{fontSize:24,fontFamily:"Nunito, sans-family",fontWeight:600},content:{paddingLeft:16,paddingRight:16}}}));function m(e){var n,t=e.news,a=f();return(0,p.jsx)(u._,{title:t.title,children:(0,p.jsx)("div",{className:a.content,children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-12",children:null!==(n=null===t||void 0===t?void 0:t.content)&&void 0!==n?n:""})})})})}var v=function(){var e=s.useState([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],d=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Ik)();case 3:n=e.sent,o(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return s.useEffect((function(){d()}),[]),(0,p.jsx)(c.Z,{children:(0,p.jsx)("div",{className:"container",children:(null!==t&&void 0!==t?t:[]).map((function(e){return(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-12",children:(0,p.jsx)(m,{news:e})})},"news-".concat(e.id))}))})})}},10830:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t(55689)}])}},function(e){e.O(0,[200,833,220,774,888,179],(function(){return n=10830,e(e.s=n);var n}));var n=e.O();_N_E=n}]);