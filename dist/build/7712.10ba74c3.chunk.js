"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[7712],{7712:(ns,L,s)=>{s.d(L,{ProtectedCreatePage:()=>G});var t=s(19968),O=s(62552),B=s(8612),I=s(37272),l=s(1560),m=s(51772),T=s(41868),E=s(84664),C=s(65080),U=s(23128),h=s(11360),W=s(49780),K=s(74928),f=s(46928),o=s(71812),j=s(31952),x=s(61748),y=s(31812),u=s(79804),p=s(14632),S=s(48632),$=s(70516),v=s(49008),N=s(39380),F=s(69372),M=s(52540),Q=s(9252),R=s(20672),is=s(17892),Es=s(31212),ds=s(38188),es=s(54320),ls=s(5240),rs=s(91892),Ms=s(36196),Ps=s(20880),Ds=s(21424),Os=s(18424),ms=s(21968),Cs=s(12132),hs=s(85676),vs=s(35184),Rs=s(99568),gs=s(96556),cs=s(13192),As=s(30840),Ls=s(77784),Bs=s(79371),Is=s(67888),Ts=s(52600),Us=s(95752),Ws=s(37388),Ks=s(61840),fs=s(49108),js=s(44632),xs=s(50840),ys=s(20252),us=s(86432),ps=s(22612),Ss=s(24808),$s=s(24024),Ns=s(33656),Fs=s(43280),Qs=s(19632),zs=s(29576),Hs=s(61152),Zs=s(9589),Gs=s(45488),Js=s(75516),Vs=s(56781),Xs=s(30680);const z=M.kt().shape({name:M.Qb().required(o.aO.required),description:M.Qb().required(o.aO.required)}),H=()=>{const a=(0,v.SU)("/settings/roles/duplicate/:id"),g=(0,o.eo)(),{lockApp:J,unlockApp:V}=(0,o.H6)(),{formatMessage:_}=(0,p.c)(),[X,P]=O.useState(!1),{replace:Y}=(0,v.Uz)(),D=O.useRef(null),{trackUsage:r}=(0,o.m4)(),{post:b,put:k,get:w}=(0,o.Qn)(),d=a?.params.id??null,{isLoading:q,data:c}=(0,S.useQuery)(["permissions",d],async()=>{const{data:{data:e}}=await w("/admin/permissions",{params:{role:d}});return e},{cacheTime:0}),{permissions:ss,isLoading:ts}=(0,R.u)({id:d},{cacheTime:0,enabled:!!d}),as=e=>{J?.(),P(!0),r(d?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(b("/admin/roles",e)).then(async({data:n})=>{const{permissionsToSend:i}=D.current?.getPermissions()??{};return r(d?"didDuplicateRole":"didCreateNewRole"),n.data.id&&!u(i)&&await k(`/admin/roles/${n.data.id}/permissions`,{permissions:i}),n}).then(n=>{P(!1),g({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),Y(`/settings/roles/${n.data.id}`)}).catch(n=>{console.error(n),P(!1),g({type:"warning",message:{id:"notification.error"}})}).finally(()=>{V?.()})},_s=`${_({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,x.c)(new Date,"PPP")}`;return(0,t.jsxs)(B.G,{children:[(0,t.jsx)(o.K8,{name:"Roles"}),(0,t.jsx)(y.QJ,{initialValues:{name:"",description:_s},onSubmit:as,validationSchema:z,validateOnChange:!1,children:({handleSubmit:e,values:n,errors:i,handleReset:os,handleChange:A})=>(0,t.jsx)(o.QF,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.a,{primaryAction:(0,t.jsxs)(l.C,{gap:2,children:[(0,t.jsx)(m.Z,{variant:"secondary",onClick:()=>{os(),D.current?.resetForm()},size:"L",children:_({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,t.jsx)(m.Z,{onClick:e,loading:X,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})]}),title:_({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(f.c,{as:N.NavLink,startIcon:(0,t.jsx)(j.c,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.S,{children:(0,t.jsxs)(l.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(E.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(l.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(l.C,{justifyContent:"space-between",children:[(0,t.jsxs)(E.k,{children:[(0,t.jsx)(E.k,{children:(0,t.jsx)(C.O,{fontWeight:"bold",children:_({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(E.k,{children:(0,t.jsx)(C.O,{variant:"pi",textColor:"neutral600",children:_({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(Z,{children:_({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,t.jsxs)(U.y,{gap:4,children:[(0,t.jsx)(h.C,{col:6,children:(0,t.jsx)(W.g,{name:"name",error:i.name&&_({id:i.name}),label:_({id:"global.name",defaultMessage:"Name"}),onChange:A,required:!0,value:n.name})}),(0,t.jsx)(h.C,{col:6,children:(0,t.jsx)(K.A,{label:_({id:"global.description",defaultMessage:"Description"}),id:"description",error:i.description&&_({id:i.description}),onChange:A,children:n.description})})]})]})}),!q&&!ts&&c?(0,t.jsx)(E.k,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(R.P,{isFormDisabled:!1,ref:D,permissions:ss,layout:c})}):(0,t.jsx)(E.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Wm,{})})]})})]})})})]})},Z=F.default.div`
  border: 1px solid ${({theme:a})=>a.colors.primary200};
  background: ${({theme:a})=>a.colors.primary100};
  padding: ${({theme:a})=>`${a.spaces[2]} ${a.spaces[4]}`};
  color: ${({theme:a})=>a.colors.primary600};
  border-radius: ${({theme:a})=>a.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,G=()=>{const a=(0,$.w1)(Q.s);return(0,t.jsx)(o.rF,{permissions:a.settings?.roles.create,children:(0,t.jsx)(H,{})})}}}]);
