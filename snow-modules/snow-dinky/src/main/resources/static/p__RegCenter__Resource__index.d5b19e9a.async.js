"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[4654],{68166:function(Y,R,e){var D=e(96012),_=e(85893),s=function(t){var P=t.children,d=(0,D.q_)({opacity:1,from:{opacity:0},config:{duration:100}});return(0,_.jsx)(D.q.h1,{style:d,children:P})};R.Z=s},13468:function(Y,R,e){e.d(R,{P:function(){return p}});var D=e(97857),_=e.n(D),s=e(15009),E=e.n(s),t=e(99289),P=e.n(t),d=e(5574),O=e.n(d),C=e(14726),b=e(67294),M=e(85893),p=function(c){var g=c.click,I=c.title,v=c.icon,n=c.hotKeyDesc,z=c.props,V=(0,b.useState)(!1),X=O()(V,2),te=X[0],re=X[1],J=function(){var ae=P()(E()().mark(function x(ie){var B;return E()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(!g){L.next=9;break}return re(!0),L.next=4,g();case 4:if(B=L.sent,!(B instanceof Promise)){L.next=8;break}return L.next=8,B;case 8:re(!1);case 9:case"end":return L.stop()}},x)}));return function(ie){return ae.apply(this,arguments)}}();return(0,M.jsx)(C.ZP,_()(_()({size:"small",type:"text",icon:v,title:n,loading:te,onClick:function(x){return J(x)}},z),{},{children:I}),I)}},73064:function(Y,R,e){var D=e(97857),_=e.n(D),s=e(85418),E=e(67294),t=e(85893),P=function(O){var C=O.onClick,b=O.items,M=O.openChange,p=O.open,a=O.contextMenuPosition;return(0,t.jsx)(s.Z,{arrow:!0,trigger:["contextMenu"],overlayStyle:_()({},a),menu:{onClick:C,items:b},open:p,onOpenChange:M,children:(0,t.jsx)("div",{style:_()({},a)})})};R.Z=P},39149:function(Y,R,e){e.d(R,{Fu:function(){return n},HL:function(){return g},Td:function(){return z},Y2:function(){return I},Z1:function(){return V},nh:function(){return v},vE:function(){return c}});var D=e(68400),_=e.n(D),s=e(9361),E=e(97653),t,P,d,O,C,b,M,p=s.Z.getDesignToken,a=p(),c=E.ZP.div(t||(t=_()([`
  display: flex !important;
  justify-content: space-between;
  margin-left: 2vw;
  margin-right: 2vw;
`]))),g=E.ZP.div(P||(P=_()([`
  display: flex !important;
  justify-content: flex-end;
`]))),I=E.ZP.div(d||(d=_()([`
  height: 80vh;
  overflow: auto;
`]))),v=E.ZP.div(O||(O=_()([`
  position: absolute;
  color: #1890ff;
  font-size: large;
  z-index: 2;
  top: 50%;
`]))),n=E.ZP.div(C||(C=_()([`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`]))),z=E.ZP.div(b||(b=_()([`
  display: flex;
  height: 100%;
  justify-content: left;
  align-items: center;
`]))),V=E.ZP.div(M||(M=_()([`
  display: flex;
  height: 100%;
  justify-content: left;
  align-items: center;
`])))},73013:function(Y,R,e){e.d(R,{C:function(){return M}});var D=e(64599),_=e.n(D),s=e(39149),E=e(7646),t=e(41913),P=e(17057),d=e(85893),O=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,c=arguments.length>1?arguments[1]:void 0,g="ADD FILE 'rs:".concat(c.fullName,"';");return(0,d.jsxs)(d.Fragment,{children:[!c.isDirectory&&a?(0,d.jsx)(P.Z.Text,{copyable:{text:g,tooltips:(0,t.l)("rc.resource.copy","",{fillValue:g})},children:c.fileName}):c.fileName,!c.isDirectory&&(0,d.jsxs)("span",{style:{color:"gray"},children:[" ","\xA0\xA0",(0,t.l)("global.size","",{size:(0,E.Dd)(c.size)})]})]})};function C(p){if(!p.children)return!0;var a=_()(p.children),c;try{for(a.s();!(c=a.n()).done;){var g=c.value;if(g.isDirectory){if(!C(g))return!1}else return!1}}catch(I){a.e(I)}finally{a.f()}return!0}function b(p,a,c){if(p){if(a.isDirectory)return!p||!C(a);var g=a.fileName.split(".").reverse().pop();if(g)return!c.includes(g)}return!0}var M=function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return a.filter(function(v){return b(c,v,g)}).map(function(v){return{isLeaf:!v.isDirectory,name:v.fileName,parentId:v.pid,label:v.fileName,icon:(0,d.jsx)(s.Fu,{children:(0,E.hY)(v.fileName,".",v.isDirectory)}),path:v.fullName,title:O(I,v),fullInfo:v,key:v.id,id:v.id,children:v.children&&p(v.children,c,g,I)}})}},78241:function(Y,R,e){e.r(R),e.d(R,{default:function(){return we}});var D=e(68166),_=e(15009),s=e.n(_),E=e(97857),t=e.n(E),P=e(99289),d=e.n(P),O=e(5574),C=e.n(O),b=e(73064),M=e(49881),p=e(81029),a=e(41913),c=e(48689),g=e(86548),I=e(64789),v=e(88484),n=e(85893),z=[{key:"delete",icon:(0,n.jsx)(c.Z,{}),label:(0,a.l)("right.menu.delete"),path:p.k5.REGISTRATION_RESOURCE_DELETE},{key:"rename",icon:(0,n.jsx)(g.Z,{}),label:(0,a.l)("right.menu.rename"),path:p.k5.REGISTRATION_RESOURCE_RENAME}],V=[{key:"createFolder",icon:(0,n.jsx)(I.Z,{}),label:(0,a.l)("right.menu.createFolder"),path:p.k5.REGISTRATION_RESOURCE_ADD_FOLDER},{key:"upload",icon:(0,n.jsx)(v.Z,{}),label:(0,a.l)("button.upload"),path:p.k5.REGISTRATION_RESOURCE_UPLOAD},{key:"delete",icon:(0,n.jsx)(c.Z,{}),label:(0,a.l)("right.menu.delete"),path:p.k5.REGISTRATION_RESOURCE_DELETE},{key:"rename",icon:(0,n.jsx)(g.Z,{}),label:(0,a.l)("right.menu.rename"),path:p.k5.REGISTRATION_RESOURCE_RENAME}],X=e(67939),te=e(7646),re=e(17057),J=e(32983),ae=e(42075),x=e(67294),ie=e(39711),B=re.Z.Text,de={height:"88vh",width:"100%",lineNumbers:"on"},L=function(h){var T=h.item,u=T.name,f=T.isLeaf,A=h.code,N=h.onChange,k={showFloatButton:!0,code:A,onChange:N,language:(0,te.Tz)(u,".")},U=function(){return u&&(0,te.UJ)(u)&&f?(0,n.jsx)(J.Z,{style:{alignItems:"center",justifyContent:"center",top:"50%",height:"100%"},imageStyle:{marginTop:"20vh"},description:(0,a.l)("rc.gp.codeTree.unSupportView")}):A===""||A===null||A===void 0?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(J.Z,{style:{alignItems:"center",justifyContent:"center",top:"50%",height:"100%"},imageStyle:{marginTop:"20vh"},description:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(ae.Z,{direction:"vertical",children:[(0,n.jsxs)(B,{type:"success",strong:!0,children:[" ",(0,a.l)("rc.resource.click")]}),(0,n.jsx)(B,{type:"danger",strong:!0,children:(0,a.l)("rc.resource.click.tip1")}),(0,n.jsx)(B,{mark:!0,ellipsis:!0,italic:!0,children:(0,a.l)("rc.resource.click.tip2")}),(0,n.jsxs)(B,{mark:!0,ellipsis:!0,italic:!0,children:[(0,a.l)("rc.resource.click.tip3")," ",(0,n.jsx)(ie.OL,{to:"/settings/globalsetting",children:(0,a.l)("menu.settings")})]})]})})})}):(0,n.jsx)(X.Z,t()(t()({},k),de))};return(0,n.jsx)(n.Fragment,{children:U()})},he=L,_e=e(13468),ge=e(73013),Ee=e(5075),ye=e(86250),Oe=e(96074),Ce=Ee.Z.DirectoryTree,je=function(h){var T=h.treeData,u=h.selectedKeys,f=h.onNodeClick,A=h.onRightClick,N=h.onSync;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ye.Z,{justify:"space-between",align:"center",children:[(0,n.jsx)(re.Z.Text,{children:(0,a.l)("rc.resource.filelist")}),(0,n.jsx)(_e.P,{props:{type:"link"},click:N,title:(0,a.l)("rc.resource.sync")})]}),(0,n.jsx)(Oe.Z,{style:{margin:"8px"}}),T.length>0?(0,n.jsx)(Ce,{className:"treeList",selectedKeys:u,onSelect:function(U,F){return f(F)},onRightClick:function(U){return A(U)},treeData:(0,ge.C)(T,!1,[],!0)}):(0,n.jsx)(J.Z,{image:J.Z.PRESENTED_IMAGE_SIMPLE})]})},Re=je,De=e(37476),Pe=e(5966),Me=e(90672),Te=e(18922),be=function(h){var T=Te.Z.useForm(),u=C()(T,1),f=u[0],A=x.useMemo(function(){return{resetForm:function(){return f.resetFields()}}},[f]),N=h.title,k=h.onOk,U=h.onClose,F=h.visible,W=h.formValues;(0,x.useEffect)(function(){f.setFieldsValue(W)},[F,W,f]);var $=function(){U(),A.resetForm()},H=function(){var j=d()(s()().mark(function w(){var Z;return s()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,f.validateFields();case 2:Z=G.sent,k(t()(t()({},W),Z)),$();case 5:case"end":return G.stop()}},w)}));return function(){return j.apply(this,arguments)}}();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(De.Y,{title:N,modalProps:{destroyOnClose:!0,onCancel:U,okButtonProps:{htmlType:"submit",autoFocus:!0}},onFinish:H,form:f,open:F,children:[(0,n.jsx)(Pe.Z,{colProps:{span:24},required:!0,name:"fileName",label:"\u540D\u79F0"}),(0,n.jsx)(Me.Z,{colProps:{span:24},name:"description",label:"\u63CF\u8FF0"})]})})},Ie=be,se=e(87712),Se=e(64082),xe=e(23799),Ae=e(85576),ke=xe.Z.Dragger,Ue=function(h){var T=h.onUpload,u=h.onClose,f=h.onOk,A=h.visible,N=T.url,k=T.pid,U=T.description,F={name:"file",multiple:!0,action:N+"?pid="+k,onChange:function(){var W=d()(s()().mark(function H(j){var w,Z,q;return s()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(w=j.file,Z=w.status,q=w.response,Z!=="uploading"&&console.log(j.file,j.fileList),Z!=="done"){S.next=12;break}if(!q.success){S.next=8;break}return S.next=6,(0,se.kP)((0,a.l)("rc.resource.upload.success","",{fileName:j.file.name}));case 6:S.next=10;break;case 8:return S.next=10,(0,se.Eu)(q.msg);case 10:S.next=15;break;case 12:if(Z!=="error"){S.next=15;break}return S.next=15,(0,se.Eu)((0,a.l)("rc.resource.upload.fail","",{fileName:j.file.name}));case 15:case"end":return S.stop()}},H)}));function $(H){return W.apply(this,arguments)}return $}(),onDrop:function($){console.log("Dropped files",$.dataTransfer.files)}};return(0,n.jsx)(Ae.Z,{title:(0,a.l)("rc.resource.upload"),okButtonProps:{htmlType:"submit",autoFocus:!0},onOk:f,onCancel:u,open:A,children:(0,n.jsxs)(ke,t()(t()({},F),{},{children:[(0,n.jsx)("p",{className:"ant-upload-drag-icon",children:(0,n.jsx)(Se.Z,{})}),(0,n.jsx)("p",{className:"ant-upload-text",children:(0,a.l)("rc.resource.upload.tip1")}),(0,n.jsx)("p",{className:"ant-upload-hint",children:(0,a.l)("rc.resource.upload.tip2")})]}))})},Le=Ue,Q=e(21953),K=e(58023),Ne=e(36317),Fe=e(46482),ce=e(18127),ue=e(38345),Ze=e(39697),Be=function(){var h=(0,x.useState)(Ne._W),T=C()(h,2),u=T[0],f=T[1],A=(0,x.useState)(""),N=C()(A,2),k=N[0],U=N[1],F=(0,x.useRef)(null),W=(0,x.useState)({url:K.Z.BASE_URL+K.Z.RESOURCE_UPLOAD,pid:"",description:""}),$=C()(W,1),H=$[0],j=function(){var m=d()(s()().mark(function r(){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,Q.Ri)(K.Z.RESOURCE_SHOW_TREE).then(function(i){return f(function(y){return t()(t()({},y),{},{treeData:i!=null?i:[]})})});case 2:case"end":return l.stop()}},r)}));return function(){return m.apply(this,arguments)}}();(0,Ze.Z)(d()(s()().mark(function m(){return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,j();case 2:case"end":return o.stop()}},m)})),[]);var w=(0,x.useCallback)(function(){var m=d()(s()().mark(function r(o){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,Q.Ri)(K.Z.RESOURCE_GET_CONTENT_BY_ID,{id:o}).then(function(y){return f(function(ee){return t()(t()({},ee),{},{content:y!=null?y:""})})});case 2:case"end":return i.stop()}},r)}));return function(r){return m.apply(this,arguments)}}(),[]),Z=function(){var m=d()(s()().mark(function r(o){var l,i,y,ee,pe,ve;return s()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:if(l=o.node,i=l.id,y=l.isLeaf,ee=l.key,pe=l.name,ve=o.node,f(function(oe){return t()(t()({},oe),{},{selectedKeys:[ee],clickedNode:ve})}),!(y&&!(0,te.UJ)(pe))){ne.next=7;break}return ne.next=5,w(i);case 5:ne.next=8;break;case 7:f(function(oe){return t()(t()({},oe),{},{content:""})});case 8:case"end":return ne.stop()}},r)}));return function(o){return m.apply(this,arguments)}}(),q=function(){if(u.rightClickedNode){U("createFolder");var r=u.rightClickedNode.id;f(function(o){return t()(t()({},o),{},{editOpen:!0,value:{id:r,fileName:"",description:""},contextMenuOpen:!1})})}},G=function(){u.rightClickedNode&&(H.pid=u.rightClickedNode.id,f(function(r){return t()(t()({},r),{},{uploadOpen:!0,contextMenuOpen:!1})}))},S=function(){var m=d()(s()().mark(function r(){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!u.rightClickedNode){l.next=6;break}return f(function(i){return t()(t()({},i),{},{contextMenuOpen:!1})}),l.next=4,(0,Q.m0)(K.Z.RESOURCE_REMOVE,u.rightClickedNode.id);case 4:return l.next=6,j();case 6:case"end":return l.stop()}},r)}));return function(){return m.apply(this,arguments)}}(),Ge=function(){if(u.rightClickedNode){U("rename");var r=u.rightClickedNode,o=r.id,l=r.name,i=r.desc;f(function(y){return t()(t()({},y),{},{editOpen:!0,value:{id:o,fileName:l,description:i},contextMenuOpen:!1})})}},ze=function(){var m=d()(s()().mark(function r(o){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=o.key,i.next=i.t0==="createFolder"?3:i.t0==="upload"?5:i.t0==="delete"?7:i.t0==="rename"?10:12;break;case 3:return q(),i.abrupt("break",13);case 5:return G(),i.abrupt("break",13);case 7:return i.next=9,S();case 9:return i.abrupt("break",13);case 10:return Ge(),i.abrupt("break",13);case 12:return i.abrupt("break",13);case 13:case"end":return i.stop()}},r)}));return function(o){return m.apply(this,arguments)}}(),Ve=function(r){var o=r.node,l=r.event;f(function(i){return t()(t()({},i),{},{selectedKeys:[o.key],rightClickedNode:o,contextMenuOpen:!0,contextMenuPosition:t()(t()({},i.contextMenuPosition),{},{left:l.clientX+20,top:l.clientY+20})})})},$e=function(){var m=d()(s()().mark(function r(){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,Q.WY)(K.Z.RESOURCE_SYNC_DATA,(0,a.l)("rc.resource.sync"),{});case 2:return l.next=4,j();case 4:case"end":return l.stop()}},r)}));return function(){return m.apply(this,arguments)}}(),He=function(){var m=d()(s()().mark(function r(){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f(function(i){return t()(t()({},i),{},{editOpen:!1})}),l.next=3,j();case 3:case"end":return l.stop()}},r)}));return function(){return m.apply(this,arguments)}}(),Ye=function(){var m=d()(s()().mark(function r(o){var l;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(l=u.rightClickedNode.id,k!=="createFolder"){y.next=7;break}return y.next=4,(0,Q.vO)(K.Z.RESOURCE_CREATE_FOLDER,(0,a.l)("right.menu.createFolder"),t()(t()({},o),{},{pid:l}));case 4:f(function(ee){return t()(t()({},ee),{},{editOpen:!1})}),y.next=10;break;case 7:if(k!=="rename"){y.next=10;break}return y.next=10,(0,Q.vO)(K.Z.RESOURCE_RENAME,(0,a.l)("right.menu.rename"),t()(t()({},o),{},{pid:l}));case 10:case"end":return y.stop()}},r)}));return function(o){return m.apply(this,arguments)}}(),fe=function(){var m=d()(s()().mark(function r(){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f(function(i){return t()(t()({},i),{},{uploadOpen:!1})}),l.next=3,j();case 3:case"end":return l.stop()}},r)}));return function(){return m.apply(this,arguments)}}(),Xe=function(r){f(function(o){return t()(t()({},o),{},{content:r})})},me=(0,M.md)(),Je=function(){return u.rightClickedNode.isLeaf?z.filter(function(r){return!r.path||!!(0,M.sg)({path:r.path,children:r,access:me})}):V.filter(function(r){return!r.path||!!(0,M.sg)({path:r.path,children:r,access:me})})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ue.Z,{ghost:!0,size:"small",bodyStyle:{height:parent.innerHeight-80},children:(0,n.jsxs)(Fe.o,{split:"vertical",defaultSizes:[200,500],minSize:200,className:"split-pane",children:[(0,n.jsx)(ce.Pane,{className:"split-pane",forwardRef:F,minSize:200,size:200,split:"horizontal",children:(0,n.jsxs)(ue.Z,{hoverable:!0,boxShadow:!0,bodyStyle:{height:parent.innerHeight-80},colSpan:"18%",children:[(0,n.jsx)(Re,{selectedKeys:u.selectedKeys,treeData:u.treeData,onRightClick:Ve,onNodeClick:function(r){return Z(r)},onSync:$e}),(0,n.jsx)(b.Z,{contextMenuPosition:u.contextMenuPosition,open:u.contextMenuOpen,openChange:function(){return f(function(r){return t()(t()({},r),{},{contextMenuOpen:!1})})},items:Je(),onClick:ze})]})}),(0,n.jsx)(ce.Pane,{className:"split-pane",forwardRef:F,minSize:100,size:100,split:"horizontal",children:(0,n.jsx)(ue.Z,{hoverable:!0,bodyStyle:{height:parent.innerHeight},children:(0,n.jsx)(he,{onChange:Xe,code:u.content,item:u.clickedNode})})})]})}),u.editOpen&&(0,n.jsx)(Ie,{title:k==="createFolder"?(0,a.l)("right.menu.createFolder"):k==="rename"?(0,a.l)("right.menu.rename"):"",formValues:u.value,onOk:Ye,onClose:He,visible:u.editOpen}),u.uploadOpen&&(0,n.jsx)(Le,{onUpload:H,visible:u.uploadOpen,onOk:fe,onClose:fe})]})},Ke=Be,We=e(11774),we=function(){return(0,n.jsx)(D.Z,{children:(0,n.jsx)(We._z,{breadcrumb:{style:{display:"none"}},title:!1,children:(0,n.jsx)(Ke,{})})})}},36317:function(Y,R,e){e.d(R,{Ih:function(){return V},JB:function(){return p},Lc:function(){return c},Ln:function(){return g},RB:function(){return M},TH:function(){return X},_W:function(){return z},_X:function(){return I},er:function(){return b},m4:function(){return n},qI:function(){return a},ql:function(){return E},sh:function(){return v}});var D=e(72174),_=e(57900),s=e(3259),E={alertGroupList:[],loading:!1,addedOpen:!1,editOpen:!1,value:{}},t={webhook:void 0,keyword:void 0,secret:void 0,isEnableProxy:!1,isAtAll:!1,atMobiles:[""],proxy:void 0,port:void 0,user:void 0,password:void 0},P={webhook:void 0,keyword:void 0,secret:void 0,isEnableProxy:!1,isAtAll:!1,users:[""],proxy:void 0,port:void 0,user:void 0,password:void 0},d={serverHost:void 0,serverPort:void 0,sender:void 0,receivers:[""],receiverCcs:[""],enableSmtpAuth:!1,starttlsEnable:!1,sslEnable:!1,smtpSslTrust:void 0,user:void 0,password:void 0},O={sendType:"wechat",isAtAll:!1,webhook:void 0,keyword:void 0,users:void 0,corpId:void 0,secret:void 0,agentId:void 0},C={suppliers:D.Ic.ALIBABA,accessKeyId:void 0,sdkAppId:void 0,accessKeySecret:void 0,signature:void 0,templateId:void 0,configId:(0,s.Zo)(32),weight:1,retryInterval:5,maxRetries:3,phoneNumbers:[""]},b={id:void 0,name:void 0,type:_.X.DINGTALK,params:t||P||d||O||C,enabled:!0,createTime:void 0,updateTime:void 0},M={alertInstanceList:[],loading:!1,addedOpen:!1,editOpen:!1,value:b},p={alertTemplateList:[],loading:!1,addedOpen:!1,editOpen:!1,value:{}},a={loading:!1,addedOpen:!1,editOpen:!1,value:{},configList:[]},c={loading:!1,addedOpen:!1,editOpen:!1,value:{},instanceList:[]},g={loading:!1,addedOpen:!1,editOpen:!1,value:{},drawerOpen:!1},I={loading:!1,addedOpen:!1,editOpen:!1,value:{},logOpen:!1,codeTreeOpen:!1,buildOpen:!1},v={logRecord:"",currentStep:0,showListOpen:!1,percent:0,steps:[]},n={loading:!1,addedOpen:!1,editOpen:!1,value:{},drawerOpen:!1},z={treeData:[],content:"",clickedNode:{},rightClickedNode:{},contextMenuOpen:!1,contextMenuPosition:{top:0,left:0},selectedKeys:[],editOpen:!1,editContent:"",uploadOpen:!1,value:{}},V={loading:!1,addedOpen:!1,editOpen:!1,value:{},drawerOpen:!1},X={loading:!1,addedOpen:!1,editOpen:!1,value:{},isDetailPage:!1}}}]);