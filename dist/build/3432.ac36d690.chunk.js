"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[3432],{53432:(C,E,i)=>{i.r(E),i.d(E,{default:()=>se});var s=i(19968),d=i(62552),a=i(58224),o=i(19112),c=i(28200),e=i(23128),t=i(11360),p=i(74928),P=i(5272),v=i(51772),A=i(84076),m=i(99520),h=i(69856),u=i(20592),l=i(55468),n=i(65080),R=i(35560),L=i(24596),K=i(62680),J=i(24012),W=i(8612),S=i(37272),z=i(41868),r=i(71812),B=i(14632),b=i(48632),_=i(6060),ge=i(79804),X=i(23540),F=i(81448),Y=i(31812),f=i(33104),D=i(52540),k=i(77940),Q=i(22224),q=i(18520);const ee=D.kt().shape({options:D.kt().shape({from:D.kt().shape({name:D.Qb().required(r.aO.required),email:D.Qb().email(r.aO.email).required(r.aO.required)}).required(),response_email:D.Qb().email(r.aO.email),object:D.Qb().required(r.aO.required),message:D.Qb().required(r.aO.required)}).required(r.aO.required)}),w=({template:g,onToggle:$,onSubmit:M})=>{const{formatMessage:O}=(0,B.c)();return(0,s.jsxs)(a.E,{onClose:$,labelledBy:`${O({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${O({id:(0,_.g)(g.display),defaultMessage:g.display})}`,children:[(0,s.jsx)(o.k,{children:(0,s.jsxs)(X.M,{label:`${O({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${O({id:(0,_.g)(g.display),defaultMessage:g.display})}`,children:[(0,s.jsx)(F.i,{children:O({id:(0,_.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,s.jsx)(F.i,{isCurrent:!0,children:O({id:(0,_.g)(g.display),defaultMessage:g.display})})]})}),(0,s.jsx)(Y.QJ,{onSubmit:M,initialValues:g,validateOnChange:!1,validationSchema:ee,enableReinitialize:!0,children:({errors:y,values:j,handleChange:T,isSubmitting:U})=>(0,s.jsxs)(r.QF,{children:[(0,s.jsx)(c.a,{children:(0,s.jsxs)(e.y,{gap:5,children:[(0,s.jsx)(t.C,{col:6,s:12,children:(0,s.jsx)(r.u,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:T,value:j.options.from.name,error:y?.options?.from?.name,type:"text"})}),(0,s.jsx)(t.C,{col:6,s:12,children:(0,s.jsx)(r.u,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:T,value:j.options.from.email,error:y?.options?.from?.email,type:"text"})}),(0,s.jsx)(t.C,{col:6,s:12,children:(0,s.jsx)(r.u,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:T,value:j.options.response_email,error:y?.options?.response_email,type:"text"})}),(0,s.jsx)(t.C,{col:6,s:12,children:(0,s.jsx)(r.u,{intlLabel:{id:(0,_.g)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:T,value:j.options.object,error:y?.options?.object,type:"text"})}),(0,s.jsx)(t.C,{col:12,s:12,children:(0,s.jsx)(p.A,{label:O({id:(0,_.g)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:T,value:j.options.message,error:y?.options?.message&&O({id:y.options.message,defaultMessage:y.options.message})})})]})}),(0,s.jsx)(P._,{startActions:(0,s.jsx)(v.Z,{onClick:$,variant:"tertiary",children:"Cancel"}),endActions:(0,s.jsx)(v.Z,{loading:U,type:"submit",children:"Finish"})})]})})]})};w.propTypes={template:f.shape({display:f.string,icon:f.string,options:f.shape({from:f.shape({name:f.string,email:f.string}),message:f.string,object:f.string,response_email:f.string})}).isRequired,onSubmit:f.func.isRequired,onToggle:f.func.isRequired};const H=({canUpdate:g,onEditClick:$})=>{const{formatMessage:M}=(0,B.c)();return(0,s.jsxs)(A.o,{colCount:3,rowCount:3,children:[(0,s.jsx)(m.o,{children:(0,s.jsxs)(h.Tr,{children:[(0,s.jsx)(u.Th,{width:"1%",children:(0,s.jsx)(l.K,{children:M({id:(0,_.g)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,s.jsx)(u.Th,{children:(0,s.jsx)(n.O,{variant:"sigma",textColor:"neutral600",children:M({id:(0,_.g)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,s.jsx)(u.Th,{width:"1%",children:(0,s.jsx)(l.K,{children:M({id:(0,_.g)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,s.jsxs)(R.K,{children:[(0,s.jsxs)(h.Tr,{...(0,r.on)({fn:()=>$("reset_password")}),children:[(0,s.jsx)(u.Td,{children:(0,s.jsx)(L.G,{children:(0,s.jsx)(k.c,{"aria-label":M({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,s.jsx)(u.Td,{children:(0,s.jsx)(n.O,{children:M({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,s.jsx)(u.Td,{...r.Ii,children:(0,s.jsx)(K.w,{onClick:()=>$("reset_password"),label:M({id:(0,_.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&(0,s.jsx)(Q.c,{})})})]}),(0,s.jsxs)(h.Tr,{...(0,r.on)({fn:()=>$("email_confirmation")}),children:[(0,s.jsx)(u.Td,{children:(0,s.jsx)(L.G,{children:(0,s.jsx)(q.c,{"aria-label":M({id:(0,_.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,s.jsx)(u.Td,{children:(0,s.jsx)(n.O,{children:M({id:(0,_.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,s.jsx)(u.Td,{...r.Ii,children:(0,s.jsx)(K.w,{onClick:()=>$("email_confirmation"),label:M({id:(0,_.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&(0,s.jsx)(Q.c,{})})})]})]})]})};H.propTypes={canUpdate:f.bool.isRequired,onEditClick:f.func.isRequired};const se=()=>(0,s.jsx)(r.rF,{permissions:_.P.readEmailTemplates,children:(0,s.jsx)(te,{})}),te=()=>{const{formatMessage:g}=(0,B.c)(),{trackUsage:$}=(0,r.m4)(),{notifyStatus:M}=(0,J.O)(),O=(0,r.eo)(),{lockApp:y,unlockApp:j}=(0,r.H6)(),T=(0,b.useQueryClient)(),{get:U,put:ie}=(0,r.Qn)(),{formatAPIError:N}=(0,r.An)();(0,r.G0)();const[ae,ne]=d.useState(!1),[G,oe]=d.useState(null),{isLoading:le,allowedActions:{canUpdate:re}}=(0,r.aU)({update:_.P.updateEmailTemplates}),{isLoading:de,data:V}=(0,b.useQuery)(["users-permissions","email-templates"],async()=>{const{data:x}=await U("/users-permissions/email-templates");return x},{onSuccess(){M(g({id:(0,_.g)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(x){O({type:"warning",message:N(x)})}}),me=le||de,I=()=>{ne(x=>!x)},_e=x=>{oe(x),I()},Z=(0,b.useMutation)(x=>ie("/users-permissions/email-templates",{"email-templates":x}),{async onSuccess(){await T.invalidateQueries(["users-permissions","email-templates"]),O({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),$("didEditEmailTemplates"),j(),I()},onError(x){O({type:"warning",message:N(x)}),j()},refetchActive:!0}),ce=x=>{y(),$("willEditEmailTemplates");const pe={...V,[G]:x};Z.mutate(pe)};return me?(0,s.jsxs)(W.G,{"aria-busy":"true",children:[(0,s.jsx)(r.K8,{name:g({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(S.a,{title:g({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(z.S,{children:(0,s.jsx)(r.Wm,{})})]}):(0,s.jsxs)(W.G,{"aria-busy":Z.isLoading,children:[(0,s.jsx)(r.K8,{name:g({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(S.a,{title:g({id:(0,_.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsxs)(z.S,{children:[(0,s.jsx)(H,{onEditClick:_e,canUpdate:re}),ae&&(0,s.jsx)(w,{template:V[G],onToggle:I,onSubmit:ce})]})]})}},40160:(C,E,i)=>{i.d(E,{k:()=>c});var s=i(69372),d=i(1920),a=i(70392);const o={color:!0,cursor:!0,height:!0,width:!0},c=s.default.div.withConfig({shouldForwardProp:(e,t)=>!o[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>(0,a.M)(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>(0,a.M)(e.colors,t,t)};
  color: ${({theme:e,color:t})=>(0,a.M)(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>(0,d.c)("padding",t,e)}
  ${({theme:e,paddingTop:t})=>(0,d.c)("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>(0,d.c)("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>(0,d.c)("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>(0,d.c)("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>(0,d.c)("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>(0,d.c)("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>(0,d.c)("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>(0,d.c)("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:p})=>t?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>(0,a.M)(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:p,borderWidth:P})=>{if(t&&!p&&typeof P>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>(0,a.M)(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>(0,a.M)(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>(0,a.M)(t.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:t})=>(0,a.M)(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},85504:(C,E,i)=>{i.d(E,{O:()=>u});var s=i(69372);const d="alpha",a="beta",o="delta",c="epsilon",e="omega",t="pi",p="sigma",P=[d,a,o,c,e,t,p],v=({ellipsis:l=!1})=>l&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,A=({variant:l=e,theme:n})=>{switch(l){case d:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case a:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case c:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case t:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case p:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var m=i(70392);const h={fontSize:!0,fontWeight:!0},u=s.default.span.withConfig({shouldForwardProp:(l,n)=>!h[l]&&n(l)})`
  ${A}
  ${v}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:l,fontWeight:n})=>(0,m.M)(l.fontWeights,n,void 0)};
  font-size: ${({theme:l,fontSize:n})=>(0,m.M)(l.fontSizes,n,void 0)};
  line-height: ${({theme:l,lineHeight:n})=>(0,m.M)(l.lineHeights,n,n)};
  color: ${({theme:l,textColor:n})=>l.colors[n||"neutral800"]};
  text-align: ${({textAlign:l})=>l};
  text-decoration: ${({textDecoration:l})=>l};
  text-transform: ${({textTransform:l})=>l};
`},1920:(C,E,i)=>{i.d(E,{c:()=>s});const s=(d,a,o)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((p,P,v)=>{if(P)switch(v){case 0:return`${p}${d}: ${o.spaces[P]};`;case 1:return`${p}${o.mediaQueries.tablet}{${d}: ${o.spaces[P]};}`;case 2:return`${p}${o.mediaQueries.mobile}{${d}: ${o.spaces[P]};}`;default:return p}return p},"");const c=o.spaces[a]??a;return`${d}: ${c};`}},70392:(C,E,i)=>{i.d(E,{M:()=>a});function s(o,c){return typeof o=="string"?!1:c in o}function d(o){return o&&typeof o=="object"&&!Array.isArray(o)}function a(o,c,e){return c&&s(o,c)?o[c]:e}},23540:(C,E,i)=>{i.d(E,{M:()=>A});var s=i(19968),d=i(62552),a=i(69372),o=i(40160),c=i(85504);const e=()=>(0,s.jsx)(o.k,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,s.jsx)(c.O,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var t=i(1920);const p={direction:!0},P=(0,a.default)(o.k).withConfig({shouldForwardProp:(m,h)=>!p[m]&&h(m)})`
  align-items: ${({alignItems:m="center"})=>m};
  display: ${({display:m="flex",inline:h})=>h?"inline-flex":m};
  flex-direction: ${({direction:m="row"})=>m};
  flex-shrink: ${({shrink:m})=>m};
  flex-wrap: ${({wrap:m})=>m};
  ${({gap:m,theme:h})=>(0,t.c)("gap",m,h)};
  justify-content: ${({justifyContent:m})=>m};
`,v=(0,a.default)(P)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:m})=>`calc(-1*${m.spaces[2]})`};
  }
`,A=({label:m,children:h,...u})=>{const l=d.Children.toArray(h);return(0,s.jsx)(o.k,{"aria-label":m,...u,children:(0,s.jsx)(v,{as:"ol",children:d.Children.map(l,(n,R)=>{const L=l.length>1&&R+1<l.length;return(0,s.jsxs)(P,{inline:!0,as:"li",children:[n,L&&(0,s.jsx)(e,{})]})})})})};A.displayName="Breadcrumbs"},81448:(C,E,i)=>{i.d(E,{i:()=>o});var s=i(19968),d=i(40160),a=i(85504);const o=({children:c,isCurrent:e=!1,...t})=>(0,s.jsx)(d.k,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,s.jsx)(a.O,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...t,children:c})});o.displayName="Crumb"}}]);
