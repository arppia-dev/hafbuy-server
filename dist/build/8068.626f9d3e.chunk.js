(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[8068,4168],{94456:h=>{function I(s,t,c,_){for(var E=c-1,O=s.length;++E<O;)if(_(s[E],t))return E;return-1}h.exports=I},97368:(h,I,s)=>{var t=s(12480),c=s(39024),_=s(94456),E=s(85968),O=s(4288),R=Array.prototype,C=R.splice;function K(u,x,W,G){var z=G?_:c,$=-1,F=x.length,r=u;for(u===x&&(x=O(x)),W&&(r=t(u,E(W)));++$<F;)for(var f=0,V=x[$],L=W?W(V):V;(f=z(r,L,f,G))>-1;)r!==u&&C.call(r,f,1),C.call(u,f,1);return u}h.exports=K},92096:(h,I,s)=>{var t=s(12480),c=s(24020),_=s(22488),E=s(75516);function O(R,C){var K=E(R)?t:_;return K(R,c(C,3))}h.exports=O},39620:(h,I,s)=>{var t=s(41912),c=s(35140),_=t(c);h.exports=_},35140:(h,I,s)=>{var t=s(97368);function c(_,E){return _&&_.length&&E&&E.length?t(_,E):_}h.exports=c},96772:(h,I,s)=>{var t=s(35904);function c(_){var E=_==null?0:_.length;return E?t(_,1,E):[]}h.exports=c},98068:(h,I,s)=>{"use strict";s.d(I,{ProtectedCreateView:()=>cs});var t=s(19968),c=s(71812),_=s(70516),E=s(9252),O=s(54168),R=s(62552),C=s(48632),K=s(17892),u=s(31212),x=s(38188),W=s(54320),G=s(5240),z=s(91892),$=s(36196),F=s(20880),r=s(21424),f=s(31812),V=s(18424),L=s(52540),X=s(21968),b=s(12132),J=s(85676),w=s(35184),as=s(99568),H=s(96556),y=s(13192),os=s(30840),ls=s(77784),is=s(79371),_s=s(67888),ds=s(52600),Q=s(95752),Es=s(37388),j=s(61840),rs=s(49108),q=s(44632),As=s(50840),hs=s(20252),Cs=s(86432),ms=s(22612),Ts=s(24808),gs=s(24024),ps=s(33656),vs=s(43280),Is=s(79804),Ls=s(19632),Rs=s(29576),us=s(61152),Us=s(9589),Bs=s(45488),xs=s(75516),Ws=s(98790),Ks=s(92096),fs=s(96772),ys=s(76683),js=s(39620);const cs=()=>{const Os=(0,_.w1)(E.s);return(0,t.jsx)(c.rF,{permissions:Os.settings?.["api-tokens"].create,children:(0,t.jsx)(O.M,{})})}},54168:(h,I,s)=>{"use strict";s.d(I,{M:()=>Ms,ProtectedEditView:()=>et});var t=s(19968),c=s(62552),_=s(84664),E=s(1560),O=s(65080),R=s(23128),C=s(11360),K=s(8612),u=s(37272),x=s(51772),W=s(41868),G=s(10200),z=s(24211),$=s(40960),F=s(64712),r=s(71812),f=s(78164),V=s(31812),L=s(14632),X=s(48632),b=s(70516),J=s(49008),w=s(9252),as=s(71944),H=s(63648),y=s(98790),os=s(43164),ls=s(18520),is=s(17200),_s=s(92096),ds=s(96772),Q=s(69372),Es=s(76683),j=s(52540),rs=s(29088),q=s(39620),As=s(17892),hs=s(31212),Cs=s(38188),ms=s(54320),Ts=s(5240),gs=s(91892),ps=s(36196),vs=s(20880),Is=s(21424),Ls=s(18424),Rs=s(21968),us=s(12132),Us=s(85676),Bs=s(35184),xs=s(99568),Ws=s(96556),Ks=s(13192),fs=s(30840),ys=s(77784),js=s(79371),cs=s(67888),Os=s(52600),dt=s(95752),Et=s(37388),rt=s(61840),ct=s(49108),Ot=s(44632),Pt=s(50840),Mt=s(20252),Dt=s(86432),At=s(22612),ht=s(24808),Ct=s(24024),mt=s(33656),Tt=s(43280),gt=s(79804),pt=s(19632),vt=s(29576),It=s(61152),Lt=s(9589),Rt=s(45488),ut=s(75516);const[Ss,Ns]=(0,os.G)("ApiTokenPermissionsContext"),Gs=({children:e,...a})=>(0,t.jsx)(Ss,{...a,children:e}),ss=()=>Ns("useApiTokenPermissions"),$s=({errors:e={},onChange:a,canEditInputs:n,isCreating:d,values:o={},apiToken:P={},onDispatch:l,setHasChangedPermissions:U})=>{const{formatMessage:D}=(0,L.c)(),B=({target:{value:p}})=>{U(!1),p==="full-access"&&l({type:"SELECT_ALL_ACTIONS"}),p==="read-only"&&l({type:"ON_CHANGE_READ_ONLY"})},k=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,t.jsx)(_.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(E.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(O.O,{variant:"delta",as:"h2",children:D({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(R.y,{gap:5,children:[(0,t.jsx)(C.C,{col:6,xs:12,children:(0,t.jsx)(y.T,{error:e.name,value:o.name,canEditInputs:n,onChange:a})},"name"),(0,t.jsx)(C.C,{col:6,xs:12,children:(0,t.jsx)(y.a,{error:e.description,value:o.description,canEditInputs:n,onChange:a})},"description"),(0,t.jsx)(C.C,{col:6,xs:12,children:(0,t.jsx)(y.L,{isCreating:d,error:e.lifespan,value:o.lifespan,onChange:a,token:P})},"lifespan"),(0,t.jsx)(C.C,{col:6,xs:12,children:(0,t.jsx)(y.b,{value:o.type,error:e.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:p=>{B({target:{value:p}}),a({target:{name:"type",value:p}})},options:k,canEditInputs:n})},"type")]})]})})},Fs=({apiTokenName:e=null})=>{const{formatMessage:a}=(0,L.c)();return(0,r.G0)(),(0,t.jsxs)(K.G,{"aria-busy":"true",children:[(0,t.jsx)(r.K8,{name:"API Tokens"}),(0,t.jsx)(u.a,{primaryAction:(0,t.jsx)(x.Z,{disabled:!0,startIcon:(0,t.jsx)(ls.c,{}),type:"button",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:e||a({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,t.jsx)(W.S,{children:(0,t.jsx)(r.Wm,{})})]})},Vs=e=>{switch(e){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Hs=(0,Q.default)(_.k)`
  margin: -1px;
  border-radius: ${({theme:e})=>e.spaces[1]} 0 0 ${({theme:e})=>e.spaces[1]};
`,Qs=({route:e={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:a}=(0,L.c)(),{method:n,handler:d,path:o}=e,P=o?ds(o.split("/")):[],[l="",U=""]=d?d.split("."):[],D=Vs(e.method);return(0,t.jsxs)(E.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsxs)(O.O,{variant:"delta",as:"h3",children:[a({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,t.jsx)("span",{children:l}),(0,t.jsxs)(O.O,{variant:"delta",textColor:"primary600",children:[".",U]})]}),(0,t.jsxs)(E.C,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,t.jsx)(Hs,{background:D.background,borderColor:D.border,padding:2,children:(0,t.jsx)(O.O,{fontWeight:"bold",textColor:D.text,children:n})}),(0,t.jsx)(_.k,{paddingLeft:2,paddingRight:2,children:_s(P,B=>(0,t.jsxs)(O.O,{textColor:B.includes(":")?"neutral600":"neutral900",children:["/",B]},B))})]})]})},ks=()=>{const{value:{selectedAction:e,routes:a}}=ss(),{formatMessage:n}=(0,L.c)(),d=e?.split(".")[0];return(0,t.jsx)(C.C,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:e?(0,t.jsx)(E.C,{direction:"column",alignItems:"stretch",gap:2,children:d&&d in a&&a[d].map(o=>o.config.auth?.scope?.includes(e)||o.handler===e?(0,t.jsx)(Qs,{route:o},o.handler):null)}):(0,t.jsxs)(E.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(O.O,{variant:"delta",as:"h3",children:n({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,t.jsx)(O.O,{as:"p",textColor:"neutral600",children:n({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Ps=(0,Q.css)`
  background: ${e=>e.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ys=(0,Q.default)(_.k)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${e=>e.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${e=>e.isActive&&Ps}
  &:hover {
    ${Ps}
  }
`,zs=Q.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Js=({controllers:e=[],label:a,orderNumber:n=0,disabled:d=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:P=null})=>{const{value:{onChangeSelectAll:l,onChange:U,selectedActions:D,setSelectedAction:B,selectedAction:k}}=ss(),[p,Z]=c.useState(!1),{formatMessage:Y}=(0,L.c)(),A=()=>{Z(M=>!M),o(n)};c.useEffect(()=>{P!==null&&P!==n&&p&&Z(!1)},[P,n,p]);const Ds=M=>M===k;return(0,t.jsxs)(G.G,{expanded:p,onToggle:A,variant:n%2?"primary":"secondary",children:[(0,t.jsx)(z.M,{title:Es(a)}),(0,t.jsx)($.u,{children:e?.map(M=>{const S=M.actions.every(m=>D.includes(m.actionId)),ts=M.actions.some(m=>D.includes(m.actionId));return(0,t.jsxs)(_.k,{children:[(0,t.jsxs)(E.C,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,t.jsx)(_.k,{paddingRight:4,children:(0,t.jsx)(O.O,{variant:"sigma",textColor:"neutral600",children:M?.controller})}),(0,t.jsx)(zs,{}),(0,t.jsx)(_.k,{paddingLeft:4,children:(0,t.jsx)(F.y,{value:S,indeterminate:!S&&ts,onValueChange:()=>{l({target:{value:[...M.actions]}})},disabled:d,children:Y({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,t.jsx)(R.y,{gap:4,padding:4,children:M?.actions&&M?.actions.map(m=>(0,t.jsx)(C.C,{col:6,children:(0,t.jsxs)(Ys,{isActive:Ds(m.actionId),padding:2,hasRadius:!0,children:[(0,t.jsx)(F.y,{value:D.includes(m.actionId),name:m.actionId,onValueChange:()=>{U({target:{value:m.actionId}})},disabled:d,children:m.action}),(0,t.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>B({target:{value:m.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,t.jsx)(is.c,{})})]})},m.actionId))})]},`${a}.${M?.controller}`)})})]})},Zs=({section:e=null,...a})=>{const[n,d]=c.useState(null),o=P=>d(P);return(0,t.jsx)(_.k,{padding:4,background:"neutral0",children:e&&e.map((P,l)=>(0,t.jsx)(Js,{label:P.label,controllers:P.controllers,orderNumber:l,indexExpandendCollapsedContent:n,onExpanded:o,...a},P.apiId))})},Xs=({...e})=>{const{value:{data:a}}=ss(),{formatMessage:n}=(0,L.c)();return(0,t.jsxs)(R.y,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,t.jsxs)(C.C,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,t.jsxs)(E.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,t.jsx)(O.O,{variant:"delta",as:"h2",children:n({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,t.jsx)(O.O,{as:"p",textColor:"neutral600",children:n({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),a?.permissions&&(0,t.jsx)(Zs,{section:a?.permissions,...e})]}),(0,t.jsx)(ks,{})]})},bs=j.kt().shape({name:j.Qb().max(100).required(r.aO.required),type:j.Qb().oneOf(["read-only","full-access","custom"]).required(r.aO.required),description:j.Qb().nullable(),lifespan:j.CQ().integer().min(0).nullable().defined(r.aO.required)}),ws=e=>{const a={allActionsIds:[],permissions:[]};return a.permissions=Object.entries(e).map(([n,d])=>({apiId:n,label:n.split("::")[1],controllers:Object.keys(d.controllers).map(o=>({controller:o,actions:o in d.controllers?d.controllers[o].map(P=>{const l=`${n}.${o}.${P}`;return n.includes("api::")&&a.allActionsIds.push(l),{action:P,actionId:l}}).flat():[]})).flat()})),a},qs={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},st=(e,a)=>(0,rs.cp)(e,n=>{switch(a.type){case"ON_CHANGE":{n.selectedActions.includes(a.value)?q(n.selectedActions,a.value):n.selectedActions.push(a.value);break}case"SELECT_ALL_IN_PERMISSION":{a.value.every(o=>n.selectedActions.includes(o.actionId))?a.value.forEach(o=>{q(n.selectedActions,o.actionId)}):a.value.forEach(o=>{n.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{n.selectedActions=[...n.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const d=n.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));n.selectedActions=[...d];break}case"UPDATE_PERMISSIONS_LAYOUT":{n.data=ws(a.value);break}case"UPDATE_ROUTES":{n.routes={...a.value};break}case"UPDATE_PERMISSIONS":{n.selectedActions=[...a.value];break}case"SET_SELECTED_ACTION":{n.selectedAction=a.value;break}default:return n}}),tt="Name already taken",Ms=()=>{(0,r.G0)();const{formatMessage:e}=(0,L.c)(),{lockApp:a,unlockApp:n}=(0,r.H6)(),d=(0,r.eo)(),{state:o}=(0,J.IT)(),P=(0,b.w1)(w.s),[l,U]=c.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:D}=(0,r.m4)(),{setCurrentStep:B}=(0,r.sg)(),{allowedActions:{canCreate:k,canUpdate:p,canRegenerate:Z}}=(0,r.aU)(P.settings?.["api-tokens"]),[Y,A]=c.useReducer(st,qs),M=(0,J.SU)("/settings/api-tokens/:id")?.params?.id,{get:S,post:ts,put:m}=(0,r.Qn)(),nt=(0,J.Uz)(),T=M==="create";(0,X.useQuery)("content-api-permissions",async()=>{await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async i=>{if(i==="/admin/content-api/permissions"){const{data:{data:v}}=await S(i);return A({type:"UPDATE_PERMISSIONS_LAYOUT",value:v}),v}else if(i==="/admin/content-api/routes"){const{data:{data:v}}=await S(i);return A({type:"UPDATE_ROUTES",value:v}),v}})),l&&(l?.type==="read-only"&&A({type:"ON_CHANGE_READ_ONLY"}),l?.type==="full-access"&&A({type:"SELECT_ALL_ACTIONS"}),l?.type==="custom"&&A({type:"UPDATE_PERMISSIONS",value:l?.permissions}))},{onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),c.useEffect(()=>{D(T?"didAddTokenFromList":"didEditTokenFromList",{tokenType:H.A})},[T,D]);const{status:at}=(0,X.useQuery)(["api-token",M],async()=>{const{data:{data:i}}=await S(`/admin/api-tokens/${M}`);return U({...i}),i?.type==="read-only"&&A({type:"ON_CHANGE_READ_ONLY"}),i?.type==="full-access"&&A({type:"SELECT_ALL_ACTIONS"}),i?.type==="custom"&&A({type:"UPDATE_PERMISSIONS",value:i?.permissions}),i},{enabled:!T&&!l,onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ot=async(i,v)=>{D(T?"willCreateToken":"willEditToken",{tokenType:H.A}),a();try{const{data:{data:g}}=T?await ts("/admin/api-tokens",{...i,lifespan:i.lifespan==="0"?parseInt(i.lifespan):null,permissions:i.type==="custom"?Y.selectedActions:null}):await m(`/admin/api-tokens/${M}`,{name:i.name,description:i.description,type:i.type,permissions:i.type==="custom"?Y.selectedActions:null});T&&(nt.replace(`/settings/api-tokens/${g.id}`,{apiToken:g}),B("apiTokens.success")),n(),U({...g}),d({type:"success",message:e(T?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),l?.type&&D(T?"didCreateToken":"didEditToken",{type:l.type,tokenType:H.A})}catch(g){if(g instanceof f.Uh&&g.response){const N=(0,as.f)(g.response.data);v.setErrors(N),g?.response?.data?.error?.message===tt?d({type:"warning",message:g.response.data.message||"notification.error.tokennamenotunique"}):d({type:"warning",message:g?.response?.data?.message||"notification.error"})}n()}},[lt,es]=c.useState(!1),it={...Y,onChange:({target:{value:i}})=>{es(!0),A({type:"ON_CHANGE",value:i})},onChangeSelectAll:({target:{value:i}})=>{es(!0),A({type:"SELECT_ALL_IN_PERMISSION",value:i})},setSelectedAction:({target:{value:i}})=>{A({type:"SET_SELECTED_ACTION",value:i})}},ns=p&&!T||k&&T;return!T&&!l&&at!=="success"?(0,t.jsx)(Fs,{apiTokenName:l?.name}):(0,t.jsx)(Gs,{value:it,children:(0,t.jsxs)(K.G,{children:[(0,t.jsx)(r.K8,{name:"API Tokens"}),(0,t.jsx)(V.QJ,{validationSchema:bs,validateOnChange:!1,initialValues:{name:l?.name||"",description:l?.description||"",type:l?.type,lifespan:l?.lifespan?l.lifespan.toString():l?.lifespan},enableReinitialize:!0,onSubmit:(i,v)=>ot(i,v),children:({errors:i,handleChange:v,isSubmitting:g,values:N,setFieldValue:_t})=>(lt&&N?.type!=="custom"&&_t("type","custom"),(0,t.jsxs)(r.QF,{children:[(0,t.jsx)(y.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:l,setToken:U,canEditInputs:ns,canRegenerate:Z,isSubmitting:g,regenerateUrl:"/admin/api-tokens/"}),(0,t.jsx)(W.S,{children:(0,t.jsxs)(E.C,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(l?.name)&&(0,t.jsx)(y.c,{token:l?.accessKey,tokenType:H.A}),(0,t.jsx)($s,{errors:i,onChange:v,canEditInputs:ns,isCreating:T,values:N,apiToken:l,onDispatch:A,setHasChangedPermissions:es}),(0,t.jsx)(Xs,{disabled:!ns||N?.type==="read-only"||N?.type==="full-access"})]})})]}))})]})})},et=()=>{const e=(0,b.w1)(w.s);return(0,t.jsx)(r.rF,{permissions:e.settings?.["api-tokens"].read,children:(0,t.jsx)(Ms,{})})}}}]);
