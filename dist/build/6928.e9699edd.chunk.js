"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[6928],{6928:(N,m,s)=>{s.d(m,{ProtectedListPage:()=>ts});var _=s(19968),i=s(62552),r=s(69856),n=s(20592),e=s(65080),c=s(1560),h=s(84664),P=s(62680),D=s(8612),l=s(37272),R=s(51772),C=s(29296),O=s(41868),I=s(84076),K=s(33147),x=s(99520),f=s(55468),F=s(35560),t=s(71812),A=s(45676),j=s(58804),Z=s(22224),H=s(25876),J=s(78164),X=s(29088),z=s(14632),b=s(49008),G=s(38188),k=s(68940),V=s(9252),Ds=s(54320),Os=s(5240),Ms=s(91892),Ps=s(36196),Cs=s(20880),Ts=s(21424),ms=s(70516),cs=s(48632),hs=s(31812),Rs=s(18424),Ls=s(52540),As=s(21968),vs=s(12132),gs=s(85676),Bs=s(35184),Ws=s(99568),Us=s(96556),Is=s(13192),Ks=s(30840),xs=s(77784),fs=s(79371),js=s(67888),us=s(52600),ys=s(95752),ps=s(37388),$s=s(61840),Ss=s(49108),Ns=s(44632),Fs=s(50840),zs=s(20252),Gs=s(86432),Vs=s(22612),Qs=s(24808),Ys=s(24024),Zs=s(33656),Hs=s(43280),Js=s(79804),Xs=s(19632),bs=s(29576),ks=s(61152),ws=s(9589),qs=s(45488),s_=s(75516),__=s(17892),t_=s(31212);const w=({id:a,name:T,description:E,usersCount:v,icons:g,rowIndex:u,canUpdate:B})=>{const{formatMessage:W}=(0,z.c)(),[,L]=g,y=W({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:v});return(0,_.jsxs)(r.Tr,{"aria-rowindex":u,...B?(0,t.on)({fn:L.onClick}):{},children:[(0,_.jsx)(n.Td,{maxWidth:(0,t.W8)(130),children:(0,_.jsx)(e.O,{ellipsis:!0,textColor:"neutral800",children:T})}),(0,_.jsx)(n.Td,{maxWidth:(0,t.W8)(250),children:(0,_.jsx)(e.O,{ellipsis:!0,textColor:"neutral800",children:E})}),(0,_.jsx)(n.Td,{children:(0,_.jsx)(e.O,{textColor:"neutral800",children:y})}),(0,_.jsx)(n.Td,{children:(0,_.jsx)(c.C,{justifyContent:"flex-end",...t.Ii,children:g.map((d,U)=>d?(0,_.jsx)(h.k,{paddingLeft:U===0?0:1,children:(0,_.jsx)(P.w,{onClick:d.onClick,label:d.label,borderWidth:0,icon:d.icon})},d.label):null)})})]},a)},q=()=>{const{formatMessage:a}=(0,z.c)();(0,t.G0)();const T=(0,G.f)(V.s),{formatAPIError:E}=(0,t.An)(),v=(0,t.eo)(),[g,u]=i.useState(!1),[{query:B}]=(0,t.WK)(),{isLoading:W,allowedActions:{canCreate:L,canDelete:y,canRead:d,canUpdate:U}}=(0,t.aU)(T.settings?.roles),{roles:Q,refetch:as}=(0,k.u)({filters:B?._q?{name:{$containsi:B._q}}:void 0},{cacheTime:0,enabled:!W&&d}),{push:p}=(0,b.Uz)(),[{showModalConfirmButtonLoading:os,roleToDelete:ns},$]=i.useReducer(_s,ss),{post:Es}=(0,t.YF)(),ls=async()=>{try{$({type:"ON_REMOVE_ROLES"}),await Es("/admin/roles/batch-delete",{ids:[ns]}),await as(),$({type:"RESET_DATA_TO_DELETE"})}catch(o){o instanceof J.Uh&&v({type:"warning",message:E(o)})}S()},Y=()=>p("/settings/roles/new"),S=()=>u(o=>!o),es=o=>M=>{M.preventDefault(),M.stopPropagation(),o.usersCount?v({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):($({type:"SET_ROLE_TO_DELETE",id:o.id}),S())},ds=o=>M=>{M.preventDefault(),M.stopPropagation(),p(`/settings/roles/duplicate/${o.id}`)},is=Q.length+1,rs=6;return W?(0,_.jsx)(D.G,{children:(0,_.jsx)(t.Wm,{})}):(0,_.jsxs)(D.G,{children:[(0,_.jsx)(t.K8,{name:"Roles"}),(0,_.jsx)(l.a,{primaryAction:L?(0,_.jsx)(R.Z,{onClick:Y,startIcon:(0,_.jsx)(A.c,{}),size:"S",children:a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:a({id:"global.roles",defaultMessage:"roles"}),subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),d&&(0,_.jsx)(C.U,{startActions:(0,_.jsx)(t.w9,{label:a({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:a({id:"global.roles",defaultMessage:"roles"})})})}),d&&(0,_.jsx)(O.S,{children:(0,_.jsxs)(I.o,{colCount:rs,rowCount:is,footer:L?(0,_.jsx)(K.U,{onClick:Y,icon:(0,_.jsx)(A.c,{}),children:a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,_.jsx)(x.o,{children:(0,_.jsxs)(r.Tr,{"aria-rowindex":1,children:[(0,_.jsx)(n.Th,{children:(0,_.jsx)(e.O,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,_.jsx)(n.Th,{children:(0,_.jsx)(e.O,{variant:"sigma",textColor:"neutral600",children:a({id:"global.description",defaultMessage:"Description"})})}),(0,_.jsx)(n.Th,{children:(0,_.jsx)(e.O,{variant:"sigma",textColor:"neutral600",children:a({id:"global.users",defaultMessage:"Users"})})}),(0,_.jsx)(n.Th,{children:(0,_.jsx)(f.K,{children:a({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,_.jsx)(F.K,{children:Q?.map((o,M)=>(0,_.jsx)(w,{id:o.id,name:o.name,description:o.description,usersCount:o.usersCount,icons:[L&&{onClick:ds(o),label:a({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,_.jsx)(j.c,{})},U&&{onClick:()=>p(`/settings/roles/${o.id}`),label:a({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,_.jsx)(Z.c,{})},y&&{onClick:es(o),label:a({id:"global.delete",defaultMessage:"Delete"}),icon:(0,_.jsx)(H.c,{})}].filter(Boolean),rowIndex:M+2,canUpdate:U},o.id))})]})}),(0,_.jsx)(t.cz,{isOpen:g,onConfirm:ls,isConfirmButtonLoading:os,onToggleDialog:S})]})},ss={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(a,T)=>(0,X.cp)(a,E=>{switch(T.type){case"ON_REMOVE_ROLES":{E.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{E.shouldRefetchData=!0,E.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{E.shouldRefetchData=!1,E.roleToDelete=null,E.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{E.roleToDelete=T.id;break}default:return E}}),ts=()=>{const a=(0,G.f)(V.s);return(0,_.jsx)(t.rF,{permissions:a.settings?.roles.main,children:(0,_.jsx)(q,{})})}},68940:(N,m,s)=>{s.d(m,{u:()=>e});var _=s(62552),i=s(71812),r=s(14632),n=s(48632);const e=(c={},h={})=>{const{id:P="",...D}=c,{get:l}=(0,i.Qn)(),{locale:R}=(0,r.c)(),C=(0,i.In)(R,{sensitivity:"base"}),{data:O,error:I,isError:K,isLoading:x,refetch:f}=(0,n.useQuery)(["roles",P,D],async()=>{const{data:t}=await l(`/admin/roles/${P??""}`,{params:D});return t},h);return{roles:_.useMemo(()=>{let t=[];return O&&(Array.isArray(O.data)?t=O.data:t=[O.data]),[...t].sort((A,j)=>C.compare(A.name,j.name))},[O,C]),error:I,isError:K,isLoading:x,refetch:f}}},33147:(N,m,s)=>{s.d(m,{U:()=>D});var _=s(19968),i=s(69372),r=s(84664),n=s(23667),e=s(1560),c=s(65080);const h=(0,i.default)(r.k)`
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
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,P=(0,i.default)(r.k)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,D=({children:l,icon:R,...C})=>(0,_.jsxs)("div",{children:[(0,_.jsx)(n.c,{}),(0,_.jsx)(P,{as:"button",background:"primary100",padding:5,...C,children:(0,_.jsxs)(e.C,{children:[(0,_.jsx)(h,{"aria-hidden":!0,background:"primary200",children:R}),(0,_.jsx)(r.k,{paddingLeft:3,children:(0,_.jsx)(c.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
