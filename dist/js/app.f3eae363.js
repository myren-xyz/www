(function(e){function t(t){for(var c,i,o=t[0],A=t[1],u=t[2],s=0,p=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(c in A)Object.prototype.hasOwnProperty.call(A,c)&&(e[c]=A[c]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var A=n[o];0!==r[A]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},a=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],A=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=A;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,i){var o=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(o)}var a={},i=(n("ffa6"),n("6b0d")),o=n.n(i);const A=o()(a,[["render",r]]);var u=A,d=n("6c02"),s=(n("b0c0"),n("da53")),p=n.n(s),f={class:"home"},l=Object(c["g"])('<div class="hero" data-v-14f2c38e><div class="flex" data-v-14f2c38e><div id="logo-wrapper" data-v-14f2c38e><img id="logo" src="'+p.a+'" alt="" data-v-14f2c38e></div><div id="text-wrapper" data-v-14f2c38e><p data-v-14f2c38e>list of</p><h1 data-v-14f2c38e>Myren</h1><p data-v-14f2c38e>products</p></div></div></div>',1),b={class:"content"};function v(e,t,n,r,a,i){var o=Object(c["x"])("Product");return Object(c["q"])(),Object(c["e"])("div",f,[l,Object(c["f"])("div",b,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.products,(function(e){return Object(c["q"])(),Object(c["d"])(o,{data:e,key:e.name},null,8,["data"])})),128))])])}n("a4d3"),n("e01a");var y=function(e){return Object(c["t"])("data-v-dabc5592"),e=e(),Object(c["r"])(),e},O={class:"product"},g={class:"grid"},j={id:"logo-wrapper"},w=["src"],x={id:"text-wrapper"},m=Object(c["h"])("Visit"),W=y((function(){return Object(c["f"])("span",null,null,-1)})),h=[m,W];function S(e,t,n,r,a,i){return Object(c["q"])(),Object(c["e"])("div",O,[Object(c["f"])("div",g,[Object(c["f"])("div",j,[Object(c["f"])("img",{src:n.data.logo,id:"logo"},null,8,w)]),Object(c["f"])("div",x,[Object(c["f"])("h3",null,Object(c["z"])(n.data.name),1),Object(c["f"])("p",null,Object(c["z"])(n.data.description),1)]),Object(c["f"])("div",{id:"cta",onClick:t[0]||(t[0]=function(){return i.navigate&&i.navigate.apply(i,arguments)})},h)])])}n("9911");var z={name:"Product",props:["data"],data:function(){return{url:""}},methods:{navigate:function(e){var t=this,n=e.currentTarget,c=this.$el.querySelector("span"),r=Math.max(n.clientWidth,n.clientHeight),a=r/2;c.style.width=c.style.height="".concat(r,"px"),c.style.left="".concat(e.clientX-(n.offsetLeft+a),"px"),c.style.top="".concat(e.clientY-(n.offsetTop+a),"px"),c.classList.add("ripple"),setTimeout((function(){c.style="",c.classList.remove("ripple"),t.data.up&&window.open(t.data.link,"_blank")}),601)}}};n("96cc");const V=o()(z,[["render",S],["__scopeId","data-v-dabc5592"]]);var T=V,k=n("5502"),L={name:"Home",components:{Product:T},computed:Object(k["b"])({products:function(e){return e.products}})};n("8fd0");const N=o()(L,[["render",v],["__scopeId","data-v-14f2c38e"]]);var X=N,E=[{path:"/",name:"Home",component:X,meta:{title:"Myren Products"}}],P=Object(d["a"])({history:Object(d["b"])("/"),routes:E}),M=P,C=Object(k["a"])({state:{products:[{name:"Audiofy",link:"https://audiofy.myren.xyz",up:!0,logo:"static/audiofy-logo-dark.png",description:"a music service that respects users' privacy and time"},{name:"Vidible",link:"https://vidible.myren.xyz",up:!1,logo:"static/vidible-logo-dark.png",description:"a video service that respects its creatros & users' privacy and time"}]},mutations:{},actions:{},modules:{}});Object(c["c"])(u).use(C).use(M).mount("#app")},"8fd0":function(e,t,n){"use strict";n("b917")},"96cc":function(e,t,n){"use strict";n("d086")},"97ae":function(e,t,n){},b917:function(e,t,n){},d086:function(e,t,n){},da53:function(e,t){e.exports="data:image/png;base64,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"},ffa6:function(e,t,n){"use strict";n("97ae")}});
//# sourceMappingURL=app.f3eae363.js.map