"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[6980,4869],{76980:(Z,g,s)=>{s.d(g,{ProtectedCreateView:()=>G});var _=s(19968),I=s(71812),U=s(70516),K=s(9252),R=s(74869),j=s(62552),x=s(48632),S=s(17892),l=s(31212),p=s(38188),u=s(54320),a=s(5240),N=s(91892),B=s(36196),F=s(20880),f=s(21424),V=s(31812),c=s(18424),W=s(52540),M=s(21968),y=s(12132),Q=s(85676),T=s(35184),d=s(99568),X=s(96556),k=s(13192),w=s(30840),b=s(77784),q=s(79371),ss=s(67888),_s=s(52600),ts=s(95752),as=s(37388),ns=s(61840),Es=s(49108),os=s(44632),es=s(50840),rs=s(20252),is=s(86432),ds=s(22612),Ms=s(24808),Ps=s(24024),Os=s(33656),Ds=s(43280),ls=s(79804),Ts=s(19632),ms=s(29576),vs=s(61152),As=s(9589),Cs=s(45488),Ls=s(75516),Is=s(98790);const G=()=>{const z=(0,U.w1)(K.s);return(0,_.jsx)(I.rF,{permissions:z.settings?.["transfer-tokens"].create,children:(0,_.jsx)(R.M,{})})}},74869:(Z,g,s)=>{s.d(g,{M:()=>Y,ProtectedEditView:()=>Rs});var _=s(19968),I=s(62552),U=s(8612),K=s(41868),R=s(1560),j=s(84664),x=s(65080),S=s(23128),l=s(11360),p=s(37272),u=s(51772),a=s(71812),N=s(18520),B=s(78164),F=s(31812),f=s(14632),V=s(48632),c=s(70516),W=s(49008),M=s(52540),y=s(9252),Q=s(71944),T=s(63648),d=s(98790),X=s(17892),k=s(31212),w=s(38188),b=s(54320),q=s(5240),ss=s(91892),_s=s(36196),ts=s(20880),as=s(21424),ns=s(18424),Es=s(21968),os=s(12132),es=s(85676),rs=s(35184),is=s(99568),ds=s(96556),Ms=s(13192),Ps=s(30840),Os=s(77784),Ds=s(79371),ls=s(67888),Ts=s(52600),ms=s(95752),vs=s(37388),As=s(61840),Cs=s(49108),Ls=s(44632),Is=s(50840),G=s(20252),z=s(86432),Fs=s(22612),Vs=s(24808),Qs=s(24024),Gs=s(33656),zs=s(43280),Ys=s(79804),$s=s(19632),Hs=s(29576),Js=s(61152),Zs=s(9589),Xs=s(45488),ks=s(75516);const Us=M.kt().shape({name:M.Qb().max(100).required(a.aO.required),description:M.Qb().nullable(),lifespan:M.CQ().integer().min(0).nullable().defined(a.aO.required),permissions:M.Qb().required(a.aO.required)}),Ks="Name already taken",Y=()=>{(0,a.G0)();const{formatMessage:e}=(0,f.c)(),{lockApp:i,unlockApp:P}=(0,a.H6)(),r=(0,a.eo)(),O=(0,W.Uz)(),{state:m}=(0,W.IT)(),[E,v]=I.useState(m&&"accessKey"in m.transferToken?{...m.transferToken}:null),{trackUsage:D}=(0,a.m4)(),{setCurrentStep:Ws}=(0,a.sg)(),hs=(0,c.w1)(y.s),{allowedActions:{canCreate:gs,canUpdate:cs,canRegenerate:ys}}=(0,a.aU)(hs.settings["transfer-tokens"]),js=(0,W.SU)("/settings/transfer-tokens/:id"),{get:xs,post:Ss,put:ps}=(0,a.Qn)(),h=js?.params?.id,o=h==="create",{formatAPIError:$}=(0,a.An)();I.useEffect(()=>{D(o?"didAddTokenFromList":"didEditTokenFromList",{tokenType:T.T})},[o,D]),(0,V.useQuery)(["transfer-token",h],async()=>{const{data:{data:t}}=await xs(`/admin/transfer/tokens/${h}`);return v({...t}),t},{enabled:!o&&!E,onError(t){t instanceof B.Uh&&(t.response.data.error.details?.code==="INVALID_TOKEN_SALT"?r({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):r({type:"warning",message:$(t)}))}});const us=async(t,A)=>{D(o?"willCreateToken":"willEditToken",{tokenType:T.T}),i();const C=t.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(C))try{let n;if(o){const{data:L}=await Ss("/admin/transfer/tokens",{...t,permissions:C});n=L.data}else{const{data:L}=await ps(`/admin/transfer/tokens/${h}`,{name:t.name,description:t.description,permissions:C});n=L.data}P(),o&&(O.replace(`/settings/transfer-tokens/${n.id}`,{transferToken:n}),Ws("transferTokens.success")),v({...n}),r({type:"success",message:e(o?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),D(o?"didCreateToken":"didEditToken",{type:E?.permissions,tokenType:T.T})}catch(n){if(n instanceof B.Uh){const L=(0,Q.f)(n.response.data);A.setErrors(L),n?.response?.data?.error?.message===Ks?r({type:"warning",message:n.response.data.message||"notification.error.tokennamenotunique"}):n?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?r({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):r({type:"warning",message:n?.response?.data?.message||"notification.error"})}P()}},H=cs&&!o||gs&&o;if(!o&&!E)return(0,_.jsx)(fs,{});const Ns=t=>{t instanceof B.Uh&&(t?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?r({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):r({type:"warning",message:$(t)}))};return(0,_.jsxs)(U.G,{children:[(0,_.jsx)(a.K8,{name:"Transfer Tokens"}),(0,_.jsx)(F.QJ,{validationSchema:Us,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan??null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(t,A)=>us(t,A),children:({errors:t,handleChange:A,isSubmitting:C,values:J})=>(0,_.jsxs)(a.QF,{children:[(0,_.jsx)(d.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:v,canEditInputs:H,canRegenerate:ys,isSubmitting:C,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:Ns}),(0,_.jsx)(K.S,{children:(0,_.jsxs)(R.C,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,_.jsx)(d.c,{token:E.accessKey,tokenType:T.T}),(0,_.jsx)(Bs,{errors:t,onChange:A,canEditInputs:H,isCreating:o,values:J,transferToken:E})]})})]})})]})},Rs=()=>{const e=(0,c.w1)(y.s);return(0,_.jsx)(a.rF,{permissions:e.settings?.["transfer-tokens"].read,children:(0,_.jsx)(Y,{})})},Bs=({errors:e={},onChange:i,canEditInputs:P,isCreating:r,values:O,transferToken:m={}})=>{const{formatMessage:E}=(0,f.c)(),v=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,_.jsx)(j.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,_.jsxs)(R.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,_.jsx)(x.O,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,_.jsxs)(S.y,{gap:5,children:[(0,_.jsx)(l.C,{col:6,xs:12,children:(0,_.jsx)(d.T,{error:e.name,value:O.name,canEditInputs:P,onChange:i})},"name"),(0,_.jsx)(l.C,{col:6,xs:12,children:(0,_.jsx)(d.a,{error:e.description,value:O.description,canEditInputs:P,onChange:i})},"description"),(0,_.jsx)(l.C,{col:6,xs:12,children:(0,_.jsx)(d.L,{isCreating:r,error:e.lifespan,value:O.lifespan,onChange:i,token:m})},"lifespan"),(0,_.jsx)(l.C,{col:6,xs:12,children:(0,_.jsx)(d.b,{name:"permissions",value:O.permissions,error:e.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:D=>{i({target:{name:"permissions",value:D}})},options:v,canEditInputs:P})},"permissions")]})]})})},fs=({transferTokenName:e})=>{const{formatMessage:i}=(0,f.c)();return(0,a.G0)(),(0,_.jsxs)(U.G,{"aria-busy":"true",children:[(0,_.jsx)(a.K8,{name:"Transfer Tokens"}),(0,_.jsx)(p.a,{primaryAction:(0,_.jsx)(u.Z,{disabled:!0,startIcon:(0,_.jsx)(N.c,{}),type:"button",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:e||i({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,_.jsx)(K.S,{children:(0,_.jsx)(a.Wm,{})})]})}}}]);