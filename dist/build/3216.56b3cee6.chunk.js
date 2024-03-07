"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[3216],{3216:(j,m,s)=>{s.d(m,{ProtectedSSO:()=>H});var t=s(19968),E=s(66040),i=s(8612),P=s(37272),D=s(51772),T=s(41868),U=s(1560),A=s(65080),h=s(23128),L=s(11360),B=s(42080),C=s(10172),r=s(8472),I=s(87860),o=s(71812),K=s(18520),W=s(78164),x=s(31812),M=s(14632),f=s(48632),u=s(70516),v=s(52540),z=s(68940),p=s(9252),G=s(71944),es=s(62552),ns=s(17892),ls=s(31212),ds=s(38188),Es=s(54320),is=s(5240),rs=s(91892),Ms=s(36196),Os=s(20880),Ps=s(21424),Ds=s(18424),gs=s(21968),Rs=s(12132),cs=s(85676),ms=s(35184),Ls=s(99568),vs=s(96556),As=s(13192),hs=s(30840),Cs=s(77784),Is=s(79371),fs=s(67888),us=s(52600),Ts=s(95752),Us=s(37388),Bs=s(61840),Ks=s(49108),Ws=s(44632),ys=s(50840),Ss=s(20252),js=s(86432),xs=s(22612),ps=s(24808),Qs=s(24024),Fs=s(33656),Ns=s(43280),zs=s(79804),Gs=s(19632),Vs=s(29576),$s=s(61152),Hs=s(9589),Js=s(45488),Zs=s(75516);const V=v.kt().shape({autoRegister:v.SK().required(o.aO.required),defaultRole:v.Er().when("autoRegister",(a,l)=>a?l.required(o.aO.required):l.nullable()),ssoLockedRoles:v.M$().nullable().of(v.Er().when("ssoLockedRoles",(a,l)=>a?l.required(o.aO.required):l.nullable()))}),$=()=>{(0,o.G0)();const{formatMessage:a}=(0,M.c)(),l=(0,u.w1)(p.s),{lockApp:J,unlockApp:Z}=(0,o.H6)(),y=(0,o.eo)(),{formatAPIError:X}=(0,o.An)(),{get:Y,put:b}=(0,o.Qn)(),{isLoading:k,data:w}=(0,f.useQuery)(["providers","options"],async()=>{const{data:n}=await Y("/admin/providers/options");return n.data},{onError(){y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Q=(0,f.useMutation)(async n=>{const{autoRegister:g,defaultRole:O,ssoLockedRoles:e}=n,{data:R}=await b("/admin/providers/options",{autoRegister:g,defaultRole:O,ssoLockedRoles:e});return R.data},{async onSettled(){Z()}}),{isLoading:q,allowedActions:{canUpdate:S,canReadRoles:ss}}=(0,o.aU)({...l.settings?.sso,readRoles:l.settings?.roles.read??[]}),{roles:F,isLoading:ts}=(0,z.u)(void 0,{enabled:ss}),as=async(n,{resetForm:g,setErrors:O})=>{J(),Q.mutate(n,{onSuccess(e){g({values:e}),y({type:"success",message:{id:"notification.success.saved"}})},onError(e){if(e instanceof W.Uh&&e.response){const R=(0,G.f)(e.response.data),d=Object.keys(R).reduce((_,c)=>(_[c]=R[c].id,_),{});O(d),y({type:"warning",message:X(e)})}}})},{isLoading:os}=Q,_s={autoRegister:!1,defaultRole:null,ssoLockedRoles:null},N=ts||q||k;return(0,t.jsxs)(E._,{children:[(0,t.jsx)(o.K8,{name:"SSO"}),(0,t.jsx)(i.G,{"aria-busy":os||N,tabIndex:-1,children:(0,t.jsx)(x.QJ,{onSubmit:as,initialValues:w||_s,validationSchema:V,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:n,isSubmitting:g,values:O,setFieldValue:e,dirty:R,errors:d})=>(0,t.jsxs)(o.QF,{children:[(0,t.jsx)(P.a,{primaryAction:(0,t.jsx)(D.Z,{"data-testid":"save-button",disabled:!R,loading:g,startIcon:(0,t.jsx)(K.c,{}),type:"submit",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(T.S,{children:g||N?(0,t.jsx)(o.Wm,{}):(0,t.jsxs)(U.C,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(A.O,{variant:"delta",as:"h2",children:a({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(h.y,{gap:4,children:[(0,t.jsx)(L.C,{col:6,s:12,children:(0,t.jsx)(B.a,{"data-testid":"autoRegister",disabled:!S,checked:O.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:n})}),(0,t.jsx)(L.C,{col:6,s:12,children:(0,t.jsx)(C.M,{disabled:!S,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:d.defaultRole?a({id:d.defaultRole,defaultMessage:d.defaultRole}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:_=>n({target:{name:"defaultRole",value:_}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:O.defaultRole,children:F.map(({id:_,name:c})=>(0,t.jsx)(r.c,{value:_.toString(),children:c},_))})}),(0,t.jsx)(L.C,{col:6,s:12,children:(0,t.jsx)(I.e,{disabled:!S,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:d.ssoLockedRoles?a({id:d.ssoLockedRoles,defaultMessage:d.ssoLockedRoles}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:_=>n({target:{value:_,name:"ssoLockedRoles"}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>e("ssoLockedRoles",[]),value:O.ssoLockedRoles||[],withTags:!0,children:F.map(({id:_,name:c})=>(0,t.jsx)(I.eI,{value:_.toString(),children:c},_))})})]})]})})]})})})]})},H=()=>{const a=(0,u.w1)(p.s);return(0,t.jsx)(o.rF,{permissions:a.settings?.sso?.main,children:(0,t.jsx)($,{})})}},71944:(j,m,s)=>{s.d(m,{f:()=>t});const t=({data:E})=>{try{return Object.keys(E).reduce((i,P)=>{const D=E[P][0];return i[P]={id:D,defaultMessage:D},i},{})}catch{return{}}}},68940:(j,m,s)=>{s.d(m,{u:()=>D});var t=s(62552),E=s(71812),i=s(14632),P=s(48632);const D=(T={},U={})=>{const{id:A="",...h}=T,{get:L}=(0,E.Qn)(),{locale:B}=(0,i.c)(),C=(0,E.In)(B,{sensitivity:"base"}),{data:r,error:I,isError:o,isLoading:K,refetch:W}=(0,P.useQuery)(["roles",A,h],async()=>{const{data:M}=await L(`/admin/roles/${A??""}`,{params:h});return M},U);return{roles:t.useMemo(()=>{let M=[];return r&&(Array.isArray(r.data)?M=r.data:M=[r.data]),[...M].sort((f,u)=>C.compare(f.name,u.name))},[r,C]),error:I,isError:o,isLoading:K,refetch:W}}}}]);