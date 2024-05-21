"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[527],{24059:function(re,R,e){var T=e(97857),r=e.n(T),A=e(5574),d=e.n(A),g=e(7646),l=e(80652),E=e(40930),j=e(38345),b=e(88273),P=e(55742),m=e(42075),h=e(92783),_=e(15746),n=e(85576),M=e(95462),a=e(67294),t=e(85893),s=function(u){var O,U=u.data,S=U===void 0?[]:U,B=u.title,G=u.chartType,ae=G===void 0?"Chart":G,I=u.chartSize,H=I===void 0?"25%":I,K=u.chartOptions,J=K===void 0?{}:K,W=u.onChangeJobState,k=W===void 0?function(){}:W,Y=(0,a.useState)({chartType:ae,chartSize:H,titleWidth:"60%"}),w=d()(Y,2),D=w[0],Z=w[1],V=(0,a.useState)(!1),x=d()(V,2),Q=x[0],$=x[1],X=function(o){if(!o||o.length<=1)return"HH:mm:ss";var c=o[o.length-1].time,i=o[0].time,p=Math.abs((0,g.uH)(c,i));return p<=0?"HH:mm:ss":p>=1&&p<7?"MM-DD HH:mm":"MM-DD"},F=r()({animation:!1,data:S,smooth:!0,xField:"time",yField:"value",xAxis:{type:"time",mask:X(S),tickCount:40}},J),q=(0,a.useState)(!1),z=d()(q,2),L=z[0],ee=z[1],N=function(){return[(0,t.jsxs)(P.ZP.Group,{size:"small",buttonStyle:"solid",value:D.chartType,onChange:function(c){Z(function(i){return r()(r()({},i),{},{chartType:c.target.value})}),k(D.chartSize,c.target.value)},style:{textAlign:"left",paddingLeft:"5%"},children:[(0,t.jsx)(P.ZP.Button,{value:"Chart",children:"Chart"}),(0,t.jsx)(P.ZP.Button,{value:"Numeric",children:"Numeric"})]},"chartRadioKey")]},te=function(o,c){return(0,t.jsx)(M.Z,{style:{width:c,position:"absolute"},ellipsis:{tooltip:!0},children:o})},_e=function(){return(0,t.jsxs)(m.Z,{direction:"horizontal",className:"radio-group-chart",style:{display:Q?"inline-flex":"none"},children:[(0,t.jsx)(h.Z,{options:[{label:"Big",value:"50%"},{label:"Small",value:"25%"}],size:"small",value:D.chartSize,onChange:function(c){Z(function(i){return r()(r()({},i),{},{titleWidth:c=="25%"?"50%":"100%",chartSize:c.toString()})}),k(c.toString(),D.chartType)}}),(0,t.jsx)(E.Z,{onClick:function(){return ee(!0)}})]})};return(0,t.jsxs)(_.Z,{span:D.chartSize=="25%"?6:12,children:[(0,t.jsx)(j.Z,{bodyStyle:{textAlign:"center"},colSpan:D.chartSize,bordered:!0,title:te(B,D.titleWidth),extra:_e(),actions:N(),style:{height:240},onMouseEnter:function(){return $(!0)},onMouseLeave:function(){return $(!1)},children:D.chartType=="Chart"?(0,t.jsx)(l.Z,r()({},F)):(0,t.jsx)(b.Z.Group,{style:{minHeight:"100%",minWidth:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)(b.Z,{statistic:{value:S?(O=S[S.length-1])===null||O===void 0?void 0:O.value:0}})})}),(0,t.jsx)(n.Z,{title:B,open:L,onCancel:function(){return ee(!1)},footer:null,width:"100%",children:(0,t.jsx)(l.Z,r()(r()({},F),{},{forceFit:!1,height:700}))})]})};R.Z=s},94524:function(re,R,e){e.d(R,{Z:function(){return P}});var T=function(h,_){var n=new Date(h.getTime()-_*6e4);return n},r=function(h,_,n){var M=new Date(h.getFullYear(),h.getMonth(),h.getDate()-_,n?0:23,n?0:59,n?0:59,n?0:999);return M},A=function(h,_){var n=new Date(h.getFullYear(),h.getMonth()+(_?0:1),_?1:0,_?0:23,_?0:59,_?0:59,_?0:999);return n},d=e(41913),g=e(50614),l=e(55742),E=e(85893),j=g.default.RangePicker,b=function(h){var _=h.onTimeSelect,n=function(t,s,f){return _({startTime:s,endTime:f,isReal:t})},M=function(t){var s=t.target.value,f={startTime:new Date().getTime(),endTime:new Date().getTime(),isReal:!1};switch(s){case"real":return n(!0,T(new Date,1).getTime());case"1h":return n(!1,T(new Date,60).getTime());case"24h":return n(!1,T(new Date,1440).getTime());case"7d":return n(!1,T(new Date,10080).getTime())}_(f)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(l.ZP.Group,{defaultValue:"real",onChange:function(t){return M(t)},children:[(0,E.jsx)(l.ZP.Button,{value:"real",children:(0,d.l)("metrics.filter.real")}),(0,E.jsx)(l.ZP.Button,{value:"1h",children:(0,d.l)("metrics.filter.1hour")}),(0,E.jsx)(l.ZP.Button,{value:"24h",children:(0,d.l)("metrics.filter.1day")}),(0,E.jsx)(l.ZP.Button,{value:"7d",children:(0,d.l)("metrics.filter.1week")})]}),(0,E.jsx)(j,{showTime:!0,onChange:function(t,s){return n(!1,new Date(s[0]).getTime(),new Date(s[1]).getTime())}})]})},P=b},89389:function(re,R,e){var T=e(15009),r=e.n(T),A=e(99289),d=e.n(A),g=e(19632),l=e.n(g),E=e(5574),j=e.n(E),b=e(96486),P=e.n(b),m=e(67294);function h(_,n){var M=(0,m.useState)(),a=j()(M,2),t=a[0],s=a[1],f=(0,m.useState)(!1),u=j()(f,2),O=u[0],U=u[1],S=(0,m.useState)(),B=j()(S,2),G=B[0],ae=B[1],I=(0,m.useRef)(),H=n.manual,K=H===void 0?!1:H,J=n.defaultParams,W=n.pollingInterval,k=W===void 0?null:W,Y=n.ready,w=Y===void 0?!0:Y,D=n.debounceInterval,Z=D===void 0?null:D,V=n.throttleInterval,x=V===void 0?null:V,Q=n.loadingDelay,$=Q===void 0?null:Q,X=n.refreshDeps,F=X===void 0?null:X,q=n.onSuccess,z=q===void 0?null:q;(0,m.useEffect)(function(){return!K&&w&&L.apply(void 0,l()(J)),function(){return te()}},[K,w].concat(l()(Array.isArray(F)?F:[])));var L=function(){var y=d()(r()().mark(function o(){var c,i,p,se=arguments;return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:for(c=se.length,i=new Array(c),p=0;p<c;p++)i[p]=se[p];if(k&&!I.current&&(I.current=setInterval(d()(r()().mark(function ie(){return r()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,L.apply(void 0,i);case 2:case"end":return ne.stop()}},ie)})),k)),!Z){C.next=7;break}return C.next=5,P().debounce(N,Z)(i);case 5:C.next=14;break;case 7:if(!x){C.next=12;break}return C.next=10,P().throttle(N,x)(i);case 10:C.next=14;break;case 12:return C.next=14,N(i);case 14:case"end":return C.stop()}},o)}));return function(){return y.apply(this,arguments)}}(),ee=function(){var y=d()(r()().mark(function o(){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,L.apply(void 0,l()(J));case 2:case"end":return i.stop()}},o)}));return function(){return y.apply(this,arguments)}}(),N=function(){var y=d()(r()().mark(function o(c){var i,p;return r()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return i=!1,v.prev=1,$?setTimeout(function(){!i&&U(!0)},$):U(!0),v.next=5,_.apply(void 0,l()(c));case 5:p=v.sent,s(p.data),z&&s(z(p.data)),v.next=13;break;case 10:v.prev=10,v.t0=v.catch(1),v.t0&&ae(JSON.stringify(v.t0));case 13:return v.prev=13,i=!0,U(!1),v.finish(13);case 17:case"end":return v.stop()}},o,null,[[1,10,13,17]])}));return function(c){return y.apply(this,arguments)}}(),te=function(){I.current&&(clearInterval(I.current),I.current=null)},_e=(0,m.useCallback)(function(){return t},[t]);return{data:t,loading:O,error:G,run:L,cancel:te,cachedData:_e,refresh:ee}}R.Z=h},49603:function(re,R,e){e.d(R,{Pr:function(){return P},Ru:function(){return n},ZP:function(){return j},cy:function(){return h},o1:function(){return E}});var T=e(15009),r=e.n(T),A=e(99289),d=e.n(A),g=e(25538),l=e(58023),E=function(t,s){return(0,g.Yu)(l.Z.REFRESH_JOB_DETAIL,{id:t,isForce:s})};function j(a){return b.apply(this,arguments)}function b(){return b=d()(r()().mark(function a(t){return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,g.Yu)(l.Z.METRICS_LAYOUT_GET_BY_NAME,{layoutName:t}));case 1:case"end":return f.stop()}},a)})),b.apply(this,arguments)}function P(a,t){return m.apply(this,arguments)}function m(){return m=d()(r()().mark(function a(t,s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.Yu)(l.Z.MONITOR_GET_FLINK_DATA,{startTime:t.startTime,endTime:t.endTime,flinkJobIds:s}));case 1:case"end":return u.stop()}},a)})),m.apply(this,arguments)}function h(a,t){return _.apply(this,arguments)}function _(){return _=d()(r()().mark(function a(t,s){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,g.UE)(l.Z.SAVE_FLINK_METRICS+t,s));case 1:case"end":return u.stop()}},a)})),_.apply(this,arguments)}function n(a,t,s){return M.apply(this,arguments)}function M(){return M=d()(r()().mark(function a(t,s,f){return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",(0,g.Yu)(l.Z.GET_JOB_METRICS_ITEMS,{address:t,jobId:s,verticeId:f}));case 1:case"end":return O.stop()}},a)})),M.apply(this,arguments)}}}]);
