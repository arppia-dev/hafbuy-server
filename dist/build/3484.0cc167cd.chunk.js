"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[3484],{85332:(U,D,_)=>{_.d(D,{S:()=>m});var s=_(19968),l=_(23128),n=_(11360),a=_(94656),d=_(1560),h=_(65080),C=_(14632),v=_(39380),i=_(69372);const m=({providers:t,displayAllProviders:r})=>{const{formatMessage:o}=(0,C.c)();return r?(0,s.jsx)(l.y,{gap:4,children:t.map(E=>(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(M,{provider:E})},E.uid))}):t.length>2&&!r?(0,s.jsxs)(l.y,{gap:4,children:[t.slice(0,2).map(E=>(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(M,{provider:E})},E.uid)),(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(a.o,{label:o({id:"global.see-more"}),children:(0,s.jsx)(P,{as:v.Link,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(B,{justifyContent:"center",children:t.map(E=>(0,s.jsx)(M,{provider:E},E.uid))})},B=(0,i.default)(d.C)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:t})=>t.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:t})=>t.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:t})=>t.spaces[2]};
  }
`,M=({provider:t})=>(0,s.jsx)(a.o,{label:t.displayName,children:(0,s.jsx)(P,{href:`${window.strapi.backendURL}/admin/connect/${t.uid}`,children:t.icon?(0,s.jsx)("img",{src:t.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(h.O,{children:t.displayName})})}),P=i.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:t})=>t.colors.neutral600};
`},53484:(U,D,_)=>{_.r(D),_.d(D,{FORMS:()=>W});var s=_(19968),l=_(8612),n=_(84664),a=_(65080),d=_(1560),h=_(33560),C=_(51772),v=_(23667),i=_(46928),m=_(71812),B=_(14632),M=_(48632),P=_(49008),t=_(39380),r=_(69372),o=_(38188),E=_(85332),c=_(54320),j=_(5240),f=_(91892),y=_(36196),e=_(20880),S=_(21424),u=_(62552),$=_(70516),N=_(31812),F=_(18424),z=_(52540),Q=_(21968),G=_(12132),J=_(85676),Y=_(35184),Z=_(99568),H=_(96556),V=_(13192),X=_(30840),p=_(77784),k=_(79371),w=_(67888),b=_(52600),q=_(95752),__=_(37388),s_=_(61840),t_=_(49108),E_=_(44632),n_=_(50840),a_=_(20252),d_=_(86432),o_=_(22612),O_=_(24808),M_=_(24024),P_=_(33656),D_=_(43280),l_=_(79804),i_=_(19632),r_=_(29576),h_=_(61152),C_=_(9589),v_=_(45488),m_=_(75516);const T=()=>{const{push:I}=(0,P.Uz)(),{formatMessage:O}=(0,B.c)(),{get:K}=(0,m.Qn)(),{isLoading:A,data:R=[]}=(0,M.useQuery)(["ee","providers"],async()=>{const{data:x}=await K("/admin/providers");return x},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),g=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!A&&R.length===0?(0,s.jsx)(P.YJ,{to:"/auth/login"}):(0,s.jsx)(o.U,{children:(0,s.jsxs)(l.G,{children:[(0,s.jsxs)(o.d,{children:[(0,s.jsxs)(o.C,{children:[(0,s.jsx)(o.e,{}),(0,s.jsx)(n.k,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(a.O,{as:"h1",variant:"alpha",children:O({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(n.k,{paddingBottom:7,children:(0,s.jsx)(a.O,{variant:"epsilon",textColor:"neutral600",children:O({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.C,{direction:"column",alignItems:"stretch",gap:7,children:[A?(0,s.jsx)(d.C,{justifyContent:"center",children:(0,s.jsx)(h.c,{children:O({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(E.S,{providers:R}),(0,s.jsxs)(d.C,{children:[(0,s.jsx)(L,{}),(0,s.jsx)(n.k,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(a.O,{variant:"sigma",textColor:"neutral600",children:O({id:"or"})})}),(0,s.jsx)(L,{})]}),(0,s.jsx)(C.Z,{fullWidth:!0,size:"L",onClick:g,children:O({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.C,{justifyContent:"center",children:(0,s.jsx)(n.k,{paddingTop:4,children:(0,s.jsx)(i.c,{as:t.NavLink,to:"/auth/forgot-password",children:(0,s.jsx)(a.O,{variant:"pi",children:O({id:"Auth.link.forgot-password"})})})})})]})})},L=(0,r.default)(v.c)`
  flex: 1;
`,W={providers:T}}}]);
