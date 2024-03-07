"use strict";(self.webpackChunke_commerce_server=self.webpackChunke_commerce_server||[]).push([[8820],{88820:(j,M,t)=>{t.r(M),t.d(M,{ProvidersPage:()=>le,default:()=>Pe});var i=t(19968),d=t(62552),a=t(42080),o=t(49780),p=t(58224),e=t(19112),s=t(28200),f=t(1560),b=t(23128),T=t(11360),A=t(5272),l=t(51772),P=t(66040),K=t(8612),u=t(37272),n=t(41868),N=t(84076),H=t(99520),ie=t(69856),U=t(20592),S=t(65080),pe=t(55468),he=t(35560),me=t(62680),_=t(71812),fe=t(22224),ve=t(30840),k=t(14632),V=t(48632),Me=t(23540),Ee=t(81448),be=t(31812),r=t(33104),h=t(6060),Ce=t(79804),c=t(52540);const G=({description:v,disabled:B,intlLabel:L,error:x,name:y,onChange:I,placeholder:m,providerToEditName:C,type:D,value:O})=>{const{formatMessage:E}=(0,k.c)(),R=y==="noName"?`${window.strapi.backendURL}/api/connect/${C}/callback`:O,W=E({id:L.id,defaultMessage:L.defaultMessage},{provider:C,...L.values}),$=v?E({id:v.id,defaultMessage:v.defaultMessage},{provider:C,...v.values}):"";if(D==="bool")return(0,i.jsx)(a.a,{"aria-label":y,checked:O,disabled:B,hint:$,label:W,name:y,offLabel:E({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:E({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:Q=>{I({target:{name:y,value:Q.target.checked}})}});const q=m?E({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"",ee=x?E({id:x,defaultMessage:x}):"";return(0,i.jsx)(o.g,{"aria-label":y,disabled:B,error:ee,label:W,name:y,onChange:I,placeholder:q,type:D,value:R})};G.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},G.propTypes={description:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}),disabled:r.bool,error:r.string,intlLabel:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}).isRequired,name:r.string.isRequired,onChange:r.func.isRequired,placeholder:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}),providerToEditName:r.string.isRequired,type:r.string.isRequired,value:r.oneOfType([r.bool,r.string])};const J=({headerBreadcrumbs:v,initialData:B,isSubmiting:L,layout:x,isOpen:y,onSubmit:I,onToggle:m,providerToEditName:C})=>{const{formatMessage:D}=(0,k.c)();return y?(0,i.jsxs)(p.E,{onClose:m,labelledBy:"title",children:[(0,i.jsx)(e.k,{children:(0,i.jsx)(Me.M,{label:v.join(", "),children:v.map((O,E,R)=>(0,i.jsx)(Ee.i,{isCurrent:E===R.length-1,children:O},O))})}),(0,i.jsx)(be.QJ,{onSubmit:O=>I(O),initialValues:B,validationSchema:x.schema,validateOnChange:!1,children:({errors:O,handleChange:E,values:R})=>(0,i.jsxs)(_.QF,{children:[(0,i.jsx)(s.a,{children:(0,i.jsx)(f.C,{direction:"column",alignItems:"stretch",gap:1,children:(0,i.jsx)(b.y,{gap:5,children:x.form.map(W=>W.map($=>(0,i.jsx)(T.C,{col:$.size,xs:12,children:(0,i.jsx)(G,{...$,error:O[$.name],onChange:E,value:R[$.name],providerToEditName:C})},$.name)))})})}),(0,i.jsx)(A._,{startActions:(0,i.jsx)(l.Z,{variant:"tertiary",onClick:m,type:"button",children:D({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,i.jsx)(l.Z,{type:"submit",loading:L,children:D({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};J.defaultProps={initialData:null,providerToEditName:null},J.propTypes={headerBreadcrumbs:r.arrayOf(r.string).isRequired,initialData:r.object,layout:r.shape({form:r.arrayOf(r.array),schema:r.object}).isRequired,isOpen:r.bool.isRequired,isSubmiting:r.bool.isRequired,onSubmit:r.func.isRequired,onToggle:r.func.isRequired,providerToEditName:r.string};const ae={id:(0,h.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ne={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},X={id:(0,h.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},Z={id:(0,h.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},re={id:(0,h.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,h.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},z={id:(0,h.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},de={id:(0,h.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:Z,name:"enabled",type:"bool",description:X,size:6}]],schema:c.kt().shape({enabled:c.SK().required(_.aO.required)})},providers:{form:[[{intlLabel:Z,name:"enabled",type:"bool",description:X,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:z,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:z,size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:ne,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:c.kt().shape({enabled:c.SK().required(_.aO.required),key:c.Qb().when("enabled",{is:!0,then:c.Qb().required(_.aO.required),otherwise:c.Qb()}),secret:c.Qb().when("enabled",{is:!0,then:c.Qb().required(_.aO.required),otherwise:c.Qb()}),callback:c.Qb().when("enabled",{is:!0,then:c.Qb().required(_.aO.required),otherwise:c.Qb()})})},providersWithSubdomain:{form:[[{intlLabel:Z,name:"enabled",type:"bool",description:X,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:z,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:z,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,h.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:z,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,h.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,h.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:ne,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:c.kt().shape({enabled:c.SK().required(_.aO.required),key:c.Qb().when("enabled",{is:!0,then:c.Qb().required(_.aO.required),otherwise:c.Qb()}),secret:c.Qb().when("enabled",{is:!0,then:c.Qb().required(_.aO.required),otherwise:c.Qb()}),subdomain:c.Qb().when("enabled",{is:!0,then:c.Qb().required(_.aO.required),otherwise:c.Qb()}),callback:c.Qb().when("enabled",{is:!0,then:c.Qb().required(_.aO.required),otherwise:c.Qb()})})}},le=()=>{const{formatMessage:v,locale:B}=(0,k.c)(),L=(0,V.useQueryClient)(),{trackUsage:x}=(0,_.m4)(),[y,I]=d.useState(!1),[m,C]=d.useState(null),D=(0,_.eo)(),{lockApp:O,unlockApp:E}=(0,_.H6)(),{get:R,put:W}=(0,_.Qn)(),{formatAPIError:$}=(0,_.An)(),q=(0,_.In)(B,{sensitivity:"base"});(0,_.G0)();const{isLoading:ee,allowedActions:{canUpdate:Q}}=(0,_.aU)({update:h.P.updateProviders}),{isLoading:Oe,data:se}=(0,V.useQuery)(["users-permissions","get-providers"],async()=>{const{data:g}=await R("/users-permissions/providers");return g},{initialData:{}}),ce=(0,V.useMutation)(g=>W("/users-permissions/providers",g),{async onSuccess(){await L.invalidateQueries(["users-permissions","providers"]),D({type:"success",message:{id:(0,h.g)("notification.success.submit")}}),x("didEditAuthenticationProvider"),te(),E()},onError(g){D({type:"warning",message:$(g)}),E()},refetchActive:!1}),F=Object.entries(se).reduce((g,[w,De])=>{const{icon:_e,enabled:Te,subdomain:Le}=De;return g.push({name:w,icon:_e==="envelope"?["fas","envelope"]:["fab",_e],enabled:Te,subdomain:Le}),g},[]).sort((g,w)=>q.compare(g.name,w.name)),ye=Oe||ee,ue=d.useMemo(()=>m?!!F.find(w=>w.name===m)?.subdomain:!1,[F,m]),xe=d.useMemo(()=>m==="email"?Y.email:ue?Y.providersWithSubdomain:Y.providers,[m,ue]),te=()=>{I(g=>!g)},ge=g=>{Q&&(C(g.name),te())},$e=async g=>{O(),x("willEditAuthenticationProvider"),ce.mutate({providers:{...se,[m]:g}})};return(0,i.jsxs)(P._,{children:[(0,i.jsx)(_.K8,{name:v({id:(0,h.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,i.jsxs)(K.G,{children:[(0,i.jsx)(u.a,{title:v({id:(0,h.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),ye?(0,i.jsx)(_.Wm,{}):(0,i.jsx)(n.S,{children:(0,i.jsxs)(N.o,{colCount:3,rowCount:F.length+1,children:[(0,i.jsx)(H.o,{children:(0,i.jsxs)(ie.Tr,{children:[(0,i.jsx)(U.Th,{children:(0,i.jsx)(S.O,{variant:"sigma",textColor:"neutral600",children:v({id:"global.name",defaultMessage:"Name"})})}),(0,i.jsx)(U.Th,{children:(0,i.jsx)(S.O,{variant:"sigma",textColor:"neutral600",children:v({id:(0,h.g)("Providers.status"),defaultMessage:"Status"})})}),(0,i.jsx)(U.Th,{children:(0,i.jsx)(S.O,{variant:"sigma",children:(0,i.jsx)(pe.K,{children:v({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,i.jsx)(he.K,{children:F.map(g=>(0,i.jsxs)(ie.Tr,{...(0,_.on)({fn:()=>ge(g),condition:Q}),children:[(0,i.jsx)(U.Td,{width:"45%",children:(0,i.jsx)(S.O,{fontWeight:"semiBold",textColor:"neutral800",children:g.name})}),(0,i.jsx)(U.Td,{width:"65%",children:(0,i.jsx)(S.O,{textColor:g.enabled?"success600":"danger600","data-testid":`enable-${g.name}`,children:g.enabled?v({id:"global.enabled",defaultMessage:"Enabled"}):v({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,i.jsx)(U.Td,{..._.Ii,children:Q&&(0,i.jsx)(me.w,{onClick:()=>ge(g),noBorder:!0,icon:(0,i.jsx)(fe.c,{}),label:"Edit"})})]},g.name))})]})})]}),(0,i.jsx)(J,{initialData:se[m],isOpen:y,isSubmiting:ce.isLoading,layout:xe,headerBreadcrumbs:[v({id:(0,h.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),ve(m)],onToggle:te,onSubmit:$e,providerToEditName:m})]})},Pe=()=>(0,i.jsx)(_.rF,{permissions:h.P.readProviders,children:(0,i.jsx)(le,{})})},40160:(j,M,t)=>{t.d(M,{k:()=>p});var i=t(69372),d=t(1920),a=t(70392);const o={color:!0,cursor:!0,height:!0,width:!0},p=i.default.div.withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  // Font
  font-size: ${({fontSize:e,theme:s})=>(0,a.M)(s.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:s})=>(0,a.M)(e.colors,s,s)};
  color: ${({theme:e,color:s})=>(0,a.M)(e.colors,s,void 0)};

  // Spaces
  ${({theme:e,padding:s})=>(0,d.c)("padding",s,e)}
  ${({theme:e,paddingTop:s})=>(0,d.c)("padding-top",s,e)}
  ${({theme:e,paddingRight:s})=>(0,d.c)("padding-right",s,e)}
  ${({theme:e,paddingBottom:s})=>(0,d.c)("padding-bottom",s,e)}
  ${({theme:e,paddingLeft:s})=>(0,d.c)("padding-left",s,e)}
  ${({theme:e,marginLeft:s})=>(0,d.c)("margin-left",s,e)}
  ${({theme:e,marginRight:s})=>(0,d.c)("margin-right",s,e)}
  ${({theme:e,marginTop:s})=>(0,d.c)("margin-top",s,e)}
  ${({theme:e,marginBottom:s})=>(0,d.c)("margin-bottom",s,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:s})=>s?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:s})=>s?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:s,borderRadius:f})=>s?e.borderRadius:f};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:s})=>(0,a.M)(s.colors,e,void 0)};
  border: ${({theme:e,borderColor:s,borderStyle:f,borderWidth:b})=>{if(s&&!f&&typeof b>"u")return`1px solid ${e.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:s})=>(0,a.M)(e.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:s})=>e?e(s):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  right: ${({right:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  top: ${({top:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  bottom: ${({bottom:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  min-width: ${({minWidth:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  height: ${({height:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:s})=>(0,a.M)(s.spaces,e,e)};
  min-height: ${({minHeight:e,theme:s})=>(0,a.M)(s.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:s})=>(0,a.M)(e.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},85504:(j,M,t)=>{t.d(M,{O:()=>K});var i=t(69372);const d="alpha",a="beta",o="delta",p="epsilon",e="omega",s="pi",f="sigma",b=[d,a,o,p,e,s,f],T=({ellipsis:u=!1})=>u&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,A=({variant:u=e,theme:n})=>{switch(u){case d:return`
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
      `;case p:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case s:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case f:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var l=t(70392);const P={fontSize:!0,fontWeight:!0},K=i.default.span.withConfig({shouldForwardProp:(u,n)=>!P[u]&&n(u)})`
  ${A}
  ${T}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:u,fontWeight:n})=>(0,l.M)(u.fontWeights,n,void 0)};
  font-size: ${({theme:u,fontSize:n})=>(0,l.M)(u.fontSizes,n,void 0)};
  line-height: ${({theme:u,lineHeight:n})=>(0,l.M)(u.lineHeights,n,n)};
  color: ${({theme:u,textColor:n})=>u.colors[n||"neutral800"]};
  text-align: ${({textAlign:u})=>u};
  text-decoration: ${({textDecoration:u})=>u};
  text-transform: ${({textTransform:u})=>u};
`},1920:(j,M,t)=>{t.d(M,{c:()=>i});const i=(d,a,o)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((f,b,T)=>{if(b)switch(T){case 0:return`${f}${d}: ${o.spaces[b]};`;case 1:return`${f}${o.mediaQueries.tablet}{${d}: ${o.spaces[b]};}`;case 2:return`${f}${o.mediaQueries.mobile}{${d}: ${o.spaces[b]};}`;default:return f}return f},"");const p=o.spaces[a]??a;return`${d}: ${p};`}},70392:(j,M,t)=>{t.d(M,{M:()=>a});function i(o,p){return typeof o=="string"?!1:p in o}function d(o){return o&&typeof o=="object"&&!Array.isArray(o)}function a(o,p,e){return p&&i(o,p)?o[p]:e}},23540:(j,M,t)=>{t.d(M,{M:()=>A});var i=t(19968),d=t(62552),a=t(69372),o=t(40160),p=t(85504);const e=()=>(0,i.jsx)(o.k,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,i.jsx)(p.O,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var s=t(1920);const f={direction:!0},b=(0,a.default)(o.k).withConfig({shouldForwardProp:(l,P)=>!f[l]&&P(l)})`
  align-items: ${({alignItems:l="center"})=>l};
  display: ${({display:l="flex",inline:P})=>P?"inline-flex":l};
  flex-direction: ${({direction:l="row"})=>l};
  flex-shrink: ${({shrink:l})=>l};
  flex-wrap: ${({wrap:l})=>l};
  ${({gap:l,theme:P})=>(0,s.c)("gap",l,P)};
  justify-content: ${({justifyContent:l})=>l};
`,T=(0,a.default)(b)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:l})=>`calc(-1*${l.spaces[2]})`};
  }
`,A=({label:l,children:P,...K})=>{const u=d.Children.toArray(P);return(0,i.jsx)(o.k,{"aria-label":l,...K,children:(0,i.jsx)(T,{as:"ol",children:d.Children.map(u,(n,N)=>{const H=u.length>1&&N+1<u.length;return(0,i.jsxs)(b,{inline:!0,as:"li",children:[n,H&&(0,i.jsx)(e,{})]})})})})};A.displayName="Breadcrumbs"},81448:(j,M,t)=>{t.d(M,{i:()=>o});var i=t(19968),d=t(40160),a=t(85504);const o=({children:p,isCurrent:e=!1,...s})=>(0,i.jsx)(d.k,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,i.jsx)(a.O,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...s,children:p})});o.displayName="Crumb"}}]);
