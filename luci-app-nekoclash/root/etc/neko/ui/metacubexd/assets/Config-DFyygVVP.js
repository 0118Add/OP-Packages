import{A as j,D as ne,b3 as re,b as X,y as se,u as B,i as e,f as t,ai as E,S as L,t as f,z as w,b4 as ie,c as W,d as Z,B as D,F as A,b5 as ce,r as J,b6 as $,a6 as oe,g as v,ag as N,b7 as de,b8 as ue,b9 as ge,ba as be,bb as he,bc as pe,bd as ve,be as fe,bf as me,bg as xe,bh as _e,bi as $e,bj as O,bk as ke,bl as Ce,b2 as ye,k as Se,bm as we,bn as Ee,bo as z,bp as Ie,bq as H,br as De,bs as Ae,bt as Le,bu as Te,bv as Pe,v as K,h as Ne,bw as Fe}from"./index-Bkvu7Phh.js";const[Y,Be]=j(""),U=ne(()=>Y().includes("sing-box")),Ue=()=>{re().then(Be)};var je=f('<div class="flex flex-col p-4">'),Re=f('<div class="flex flex-col"><form class="flex gap-2 sm:flex-row"><input type=search name=name class="input input-bordered min-w-0 flex-1"placeholder=google.com><div class="flex items-center gap-2"><select name=type class="select select-bordered"><option>A</option><option>AAAA</option><option>MX'),Ve=f("<div class=py-2>"),Qe=f('<form class="grid grid-cols-3 gap-2 sm:grid-cols-5">'),Me=f('<div class="grid grid-cols-2 gap-2 sm:grid-cols-4"><div class=form-control><label for=enable-allow-lan class="label gap-2"><span class=label-text></span></label><input id=enable-allow-lan type=checkbox class=toggle></div><div class=form-control><label for=enable-tun-device class="label gap-2"><span class=label-text></span></label><input id=enable-tun-device type=checkbox class=toggle></div><div class=form-control><label for=tun-ip-stack class="label gap-2"><span class=label-text></span></label><select id=tun-ip-stack class="select select-bordered flex-1"><option>Mixed</option><option>gVisor</option><option>System</option><option>LWIP</option></select></div><div class=form-control><label for=device-name class="label gap-2"><span class=label-text></span></label><input id=device-name class="input input-bordered min-w-0"></div><div class=form-control><label for=interface-name class="label gap-2"><span class=label-text></span></label><input id=interface-name class="input input-bordered min-w-0">'),qe=f('<div class="flex flex-col gap-4"><select class="select select-bordered"></select><div class="grid grid-cols-2 gap-2 sm:grid-cols-3">'),F=f("<option>"),Ge=f('<div class=form-control><label class=label><span class=label-text></span></label><input type=number class="input input-bordered">'),Oe=f('<div class="flex flex-col gap-2"><div class="flex flex-col"><select class="select select-bordered"></select></div><div class="flex flex-col"><select class="select select-bordered">'),ze=f('<div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type=checkbox class=toggle></div><div class="flex flex-col"><select class="select select-bordered"></select></div><div class="flex flex-col"><div class="py-2 text-center text-lg font-semibold">&nbsp;</div></div></div><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type=checkbox class=toggle>'),He=f('<span class="absolute -right-1 -top-1 flex h-3 w-3"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75"></span><span class="inline-flex h-3 w-3 rounded-full bg-info">'),Xe=f('<div class="grid grid-cols-2 gap-4"><kbd class=kbd></kbd><div class=relative><kbd class="kbd w-full">'),We=f('<div class="mx-auto flex max-w-screen-md flex-col gap-4">');const Ze=w.object({name:w.string(),type:w.string()}),Je=()=>{const[l]=B(),m=ie(),{form:c,isSubmitting:x}=W({extend:K({schema:Ze}),onSubmit:n=>m.get("dns/query",{searchParams:{name:n.name,type:n.type}}).json().then(({Answer:g})=>d((g==null?void 0:g.map(({data:a})=>a))||[])).catch(g=>Ne.error(g.message))}),[k,d]=j([]);return(()=>{var n=Re(),g=n.firstChild,a=g.firstChild,C=a.nextSibling;return C.firstChild,Z(c,g,()=>c),e(C,t(D,{type:"submit",class:"btn-primary",get loading(){return x()},get children(){return l("dnsQuery")}}),null),e(n,t(L,{get when(){return k().length>0},get children(){var _=je();return e(_,t(A,{get each(){return k()},children:s=>(()=>{var i=Ve();return e(i,s),i})()})),_}}),null),n})()},Ke=w.object({port:w.number(),"socks-port":w.number(),"redir-port":w.number(),"tproxy-port":w.number(),"mixed-port":w.number()}),Ye=()=>{const[l]=B(),m=[{label:()=>l("port",{name:"Mixed"}),key:"mixed-port",onChange:a=>void $("mixed-port",Number(a.target.value),n)},{label:()=>l("port",{name:"HTTP"}),key:"port",onChange:a=>void $("port",Number(a.target.value),n)},{label:()=>l("port",{name:"Socks"}),key:"socks-port",onChange:a=>void $("socks-port",Number(a.target.value),n)},{label:()=>l("port",{name:"Redir"}),key:"redir-port",onChange:a=>void $("redir-port",Number(a.target.value),n)},{label:()=>l("port",{name:"TProxy"}),key:"tproxy-port",onChange:a=>void $("tproxy-port",Number(a.target.value),n)}],{form:c,setInitialValues:x,reset:k}=W({extend:K({schema:Ke})}),[d,{refetch:n}]=ce(Fe);J(()=>{const a=d();a&&(x(a),k())});const g=()=>{var a;return((a=d())==null?void 0:a.modes)||["rule","direct","global"]};return(()=>{var a=qe(),C=a.firstChild,_=C.nextSibling;return C.addEventListener("change",s=>void $("mode",s.target.value,n)),e(C,t(A,{get each(){return g()},children:s=>(()=>{var i=F();return i.value=s,e(i,()=>l(s)??s),i})()})),e(a,t(L,{get when(){return!U()},get children(){return[(()=>{var s=Qe();return Z(c,s,()=>c),e(s,t(A,{each:m,children:i=>(()=>{var o=Ge(),b=o.firstChild,S=b.firstChild,y=b.nextSibling;return e(S,()=>i.label()),oe(y,"change",i.onChange),v(u=>{var h=i.key,p=i.key,T=i.key,P=i.label();return h!==u.e&&N(b,"for",u.e=h),p!==u.t&&N(y,"id",u.t=p),T!==u.a&&N(y,"name",u.a=T),P!==u.o&&N(y,"placeholder",u.o=P),u},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()})),s})(),(()=>{var s=Me(),i=s.firstChild,o=i.firstChild,b=o.firstChild,S=o.nextSibling,y=i.nextSibling,u=y.firstChild,h=u.firstChild,p=u.nextSibling,T=y.nextSibling,P=T.firstChild,ee=P.firstChild,R=P.nextSibling,V=T.nextSibling,Q=V.firstChild,le=Q.firstChild,M=Q.nextSibling,te=V.nextSibling,q=te.firstChild,ae=q.firstChild,G=q.nextSibling;return e(b,()=>l("allowLan")),S.addEventListener("change",r=>void $("allow-lan",r.target.checked,n)),e(h,()=>l("enableTunDevice")),p.addEventListener("change",r=>void $("tun",{enable:r.target.checked},n)),e(ee,()=>l("tunModeStack")),R.addEventListener("change",r=>void $("tun",{stack:r.target.value},n)),e(le,()=>l("tunDeviceName")),M.addEventListener("change",r=>void $("tun",{device:r.target.value},n)),e(ae,()=>l("interfaceName")),G.addEventListener("change",r=>void $("interface-name",r.target.value,n)),v(()=>{var r;return S.checked=(r=d())==null?void 0:r["allow-lan"]}),v(()=>{var r,I;return p.checked=(I=(r=d())==null?void 0:r.tun)==null?void 0:I.enable}),v(()=>{var r,I;return R.value=(I=(r=d())==null?void 0:r.tun)==null?void 0:I.stack}),v(()=>{var r,I;return M.value=(I=(r=d())==null?void 0:r.tun)==null?void 0:I.device}),v(()=>{var r;return G.value=(r=d())==null?void 0:r["interface-name"]}),s})()]}}),_),e(_,t(D,{class:"btn-primary",get loading(){return de()},onClick:ue,get children(){return l("reloadConfig")}}),null),e(_,t(D,{class:"btn-accent",get loading(){return ge()},onClick:be,get children(){return l("flushFakeIP")}}),null),e(_,t(D,{class:"btn-warning",get loading(){return he()},onClick:pe,get children(){return l("restartCore")}}),null),e(_,t(L,{get when(){return!U()},get children(){return[t(D,{class:"btn-secondary",get loading(){return ve()},onClick:fe,get children(){return l("updateGEODatabases")}}),t(D,{class:"btn-info",get loading(){return me()},onClick:xe,get children(){return l("upgradeUI")}}),t(D,{class:"btn-error",get loading(){return _e()},onClick:$e,get children(){return l("upgradeCore")}})]}}),null),v(()=>{var s;return C.value=(s=d())==null?void 0:s.mode}),a})()},el=()=>{const[l]=B(),m=X(),c=[{label:()=>l("en"),value:O.EN},{label:()=>l("zh"),value:O.ZH}];return(()=>{var x=ze(),k=x.firstChild,d=k.firstChild,n=d.firstChild,g=d.nextSibling,a=g.firstChild,C=g.nextSibling;C.firstChild;var _=k.nextSibling,s=_.firstChild,i=s.firstChild;return e(d,t(E,{get children(){return l("useTwemoji")}}),n),n.addEventListener("change",o=>ke(o.target.checked)),e(g,t(E,{get children(){return l("switchLanguage")}}),a),a.addEventListener("change",o=>Ce(o.target.value)),e(a,t(A,{each:c,children:o=>(()=>{var b=F();return e(b,()=>o.label()),v(()=>b.selected=ye()===o.value),v(()=>b.value=o.value),b})()})),e(C,t(D,{class:"btn-info",onClick:()=>{Se(""),m(we.Setup)},get children(){return l("switchEndpoint")}}),null),e(s,t(E,{get children(){return l("autoSwitchTheme")}}),i),i.addEventListener("change",o=>Ee(o.target.checked)),e(_,t(L,{get when(){return z()},get children(){var o=Oe(),b=o.firstChild,S=b.firstChild,y=b.nextSibling,u=y.firstChild;return e(b,t(E,{get children(){return l("favDayTheme")}}),S),S.addEventListener("change",h=>Ie(h.target.value)),e(S,t(A,{each:H,children:h=>(()=>{var p=F();return p.value=h,e(p,h),p})()})),e(y,t(E,{get children(){return l("favNightTheme")}}),u),u.addEventListener("change",h=>De(h.target.value)),e(u,t(A,{each:H,children:h=>(()=>{var p=F();return p.value=h,e(p,h),p})()})),v(()=>S.value=Ae()),v(()=>u.value=Le()),o}}),null),v(()=>n.checked=Te()),v(()=>i.checked=z()),x})()},ll=({backendVersion:l})=>{const[m,c]=j(!1);return J(async()=>{const x=l();x&&c(await Pe(x))}),(()=>{var x=Xe(),k=x.firstChild,d=k.nextSibling,n=d.firstChild;return e(k,()=>"1.148.1"),e(d,t(L,{get when(){return m()},get children(){return He()}}),n),e(n,l),x})()},al=()=>{const l=X();if(!se())return l("/setup",{replace:!0}),null;const[m]=B();return Ue(),(()=>{var c=We();return e(c,t(L,{get when(){return!U()},get children(){return[t(E,{withDivider:!0,get children(){return m("dnsQuery")}}),t(Je,{})]}}),null),e(c,t(E,{withDivider:!0,get children(){return m("coreConfig")}}),null),e(c,t(Ye,{}),null),e(c,t(E,{withDivider:!0,get children(){return m("xdConfig")}}),null),e(c,t(el,{}),null),e(c,t(E,{withDivider:!0,get children(){return m("version")}}),null),e(c,t(ll,{backendVersion:Y}),null),c})()};export{al as default};
