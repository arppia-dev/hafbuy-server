"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[1296],{21296:(A,O,_)=>{_.r(O),_.d(O,{LoginEE:()=>I});var E=_(19968),d=_(23667),a=_(84664),n=_(1560),o=_(65080),l=_(71812),i=_(14632),r=_(48632),D=_(69372),P=_(38188),C=_(85332),M=_(54320),L=_(5240),s=_(91892),h=_(36196),v=_(20880),t=_(21424),g=_(62552),x=_(70516),j=_(31812),c=_(18424),f=_(52540),y=_(21968),S=_(12132),$=_(85676),N=_(35184),F=_(99568),e=_(96556),Q=_(13192),u=_(30840),z=_(77784),G=_(79371),H=_(67888),J=_(52600),V=_(95752),X=_(37388),Y=_(61840),Z=_(49108),p=_(44632),w=_(50840),k=_(20252),b=_(86432),q=_(22612),__=_(24808),E_=_(24024),s_=_(33656),t_=_(43280),a_=_(79804),n_=_(19632),O_=_(29576),d_=_(61152),D_=_(9589),P_=_(45488),M_=_(75516);const B=(0,D.default)(d.c)`
  flex: 1;
`,I=R=>{const{formatMessage:T}=(0,i.c)(),{get:U}=(0,l.Qn)(),{isLoading:W,data:m=[]}=(0,r.useQuery)(["ee","providers"],async()=>{const{data:K}=await U("/admin/providers");return K},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!W&&m.length===0?(0,E.jsx)(P.L,{...R}):(0,E.jsx)(P.L,{...R,children:(0,E.jsx)(a.k,{paddingTop:7,children:(0,E.jsxs)(n.C,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(n.C,{children:[(0,E.jsx)(B,{}),(0,E.jsx)(a.k,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.O,{variant:"sigma",textColor:"neutral600",children:T({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(B,{})]}),(0,E.jsx)(C.S,{providers:m,displayAllProviders:!1})]})})})}},85332:(A,O,_)=>{_.d(O,{S:()=>P});var E=_(19968),d=_(23128),a=_(11360),n=_(94656),o=_(1560),l=_(65080),i=_(14632),r=_(39380),D=_(69372);const P=({providers:s,displayAllProviders:h})=>{const{formatMessage:v}=(0,i.c)();return h?(0,E.jsx)(d.y,{gap:4,children:s.map(t=>(0,E.jsx)(a.C,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid))}):s.length>2&&!h?(0,E.jsxs)(d.y,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(a.C,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid)),(0,E.jsx)(a.C,{col:4,children:(0,E.jsx)(n.o,{label:v({id:"global.see-more"}),children:(0,E.jsx)(L,{as:r.Link,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(C,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(M,{provider:t},t.uid))})},C=(0,D.default)(o.C)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,M=({provider:s})=>(0,E.jsx)(n.o,{label:s.displayName,children:(0,E.jsx)(L,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.O,{children:s.displayName})})}),L=D.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
