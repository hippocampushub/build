_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"3o4F":function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/models/[type]",function(){return l("VvCi")}])},FRFr:function(e,a,l){"use strict";l.d(a,"a",(function(){return g}));var n=l("ODXe"),t=l("q1tI"),o=l("PsDL"),r=l("ADg1"),c=l("ZGBi"),d=l("UhlP"),s=l("csfp"),i=l("5AJ6"),u=Object(i.a)(t.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=l("n0zQ"),v=Object(i.a)(t.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),p=l("CqGl"),f=l("zjVO"),_=l("jXXI"),N=l("zRuj"),b=l("XW1Y"),w=l.n(b),h=t.createElement;var g=Object(t.forwardRef)((function(e,a){return function(e,a){var l,i,b,g,y,O,j,x,k,C,S,F,P=e.model,E=e.selectedForDownload,T=e.toggleSelectedForDownload,q=(e.onClick,t.useState(!1)),D=Object(n.a)(q,2),R=D[0],H=(D[1],t.useState(!1)),X=Object(n.a)(H,2),z=X[0],V=X[1],L=null!==(l=null===P||void 0===P?void 0:P.download_link)&&void 0!==l?l:null,J=!!L,M=null!==(i=null===P||void 0===P?void 0:P.page_link)&&void 0!==i?i:null,A=!!M,Q=!!(null===P||void 0===P?void 0:P.source)&&(null===P||void 0===P||null===(b=P.source)||void 0===b?void 0:b.trim().length)>0,G=!!(null===P||void 0===P?void 0:P.readme_link)&&(null===P||void 0===P||null===(g=P.readme_link)||void 0===g?void 0:g.trim().length)>0,I=!!(null===P||void 0===P?void 0:P.model_files)&&(null===P||void 0===P||null===(y=P.model_files)||void 0===y?void 0:y.length)>0;return h(N.a,{key:"model-".concat(null===P||void 0===P?void 0:P.id)},h("div",{className:w.a["model-card-content"]},h("div",{className:"row"},h("div",{className:"col-md-9 col-sm-12"},h("div",{className:"row"},h("div",{className:"col-md-8 col-sm-12"},h("div",{className:"col-12 text-left"},h("span",{className:w.a["model-card-name-label"]},"Name: "),h("span",{className:w.a["model-card-name-value"]},null!==(O=null===P||void 0===P?void 0:P.name)&&void 0!==O?O:"")),h("div",{className:"col-12 text-left"},h("span",{className:w.a["model-card-types-label"]},"Type(s): "),h("span",{className:w.a["model-card-types-value"]},null!==(j=(null!==(x=null===P||void 0===P?void 0:P.model_types)&&void 0!==x?x:[]).join(","))&&void 0!==j?j:"")),h("div",{className:"col-12 text-left"},h("span",{className:w.a["model-card-papers-label"]},"Paper(s): "),(null!==(k=null===P||void 0===P?void 0:P.papers)&&void 0!==k?k:[]).map((function(e){return(null===e||void 0===e?void 0:e.url)?h("a",{className:w.a["model-card-papers-value"],href:e.url},e.label):h("span",{className:w.a["model-card-papers-value"]},e.label)}))),G?h("div",{className:"col-12 text-left"},h("span",{className:w.a["model-card-papers-label"]},"Readme: "),h("a",{href:null===P||void 0===P?void 0:P.readme_link,target:"_blank"},h("span",{className:w.a["model-card-papers-value"]},null!==(C=null===P||void 0===P?void 0:P.readme_link)&&void 0!==C?C:""))):null,I?h("div",{className:"col-12 text-left"},z?h("div",{className:"row"},(null!==(S=null===P||void 0===P?void 0:P.model_files)&&void 0!==S?S:[]).map((function(e,a){var l;return h("div",{className:"col-12"},h("a",{href:e.url},e.label,a<(null===P||void 0===P||null===(l=P.model_files)||void 0===l?void 0:l.length)-1?", ":""),")",h(u,null))}))):null):null),h("div",{className:"col-md-4 col-sm-12 text-right"},h("div",{className:"row"},h("div",{className:"col-12"},Q?h("span",{className:w.a["model-card-source-label"]},"SOURCE: ",null===P||void 0===P?void 0:P.source):null,I?h("div",null,h("span",{className:w.a["model-card-source-label"]},"Mod Files: ",null===P||void 0===P||null===(F=P.model_files)||void 0===F?void 0:F.length)):null)),h("div",{className:"row"},h("div",{className:"col-12"},I?h(o.a,{onClick:function(){return V(!z)}},h(z?m.a:v,null)):null))))),h("div",{className:"".concat(w.a["model-card-actions-container"]," col-md-3 col-sm-12")},h("div",{className:"row"},h("div",{className:"col-12 text-left"},h("div",{className:"row"},J?h("div",{className:"col-12"},h(r.a,null,h(c.a,{control:h(d.a,{defaultChecked:E,checked:E,onChange:function(e,a){return T(P.source_id,a)}}),label:"Select for download"}))):null,h("div",{className:"col-12 text-center"},J?h("span",{className:w.a["model-card-action"]},h(s.a,{title:"Download"},h(_.a,{label:"Download",icon:h(p.a,null),expanded:R,onClick:function(){return window.open(L)}}))):null,A?h("span",{className:w.a["model-card-action"]},h(s.a,{title:"View on Site"},h(_.a,{label:"View on Site",icon:h(f.a,null),expanded:R,onClick:function(){return window.open(M)}}))):null))))))))}(e)}))},VvCi:function(e,a,l){"use strict";l.r(a),l.d(a,"__N_SSG",(function(){return y}));var n=l("KQm4"),t=l("o0o1"),o=l.n(t),r=l("HaE+"),c=l("ODXe"),d=l("q1tI"),s=l("ofer"),i=l("hDQs"),u=l("rh/9"),m=l("TLva"),v=l("YK1M"),p=l("kzYg"),f=l("N39q"),_=l("RQJL"),N=l.n(_),b=l("Z7bq"),w=l("FRFr"),h=l("95fv"),g=d.createElement,y=!0;a.default=function(e){var a=e.params,l=d.useState(!0),t=Object(c.a)(l,2),_=t[0],y=t[1],O=d.useState({}),j=Object(c.a)(O,2),x=j[0],k=j[1],C=d.useState([]),S=Object(c.a)(C,2),F=S[0],P=S[1],E=d.useState(""),T=Object(c.a)(E,2),q=T[0],D=T[1],R=d.useState([]),H=Object(c.a)(R,2),X=H[0],z=H[1],V=d.useState(0),L=Object(c.a)(V,2),J=L[0],M=L[1],A=d.useState(1),Q=Object(c.a)(A,2),G=Q[0],I=Q[1],U=d.useState(0),Y=Object(c.a)(U,2),B=Y[0],K=Y[1],W=d.useState(f.a.DEFAULT_HITS_PER_PAGE),Z=Object(c.a)(W,2),$=Z[0],ee=Z[1];Object(d.useEffect)((function(){ae()}),[]);var ae=function(){var e=Object(r.a)(o.a.mark((function e(){var l,n,t,r,c,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.e)("models");case 3:return n=e.sent,e.next=6,Object(p.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:q,page:J});case 6:t=e.sent,r=t.total_page,c=t.total,d=t.items,k(n),I(r),K(c),P(d),y(!1),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(0);case 19:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(r.a)(o.a.mark((function e(){var l,n,t,r,c,d,s,i,u,m=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>0&&void 0!==m[0]?m[0]:{},t=n.query,n.region,n.cellType,n.species,r=n.hitsPerPage,console.log("@@@@requestSearch"),c=0,M(0),y(!0),e.next=7,Object(p.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:null!==t&&void 0!==t?t:q,page:c,hitsPerPage:r});case 7:d=e.sent,s=d.total_page,i=d.total,u=d.items,P(u),I(s),K(i),y(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(r.a)(o.a.mark((function e(){var l,t,r,c,d,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(t=J+1),y(!0),e.next=5,Object(p.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:q,page:t});case 5:r=e.sent,c=r.total_page,d=r.total,s=r.items,i=[].concat(Object(n.a)(F),Object(n.a)(s)),P(i),K(d),I(c),y(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(r.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(a),e.next=3,le({hitsPerPage:a});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),oe=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le({query:"",region:"",cellType:"",species:""});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(o.a.mark((function e(a,l){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("@@@@@@@toggleSelectForDownload",a,l),l?((t=Object(n.a)(X)).push(a),z(t)):(r=Object(n.a)(X),(c=r.indexOf(a))>-1&&(r.splice(c,1),z(r)));case 2:case"end":return e.stop()}}),e)})));return function(a,l){return e.apply(this,arguments)}}(),de=J<G-1,se=!!F&&F.length>0;return g(m.a,null,g("div",{className:"container ".concat(N.a["page-container"])},g("div",{className:"row"},g("div",{className:"col-12"},g(s.a,{variant:"h4"},x.title))),g("div",{className:"row"},g("div",{className:"col-12"},x.content)),g("section",null,g("div",{className:"row",style:{marginTop:20}},g("div",{className:"col-12"},g(h.a,{query:q,selectedHitsPerPage:$,onQueryChange:function(e){return D(e)},onRequestSearch:function(){return le()},onChangeHitsPerPage:function(e){return te(e)},applyFilters:function(){return oe()},resetFilters:function(){return re()}}))),g("div",{className:"row",style:{marginTop:20}},g("div",{className:"col-md-6"},g(b.a,{label:"Total items",count:B})),g("div",{className:"col-md-6 text-right"})),g("div",{className:"row"},g("div",{className:"col-12 text-center"},se?g("div",null,(null!==F&&void 0!==F?F:[]).map((function(e){return g("div",{className:"row",key:"row-dataset-".concat(null===e||void 0===e?void 0:e.id)},g("div",{className:"col-12"},g(w.a,{model:e,selectedForDownload:X.includes(e.source_id),toggleSelectedForDownload:ce})))}))):g("p",null,_?"":"There are not data for search criteria"))),de?g("div",{className:"row",style:{marginTop:20}},g("div",{className:"col-12 text-center"},g(v.a,{variant:"primary",onClick:function(){return ne()}},"Load More"))):null),_?g(u.a,null):null))}},XW1Y:function(e,a,l){e.exports={"model-card-content":"modelCard_model-card-content__XFwei","model-card-image":"modelCard_model-card-image__329sT","model-card-name-label":"modelCard_model-card-name-label__3-9JN","model-card-types-label":"modelCard_model-card-types-label__2U40t","model-card-papers-label":"modelCard_model-card-papers-label__3k88T","model-card-name-value":"modelCard_model-card-name-value__1CRzD","model-card-types-value":"modelCard_model-card-types-value__2Hl-W","model-card-papers-value":"modelCard_model-card-papers-value__2uFKi","model-card-description":"modelCard_model-card-description__35BVJ","model-card-source-label":"modelCard_model-card-source-label__2FHHq","model-card-actions-container":"modelCard_model-card-actions-container__551u-","model-card-action":"modelCard_model-card-action__3Ml36"}}},[["3o4F",0,2,4,1,3,5,6,7]]]);