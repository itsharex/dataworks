"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[7321],{97321:function(Ne,te,t){t.d(te,{Z:function(){return K}});var n=t(4942),j=t(1413),q=t(45987),_=t(97685),ee=t(21770),ae=t(28459),ce=t(7134),oe=t(93967),w=t.n(oe),C=t(67294),se=t(80171),ue=t(74902),E=t(71230),m=t(15746),ve=t(97435),a=t(85893),ge=["prefixCls","className","style","options","loading","multiple","bordered","onChange"],he=function(e){var h=e.prefixCls,s="".concat(h,"-loading-block");return(0,a.jsxs)("div",{className:"".concat(h,"-loading-content"),children:[(0,a.jsx)(E.Z,{gutter:{xs:8,sm:8,md:8,lg:12},children:(0,a.jsx)(m.Z,{span:22,children:(0,a.jsx)("div",{className:s})})}),(0,a.jsxs)(E.Z,{gutter:8,children:[(0,a.jsx)(m.Z,{span:8,children:(0,a.jsx)("div",{className:s})}),(0,a.jsx)(m.Z,{span:14,children:(0,a.jsx)("div",{className:s})})]}),(0,a.jsxs)(E.Z,{gutter:8,children:[(0,a.jsx)(m.Z,{span:6,children:(0,a.jsx)("div",{className:s})}),(0,a.jsx)(m.Z,{span:16,children:(0,a.jsx)("div",{className:s})})]}),(0,a.jsxs)(E.Z,{gutter:8,children:[(0,a.jsx)(m.Z,{span:13,children:(0,a.jsx)("div",{className:s})}),(0,a.jsx)(m.Z,{span:9,children:(0,a.jsx)("div",{className:s})})]}),(0,a.jsxs)(E.Z,{gutter:8,children:[(0,a.jsx)(m.Z,{span:4,children:(0,a.jsx)("div",{className:s})}),(0,a.jsx)(m.Z,{span:3,children:(0,a.jsx)("div",{className:s})}),(0,a.jsx)(m.Z,{span:14,children:(0,a.jsx)("div",{className:s})})]})]})},re=(0,C.createContext)(null),fe=function(e){var h=e.prefixCls,s=e.className,D=e.style,I=e.options,r=I===void 0?[]:I,A=e.loading,G=A===void 0?!1:A,H=e.multiple,M=H===void 0?!1:H,L=e.bordered,J=L===void 0?!0:L,de=e.onChange,S=(0,q.Z)(e,ge),N=(0,C.useContext)(ae.ZP.ConfigContext),P=(0,C.useCallback)(function(){return r==null?void 0:r.map(function(u){return typeof u=="string"?{title:u,value:u}:u})},[r]),T=N.getPrefixCls("pro-checkcard",h),p="".concat(T,"-group"),X=(0,ve.default)(S,["children","defaultValue","value","disabled","size"]),Q=(0,ee.Z)(e.defaultValue,{value:e.value,onChange:e.onChange}),O=(0,_.Z)(Q,2),c=O[0],i=O[1],B=(0,C.useRef)(new Map),U=function(l){var d;(d=B.current)===null||d===void 0||d.set(l,!0)},v=function(l){var d;(d=B.current)===null||d===void 0||d.delete(l)},W=function(l){if(!M){var d;d=c,d===l.value?d=void 0:d=l.value,i==null||i(d)}if(M){var x,Z=[],R=c,F=R==null?void 0:R.includes(l.value);Z=(0,ue.Z)(R||[]),F||Z.push(l.value),F&&(Z=Z.filter(function(z){return z!==l.value}));var k=P(),V=(x=Z)===null||x===void 0||(x=x.filter(function(z){return B.current.has(z)}))===null||x===void 0?void 0:x.sort(function(z,f){var o=k.findIndex(function(b){return b.value===z}),g=k.findIndex(function(b){return b.value===f});return o-g});i(V)}},$=(0,C.useMemo)(function(){if(G)return new Array(r.length||C.Children.toArray(e.children).length||1).fill(0).map(function(l,d){return(0,a.jsx)(K,{loading:!0},d)});if(r&&r.length>0){var u=c;return P().map(function(l){var d;return(0,a.jsx)(K,{disabled:l.disabled,size:(d=l.size)!==null&&d!==void 0?d:e.size,value:l.value,checked:M?u==null?void 0:u.includes(l.value):u===l.value,onChange:l.onChange,title:l.title,avatar:l.avatar,description:l.description,cover:l.cover},l.value.toString())})}return e.children},[P,G,M,r,e.children,e.size,c]),Y=w()(p,s);return(0,a.jsx)(re.Provider,{value:{toggleOption:W,bordered:J,value:c,disabled:e.disabled,size:e.size,loading:e.loading,multiple:e.multiple,registerValue:U,cancelValue:v},children:(0,a.jsx)("div",(0,j.Z)((0,j.Z)({className:Y,style:D},X),{},{children:$}))})},xe=fe,Ce=t(39302),me=t(98082),ne=function(e){return{backgroundColor:e.colorPrimaryBg,borderColor:e.colorPrimary}},ie=function(e){return(0,n.Z)({backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,cursor:"not-allowed"},e.componentCls,{"&-description":{color:e.colorTextDisabled},"&-title":{color:e.colorTextDisabled},"&-avatar":{opacity:"0.25"}})},be=new Ce.Keyframes("card-loading",{"0%":{backgroundPosition:"0 50%"},"50%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),Ze=function(e){var h;return(0,n.Z)({},e.componentCls,(h={position:"relative",display:"inline-block",width:"320px",marginInlineEnd:"16px",marginBlockEnd:"16px",color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,verticalAlign:"top",backgroundColor:e.colorBgContainer,borderRadius:e.borderRadius,overflow:"auto",cursor:"pointer",transition:"all 0.3s","&:last-child":{marginInlineEnd:0},"& + &":{marginInlineStart:"0 !important"},"&-bordered":{border:"".concat(e.lineWidth,"px solid ").concat(e.colorBorder)},"&-group":{display:"inline-block"}},(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)(h,"".concat(e.componentCls,"-loading"),{overflow:"hidden",userSelect:"none","&-content":(0,n.Z)({paddingInline:e.padding,paddingBlock:e.paddingSM,p:{marginBlock:0,marginInline:0}},"".concat(e.componentCls,"-loading-block"),{height:"14px",marginBlock:"4px",background:"linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))",animationName:be,animationDuration:"1.4s",animationTimingFunction:"ease",animationIterationCount:"infinite"})}),"&:focus",ne(e)),"&-checked",(0,j.Z)((0,j.Z)({},ne(e)),{},{"&:after":{position:"absolute",insetBlockStart:2,insetInlineEnd:2,width:0,height:0,border:"".concat(e.borderRadius+4,"px solid ").concat(e.colorPrimary),borderBlockEnd:"".concat(e.borderRadius+4,"px  solid transparent"),borderInlineStart:"".concat(e.borderRadius+4,"px  solid transparent"),borderStartEndRadius:"".concat(e.borderRadius,"px"),content:"''"}})),"&-disabled",ie(e)),"&[disabled]",ie(e)),"&-checked&-disabled",{"&:after":{position:"absolute",insetBlockStart:2,insetInlineEnd:2,width:0,height:0,border:"".concat(e.borderRadius+4,"px solid ").concat(e.colorTextDisabled),borderBlockEnd:"".concat(e.borderRadius+4,"px  solid transparent"),borderInlineStart:"".concat(e.borderRadius+4,"px  solid transparent"),borderStartEndRadius:"".concat(e.borderRadius,"px"),content:"''"}}),"&-lg",{width:440}),"&-sm",{width:212}),"&-cover",{paddingInline:e.paddingXXS,paddingBlock:e.paddingXXS,img:{width:"100%",height:"100%",overflow:"hidden",borderRadius:e.borderRadius}}),"&-content",{display:"flex",paddingInline:e.paddingSM,paddingBlock:e.padding}),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)(h,"&-body",{paddingInline:e.paddingSM,paddingBlock:e.padding}),"&-avatar-header",{display:"flex",alignItems:"center"}),"&-avatar",{paddingInlineEnd:8}),"&-detail",{overflow:"hidden",width:"100%","> div:not(:last-child)":{marginBlockEnd:4}}),"&-header",{display:"flex",alignItems:"center",justifyContent:"space-between",lineHeight:e.lineHeight,"&-left":{display:"flex",alignItems:"center",gap:e.sizeSM}}),"&-title",{overflow:"hidden",color:e.colorTextHeading,fontWeight:"500",fontSize:e.fontSize,whiteSpace:"nowrap",textOverflow:"ellipsis",display:"flex",alignItems:"center",justifyContent:"space-between"}),"&-description",{color:e.colorTextSecondary}),"&:not(".concat(e.componentCls,"-disabled)"),{"&:hover":{borderColor:e.colorPrimary}})))};function je(y){return(0,me.Xj)("CheckCard",function(e){var h=(0,j.Z)((0,j.Z)({},e),{},{componentCls:".".concat(y)});return[Ze(h)]})}var ye=["prefixCls","className","avatar","title","description","cover","extra","style"],le=function(e){var h=(0,ee.Z)(e.defaultChecked||!1,{value:e.checked,onChange:e.onChange}),s=(0,_.Z)(h,2),D=s[0],I=s[1],r=(0,C.useContext)(re),A=(0,C.useContext)(ae.ZP.ConfigContext),G=A.getPrefixCls,H=function(o){var g,b;e==null||(g=e.onClick)===null||g===void 0||g.call(e,o);var Se=!D;r==null||(b=r.toggleOption)===null||b===void 0||b.call(r,{value:e.value}),I==null||I(Se)},M=function(o){return o==="large"?"lg":o==="small"?"sm":""};(0,C.useEffect)(function(){var f;return r==null||(f=r.registerValue)===null||f===void 0||f.call(r,e.value),function(){var o;return r==null||(o=r.cancelValue)===null||o===void 0?void 0:o.call(r,e.value)}},[e.value]);var L=function(o,g){return(0,a.jsx)("div",{className:"".concat(o,"-cover"),children:typeof g=="string"?(0,a.jsx)("img",{src:g,alt:"checkcard"}):g})},J=e.prefixCls,de=e.className,S=e.avatar,N=e.title,P=e.description,T=e.cover,p=e.extra,X=e.style,Q=X===void 0?{}:X,O=(0,q.Z)(e,ye),c=(0,j.Z)({},O),i=G("pro-checkcard",J),B=je(i),U=B.wrapSSR,v=B.hashId;c.checked=D;var W=!1;if(r){var $;c.disabled=e.disabled||r.disabled,c.loading=e.loading||r.loading,c.bordered=e.bordered||r.bordered,W=r.multiple;var Y=r.multiple?($=r.value)===null||$===void 0?void 0:$.includes(e.value):r.value===e.value;c.checked=c.loading?!1:Y,c.size=e.size||r.size}var u=c.disabled,l=u===void 0?!1:u,d=c.size,x=c.loading,Z=c.bordered,R=Z===void 0?!0:Z,F=c.checked,k=M(d),V=w()(i,de,v,(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},"".concat(i,"-loading"),x),"".concat(i,"-").concat(k),k),"".concat(i,"-checked"),F),"".concat(i,"-multiple"),W),"".concat(i,"-disabled"),l),"".concat(i,"-bordered"),R),"".concat(i,"-ghost"),e.ghost)),z=(0,C.useMemo)(function(){if(x)return(0,a.jsx)(he,{prefixCls:i||""});if(T)return L(i||"",T);var f=S?(0,a.jsx)("div",{className:"".concat(i,"-avatar ").concat(v).trim(),children:typeof S=="string"?(0,a.jsx)(ce.C,{size:48,shape:"square",src:S}):S}):null,o=(N!=null?N:p)!=null&&(0,a.jsxs)("div",{className:"".concat(i,"-header ").concat(v).trim(),children:[(0,a.jsxs)("div",{className:"".concat(i,"-header-left ").concat(v).trim(),children:[(0,a.jsx)("div",{className:"".concat(i,"-title ").concat(v).trim(),children:N}),e.subTitle?(0,a.jsx)("div",{className:"".concat(i,"-subTitle ").concat(v).trim(),children:e.subTitle}):null]}),p&&(0,a.jsx)("div",{className:"".concat(i,"-extra ").concat(v).trim(),children:p})]}),g=P?(0,a.jsx)("div",{className:"".concat(i,"-description ").concat(v).trim(),children:P}):null,b=w()("".concat(i,"-content"),v,(0,n.Z)({},"".concat(i,"-avatar-header"),f&&o&&!g));return(0,a.jsxs)("div",{className:b,children:[f,o||g?(0,a.jsxs)("div",{className:"".concat(i,"-detail ").concat(v).trim(),children:[o,g]}):null]})},[S,x,T,P,p,v,i,e.subTitle,N]);return U((0,a.jsxs)("div",{className:V,style:Q,onClick:function(o){!x&&!l&&H(o)},onMouseEnter:e.onMouseEnter,children:[z,e.children?(0,a.jsx)("div",{className:w()("".concat(i,"-body")),style:e.bodyStyle,children:e.children}):null,e.actions?(0,a.jsx)(se.Z,{actions:e.actions,prefixCls:i}):null]}))};le.Group=xe;var K=le}}]);
