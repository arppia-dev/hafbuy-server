"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[8112],{88112:(We,Z,t)=>{t.d(Z,{App:()=>Ie});var e=t(19968),M=t(49008),w=t(39380),l=t(86924),I=t(62552),Q=t(58224),X=t(19112),p=t(65080),k=t(28200),q=t(49780),ee=t(5272),B=t(51772),O=t(1560),K=t(8612),N=t(37272),se=t(156),te=t(62680),ae=t(49824),L=t(41868),ne=t(69856),U=t(20592),ie=t(27612),re=t(23128),oe=t(11360),le=t(24488),de=t(84664),S=t(84800),ce=t(23667),$=t(65968),ge=t(73024),_e=t(51104),a=t(71812),ue=t(22224),me=t(25876),pe=t(31952),he=t(1424),Ee=t(45676),fe=t(80904),A=t(14632),v=t(69372),J=t(31812),F=t(52540);const Me=F.kt().shape({name:F.Qb().trim().required()}).required().noUnknown(),z=({handleClose:s,handleSubmit:o,initialValues:c,isLoading:n=!1})=>{const{formatMessage:i}=(0,A.c)();return(0,e.jsxs)(Q.E,{onClose:s,labelledBy:"title",children:[(0,e.jsx)(X.k,{children:(0,e.jsx)(p.O,{id:"title",fontWeight:"bold",textColor:"neutral800",children:i({id:"content-releases.modal.add-release-title",defaultMessage:"New release"})})}),(0,e.jsx)(J.QJ,{validateOnChange:!1,onSubmit:o,initialValues:c,validationSchema:Me,children:({values:h,errors:E,handleChange:j})=>(0,e.jsxs)(J.QF,{children:[(0,e.jsx)(k.a,{children:(0,e.jsx)(q.g,{label:i({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"}),name:"name",value:h.name,error:E.name,onChange:j,required:!0})}),(0,e.jsx)(ee._,{startActions:(0,e.jsx)(B.Z,{onClick:s,variant:"tertiary",name:"cancel",children:i({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(B.Z,{name:"submit",loading:n,disabled:!h.name,type:"submit",children:i({id:"content-releases.modal.form.button.submit",defaultMessage:"Continue"})})})]})})]})},xe=(0,v.default)(O.C)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:s})=>s.borderRadius};
  border-bottom-left-radius: ${({theme:s})=>s.borderRadius};
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,je=(0,v.default)(O.C)`
  align-self: stretch;
  cursor: ${({disabled:s})=>s?"not-allowed":"pointer"};

  svg path {
    fill: ${({theme:s,disabled:o})=>o&&s.colors.neutral500};
  }
  span {
    color: ${({theme:s,disabled:o})=>o&&s.colors.neutral500};
  }
`,De=(0,v.default)(ue.c)`
  width: ${({theme:s})=>s.spaces[4]};
  height: ${({theme:s})=>s.spaces[4]};
  path {
    fill: ${({theme:s})=>s.colors.neutral600};
  }
`,Pe=(0,v.default)(me.c)`
  width: ${({theme:s})=>s.spaces[4]};
  height: ${({theme:s})=>s.spaces[4]};
  path {
    fill: ${({theme:s})=>s.colors.danger600};
  }
`,V=({onClick:s,disabled:o,children:c})=>(0,e.jsx)(je,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,alignItems:"center",gap:2,as:"button",hasRadius:!0,onClick:s,disabled:o,children:c}),Y=({toggleEditReleaseModal:s,toggleWarningSubmit:o,children:c})=>{const{formatMessage:n}=(0,A.c)(),{releaseId:i}=(0,M.W4)(),[h,E]=I.useState(!1),j=I.useRef(null),{data:R,isLoading:x,isError:g,error:T}=(0,l.u)({id:i}),[b,{isLoading:y}]=(0,l.c)(),D=(0,a.eo)(),{formatAPIError:C}=(0,a.An)(),{allowedActions:{canUpdate:f,canDelete:u}}=(0,a.aU)(l.P),_=R?.data,d=()=>{E(W=>!W)},P=()=>{s(),d()},r=async()=>{const W=await b({id:i});"data"in W?D({type:"success",message:n({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})}):(0,l.i)(W.error)?D({type:"warning",message:C(W.error)}):D({type:"warning",message:n({id:"notification.error",defaultMessage:"An error occurred"})})},m=()=>{o(),d()};if(x)return(0,e.jsx)(K.G,{"aria-busy":x,children:(0,e.jsx)(a.Wm,{})});if(g||!_)return(0,e.jsx)(M.YJ,{to:{pathname:"/plugins/content-releases",state:{errors:[{code:T?.code}]}}});const Le=_.actions.meta.count||0,ve=`${_.createdBy.firstname} ${_.createdBy.lastname}`;return(0,e.jsxs)(K.G,{"aria-busy":x,children:[(0,e.jsx)(N.a,{title:_.name,subtitle:n({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:Le}),navigationAction:(0,e.jsx)(se.c,{startIcon:(0,e.jsx)(pe.c,{}),to:"/plugins/content-releases",children:n({id:"global.back",defaultMessage:"Back"})}),primaryAction:!_.releasedAt&&(0,e.jsxs)(O.C,{gap:2,children:[(0,e.jsx)(te.w,{label:n({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release actions"}),ref:j,onClick:d,children:(0,e.jsx)(he.c,{})}),h&&(0,e.jsxs)(ae._k,{source:j,placement:"bottom-end",onDismiss:d,spacing:4,minWidth:"242px",children:[(0,e.jsxs)(O.C,{alignItems:"center",justifyContent:"center",direction:"column",padding:1,children:[(0,e.jsxs)(V,{disabled:!f,onClick:P,children:[(0,e.jsx)(De,{}),(0,e.jsx)(p.O,{ellipsis:!0,children:n({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]}),(0,e.jsxs)(V,{disabled:!u,onClick:m,children:[(0,e.jsx)(Pe,{}),(0,e.jsx)(p.O,{ellipsis:!0,textColor:"danger600",children:n({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})]}),(0,e.jsxs)(xe,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:5,children:[(0,e.jsx)(p.O,{variant:"pi",fontWeight:"bold",children:n({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),(0,e.jsxs)(p.O,{variant:"pi",color:"neutral300",children:[(0,e.jsx)(a.od,{timestamp:new Date(_.createdAt)}),n({id:"content-releases.header.actions.created.description",defaultMessage:" by {createdBy}"},{createdBy:ve})]})]})]}),(0,e.jsx)(a.Yj,{permissions:l.P.publish,children:(0,e.jsx)(B.Z,{size:"S",variant:"default",onClick:r,loading:y,disabled:_.actions.meta.count===0,children:n({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})})})]})}),c]})},Re=()=>{const{formatMessage:s}=(0,A.c)(),{releaseId:o}=(0,M.W4)(),[{query:c}]=(0,a.WK)(),n=(0,a.eo)(),{formatAPIError:i}=(0,a.An)(),{data:h,isLoading:E,isError:j,error:R}=(0,l.u)({id:o}),x=h?.data,{isLoading:g,isFetching:T,isError:b,data:y,error:D}=(0,l.d)({...c,releaseId:o}),[C]=(0,l.e)(),f=async(d,P)=>{const r=await C({params:{releaseId:o,actionId:P},body:{type:d.target.value}});"error"in r&&((0,l.i)(r.error)?n({type:"warning",message:i(r.error)}):n({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}))};if(g||E)return(0,e.jsx)(L.S,{children:(0,e.jsx)(a.Wm,{})});if(b||j||!x){const d=[];return R&&d.push({code:R.code}),D&&d.push({code:D.code}),(0,e.jsx)(M.YJ,{to:{pathname:"/plugins/content-releases",state:{errors:d}}})}const u=y?.data,_=y?.meta;return!u||!u.length?(0,e.jsx)(L.S,{children:(0,e.jsx)(a.kP,{content:{id:"content-releases.pages.Details.tab.emptyEntries",defaultMessage:"This release is empty. Open the Content Manager, select an entry and add it to the release."},action:(0,e.jsx)(ge.E,{as:w.Link,to:{pathname:"/content-manager"},style:{textDecoration:"none"},variant:"secondary",children:s({id:"content-releases.page.Details.button.openContentManager",defaultMessage:"Open the Content Manager"})})})}):(0,e.jsx)(L.S,{children:(0,e.jsxs)(O.C,{gap:4,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(a.oJ.Root,{rows:u.map(d=>({...d,id:Number(d.entry.id)})),colCount:u.length,isLoading:g,isFetching:T,children:(0,e.jsxs)(a.oJ.Content,{children:[(0,e.jsxs)(a.oJ.Head,{children:[(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"}),name:"name"}),(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.locale",defaultMessage:"locale"}),name:"locale"}),(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"}),name:"content-type"}),(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"}),name:"action"})]}),(0,e.jsx)(a.oJ.LoadingBody,{}),(0,e.jsx)(a.oJ.Body,{children:u.map(({id:d,type:P,entry:r})=>(0,e.jsxs)(ne.Tr,{children:[(0,e.jsx)(U.Td,{children:(0,e.jsx)(p.O,{children:`${r.contentType.mainFieldValue||r.id}`})}),(0,e.jsx)(U.Td,{children:(0,e.jsx)(p.O,{children:`${r?.locale?.name?r.locale.name:"-"}`})}),(0,e.jsx)(U.Td,{children:(0,e.jsx)(p.O,{children:r.contentType.displayName||""})}),(0,e.jsx)(U.Td,{children:x.releasedAt?(0,e.jsx)(p.O,{children:s({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:P==="publish",b:m=>(0,e.jsx)(p.O,{fontWeight:"bold",children:m})})}):(0,e.jsx)(l.R,{selected:P,handleChange:m=>f(m,d),name:`release-action-${d}-type`})})]},d))})]})}),(0,e.jsxs)(O.C,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a.A7,{defaultValue:_?.pagination?.pageSize.toString()}),(0,e.jsx)(a.cZ,{pagination:{pageCount:_?.pagination?.pageCount||0}})]})]})})},Oe=()=>{const{formatMessage:s}=(0,A.c)(),{releaseId:o}=(0,M.W4)(),c=(0,a.eo)(),{formatAPIError:n}=(0,a.An)(),{push:i}=(0,M.Uz)(),[h,E]=I.useState(!1),[j,R]=I.useState(!1),{isLoading:x,data:g,isSuccess:T}=(0,l.u)({id:o}),[b,{isLoading:y}]=(0,l.a)(),[D,{isLoading:C}]=(0,l.b)(),f=()=>{E(r=>!r)},u=()=>R(r=>!r);if(x)return(0,e.jsx)(Y,{toggleEditReleaseModal:f,toggleWarningSubmit:u,children:(0,e.jsx)(L.S,{children:(0,e.jsx)(a.Wm,{})})});const _=T&&g?.data?.name||"",d=async r=>{const m=await b({id:o,name:r.name});"data"in m?c({type:"success",message:s({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}):(0,l.i)(m.error)?c({type:"warning",message:n(m.error)}):c({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}),f()},P=async()=>{const r=await D({id:o});"data"in r?i("/plugins/content-releases"):(0,l.i)(r.error)?c({type:"warning",message:n(r.error)}):c({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(Y,{toggleEditReleaseModal:f,toggleWarningSubmit:u,children:[(0,e.jsx)(Re,{}),h&&(0,e.jsx)(z,{handleClose:f,handleSubmit:d,isLoading:x||y,initialValues:{name:_||""}}),(0,e.jsx)(a.cz,{bodyText:{id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"},isOpen:j,isConfirmButtonLoading:C,onToggleDialog:u,onConfirm:P})]})},ye=()=>(0,e.jsx)(a.Yj,{permissions:l.P.main,children:(0,e.jsx)(Oe,{})}),G=({isLoading:s,totalReleases:o,onClickAddRelease:c,children:n})=>{const{formatMessage:i}=(0,A.c)();return(0,e.jsxs)(K.G,{"aria-busy":s,children:[(0,e.jsx)(N.a,{title:i({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:!s&&i({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"{number, plural, =0 {No releases} one {# release} other {# releases}}"},{number:o}),primaryAction:(0,e.jsx)(a.Yj,{permissions:l.P.create,children:(0,e.jsx)(B.Z,{startIcon:(0,e.jsx)(Ee.c,{}),onClick:c,children:i({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})})})}),n]})},Ce=(0,v.default)(_e.c)`
  display: block;
`,H=({sectionTitle:s,releases:o=[],isError:c=!1})=>{const{formatMessage:n}=(0,A.c)();return c?(0,e.jsx)(a.wF,{}):o?.length===0?(0,e.jsx)(ie.S,{content:n({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:s}),icon:(0,e.jsx)(fe.c,{width:"10rem"})}):(0,e.jsx)(re.y,{gap:4,children:o.map(({id:i,name:h,actions:E})=>(0,e.jsx)(oe.C,{col:3,s:6,xs:12,children:(0,e.jsx)(Ce,{href:`content-releases/${i}`,isExternal:!1,children:(0,e.jsxs)(O.C,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:2,children:[(0,e.jsx)(p.O,{as:"h3",variant:"delta",fontWeight:"bold",children:h}),(0,e.jsx)(p.O,{variant:"pi",children:n({id:"content-releases.page.Releases.release-item.entries",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:E.meta.count})})]})})},i))})},Ae={name:""},Te=()=>{const s=(0,M.IT)(),[o,c]=I.useState(!1),n=(0,a.eo)(),{formatMessage:i}=(0,A.c)(),{push:h,replace:E}=(0,M.Uz)(),{formatAPIError:j}=(0,a.An)(),[{query:R},x]=(0,a.WK)(),g=(0,l.f)(R),[T,{isLoading:b}]=(0,l.g)(),{isLoading:y,isSuccess:D,isError:C}=g;I.useEffect(()=>{s?.state?.errors&&(n({type:"warning",title:i({id:"content-releases.pages.Releases.notification.error.title",defaultMessage:"Your request could not be processed."}),message:i({id:"content-releases.pages.Releases.notification.error.message",defaultMessage:"Please try again or open another release."})}),E({state:null}))},[i,s?.state?.errors,E,n]);const f=()=>{c(r=>!r)};if(y)return(0,e.jsx)(G,{onClickAddRelease:f,isLoading:!0,children:(0,e.jsx)(L.S,{children:(0,e.jsx)(a.Wm,{})})});const u=D&&g.currentData?.meta?.pagination?.total||0,_=r=>{x({...R,page:1,pageSize:g?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:r!==0}}})},d=g?.currentData?.meta?.activeTab||"pending",P=async r=>{const m=await T({name:r.name});"data"in m?(n({type:"success",message:i({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),h(`/plugins/content-releases/${m.data.data.id}`)):(0,l.i)(m.error)?n({type:"warning",message:j(m.error)}):n({type:"warning",message:i({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(G,{onClickAddRelease:f,totalReleases:u,children:[(0,e.jsx)(L.S,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(le.M,{label:i({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),variant:"simple",initialSelectedTabIndex:["pending","done"].indexOf(d),onTabChange:_,children:[(0,e.jsxs)(de.k,{paddingBottom:8,children:[(0,e.jsxs)(S.k,{children:[(0,e.jsx)(S.s,{children:i({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending"})}),(0,e.jsx)(S.s,{children:i({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]}),(0,e.jsx)(ce.c,{})]}),(0,e.jsxs)($.o,{children:[(0,e.jsx)($.G,{children:(0,e.jsx)(H,{sectionTitle:"pending",releases:g?.currentData?.data,isError:C})}),(0,e.jsx)($.G,{children:(0,e.jsx)(H,{sectionTitle:"done",releases:g?.currentData?.data,isError:C})})]})]}),u>0&&(0,e.jsxs)(O.C,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a.A7,{options:["8","16","32","64"],defaultValue:g?.currentData?.meta?.pagination?.pageSize.toString()}),(0,e.jsx)(a.cZ,{pagination:{pageCount:g?.currentData?.meta?.pagination?.pageCount||0}})]})]})}),o&&(0,e.jsx)(z,{handleClose:f,handleSubmit:P,isLoading:b,initialValues:Ae})]})},be=()=>(0,e.jsx)(a.Yj,{permissions:l.P.main,children:(0,e.jsx)(Te,{})}),Ie=()=>(0,e.jsxs)(M.Wk,{children:[(0,e.jsx)(M.kX,{exact:!0,path:`/plugins/${l.p}`,component:be}),(0,e.jsx)(M.kX,{exact:!0,path:`/plugins/${l.p}/:releaseId`,component:ye})]})}}]);