(function(e){function t(t){for(var r,o,s=t[0],l=t[1],u=t[2],f=0,d=[];f<s.length;f++)o=s[f],i[o]&&d.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={1:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;a.push([5,0]),n()})({"2Ru5":function(e,t,n){"use strict";var r=n("7xX9"),i=n.n(r);i.a},5:function(e,t,n){e.exports=n("Vtdi")},"7xX9":function(e,t,n){},EDI0:function(e,t,n){},HiD8:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Widget",{attrs:{initialItems:2}})],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("div",{staticClass:"run",attrs:{title:"Execute"},on:{click:e.run}},[e.isRunning?n("font-awesome-icon",{attrs:{icon:["fas","pause"]}}):n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Computer Vision Playground "),n("span",[e._v("JS")])])}],l=n("elWB"),u=n.n(l),c=new r["a"],f={name:"Header",components:{FontAwesomeIcon:u.a},data:function(){return{isRunning:!1}},methods:{run:function(){this.isRunning=!this.isRunning,c.$emit("running",this.isRunning)}}},d=f,m=(n("2Ru5"),n("KHd+")),p=Object(m["a"])(d,o,s,!1,null,"148278c5",null),v=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"widget"},[n("div",{staticClass:"items"},[e._l(e.items,function(t){return n("Item",{key:t,attrs:{filters:e.filters,methods:e.methods}})}),n("div",{staticClass:"item insert",on:{click:function(t){e.items+=1}}},[n("font-awesome-icon",{attrs:{icon:["fal","plus-circle"]}})],1)],2)])},g=[],y=(n("xfY5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("div",{staticClass:"image",on:{click:function(t){e.$refs.upload.click()}}},[n("div",{staticClass:"overlay"},[n("font-awesome-icon",{attrs:{icon:["fal","image"]}})],1),n("canvas",{ref:"canvas"})]),n("div",{staticClass:"options"},[n("input",{ref:"upload",attrs:{type:"file",name:"file",id:"file",accept:".jpg, .jpeg, .png"},on:{change:e.updateImage}}),n("div",{staticClass:"selects"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],attrs:{name:"filter",id:"filter"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.filter=t.target.multiple?n:n[0]}}},e._l(e.filters,function(t){return n("option",{key:t},[e._v("\n          "+e._s(t)+"\n        ")])})),n("select",{directives:[{name:"model",rawName:"v-model",value:e.method,expression:"method"}],attrs:{name:"method",id:"method"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.method=t.target.multiple?n:n[0]}}},e._l(e.methods,function(t){return n("option",{key:t},[e._v("\n          "+e._s(t)+"\n          ")])}))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.threshold,expression:"threshold"}],attrs:{type:"range",name:"threshold",id:"threshold",min:"0",max:"255"},domProps:{value:e.threshold},on:{__r:function(t){e.threshold=t.target.value}}})])])}),_=[],w={name:"Item",components:{FontAwesomeIcon:u.a},props:{filters:{type:Array},methods:{type:Array}},data:function(){return{filter:"Black & White",method:"Main Thread",threshold:127}},created:function(){c.$on("running",this.execute)},mounted:function(){this.drawImage("../image.jpg")},methods:{updateImage:function(e){var t=this,n=e.target.files;if(n&&n[0]){var r=new FileReader;r.onload=function(e){t.drawImage(e.target.result)},r.readAsDataURL(n[0])}},drawImage:function(e){var t=this.$refs.canvas,n=t.getContext("2d"),r=new Image;r.src=e,r.onload=function(){var e=r.width,i=r.height;t.width=e,t.height=i,n.drawImage(r,0,0,e,i)}},execute:function(e){}}},b=w,x=(n("X7kS"),Object(m["a"])(b,y,_,!1,null,null,null)),I=x.exports,j={name:"Widget",components:{Item:I,FontAwesomeIcon:u.a},props:{initialItems:Number},data:function(){return{items:this.initialItems,filters:["Black & White","Sobel"],methods:["Main Thread","Web Worker","WebGL"]}}},k=j,O=(n("XWyE"),Object(m["a"])(k,h,g,!1,null,"7bd0c490",null)),C=O.exports,R=n("y1tp"),W=n("T+kD"),E=n.n(W),$=n("cXXa"),A=n.n($),S=n("A6sR"),P=n.n(S),X=n("nUQ9"),D=n.n(X);R["default"].library.add(E.a,A.a,P.a,D.a);var H={name:"app",components:{Header:v,Widget:C}},M=H,T=(n("ZL7j"),Object(m["a"])(M,i,a,!1,null,null,null)),F=T.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(F)}}).$mount("#app")},X7kS:function(e,t,n){"use strict";var r=n("HiD8"),i=n.n(r);i.a},XWyE:function(e,t,n){"use strict";var r=n("iO0y"),i=n.n(r);i.a},ZL7j:function(e,t,n){"use strict";var r=n("EDI0"),i=n.n(r);i.a},iO0y:function(e,t,n){}});
//# sourceMappingURL=app.09cf630e.js.map