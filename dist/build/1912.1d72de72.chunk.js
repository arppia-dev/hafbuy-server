"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[1912],{49764:(q,T,s)=>{s.d(T,{F:()=>M});var t=s(19968),l=s(62552),c=s(84664),P=s(51772),h=s(71812),d=s(89456),_=s(14632);const M=({displayedFilters:m})=>{const[O,f]=l.useState(!1),{formatMessage:p}=(0,_.c)(),A=l.useRef(null),R=()=>{f(I=>!I)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.k,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(P.Z,{variant:"tertiary",ref:A,startIcon:(0,t.jsx)(d.c,{}),onClick:R,size:"S",children:p({id:"app.utils.filters",defaultMessage:"Filters"})}),O&&(0,t.jsx)(h.SI,{displayedFilters:m,isVisible:O,onToggle:R,source:A})]}),(0,t.jsx)(h.aW,{filtersSchema:m})]})}},71912:(q,T,s)=>{s.d(T,{C:()=>_s,ProtectedListPage:()=>Rs});var t=s(19968),l=s(62552),c=s(51772),P=s(58224),h=s(19112),d=s(28200),_=s(1560),M=s(84664),m=s(65080),O=s(23128),f=s(11360),p=s(5272),A=s(35560),R=s(69856),I=s(20592),Z=s(59172),B=s(62680),u=s(8612),K=s(37272),H=s(29296),G=s(41868),e=s(71812),J=s(12132),C=s(14632),X=s(48632),ss=s(70516),ts=s(49008),y=s(38188),r=s(9252),ms=s(49764),cs=s(77332),Ms=s(22224),Os=s(25876),Ds=s(2408),gs=s(47900),Ps=s(78164),hs=s(31812),k=s(52540),ls=s(22856),ys=s(54320),js=s(5240),ps=s(91892),Ks=s(36196),Ws=s(20880),Ss=s(21424),Fs=s(18424),bs=s(21968),Qs=s(85676),Ns=s(35184),$s=s(99568),zs=s(96556),Vs=s(13192),Ys=s(30840),Zs=s(77784),Hs=s(79371),Gs=s(67888),Js=s(52600),Xs=s(95752),ks=s(37388),ws=s(61840),qs=s(49108),st=s(44632),tt=s(50840),et=s(20252),at=s(86432),nt=s(22612),it=s(24808),ot=s(24024),lt=s(33656),rt=s(43280),dt=s(79804),_t=s(19632),Et=s(29576),mt=s(61152),ct=s(9589),Mt=s(45488),Ot=s(75516),Dt=s(17892),gt=s(31212);const Cs=({onClick:n})=>{const{formatMessage:E}=(0,C.c)();return(0,t.jsx)(c.Z,{onClick:n,startIcon:(0,t.jsx)(cs.c,{}),size:"S",children:E({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},fs=({onSuccess:n,onToggle:E})=>{const[v,$]=l.useState("create"),[W,z]=l.useState(!1),[S,j]=l.useState(""),{formatMessage:D}=(0,C.c)(),F=(0,e.eo)(),{lockApp:g,unlockApp:a}=(0,e.H6)(),{post:V}=(0,e.Qn)(),{formatAPIError:U}=(0,e.An)(),Y=(0,y.j)(As,async()=>(await s.e(1120).then(s.bind(s,41120))).ROLE_LAYOUT,{combine(o,x){return[...o,...x]},defaultValue:[]}),b=(0,y.j)(rs,async()=>(await s.e(1120).then(s.bind(s,41120))).FORM_INITIAL_VALUES,{combine(o,x){return{...o,...x}},defaultValue:rs}),Q=(0,y.j)(ls.M,async()=>(await s.e(4016).then(s.bind(s,14016))).MagicLinkEE),es=(0,X.useMutation)(o=>V("/admin/users",o),{onMutate(){g&&g(),z(!0)},async onSuccess({data:{data:o}}){o.registrationToken?(j(o.registrationToken),await n(),is()):F({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},onError(o){throw F({type:"warning",message:U(o)}),o},onSettled(){a&&a(),z(!1)}}),as=D({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ns=async(o,{setErrors:x})=>{try{await es.mutateAsync({...o,roles:o.roles??[]})}catch(N){N instanceof Ps.Uh&&N.response?.data?.error.message==="Email already taken"&&x({email:N.response.data.error.message})}},is=()=>{Es?$(Es):E()},{buttonSubmitLabel:w,isDisabled:i,next:Es}=Ls[v],Bs=v==="create"?(0,t.jsx)(c.Z,{type:"submit",loading:W,children:D(w)}):(0,t.jsx)(c.Z,{type:"button",loading:W,onClick:E,children:D(w)});return Q?(0,t.jsxs)(P.E,{onClose:E,labelledBy:"title",children:[(0,t.jsx)(h.k,{children:(0,t.jsx)(Ds.M,{label:as,children:(0,t.jsx)(gs.i,{isCurrent:!0,children:as})})}),(0,t.jsx)(hs.QJ,{enableReinitialize:!0,initialValues:b??{},onSubmit:ns,validationSchema:vs,validateOnChange:!1,children:({errors:o,handleChange:x,values:N})=>(0,t.jsxs)(e.QF,{children:[(0,t.jsx)(d.a,{children:(0,t.jsxs)(_.C,{direction:"column",alignItems:"stretch",gap:6,children:[v!=="create"&&(0,t.jsx)(Q,{registrationToken:S}),(0,t.jsxs)(M.k,{children:[(0,t.jsx)(m.O,{variant:"beta",as:"h2",children:D({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(M.k,{paddingTop:4,children:(0,t.jsx)(_.C,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(O.y,{gap:5,children:us.map(os=>os.map(L=>(0,t.jsx)(f.C,{...L.size,children:(0,t.jsx)(e.u,{...L,disabled:i,error:o[L.name],onChange:x,value:N[L.name]})},L.name)))})})})]}),(0,t.jsxs)(M.k,{children:[(0,t.jsx)(m.O,{variant:"beta",as:"h2",children:D({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(M.k,{paddingTop:4,children:(0,t.jsxs)(O.y,{gap:5,children:[(0,t.jsx)(f.C,{col:6,xs:12,children:(0,t.jsx)(ls.S,{disabled:i,error:o.roles,onChange:x,value:N.roles??[]})}),Y.map(os=>os.map(L=>(0,t.jsx)(f.C,{...L.size,children:(0,t.jsx)(e.u,{...L,disabled:i,onChange:x,value:N[L.name]})},L.name)))]})})]})]})}),(0,t.jsx)(p._,{startActions:(0,t.jsx)(c.Z,{variant:"tertiary",onClick:E,type:"button",children:D({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:Bs})]})})]}):null},rs={firstname:"",lastname:"",email:"",roles:[]},As=[],us=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],vs=k.kt().shape({firstname:k.Qb().trim().required(e.aO.required),lastname:k.Qb(),email:k.Qb().email(e.aO.email).required(e.aO.required),roles:k.M$().min(1,e.aO.required).required(e.aO.required)}),Ls={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Ts=({canDelete:n,headers:E=[],entriesToDelete:v=[],onClickDelete:$,onSelectRow:W,withMainAction:z,withBulkActions:S,rows:j=[]})=>{const{push:D,location:{pathname:F}}=(0,ts.Uz)(),{formatMessage:g}=(0,C.c)();return(0,t.jsx)(A.K,{children:j.map(a=>{const V=v.findIndex(U=>U===a.id)!==-1;return(0,t.jsxs)(R.Tr,{...(0,e.on)({fn:()=>D(`${F}/${a.id}`),condition:S}),children:[z&&(0,t.jsx)(I.Td,{...e.Ii,children:(0,t.jsx)(Z.c,{"aria-label":g({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,r.g)(a?.firstname??"",a.lastname)}),checked:V,onChange:()=>{W&&W({name:a.id,value:!V})}})}),E.map(({key:U,cellFormatter:Y,name:b,...Q})=>(0,t.jsx)(I.Td,{children:typeof Y=="function"?Y(a,{key:U,name:b,formatMessage:g,...Q}):(0,t.jsx)(m.O,{textColor:"neutral800",children:a[b]||"-"})},U)),S&&(0,t.jsx)(I.Td,{children:(0,t.jsxs)(_.C,{justifyContent:"end",children:[(0,t.jsx)(B.w,{onClick:()=>D(`${F}/${a.id}`),label:g({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,r.g)(a.firstname??"",a.lastname)}),noBorder:!0,icon:(0,t.jsx)(Ms.c,{})}),n&&(0,t.jsx)(M.k,{paddingLeft:1,...e.Ii,children:(0,t.jsx)(B.w,{onClick:()=>{$&&$(a.id)},label:g({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,r.g)(a.firstname??"",a.lastname)}),noBorder:!0,icon:(0,t.jsx)(Os.c,{})})})]})})]},a.id)})})},ds=["ee","license-limit-info"],_s=()=>{const{post:n}=(0,e.Qn)(),{formatAPIError:E}=(0,e.An)(),[v,$]=l.useState(!1),W=(0,ss.w1)(r.s),{allowedActions:{canCreate:z,canDelete:S,canRead:j}}=(0,e.aU)(W.settings?.users),D=(0,X.useQueryClient)(),F=(0,e.eo)(),{formatMessage:g}=(0,C.c)(),{search:a}=(0,ts.IT)();(0,e.G0)();const{users:V,pagination:U,isError:Y,isLoading:b,refetch:Q}=(0,y.g)(J.parse(a,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:j}),es=(0,y.j)(Cs,async()=>(await s.e(3540).then(s.bind(s,83540))).CreateActionEE),as=Is.map(i=>({...i,metadatas:{...i.metadatas,label:g(i.metadatas.label)}})),ns=g({id:"global.users",defaultMessage:"Users"}),is=()=>{$(i=>!i)},w=(0,X.useMutation)(async i=>n("/admin/users/batch-delete",{ids:i}),{async onSuccess(){await Q(),await D.refetchQueries(ds)},onError(i){F({type:"warning",message:E(i)})}});return es?(0,t.jsxs)(u.G,{"aria-busy":b,children:[(0,t.jsx)(e.K8,{name:"Users"}),(0,t.jsx)(K.a,{primaryAction:z&&(0,t.jsx)(es,{onClick:is}),title:ns,subtitle:g({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),j&&(0,t.jsx)(H.U,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.w9,{label:g({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ns})}),(0,t.jsx)(ms.F,{displayedFilters:Us})]})}),(0,t.jsxs)(G.S,{children:[!j&&(0,t.jsx)(e.o5,{}),Y&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),j&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.AL,{contentType:"Users",isLoading:b,onConfirmDeleteAll:async i=>{await w.mutateAsync(i)},onConfirmDelete:async i=>{await w.mutateAsync([i])},headers:as,rows:V,withBulkActions:!0,withMainAction:S,children:(0,t.jsx)(Ts,{canDelete:S})}),U&&(0,t.jsx)(M.k,{paddingTop:4,children:(0,t.jsxs)(_.C,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e.A7,{}),(0,t.jsx)(e.cZ,{pagination:U})]})})]})]}),v&&(0,t.jsx)(fs,{onSuccess:async()=>{await Q(),await D.refetchQueries(ds)},onToggle:is})]}):null},Is=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:n},{formatMessage:E}){return(0,t.jsx)(m.O,{textColor:"neutral800",children:n.map(v=>E({id:`Settings.permissions.users.${v.code}`,defaultMessage:v.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:n},{formatMessage:E}){return(0,t.jsxs)(_.C,{children:[(0,t.jsx)(e.sD,{variant:n?"success":"danger"}),(0,t.jsx)(m.O,{textColor:"neutral800",children:E({id:n?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:n?"Active":"Inactive"})})]})}}],Us=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xs=()=>{const n=(0,y.j)(_s,async()=>(await s.e(8668).then(s.bind(s,48668))).UserListPageEE);return n?(0,t.jsx)(n,{}):null},Rs=()=>{const n=(0,ss.w1)(r.s);return(0,t.jsx)(e.rF,{permissions:n.settings?.users.main,children:(0,t.jsx)(xs,{})})}},22856:(q,T,s)=>{s.d(T,{M:()=>p,S:()=>A,a:()=>f});var t=s(19968),l=s(14632),c=s(38188),P=s(62680),h=s(87860),d=s(71812),_=s(58804),M=s(24716),m=s(48632),O=s(69372);const f=({children:B,target:u})=>{const K=(0,d.eo)(),{formatMessage:H}=(0,l.c)(),{copy:G}=(0,d.UC)(),e=H({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),J=async()=>{await G(u)&&K({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(d._y,{endAction:(0,t.jsx)(P.w,{label:e,noBorder:!0,icon:(0,t.jsx)(_.c,{}),onClick:J}),title:u,titleEllipsis:!0,subtitle:B,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},p=({registrationToken:B})=>{const{formatMessage:u}=(0,l.c)(),K=`${window.location.origin}${(0,c.p)()}/auth/register?registrationToken=${B}`;return(0,t.jsx)(f,{target:K,children:u({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},A=({disabled:B,error:u,onChange:K,value:H})=>{const{get:G}=(0,d.Qn)(),{isLoading:e,data:J}=(0,m.useQuery)(["roles"],async()=>{const{data:{data:r}}=await G("/admin/roles");return r},{staleTime:5e4}),{formatMessage:C}=(0,l.c)(),X=u?C({id:u,defaultMessage:u}):"",ss=C({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),ts=C({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),y=C({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(h.e,{id:"roles",disabled:B,error:X,hint:ts,label:ss,name:"roles",onChange:r=>{K({target:{name:"roles",value:r}})},placeholder:y,startIcon:e?(0,t.jsx)(Z,{}):void 0,value:H.map(r=>r.toString()),withTags:!0,required:!0,children:(J??[]).map(r=>(0,t.jsx)(h.eI,{value:r.id.toString(),children:C({id:`global.${r.code}`,defaultMessage:r.name})},r.id))})},R=(0,O.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,I=O.default.div`
  animation: ${R} 2s infinite linear;
`,Z=()=>(0,t.jsx)(I,{children:(0,t.jsx)(M.c,{})})},2408:(q,T,s)=>{s.d(T,{M:()=>m});var t=s(19968),l=s(62552),c=s(69372),P=s(84664),h=s(65080);const d=()=>(0,t.jsx)(P.k,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(h.O,{variant:"pi",textColor:"neutral500",children:"/"})});d.displayName="Divider";var _=s(1560);const M=(0,c.default)(_.C)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:O})=>`calc(-1*${O.spaces[2]})`};
  }
`,m=({label:O,children:f,...p})=>{const A=l.Children.toArray(f);return(0,t.jsx)(P.k,{"aria-label":O,...p,children:(0,t.jsx)(M,{as:"ol",children:l.Children.map(A,(R,I)=>{const Z=A.length>1&&I+1<A.length;return(0,t.jsxs)(_.C,{inline:!0,as:"li",children:[R,Z&&(0,t.jsx)(d,{})]})})})})};m.displayName="Breadcrumbs"},47900:(q,T,s)=>{s.d(T,{i:()=>P});var t=s(19968),l=s(84664),c=s(65080);const P=({children:h,isCurrent:d=!1,..._})=>(0,t.jsx)(l.k,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(c.O,{variant:"pi",textColor:"neutral800",fontWeight:d?"bold":"normal","aria-current":d,..._,children:h})});P.displayName="Crumb"}}]);
