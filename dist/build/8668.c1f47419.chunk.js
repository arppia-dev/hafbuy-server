"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[8668],{48668:(B,o,_)=>{_.r(o),_.d(o,{UserListPageEE:()=>W});var O=_(19968),M=_(71912),n=_(29180),P=_(62552),i=_(71812),l=_(12132),s=_(48632),L=_(70516),d=_(38188),I=_(54320),E=_(5240),a=_(91892),D=_(36196),v=_(20880),U=_(21424),T=_(31812),m=_(18424),A=_(52540),t=_(21968),C=_(85676),K=_(35184),R=_(99568),r=_(96556),f=_(13192),e=_(30840),h=_(77784),g=_(79371),c=_(67888),S=_(52600),y=_(95752),u=_(37388),j=_(61840),N=_(49108),F=_(44632),V=_(50840),$=_(20252),x=_(86432),G=_(22612),H=_(24808),Q=_(24024),X=_(33656),Y=_(43280),z=_(79804),J=_(19632),Z=_(29576),p=_(61152),k=_(9589),b=_(45488),w=_(75516),q=_(9252),__=_(17892),E_=_(31212),t_=_(49764),s_=_(22856),a_=_(81136),o_=_(17072);const W=()=>((0,n.u)(),(0,O.jsx)(M.C,{}))},29180:(B,o,_)=>{_.d(o,{u:()=>I});var O=_(62552),M=_(71812),n=_(81136),P=_(14632),i=_(49008),l=_(17072);const s="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",d="https://strapi.io/billing/request-seats",I=()=>{const{formatMessage:E}=(0,P.c)(),{license:a,isError:D,isLoading:v}=(0,l.u)(),U=(0,M.eo)(),{pathname:T}=(0,i.IT)(),{enforcementUserCount:m,permittedSeats:A,licenseLimitStatus:t,isHostedOnStrapiCloud:C}=a??{};O.useEffect(()=>{if(D||v)return;const K=!n(A)&&!window.sessionStorage.getItem(`${s}-${T}`)&&(t==="AT_LIMIT"||t==="OVER_LIMIT");let R;t==="OVER_LIMIT"?R="warning":t==="AT_LIMIT"&&(R="softWarning"),K&&U({type:R,message:E({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:t}),title:E({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:t,enforcementUserCount:m,permittedSeats:A}),link:{url:C?L:d,label:E({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:C})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${s}-${T}`,"true")}})},[U,a,T,E,v,A,t,m,C,D])}},17072:(B,o,_)=>{_.d(o,{u:()=>P});var O=_(62552),M=_(71812),n=_(48632);function P({enabled:i}={enabled:!0}){const{get:l}=(0,M.Qn)(),{data:s,isError:L,isLoading:d}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:E}=await l("/admin/license-limit-information");return E},{enabled:i}),I=O.useCallback(E=>{const a=s?.data?.features.find(D=>D.name===E);return a&&"options"in a?a.options:{}},[s]);return{license:s?.data,getFeature:I,isError:L,isLoading:d}}}}]);