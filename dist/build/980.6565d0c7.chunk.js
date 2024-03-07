"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[980],{35180:(L,c,t)=>{t.d(c,{B:()=>U,D:()=>B,H:()=>K,R:()=>I});var s=t(19968),r=t(1560),E=t(65080),m=t(66040),g=t(8612),P=t(41868),O=t(37272),d=t(71812),l=t(27832),o=t(31952),M=t(14632),v=t(38188),C=t(48132),n=t(69372);const e=(0,n.default)(r.C)`
  svg path {
    fill: ${({theme:i})=>i.colors.neutral600};
  }
`,D=({name:i})=>(0,s.jsxs)(r.C,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,d.W8)(300),children:[(0,s.jsx)(e,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,s.jsx)(l.c,{width:`${8/16}rem`})}),(0,s.jsx)(E.O,{fontWeight:"bold",children:i})]}),B=()=>(0,s.jsx)(v.D,{renderItem:i=>{if(i.type===C.D.STAGE)return(0,s.jsx)(D,{name:typeof i.item=="string"?i.item:null})}}),I=({children:i})=>(0,s.jsx)(m._,{children:(0,s.jsx)(g.G,{tabIndex:-1,children:(0,s.jsx)(P.S,{children:i})})}),U=({href:i})=>{const{formatMessage:h}=(0,M.c)();return(0,s.jsx)(d.cH,{startIcon:(0,s.jsx)(o.c,{}),to:i,children:h({id:"global.back",defaultMessage:"Back"})})},K=({title:i,subtitle:h,navigationAction:y,primaryAction:u})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.K8,{name:i}),(0,s.jsx)(O.a,{navigationAction:y,primaryAction:u,title:i,subtitle:h})]})},30980:(L,c,t)=>{t.d(c,{ProtectedReviewWorkflowsPage:()=>k});var s=t(19968),r=t(62552),E=t(1560),m=t(33560),g=t(84076),P=t(33147),O=t(99520),d=t(69856),l=t(20592),o=t(65080),M=t(55468),v=t(35560),C=t(62680),n=t(71812),e=t(45676),D=t(22224),B=t(25876),I=t(78164),U=t(14632),K=t(48632),i=t(70516),h=t(49008),y=t(69372),u=t(50040),S=t(9252),V=t(17072),$=t(35180),j=t(74556),Y=t(48132),Z=t(30320),Ot=t(17892),Pt=t(31212),ct=t(38188),mt=t(54320),gt=t(5240),vt=t(91892),ft=t(36196),Ct=t(20880),Tt=t(21424),ht=t(31812),Lt=t(18424),Wt=t(52540),At=t(21968),Rt=t(12132),Bt=t(85676),It=t(35184),Ut=t(99568),Kt=t(96556),yt=t(13192),ut=t(30840),jt=t(77784),xt=t(79371),wt=t(67888),pt=t(52600),St=t(95752),$t=t(37388),Ft=t(61840),Nt=t(49108),Qt=t(44632),Ht=t(50840),zt=t(20252),Gt=t(86432),Vt=t(22612),Yt=t(24808),Zt=t(24024),Jt=t(33656),Xt=t(43280),kt=t(79804),bt=t(19632),qt=t(29576),ts=t(61152),ss=t(9589),os=t(45488),ns=t(75516);const J=(0,y.default)(n.cH)`
  align-items: center;
  height: ${(0,n.W8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:a})=>`${a.spaces[2]}}`};
  width: ${(0,n.W8)(32)};

  svg {
    height: ${(0,n.W8)(12)};
    width: ${(0,n.W8)(12)};

    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,X=()=>{const{formatMessage:a}=(0,U.c)(),{push:F}=(0,h.Uz)(),{trackUsage:N}=(0,n.m4)(),[x,w]=r.useState(null),[b,W]=r.useState(!1),{collectionTypes:q,singleTypes:tt,isLoading:st}=(0,u.u)(),{meta:f,workflows:Q,isLoading:p,refetch:ot}=(0,Z.u)(),{del:nt}=(0,n.Qn)(),{formatAPIError:et}=(0,n.An)(),H=(0,n.eo)(),{getFeature:at,isLoading:z}=(0,V.u)(),_t=(0,i.w1)(S.s),{allowedActions:{canCreate:G,canDelete:it}}=(0,n.aU)(_t.settings?.["review-workflows"]),T=at("review-workflows")?.[Y.C],{mutateAsync:rt,isLoading:lt}=(0,K.useMutation)(async({workflowId:_,stages:A})=>{const{data:{data:R}}=await nt(`/admin/review-workflows/workflows/${_}`,{data:A});return R},{onSuccess(){H({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),Et=_=>[...q,...tt].find(R=>R.uid===_)?.info.displayName,dt=_=>{w(_)},Mt=()=>{w(null)},Dt=async()=>{if(x)try{const _=await rt({workflowId:x});return await ot(),w(null),_}catch(_){return _ instanceof I.Uh&&H({type:"warning",message:et(_)}),null}};return r.useEffect(()=>{!p&&!z&&T&&f&&f?.workflowCount>parseInt(T,10)&&W(!0)},[z,p,f,f?.workflowCount,T]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)($.H,{primaryAction:G&&(0,s.jsx)(n.EZ,{startIcon:(0,s.jsx)(e.c,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{T&&f&&f?.workflowCount>=parseInt(T,10)?(_.preventDefault(),W(!0)):N("willCreateWorkflow")},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:a({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:a({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,s.jsxs)($.R,{children:[p||st?(0,s.jsx)(E.C,{justifyContent:"center",children:(0,s.jsx)(m.c,{children:a({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,s.jsxs)(g.o,{colCount:3,footer:G&&(0,s.jsx)(P.U,{icon:(0,s.jsx)(e.c,{}),onClick:()=>{T&&f&&f?.workflowCount>=parseInt(T,10)?W(!0):(F("/settings/review-workflows/create"),N("willCreateWorkflow"))},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,s.jsx)(O.o,{children:(0,s.jsxs)(d.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(o.O,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(o.O,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(o.O,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(M.K,{children:a({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(v.K,{children:Q?.map(_=>(0,r.createElement)(d.Tr,{...(0,n.on)({fn(A){A.target.nodeName!=="BUTTON"&&F(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,s.jsx)(l.Td,{width:(0,n.W8)(250),children:(0,s.jsx)(o.O,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(o.O,{textColor:"neutral800",children:_.stages.length})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(o.O,{textColor:"neutral800",children:(_?.contentTypes??[]).map(Et).join(", ")})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(E.C,{alignItems:"center",justifyContent:"end",children:[(0,s.jsx)(J,{to:`/settings/review-workflows/${_.id}`,"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,s.jsx)(D.c,{})}),Q.length>1&&it&&(0,s.jsx)(C.w,{"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,s.jsx)(B.c,{}),noBorder:!0,onClick:()=>{dt(String(_.id))}})]})})))})]}),(0,s.jsx)(n.cz,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:lt,isOpen:!!x,onToggleDialog:Mt,onConfirm:Dt}),(0,s.jsxs)(j.L.Root,{isOpen:b,onClose:()=>W(!1),children:[(0,s.jsx)(j.L.Title,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,s.jsx)(j.L.Body,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},k=()=>{const a=(0,i.w1)(S.s);return(0,s.jsx)(n.rF,{permissions:a.settings?.["review-workflows"]?.main,children:(0,s.jsx)(X,{})})}},50040:(L,c,t)=>{t.d(c,{u:()=>g});var s=t(62552),r=t(71812),E=t(78164),m=t(48632);function g(){const{get:P}=(0,r.Qn)(),{formatAPIError:O}=(0,r.An)(),d=(0,r.eo)(),l=(0,m.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:e}}=await P("/content-manager/components");return e},onError(e){e instanceof E.Uh&&d({type:"warning",message:O(e)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:e}}=await P("/content-manager/content-types");return e},onError(e){e instanceof E.Uh&&d({type:"warning",message:O(e)})}}]),[o,M]=l,v=o.isLoading||M.isLoading,C=s.useMemo(()=>(M?.data??[]).filter(e=>e.kind==="collectionType"&&e.isDisplayed),[M?.data]),n=s.useMemo(()=>(M?.data??[]).filter(e=>e.kind!=="collectionType"&&e.isDisplayed),[M?.data]);return{isLoading:v,components:s.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:C,singleTypes:n}}},30320:(L,c,t)=>{t.d(c,{u:()=>m});var s=t(62552),r=t(71812),E=t(48632);function m(g={}){const{get:P}=(0,r.Qn)(),{id:O="",...d}=g,l={populate:"stages"},{data:o,isLoading:M,status:v,refetch:C}=(0,E.useQuery)(["review-workflows","workflows",O],async()=>{const{data:D}=await P(`/admin/review-workflows/workflows/${O}`,{params:{...l,...d}});return D}),n=s.useMemo(()=>{let D=[];return o?.data&&(Array.isArray(o.data)?D=o.data:D=[o.data]),D},[o]);return{meta:s.useMemo(()=>{let D;return o&&"meta"in o&&(D=o.meta),D},[o]),workflows:n,isLoading:M,status:v,refetch:C}}},33147:(L,c,t)=>{t.d(c,{U:()=>l});var s=t(19968),r=t(69372),E=t(84664),m=t(23667),g=t(1560),P=t(65080);const O=(0,r.default)(E.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,d=(0,r.default)(E.k)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,l=({children:o,icon:M,...v})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(m.c,{}),(0,s.jsx)(d,{as:"button",background:"primary100",padding:5,...v,children:(0,s.jsxs)(g.C,{children:[(0,s.jsx)(O,{"aria-hidden":!0,background:"primary200",children:M}),(0,s.jsx)(E.k,{paddingLeft:3,children:(0,s.jsx)(P.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
