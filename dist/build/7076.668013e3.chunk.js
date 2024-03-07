(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[7076],{92268:P=>{function W(s,n,u,h){for(var F=-1,k=s==null?0:s.length;++F<k;){var B=s[F];n(h,B,u(B),s)}return h}P.exports=W},32712:(P,W,s)=>{var n=s(66256),u=n("length");P.exports=u},20456:(P,W,s)=>{var n=s(80232);function u(h,F,k,B){return n(h,function(v,A,z){F(B,v,k(v),z)}),B}P.exports=u},80232:(P,W,s)=>{var n=s(48208),u=s(62632),h=u(n);P.exports=h},50572:(P,W,s)=>{var n=s(23236),u=s(58720),h="[object RegExp]";function F(k){return u(k)&&n(k)==h}P.exports=F},22488:(P,W,s)=>{var n=s(80232),u=s(16005);function h(F,k){var B=-1,v=u(F)?Array(F.length):[];return n(F,function(A,z,q){v[++B]=k(A,z,q)}),v}P.exports=h},24576:(P,W,s)=>{var n=s(12480),u=s(64316),h=s(24020),F=s(22488),k=s(92048),B=s(85968),v=s(71456),A=s(45504),z=s(75516);function q(te,oe,Pe){oe.length?oe=n(oe,function(ae){return z(ae)?function(re){return u(re,ae.length===1?ae[0]:ae)}:ae}):oe=[A];var me=-1;oe=n(oe,B(h));var ce=F(te,function(ae,re,se){var Oe=n(oe,function(Ee){return Ee(ae)});return{criteria:Oe,index:++me,value:ae}});return k(ce,function(ae,re){return v(ae,re,Pe)})}P.exports=q},92048:P=>{function W(s,n){var u=s.length;for(s.sort(n);u--;)s[u]=s[u].value;return s}P.exports=W},13052:(P,W,s)=>{var n=s(36792);function u(h,F){if(h!==F){var k=h!==void 0,B=h===null,v=h===h,A=n(h),z=F!==void 0,q=F===null,te=F===F,oe=n(F);if(!q&&!oe&&!A&&h>F||A&&z&&te&&!q&&!oe||B&&z&&te||!k&&te||!v)return 1;if(!B&&!A&&!oe&&h<F||oe&&k&&v&&!B&&!A||q&&k&&v||!z&&v||!te)return-1}return 0}P.exports=u},71456:(P,W,s)=>{var n=s(13052);function u(h,F,k){for(var B=-1,v=h.criteria,A=F.criteria,z=v.length,q=k.length;++B<z;){var te=n(v[B],A[B]);if(te){if(B>=q)return te;var oe=k[B];return te*(oe=="desc"?-1:1)}}return h.index-F.index}P.exports=u},4068:(P,W,s)=>{var n=s(92268),u=s(20456),h=s(24020),F=s(75516);function k(B,v){return function(A,z){var q=F(A)?n:u,te=v?v():{};return q(A,B,h(z,2),te)}}P.exports=k},62632:(P,W,s)=>{var n=s(16005);function u(h,F){return function(k,B){if(k==null)return k;if(!n(k))return h(k,B);for(var v=k.length,A=F?v:-1,z=Object(k);(F?A--:++A<v)&&B(z[A],A,z)!==!1;);return k}}P.exports=u},16792:(P,W,s)=>{var n=s(32712),u=s(26872),h=s(83152);function F(k){return u(k)?h(k):n(k)}P.exports=F},83152:P=>{var W="\\ud800-\\udfff",s="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",u="\\u20d0-\\u20ff",h=s+n+u,F="\\ufe0e\\ufe0f",k="["+W+"]",B="["+h+"]",v="\\ud83c[\\udffb-\\udfff]",A="(?:"+B+"|"+v+")",z="[^"+W+"]",q="(?:\\ud83c[\\udde6-\\uddff]){2}",te="[\\ud800-\\udbff][\\udc00-\\udfff]",oe="\\u200d",Pe=A+"?",me="["+F+"]?",ce="(?:"+oe+"(?:"+[z,q,te].join("|")+")"+me+Pe+")*",ae=me+Pe+ce,re="(?:"+[z+B+"?",B,q,te,k].join("|")+")",se=RegExp(v+"(?="+v+")|"+re+ae,"g");function Oe(Ee){for(var xe=se.lastIndex=0;se.test(Ee);)++xe;return xe}P.exports=Oe},30680:(P,W,s)=>{var n=s(92188),u=s(4068),h=Object.prototype,F=h.hasOwnProperty,k=u(function(B,v,A){F.call(B,A)?B[A].push(v):n(B,A,[v])});P.exports=k},22832:(P,W,s)=>{var n=s(50572),u=s(85968),h=s(53980),F=h&&h.isRegExp,k=F?u(F):n;P.exports=k},66685:(P,W,s)=>{var n=s(23236),u=s(75516),h=s(58720),F="[object String]";function k(B){return typeof B=="string"||!u(B)&&h(B)&&n(B)==F}P.exports=k},37132:(P,W,s)=>{var n=s(16411),u=s(29564),h=s(16005),F=s(66685),k=s(16792),B="[object Map]",v="[object Set]";function A(z){if(z==null)return 0;if(h(z))return F(z)?k(z):z.length;var q=u(z);return q==B||q==v?z.size:n(z).length}P.exports=A},87144:(P,W,s)=>{var n=s(78456),u=s(24576),h=s(41912),F=s(53492),k=h(function(B,v){if(B==null)return[];var A=v.length;return A>1&&F(B,v[0],v[1])?v=[]:A>2&&F(v[0],v[1],v[2])&&(v=[v[0]]),u(B,n(v,1),[])});P.exports=k},81112:(P,W,s)=>{var n=s(43280);function u(h){return n(h).toLowerCase()}P.exports=u},64772:(P,W,s)=>{var n=s(14184),u=s(74324),h=s(26872),F=s(38955),k=s(22832),B=s(16792),v=s(33796),A=s(57628),z=s(43280),q=30,te="...",oe=/\w*$/;function Pe(me,ce){var ae=q,re=te;if(F(ce)){var se="separator"in ce?ce.separator:se;ae="length"in ce?A(ce.length):ae,re="omission"in ce?n(ce.omission):re}me=z(me);var Oe=me.length;if(h(me)){var Ee=v(me);Oe=Ee.length}if(ae>=Oe)return me;var xe=ae-B(re);if(xe<1)return re;var je=Ee?u(Ee,0,xe).join(""):me.slice(0,xe);if(se===void 0)return je+re;if(Ee&&(xe+=je.length-xe),k(se)){if(me.slice(xe).search(se)){var ft,ne=je;for(se.global||(se=RegExp(se.source,z(oe.exec(se))+"g")),se.lastIndex=0;ft=se.exec(ne);)var at=ft.index;je=je.slice(0,at===void 0?xe:at)}}else if(me.indexOf(n(se),xe)!=xe){var gt=je.lastIndexOf(se);gt>-1&&(je=je.slice(0,gt))}return je+re}P.exports=Pe},42552:(P,W,s)=>{var n=s(89664);function u(h){return h&&h.length?n(h):[]}P.exports=u},63680:(P,W,s)=>{"use strict";s.d(W,{U:()=>F});var n=s(19968),u=s(69372),h=s(87860);const F=({options:B,...v})=>(0,n.jsx)(h.e,{...v,children:B.map(A=>"children"in A?(0,n.jsx)(h.OK,{label:A.label,values:A.children.map(z=>z.value.toString()),children:A.children.map(z=>(0,n.jsx)(k,{value:z.value,children:z.label},z.value))},A.label):(0,n.jsx)(h.eI,{value:A.value,children:A.label},A.value))}),k=(0,u.default)(h.eI)`
  padding-left: ${({theme:B})=>B.spaces[7]};
`},65792:(P,W,s)=>{"use strict";s.d(W,{c:()=>h});var n=s(19968);const u=F=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 34 25",...F,children:[(0,n.jsx)("rect",{width:33,height:23,x:.5,y:1,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M18.901 9.828a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 8.785a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.814.814 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 13.488a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 12.445a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.307 1.307 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 17.247a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 16.204a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.698 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.313-.477-.313-.482-.002ZM15.075 9.842a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 8.8a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 13.503a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 12.46a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 17.261a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 16.218a.81.81 0 0 1-.512.749.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.808.808 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.293 1.293 0 0 0-.119 1.487c.283.468.831.698 1.365.596.596-.113 1.011-.664 1.02-1.258.006-.311-.477-.311-.482 0Z"})]}),h=u},25357:(P,W,s)=>{"use strict";s.d(W,{c:()=>h});var n=s(19968);const u=F=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...F,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),(0,n.jsx)("path",{fill:"#fff",d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"})]}),h=u},29084:(P,W,s)=>{"use strict";s.d(W,{c:()=>h});var n=s(19968);const u=F=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...F,children:[(0,n.jsx)("path",{fill:"#FDF4DC",stroke:"#FAE7B9",d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"}),(0,n.jsx)("path",{fill:"#D9822F",d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"})]}),h=u},20091:(P,W,s)=>{"use strict";s.d(W,{c:()=>h});var n=s(19968);const u=F=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...F,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,n.jsx)("path",{fill:"#0C75AF",fillRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",clipRule:"evenodd"})]}),h=u},5144:(P,W,s)=>{"use strict";s.d(W,{c:()=>h});var n=s(19968);const u=F=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...F,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),(0,n.jsx)("path",{fill:"#fff",d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"})]}),h=u},79808:(P,W,s)=>{"use strict";s.d(W,{c:()=>h});var n=s(19968);const u=F=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...F,children:[(0,n.jsx)("path",{fill:"#181826",d:"m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"}),(0,n.jsx)("path",{fill:"#181826",d:"m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"})]}),h=u},67076:(P,W,s)=>{"use strict";s.r(W),s.d(W,{A:()=>lt,C:()=>Pt,a:()=>Je,g:()=>d,i:()=>vc,u:()=>We});var n=s(19968),u=s(62552),h=s(84664),F=s(27688),k=s(24596),B=s(63680),v=s(1560),A=s(65080),z=s(24200),q=s(23128),te=s(11360),oe=s(50484),Pe=s(28200),me=s(24488),ce=s(84800),ae=s(23667),re=s(65968),se=s(10172),Oe=s(8472),Ee=s(75184),xe=s(64712),je=s(49780),ft=s(36988),ne=s(51772),at=s(19112),gt=s(91328),Na=s(87848),Oa=s(55468),Ea=s(41124),Ra=s(90028),an=s(62680),Ia=s(94656),Da=s(66216),wa=s(12192),ka=s(74928),Ba=s(58224),Pa=s(5272),Ua=s(66040),L=s(71812),Wa=s(21424),Q=s(14632),sn=s(39380),Fe=s(49008),D=s(69372);const Re=(e,t,a)=>{if(!t)return;if(typeof t=="object")return(Array.isArray(t)?t:[t?.desktop,t?.tablet,t?.mobile]).reduce((i,c,f)=>{if(c)switch(f){case 0:return`${i}${e}: ${a.spaces[c]};`;case 1:return`${i}${a.mediaQueries.tablet}{${e}: ${a.spaces[c]};}`;case 2:return`${i}${a.mediaQueries.mobile}{${e}: ${a.spaces[c]};}`;default:return i}return i},"");const r=a.spaces[t]??t;return`${e}: ${r};`};function za(e,t){return typeof e=="string"?!1:t in e}function Bc(e){return e&&typeof e=="object"&&!Array.isArray(e)}function ie(e,t,a){return t&&za(e,t)?e[t]:a}const Za={color:!0,cursor:!0,height:!0,width:!0},Y=D.default.div.withConfig({shouldForwardProp:(e,t)=>!Za[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>ie(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>ie(e.colors,t,t)};
  color: ${({theme:e,color:t})=>ie(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>Re("padding",t,e)}
  ${({theme:e,paddingTop:t})=>Re("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>Re("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>Re("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>Re("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>Re("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>Re("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>Re("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>Re("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:a})=>t?e.borderRadius:a};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>ie(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:a,borderWidth:r})=>{if(t&&!a&&typeof r>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>ie(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>ie(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>ie(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>ie(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>ie(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>ie(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>ie(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>ie(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>ie(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>ie(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>ie(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>ie(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`,Va=(0,D.default)(Y)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:t})=>Re("gap",t,e)}
`,Ga=e=>{const{gap:t="0",gridCols:a=12,...r}=e;return(0,n.jsx)(Va,{gap:t,gridCols:a,...r})},Ha=`${232/16}rem`,Qa=(0,D.default)(Ga)`
  width: ${Ha};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,Ya=({ariaLabel:e,...t})=>(0,n.jsx)(Qa,{"aria-label":e,as:"nav",...t});var ht=s(25424);const Ka={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"},Xa=u["useId".toString()]||(()=>{});let Ja=0;const qe=e=>{const[t,a]=(0,u.useState)(Xa());return(0,u.useLayoutEffect)(()=>{e||a(r=>r??String(Ja++))},[e]),e?.toString()??(t||"")},qa=e=>{const t=(0,u.useRef)();return(0,u.useEffect)(()=>{t.current=e}),t.current},_a=(0,D.default)(Y)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,es=({unsetMargin:e=!0,...t})=>(0,n.jsx)(_a,{...t,background:"neutral150",as:"hr",unsetMargin:e}),ts=e=>(0,n.jsx)("form",{...e,role:"search"});var ns=s(51224);function as(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function on(...e){return t=>e.forEach(a=>as(a,t))}function Pc(...e){return React.useCallback(on(...e),e)}const Uc=e=>({theme:t,size:a})=>t.sizes[e][a],rn=(e="&")=>({theme:t,hasError:a=!1})=>(0,D.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${a?t.colors.danger600:t.colors.primary600};
      box-shadow: ${a?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,ln=({theme:e})=>(0,D.css)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`,cn=(0,u.createContext)({id:"",required:!1}),dn=()=>(0,u.useContext)(cn),ss={direction:!0},de=(0,D.default)(Y).withConfig({shouldForwardProp:(e,t)=>!ss[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>Re("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`,un={S:6.5,M:10.5},os=(0,u.forwardRef)(({endAction:e,startAction:t,disabled:a=!1,onChange:r,size:o="M",...l},i)=>{const{id:c,error:f,hint:m,name:g,required:p}=dn();let M;f?M=`${c}-error`:m&&(M=`${c}-hint`);const T=Boolean(f),b=$=>{!a&&r&&r($)};return(0,n.jsxs)(Mt,{justifyContent:"space-between",hasError:T,disabled:a,children:[t?(0,n.jsx)(Y,{paddingLeft:3,paddingRight:2,children:t}):null,(0,n.jsx)(rs,{id:c,name:g,ref:i,"aria-describedby":M,"aria-invalid":T,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,hasLeftAction:Boolean(t),hasRightAction:Boolean(e),onChange:b,"aria-required":p,$size:o,...l}),e?(0,n.jsx)(Y,{paddingLeft:2,paddingRight:3,children:e}):null]})}),rs=D.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${un[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:t})=>t?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:t})=>t?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${un[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,Mt=(0,D.default)(de)`
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${rn()}

  ${({theme:e,disabled:t})=>t?(0,D.css)`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`,yt=D.default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,is=(0,D.default)(de)`
  font-size: 1.6rem;
  padding: 0;
`,ls=(0,u.forwardRef)(({label:e,children:t,...a},r)=>(0,n.jsxs)(is,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...a,as:"button",ref:r,children:[(0,n.jsx)(yt,{as:"span",children:e}),(0,u.cloneElement)(t,{"aria-hidden":!0,focusable:!1})]})),cs=(0,u.forwardRef)(({children:e,name:t,error:a,hint:r,id:o,required:l=!1,...i},c)=>{const f=qe(o),m=(0,u.useMemo)(()=>({name:t,id:f,error:a,hint:r,required:l}),[a,f,r,t,l]);return(0,n.jsx)(Y,{ref:c,...i,children:(0,n.jsx)(cn.Provider,{value:m,children:e})})}),ds="[@strapi/design-system]:",us=e=>{const t=e;let a=!1;if(typeof t!="function")throw new TypeError(`${ds} once requires a function parameter`);return(...r)=>{a||(t(...r),a=!0)}},mn="alpha",pn="beta",fn="delta",gn="epsilon",$t="omega",hn="pi",yn="sigma",Wc=[mn,pn,fn,gn,$t,hn,yn],ms=({ellipsis:e=!1})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,ps=({variant:e=$t,theme:t})=>{switch(e){case mn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case pn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case fn:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case gn:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case $t:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case hn:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case yn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},fs={fontSize:!0,fontWeight:!0},X=D.default.span.withConfig({shouldForwardProp:(e,t)=>!fs[e]&&t(e)})`
  ${ps}
  ${ms}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>ie(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>ie(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>ie(e.lineHeights,t,t)};
  color: ${({theme:e,textColor:t})=>e.colors[t||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`,gs=us(console.warn),hs=(0,u.forwardRef)(({children:e,action:t,required:a,...r},o)=>{const{id:l,required:i}=dn(),c=i||a;return a!==void 0&&gs('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,n.jsxs)(ys,{ref:o,variant:"pi",textColor:"neutral800",htmlFor:l,fontWeight:"bold",as:"label",...r,children:[e,c&&(0,n.jsx)(xs,{textColor:"danger600",children:"*"}),t&&(0,n.jsx)(bs,{marginLeft:1,children:t})]})}),ys=(0,D.default)(X)`
  display: flex;
  align-items: center;
`,xs=(0,D.default)(X)`
  line-height: 0;
`,bs=(0,D.default)(de)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,vs=(0,D.default)(ns.c)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,xn=(0,D.default)(ht.c)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,Cs=D.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${xn} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${Mt} {
    border: 1px solid transparent;
  }

  ${rn(Mt)}
`,Ts=(0,u.forwardRef)(({name:e,size:t="M",children:a,value:r="",onClear:o,clearLabel:l,...i},c)=>{const f=(0,u.useRef)(null),m=r.length>0,g=M=>{o(M),f.current.focus()},p=on(c,f);return(0,n.jsx)(Cs,{children:(0,n.jsxs)(cs,{name:e,children:[(0,n.jsx)(yt,{children:(0,n.jsx)(hs,{children:a})}),(0,n.jsx)(os,{ref:p,value:r,startAction:(0,n.jsx)(xn,{"aria-hidden":!0}),size:t,endAction:m?(0,n.jsx)(ls,{label:l,onClick:g,children:(0,n.jsx)(vs,{})}):void 0,...i})]})})}),js=e=>{const[t,a]=(0,u.useState)(!1),r=(0,u.useRef)(null),o=()=>{typeof r.current=="number"&&(clearTimeout(r.current),r.current=null)};return(0,u.useEffect)(()=>()=>{o()},[]),{visible:t,onFocus:()=>{a(!0)},onBlur:()=>{a(!1)},onMouseEnter:()=>{r.current=setTimeout(()=>{a(!0)},e)},onMouseLeave:()=>{o(),a(!1)}}},Ve=8,Ms=(e,t)=>{const a=(e.width-t.width)/2,r=t.left-a,o=t.top+t.height+Ve+window.pageYOffset;return{left:r,top:o}},$s=(e,t)=>{const a=(e.height-t.height)/2,r=t.left+t.width+Ve,o=t.top-a+window.pageYOffset;return{left:r,top:o}},Ss=(e,t)=>{const a=(e.height-t.height)/2,r=t.left-e.width-Ve,o=t.top-a+window.pageYOffset;return{left:r,top:o}},As=(e,t)=>{const a=(e.width-t.width)/2;let r=t.left-a,o=t.top-e.height-Ve+window.pageYOffset;const l=window.innerWidth-t.right;return t.left+e.width-l>window.innerWidth?(r=t.left-e.width-Ve,o=t.top+window.scrollY-t.height/2):r<0?(r=t.width+t.left+Ve,o=t.top+window.scrollY-e.height/2+Ve):o<0&&r>0&&(o=t.top+t.height+Ve),{left:r,top:o}},Fs=(e,t,a)=>{const r=e.getBoundingClientRect(),o=t.getBoundingClientRect();return a==="bottom"?Ms(r,o):a==="right"?$s(r,o):a==="left"?Ss(r,o):As(r,o)},Ls=(e,t)=>{const a=(0,u.useRef)(null),r=(0,u.useRef)(null);return(0,u.useLayoutEffect)(()=>{if(e){const o=a.current,l=r.current;if(o&&l){const i=Fs(o,l,t);o.style.left=`${i.left}px`,o.style.top=`${i.top}px`}}},[t,e]),{tooltipWrapperRef:a,toggleSourceRef:r}};var Ns=s(19632);const bn=u.forwardRef(({container:e=globalThis?.document?.body,...t},a)=>e?(0,Ns.createPortal)((0,n.jsx)(Y,{ref:a,...t}),e):null);bn.displayName="Portal";const Os=(0,D.default)(Y)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:e})=>e?"revert":"none"};
`,Es=({children:e,label:t,description:a,delay:r=500,position:o="top",id:l,...i})=>{const c=qe(l),f=qe(),{visible:m,...g}=js(r),{tooltipWrapperRef:p,toggleSourceRef:M}=Ls(m,o),T=u.cloneElement(e,{tabIndex:0,"aria-labelledby":t?c:void 0,"aria-describedby":a?c:void 0,...g});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(bn,{children:(0,n.jsxs)(Os,{id:c,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:p,visible:m,position:"absolute",...i,children:[m&&(0,n.jsx)(yt,{id:f,children:a}),(0,n.jsx)(X,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:t||a})]})}),(0,n.jsx)("span",{ref:M,children:T})]})},Rs=(0,D.default)(de)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${ln}
`,St=u.forwardRef(({disabled:e,children:t,background:a="neutral0",...r},o)=>(0,n.jsx)(Rs,{ref:o,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:a,borderColor:"neutral200",cursor:"pointer",...r,children:t}));St.displayName="BaseButton";const Is="tertiary",st="secondary",Ds=["S","M","L"],ws=[Is,st],ks=u.forwardRef(({label:e,background:t,borderWidth:a,noBorder:r=!1,children:o,icon:l,disabled:i=!1,onClick:c,size:f=Ds[0],"aria-label":m,variant:g=ws[0],...p},M)=>{const T=$=>{!i&&c&&c($)},b=(0,n.jsxs)(vn,{"aria-disabled":i,background:i?"neutral150":t,borderWidth:r?0:a,justifyContent:"center",...p,ref:M,size:f,onClick:T,variant:g,children:[(0,n.jsx)(yt,{as:"span",children:e??m}),u.cloneElement(l||o,{"aria-hidden":!0,focusable:!1})]});return e?(0,n.jsx)(Es,{label:e,children:b}):b}),vn=(0,D.default)(St)`
  background-color: ${({theme:e,variant:t})=>{if(t===st)return e.colors.primary100}};
  border-color: ${({theme:e,variant:t})=>t===st?e.colors.primary200:e.colors.neutral200};
  height: ${({theme:e,size:t})=>e.sizes.button[t]};
  width: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    g,
    path {
      fill: ${({theme:e,variant:t})=>t===st?e.colors.primary500:e.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:e,variant:t})=>t===st?e.colors.primary600:e.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,zc=(0,D.default)(de)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${vn} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,Cn=(0,D.default)(es)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,Bs=({as:e="h2",label:t,searchLabel:a="",searchable:r=!1,onChange:o=()=>{},value:l="",onClear:i=()=>{},onSubmit:c=()=>{},id:f})=>{const[m,g]=(0,u.useState)(!1),p=qa(m),M=qe(f),T=(0,u.useRef)(void 0),b=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{m&&T.current&&T.current.focus(),p&&!m&&b.current&&b.current.focus()},[m,p]);const $=()=>{g(O=>!O)},Z=O=>{i(O),T.current.focus()},S=O=>{O.relatedTarget?.id!==M&&g(!1)},N=O=>{O.key===Ka.ESCAPE&&g(!1)};return m?(0,n.jsxs)(Y,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(ts,{children:(0,n.jsx)(Ts,{name:"searchbar",value:l,onChange:o,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:N,ref:T,onBlur:S,onClear:Z,onSubmit:c,clearLabel:"Clear",size:"S",children:a})}),(0,n.jsx)(Y,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(Cn,{})})]}):(0,n.jsxs)(Y,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(de,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(X,{variant:"beta",as:e,children:t}),r&&(0,n.jsx)(ks,{ref:b,onClick:$,label:a,icon:(0,n.jsx)(ht.c,{})})]}),(0,n.jsx)(Y,{paddingTop:4,children:(0,n.jsx)(Cn,{})})]})},Ps=({children:e,spacing:t=2,horizontal:a=!1,...r})=>(0,n.jsx)(Y,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(de,{as:"ol",gap:t,direction:a?"row":"column",alignItems:a?"center":"stretch",...r,children:u.Children.map(e,(o,l)=>(0,n.jsx)("li",{children:o},l))})});var At=s(27832);const Tn=(0,D.default)(de)`
  border: none;
  padding: 0;
  background: transparent;
`,Us=D.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Ws=({collapsable:e=!1,label:t,onClick:a=()=>{},ariaExpanded:r,ariaControls:o})=>e?(0,n.jsxs)(Tn,{as:"button",onClick:a,"aria-expanded":r,"aria-controls":o,textAlign:"left",children:[(0,n.jsx)(Y,{paddingRight:1,children:(0,n.jsx)(X,{variant:"sigma",textColor:"neutral600",children:t})}),e&&(0,n.jsx)(Us,{rotated:r,children:(0,n.jsx)(At.c,{"aria-hidden":!0})})]}):(0,n.jsx)(Tn,{children:(0,n.jsx)(Y,{paddingRight:1,children:(0,n.jsx)(X,{variant:"sigma",textColor:"neutral600",children:t})})}),zs=(0,D.default)(de)`
  border-radius: ${({theme:e,size:t})=>t==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:t})=>t.sizes.badge[e]};
`,Zs=({active:e=!1,size:t="M",textColor:a="neutral600",backgroundColor:r="neutral150",children:o,minWidth:l=5,...i})=>{const c=t==="S"?1:2;return(0,n.jsx)(zs,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:l,paddingLeft:c,paddingRight:c,background:e?"primary200":r,size:t,...i,children:(0,n.jsx)(X,{variant:"sigma",textColor:e?"primary600":a,children:o})})},Vs=(0,D.default)(Y)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,Gs=({collapsable:e=!1,label:t,badgeLabel:a,children:r,id:o})=>{const[l,i]=(0,u.useState)(!0),c=qe(o),f=()=>{i(m=>!m)};return(0,n.jsxs)(de,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(Vs,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(Y,{position:"relative",paddingRight:a?6:0,children:[(0,n.jsx)(Ws,{onClick:f,ariaExpanded:l,ariaControls:c,collapsable:e,label:t}),a&&(0,n.jsx)(Zs,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:a})]})}),(!e||l)&&(0,n.jsx)("ol",{id:c,children:u.Children.map(r,(m,g)=>(0,n.jsx)("li",{children:m},g))})]})},Hs=(0,D.default)(Y)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,Qs=D.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,Ys=D.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Ks=({label:e,children:t,id:a})=>{const[r,o]=(0,u.useState)(!0),l=qe(a),i=()=>{o(c=>!c)};return(0,n.jsxs)(Y,{children:[(0,n.jsx)(Hs,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsx)(de,{justifyContent:"space-between",children:(0,n.jsxs)(Qs,{onClick:i,"aria-expanded":r,"aria-controls":l,children:[(0,n.jsx)(Ys,{rotated:r,children:(0,n.jsx)(At.c,{"aria-hidden":!0})}),(0,n.jsx)(Y,{paddingLeft:2,children:(0,n.jsx)(X,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),r&&(0,n.jsx)("ul",{id:l,children:u.Children.map(t,(c,f)=>(0,n.jsx)("li",{children:c},f))})]})};var Xs=s(86316);const Ft=u.forwardRef(({href:e,rel:t="noreferrer noopener",target:a="_self",disabled:r=!1,isExternal:o=!1,...l},i)=>(0,n.jsx)(Y,{as:"a",ref:i,target:o?"_blank":a,rel:o?t:void 0,href:r?"#":e,"aria-disabled":r,cursor:"pointer",...l}));Ft.displayName="BaseLink";const Js=(0,D.default)(Y)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${X} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,jn=(0,D.default)(Xs.c)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  }
`,qs=D.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,Mn=u.forwardRef(({children:e,icon:t=null,withBullet:a=!1,as:r=Ft,isSubSectionChild:o=!1,...l},i)=>(0,n.jsxs)(Js,{as:r,icon:t,background:"neutral100",paddingLeft:o?9:7,paddingBottom:2,paddingTop:2,ref:i,...l,children:[(0,n.jsxs)(de,{children:[t?(0,n.jsx)(qs,{children:t}):(0,n.jsx)(jn,{}),(0,n.jsx)(Y,{paddingLeft:2,children:(0,n.jsx)(X,{as:"span",children:e})})]}),a&&(0,n.jsx)(Y,{as:de,paddingRight:4,children:(0,n.jsx)(jn,{$active:!0})})]}));var _s=s(22528);const eo=(0,D.default)(Ft)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${ln};
`,xt=u.forwardRef(({children:e,href:t,disabled:a=!1,startIcon:r,endIcon:o,isExternal:l=!0,...i},c)=>(0,n.jsxs)(eo,{ref:c,href:t,disabled:a,isExternal:l,...i,children:[r,(0,n.jsx)(X,{textColor:a?"neutral600":"primary600",children:e}),o,t&&!o&&l&&(0,n.jsx)(_s.c,{})]}));xt.displayName="Link";const $n=()=>(0,n.jsx)(Y,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(X,{variant:"pi",textColor:"neutral500",children:"/"})});$n.displayName="Divider";const to=(0,D.default)(de)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,Sn=({label:e,children:t,...a})=>{const r=u.Children.toArray(t);return(0,n.jsx)(Y,{"aria-label":e,...a,children:(0,n.jsx)(to,{as:"ol",children:u.Children.map(r,(o,l)=>{const i=r.length>1&&l+1<r.length;return(0,n.jsxs)(de,{inline:!0,as:"li",children:[o,i&&(0,n.jsx)($n,{})]})})})})};Sn.displayName="Breadcrumbs";const An=({children:e,isCurrent:t=!1,...a})=>(0,n.jsx)(Y,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(X,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"normal","aria-current":t,...a,children:e})});An.displayName="Crumb";var ke=s(20206),no=s(37444),ao=s(24716);const Lt="success-light",Nt="danger-light",bt="default",ot="tertiary",rt="secondary",Fn="danger",Ln="success",Ot="ghost",Et=[Lt,Nt],so=[bt,ot,rt,Fn,Ln,Ot,...Et],oo=["S","M","L"],Me=e=>e===Lt||e===Nt?`${e.substring(0,e.lastIndexOf("-"))}`:e===ot?"neutral":e===bt||e===rt||so.every(t=>t!==e)?"primary":`${e}`,Nn=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${X} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,ro=({theme:e,variant:t})=>[...Et,rt].includes(t)?`
      background-color: ${e.colors.neutral0};
    `:t===ot?`
      background-color: ${e.colors.neutral100};
    `:t===Ot?`
      background-color: ${e.colors.neutral100};
    `:t===bt?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${Me(t)}500`]};
    background: ${e.colors[`${Me(t)}500`]};
  `,io=({theme:e,variant:t})=>[...Et,rt].includes(t)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Me(t)}600`]};
      ${X} {
        color: ${e.colors[`${Me(t)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${Me(t)}600`]};
        }
      }
    `:t===ot?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${Me(t)}600`]};
    background: ${e.colors[`${Me(t)}600`]};
  `,lo=({theme:e,variant:t})=>{switch(t){case Nt:case Lt:case rt:return`
          border: 1px solid ${e.colors[`${Me(t)}200`]};
          background: ${e.colors[`${Me(t)}100`]};
          ${X} {
            color: ${e.colors[`${Me(t)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${Me(t)}700`]};
            }
          }
        `;case ot:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${X} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case Ot:return`
        border: 1px solid transparent;
        background: transparent;

        ${X} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case Ln:case Fn:return`
          border: 1px solid ${e.colors[`${Me(t)}600`]};
          background: ${e.colors[`${Me(t)}600`]};
          ${X} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},co=(0,D.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,uo=(0,D.default)(ao.c)`
  animation: ${co} 2s infinite linear;
  will-change: transform;
`,mo=(0,D.default)(St)`
  height: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${Nn}

    &:active {
      ${Nn}
    }
  }

  &:hover {
    ${ro}
  }

  &:active {
    ${io}
  }

  ${lo}
`,On=u.forwardRef(({variant:e=bt,startIcon:t,endIcon:a,disabled:r=!1,children:o,onClick:l,size:i=oo[0],loading:c=!1,fullWidth:f=!1,...m},g)=>{const p=r||c,M=T=>{!p&&l&&l(T)};return(0,n.jsxs)(mo,{ref:g,"aria-disabled":p,disabled:p,size:i,variant:e,onClick:M,fullWidth:f,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:f,justifyContent:f?"center":void 0,paddingLeft:4,paddingRight:4,width:f?"100%":void 0,...m,children:[(t||c)&&(0,n.jsx)(Y,{"aria-hidden":!0,children:c?(0,n.jsx)(uo,{}):t}),(0,n.jsx)(X,{variant:i==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:o}),a&&(0,n.jsx)(de,{"aria-hidden":!0,children:a})]})});On.displayName="Button";const po=ke.Ss,fo=(0,u.forwardRef)(({size:e,endIcon:t=(0,n.jsx)(At.c,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...a},r)=>(0,n.jsx)(ke.mf,{asChild:!0,children:(0,n.jsx)(On,{ref:r,type:"button",variant:"ghost",endIcon:t,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...a})})),go=(0,u.forwardRef)(({children:e,intersectionId:t,popoverPlacement:a="bottom-start",...r},o)=>{const[l,i]=a.split("-");return(0,n.jsx)(ke.a8,{children:(0,n.jsx)(ke.kP,{align:i,side:l,loop:!0,asChild:!0,children:(0,n.jsxs)(En,{ref:o,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...r,children:[e,(0,n.jsx)(Y,{id:t,width:"100%",height:"1px"})]})})})}),En=(0,D.default)(de)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,ho=({onSelect:e,disabled:t=!1,...a})=>(0,n.jsx)(ke.iY,{asChild:!0,onSelect:e,disabled:t,children:a.isLink||a.isExternal?(0,n.jsx)(yo,{color:"neutral800",...a,isExternal:a.isExternal??!1,children:(0,n.jsx)(X,{children:a.children})}):(0,n.jsx)(In,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...a,children:(0,n.jsx)(X,{children:a.children})})}),Rn=({theme:e})=>(0,D.css)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${X} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${X} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,In=(0,D.default)(de)`
  ${Rn}
`,yo=(0,D.default)(xt)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>ie(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${Rn}
`,Zc=(0,u.forwardRef)((e,t)=>(0,n.jsx)(ke.iM,{asChild:!0,children:(0,n.jsx)(xo,{ref:t,variant:"sigma",textColor:"neutral600",...e})})),xo=(0,D.default)(X)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,Vc=ke.UV,Gc=(0,u.forwardRef)(({disabled:e=!1,...t},a)=>(0,n.jsx)(ke.Ab,{asChild:!0,disabled:e,children:(0,n.jsxs)(bo,{ref:a,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[(0,n.jsx)(X,{children:t.children}),(0,n.jsx)(vo,{height:12,width:12})]})})),bo=(0,D.default)(In)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,vo=(0,D.default)(no.c)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Hc=(0,u.forwardRef)((e,t)=>(0,n.jsx)(ke.a8,{children:(0,n.jsx)(ke.ok,{sideOffset:8,asChild:!0,children:(0,n.jsx)(En,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),Co=po,To=fo,jo=go,Mo=ho,Qc=null,Yc=null,Kc=null,Xc=null;var $o=s(6608),So=s(82096),Ao=s(88992),Fo=s(59292),Dn=s(31952),Lo=s(48180),No=s(87576),Oo=s(84272),Eo=s(3632),Ro=s(24128),Io=s(32584),Do=s(34140),wo=s(41492),ko=s(96396),Bo=s(30156),Po=s(1444),Uo=s(49312),Wo=s(37003),zo=s(40932),Zo=s(14908),Vo=s(18520),Go=s(9739),Ho=s(95672),Qo=s(13528),Yo=s(17200),Ko=s(47896),Xo=s(1464),Jo=s(58603),qo=s(48968),_o=s(49260),er=s(66360),tr=s(39680),nr=s(36e3),ar=s(55816),sr=s(98440),or=s(59176),rr=s(39412),ir=s(34224),lr=s(57360),cr=s(18476),dr=s(77332),ur=s(98224),mr=s(14612),pr=s(84564),fr=s(51092),gr=s(24996),hr=s(95456),yr=s(63632),xr=s(89456),br=s(60961),vr=s(82696),Cr=s(99132),Tr=s(57272),jr=s(35416),Mr=s(38072),$r=s(69048),Sr=s(17624),Ar=s(55372),Fr=s(2472),Lr=s(9136),Nr=s(42760),Or=s(51776),Er=s(87408),Rr=s(28160),Ir=s(62124),Dr=s(60352),wr=s(72040),kr=s(41992),Br=s(43176),wn=s(37424),kn=s(32328),Bn=s(32976),Pr=s(61424),Ur=s(68968),Wr=s(53044),zr=s(99512),Zr=s(51756),Vr=s(64848),Pn=s(23448),Un=s(82992),Wn=s(61944),Gr=s(26260),Hr=s(16344),Qr=s(45176),Yr=s(22224),Kr=s(75320),Xr=s(56012),Jr=s(18184),qr=s(65880),_r=s(45472),ei=s(69120),Ge=s(45676),ti=s(83408),ni=s(42192),ai=s(3016),si=s(10280),oi=s(70736),ri=s(62956),ii=s(96566),li=s(19540),ci=s(24368),di=s(19148),ui=s(81488),mi=s(81784),pi=s(50219),fi=s(38640),gi=s(27680),hi=s(61496),yi=s(85744),xi=s(79360),bi=s(84877),vi=s(80012),Ci=s(26564),Ti=s(49056),ji=s(4216),Mi=s(82544),$i=s(30104),Si=s(2868),Ai=s(23488),Fi=s(5520),Li=s(28044),Ni=s(98684),Oi=s(87880),Ei=s(70148),Ri=s(34328),it=s(67520),Ii=s(65792),Di=s(65784),zn=s(25357),wi=s(69096),vt=s(22928),ki=s(44973),Bi=s(73808),Zn=s(71e3),Rt=s(90408),Vn=s(46264),Pi=s(29084),Ui=s(50776),Wi=s(20091),zi=s(5144),Gn=s(28032),Zi=s(30728),Vi=s(79808),Gi=s(80904),Hi=s(25876),Ue=s(30840),C=s(92620),It=s(13192),w=s(85676),Qi=s(30680),Hn=s(35184),Yi=s(37132),Xe=s(70516),Ki=s(56781),Qn=s(81112),Xi=s(12132),Dt=s(61397),Yn=s(64772),Ji=s(42552),j=s(52540),qi=s(83180),wt=s(61152),Kn=s(67432),_i=s(18424),Xn=s(21968),el=s(87144);const d=e=>`${C.p}.${e}`,Jn=(0,u.createContext)(),We=()=>(0,u.useContext)(Jn),qn=u.createContext(),Je=()=>(0,u.useContext)(qn),tl=()=>{const{components:e,componentsGroupedByCategory:t,contentTypes:a,isInDevelopmentMode:r,sortedContentTypesList:o,modifiedData:l,initialData:i}=We(),c=(0,L.eo)(),{trackUsage:f}=(0,L.m4)(),[m,g]=(0,u.useState)(""),{onOpenModalCreateSchema:p,onOpenModalEditCategory:M}=Je(),{locale:T}=(0,Q.c)(),{startsWith:b}=(0,L.WO)(T,{sensitivity:"base"}),$=(0,L.In)(T,{sensitivity:"base"}),Z=!Object.keys(a).some(V=>a[V].isTemporary===!0)&&!Object.keys(e).some(V=>e[V].isTemporary===!0)&&It(l,i),S=()=>{Z?(f("willCreateContentType"),p({modalType:"contentType",kind:"collectionType",actionType:"create",forTarget:"contentType"})):U()},N=()=>{Z?(f("willCreateSingleType"),p({modalType:"contentType",kind:"singleType",actionType:"create",forTarget:"contentType"})):U()},O=()=>{Z?(f("willCreateComponent"),p({modalType:"component",kind:null,actionType:"create",forTarget:"component"})):U()},U=()=>{c({type:"info",message:{id:d("notification.info.creating.notSaved"),defaultMessage:"Please save your work before creating a new collection type or component"}})},_=Object.entries(t).map(([V,Te])=>({name:V,title:V,isEditable:r,onClickEdit(ee,Se){ee.stopPropagation(),Z?M(Se.name):U()},links:Te.map(ee=>({name:ee.uid,to:`/plugins/${C.p}/component-categories/${V}/${ee.uid}`,title:ee.schema.displayName})).sort((ee,Se)=>$.compare(ee.title,Se.title))})).sort((V,Te)=>$.compare(V.title,Te.title)),he=o.filter(V=>V.visible);return{menu:[{name:"models",title:{id:`${d("menu.section.models.name")}`,defaultMessage:"Collection Types"},customLink:r&&{id:`${d("button.model.create")}`,defaultMessage:"Create new collection type",onClick:S},links:he.filter(V=>V.kind==="collectionType")},{name:"singleTypes",title:{id:`${d("menu.section.single-types.name")}`,defaultMessage:"Single Types"},customLink:r&&{id:`${d("button.single-types.create")}`,defaultMessage:"Create new single type",onClick:N},links:he.filter(V=>V.kind==="singleType")},{name:"components",title:{id:`${d("menu.section.components.name")}`,defaultMessage:"Components"},customLink:r&&{id:`${d("button.component.create")}`,defaultMessage:"Create a new component",onClick:O},links:_}].map(V=>V.links.some(ee=>Array.isArray(ee.links))?{...V,links:V.links.map(ee=>{const Se=ee.links.filter(pe=>b(pe.title,m));return Se.length===0?null:{...ee,links:Se.sort((pe,le)=>$.compare(pe.title,le.title))}}).filter(Boolean)}:{...V,links:V.links.filter(ee=>b(ee.title,m)).sort((ee,Se)=>$.compare(ee.title,Se.title))}),searchValue:m,onSearchChange:g}},nl=()=>{const{menu:e,searchValue:t,onSearchChange:a}=tl(),{formatMessage:r}=(0,Q.c)();return(0,n.jsxs)(Ya,{ariaLabel:r({id:`${d("plugin.name")}`,defaultMessage:"Content-Types Builder"}),children:[(0,n.jsx)(Bs,{searchable:!0,value:t,onClear:()=>a(""),onChange:o=>a(o.target.value),label:r({id:`${d("plugin.name")}`,defaultMessage:"Content-Types Builder"}),searchLabel:r({id:"global.search",defaultMessage:"Search"})}),(0,n.jsx)(Ps,{children:e.map(o=>(0,n.jsxs)(u.Fragment,{children:[(0,n.jsx)(Gs,{label:r({id:o.title.id,defaultMessage:o.title.defaultMessage}),collapsable:!0,badgeLabel:o.links.length.toString(),children:o.links.map(l=>l.links?(0,n.jsx)(Ks,{label:Ue(l.title),children:l.links.map(i=>(0,n.jsx)(Mn,{as:sn.NavLink,to:i.to,active:i.active,isSubSectionChild:!0,children:Ue(r({id:i.name,defaultMessage:i.title}))},i.name))},l.name):(0,n.jsx)(Mn,{as:sn.NavLink,to:l.to,active:l.active,children:Ue(r({id:l.name,defaultMessage:l.title}))},l.name))}),o.customLink&&(0,n.jsx)(h.k,{paddingLeft:7,children:(0,n.jsx)(F.c,{onClick:o.customLink.onClick,startIcon:(0,n.jsx)(k.G,{as:Ge.c,width:(0,L.W8)(8),height:(0,L.W8)(8)}),marginTop:2,children:r({id:o.customLink.id,defaultMessage:o.customLink.defaultMessage})})})]},o.name))})]})},_n=e=>e.kind==="collectionType"&&(e.restrictRelationsTo===null||Array.isArray(e.restrictRelationsTo)&&e.restrictRelationsTo.length>0),kt=(e,t)=>e.find(({name:a})=>a===t),al=[{label:"All",children:[{label:"images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)",value:"images"},{label:"videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)",value:"videos"},{label:"audios (MP3, WAV, OGG)",value:"audios"},{label:"files (CSV, ZIP, PDF, Excel, JSON, ...)",value:"files"}]}],sl=({intlLabel:e,name:t,onChange:a,value:r=null})=>{const{formatMessage:o}=(0,Q.c)(),l=r===null||r?.length===0?o({id:"global.none",defaultMessage:"None"}):[...r].sort().map(c=>Ue(c)).join(", "),i=e.id?o({id:e.id,defaultMessage:e.defaultMessage}):t;return(0,n.jsx)(B.U,{id:"select1",label:i,customizeContent:()=>l,onChange:c=>{c.length>0?a({target:{name:t,value:c,type:"allowed-types-select"}}):a({target:{name:t,value:null,type:"allowed-types-select"}})},options:al,value:r||[]})},ea={biginteger:it.c,blocks:Ii.c,boolean:Di.c,collectionType:zn.c,component:wi.c,contentType:zn.c,date:vt.c,datetime:vt.c,decimal:it.c,dynamiczone:ki.c,email:Bi.c,enum:Zn.c,enumeration:Zn.c,file:Rt.c,files:Rt.c,float:it.c,integer:it.c,json:Vn.c,JSON:Vn.c,media:Rt.c,number:it.c,password:Pi.c,relation:Ui.c,richtext:Wi.c,singleType:zi.c,string:Gn.c,text:Gn.c,time:vt.c,timestamp:vt.c,uid:Zi.c},ol=(0,D.default)(h.k)`
  svg {
    height: 100%;
    width: 100%;
  }
`,lt=({type:e,customField:t=null,...a})=>{const r=(0,L.QV)();let o=ea[e];if(t){const i=r.get(t)?.icon;i&&(o=i)}return ea[e]?(0,n.jsx)(ol,{height:(0,L.W8)(24),width:(0,L.W8)(32),shrink:0,...a,"aria-hidden":!0,children:(0,n.jsx)(h.k,{as:o})}):null},ta=(0,D.default)(h.k)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
    border: 1px solid ${({theme:e})=>e.colors.primary200};
  }
`,rl=["blocks"],il=()=>(0,n.jsx)(v.C,{grow:1,justifyContent:"flex-end",children:(0,n.jsxs)(v.C,{gap:1,hasRadius:!0,background:"alternative100",padding:`${2/16}rem ${4/16}rem`,children:[(0,n.jsx)(k.G,{width:`${10/16}rem`,height:`${10/16}rem`,as:Vi.c,color:"alternative600"}),(0,n.jsx)(A.O,{textColor:"alternative600",variant:"sigma",children:"New"})]})}),ll=({type:e="text"})=>{const{formatMessage:t}=(0,Q.c)(),{onClickSelectField:a}=Je(),r=()=>{a({attributeType:e,step:e==="component"?"1":null})};return(0,n.jsx)(ta,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:r,children:(0,n.jsxs)(v.C,{children:[(0,n.jsx)(lt,{type:e}),(0,n.jsxs)(h.k,{paddingLeft:4,width:"100%",children:[(0,n.jsxs)(v.C,{justifyContent:"space-between",children:[(0,n.jsx)(A.O,{fontWeight:"bold",children:t({id:d(`attribute.${e}`),defaultMessage:e})}),rl.includes(e)&&(0,n.jsx)(il,{})]}),(0,n.jsx)(v.C,{children:(0,n.jsx)(A.O,{variant:"pi",textColor:"neutral600",children:t({id:d(`attribute.${e}.description`),defaultMessage:"A type for modeling data"})})})]})]})})},cl=({attributes:e})=>(0,n.jsx)(z.a,{tagName:"button",children:(0,n.jsx)(v.C,{direction:"column",alignItems:"stretch",gap:8,children:e.map((t,a)=>(0,n.jsx)(q.y,{gap:3,children:t.map(r=>(0,n.jsx)(te.C,{col:6,children:(0,n.jsx)(ll,{type:r})},r))},a))})}),dl=({customFieldUid:e,customField:t})=>{const{type:a,intlLabel:r,intlDescription:o}=t,{formatMessage:l}=(0,Q.c)(),{onClickSelectCustomField:i}=Je(),c=()=>{i({attributeType:a,customFieldUid:e})};return(0,n.jsx)(ta,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:c,children:(0,n.jsxs)(v.C,{children:[(0,n.jsx)(lt,{type:a,customField:e}),(0,n.jsxs)(h.k,{paddingLeft:4,children:[(0,n.jsx)(v.C,{children:(0,n.jsx)(A.O,{fontWeight:"bold",children:l(r)})}),(0,n.jsx)(v.C,{children:(0,n.jsx)(A.O,{variant:"pi",textColor:"neutral600",children:l(o)})})]})]})})},ul=(0,D.default)(h.k)`
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${e.colors.neutral150} 100%)`};
  opacity: 0.33;
`,ml=()=>(0,n.jsx)(v.C,{wrap:"wrap",gap:4,children:[...Array(4)].map((e,t)=>(0,n.jsx)(ul,{height:"138px",width:"375px",hasRadius:!0},`empty-card-${t}`))}),pl=()=>{const{formatMessage:e}=(0,Q.c)();return(0,n.jsxs)(h.k,{position:"relative",children:[(0,n.jsx)(ml,{}),(0,n.jsx)(h.k,{position:"absolute",top:6,width:"100%",children:(0,n.jsxs)(v.C,{alignItems:"center",justifyContent:"center",direction:"column",children:[(0,n.jsx)(k.G,{as:Gi.c,color:"",width:"160px",height:"88px"}),(0,n.jsx)(h.k,{paddingTop:6,paddingBottom:4,children:(0,n.jsxs)(h.k,{textAlign:"center",children:[(0,n.jsx)(A.O,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:d("modalForm.empty.heading"),defaultMessage:"Nothing in here yet."})}),(0,n.jsx)(h.k,{paddingTop:4,children:(0,n.jsx)(A.O,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:d("modalForm.empty.sub-heading"),defaultMessage:"Find what you are looking for through a wide range of extensions."})})})]})}),(0,n.jsx)(oe.E,{to:`/marketplace?${Xi.stringify({categories:["Custom fields"]})}`,variant:"secondary",startIcon:(0,n.jsx)(Ge.c,{}),children:e({id:d("modalForm.empty.button"),defaultMessage:"Add custom fields"})})]})})]})},fl=()=>{const{formatMessage:e}=(0,Q.c)(),t=(0,L.QV)(),a=Object.entries(t.getAll());if(!a.length)return(0,n.jsx)(pl,{});const r=a.sort((o,l)=>o[1].name>l[1].name?1:-1);return(0,n.jsx)(z.a,{tagName:"button",children:(0,n.jsxs)(v.C,{direction:"column",alignItems:"stretch",gap:3,children:[(0,n.jsx)(q.y,{gap:3,children:r.map(([o,l])=>(0,n.jsx)(te.C,{col:6,children:(0,n.jsx)(dl,{customFieldUid:o,customField:l},o)},o))}),(0,n.jsx)(xt,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",isExternal:!0,children:e({id:d("modalForm.tabs.custom.howToLink"),defaultMessage:"How to add custom fields"})})]})})},gl=({attributes:e,forTarget:t,kind:a})=>{const{formatMessage:r}=(0,Q.c)(),o=d("modalForm.tabs.default"),l=d("modalForm.tabs.custom"),i=t.includes("component")?"component":a,c=d(`modalForm.sub-header.chooseAttribute.${i}`);return(0,n.jsx)(Pe.a,{padding:7,children:(0,n.jsxs)(me.M,{label:r({id:d("modalForm.tabs.label"),defaultMessage:"Default and Custom types tabs"}),id:"attribute-type-tabs",variant:"simple",children:[(0,n.jsxs)(v.C,{justifyContent:"space-between",children:[(0,n.jsx)(A.O,{variant:"beta",as:"h2",children:r({id:c,defaultMessage:"Select a field"})}),(0,n.jsxs)(ce.k,{children:[(0,n.jsx)(ce.s,{children:r({id:o,defaultMessage:"Default"})}),(0,n.jsx)(ce.s,{children:r({id:l,defaultMessage:"Custom"})})]})]}),(0,n.jsx)(h.k,{paddingBottom:6,children:(0,n.jsx)(ae.c,{})}),(0,n.jsxs)(re.o,{children:[(0,n.jsx)(re.G,{children:(0,n.jsx)(cl,{attributes:e})}),(0,n.jsx)(re.G,{children:(0,n.jsx)(fl,{})})]})]})})},hl=({intlLabel:e,name:t,options:a,onChange:r,value:o=null})=>{const{formatMessage:l}=(0,Q.c)(),i=e.id?l({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):t,c=f=>{let m="";f==="true"&&(m=!0),f==="false"&&(m=!1),r({target:{name:t,value:m,type:"select-default-boolean"}})};return(0,n.jsx)(se.M,{label:i,id:t,name:t,onChange:c,value:(o===null?"":o).toString(),children:a.map(({metadatas:{intlLabel:f,disabled:m,hidden:g},key:p,value:M})=>(0,n.jsx)(Oe.c,{value:M,disabled:m,hidden:g,children:f.defaultMessage},p))})},yl=(0,D.default)(v.C)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,Ee.Ih)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    will-change: transform, opacity;
    background: ${({theme:e})=>e.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({theme:e})=>e.colors.neutral0};
      width: ${({theme:e})=>e.spaces[5]};
      height: ${({theme:e})=>e.spaces[5]};
      border: solid 1px ${({theme:e})=>e.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({theme:e})=>e.spaces[3]};
        height: ${({theme:e})=>e.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({theme:e})=>e.colors.primary100};
    ${A.O} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    .checkmark {
      border: solid 1px ${({theme:e})=>e.colors.primary600};
      &::after {
        background: ${({theme:e})=>e.colors.primary600};
        transform: scale(1);
      }
    }
  }
`,Bt=({intlLabel:e,name:t,onChange:a,radios:r=[],value:o})=>{const{formatMessage:l}=(0,Q.c)();return(0,n.jsxs)(v.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(A.O,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:t,as:"label",children:l(e)}),(0,n.jsx)(yl,{gap:4,alignItems:"stretch",children:r.map(i=>(0,n.jsxs)("label",{htmlFor:i.value.toString(),className:"container",children:[(0,n.jsx)("input",{id:i.value.toString(),name:t,className:"option-input",checked:i.value===o,value:i.value,onChange:a,type:"radio"},i.value),(0,n.jsx)(h.k,{className:"option",padding:4,children:(0,n.jsxs)(v.C,{children:[(0,n.jsx)(h.k,{paddingRight:4,children:(0,n.jsx)("span",{className:"checkmark"})}),(0,n.jsxs)(v.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(A.O,{fontWeight:"bold",children:l(i.title)}),(0,n.jsx)(A.O,{variant:"pi",textColor:"neutral600",children:l(i.description)})]})]})})]},i.value))})]})},xl=({onChange:e,name:t,intlLabel:a,...r})=>{const o=l=>{const i=l.target.value!=="false";e({target:{name:t,value:i,type:"boolean-radio-group"}})};return(0,n.jsx)(Bt,{...r,name:t,onChange:o,intlLabel:a})},bl=({error:e,intlLabel:t,modifiedData:a,name:r,onChange:o,value:l=null})=>{const{formatMessage:i}=(0,Q.c)(),[c,f]=(0,u.useState)(!!l||l===0),m=t.id?i({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):r,g=a.type==="biginteger"?"text":"number",p=!a.type,M=e?i({id:e,defaultMessage:e}):"";return(0,n.jsxs)(v.C,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(xe.y,{id:r,name:r,onValueChange:T=>{o({target:{name:r,value:T?g==="text"?"0":0:null}}),f(Z=>!Z)},value:c,children:m}),c&&(0,n.jsx)(h.k,{paddingLeft:6,style:{maxWidth:"200px"},children:g==="text"?(0,n.jsx)(je.g,{label:"","aria-label":m,disabled:p,error:M,id:r,name:r,onChange:o,value:l===null?"":l}):(0,n.jsx)(ft.W,{"aria-label":m,disabled:p,error:M,id:r,name:r,onValueChange:T=>{o({target:{name:r,value:T,type:g}})},value:l||0})})]})},vl=({onChange:e,...t})=>{const a=(0,L.eo)(),r=o=>{a({type:"info",message:{id:d("contentType.kind.change.warning"),defaultMessage:"You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."}}),e(o)};return(0,n.jsx)(Bt,{...t,onChange:r})},Cl=({description:e,disabled:t=!1,intlLabel:a,isCreating:r,name:o,onChange:l,value:i=!1})=>{const{formatMessage:c}=(0,Q.c)(),[f,m]=(0,u.useState)(!1),g=a.id?c({id:a.id,defaultMessage:a.defaultMessage},{...a.values}):o,p=e?c({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",M=()=>m($=>!$),T=()=>{l({target:{name:o,value:!1}}),M()},b=({target:{checked:$}})=>{if(!$&&!r){M();return}l({target:{name:o,value:$}})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xe.y,{checked:i,disabled:t,hint:p,name:o,onChange:b,children:g}),(0,n.jsx)(L.cz,{isOpen:f,onToggleDialog:M,onConfirm:T,bodyText:{id:d("popUpWarning.draft-publish.message"),defaultMessage:"If you disable the draft & publish, your drafts will be deleted."},leftButtonText:{id:"components.popUpWarning.button.cancel",defaultMessage:"No, cancel"},rightButtonText:{id:d("popUpWarning.draft-publish.button.confirm"),defaultMessage:"Yes, disable"}})]})},Tl=({categoryName:e,deleteCategory:t,deleteComponent:a,deleteContentType:r,isAttributeModal:o,isCustomFieldModal:l,isComponentAttribute:i,isComponentToDzModal:c,isContentTypeModal:f,isCreatingComponent:m,isCreatingComponentAttribute:g,isCreatingComponentInDz:p,isCreatingComponentWhileAddingAField:M,isCreatingContentType:T,isCreatingDz:b,isComponentModal:$,isDzAttribute:Z,isEditingAttribute:S,isEditingCategory:N,isInFirstComponentStep:O,onSubmitAddComponentAttribute:U,onSubmitAddComponentToDz:_,onSubmitCreateContentType:he,onSubmitCreateComponent:$e,onSubmitCreateDz:V,onSubmitEditAttribute:Te,onSubmitEditCategory:ee,onSubmitEditComponent:Se,onSubmitEditContentType:pe,onSubmitEditCustomFieldAttribute:le,onSubmitEditDz:ze,onClickFinish:ye})=>{const{formatMessage:J}=(0,Q.c)();return c?p?(0,n.jsx)(ne.Z,{variant:"secondary",type:"submit",onClick:E=>{E.preventDefault(),_(E,!0)},startIcon:(0,n.jsx)(Ge.c,{}),children:J({id:d("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"})}):(0,n.jsx)(ne.Z,{variant:"default",type:"submit",onClick:E=>{E.preventDefault(),_(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):o&&Z&&!b?(0,n.jsx)(ne.Z,{variant:"default",type:"submit",onClick:E=>{E.preventDefault(),ye(),ze(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):o&&Z&&b?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(ne.Z,{variant:"secondary",type:"submit",onClick:E=>{E.preventDefault(),V(E,!0)},startIcon:(0,n.jsx)(Ge.c,{}),children:J({id:d("form.button.add-components-to-dynamiczone"),defaultMessage:"Add components to the zone"})})}):o&&i?O?(0,n.jsx)(ne.Z,{variant:"secondary",type:"submit",onClick:E=>{E.preventDefault(),U(E,!0)},children:J(g?{id:d("form.button.configure-component"),defaultMessage:"Configure the component"}:{id:d("form.button.select-component"),defaultMessage:"Configure the component"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.Z,{variant:"secondary",type:"submit",onClick:E=>{E.preventDefault(),U(E,!0)},startIcon:(0,n.jsx)(Ge.c,{}),children:J(M?{id:d("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"}:{id:d("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ne.Z,{variant:"default",type:"button",onClick:E=>{E.preventDefault(),ye(),U(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):o&&!i&&!Z?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.Z,{type:S?"button":"submit",variant:"secondary",onClick:E=>{E.preventDefault(),Te(E,!0)},startIcon:(0,n.jsx)(Ge.c,{}),children:J({id:d("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ne.Z,{type:S?"submit":"button",variant:"default",onClick:E=>{E.preventDefault(),ye(),Te(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):f?(0,n.jsxs)(n.Fragment,{children:[!T&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.Z,{type:"button",variant:"danger",onClick:E=>{E.preventDefault(),r()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ne.Z,{type:"submit",variant:"default",onClick:E=>{E.preventDefault(),pe(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),T&&(0,n.jsx)(ne.Z,{type:"submit",variant:"secondary",onClick:E=>{E.preventDefault(),he(E,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):$?(0,n.jsxs)(n.Fragment,{children:[!m&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.Z,{type:"button",variant:"danger",onClick:E=>{E.preventDefault(),a()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ne.Z,{type:"submit",variant:"default",onClick:E=>{E.preventDefault(),Se(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),m&&(0,n.jsx)(ne.Z,{type:"submit",variant:"secondary",onClick:E=>{E.preventDefault(),$e(E,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):N?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.Z,{type:"button",variant:"danger",onClick:E=>{E.preventDefault(),e&&t(e)},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ne.Z,{type:"submit",variant:"default",onClick:E=>{E.preventDefault(),ee(E)},children:J({id:"global.finish",defaultMessage:"finish"})})]}):l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ne.Z,{type:S?"button":"submit",variant:"secondary",onClick:E=>{E.preventDefault(),le(E,!0)},startIcon:(0,n.jsx)(Ge.c,{}),children:J({id:d("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ne.Z,{type:S?"submit":"button",variant:"default",onClick:E=>{E.preventDefault(),ye(),le(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):null},jl=({actionType:e=null,attributeName:t,attributeType:a,categoryName:r,contentTypeKind:o,dynamicZoneTarget:l,forTarget:i,modalType:c=null,targetUid:f,customFieldUid:m=null,showBackLink:g=!1})=>{const{formatMessage:p}=(0,Q.c)(),{modifiedData:M}=We(),{onOpenModalAddField:T}=Je();let b="component",$=[];const Z=M?.[i]?.[f]||M?.[i]||null,S=Z?.schema.displayName;if(c==="contentType"&&(b=o),["component","editCategory"].includes(c||"")&&(b="component"),["component","contentType"].includes(c||"")){let O=d(`modalForm.component.header-${e}`);return c==="contentType"&&(O=d(`modalForm.${o}.header-create`)),e==="edit"&&(O=d("modalForm.header-edit")),(0,n.jsx)(at.k,{children:(0,n.jsxs)(v.C,{children:[(0,n.jsx)(h.k,{children:(0,n.jsx)(lt,{type:b})}),(0,n.jsx)(h.k,{paddingLeft:3,children:(0,n.jsx)(A.O,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:p({id:O},{name:S})})})]})})}return $=[{label:S,info:{category:Z?.category||null,name:Z?.schema.displayName}}],c==="chooseAttribute"&&(b=["component","components"].includes(i)?"component":Z.schema.kind),c==="addComponentToDynamicZone"&&(b="dynamiczone",$.push({label:l})),(c==="attribute"||c==="customField")&&(b=a,$.push({label:t})),c==="editCategory"&&($=[{label:p({id:d("modalForm.header.categories"),defaultMessage:"Categories"})},{label:r}]),(0,n.jsx)(at.k,{children:(0,n.jsxs)(v.C,{gap:3,children:[g&&(0,n.jsx)(xt,{"aria-label":p({id:d("modalForm.header.back"),defaultMessage:"Back"}),startIcon:(0,n.jsx)(Dn.c,{}),onClick:()=>T({forTarget:i,targetUid:f}),href:"#back",isExternal:!1}),(0,n.jsx)(lt,{type:b,customField:m}),(0,n.jsx)(Sn,{label:$.map(({label:O})=>O).join(","),children:$.map(({label:O,info:U},_,he)=>{if(O=Ue(O),!O)return null;const $e=`${O}.${_}`;return U?.category&&(O=`${O} (${Ue(U.category)} - ${Ue(U.name)})`),(0,n.jsx)(An,{isCurrent:_===he.length-1,children:O},$e)})})]})})},Ml=({modalType:e,forTarget:t,kind:a,actionType:r,step:o})=>{switch(e){case"chooseAttribute":return d(`modalForm.sub-header.chooseAttribute.${t?.includes("component")?"component":a||"collectionType"}`);case"attribute":return d(`modalForm.sub-header.attribute.${r}${o!=="null"&&o!==null&&r!=="edit"?".step":""}`);case"customField":return d(`modalForm.sub-header.attribute.${r}`);case"addComponentToDynamicZone":return d("modalForm.sub-header.addComponentToDynamicZone");default:return d("configurations")}},$l=({actionType:e,modalType:t,forTarget:a,kind:r,step:o,attributeType:l,attributeName:i,customField:c})=>{const{formatMessage:f}=(0,Q.c)(),m=t==="customField"?c?.intlLabel:{id:d(`attribute.${l}`)};return(0,n.jsxs)(v.C,{direction:"column",alignItems:"flex-start",paddingBottom:2,gap:1,children:[(0,n.jsx)(A.O,{as:"h2",variant:"beta",children:f({id:Ml({actionType:e,forTarget:a,kind:r,step:o,modalType:t}),defaultMessage:"Add new field"},{type:m?Ue(f(m)):"",name:Ue(i),step:o})}),(0,n.jsx)(A.O,{variant:"pi",textColor:"neutral600",children:f({id:d(`attribute.${l}.description`),defaultMessage:"A type for modeling data"})})]})},Pt={alien:$o.c,apps:So.c,archive:Ao.c,arrowDown:Fo.c,arrowLeft:Dn.c,arrowRight:Lo.c,arrowUp:No.c,attachment:Oo.c,bell:Eo.c,bold:Ro.c,book:Io.c,briefcase:Do.c,brush:wo.c,bulletList:ko.c,calendar:Bo.c,car:Po.c,cast:Uo.c,chartBubble:Wo.c,chartCircle:zo.c,chartPie:Zo.c,check:Vo.c,clock:Go.c,cloud:Ho.c,code:Qo.c,cog:Yo.c,collapse:Ko.c,command:Xo.c,connector:Jo.c,crop:qo.c,crown:_o.c,cube:er.c,cup:tr.c,cursor:nr.c,dashboard:ar.c,database:sr.c,discuss:or.c,doctor:rr.c,earth:ir.c,emotionHappy:lr.c,emotionUnhappy:cr.c,envelop:dr.c,exit:ur.c,expand:mr.c,eye:pr.c,feather:fr.c,file:gr.c,fileError:hr.c,filePdf:yr.c,filter:xr.c,folder:br.c,gate:vr.c,gift:Cr.c,globe:Tr.c,grid:jr.c,handHeart:Mr.c,hashtag:$r.c,headphone:Sr.c,heart:Ar.c,house:Fr.c,information:Lr.c,italic:Nr.c,key:Or.c,landscape:Er.c,layer:Rr.c,layout:Ir.c,lightbulb:Dr.c,link:wr.c,lock:kr.c,magic:Br.c,manyToMany:wn.c,manyToOne:kn.c,manyWays:Bn.c,medium:Pr.c,message:Ur.c,microphone:Wr.c,monitor:zr.c,moon:Zr.c,music:Vr.c,oneToMany:Pn.c,oneToOne:Un.c,oneWay:Wn.c,paint:Gr.c,paintBrush:Hr.c,paperPlane:Qr.c,pencil:Yr.c,phone:Kr.c,picture:Xr.c,pin:Jr.c,pinMap:qr.c,plane:_r.c,play:ei.c,plus:Ge.c,priceTag:ti.c,puzzle:ni.c,question:ai.c,quote:si.c,repeat:oi.c,restaurant:ri.c,rocket:ii.c,rotate:li.c,scissors:ci.c,search:ht.c,seed:di.c,server:ui.c,shield:mi.c,shirt:pi.c,shoppingCart:fi.c,slideshow:gi.c,stack:hi.c,star:yi.c,store:xi.c,strikeThrough:bi.c,sun:vi.c,television:Ci.c,thumbDown:Ti.c,thumbUp:ji.c,train:Mi.c,twitter:$i.c,typhoon:Si.c,underline:Ai.c,user:Fi.c,volumeMute:Li.c,volumeUp:Ni.c,walk:Oi.c,wheelchair:Ei.c,write:Ri.c},Sl=(0,D.default)(v.C)`
  label {
    ${(0,Ee.Ih)()}
    border-radius: ${({theme:e})=>e.borderRadius};
    border: 1px solid ${({theme:e})=>e.colors.neutral100};
  }
`,Al=({iconKey:e,name:t,onChange:a,isSelected:r,ariaLabel:o})=>(0,n.jsx)(gt.I,{name:t,required:!1,children:(0,n.jsxs)(Na.u,{htmlFor:e,id:`${e}-label`,children:[(0,n.jsxs)(Oa.K,{children:[(0,n.jsx)(Ea.e,{type:"radio",id:e,name:t,checked:r,onChange:a,value:e,"aria-checked":r,"aria-labelledby":`${e}-label`}),o]}),(0,n.jsx)(v.C,{padding:2,cursor:"pointer",hasRadius:!0,background:r?"primary200":void 0,children:(0,n.jsx)(k.G,{as:Pt[e],color:r?"primary600":"neutral300"})})]})}),Fl=({intlLabel:e,name:t,onChange:a,value:r=""})=>{const{formatMessage:o}=(0,Q.c)(),[l,i]=(0,u.useState)(!1),[c,f]=(0,u.useState)(""),m=Object.keys(Pt),[g,p]=(0,u.useState)(m),M=(0,u.useRef)(null),T=(0,u.useRef)(null),b=()=>{i(!l)},$=({target:{value:N}})=>{f(N),p(()=>m.filter(O=>O.toLowerCase().includes(N.toLowerCase())))},Z=()=>{b(),f(""),p(m)},S=()=>{a({target:{name:t,value:""}})};return(0,u.useEffect)(()=>{l&&T.current?.focus()},[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(v.C,{justifyContent:"space-between",paddingBottom:2,children:[(0,n.jsx)(A.O,{variant:"pi",fontWeight:"bold",textColor:"neutral800",as:"label",children:o(e)}),(0,n.jsxs)(v.C,{gap:1,children:[l?(0,n.jsx)(Ra.E,{ref:T,name:"searchbar",size:"S",placeholder:o({id:d("ComponentIconPicker.search.placeholder"),defaultMessage:"Search for an icon"}),onBlur:()=>{c||b()},onChange:$,value:c,onClear:Z,clearLabel:o({id:d("IconPicker.search.clear.label"),defaultMessage:"Clear the icon search"}),children:o({id:d("IconPicker.search.placeholder.label"),defaultMessage:"Search for an icon"})}):(0,n.jsx)(an.w,{ref:M,onClick:b,"aria-label":o({id:d("IconPicker.search.button.label"),defaultMessage:"Search icon button"}),icon:(0,n.jsx)(ht.c,{}),noBorder:!0}),r&&(0,n.jsx)(Ia.o,{description:o({id:d("IconPicker.remove.tooltip"),defaultMessage:"Remove the selected icon"}),children:(0,n.jsx)(an.w,{onClick:S,"aria-label":o({id:d("IconPicker.remove.button"),defaultMessage:"Remove the selected icon button"}),icon:(0,n.jsx)(Hi.c,{}),noBorder:!0})})]})]}),(0,n.jsx)(Sl,{position:"relative",padding:1,background:"neutral100",hasRadius:!0,wrap:"wrap",gap:2,maxHeight:"126px",overflow:"auto",textAlign:"center",children:g.length>0?g.map(N=>(0,n.jsx)(Al,{iconKey:N,name:t,onChange:a,isSelected:N===r,ariaLabel:o({id:d("IconPicker.icon.label"),defaultMessage:"Select {icon} icon"},{icon:N})},N)):(0,n.jsx)(h.k,{padding:4,grow:2,children:(0,n.jsx)(A.O,{variant:"delta",textColor:"neutral600",textAlign:"center",children:o({id:d("IconPicker.emptyState.label"),defaultMessage:"No icon found"})})})})]})},Ll=({description:e,error:t,intlLabel:a,modifiedData:r,name:o,onChange:l,value:i})=>{const{formatMessage:c}=(0,Q.c)(),f=(0,u.useRef)(l),m=r?.displayName||"";(0,u.useEffect)(()=>{if(m){const T=(0,C.n)(m);try{const b=Dt(T,2);f.current({target:{name:o,value:b}})}catch{f.current({target:{name:o,value:T}})}}else f.current({target:{name:o,value:""}})},[m,o]);const g=t?c({id:t,defaultMessage:t}):"",p=e?c({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",M=c(a);return(0,n.jsx)(je.g,{error:g,label:M,id:o,hint:p,name:o,onChange:l,value:i||""})},Nl=({oneThatIsCreatingARelationWithAnother:e,target:t})=>{const{contentTypes:a,sortedContentTypesList:r}=We(),o=(0,Xe.OY)(),l=r.filter(_n),{plugin:i=null,schema:{displayName:c}={displayName:"error"}}=a?.[t]??{},f=({uid:m,plugin:g,title:p,restrictRelationsTo:M})=>()=>{const T=g?`${g}_${p}`:p;o({type:C.O,target:{value:m,oneThatIsCreatingARelationWithAnother:e,selectedContentTypeFriendlyName:T,targetContentTypeAllowedRelations:M}})};return(0,n.jsxs)(Co,{children:[(0,n.jsx)(Ol,{children:`${c} ${i?`(from: ${i})`:""}`}),(0,n.jsx)(jo,{zIndex:5,children:l.map(({uid:m,title:g,restrictRelationsTo:p,plugin:M})=>(0,n.jsxs)(Mo,{onSelect:f({uid:m,plugin:M,title:g,restrictRelationsTo:p}),children:[g,"\xA0",M&&(0,n.jsxs)(n.Fragment,{children:["(from: ",M,")"]})]},m))})]})},Ol=(0,D.default)(To)`
  svg {
    width: ${6/16}rem;
    height: ${4/16}rem;
  }
`,na=({disabled:e=!1,error:t,header:a,isMain:r=!1,name:o,onChange:l,oneThatIsCreatingARelationWithAnother:i="",target:c="",value:f=""})=>(0,n.jsxs)(h.k,{background:"neutral100",hasRadius:!0,borderColor:"neutral200",children:[(0,n.jsx)(v.C,{paddingTop:r?4:1,paddingBottom:r?3:1,justifyContent:"center",children:r?(0,n.jsx)(A.O,{variant:"pi",fontWeight:"bold",textColor:"neutral800",children:a}):(0,n.jsx)(Nl,{target:c,oneThatIsCreatingARelationWithAnother:i})}),(0,n.jsx)(ae.c,{background:"neutral200"}),(0,n.jsx)(h.k,{padding:4,children:(0,n.jsx)(L.u,{disabled:e,error:t?.id||null,intlLabel:{id:d("form.attribute.item.defineRelation.fieldName"),defaultMessage:"Field name"},name:o,onChange:l,type:"text",value:f})})]}),El=(0,D.default)(h.k)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({theme:e})=>e.colors.primary600};
    z-index: 0;
  }
`,Rl=(0,D.default)(h.k)`
  background: ${({theme:e,isSelected:t})=>e.colors[t?"primary100":"neutral0"]};
  border: 1px solid
    ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral200"]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`,Il=(0,D.default)(v.C)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`,Dl={oneWay:Wn.c,oneToOne:Un.c,oneToMany:Pn.c,manyToOne:kn.c,manyToMany:wn.c,manyWay:Bn.c},wl=({naturePickerType:e,oneThatIsCreatingARelationWithAnother:t,relationType:a,target:r})=>{const o=(0,Xe.OY)(),{formatMessage:l}=(0,Q.c)(),{contentTypes:i,modifiedData:c}=We(),f=["oneWay","oneToOne","oneToMany","manyToOne","manyToMany","manyWay"],m=["oneWay","manyWay"],p=(e==="contentType"?w(c,[e,"schema","kind"],""):e)==="collectionType"?f:m,M=a==="manyToOne",T=w(i,[r,"schema","displayName"],"unknown"),b=M?T:t,$=M?t:T,Z=Dt(b,a==="manyToMany"?2:1),S=w(i,[r,"schema","restrictRelationsTo"],null),N=Dt($,["manyToMany","oneToMany","manyToOne","manyWay"].includes(a)?2:1);return a?(0,n.jsxs)(v.C,{style:{flex:1},children:[(0,n.jsx)(El,{children:(0,n.jsx)(v.C,{paddingLeft:9,paddingRight:9,paddingTop:1,justifyContent:"center",children:(0,n.jsx)(z.a,{tagName:"button",children:(0,n.jsx)(v.C,{gap:3,children:p.map(O=>{const U=Dl[O],_=S===null||S.includes(O);return(0,n.jsx)(Rl,{as:"button",isSelected:a===O,disabled:!_,onClick:()=>{_&&o({type:C.a,target:{oneThatIsCreatingARelationWithAnother:t,targetContentType:r,value:O}})},padding:2,type:"button",children:(0,n.jsx)(U,{},O)},O)})})})})}),(0,n.jsxs)(Il,{justifyContent:"center",children:[(0,n.jsxs)(A.O,{children:[Yn(Z,{length:24}),"\xA0"]}),(0,n.jsxs)(A.O,{textColor:"primary600",children:[l({id:d(`relation.${a}`)}),"\xA0"]}),(0,n.jsx)(A.O,{children:Yn(N,{length:24})})]})]}):null},kl=({formErrors:e,mainBoxHeader:t,modifiedData:a,naturePickerType:r,onChange:o})=>{const l=(0,C.g)(a.relation,a.targetAttribute);return(0,n.jsxs)(v.C,{style:{position:"relative"},children:[(0,n.jsx)(na,{isMain:!0,header:t,error:e?.name||null,name:"name",onChange:o,value:a?.name||""}),(0,n.jsx)(wl,{naturePickerType:r,oneThatIsCreatingARelationWithAnother:t,relationType:l,target:a.target}),(0,n.jsx)(na,{disabled:["oneWay","manyWay"].includes(l),error:e?.targetAttribute||null,name:"targetAttribute",onChange:o,oneThatIsCreatingARelationWithAnother:t,target:a.target,value:a?.targetAttribute||""})]})},Bl=({error:e=null,intlLabel:t,name:a,onChange:r,value:o=void 0})=>{const{formatMessage:l}=(0,Q.c)(),{allComponentsCategories:i}=We(),[c,f]=(0,u.useState)(i),m=e?l({id:e,defaultMessage:e}):"",g=l(t),p=T=>{r({target:{name:a,value:T,type:"select-category"}})},M=T=>{f(b=>[...b,T]),p(T)};return(0,n.jsx)(Da.cT,{error:m,id:a,label:g,name:a,onChange:p,onCreateOption:M,value:o,children:c.map(T=>(0,n.jsx)(wa.m,{value:T,children:T},T))})},Pl=({error:e=null,intlLabel:t,isAddingAComponentToAnotherComponent:a,isCreating:r,isCreatingComponentWhileAddingAField:o,componentToCreate:l,name:i,onChange:c,targetUid:f,forTarget:m,value:g})=>{const{formatMessage:p}=(0,Q.c)(),M=e?p({id:e,defaultMessage:e}):"",T=p(t),{componentsGroupedByCategory:b,componentsThatHaveOtherComponentInTheirAttributes:$}=We(),Z=["component","components"].includes(m);let S=Object.entries(b).reduce((N,O)=>{const[U,_]=O,he=_.map($e=>({uid:$e.uid,label:$e.schema.displayName,categoryName:U}));return[...N,...he]},[]);return a&&(S=S.filter(N=>!$.includes(N.uid))),Z&&(S=S.filter(N=>N.uid!==f)),o&&(S=[{uid:g,label:l?.displayName,categoryName:l?.category}]),(0,n.jsx)(se.M,{disabled:o||!r,error:M,label:T,id:i,name:i,onChange:N=>{c({target:{name:i,value:N,type:"select-category"}})},value:g||"",children:S.map(N=>(0,n.jsx)(Oe.c,{value:N.uid,children:`${N.categoryName} - ${N.label}`},N.uid))})},Ul=({dynamicZoneTarget:e,intlLabel:t,name:a,onChange:r,value:o})=>{const{formatMessage:l}=(0,Q.c)(),{componentsGroupedByCategory:i,modifiedData:c}=We(),m=kt(c.contentType.schema.attributes,e)?.components||[],g=Object.keys(i).reduce((T,b)=>{const $=i[b].filter(({uid:Z})=>!m.includes(Z));return $.length>0&&(T[b]=$),T},{}),p=Object.entries(g).reduce((T,b)=>{const[$,Z]=b,S={label:$,children:Z.map(({uid:N,schema:{displayName:O}})=>({label:O,value:N}))};return T.push(S),T},[]),M=l({id:d("components.SelectComponents.displayed-value"),defaultMessage:"{number, plural, =0 {# components} one {# component} other {# components}} selected"},{number:o?.length??0});return(0,n.jsx)(B.U,{id:"select1",label:l(t),customizeContent:()=>M,name:a,onChange:T=>{r({target:{name:a,value:T,type:"select-components"}})},options:p,value:o||[]})},Wl=({intlLabel:e,error:t=void 0,modifiedData:a,name:r,onChange:o,options:l,value:i=""})=>{const{formatMessage:c}=(0,Q.c)(),f=c(e),m=t?c({id:t,defaultMessage:t}):"",g=p=>{o({target:{name:r,value:p,type:"select"}}),i&&a.default!==void 0&&a.default!==null&&o({target:{name:"default",value:null}})};return(0,n.jsx)(se.M,{error:m,label:f,id:r,name:r,onChange:g,value:i||"",children:l.map(({metadatas:{intlLabel:p,disabled:M,hidden:T},key:b,value:$})=>(0,n.jsx)(Oe.c,{value:$,disabled:M,hidden:T,children:c({id:p.id,defaultMessage:p.defaultMessage},p.values)},b))})},aa=({intlLabel:e,error:t=void 0,modifiedData:a,name:r,onChange:o,options:l,value:i=""})=>{const{formatMessage:c}=(0,Q.c)(),f=c(e),m=t?c({id:t,defaultMessage:t}):"",g=p=>{o({target:{name:r,value:p,type:"select"}}),i&&(p==="biginteger"&&i!=="biginteger"&&(a.default!==void 0&&a.default!==null&&o({target:{name:"default",value:null}}),a.max!==void 0&&a.max!==null&&o({target:{name:"max",value:null}}),a.min!==void 0&&a.min!==null&&o({target:{name:"min",value:null}})),typeof p=="string"&&["decimal","float","integer"].includes(p)&&i==="biginteger"&&(a.default!==void 0&&a.default!==null&&o({target:{name:"default",value:null}}),a.max!==void 0&&a.max!==null&&o({target:{name:"max",value:null}}),a.min!==void 0&&a.min!==null&&o({target:{name:"min",value:null}})))};return(0,n.jsx)(se.M,{error:m,label:f,id:r,name:r,onChange:g,value:i||"",children:l.map(({metadatas:{intlLabel:p,disabled:M,hidden:T},key:b,value:$})=>(0,n.jsx)(Oe.c,{value:$,disabled:M,hidden:T,children:c(p)},b))})};aa.defaultProps={error:void 0,value:""};const zl=({description:e=null,error:t=null,intlLabel:a,modifiedData:r,name:o,onChange:l,value:i=null})=>{const{formatMessage:c}=(0,Q.c)(),f=(0,u.useRef)(l),m=r?.displayName||"";(0,u.useEffect)(()=>{m?f.current({target:{name:o,value:(0,C.n)(m)}}):f.current({target:{name:o,value:""}})},[m,o]);const g=t?c({id:t,defaultMessage:t}):"",p=e?c({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",M=c(a);return(0,n.jsx)(je.g,{error:g,label:M,id:o,hint:p,name:o,onChange:l,value:i||""})},sa=({form:e,formErrors:t,genericInputProps:a,modifiedData:r,onChange:o})=>{const{formatMessage:l}=(0,Q.c)();return(0,n.jsx)(n.Fragment,{children:e.map((i,c)=>i.items.length===0?null:(0,n.jsxs)(h.k,{children:[i.sectionTitle&&(0,n.jsx)(h.k,{paddingBottom:4,children:(0,n.jsx)(A.O,{variant:"delta",as:"h3",children:l(i.sectionTitle)})}),(0,n.jsx)(q.y,{gap:4,children:i.items.map((f,m)=>{const g=`${c}.${m}`,p=w(r,f.name,void 0),M=Object.keys(t).find(b=>b===f.name),T=M?t[M].id:w(t,[...f.name.split(".").filter(b=>b!=="componentToCreate"),"id"],null);return f.type==="pushRight"?(0,n.jsx)(te.C,{col:f.size||6,children:(0,n.jsx)("div",{})},f.name||g):(0,n.jsx)(te.C,{col:f.size||6,children:(0,n.jsx)(L.u,{...f,...a,error:T,onChange:o,value:p})},f.name||g)})})]},c))})},Zl=({description:e=null,disabled:t=!1,error:a="",intlLabel:r,labelAction:o,name:l,onChange:i,placeholder:c=null,value:f=""})=>{const{formatMessage:m}=(0,Q.c)(),g=a?m({id:a,defaultMessage:a}):"",p=e?m({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",M=m(r),T=c?m({id:c.id,defaultMessage:c.defaultMessage},{...c.values}):"",b=Array.isArray(f)?f.join(`
`):"",$=Z=>{const S=Z.target.value.split(`
`);i({target:{name:l,value:S}})};return(0,n.jsx)(ka.A,{disabled:t,error:g,label:M,labelAction:o,id:l,hint:p,name:l,onChange:$,placeholder:T,value:b,children:b})},Be={name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:d("modalForm.attribute.form.base.name.description"),defaultMessage:"No space is allowed for the name of the attribute"}},Vl={sections:[{sectionTitle:null,items:[Be]}]},_e={base(e=""){return[{sectionTitle:null,items:[{name:`${e}displayName`,type:"text",intlLabel:{id:d("contentType.displayName.label"),defaultMessage:"Display Name"}},{name:`${e}category`,type:"select-category",intlLabel:{id:d("modalForm.components.create-component.category.label"),defaultMessage:"Select a category or enter a name to create a new one"}}]},{sectionTitle:null,items:[{name:`${e}icon`,type:"icon-picker",size:12,intlLabel:{id:d("modalForm.components.icon.label"),defaultMessage:"Icon"}}]}]},advanced(){return[]}},R={default:{name:"default",type:"text",intlLabel:{id:d("form.attribute.settings.default"),defaultMessage:"Default value"}},max:{name:"max",type:"checkbox-with-number-field",intlLabel:{id:d("form.attribute.item.maximum"),defaultMessage:"Maximum value"}},maxLength:{name:"maxLength",type:"checkbox-with-number-field",intlLabel:{id:d("form.attribute.item.maximumLength"),defaultMessage:"Maximum length"}},min:{name:"min",type:"checkbox-with-number-field",intlLabel:{id:d("form.attribute.item.minimum"),defaultMessage:"Minimum value"}},minLength:{name:"minLength",type:"checkbox-with-number-field",intlLabel:{id:d("form.attribute.item.minimumLength"),defaultMessage:"Minimum length"}},private:{name:"private",type:"checkbox",intlLabel:{id:d("form.attribute.item.privateField"),defaultMessage:"Private field"},description:{id:d("form.attribute.item.privateField.description"),defaultMessage:"This field will not show up in the API response"}},regex:{intlLabel:{id:d("form.attribute.item.text.regex"),defaultMessage:"RegExp pattern"},name:"regex",type:"text",description:{id:d("form.attribute.item.text.regex.description"),defaultMessage:"The text of the regular expression"}},required:{name:"required",type:"checkbox",intlLabel:{id:d("form.attribute.item.requiredField"),defaultMessage:"Required field"},description:{id:d("form.attribute.item.requiredField.description"),defaultMessage:"You won't be able to create an entry if this field is empty"}},unique:{name:"unique",type:"checkbox",intlLabel:{id:d("form.attribute.item.uniqueField"),defaultMessage:"Unique field"},description:{id:d("form.attribute.item.uniqueField.description"),defaultMessage:"You won't be able to create an entry if there is an existing entry with identical content"}}},Gl={blocks(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},boolean(){return{sections:[{sectionTitle:null,items:[{autoFocus:!0,type:"select-default-boolean",intlLabel:{id:d("form.attribute.settings.default"),defaultMessage:"Default value"},name:"default",options:[{value:"true",key:"true",metadatas:{intlLabel:{id:"true",defaultMessage:"true"}}},{value:"",key:"null",metadatas:{intlLabel:{id:"null",defaultMessage:"null"}}},{value:"false",key:"false",metadatas:{intlLabel:{id:"false",defaultMessage:"false"}}}]}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},component({repeatable:e},t){return t==="1"?{sections:_e.advanced()}:e?{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private,R.max,R.min]}]}:{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},date({type:e}){return{sections:[{sectionTitle:null,items:[{...R.default,type:e||"date",value:null,withDefaultValue:!1,disabled:!e,autoFocus:!1}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.private]}]}},dynamiczone(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.max,R.min]}]}},email(){return{sections:[{sectionTitle:null,items:[{...R.default,type:"email"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.maxLength,R.minLength,R.private]}]}},enumeration(e){return{sections:[{sectionTitle:null,items:[{name:"default",type:"select",intlLabel:{id:d("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{},options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}}},...(e.enum||[]).filter((t,a)=>e.enum.indexOf(t)===a&&t).map(t=>({key:t,value:t,metadatas:{intlLabel:{id:`${t}.no-override`,defaultMessage:t}}}))]},{intlLabel:{id:d("form.attribute.item.enumeration.graphql"),defaultMessage:"Name override for GraphQL"},name:"enumName",type:"text",validations:{},description:{id:d("form.attribute.item.enumeration.graphql.description"),defaultMessage:"Allows you to override the default generated name for GraphQL"}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},json(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},media(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:d("form.attribute.media.allowed-types"),defaultMessage:"Select allowed types of media"},name:"allowedTypes",type:"allowed-types-select",size:7,value:"",validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},number(e){const t=e.type==="decimal"||e.type==="float"?"any":1;return{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"default",type:e.type==="biginteger"?"text":"number",step:t,intlLabel:{id:d("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.max,R.min,R.private]}]}},password(){return{sections:[{sectionTitle:null,items:[R.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}},relation(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.private]}]}},richtext(){return{sections:[{sectionTitle:null,items:[R.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}},text(){return{sections:[{sectionTitle:null,items:[R.default,R.regex]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.maxLength,R.minLength,R.private]}]}},uid(e){return{sections:[{sectionTitle:null,items:[{...R.default,disabled:Boolean(e.targetField),type:"text"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}}},Ut={intlLabel:{id:"global.type",defaultMessage:"Type"},name:"createComponent",type:"boolean-radio-group",size:12,radios:[{title:{id:d("form.attribute.component.option.create"),defaultMessage:"Create a new component"},description:{id:d("form.attribute.component.option.create.description"),defaultMessage:"A component is shared across types and components, it will be available and accessible everywhere."},value:!0},{title:{id:d("form.attribute.component.option.reuse-existing"),defaultMessage:"Use an existing component"},description:{id:d("form.attribute.component.option.reuse-existing.description"),defaultMessage:"Reuse a component already created to keep your data consistent across content-types."},value:!1}]},oa={advanced:Gl,base:{component(e,t){if(t==="1"){const a=e.createComponent===!0?_e.base("componentToCreate."):[];return{sections:[{sectionTitle:null,items:[Ut]},...a]}}return{sections:[{sectionTitle:null,items:[Be,{name:"component",type:"select-component",intlLabel:{id:d("modalForm.attributes.select-component"),defaultMessage:"Select a component"},isMultiple:!1}]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"repeatable",type:"boolean-radio-group",size:12,radios:[{title:{id:d("form.attribute.component.option.repeatable"),defaultMessage:"Repeatable component"},description:{id:d("form.attribute.component.option.repeatable.description"),defaultMessage:"Best for multiple instances (array) of ingredients, meta tags, etc.."},value:!0},{title:{id:d("form.attribute.component.option.single"),defaultMessage:"Single component"},description:{id:d("form.attribute.component.option.single.description"),defaultMessage:"Best for grouping fields like full address, main information, etc..."},value:!1}]}]}]}},date(){return{sections:[{sectionTitle:null,items:[Be,{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",type:"select-date",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"date",value:"date",metadatas:{intlLabel:{id:d("form.attribute.item.date.type.date"),defaultMessage:"date (ex: 01/01/{currentYear})",values:{currentYear:new Date().getFullYear()}}}},{key:"datetime",value:"datetime",metadatas:{intlLabel:{id:d("form.attribute.item.date.type.datetime"),defaultMessage:"datetime (ex: 01/01/{currentYear} 00:00 AM)",values:{currentYear:new Date().getFullYear()}}}},{key:"time",value:"time",metadatas:{intlLabel:{id:d("form.attribute.item.date.type.time"),defaultMessage:"time (ex: 00:00 AM)"}}}]}]}]}},enumeration(){return{sections:[{sectionTitle:null,items:[Be]},{sectionTitle:null,items:[{name:"enum",type:"textarea-enum",size:6,intlLabel:{id:d("form.attribute.item.enumeration.rules"),defaultMessage:"Values (one line per value)"},placeholder:{id:d("form.attribute.item.enumeration.placeholder"),defaultMessage:`Ex:
morning
noon
evening`},validations:{required:!0}}]}]}},media(){return{sections:[{sectionTitle:null,items:[Be]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"multiple",size:12,type:"boolean-radio-group",radios:[{title:{id:d("form.attribute.media.option.multiple"),defaultMessage:"Multiple media"},description:{id:d("form.attribute.media.option.multiple.description"),defaultMessage:"Best for sliders, carousels or multiple files download"},value:!0},{title:{id:d("form.attribute.media.option.single"),defaultMessage:"Single media"},description:{id:d("form.attribute.media.option.single.description"),defaultMessage:"Best for avatar, profile picture or cover"},value:!1}]}]}]}},number(){return{sections:[{sectionTitle:null,items:[Be,{intlLabel:{id:d("form.attribute.item.number.type"),defaultMessage:"Number format"},name:"type",type:"select-number",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"integer",value:"integer",metadatas:{intlLabel:{id:d("form.attribute.item.number.type.integer"),defaultMessage:"integer (ex: 10)"}}},{key:"biginteger",value:"biginteger",metadatas:{intlLabel:{id:d("form.attribute.item.number.type.biginteger"),defaultMessage:"biginteger (ex: 123456789)"}}},{key:"decimal",value:"decimal",metadatas:{intlLabel:{id:d("form.attribute.item.number.type.decimal"),defaultMessage:"decimal (ex: 2.22)"}}},{key:"float",value:"float",metadatas:{intlLabel:{id:d("form.attribute.item.number.type.float"),defaultMessage:"decimal (ex: 3.3333333)"}}}]}]}]}},relation(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:"FIXME",defaultMessage:"FIXME"},name:"relation",size:12,type:"relation"}]}]}},string(){return{sections:[{sectionTitle:null,items:[Be]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:d("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:d("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:d("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:d("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},text(){return{sections:[{sectionTitle:null,items:[Be]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:d("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:d("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:d("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:d("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},uid(e,t,a){const r=a.filter(({type:o})=>["string","text"].includes(o)).map(({name:o})=>({key:o,value:o,metadatas:{intlLabel:{id:`${o}.no-override`,defaultMessage:o}}}));return{sections:[{sectionTitle:null,items:[{...Be,placeholder:{id:d("modalForm.attribute.form.base.name.placeholder"),defaultMessage:"e.g. slug, seoUrl, canonicalUrl"}},{intlLabel:{id:d("modalForm.attribute.target-field"),defaultMessage:"Attached field"},name:"targetField",type:"select",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"global.none",defaultMessage:"None"}}},...r]}]}]}}}},Wt=e=>e?qi(e,{decamelize:!1,lowercase:!1,separator:"_"}):"",ra=/^[A-Za-z][_0-9A-Za-z]*$/,ia=e=>({name:"attributeNameAlreadyUsed",message:L.aO.unique,test(t){return t?!e.includes(t):!1}}),zt=e=>({name:"forbiddenAttributeName",message:d("error.attributeName.reserved-name"),test(t){return t?!e.includes(t):!1}}),y={default:()=>j.Qb().nullable(),max:()=>j.CQ().integer().nullable(),min:()=>j.CQ().integer().when("max",(e,t)=>e?t.max(e,d("error.validation.minSupMax")):t).nullable(),maxLength:()=>j.CQ().integer().positive(d("error.validation.positive")).nullable(),minLength:()=>j.CQ().integer().min(0).when("maxLength",(e,t)=>e?t.max(e,d("error.validation.minSupMax")):t).nullable(),name(e,t){return j.Qb().test(ia(e)).test(zt(t)).matches(ra,L.aO.regex).required(L.aO.required)},required:()=>j.cT(),type:()=>j.Qb().required(L.aO.required),unique:()=>j.cT().nullable()},Zt=(e,t)=>({name:y.name(e,t),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength(),regex:j.Qb().test({name:"isValidRegExpPattern",message:d("error.validation.regex"),test(r){return new RegExp(r||"")!==null}}).nullable()}),Vt=()=>({name:"isMinSuperiorThanMax",message:d("error.validation.minSupMax"),test(e){if(!e)return!0;const{max:t}=this.parent;return!t||Number.isNaN(wt(e))?!0:wt(t)>=wt(e)}}),ct={date(e,t){const a={name:y.name(e,t),type:y.type()};return j.kt(a)},datetime(e,t){const a={name:y.name(e,t),type:y.type()};return j.kt(a)},time(e,t){const a={name:y.name(e,t),type:y.type()};return j.kt(a)},default(e,t){const a={name:y.name(e,t),type:y.type()};return j.kt(a)},biginteger(e,t){const a={name:y.name(e,t),type:y.type(),default:j.Qb().nullable().matches(/^-?\d*$/),unique:y.unique(),required:y.required(),max:j.Qb().nullable().matches(/^-?\d*$/,L.aO.regex),min:j.Qb().nullable().test(Vt()).matches(/^-?\d*$/,L.aO.regex)};return j.kt(a)},boolean(e,t){const a={name:y.name(e,t),default:j.cT().nullable(),required:y.required(),unique:y.unique()};return j.kt(a)},component(e,t){const a={name:y.name(e,t),type:y.type(),required:y.required(),max:y.max(),min:y.min(),component:j.Qb().required(L.aO.required)};return j.kt(a)},decimal(e,t){const a={name:y.name(e,t),type:y.type(),default:j.CQ(),required:y.required(),max:j.CQ(),min:j.CQ().test(Vt())};return j.kt(a)},dynamiczone(e,t){const a={name:y.name(e,t),type:y.type(),required:y.required(),max:y.max(),min:y.min()};return j.kt(a)},email(e,t){const a={name:y.name(e,t),type:y.type(),default:j.Qb().email().nullable(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength()};return j.kt(a)},enumeration(e,t){const a=/^[_A-Za-z][_0-9A-Za-z]*$/,r={name:j.Qb().test(ia(e)).test(zt(t)).matches(a,L.aO.regex).required(L.aO.required),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),enum:j.M$().of(j.Qb()).min(1,L.aO.min).test({name:"areEnumValuesUnique",message:d("error.validation.enum-duplicate"),test(o){return o?!Ji(o.map(Wt).filter((i,c,f)=>f.indexOf(i)!==c)).length:!1}}).test({name:"doesNotHaveEmptyValues",message:d("error.validation.enum-empty-string"),test:o=>o?!o.map(Wt).some(l=>l===""):!1}).test({name:"doesMatchRegex",message:d("error.validation.enum-regex"),test:o=>o?o.map(Wt).every(l=>a.test(l)):!1}),enumName:j.Qb().nullable()};return j.kt(r)},float(e,t){const a={name:y.name(e,t),type:y.type(),required:y.required(),default:j.CQ(),max:j.CQ(),min:j.CQ().test(Vt())};return j.kt(a)},integer(e,t){const a={name:y.name(e,t),type:y.type(),default:j.CQ().integer(),unique:y.unique(),required:y.required(),max:y.max(),min:y.min()};return j.kt(a)},json(e,t){const a={name:y.name(e,t),type:y.type(),required:y.required(),unique:y.unique()};return j.kt(a)},media(e,t){const a={name:y.name(e,t),type:y.type(),multiple:j.cT(),required:y.required(),allowedTypes:j.M$().of(j.Qb().oneOf(["images","videos","files","audios"])).min(1).nullable()};return j.kt(a)},password(e,t){const a={name:y.name(e,t),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength()};return j.kt(a)},relation(e,t,a,{initialData:r,modifiedData:o}){const l={name:y.name(e,t),target:j.Qb().required(L.aO.required),relation:j.Qb().required(),type:j.Qb().required(),targetAttribute:j.Wk(()=>{const i=(0,C.g)(o.relation,o.targetAttribute);if(i==="oneWay"||i==="manyWay")return j.Qb().nullable();const c=j.Qb().test(zt(t)),m=[...a.map(({name:g})=>g),o.name].filter(g=>g!==r.targetAttribute);return c.matches(ra,L.aO.regex).test({name:"forbiddenTargetAttributeName",message:d("error.validation.relation.targetAttribute-taken"),test(g){return g?!m.includes(g):!1}}).required(L.aO.required)})};return j.kt(l)},richtext(e,t){const a={name:y.name(e,t),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength()};return j.kt(a)},blocks(e,t){const a={name:y.name(e,t),type:y.type(),default:y.default(),unique:y.unique(),required:y.required(),maxLength:y.maxLength(),minLength:y.minLength()};return j.kt(a)},string(e,t){const a=Zt(e,t);return j.kt(a)},text(e,t){const a=Zt(e,t);return j.kt(a)},uid(e,t){const a=Zt(e,t);return j.kt(a)}},la=/^[A-Za-z][-_0-9A-Za-z]*$/,Hl=e=>{const t={name:j.Qb().matches(la,L.aO.regex).test({name:"nameNotAllowed",message:L.aO.unique,test(a){return a?!e.includes(a?.toLowerCase()):!1}}).required(L.aO.required)};return j.kt(t)},Ql={base:{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:d("modalForm.editCategory.base.name.description"),defaultMessage:"No space is allowed for the name of the category"}}]}]}},Yl=(e,t,a)=>{const r={displayName:j.Qb().test({name:"nameAlreadyUsed",message:L.aO.unique,test(o){if(!o)return!1;const l=(0,C.c)(o,a);return!e.includes(l)}}).test({name:"nameNotAllowed",message:d("error.contentTypeName.reserved-name"),test(o){return o?!t.includes(o?.trim()?.toLowerCase()):!1}}).required(L.aO.required),category:j.Qb().matches(la,L.aO.regex).required(L.aO.required),icon:j.Qb()};return j.kt(r)},ca={name:"displayName",type:"text",intlLabel:{id:d("contentType.displayName.label"),defaultMessage:"Display name"}},Gt={advanced:{default(){return{sections:[{items:[{intlLabel:{id:d("contentType.draftAndPublish.label"),defaultMessage:"Draft & publish"},description:{id:d("contentType.draftAndPublish.description"),defaultMessage:"Allows writing a draft version of an entry, before it is published"},name:"draftAndPublish",type:"toggle-draft-publish",validations:{}}]}]}}},base:{create(){return{sections:[{sectionTitle:null,items:[ca,{description:{id:d("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:d("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text-singular"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{description:{id:d("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:d("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text-plural"}]}]}},edit(){return{sections:[{sectionTitle:null,items:[ca,{disabled:!0,description:{id:d("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:d("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{disabled:!0,description:{id:d("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:d("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text"},{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"kind",type:"content-type-radio-group",size:12,radios:[{title:{id:d("form.button.collection-type.name"),defaultMessage:"Collection Type"},description:{id:d("form.button.collection-type.description"),defaultMessage:"Best for multiple instances like articles, products, comments, etc."},value:"collectionType"},{title:{id:d("form.button.single-type.name"),defaultMessage:"Single Type"},description:{id:d("form.button.single-type.description"),defaultMessage:"Best for single instance like about us, homepage, etc."},value:"singleType"}]}]}]}}}},Kl=({usedContentTypeNames:e=[],reservedModels:t=[],singularNames:a=[],pluralNames:r=[],collectionNames:o=[]})=>{const l={displayName:j.Qb().test({name:"nameAlreadyUsed",message:L.aO.unique,test(i){if(!i)return!1;const c=(0,C.b)(i);return!e.includes(c)}}).test({name:"nameNotAllowed",message:d("error.contentTypeName.reserved-name"),test(i){return i?!t.includes(i?.trim()?.toLowerCase()):!1}}).required(L.aO.required),pluralName:j.Qb().test({name:"pluralNameAlreadyUsed",message:L.aO.unique,test(i){return i?!r.includes(i):!1}}).test({name:"pluralNameAlreadyUsedAsSingular",message:d("error.contentType.pluralName-equals-singularName"),test(i){return i?!a.includes(i):!1}}).test({name:"pluralAndSingularAreUnique",message:d("error.contentType.pluralName-used"),test(i,c){return i?c.parent.singularName!==i:!1}}).test({name:"pluralNameNotAllowed",message:d("error.contentTypeName.reserved-name"),test(i){return i?!t.includes(i?.trim()?.toLowerCase()):!1}}).test({name:"pluralNameNotAlreadyUsedInCollectionName",message:d("error.contentType.pluralName-equals-collectionName"),test(i){return i?!o.includes(i?.trim()?.toLowerCase()):!1}}).required(L.aO.required),singularName:j.Qb().test({name:"singularNameAlreadyUsed",message:L.aO.unique,test(i){return i?!a.includes(i):!1}}).test({name:"singularNameAlreadyUsedAsPlural",message:d("error.contentType.singularName-equals-pluralName"),test(i){return i?!r.includes(i):!1}}).test({name:"pluralAndSingularAreUnique",message:d("error.contentType.singularName-used"),test(i,c){return i?c.parent.pluralName!==i:!1}}).test({name:"singularNameNotAllowed",message:d("error.contentTypeName.reserved-name"),test(i){return i?!t.includes(i?.trim()?.toLowerCase()):!1}}).required(L.aO.required),draftAndPublish:j.cT(),kind:j.Qb().oneOf(["singleType","collectionType"]),reviewWorkflows:j.cT()};return j.kt(l)},Ht={advanced:{default(){return{sections:_e.advanced()}}},base:{createComponent(){return{sections:[{sectionTitle:null,items:[Ut]},..._e.base("componentToCreate.")]}},default(){return{sections:[{sectionTitle:null,items:[Ut]},{sectionTitle:null,items:[{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{name:"components",type:"select-components",intlLabel:{id:d("modalForm.attributes.select-components"),defaultMessage:"Select the components"},isMultiple:!0}]}]}}}},da=(e,t)=>{e.forEach(a=>{if(!("sectionTitle"in a)){t[0].items?.push(a);return}t.push(a)})},ua=(e,t)=>e.filter(({name:a})=>a!==t.initialData.name).map(({name:a})=>a),He={customField:{schema({schemaAttributes:e,attributeType:t,customFieldValidator:a,reservedNames:r,schemaData:o,ctbFormsAPI:l}){const i=ua(e,o);ct[t];let c;return t==="relation"?c=ct[t](i,r.attributes,[],{initialData:{},modifiedData:{}}):c=ct[t](i,r.attributes),l.makeCustomFieldValidator(c,a,i,r.attributes,o)},form:{base({customField:e}){const t=[{sectionTitle:null,items:[Be]}];return e.options?.base&&da(e.options.base,t),{sections:t}},advanced({customField:e,data:t,step:a,extensions:r,...o}){const l=[{sectionTitle:null,items:[]}],i=r.getAdvancedForm(["attribute",e.type],{data:t,type:e.type,step:a,...o});if(e.options?.advanced&&da(e.options.advanced,l),i){const c={sectionTitle:{id:d("modalForm.custom-fields.advanced.settings.extended"),defaultMessage:"Extended settings"},items:i};l.push(c)}return{sections:l}}}},attribute:{schema(e,t,a,r,o,l){const i=e?.schema?.attributes??[],c=ua(i,o);try{const f=ct[t](c,a.attributes,r,o);return l.makeValidator(["attribute",t],f,c,a.attributes,r,o)}catch(f){return console.error("Error yup build schema",f),ct.default(c,a.attributes)}},form:{advanced({data:e,type:t,step:a,extensions:r,...o}){try{const l=oa.advanced[t](e,a).sections,i=r.getAdvancedForm(["attribute",t],{data:e,type:t,step:a,...o});return{sections:l.reduce((f,m)=>(m.sectionTitle===null?f.push(m):f.push({...m,items:[...m.items,...i]}),f),[])}}catch(l){return console.error(l),{sections:[]}}},base({data:e,type:t,step:a,attributes:r}){try{return oa.base[t](e,a,r)}catch{return Vl}}}},contentType:{schema(e,t,a,r,o,l){const i=Object.values(l).map(b=>b.schema.singularName),c=Object.values(l).map(b=>b?.schema?.pluralName??""),f=t?e.filter(b=>b!==a):e,m=t?i.filter(b=>{const{schema:$}=l[a];return $.singularName!==b}):i,g=t?c.filter(b=>{const{schema:$}=l[a];return $.pluralName!==b}):c,p=Object.values(l).map(b=>b?.schema?.collectionName??""),M=t?p.filter(b=>{const{schema:$}=l[a],Z=$.pluralName,S=$.collectionName;return b!==Z||b!==S}):p,T=Kl({usedContentTypeNames:f,reservedModels:r.models,singularNames:m,pluralNames:g,collectionNames:M});return o.makeValidator(["contentType"],T,f,r.models,m,g)},form:{base({actionType:e}){return e==="create"?Gt.base.create():Gt.base.edit()},advanced({extensions:e}){const t=Gt.advanced.default().sections.map(r=>r.items).flat(),a=e.getAdvancedForm(["contentType"]);return{sections:[{items:[...t,...a]}]}}}},component:{schema(e,t,a,r=!1,o=null){const l=r?e.filter(i=>i!==o):e;return Yl(l,a.models,t)},form:{advanced(){return{sections:_e.advanced()}},base(){return{sections:_e.base()}}}},addComponentToDynamicZone:{form:{advanced(){return Ht.advanced.default()},base({data:e}){return e?.createComponent??!1?Ht.base.createComponent():Ht.base.default()}}},editCategory:{schema(e,t){const a=e.filter(r=>r!==t.name).map(r=>r.toLowerCase());return Hl(a)},form:{advanced:()=>({sections:[]}),base(){return Ql.base}}}},Xl=()=>e=>e[`${C.p}_formModal`]||C.i,Jl=()=>(0,Kn.M3)(Xl(),e=>e),ql=(e,t)=>{const a=w(e,["contentType","schema","kind"],"");return a==="singleType"||a===t.kind?!0:w(e,["contentType","schema","attributes"],[]).filter(({relation:l,type:i,targetAttribute:c})=>{const f=(0,C.g)(l,c);return i==="relation"&&!["oneWay","manyWay"].includes(f||"")}).length===0},_l=(e="",t,a)=>{const r=["text","boolean","blocks","json","number","email","date","password","media","enumeration","relation","richtext"],o=e==="contentType",l=a.includes(t),i=!o&&!l;return o?[[...r.slice(0,-1),"uid",...r.slice(-1)],["component","dynamiczone"]]:i?[r,["component"]]:[r]},ma=e=>e.reduce((t,a)=>{const r=a.items.reduce((o,l)=>(l.name&&o.push(l.name),o),[]);return[...t,...r]},[]),ec=()=>{const{onCloseModal:e,onNavigateToChooseAttributeModal:t,onNavigateToAddCompoToDZModal:a,onNavigateToCreateComponentStep2:r,actionType:o,attributeName:l,attributeType:i,customFieldUid:c,categoryName:f,dynamicZoneTarget:m,forTarget:g,modalType:p,isOpen:M,kind:T,step:b,targetUid:$,showBackLink:Z}=Je(),S=(0,L.QV)().get(c),N=(0,u.useRef)(),O=(0,u.useMemo)(Jl,[]),U=(0,Xe.OY)(),_=(0,L.eo)(),he=(0,Xe.w1)(H=>O(H),Xe.G),{push:$e}=(0,Fe.Uz)(),{trackUsage:V}=(0,L.m4)(),{formatMessage:Te}=(0,Q.c)(),{getPlugin:ee}=(0,L.U7)(),pe=ee(C.p)?.apis.forms,le=pe.components.inputs,{addAttribute:ze,addCustomFieldAttribute:ye,addCreatedComponentToDynamicZone:J,allComponentsCategories:E,changeDynamicZoneComponents:Qt,contentTypes:et,components:ut,createSchema:tt,deleteCategory:Yt,deleteData:Tt,editCategory:Kt,editCustomFieldAttribute:Xt,submitData:Jt,modifiedData:be,nestedComponents:qt,setModifiedData:_t,sortedContentTypesList:en,updateSchema:jt,reservedNames:Qe}=We(),{componentToCreate:mt,formErrors:Ze,initialData:fe,isCreatingComponentWhileAddingAField:pt,modifiedData:x}=he,I=g==="contentType"||g==="component"?[g]:[g,$];(0,u.useEffect)(()=>{if(M){const H=en.filter(_n);p==="editCategory"&&_t(),o==="edit"&&p==="attribute"&&g==="contentType"&&V("willEditFieldOfContentType");const Ae=[...I,"schema","attributes"],we=kt(w(be,Ae,[]),m)||null;if(p==="editCategory"&&o==="edit"&&U({type:C.S,modalType:p,actionType:o,data:{name:f}}),p==="contentType"&&o==="create"&&U({type:C.S,modalType:p,actionType:o,data:{draftAndPublish:!0},pluginOptions:{}}),p==="contentType"&&o==="edit"){const{displayName:K,draftAndPublish:ge,kind:Ne,pluginOptions:Ce,pluralName:Dc,reviewWorkflows:wc,singularName:kc}=w(be,[...I,"schema"],{displayName:null,pluginOptions:{},singularName:null,pluralName:null});U({type:C.S,actionType:o,modalType:p,data:{displayName:K,draftAndPublish:ge,kind:Ne,pluginOptions:Ce,pluralName:Dc,reviewWorkflows:wc??!1,singularName:kc}})}if(p==="component"&&o==="edit"){const K=w(be,I,{});U({type:C.S,actionType:o,modalType:p,data:{displayName:K.schema.displayName,category:K.category,icon:K.schema.icon}})}if(p==="addComponentToDynamicZone"&&o==="edit"){const K={...we,components:[],name:m,createComponent:!1,componentToCreate:{type:"component"}};U({type:C.d,attributeToEdit:K})}if(i){const ge={...kt(w(be,Ae,[]),l),name:l};i==="component"&&o==="edit"&&(ge.repeatable||Hn(ge,"repeatable",!1)),U(p==="customField"?{type:C.e,customField:S,isEditing:o==="edit",modifiedDataToSetForEditing:ge,forTarget:g}:{type:C.f,attributeType:i,nameToSetForRelation:w(H,["0","title"],"error"),targetUid:w(H,["0","uid"],"error"),isEditing:o==="edit",modifiedDataToSetForEditing:ge,step:b,forTarget:g})}}else U({type:C.R})},[o,l,i,f,m,g,M,p]);const G=p==="contentType",ue=p==="component",ve=p==="attribute",Ie=p==="customField",De=i==="component"&&ve,Ye=o==="create",Ke=w(x,"createComponent",!1)||pt,nt=b==="1",Ta=p==="editCategory",ja=p==="chooseAttribute",tn=(0,C.b)(x.displayName||""),nn=w(be,[...I,"schema","attributes"],null),Cc=async()=>{let H;const Ae=Ke&&b==="1"?w(x,"componentToCreate",{}):x;if(G)H=He.contentType.schema(Object.keys(et),o==="edit",w(be,[...I,"uid"],null),Qe,pe,et);else if(ue)H=He.component.schema(Object.keys(ut),x.category||"",Qe,o==="edit",w(be,[...I,"uid"],null));else if(Ie)H=He.customField.schema({schemaAttributes:w(be,[...I,"schema","attributes"],[]),attributeType:S.type,reservedNames:Qe,schemaData:{modifiedData:x,initialData:fe},ctbFormsAPI:pe,customFieldValidator:S.options?.validator});else if(De&&Ke&&nt)H=He.component.schema(Object.keys(ut),w(x,"componentToCreate.category",""),Qe,pe);else if(ve&&!nt){const we=i==="relation"?"relation":x.type;let K=[];if(we==="relation"){const ge=w(x,["target"],null);K=w(et,[ge,"schema","attributes"],[]).filter(({name:Ce})=>o!=="edit"?!0:Ce!==fe.targetAttribute)}H=He.attribute.schema(w(be,I,{}),we,Qe,K,{modifiedData:x,initialData:fe},pe)}else if(Ta)H=He.editCategory.schema(E,fe);else if(nt&&Ke)H=He.component.schema(Object.keys(ut),w(x,"componentToCreate.category",""),Qe,pe);else return;await H.validate(Ae,{abortEarly:!1})},Ma=(0,u.useCallback)(({target:{name:H,value:Ae,type:we,...K}})=>{const ge=["enumName","max","min","maxLength","minLength","regex","default"];let Ne;ge.includes(H)&&Ae===""?Ne=null:Ne=Ae;const Ce=Object.assign({},Ze);H==="max"&&delete Ce.min,H==="maxLength"&&delete Ce.minLength,delete Ce[H],U({type:C.h,errors:Ce}),U({type:C.j,keys:H.split("."),value:Ne,...K})},[U,Ze]),Le=async(H,Ae=Ye)=>{H.preventDefault();try{await Cc(),Mc(Ae);const we=g==="components"?$:tn;if(G)if(Ye)tt({...x,kind:T},p,tn),$e({pathname:`/plugins/${C.p}/content-types/${tn}`}),t({forTarget:g,targetUid:we});else{ql(be,x)?(e(),Jt(x)):_({type:"warning",message:{id:"notification.contentType.relations.conflict"}});return}else if(p==="component")if(Ye){const K=(0,C.c)(x.displayName,x.category),{category:ge,...Ne}=x;tt(Ne,"component",K,ge),$e({pathname:`/plugins/${C.p}/component-categories/${ge}/${K}`}),t({forTarget:g,targetUid:K})}else{jt(x,p,$),e();return}else if(Ta){if(Qn(fe.name)===Qn(x.name)){e();return}Kt(fe.name,x);return}else if(Ie){const K={attributeToSet:{...x,customField:c},forTarget:g,targetUid:$,initialAttribute:fe};o==="edit"?Xt(K):ye(K),Ae?t({forTarget:g,targetUid:we}):e();return}else if(ve&&!Ke){if(i==="dynamiczone"){ze(x,g,$,o==="edit",fe),Ye?(U({type:C.k}),N.current!==void 0&&N.current._handlers.setSelectedTabIndex(0),a({dynamicZoneTarget:x.name})):e();return}if(!De){ze(x,g,$,o==="edit",fe),Ae?t({forTarget:g,targetUid:we}):e();return}if(nt){r(),U({type:C.l,forTarget:g});return}ze(x,g,$,o==="edit",fe,!0),Ae?t({forTarget:g,targetUid:$}):e()}else if(ve&&Ke){if(nt){V("willCreateComponentFromAttributesModal"),U({type:C.m,forTarget:g}),r();return}const{category:K,type:ge,...Ne}=mt,Ce=(0,C.c)(mt.displayName,K);tt(Ne,ge,Ce,K,Ke),ze(x,g,$,!1),U({type:C.R}),Ae?t({forTarget:"components",targetUid:Ce}):e();return}else{if(nt)if(Ke){const{category:K,type:ge,...Ne}=x.componentToCreate,Ce=(0,C.c)(x.componentToCreate.displayName,K);tt(Ne,ge,Ce,K,Ke),J(m,[Ce]),t({forTarget:"components",targetUid:Ce})}else Qt(m,x.components),e();else console.error("This case is not handled");return}U({type:C.R})}catch(we){const K=(0,L.CK)(we);U({type:C.h,errors:K})}},Tc=()=>{window.confirm(Te({id:"window.confirm.close-modal.file",defaultMessage:"Are you sure? Your changes will be lost."}))&&(e(),U({type:C.R}))},$a=()=>{It(x,fe)?(e(),U({type:C.R})):Tc()},jc=H=>{if(H==="advanced"){if(G){V("didSelectContentTypeSettings");return}g==="contentType"&&V("didSelectContentTypeFieldSettings")}},Mc=H=>{p==="attribute"&&g==="contentType"&&i!=="dynamiczone"&&H&&V("willAddMoreFieldToContentType")},$c=()=>!!(p==="editCategory"||p==="component"||Ki(x,"createComponent")),Sc=_l(g,$,qt);if(!M||!p)return null;const Sa=w(He,[p,"form"],{advanced:()=>({sections:[]}),base:()=>({sections:[]})}),Ac=g==="components"||g==="component",Aa={customInputs:{"allowed-types-select":sl,"boolean-radio-group":xl,"checkbox-with-number-field":bl,"icon-picker":Fl,"content-type-radio-group":vl,"radio-group":Bt,relation:kl,"select-category":Bl,"select-component":Pl,"select-components":Ul,"select-default-boolean":hl,"select-number":aa,"select-date":Wl,"toggle-draft-publish":Cl,"text-plural":Ll,"text-singular":zl,"textarea-enum":Zl,...le},componentToCreate:mt,dynamicZoneTarget:m,formErrors:Ze,isAddingAComponentToAnotherComponent:Ac,isCreatingComponentWhileAddingAField:pt,mainBoxHeader:w(be,[...I,"schema","displayName"],""),modifiedData:x,naturePickerType:g,isCreating:Ye,targetUid:$,forTarget:g},Fa=Sa.advanced({data:x,type:i,step:b,actionType:o,attributes:nn,extensions:pe,forTarget:g,contentTypeSchema:be.contentType||{},customField:S}).sections,La=Sa.base({data:x,type:i,step:b,actionType:o,attributes:nn,extensions:pe,forTarget:g,contentTypeSchema:be.contentType||{},customField:S}).sections,Fc=ma(La),Lc=ma(Fa),Nc=Object.keys(Ze).some(H=>Fc.includes(H)),Oc=Object.keys(Ze).some(H=>Lc.includes(H)),Ec=w(et,[$,"schema","kind"]),Rc=()=>o==="edit"&&nn.every(({name:H})=>H!==x?.name),Ic=()=>{Rc()&&V("didEditFieldNameOnContentType")};return(0,n.jsxs)(Ba.E,{onClose:$a,labelledBy:"title",children:[(0,n.jsx)(jl,{actionType:o,attributeName:l,categoryName:f,contentTypeKind:T,dynamicZoneTarget:m,modalType:p,forTarget:g,targetUid:$,attributeType:i,customFieldUid:c,showBackLink:Z}),ja&&(0,n.jsx)(gl,{attributes:Sc,forTarget:g,kind:Ec||"collectionType"}),!ja&&(0,n.jsxs)("form",{onSubmit:Le,children:[(0,n.jsx)(Pe.a,{children:(0,n.jsxs)(me.M,{label:"todo",id:"tabs",variant:"simple",ref:N,onTabChange:H=>{H===1&&jc("advanced")},children:[(0,n.jsxs)(v.C,{justifyContent:"space-between",children:[(0,n.jsx)($l,{actionType:o,forTarget:g,kind:T,step:b,modalType:p,attributeType:i,attributeName:l,customField:S}),(0,n.jsxs)(ce.k,{children:[(0,n.jsx)(ce.s,{hasError:Nc,children:Te({id:d("popUpForm.navContainer.base"),defaultMessage:"Basic settings"})}),(0,n.jsx)(ce.s,{hasError:Oc,disabled:$c(),children:Te({id:d("popUpForm.navContainer.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,n.jsx)(ae.c,{}),(0,n.jsx)(h.k,{paddingTop:6,children:(0,n.jsxs)(re.o,{children:[(0,n.jsx)(re.G,{children:(0,n.jsx)(v.C,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(sa,{form:La,formErrors:Ze,genericInputProps:Aa,modifiedData:x,onChange:Ma})})}),(0,n.jsx)(re.G,{children:(0,n.jsx)(v.C,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(sa,{form:Fa,formErrors:Ze,genericInputProps:Aa,modifiedData:x,onChange:Ma})})})]})})]})}),(0,n.jsx)(Pa._,{endActions:(0,n.jsx)(Tl,{deleteCategory:Yt,deleteContentType:Tt,deleteComponent:Tt,categoryName:fe.name,isAttributeModal:p==="attribute",isCustomFieldModal:p==="customField",isComponentToDzModal:p==="addComponentToDynamicZone",isComponentAttribute:i==="component",isComponentModal:p==="component",isContentTypeModal:p==="contentType",isCreatingComponent:o==="create",isCreatingDz:o==="create",isCreatingComponentAttribute:x.createComponent||!1,isCreatingComponentInDz:x.createComponent||!1,isCreatingComponentWhileAddingAField:pt,isCreatingContentType:o==="create",isEditingAttribute:o==="edit",isDzAttribute:i==="dynamiczone",isEditingCategory:p==="editCategory",isInFirstComponentStep:b==="1",onSubmitAddComponentAttribute:Le,onSubmitAddComponentToDz:Le,onSubmitCreateComponent:Le,onSubmitCreateContentType:Le,onSubmitCreateDz:Le,onSubmitEditAttribute:Le,onSubmitEditCategory:Le,onSubmitEditComponent:Le,onSubmitEditContentType:Le,onSubmitEditCustomFieldAttribute:Le,onSubmitEditDz:Le,onClickFinish:Ic}),startActions:(0,n.jsx)(ne.Z,{variant:"tertiary",onClick:$a,children:Te({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})]})},tc=()=>e=>e[`${C.p}_dataManagerProvider`]||C.o,nc=()=>(0,Kn.M3)(tc(),e=>e),ac=(e,t)=>{const a=Object.keys(e).filter(r=>{const o=w(e,r,{}),l=w(t,r,{}),i=w(o,["isTemporary"],!1),c=!It(o,l);return i||c});return(0,C.q)(a)},sc=(e,t)=>{const a=fa(w(e,"schema.attributes",[]),t),r=w(e,"isTemporary",!1)?{tmpUID:e.uid}:{uid:e.uid};return Object.assign({},r,{category:e.category},Xn(e.schema,"attributes"),{attributes:a})},pa=(e,t=!1)=>{const a=w(e,"uid",null),r=fa(w(e,"schema.attributes",[]),a),o=t?{category:w(e,"category","")}:{},l=Object.assign(o,Xn(e.schema,"attributes"),{attributes:r});return delete l.uid,delete l.isTemporary,delete l.visible,delete l.restrictRelationsTo,l},fa=(e,t)=>e.reduce((a,{name:r,...o})=>{const l=o,i=l.target===t,c=l.type==="relation",f=w(l,"targetAttribute",null);if(!i)if(c){const m=Object.assign({},l,{targetAttribute:ga(f)});a[r]=Ct(m)}else a[r]=Ct(l);if(i){const m=l.target,g=Object.assign({},l,{target:m,targetAttribute:ga(f)});a[r]=Ct(g)}if(l.customField){const m={...l,type:"customField"};a[r]=Ct(m)}return a},{}),ga=e=>e==="-"?null:e,Ct=e=>Object.keys(e).reduce((t,a)=>(e[a]!==null&&a!=="plugin"&&(t[a]=e[a]),t),{}),oc=(e,t,a)=>ac(e,t).map(l=>{const i=w(e,l,{});return sc(i,a)}),rc=e=>el(Object.keys(e).map(t=>({visible:e[t].schema.visible,name:t,title:e[t].schema.displayName,plugin:e[t].plugin||null,uid:t,to:`/plugins/${C.p}/content-types/${t}`,kind:e[t].schema.kind,restrictRelationsTo:e[t].schema.restrictRelationsTo})).filter(t=>t!==null),t=>_i(t.title)),ha=e=>e.reduce((t,a)=>(t[a.uid]=a,t),{}),ic=(e,t,a,r)=>{const o=t.reduce((c,f)=>{const m=w(a,f,{});return c[f]=m,c},{});return{[r?"contentType":"component"]:e,components:o}},ya=e=>Object.keys(e).reduce((t,a)=>{const r=e[a].schema;return t[a]={...e[a],schema:{...r,attributes:lc(r.attributes)}},t},{}),lc=e=>Object.keys(e).reduce((t,a)=>(t.push({...e[a],name:a}),t),[]),cc=e=>{const t=Object.keys(e).reduce((a,r)=>{const o=w(e,[r]),l=o.uid;return dc(o)&&a.push(l),a},[]);return(0,C.q)(t)},dc=e=>w(e,["schema","attributes"],[]).some(a=>{const{type:r}=a;return r==="component"}),xa=e=>{const t=Object.keys(e).reduce((a,r)=>{const o=e?.[r]?.schema?.attributes??[],l=uc(o);return[...a,...l]},[]);return(0,C.q)(t)},uc=e=>e.reduce((t,a)=>{const{type:r,component:o}=a;return r==="component"&&t.push(o),t},[]),mc=(e,t)=>{const a=Object.keys(e).map(r=>w(e,[r,...t],""));return(0,C.q)(a)},ba="did-not-kill-server",pc="server is down";function dt(e,t){return new Promise(a=>{fetch(`${window.strapi.backendURL}/_health`,{method:"HEAD",mode:"no-cors",headers:{"Content-Type":"application/json","Keep-Alive":"false"}}).then(r=>{if(r.status>=400)throw new Error(pc);if(!t)throw new Error(ba);a(e)}).catch(r=>{setTimeout(()=>dt(e,r.message!==ba).then(a),100)})})}const fc=e=>Object.values(e.attributes).filter(a=>a.type==="dynamiczone").every(a=>Array.isArray(a.components)&&a.components.length>0),gc=({children:e})=>{const t=(0,Xe.OY)(),{components:a,contentTypes:r,isLoading:o,isLoadingForDataToBeSet:l,initialData:i,modifiedData:c,reservedNames:f}=(0,Xe.w1)(nc()),m=(0,L.eo)(),{lockAppWithAutoreload:g,unlockAppWithAutoreload:p}=(0,L.iK)(),{setCurrentStep:M}=(0,L.sg)(),{getPlugin:T}=(0,L.U7)(),b=T(C.p),{autoReload:$}=(0,L.s7)(),{formatMessage:Z}=(0,Q.c)(),{trackUsage:S}=(0,L.m4)(),{refetchPermissions:N}=(0,L.c_)(),{pathname:O}=(0,Fe.IT)(),{onCloseModal:U}=Je(),_=(0,Fe.SU)(`/plugins/${C.p}/content-types/:uid`),he=(0,Fe.SU)(`/plugins/${C.p}/component-categories/:categoryUid/:componentUid`),$e=(0,L.Qn)(),{put:V,post:Te,del:ee}=$e,Se=(0,u.useRef)();Se.current=Z;const pe=$,le=_!==null,ze=le?"contentType":"component",ye=le?w(_,"params.uid",null):w(he,"params.componentUid",null),J=(0,u.useRef)(),E=le?"content-types":"components";J.current=async()=>{try{const[{data:{data:x}},{data:{data:I}},{data:G}]=await Promise.all(["components","content-types","reserved-names"].map(Ye=>$e.get(`/${C.p}/${Ye}`))),ue=ha(x),ve=ya(ue),Ie=ha(I),De=ya(Ie);t({type:C.G,components:ve,contentTypes:De,reservedNames:G})}catch(x){console.error({err:x}),m({type:"warning",message:{id:"notification.error"}})}},(0,u.useEffect)(()=>(J.current(),()=>{t({type:C.r})}),[]),(0,u.useEffect)(()=>{!o&&ye&&jt()},[o,O,ye]),(0,u.useEffect)(()=>{$||m({type:"info",message:{id:d("notification.info.autoreaload-disable")}})},[$,m]);const Qt=(x,I,G,ue=!1,ve,Ie=!1)=>{const De=ue?C.w:C.x;t({type:De,attributeToSet:x,forTarget:I,targetUid:G,initialAttribute:ve,shouldAddComponentToData:Ie})},et=({attributeToSet:x,forTarget:I,targetUid:G,initialAttribute:ue})=>{t({type:C.A,attributeToSet:x,forTarget:I,targetUid:G,initialAttribute:ue})},ut=({attributeToSet:x,forTarget:I,targetUid:G,initialAttribute:ue})=>{t({type:C.E,attributeToSet:x,forTarget:I,targetUid:G,initialAttribute:ue})},tt=(x,I)=>{t({type:C.u,dynamicZoneTarget:x,componentsToAdd:I})},Yt=(x,I,G,ue,ve=!1)=>{const Ie=I==="contentType"?C.y:C.z;t({type:Ie,data:x,componentCategory:ue,schemaType:I,uid:G,shouldAddComponentToData:ve})},Tt=(x,I)=>{t({type:C.C,dynamicZoneTarget:x,newComponents:I})},Kt=(x,I,G="")=>{const ue=x==="components"?C.B:C.F;x==="contentType"&&S("willDeleteFieldOfContentType"),t({type:ue,mainDataKey:x,attributeToRemoveName:I,componentUid:G})},Xt=async x=>{try{const I=`/${C.p}/component-categories/${x}`,G=window.confirm(Z({id:d("popUpWarning.bodyMessage.category.delete")}));U(),G&&(g?.(),await ee(I),await dt(!0),p?.(),await fe())}catch(I){console.error({err:I}),m({type:"warning",message:{id:"notification.error"}})}finally{p?.()}},Jt=async()=>{try{const x=`/${C.p}/${E}/${ye}`,I=w(c,[ze,"isTemporary"],!1),G=window.confirm(Z({id:d(`popUpWarning.bodyMessage.${le?"contentType":"component"}.delete`)}));if(U(),G){if(I){t({type:C.D});return}g?.(),await ee(x),await dt(!0),await p?.(),await fe()}}catch(x){console.error({err:x}),m({type:"warning",message:{id:"notification.error"}})}finally{p?.()}},be=async(x,I)=>{try{const G=`/${C.p}/component-categories/${x}`;U(),g?.(),await V(G,I),await dt(!0),await p?.(),await fe()}catch(G){console.error({err:G}),m({type:"warning",message:{id:"notification.error"}})}finally{p?.()}},qt=()=>{const x=Object.assign({},a,c.components);if(!le){const G=w(c,"component",{});Hn(x,w(G,["uid"],""),G)}const I=cc(x);return(0,C.q)(I)},_t=()=>{const x=xa(a),I=xa(c.components||{});return(0,C.q)([...I,...x])},en=(x,I)=>{t({type:C.v,dzName:x,componentToRemoveIndex:I})},jt=()=>{const I=w(le?r:a,ye??"",{schema:{attributes:[]}}),G=(0,C.s)(I.schema.attributes,a),ue=ic(I,G,a,le),ve=w(I,"isTemporary",!1)&&Yi(w(I,"schema.attributes",[]))===0;t({type:C.t,schemaToSet:ue,hasJustCreatedSchema:ve})},Qe=(0,u.useMemo)(()=>{const x=le?r:a;return ye==="create-content-type"?!1:!Object.keys(x).includes(ye||"")&&!o},[a,r,ye,le,o]),mt=(0,u.useMemo)(()=>{const x=Object.keys(r).filter(I=>w(r,[I,"schema","visible"],!0)).sort();return w(x,"0","create-content-type")},[r]);if(Qe)return(0,n.jsx)(Fe.YJ,{to:`/plugins/${C.p}/content-types/${mt}`});const Ze=async x=>{try{const I=w(c,[ze,"isTemporary"],!1),G={components:oc(c.components,a,ye)};if(le){const De=(b?.apis?.forms).mutateContentTypeSchema({...pa(c.contentType),...x},i.contentType);if(!fc(De)){m({type:"warning",message:{id:d("notification.error.dynamiczone-min.validation"),defaultMessage:"At least one component is required in a dynamic zone to be able to save a content type"}});return}G.contentType=De,S("willSaveContentType")}else G.component=pa(c.component,!0),S("willSaveComponent");g?.();const ue=`/${C.p}/${E}`,ve=I?ue:`${ue}/${ye}`;if(I?await Te(ve,G):await V(ve,G),await dt(!0),await p?.(),I&&(i.contentType?.schema.kind==="collectionType"||i.contentType?.schema.kind==="singleType")&&M("contentTypeBuilder.success"),le){S("didSaveContentType");const Ie=w(G,["contentType","schema","name"],""),De=w(i,["contentType","schema","name"],"");!I&&Ie!==De&&S("didEditNameOfContentType")}else S("didSaveComponent");await fe()}catch(I){le||S("didNotSaveComponent"),console.error({err:I.response}),m({type:"warning",message:{id:"notification.error"}})}finally{p?.()}},fe=async()=>{await N()},pt=(x,I,G)=>{t({type:C.U,data:x,schemaType:I,uid:G})};return(0,n.jsx)(Jn.Provider,{value:{addAttribute:Qt,addCustomFieldAttribute:et,addCreatedComponentToDynamicZone:tt,allComponentsCategories:mc(a,["category"]),changeDynamicZoneComponents:Tt,components:a,componentsGroupedByCategory:Qi(a,"category"),componentsThatHaveOtherComponentInTheirAttributes:qt(),contentTypes:r,createSchema:Yt,deleteCategory:Xt,deleteData:Jt,editCategory:be,editCustomFieldAttribute:ut,isInDevelopmentMode:pe,initialData:i,isInContentTypeView:le,modifiedData:c,nestedComponents:_t(),removeAttribute:Kt,removeComponentFromDynamicZone:en,reservedNames:f,setModifiedData:jt,sortedContentTypesList:rc(r),submitData:Ze,updateSchema:pt},children:l?(0,n.jsx)(L.Wm,{}):(0,n.jsxs)(n.Fragment,{children:[e,pe&&(0,n.jsx)(ec,{})]})})},hc=(0,u.memo)(gc),va={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,modalType:null,isOpen:!1,showBackLink:!1,kind:null,step:null,targetUid:null,customFieldUid:null},yc=({children:e})=>{const[t,a]=u.useState(va),{trackUsage:r}=(0,L.m4)(),o=({attributeType:S,customFieldUid:N})=>{a(O=>({...O,actionType:"create",modalType:"customField",attributeType:S,customFieldUid:N}))},l=({attributeType:S,step:N})=>{t.forTarget==="contentType"&&r("didSelectContentTypeFieldType",{type:S}),a(O=>({...O,actionType:"create",modalType:"attribute",step:N,attributeType:S,showBackLink:!0}))},i=({dynamicZoneTarget:S,targetUid:N})=>{a(O=>({...O,dynamicZoneTarget:S,targetUid:N,modalType:"addComponentToDynamicZone",forTarget:"contentType",step:"1",actionType:"edit",isOpen:!0}))},c=({forTarget:S,targetUid:N})=>{a(O=>({...O,actionType:"create",forTarget:S,targetUid:N,modalType:"chooseAttribute",isOpen:!0,showBackLink:!1}))},f=S=>{a(N=>({...N,...S,isOpen:!0}))},m=S=>{a(N=>({...N,categoryName:S,actionType:"edit",modalType:"editCategory",isOpen:!0}))},g=({forTarget:S,targetUid:N,attributeName:O,attributeType:U,customFieldUid:_})=>{a(he=>({...he,modalType:"customField",customFieldUid:_,actionType:"edit",forTarget:S,targetUid:N,attributeName:O,attributeType:U,isOpen:!0}))},p=({forTarget:S,targetUid:N,attributeName:O,attributeType:U,step:_})=>{a(he=>({...he,modalType:"attribute",actionType:"edit",forTarget:S,targetUid:N,attributeName:O,attributeType:U,step:_,isOpen:!0}))},M=({modalType:S,forTarget:N,targetUid:O,kind:U})=>{a(_=>({..._,modalType:S,actionType:"edit",forTarget:N,targetUid:O,kind:U,isOpen:!0}))},T=()=>{a(va)},b=({forTarget:S,targetUid:N})=>{a(O=>({...O,forTarget:S,targetUid:N,modalType:"chooseAttribute"}))},$=()=>{a(S=>({...S,attributeType:"component",modalType:"attribute",step:"2"}))},Z=({dynamicZoneTarget:S})=>{a(N=>({...N,dynamicZoneTarget:S,modalType:"addComponentToDynamicZone",actionType:"create",step:"1",attributeType:null,attributeName:null}))};return(0,n.jsx)(qn.Provider,{value:{...t,onClickSelectField:l,onClickSelectCustomField:o,onCloseModal:T,onNavigateToChooseAttributeModal:b,onNavigateToAddCompoToDZModal:Z,onOpenModalAddComponentsToDZ:i,onNavigateToCreateComponentStep2:$,onOpenModalAddField:c,onOpenModalCreateSchema:f,onOpenModalEditCategory:m,onOpenModalEditField:p,onOpenModalEditCustomField:g,onOpenModalEditSchema:M,setFormModalNavigationState:a},children:e})},xc=(0,u.lazy)(()=>s.e(1808).then(s.bind(s,71808))),bc=()=>{const{url:e}=(0,Fe.SU)();return(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(L.Wm,{}),children:(0,n.jsx)(Fe.Wk,{children:(0,n.jsx)(Fe.kX,{path:`${e}/:componentUid`,children:(0,n.jsx)(xc,{})})})})},Ca=(0,u.lazy)(()=>s.e(1808).then(s.bind(s,71808))),vc=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{formatMessage:e}=(0,Q.c)(),t=e({id:`${C.p}.plugin.name`,defaultMessage:"Content Types Builder"}),{startSection:a}=(0,L.sg)(),r=(0,u.useRef)(a);return(0,u.useEffect)(()=>{r.current&&r.current("contentTypeBuilder")},[]),(0,n.jsxs)(L.rF,{permissions:C.P.main,children:[(0,n.jsx)(Wa.S,{title:t}),(0,n.jsx)(yc,{children:(0,n.jsx)(hc,{children:(0,n.jsx)(Ua._,{sideNav:(0,n.jsx)(nl,{}),children:(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(L.Wm,{}),children:(0,n.jsxs)(Fe.Wk,{children:[(0,n.jsx)(Fe.kX,{path:`/plugins/${C.p}/content-types/create-content-type`,component:Ca}),(0,n.jsx)(Fe.kX,{path:`/plugins/${C.p}/content-types/:uid`,component:Ca}),(0,n.jsx)(Fe.kX,{path:`/plugins/${C.p}/component-categories/:categoryUid`,component:bc})]})})})})})]})}},Symbol.toStringTag,{value:"Module"}))}}]);
