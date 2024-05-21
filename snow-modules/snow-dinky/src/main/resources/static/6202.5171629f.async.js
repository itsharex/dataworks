"use strict";(self.webpackChunkdinky_web=self.webpackChunkdinky_web||[]).push([[6202],{46482:function(R,n,e){var s;s={value:!0},n.o=void 0;var a=e(79298);Object.defineProperty(n,"o",{enumerable:!0,get:function(){return a.SplitPane}})},18127:function(R,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.Pane=void 0;const s=e(67294),a={position:"relative",outline:"none",border:0,overflow:"hidden",display:"flex",flexBasis:"auto"};n.Pane=s.memo(({size:v,minSize:d,split:r,className:i,forwardRef:u,children:h})=>{const f=Object.assign(Object.assign({},a),{flexGrow:v,flexShrink:v});r==="vertical"?(f.width=0,f.height="100%",f.minWidth=d):(f.width="100%",f.height=0,f.minHeight=d);const t=["Pane",r,i].join(" ");return s.createElement("div",{className:t,style:f,ref:u},h)}),n.Pane.displayName="Pane"},42317:function(R,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.Resizer=void 0;const s=e(67294),{useCallback:a}=s;n.Resizer=s.memo(({split:v,className:d,index:r,onDragStarted:i})=>{const u=a(t=>{t.preventDefault(),i(r,t)},[r,i]),h=a(t=>{t.preventDefault(),i(r,t.touches[0])},[r,i]),f=["Resizer",v,d].join(" ");return s.createElement("span",{role:"presentation",className:f,style:{flex:"none"},onMouseDown:u,onTouchStart:h})}),n.Resizer.displayName="Resizer"},79298:function(R,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.SplitPane=void 0;const s=e(67294),{useCallback:a,useRef:v,useState:d,useMemo:r,useEffect:i}=s,u=e(18127),h=e(42317),f=e(70781),t=50;function c(m,o){return typeof m=="object"&&m&&m.key!=null?"key."+m.key:"index."+o}function y(m,o){if(typeof o=="number"){if(o>0)return o}else if(o instanceof Array){const l=o[m];if(l>0)return l}return t}function D(m,o){if(o){const l=o[m];if(l>=0)return l}return 1}function P(m,o,l,M){if(!l||o<0||o+1>=m.length)return 0;const C=y(o,M),z=y(o+1,M),g=m[o]+l,O=m[o+1]-l;if(l<0&&g<C){const b=g-C,Z=P(m,o-1,b,M);l-=b-Z}else if(l>0&&O<z){const b=z-O,Z=P(m,o+1,b,M);l-=b-Z}return m[o]+=l,m[o+1]-=l,l}const k={split:"vertical",className:""};function N(m){const{children:o,split:l,defaultSizes:M,minSize:C,onDragStarted:z,onChange:g,onDragFinished:O}=m,[b,Z]=d(new Map),H=v(new Map),j=a(S=>{const w=o.map((T,p)=>b.get(c(T,p))||D(p,M));if(S){const{offset:T,extraState:{index:p}}=S;P(w,p,T,C)}return w},[o,M,C,b]),F=a(S=>{const w=j(S);Z(new Map(o.map((T,p)=>[c(T,p),w[p]]))),O&&O(w)},[o,j,O]),[E,V]=(0,f.useDragState)(l,F),A=r(()=>j(E),[E,j]),W=E?E.extraState:null;i(()=>{g&&E&&g(A)},[E,A,g]);const I=r(()=>{const S=H.current;return H.current=new Map,o.map((w,T)=>{const p=c(w,T),B=S.get(p)||s.createRef();H.current.set(p,B);const U=y(T,C);return{key:p,node:w,ref:B,minSize:U}})},[o,C]),X=r(()=>I.map((S,w)=>{const T=A[w];return Object.assign(Object.assign({},S),{size:T})}),[I,A]),L=a((S,w)=>{const T=l==="vertical"?"width":"height",p=new Map(I.map(({key:B,ref:U})=>{const Y=U.current?U.current.getBoundingClientRect()[T]:0;return[B,Y]}));z&&z(),V(w,{index:S}),Z(p)},[V,I,z,l]);return{childPanes:X,resizeState:W,handleDragStart:L}}n.SplitPane=s.memo(m=>{const o=Object.assign(Object.assign({},k),m),{split:l,className:M,resizerClassName:C}=o,{childPanes:z,resizeState:g,handleDragStart:O}=N(o),Z=Object.assign({display:"flex",flex:1,height:"100%",position:"absolute",outline:"none",overflow:"hidden"},l==="vertical"?{left:0,right:0,flexDirection:"row"}:{bottom:0,top:0,flexDirection:"column",minHeight:"100%",width:"100%"}),H=["SplitPane",l,M].join(" "),j={position:"absolute",top:0,right:0,bottom:0,left:0},F=["DragLayer",l,g?"resizing":"",M].join(" "),E=[];return z.forEach(({key:V,node:A,ref:W,size:I,minSize:X},L)=>{if(L!==0){const S=g&&g.index===L-1;E.push(s.createElement(h.Resizer,{key:"resizer."+L,split:l,className:M+(S?" resizing":"")+(C?` ${C}`:""),index:L-1,onDragStarted:O}))}E.push(s.createElement(u.Pane,{key:"pane."+V,forwardRef:W,size:I,minSize:X,split:l,className:M},A))}),s.createElement("div",{className:H,style:Z},s.createElement("div",{className:F,style:j}),E)}),n.SplitPane.displayName="SplitPane"},70781:function(R,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.useDragState=n.useEventListener=void 0;const s=e(67294),a=e(73935),{useCallback:v,useMemo:d,useState:r,useEffect:i}=s;function u(t,c){i(()=>{if(c)return document.addEventListener(t,c),()=>{document.removeEventListener(t,c)}},[t,c])}n.useEventListener=u;function h(t,c){const[y,D]=r(null),[P,k]=r(0),N=v((C,z)=>{const g=t==="vertical"?C.clientX:C.clientY;D([z,g]),k(g)},[t]),[m,o]=d(()=>{if(!y)return[null,void 0];const[C,z]=y,g={offset:P-z,extraState:C};return[g,()=>{a.unstable_batchedUpdates(()=>{D(null),c(g)})}]},[P,y,c]),[l,M]=d(()=>{if(!y)return[void 0,void 0];const C=g=>{const O=t==="vertical"?g.clientX:g.clientY;k(O)};return[C,g=>{C(g.touches[0])}]},[y,t]);return{beginDrag:N,dragState:m,onMouseMove:l,onTouchMove:M,onMouseUp:o}}function f(t,c){const{beginDrag:y,dragState:D,onMouseMove:P,onTouchMove:k,onMouseUp:N}=h(t,c);return u("mousemove",P),u("touchmove",k),u("mouseup",N),[D,y]}n.useDragState=f},52747:function(R,n,e){e.d(n,{Z:function(){return h}});var s=e(87462),a=e(67294),v={icon:function(t,c){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M340 585c0-5.5 4.5-10 10-10h44c5.5 0 10 4.5 10 10v171h355V563c0-136.4-110.6-247-247-247S265 426.6 265 563v193h75V585z",fill:c}},{tag:"path",attrs:{d:"M216.9 310.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 00-11.3 0l-39.6 39.6a8.03 8.03 0 000 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 00-11.3 0l-67.9 67.9a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8zm348 712H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zm-639-96c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563z",fill:t}}]}},name:"alert",theme:"twotone"},d=v,r=e(13401),i=function(t,c){return a.createElement(r.Z,(0,s.Z)({},t,{ref:c,icon:d}))},u=a.forwardRef(i),h=u},88916:function(R,n,e){e.d(n,{Z:function(){return h}});var s=e(87462),a=e(67294),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"}}]},name:"camera",theme:"outlined"},d=v,r=e(13401),i=function(t,c){return a.createElement(r.Z,(0,s.Z)({},t,{ref:c,icon:d}))},u=a.forwardRef(i),h=u},8751:function(R,n,e){e.d(n,{Z:function(){return h}});var s=e(87462),a=e(67294),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},d=v,r=e(13401),i=function(t,c){return a.createElement(r.Z,(0,s.Z)({},t,{ref:c,icon:d}))},u=a.forwardRef(i),h=u},5108:function(R,n,e){e.d(n,{Z:function(){return h}});var s=e(87462),a=e(67294),v={icon:function(t,c){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:t}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm176.5 509.7l-28.6 39a7.99 7.99 0 01-11.2 1.7L483.3 569.8a7.92 7.92 0 01-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z",fill:c}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.6-3.6 1.8-8.6-1.8-11.1z",fill:t}}]}},name:"clock-circle",theme:"twotone"},d=v,r=e(13401),i=function(t,c){return a.createElement(r.Z,(0,s.Z)({},t,{ref:c,icon:d}))},u=a.forwardRef(i),h=u},51444:function(R,n,e){e.d(n,{Z:function(){return h}});var s=e(87462),a=e(67294),v={icon:function(t,c){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M81.8 537.8a60.3 60.3 0 010-51.5C176.6 286.5 319.8 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c-192.1 0-335.4-100.5-430.2-300.2z",fill:c}},{tag:"path",attrs:{d:"M512 258c-161.3 0-279.4 81.8-362.7 254C232.6 684.2 350.7 766 512 766c161.4 0 279.5-81.8 362.7-254C791.4 339.8 673.3 258 512 258zm-4 430c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z",fill:c}},{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z",fill:t}},{tag:"path",attrs:{d:"M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",fill:t}}]}},name:"eye",theme:"twotone"},d=v,r=e(13401),i=function(t,c){return a.createElement(r.Z,(0,s.Z)({},t,{ref:c,icon:d}))},u=a.forwardRef(i),h=u},3089:function(R,n,e){e.d(n,{Z:function(){return h}});var s=e(87462),a=e(67294),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},d=v,r=e(13401),i=function(t,c){return a.createElement(r.Z,(0,s.Z)({},t,{ref:c,icon:d}))},u=a.forwardRef(i),h=u},87740:function(R,n,e){e.d(n,{Z:function(){return h}});var s=e(87462),a=e(67294),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"},d=v,r=e(13401),i=function(t,c){return a.createElement(r.Z,(0,s.Z)({},t,{ref:c,icon:d}))},u=a.forwardRef(i),h=u}}]);
