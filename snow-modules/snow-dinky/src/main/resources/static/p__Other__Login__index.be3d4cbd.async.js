"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[317],{94149:function(le,R,e){e.d(R,{Z:function(){return h}});var a=e(87462),r=e(67294),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},m=f,W=e(13401),u=function(P,x){return r.createElement(W.Z,(0,a.Z)({},P,{ref:x,icon:m}))},E=r.forwardRef(u),h=E},24969:function(le,R,e){e.d(R,{Z:function(){return h}});var a=e(87462),r=e(67294),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},m=f,W=e(13401),u=function(P,x){return r.createElement(W.Z,(0,a.Z)({},P,{ref:x,icon:m}))},E=r.forwardRef(u),h=E},63434:function(le,R,e){var a=e(1413),r=e(45987),f=e(22270),m=e(84567),W=e(67294),u=e(74115),E=e(31649),h=e(85893),G=["options","fieldProps","proFieldProps","valueEnum"],P=W.forwardRef(function(b,O){var D=b.options,d=b.fieldProps,te=b.proFieldProps,c=b.valueEnum,t=(0,r.Z)(b,G);return(0,h.jsx)(E.Z,(0,a.Z)({ref:O,valueType:"checkbox",valueEnum:(0,f.h)(c,void 0),fieldProps:(0,a.Z)({options:D},d),lightProps:(0,a.Z)({labelFormatter:function(){return(0,h.jsx)(E.Z,(0,a.Z)({ref:O,valueType:"checkbox",mode:"read",valueEnum:(0,f.h)(c,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,a.Z)({options:D},d),proFieldProps:te},t))}},t.lightProps),proFieldProps:te},t))}),x=W.forwardRef(function(b,O){var D=b.fieldProps,d=b.children;return(0,h.jsx)(m.Z,(0,a.Z)((0,a.Z)({ref:O},D),{},{children:d}))}),n=(0,u.G)(x,{valuePropName:"checked"}),k=n;k.Group=P,R.Z=k},5966:function(le,R,e){var a=e(97685),r=e(1413),f=e(45987),m=e(21770),W=e(18922),u=e(55241),E=e(97435),h=e(67294),G=e(31649),P=e(85893),x=["fieldProps","proFieldProps"],n=["fieldProps","proFieldProps"],k="text",b=function(c){var t=c.fieldProps,B=c.proFieldProps,K=(0,f.Z)(c,x);return(0,P.jsx)(G.Z,(0,r.Z)({valueType:k,fieldProps:t,filedConfig:{valueType:k},proFieldProps:B},K))},O=function(c){var t=(0,m.Z)(c.open||!1,{value:c.open,onChange:c.onOpenChange}),B=(0,a.Z)(t,2),K=B[0],ne=B[1];return(0,P.jsx)(W.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(j){var i,V=j.getFieldValue(c.name||[]);return(0,P.jsx)(u.Z,(0,r.Z)((0,r.Z)({getPopupContainer:function(o){return o&&o.parentNode?o.parentNode:o},onOpenChange:ne,content:(0,P.jsxs)("div",{style:{padding:"4px 0"},children:[(i=c.statusRender)===null||i===void 0?void 0:i.call(c,V),c.strengthText?(0,P.jsx)("div",{style:{marginTop:10},children:(0,P.jsx)("span",{children:c.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},c.popoverProps),{},{open:K,children:c.children}))}})},D=function(c){var t=c.fieldProps,B=c.proFieldProps,K=(0,f.Z)(c,n),ne=(0,h.useState)(!1),M=(0,a.Z)(ne,2),j=M[0],i=M[1];return t!=null&&t.statusRender&&K.name?(0,P.jsx)(O,{name:K.name,statusRender:t==null?void 0:t.statusRender,popoverProps:t==null?void 0:t.popoverProps,strengthText:t==null?void 0:t.strengthText,open:j,onOpenChange:i,children:(0,P.jsx)("div",{children:(0,P.jsx)(G.Z,(0,r.Z)({valueType:"password",fieldProps:(0,r.Z)((0,r.Z)({},(0,E.default)(t,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(Y){var o;t==null||(o=t.onBlur)===null||o===void 0||o.call(t,Y),i(!1)},onClick:function(Y){var o;t==null||(o=t.onClick)===null||o===void 0||o.call(t,Y),i(!0)}}),proFieldProps:B,filedConfig:{valueType:k}},K))})}):(0,P.jsx)(G.Z,(0,r.Z)({valueType:"password",fieldProps:t,proFieldProps:B,filedConfig:{valueType:k}},K))},d=b;d.Password=D,d.displayName="ProFormComponent",R.Z=d},97269:function(le,R,e){e.d(R,{A:function(){return M}});var a=e(1413),r=e(18922),f=e(67294),m=e(89926),W=e(9105),u=e(4942),E=e(97685),h=e(90814),G=e(21770),P=e(12795),x=e(28459),n=e(42075),k=e(93967),b=e.n(k),O=e(66758),D=e(2514),d=e(98082),te=function(i){return(0,u.Z)({},i.componentCls,{"&-title":{marginBlockEnd:i.marginXL,fontWeight:"bold"},"&-container":(0,u.Z)({flexWrap:"wrap",maxWidth:"100%"},"> div".concat(i.antCls,"-space-item"),{maxWidth:"100%"}),"&-twoLine":(0,u.Z)((0,u.Z)((0,u.Z)((0,u.Z)({display:"block",width:"100%"},"".concat(i.componentCls,"-title"),{width:"100%",margin:"8px 0"}),"".concat(i.componentCls,"-container"),{paddingInlineStart:16}),"".concat(i.antCls,"-space-item,").concat(i.antCls,"-form-item"),{width:"100%"}),"".concat(i.antCls,"-form-item"),{"&-control":{display:"flex",alignItems:"center",justifyContent:"flex-end","&-input":{alignItems:"center",justifyContent:"flex-end","&-content":{flex:"none"}}}})})};function c(j){return(0,d.Xj)("ProFormGroup",function(i){var V=(0,a.Z)((0,a.Z)({},i),{},{componentCls:".".concat(j)});return[te(V)]})}var t=e(85893),B=f.forwardRef(function(j,i){var V=f.useContext(O.Z),Y=V.groupProps,o=(0,a.Z)((0,a.Z)({},Y),j),Pe=o.children,ae=o.collapsible,Ce=o.defaultCollapsed,se=o.style,xe=o.labelLayout,ye=o.title,de=ye===void 0?j.label:ye,Se=o.tooltip,Te=o.align,je=Te===void 0?"start":Te,ue=o.direction,ce=o.size,ve=ce===void 0?32:ce,Ze=o.titleStyle,fe=o.titleRender,F=o.spaceProps,he=o.extra,pe=o.autoFocus,Ee=(0,G.Z)(function(){return Ce||!1},{value:j.collapsed,onChange:j.onCollapse}),Le=(0,E.Z)(Ee,2),me=Le[0],be=Le[1],q=(0,f.useContext)(x.ZP.ConfigContext),C=q.getPrefixCls,L=(0,D.zx)(j),H=L.ColWrapper,z=L.RowWrapper,y=C("pro-form-group"),S=c(y),I=S.wrapSSR,A=S.hashId,U=ae&&(0,t.jsx)(h.Z,{style:{marginInlineEnd:8},rotate:me?void 0:90}),ee=(0,t.jsx)(P.G,{label:U?(0,t.jsxs)("div",{children:[U,de]}):de,tooltip:Se}),N=(0,f.useCallback)(function(g){var Q=g.children;return(0,t.jsx)(n.Z,(0,a.Z)((0,a.Z)({},F),{},{className:b()("".concat(y,"-container ").concat(A),F==null?void 0:F.className),size:ve,align:je,direction:ue,style:(0,a.Z)({rowGap:0},F==null?void 0:F.style),children:Q}))},[je,y,ue,A,ve,F]),X=fe?fe(ee,j):ee,w=(0,f.useMemo)(function(){var g=[],Q=f.Children.toArray(Pe).map(function($,re){var ge;return f.isValidElement($)&&$!==null&&$!==void 0&&(ge=$.props)!==null&&ge!==void 0&&ge.hidden?(g.push($),null):re===0&&f.isValidElement($)&&pe?f.cloneElement($,(0,a.Z)((0,a.Z)({},$.props),{},{autoFocus:pe})):$});return[(0,t.jsx)(z,{Wrapper:N,children:Q},"children"),g.length>0?(0,t.jsx)("div",{style:{display:"none"},children:g}):null]},[Pe,z,N,pe]),J=(0,E.Z)(w,2),oe=J[0],ie=J[1];return I((0,t.jsx)(H,{children:(0,t.jsxs)("div",{className:b()(y,A,(0,u.Z)({},"".concat(y,"-twoLine"),xe==="twoLine")),style:se,ref:i,children:[ie,(de||Se||he)&&(0,t.jsx)("div",{className:"".concat(y,"-title ").concat(A).trim(),style:Ze,onClick:function(){be(!me)},children:he?(0,t.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[X,(0,t.jsx)("span",{onClick:function(Q){return Q.stopPropagation()},children:he})]}):X}),(0,t.jsx)("div",{style:{display:ae&&me?"none":void 0},children:oe})]})}))});B.displayName="ProForm-Group";var K=B,ne=e(30710);function M(j){return(0,t.jsx)(m.I,(0,a.Z)({layout:"vertical",contentRender:function(V,Y){return(0,t.jsxs)(t.Fragment,{children:[V,Y]})}},j))}M.Group=K,M.useForm=r.Z.useForm,M.Item=ne.Z,M.useWatch=r.Z.useWatch,M.ErrorList=r.Z.ErrorList,M.Provider=r.Z.Provider,M.useFormInstance=r.Z.useFormInstance,M.EditOrReadOnlyContext=W.A},87454:function(le,R,e){var a=e(96012),r=e(85893),f=function(W){var u=W.children,E=(0,a.q_)({opacity:1,from:{opacity:0},config:{duration:100,delay:100}});return(0,r.jsx)(a.q.div,{style:E,children:u})};R.Z=f},86827:function(le,R,e){e.r(R),e.d(R,{default:function(){return be}});var a=e(15009),r=e.n(a),f=e(97857),m=e.n(f),W=e(99289),u=e.n(W),E=e(5574),h=e.n(E),G=e(99702),P=e(97321),x=e(67294),n=e(85893),k=function(C){var L=C.tenant,H=C.handleChangeTenant,z=function(){var S=[];return L&&(S=L.map(function(I){return(0,n.jsx)(P.Z,{size:"default",avatar:"/icons/tenant_default.svg",title:I.tenantCode,value:I.id,description:I.note},I.id)})),S};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(P.Z.Group,{multiple:!1,onChange:H,children:z()})})},b=k,O=e(79935),D=e(7646),d=e(41913),te=e(85576),c=function(C){var L=C.tenantVisible,H=C.handleTenantVisible,z=C.submitting,y=C.tenant,S=C.handleChooseTenant,I=(0,x.useState)(!0),A=h()(I,2),U=A[0],ee=A[1],N=(0,x.useState)(),X=h()(N,2),w=X[0],J=X[1],oe=function(g){g?(ee(!1),J(g),(0,D.h0)(g)):ee(!0)};return(0,n.jsx)(te.Z,m()(m()({title:(0,d.l)("login.chooseTenant"),open:L},O.SU),{},{onCancel:H,onOk:function(){return S(w)},okText:(0,d.l)("button.confirm"),okButtonProps:{disabled:U,htmlType:"submit",autoFocus:!0,loading:z},children:(0,n.jsx)(b,{tenant:y,handleChangeTenant:oe})}))},t=c,B=e(10581),K=function(){B.m&&setTimeout(function(){var C=new URL(window.location.href).searchParams;B.m.replace(C.get("redirect")||"/")},10)},ne=function(){window.location.href="/user/login"},M=function(){(0,D.$q)(),(0,D.RP)(O.OP)&&(0,D.M_)(O.OP,"false")},j=e(45939),i=e(57344),V=e(28906),Y=e(74071),o=function(){var C=(0,i.useModel)("@@initialState"),L=C.initialState,H=C.setInitialState,z=(0,j._)(O.Px,O.Ir),y=h()(z,2),S=y[0],I=y[1],A=(0,Y.ZP)(O.YK,S),U=h()(A,2),ee=U[0],N=U[1];(0,x.useEffect)(function(){N(S),H(function(w){return m()(m()({},w),{},{locale:S})})},[L]);var X=(0,V.l)(function(w){var J=w.token;return{width:42,lineHeight:"42px",position:"absolute",top:10,right:10,borderRadius:J.borderRadius,zIndex:999,":hover":{backgroundColor:J.colorBgTextHover}}});return(0,n.jsx)("div",{className:X,children:i.SelectLang&&(0,n.jsx)(i.SelectLang,{})})},Pe=o,ae=e(21953),Ce=e(58023),se=e(87712),xe=e(67610),ye=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Helmet,{children:(0,n.jsxs)("title",{children:[(0,d.l)("menu.login")," - ",xe.Z.title]})})})},de=e(87454),Se=e(25538),Te=e(29177),je=e(94149),ue=e(97269),ce=e(5966),ve=e(63434),Ze=e(71230),fe=e(15746),F={root:"root___GKj2d",content:"content___b6lZt",top:"top___ZxnIH",header:"header___n_tXN",logo:"logo___ljDSQ",desc:"desc___l8VOV",loginformMain:"loginformMain___Ezo0T",form:"form___oVyek",loginform:"loginform___SRvU3","monaco-scrollable-element":"monaco-scrollable-element___lS9yk",scrollbar:"scrollbar___zXR0i",slider:"slider___RO9XG",colorWeak:"colorWeak___mio8j","ant-layout":"ant-layout___jAUUr","ant-pro-sider":"ant-pro-sider___wGBeW","ant-layout-sider":"ant-layout-sider___sqfA3","ant-pro-sider-fixed":"ant-pro-sider-fixed___jgWvj","ant-table":"ant-table___najh6","ant-table-thead":"ant-table-thead___k7etk","ant-table-tbody":"ant-table-tbody___UlQsl","options-button":"options-button___Bvlol","blue-icon":"blue-icon___T9Pxh","ant-pro-page-container-children-content":"ant-pro-page-container-children-content___rZjcT","ant-pro-query-filter":"ant-pro-query-filter___wejjU","ant-pro-card-body":"ant-pro-card-body___XMVSn","hidden-overflow":"hidden-overflow___Omqh5","ant-list":"ant-list___eQltJ","ant-list-pagination":"ant-list-pagination____oVy9","ant-table-wrapper":"ant-table-wrapper___IoKWE","child-list":"child-list___LN_QN",treeList:"treeList___RxHSZ","ant-tree-list-holder-inner":"ant-tree-list-holder-inner___t52bx","tree-search-value":"tree-search-value___Z7p1W",siderTree:"siderTree___pL_I0","ant-tree":"ant-tree___UvBRS","ant-tree-node-content-wrapper":"ant-tree-node-content-wrapper___TNYQv",gitCodeTree:"gitCodeTree___fN9iA",schemaTree:"schemaTree___yYxYE","code-content-empty":"code-content-empty___zvI9W","monaco-float":"monaco-float___zvCMg","float-button":"float-button___VnPJQ","back-bottom":"back-bottom___SEVv6","full-screen":"full-screen___XMlYh",needWrap:"needWrap___LiXL4","query-form":"query-form___r3atx","tiny-charts":"tiny-charts___LS8ye","radio-group-chart":"radio-group-chart___t8gRL","tag-content":"tag-content___jiAwy","ant-pro-checkcard-title":"ant-pro-checkcard-title___BV585",show:"show___lgx5p","show-anim":"show-anim___KkjV4",hide:"hide___WweHN","hide-anim":"hide-anim____PKfq",title:"title___du9rm","container-header":"container-header___xJ7dg","content-scroll":"content-scroll___eB4Uf","editor-full-screen":"editor-full-screen___TLNmr","ant-tabs-tabpane":"ant-tabs-tabpane___hQBZv","data-studio-tabs":"data-studio-tabs___DpbLl","ant-tabs-nav":"ant-tabs-nav___kBhOI","ant-tabs-nav-wrap":"ant-tabs-nav-wrap____fJqR","ant-tabs-tab":"ant-tabs-tab___Wj2ln","ant-tabs-tab-active":"ant-tabs-tab-active___g6ESd","data-studio-form":"data-studio-form___RXA7L","ant-form-item":"ant-form-item___i4hjr","ant-pro-form-list-item":"ant-pro-form-list-item___qNLV_","ant-pro-checkcard":"ant-pro-checkcard___kWuwc","ant-pro-checkcard-body":"ant-pro-checkcard-body___mfcES","butterfly-lineage-dag":"butterfly-lineage-dag___FuK_A","table-node":"table-node___dWEwA",focus:"focus___wfwl5",field:"field___HzHiM","hover-chain":"hover-chain___TAKCn","title-con":"title-con___HQ5s6","ant-typography":"ant-typography___X9KQf",point:"point___GonVh","left-point":"left-point___A_GlX","right-point":"right-point___LinX0","butterflies-link":"butterflies-link___TO0RZ","running-line":"running-line___Fw07U","butterflies-arrow":"butterflies-arrow___vuf8I",operator:"operator___kuN3r","operator-item":"operator-item___pnP5j","card-list-item-wrapper":"card-list-item-wrapper___P3fAP","card-list-item":"card-list-item___irJNZ","card-button-list":"card-button-list___aYosi",mtkb:"mtkb___r92CZ","split-pane":"split-pane___Yo6xH",Resizer:"Resizer___vooSn",horizontal:"horizontal___T7X3W",resizing:"resizing___PukY4",vertical:"vertical___IMHOj",DragLayer:"DragLayer___Fegi5","ant-notification-notice-wrapper":"ant-notification-notice-wrapper___rxSN7"},he=function(C){var L=C.children;return(0,n.jsxs)("div",{className:F.loginformMain,style:{backgroundImage:"url('./icons/main-bg.svg')"},children:[(0,n.jsx)("img",{className:F.logo,src:xe.Z.logo}),(0,n.jsxs)("div",{className:F.form,children:[(0,n.jsx)("div",{className:F.top,children:(0,n.jsx)("div",{className:F.desc,children:(0,d.l)("layouts.userLayout.title")})}),L]})]})},pe=he,Ee=function(C){var L=C.onSubmit,H=ue.A.useForm(),z=h()(H,1),y=z[0],S=(0,x.useState)(!1),I=h()(S,2),A=I[0],U=I[1],ee=(0,x.useState)(!1),N=h()(ee,2),X=N[0],w=N[1];(0,x.useEffect)(function(){(0,Se.Yu)(Ce.Z.GET_LDAP_ENABLE).then(function(g){w(g.data),y.setFieldValue("ldapLogin",g.data)},function(g){return console.error(g)})},[]);var J=function(){var g=u()(r()().mark(function Q(){return r()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return U(!0),re.next=3,L(m()({},y.getFieldsValue()));case 3:U(!1);case 4:case"end":return re.stop()}},Q)}));return function(){return g.apply(this,arguments)}}(),oe=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ce.Z,{name:"username",width:"md",fieldProps:{size:"large",prefix:(0,n.jsx)(Te.Z,{})},required:!0,placeholder:(0,d.l)("login.username.placeholder"),rules:[{required:!0,message:(0,d.l)("login.username.required")}]}),(0,n.jsx)(ce.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,n.jsx)(je.Z,{})},placeholder:(0,d.l)("login.password.placeholder"),rules:[{required:!0,message:(0,d.l)("login.password.required")}]}),(0,n.jsxs)(Ze.Z,{children:[(0,n.jsx)(fe.Z,{span:18,children:(0,n.jsx)(ve.Z,{name:"autoLogin",children:(0,d.l)("login.rememberMe")})}),(0,n.jsx)(fe.Z,{span:6,children:(0,n.jsx)(ve.Z,{name:"ldapLogin",hidden:!X,children:(0,d.l)("login.ldapLogin")})})]})]})},ie={searchConfig:{submitText:(0,d.l)("menu.login")},resetButtonProps:!1,submitButtonProps:{loading:A,autoFocus:!0,htmlType:"submit",size:"large",shape:"round",style:{width:"100%"}}};return(0,n.jsx)(pe,{children:(0,n.jsx)(de.Z,{children:(0,n.jsx)(ue.A,{className:F.loginform,form:y,onFinish:J,initialValues:{autoLogin:!0},submitter:m()({},ie),children:oe()})})})},Le=Ee,me=function(){var C=(0,x.useState)(!1),L=h()(C,2),H=L[0],z=L[1],y=(0,i.useModel)("@@initialState"),S=y.initialState,I=y.setInitialState,A=(0,x.useState)(!1),U=h()(A,2),ee=U[0],N=U[1],X=(0,x.useState)([]),w=h()(X,2),J=w[0],oe=w[1],ie=(0,j._)("token",""),g=h()(ie,2),Q=g[0],$=g[1],re=(0,i.useModel)("Sse",function(T){return{reconnectSse:T.reconnectSse}}),ge=re.reconnectSse,Me=(0,V.l)(function(){return{display:"flex",flexDirection:"column",height:"100%"}}),Fe=function(){var T=u()(r()().mark(function p(){var v,_;return r()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,S==null||(v=S.fetchUserInfo)===null||v===void 0?void 0:v.call(S);case 2:_=Z.sent,_&&I(function(s){return m()(m()({},s),{},{currentUser:_})});case 4:case"end":return Z.stop()}},p)}));return function(){return T.apply(this,arguments)}}();(0,x.useEffect)(function(){var T,p,v=(T=(p=JSON.parse(JSON.stringify(Q)))===null||p===void 0?void 0:p.tokenTimeout)!==null&&T!==void 0?T:0,_=0,l;if(v>0){var Z=Date.now();_=v-Z,l=setInterval(function(){return ne()},_)}return function(){clearTimeout(l)}},[S,Q]);var Oe=function(){var T=u()(r()().mark(function p(v){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(v.code!==0){l.next=9;break}return l.next=3,(0,se.kP)((0,d.l)("login.chooseTenantSuccess","",{msg:v.msg,tenantCode:v.data.tenantCode}));case 3:return l.next=5,Fe();case 5:ge(),K(),l.next=11;break;case 9:return(0,se.Bc)((0,d.l)("login.chooseTenantFailed")),l.abrupt("return");case 11:case"end":return l.stop()}},p)}));return function(v){return T.apply(this,arguments)}}(),Ie=function(){var T=u()(r()().mark(function p(v){return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(v===null||v.length===0)){l.next=5;break}return(0,se.Bc)((0,d.l)("login.notbindtenant")),l.abrupt("return");case 5:oe(v);case 6:case"end":return l.stop()}},p)}));return function(v){return T.apply(this,arguments)}}(),Re=function(){var T=u()(r()().mark(function p(v){var _,l;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return _=v[0].id,(0,D.h0)(_),s.next=4,(0,ae.GK)({tenantId:_});case 4:return l=s.sent,s.next=7,Oe(l);case 7:case"end":return s.stop()}},p)}));return function(v){return T.apply(this,arguments)}}(),We=function(){var T=u()(r()().mark(function p(v){var _,l;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,(0,ae.x4)(m()({},v));case 3:if(_=s.sent,_.code!==0){s.next=7;break}return s.next=7,(0,ae.Ri)(Ce.Z.TOKEN_INFO).then(function(_e){console.log(_e),_e?$(JSON.stringify(_e)):ne()});case 7:return I(function(_e){return m()(m()({},_e),{},{currentUser:_.data})}),s.next=10,(0,se.kP)((0,d.l)("login.result","",{msg:_.msg,time:_.time}));case 10:return l=_.data.tenantList,s.next=13,Ie(l);case 13:if(!(l&&l.length>1)){s.next=17;break}N(!0),s.next=19;break;case 17:return s.next=19,Re(l);case 19:return s.abrupt("return");case 22:return s.prev=22,s.t0=s.catch(0),s.abrupt("return");case 25:case"end":return s.stop()}},p,null,[[0,22]])}));return function(v){return T.apply(this,arguments)}}(),De=function(){var T=u()(r()().mark(function p(v){var _;return r()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return z(!0),Z.next=3,(0,ae.GK)({tenantId:v});case 3:return _=Z.sent,Z.next=6,Oe(_);case 6:N(!1);case 7:case"end":return Z.stop()}},p)}));return function(v){return T.apply(this,arguments)}}();return M(),(0,n.jsxs)("div",{className:Me,children:[(0,n.jsx)(ye,{}),(0,n.jsx)(Pe,{}),(0,n.jsx)(Le,{onSubmit:We}),(0,n.jsx)(G.Z,{}),(0,n.jsx)(t,{tenantVisible:ee,handleTenantVisible:function(){return N(!1)},submitting:H,handleChooseTenant:function(p){return De(p)},tenant:J})]})},be=me}}]);
