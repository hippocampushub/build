_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"3o4F":function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/models/[type]",function(){return l("VvCi")}])},FRFr:function(e,a,l){"use strict";l.d(a,"a",(function(){return O}));var n=l("ODXe"),t=l("q1tI"),o=l("PsDL"),r=l("ZGBi"),c=l("VmPI"),d=l("ADg1"),i=l("UhlP"),s=l("csfp"),u=l("n0zQ"),m=l("5AJ6"),v=Object(m.a)(t.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),p=l("CqGl"),f=l("zjVO"),_=l("NAox"),N=l("jXXI"),b=l("zRuj"),w=l("XW1Y"),g=l.n(w),h=t.createElement;function y(e,a){var l,m,w,y,O,x,j,S,k,C,F,P,E=Object(_.a)(),q=e.model,D=e.selectedForDownload,T=e.toggleSelectedForDownload,M=(e.onClick,t.useState(!1)),J=Object(n.a)(M,2),R=J[0],X=(J[1],t.useState(!1)),A=Object(n.a)(X,2),H=A[0],V=A[1],I=null!==(l=null===q||void 0===q?void 0:q.download_link)&&void 0!==l?l:null,z=!!I,Q=null!==(m=null===q||void 0===q?void 0:q.page_link)&&void 0!==m?m:null,B=!!Q,L=!!(null===q||void 0===q?void 0:q.source)&&(null===q||void 0===q||null===(w=q.source)||void 0===w?void 0:w.trim().length)>0,G=!!(null===q||void 0===q?void 0:q.readme_link)&&(null===q||void 0===q||null===(y=q.readme_link)||void 0===y?void 0:y.trim().length)>0,U=!!(null===q||void 0===q?void 0:q.model_files)&&(null===q||void 0===q||null===(O=q.model_files)||void 0===O?void 0:O.length)>0,Y=function(a){if(null===e||void 0===e?void 0:e.isModFileSelected)return null===e||void 0===e?void 0:e.isModFileSelected(a)};return h(b.a,{key:"model-".concat(null===q||void 0===q?void 0:q.id)},h("div",{className:g.a["model-card-content"]},h("div",{className:"row"},h("div",{className:"col-md-9 col-sm-12"},h("div",{className:"row"},h("div",{className:"col-md-8 col-sm-12"},h("div",{className:"row"},h("div",{className:"col-12 text-left"},h("span",{className:g.a["model-card-name-label"]},"Name: "),h("span",{className:g.a["model-card-name-value"]},null!==(x=null===q||void 0===q?void 0:q.name)&&void 0!==x?x:"")),h("div",{className:"col-12 text-left"},h("span",{className:g.a["model-card-types-label"]},"Type(s): "),h("span",{className:g.a["model-card-types-value"]},null!==(j=(null!==(S=null===q||void 0===q?void 0:q.model_types)&&void 0!==S?S:[]).join(","))&&void 0!==j?j:"")),h("div",{className:"col-12 text-left"},h("span",{className:g.a["model-card-papers-label"]},"Paper(s): "),(null!==(k=null===q||void 0===q?void 0:q.papers)&&void 0!==k?k:[]).map((function(e){return(null===e||void 0===e?void 0:e.url)?h("a",{className:g.a["model-card-papers-value"],href:e.url},e.label):h("span",{className:g.a["model-card-papers-value"]},e.label)}))),G?h("div",{className:"col-12 text-left"},h("span",{className:g.a["model-card-papers-label"]},"Readme: "),h("a",{href:null===q||void 0===q?void 0:q.readme_link,target:"_blank"},h("span",{className:g.a["model-card-papers-value"]},null!==(C=null===q||void 0===q?void 0:q.readme_link)&&void 0!==C?C:""))):null)),h("div",{className:"col-md-4 col-sm-12 text-right"},h("div",{className:"row"},h("div",{className:"col-12"},L?h("span",{className:g.a["model-card-source-label"]},"SOURCE: ",null===q||void 0===q?void 0:q.source):null,U?h("div",null,h("span",{className:g.a["model-card-source-label"]},"Mod Files: ",null===q||void 0===q||null===(F=q.model_files)||void 0===F?void 0:F.length)):null)))),U?h("div",{className:"row"},h("div",{className:"col-md-12 col-sm-12"},h("div",{className:"row"},h("div",{className:"col-12 text-center"},h("div",null,h("span",{className:g.a["model-card-expand-all-label"]},"Expand All"),h(o.a,{className:E.root,onClick:function(){return V(!H)}},h(H?u.a:v,null)))),H?h("div",{className:"col-12 text-left"},h("span",{className:g.a["model-card-papers-label"]},"Mod File(s): "),h("div",{className:"row"},(null!==(P=null===q||void 0===q?void 0:q.model_files)&&void 0!==P?P:[]).map((function(a){return h("div",{className:"col-4"},h(r.a,{control:h(c.a,{key:a.url,checked:Y(a),onChange:function(l,n){return function(a,l){if(null===e||void 0===e?void 0:e.toggleModFileForBuilding)return null===e||void 0===e?void 0:e.toggleModFileForBuilding(a,l)}(a,n)}}),label:""}),h("a",{href:a.url},a.label))})))):null))):null),h("div",{className:"".concat(g.a["model-card-actions-container"]," col-md-3 col-sm-12")},h("div",{className:"row"},h("div",{className:"col-12 text-left"},h("div",{className:"row"},z?h("div",{className:"col-12"},h(d.a,null,h(r.a,{control:h(i.a,{defaultChecked:D,checked:D,onChange:function(e,a){return T(q.source_id,a)}}),label:"Select for download"}))):null,h("div",{className:"col-12 text-center"},z?h("span",{className:g.a["model-card-action"]},h(s.a,{title:"Download"},h(N.a,{label:"Download",icon:h(p.a,null),expanded:R,onClick:function(){return window.open(I)}}))):null,B?h("span",{className:g.a["model-card-action"]},h(s.a,{title:"View on Site"},h(N.a,{label:"View on Site",icon:h(f.a,null),expanded:R,onClick:function(){return window.open(Q)}}))):null))))))))}var O=Object(t.forwardRef)((function(e,a){return y(e)}))},VvCi:function(e,a,l){"use strict";l.r(a),l.d(a,"__N_SSG",(function(){return O}));var n=l("KQm4"),t=l("o0o1"),o=l.n(t),r=l("HaE+"),c=l("ODXe"),d=l("q1tI"),i=l("ofer"),s=l("hDQs"),u=l("rh/9"),m=l("TLva"),v=l("YK1M"),p=l("kzYg"),f=l("N39q"),_=l("RQJL"),N=l.n(_),b=l("Z7bq"),w=l("FRFr"),g=l("95fv"),h=function(e){for(var a=0,l=0;l<e.length;l++){a=(a<<5)-a+e.charCodeAt(l),a&=a}return a},y=d.createElement,O=!0;a.default=function(e){var a=e.params,l=d.useState(!0),t=Object(c.a)(l,2),_=t[0],O=t[1],x=d.useState({}),j=Object(c.a)(x,2),S=j[0],k=j[1],C=d.useState([]),F=Object(c.a)(C,2),P=F[0],E=F[1],q=d.useState(""),D=Object(c.a)(q,2),T=D[0],M=D[1],J=d.useState([]),R=Object(c.a)(J,2),X=R[0],A=R[1],H=d.useState(0),V=Object(c.a)(H,2),I=V[0],z=V[1],Q=d.useState(1),B=Object(c.a)(Q,2),L=B[0],G=B[1],U=d.useState(0),Y=Object(c.a)(U,2),K=Y[0],W=Y[1],Z=d.useState([]),$=Object(c.a)(Z,2),ee=$[0],ae=$[1],le=d.useState(f.a.DEFAULT_HITS_PER_PAGE),ne=Object(c.a)(le,2),te=ne[0],oe=ne[1];Object(d.useEffect)((function(){re()}),[]);var re=function(){var e=Object(r.a)(o.a.mark((function e(){var l,n,t,r,c,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.e)("models");case 3:return n=e.sent,e.next=6,Object(p.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:T,page:I});case 6:t=e.sent,r=t.total_page,c=t.total,d=t.items,k(n),G(r),W(c),E(d),O(!1),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(0);case 19:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(o.a.mark((function e(){var l,n,t,r,c,d,i,s,u,m=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>0&&void 0!==m[0]?m[0]:{},t=n.query,r=n.hitsPerPage,console.log("@@@@requestSearch"),c=0,z(0),O(!0),e.next=7,Object(p.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:null!==t&&void 0!==t?t:T,page:c,hitsPerPage:r});case 7:d=e.sent,i=d.total_page,s=d.total,u=d.items,E(u),G(i),W(s),O(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(r.a)(o.a.mark((function e(){var l,t,r,c,d,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(t=I+1),O(!0),e.next=5,Object(p.f)({data_type:null!==(l=null===a||void 0===a?void 0:a.type)&&void 0!==l?l:null,query:T,page:t});case 5:r=e.sent,c=r.total_page,d=r.total,i=r.items,s=[].concat(Object(n.a)(P),Object(n.a)(i)),E(s),W(d),G(c),O(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(r.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return oe(a),e.next=3,ce({hitsPerPage:a});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),se=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce({query:"",region:"",cellType:"",species:""});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=Object(r.a)(o.a.mark((function e(a,l){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("@@@@@@@toggleSelectForDownload",a,l),l?((t=Object(n.a)(X)).push(a),A(t)):(r=Object(n.a)(X),(c=r.indexOf(a))>-1&&(r.splice(c,1),A(r)));case 2:case"end":return e.stop()}}),e)})));return function(a,l){return e.apply(this,arguments)}}(),ve=function(e,a){var l=Object(n.a)(ee);if(a)l.push(e);else{var t=l.findIndex((function(a){return h(JSON.stringify(e))==h(JSON.stringify(a))}));t>-1&&l.splice(t,1)}ae(l)},pe=function(e){return Object(n.a)(ee).findIndex((function(a){return h(JSON.stringify(e))==h(JSON.stringify(a))}))>-1},fe=I<L-1,_e=!!P&&P.length>0;return y(m.a,null,y("div",{className:"container ".concat(N.a["page-container"])},y("div",{className:"row"},y("div",{className:"col-12"},y(i.a,{variant:"h4"},S.title))),y("div",{className:"row"},y("div",{className:"col-12"},S.content)),y("section",null,y("div",{className:"row",style:{marginTop:20}},y("div",{className:"col-12"},y(g.a,{query:T,selectedHitsPerPage:te,onQueryChange:function(e){return M(e)},onRequestSearch:function(){return ce()},onChangeHitsPerPage:function(e){return ie(e)},applyFilters:function(){return se()},resetFilters:function(){return ue()}}))),y("div",{className:"row",style:{marginTop:20}},y("div",{className:"col-md-6"},y(b.a,{label:"Total items",count:K})),y("div",{className:"col-md-6 text-right"})),y("div",{className:"row"},y("div",{className:"col-12 text-center"},_e?y("div",null,(null!==P&&void 0!==P?P:[]).map((function(e){return y("div",{className:"row",key:"row-dataset-".concat(null===e||void 0===e?void 0:e.id)},y("div",{className:"col-12"},y(w.a,{model:e,selectedForDownload:X.includes(e.source_id),toggleSelectedForDownload:me,toggleModFileForBuilding:ve,isModFileSelected:pe})))}))):y("p",null,_?"":"There are not data for search criteria"))),fe?y("div",{className:"row",style:{marginTop:20}},y("div",{className:"col-12 text-center"},y(v.a,{variant:"primary",onClick:function(){return de()}},"Load More"))):null),_?y(u.a,null):null))}},XW1Y:function(e,a,l){e.exports={"model-card-content":"modelCard_model-card-content__XFwei","model-card-image":"modelCard_model-card-image__329sT","model-card-name-label":"modelCard_model-card-name-label__3-9JN","model-card-types-label":"modelCard_model-card-types-label__2U40t","model-card-papers-label":"modelCard_model-card-papers-label__3k88T","model-card-name-value":"modelCard_model-card-name-value__1CRzD","model-card-types-value":"modelCard_model-card-types-value__2Hl-W","model-card-papers-value":"modelCard_model-card-papers-value__2uFKi","model-card-description":"modelCard_model-card-description__35BVJ","model-card-source-label":"modelCard_model-card-source-label__2FHHq","model-card-expand-all-label":"modelCard_model-card-expand-all-label__3-Q42","model-card-actions-container":"modelCard_model-card-actions-container__551u-","model-card-action":"modelCard_model-card-action__3Ml36"}}},[["3o4F",0,2,4,1,3,5,6,7]]]);