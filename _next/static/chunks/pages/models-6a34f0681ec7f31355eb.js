_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{FRFr:function(e,a,l){"use strict";l.d(a,"a",(function(){return g}));var n=l("ODXe"),t=l("q1tI"),o=l("PsDL"),r=l("ADg1"),c=l("ZGBi"),d=l("UhlP"),s=l("csfp"),i=l("5AJ6"),u=Object(i.a)(t.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=l("n0zQ"),v=Object(i.a)(t.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),p=l("CqGl"),f=l("zjVO"),_=l("jXXI"),b=l("zRuj"),w=l("XW1Y"),N=l.n(w),h=t.createElement;var g=Object(t.forwardRef)((function(e,a){return function(e,a){var l,i,w,g,O,j,y,x,k,C,S,F,P=e.model,D=e.selectedForDownload,q=e.toggleSelectedForDownload,E=(e.onClick,t.useState(!1)),T=Object(n.a)(E,2),L=T[0],R=(T[1],t.useState(!1)),H=Object(n.a)(R,2),X=H[0],z=H[1],Q=null!==(l=null===P||void 0===P?void 0:P.download_link)&&void 0!==l?l:null,A=!!Q,J=null!==(i=null===P||void 0===P?void 0:P.page_link)&&void 0!==i?i:null,M=!!J,V=!!(null===P||void 0===P?void 0:P.source)&&(null===P||void 0===P||null===(w=P.source)||void 0===w?void 0:w.trim().length)>0,B=!!(null===P||void 0===P?void 0:P.readme_link)&&(null===P||void 0===P||null===(g=P.readme_link)||void 0===g?void 0:g.trim().length)>0,G=!!(null===P||void 0===P?void 0:P.model_files)&&(null===P||void 0===P||null===(O=P.model_files)||void 0===O?void 0:O.length)>0;return h(b.a,{key:"model-".concat(null===P||void 0===P?void 0:P.id)},h("div",{className:N.a["model-card-content"]},h("div",{className:"row"},h("div",{className:"col-md-9 col-sm-12"},h("div",{className:"row"},h("div",{className:"col-md-8 col-sm-12"},h("div",{className:"col-12 text-left"},h("span",{className:N.a["model-card-name-label"]},"Name: "),h("span",{className:N.a["model-card-name-value"]},null!==(j=null===P||void 0===P?void 0:P.name)&&void 0!==j?j:"")),h("div",{className:"col-12 text-left"},h("span",{className:N.a["model-card-types-label"]},"Type(s): "),h("span",{className:N.a["model-card-types-value"]},null!==(y=(null!==(x=null===P||void 0===P?void 0:P.model_types)&&void 0!==x?x:[]).join(","))&&void 0!==y?y:"")),h("div",{className:"col-12 text-left"},h("span",{className:N.a["model-card-papers-label"]},"Paper(s): "),(null!==(k=null===P||void 0===P?void 0:P.papers)&&void 0!==k?k:[]).map((function(e){return(null===e||void 0===e?void 0:e.url)?h("a",{className:N.a["model-card-papers-value"],href:e.url},e.label):h("span",{className:N.a["model-card-papers-value"]},e.label)}))),B?h("div",{className:"col-12 text-left"},h("span",{className:N.a["model-card-papers-label"]},"Readme: "),h("a",{href:null===P||void 0===P?void 0:P.readme_link,target:"_blank"},h("span",{className:N.a["model-card-papers-value"]},null!==(C=null===P||void 0===P?void 0:P.readme_link)&&void 0!==C?C:""))):null,G?h("div",{className:"col-12 text-left"},X?h("div",{className:"row"},(null!==(S=null===P||void 0===P?void 0:P.model_files)&&void 0!==S?S:[]).map((function(e,a){var l;return h("div",{className:"col-12"},h("a",{href:e.url},e.label,a<(null===P||void 0===P||null===(l=P.model_files)||void 0===l?void 0:l.length)-1?", ":""),")",h(u,null))}))):null):null),h("div",{className:"col-md-4 col-sm-12 text-right"},h("div",{className:"row"},h("div",{className:"col-12"},V?h("span",{className:N.a["model-card-source-label"]},"SOURCE: ",null===P||void 0===P?void 0:P.source):null,G?h("div",null,h("span",{className:N.a["model-card-source-label"]},"Mod Files: ",null===P||void 0===P||null===(F=P.model_files)||void 0===F?void 0:F.length)):null)),h("div",{className:"row"},h("div",{className:"col-12"},G?h(o.a,{onClick:function(){return z(!X)}},h(X?m.a:v,null)):null))))),h("div",{className:"".concat(N.a["model-card-actions-container"]," col-md-3 col-sm-12")},h("div",{className:"row"},h("div",{className:"col-12 text-left"},h("div",{className:"row"},A?h("div",{className:"col-12"},h(r.a,null,h(c.a,{control:h(d.a,{defaultChecked:D,checked:D,onChange:function(e,a){return q(P.source_id,a)}}),label:"Select for download"}))):null,h("div",{className:"col-12 text-center"},A?h("span",{className:N.a["model-card-action"]},h(s.a,{title:"Download"},h(_.a,{label:"Download",icon:h(p.a,null),expanded:L,onClick:function(){return window.open(Q)}}))):null,M?h("span",{className:N.a["model-card-action"]},h(s.a,{title:"View on Site"},h(_.a,{label:"View on Site",icon:h(f.a,null),expanded:L,onClick:function(){return window.open(J)}}))):null))))))))}(e)}))},OnkL:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/models",function(){return l("xpQe")}])},XW1Y:function(e,a,l){e.exports={"model-card-content":"modelCard_model-card-content__XFwei","model-card-image":"modelCard_model-card-image__329sT","model-card-name-label":"modelCard_model-card-name-label__3-9JN","model-card-types-label":"modelCard_model-card-types-label__2U40t","model-card-papers-label":"modelCard_model-card-papers-label__3k88T","model-card-name-value":"modelCard_model-card-name-value__1CRzD","model-card-types-value":"modelCard_model-card-types-value__2Hl-W","model-card-papers-value":"modelCard_model-card-papers-value__2uFKi","model-card-description":"modelCard_model-card-description__35BVJ","model-card-source-label":"modelCard_model-card-source-label__2FHHq","model-card-actions-container":"modelCard_model-card-actions-container__551u-","model-card-action":"modelCard_model-card-action__3Ml36"}},xpQe:function(e,a,l){"use strict";l.r(a);var n=l("rePB"),t=l("KQm4"),o=l("o0o1"),r=l.n(o),c=l("HaE+"),d=l("ODXe"),s=l("q1tI"),i=l("ofer"),u=l("hDQs"),m=l("rh/9"),v=l("TLva"),p=l("YK1M"),f=l("kzYg"),_=l("N39q"),b=l("RQJL"),w=l.n(b),N=l("Z7bq"),h=l("FRFr"),g=l("95fv"),O=l("CqGl"),j=s.createElement;a.default=function(e){var a=e.params,l=s.useState(!0),o=Object(d.a)(l,2),b=o[0],y=o[1],x=s.useState({}),k=Object(d.a)(x,2),C=k[0],S=k[1],F=s.useState([]),P=Object(d.a)(F,2),D=P[0],q=P[1],E=s.useState(null),T=Object(d.a)(E,2),L=T[0],R=T[1],H=s.useState(null),X=Object(d.a)(H,2),z=X[0],Q=X[1],A=s.useState(""),J=Object(d.a)(A,2),M=J[0],V=J[1],B=s.useState([]),G=Object(d.a)(B,2),I=G[0],U=G[1],Y=s.useState(0),K=Object(d.a)(Y,2),W=K[0],Z=K[1],$=s.useState(1),ee=Object(d.a)($,2),ae=ee[0],le=ee[1],ne=s.useState(0),te=Object(d.a)(ne,2),oe=te[0],re=te[1],ce=s.useState(_.a.DEFAULT_HITS_PER_PAGE),de=Object(d.a)(ce,2),se=de[0],ie=de[1];Object(s.useEffect)((function(){ue()}),[]);var ue=function(){var e=Object(c.a)(r.a.mark((function e(){var l,n,t,o,c,d,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.c)({indexName:"model"});case 3:return n=e.sent,e.next=6,Object(u.e)("models");case 6:return t=e.sent,e.next=9,Object(f.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:M,page:W});case 9:o=e.sent,c=o.total_page,d=o.total,s=o.items,S(t),R(n),le(c),re(d),q(s),y(!1),e.next=23;break;case 21:e.prev=21,e.t0=e.catch(0);case 23:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=Object(c.a)(r.a.mark((function e(){var l,n,t,o,c,d,s,i,u,m,v=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.length>0&&void 0!==v[0]?v[0]:{},t=n.query,o=n.filters,c=n.hitsPerPage,console.log("@@@@requestSearch"),d=0,Z(0),y(!0),e.next=7,Object(f.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:null!==t&&void 0!==t?t:M,filters:null!==o&&void 0!==o?o:z,page:d,hitsPerPage:c});case 7:s=e.sent,i=s.total_page,u=s.total,m=s.items,q(m),le(i),re(u),y(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(c.a)(r.a.mark((function e(){var l,n,o,c,d,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(n=W+1),y(!0),e.next=5,Object(f.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:M,filters:z,page:n});case 5:o=e.sent,c=o.total_page,d=o.total,s=o.items,i=[].concat(Object(t.a)(D),Object(t.a)(s)),q(i),re(d),le(c),y(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie(a),e.next=3,me({hitsPerPage:a});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),fe=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(null),e.next=3,me({query:"",filters:null});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(c.a)(r.a.mark((function e(a,l){var n,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("@@@@@@@toggleSelectForDownload",a,l),l?((n=Object(t.a)(I)).push(a),U(n)):(o=Object(t.a)(I),(c=o.indexOf(a))>-1&&(o.splice(c,1),U(o)));case 2:case"end":return e.stop()}}),e)})));return function(a,l){return e.apply(this,arguments)}}(),we=W<ae-1,Ne=!!D&&D.length>0;return j(v.a,null,j("div",{className:"container ".concat(w.a["page-container"])},j("div",{className:"row"},j("div",{className:"col-12"},j(i.a,{variant:"h4"},C.title))),j("div",{className:"row"},j("div",{className:"col-12"},C.content)),j("section",null,j("div",{className:"row",style:{marginTop:20}},j("div",{className:"col-12"},j(g.a,{query:M,filters:L,selectedFilters:z,selectedHitsPerPage:se,onQueryChange:function(e){return V(e)},onRequestSearch:function(){return me()},onChangeHitsPerPage:function(e){return pe(e)},onChangeFilters:function(e,a){return Q(Object(n.a)({},e,a))},applyFilters:function(){return fe()},resetFilters:function(){return _e()}}))),j("div",{className:"row",style:{marginTop:20}},j("div",{className:"col-md-6"},j(N.a,{label:"Total items",count:oe})),j("div",{className:"col-md-6 text-right"},j(p.a,{onClick:function(){window.open(Object(f.a)())}},j(O.a,null)," ",j("span",{style:{marginLeft:5}},"Download All")),I&&I.length>0?j(p.a,{onClick:function(){window.open(Object(f.b)(I))},style:{marginLeft:10}},j(O.a,null)," ",j("span",{style:{marginLeft:5}},"Download Selected")):null)),j("div",{className:"row"},j("div",{className:"col-12 text-center"},Ne?j("div",null,(null!==D&&void 0!==D?D:[]).map((function(e){return j("div",{className:"row",key:"row-dataset-".concat(null===e||void 0===e?void 0:e.id)},j("div",{className:"col-12"},j(h.a,{model:e,selectedForDownload:I.includes(e.source_id),toggleSelectedForDownload:be})))}))):j("p",null,b?"":"There are not data for search criteria"))),we?j("div",{className:"row",style:{marginTop:20}},j("div",{className:"col-12 text-center"},j(p.a,{variant:"primary",onClick:function(){return ve()}},"Load More"))):null),b?j(m.a,null):null))}}},[["OnkL",0,2,4,1,3,5,6,7]]]);