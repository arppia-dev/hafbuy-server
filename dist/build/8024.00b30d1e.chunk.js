"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[8024],{38024:(R,M,_)=>{_.r(M),_.d(M,{AdminSeatInfoEE:()=>r});var s=_(19968),P=_(11360),E=_(65080),o=_(1560),d=_(94656),i=_(24596),t=_(46928),a=_(71812),l=_(65232),L=_(22528),n=_(14632),O=_(70516),C=_(9252),m=_(17072),S=_(62552),N=_(48632),F=_(17892),u=_(31212),G=_(38188),H=_(54320),Q=_(5240),V=_(91892),z=_(36196),J=_(20880),X=_(21424),Y=_(31812),Z=_(18424),$=_(52540),p=_(21968),k=_(12132),b=_(85676),w=_(35184),q=_(99568),__=_(96556),s_=_(13192),E_=_(30840),t_=_(77784),a_=_(79371),n_=_(67888),O_=_(52600),M_=_(95752),o_=_(37388),D_=_(61840),P_=_(49108),d_=_(44632),i_=_(50840),l_=_(20252),L_=_(86432),C_=_(22612),A_=_(24808),v_=_(24024),I_=_(33656),U_=_(43280),B_=_(79804),R_=_(19632),m_=_(29576),T_=_(61152),W_=_(9589),r_=_(45488),K_=_(75516);const T="https://cloud.strapi.io/profile/billing",W="https://strapi.io/billing/request-seats",r=()=>{const{formatMessage:D}=(0,n.c)(),{settings:K}=(0,O.w1)(C.s),{isLoading:v,allowedActions:{canRead:h,canCreate:g,canUpdate:e,canDelete:f}}=(0,a.aU)(K?.users??{}),{license:I,isError:c,isLoading:x}=(0,m.u)({enabled:!v&&h&&g&&e&&f});if(c||(v||x)||!I)return null;const{licenseLimitStatus:j,enforcementUserCount:U,permittedSeats:A,isHostedOnStrapiCloud:B}=I;return A?(0,s.jsxs)(P.C,{col:6,s:12,children:[(0,s.jsx)(E.O,{variant:"sigma",textColor:"neutral600",children:D({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,s.jsxs)(o.C,{gap:2,children:[(0,s.jsx)(o.C,{children:(0,s.jsx)(E.O,{as:"p",children:D({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:A,enforcementUserCount:U,text:y=>(0,s.jsx)(E.O,{fontWeight:"semiBold",textColor:U>A?"danger500":void 0,children:y})})})}),j==="OVER_LIMIT"&&(0,s.jsx)(d.o,{description:D({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,s.jsx)(i.G,{width:(0,a.W8)(14),height:(0,a.W8)(14),color:"danger500",as:l.c})})]}),(0,s.jsx)(t.c,{href:B?T:W,isExternal:!0,endIcon:(0,s.jsx)(L.c,{}),children:D({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:B})})]}):null}},17072:(R,M,_)=>{_.d(M,{u:()=>o});var s=_(62552),P=_(71812),E=_(48632);function o({enabled:d}={enabled:!0}){const{get:i}=(0,P.Qn)(),{data:t,isError:a,isLoading:l}=(0,E.useQuery)(["ee","license-limit-info"],async()=>{const{data:n}=await i("/admin/license-limit-information");return n},{enabled:d}),L=s.useCallback(n=>{const O=t?.data?.features.find(C=>C.name===n);return O&&"options"in O?O.options:{}},[t]);return{license:t?.data,getFeature:L,isError:a,isLoading:l}}}}]);
