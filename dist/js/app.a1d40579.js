(function(t){function e(e){for(var n,a,c=e[0],s=e[1],u=e[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},i=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8ebdcaa3"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(t);var u=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}o[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},5669:function(t,e,r){"use strict";var n=r("66a7"),o=r.n(n);o.a},"5b2e":function(t,e,r){},"64a7":function(t,e,r){},"66a7":function(t,e,r){},7780:function(t,e,r){},"85ec":function(t,e,r){},a07d:function(t,e,r){"use strict";var n=r("64a7"),o=r.n(n);o.a},a478:function(t,e,r){},a59f:function(t,e,r){"use strict";var n=r("bfa9"),o=r.n(n);o.a},b9dd:function(t,e,r){"use strict";var n=r("5b2e"),o=r.n(n);o.a},bfa9:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("DI ROMA")]),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/product"}},[t._v(" Stock | ")]),r("router-link",{attrs:{to:"/invoice"}},[t._v(" Facturación | ")])],1),r("router-view")],1)},i=[],a=(r("034f"),r("2877")),c={},s=Object(a["a"])(c,o,i,!1,null,null,null),u=s.exports,d=r("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var l=r("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},v=[],h=r("d4ec"),f=r("262e"),m=r("2caf"),g=r("9ab4"),b=r("60a3"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0)])},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Centro de facturacion y control de cobros,"),r("br"),t._v(" Di Roma "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])}],x=function(t){Object(f["a"])(r,t);var e=Object(m["a"])(r);function r(){return Object(h["a"])(this,r),e.apply(this,arguments)}return r}(b["c"]);Object(g["a"])([Object(b["b"])()],x.prototype,"msg",void 0),x=Object(g["a"])([b["a"]],x);var k=x,P=k,w=(r("a59f"),Object(a["a"])(P,_,y,!1,null,"bccf8738",null)),C=w.exports,O=function(t){Object(f["a"])(r,t);var e=Object(m["a"])(r);function r(){return Object(h["a"])(this,r),e.apply(this,arguments)}return r}(b["c"]);O=Object(g["a"])([Object(b["a"])({components:{HelloWorld:C}})],O);var I=O,S=I,E=Object(a["a"])(S,p,v,!1,null,null,null),A=E.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[0===t.products.length?r("div",[r("h3",[t._v("Aún no se registran productos")])]):t._e(),r("div",{staticClass:"console"},[r("div",{staticClass:"console-inner"},[r("button",{staticStyle:{background:"#808080",padding:"4px","margin-right":"60%"},on:{click:function(e){return t.backPage()}}},[t._v(" atras ")]),r("button",{staticStyle:{background:"#808080",padding:"4px"},on:{click:function(e){return t.nextPage()}}},[t._v(" adelante ")]),r("table",[t._m(0),r("tbody",t._l(t.activeProducts,(function(e){return r("tr",{key:e._id},[r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e.pname))]),r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e.stock))]),r("td",{attrs:{rowspan:"1"}},[t._v("$"+t._s(e.cost))]),r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e.price))]),r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e.code))]),r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e.category))]),r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e.description))]),r("td",{attrs:{rowspan:"1"}},[t._v("$"+t._s(e.oldValue)+" / "+t._s(t.timeDate(e.timestamp)))]),r("td",{staticStyle:{width:"60px"},attrs:{rowspan:"1"}},[r("tr",{staticStyle:{width:"100%",display:"block",background:"yellow","border-radius":"10px",color:"black","font-size":"14px"}},[r("router-link",{attrs:{to:{name:"EditProduct",params:{id:e._id}}}},[t._v(" Editar ")])],1),r("tr",{staticStyle:{width:"100%",display:"block"}},[r("button",{staticStyle:{background:"#EB6C49",width:"100%"},on:{click:function(r){return t.deleteProduct(e._id)}}},[t._v(" Borrar ")])])])])})),0)]),r("div",{staticStyle:{"margin-top":"20px"}},[r("button",{staticStyle:{background:"#0f55e4","margin-right":"20%",padding:"10px"},on:{click:function(e){return t.redirect("Home")}}},[t._v(" Volver ")]),r("button",{staticStyle:{background:"#219E45",padding:"10px"},on:{click:function(e){return t.redirect("CreateProduct")}}},[t._v(" Nuevo Producto ")])])])])])},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("PRODUCTO")]),r("th",{attrs:{scope:"col"}},[t._v("STOCK")]),r("th",{attrs:{scope:"col"}},[t._v("COSTO")]),r("th",{attrs:{scope:"col"}},[t._v("PRECIO")]),r("th",{attrs:{scope:"col"}},[t._v("CÓDIGO")]),r("th",{attrs:{scope:"col"}},[t._v("CATEGORÍA")]),r("th",{attrs:{scope:"col"}},[t._v("DESCRIPCIÓN")]),r("th",{attrs:{scope:"col"}},[t._v("DIFF./MES")])])])}],R=(r("99af"),r("fb6a"),r("96cf"),r("1da1")),T={baseURL:"https://diroma.com.ar/api"},N=r("bc3a"),j=r.n(N),q={data:function(){return{products:[],activeProducts:[],currentIndex:8}},created:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchProducts();case 2:t.loadOnActiveProducts();case 3:case"end":return e.stop()}}),e)})))()},methods:{nextPage:function(){this.currentIndex>=this.products.length?alert("no hay mas productos para mostrar"):(this.currentIndex=this.currentIndex+8,this.loadOnActiveProducts())},backPage:function(){this.currentIndex<=8?alert("No puede seguir retrocediendo"):(this.currentIndex=this.currentIndex-8,this.loadOnActiveProducts())},loadOnActiveProducts:function(){this.activeProducts=this.products.slice(this.currentIndex-8,this.currentIndex),console.log(this.activeProducts)},timeDate:function(t){return t.substring(5,10)},redirect:function(t){this.$router.push({name:t})},fetchProducts:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",j.a.get("".concat(T.baseURL,"/product/products")).then((function(e){return t.products=e.data})));case 1:case"end":return e.stop()}}),e)})))()},deleteProduct:function(t){var e=confirm("Esta seguro que desea eliminar el producto del inventario?");1==e&&j.a.delete("".concat(T.baseURL,"/product/delete?productID=").concat(t)).then((function(t){console.log(t),window.location.reload()}))}}},F=q,M=(r("f1a6"),Object(a["a"])(F,D,$,!1,null,null,null)),U=M.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[0===t.invoices.length?r("div",[r("h3",[t._v("Aún no se registran Facturas")])]):t._e(),r("div",{staticClass:"console"},[r("div",{staticClass:"console-inner"},[r("button",{staticStyle:{background:"#808080",padding:"4px","margin-right":"60%"},on:{click:function(e){return t.backPage()}}},[t._v(" atras ")]),r("button",{staticStyle:{background:"#808080",padding:"4px"},on:{click:function(e){return t.nextPage()}}},[t._v(" adelante ")]),r("table",[t._m(0),r("tbody",t._l(t.activeInvoices,(function(e){return r("tr",{key:e._id},[r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e._id))]),r("td",{attrs:{rowspan:"1"}},[t._v(t._s(t.timeDate(e.timestamp)))]),r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e.paymentMethod))]),r("td",{attrs:{rowspan:"1"}},[t._v(t._s(e.toDeliver))]),r("td",{attrs:{rowspan:"1"}},[t._v("$"+t._s(e.total))]),r("td",{staticStyle:{width:"60px"},attrs:{rowspan:"1"}},[r("tr",{staticStyle:{width:"100%",display:"block",background:"yellow","border-radius":"10px",color:"black","font-size":"14px"}},[r("router-link",{attrs:{to:{name:"EditInvoice",params:{id:e._id}}}},[t._v(" Editar ")])],1),r("tr",{staticStyle:{width:"100%",display:"block"}},[r("button",{staticStyle:{background:"#EB6C49",width:"100%"},on:{click:function(r){return t.deleteInvoice(e._id)}}},[t._v(" Borrar ")])])])])})),0)]),r("div",{staticStyle:{"margin-top":"20px"}},[r("button",{staticStyle:{background:"#0f55e4","margin-right":"20%",padding:"10px"},on:{click:function(e){return t.redirect("Home")}}},[t._v(" Volver ")]),r("button",{staticStyle:{background:"#219E45",padding:"10px"},on:{click:function(e){return t.redirect("CreateInvoice")}}},[t._v(" Nueva Factura ")]),r("button",{staticStyle:{background:"#782D4D",padding:"10px","margin-left":"20%"},on:{click:function(e){return t.pettyCashBtn()}}},[t._v(" Mostrar Caja ")]),1==this.showPettyCash?r("div",[t._v(" Caja Chica: $"+t._s(t.pettyCash)+" ")]):t._e()])])])])},L=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("NUMERO")]),r("th",{attrs:{scope:"col"}},[t._v("FECHA")]),r("th",{attrs:{scope:"col"}},[t._v("MÉTODO DE PAGO")]),r("th",{attrs:{scope:"col"}},[t._v("ENTREGA PENDIENTE")]),r("th",{attrs:{scope:"col"}},[t._v("TOTAL")])])])}],B=(r("a9e3"),{data:function(){return{invoices:[],pettyCash:Number,showPettyCash:!1,activeInvoices:[],currentIndex:8}},created:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchInvoices();case 2:return t.loadOnActiveInvoices(),e.next=5,t.transToDeliver();case 5:return e.next=7,t.calcPettyCash();case 7:case"end":return e.stop()}}),e)})))()},methods:{nextPage:function(){this.currentIndex>=this.invoice.length?alert("no hay mas productos para mostrar"):(this.currentIndex=this.currentIndex+8,this.loadOnActiveProducts())},backPage:function(){this.currentIndex<=8?alert("No puede seguir retrocediendo"):(this.currentIndex=this.currentIndex-8,this.loadOnActiveInvoices())},loadOnActiveInvoices:function(){this.activeInvoices=this.invoices.slice(this.currentIndex-8,this.currentIndex),console.log(this.activeInvoices)},pettyCashBtn:function(){0==this.showPettyCash?this.showPettyCash=!0:this.showPettyCash=!1},timeDate:function(t){return t.substring(5,10)},calcPettyCash:function(){var t=null;for(var e in this.invoices){var r=new Date;this.timeDate(this.invoices[e].timestamp)==this.timeDate(r.toISOString())&&(t+=this.invoices[e].total)}this.pettyCash=t},transToDeliver:function(){for(var t in this.invoices)1==this.invoices[t].toDeliver?(console.log(this.invoices[t].toDeliver),this.invoices[t].toDeliver):(this.invoices[t].toDeliver,console.log(this.invoices[t].toDeliver))},redirect:function(t){this.$router.push({name:"".concat(t)})},fetchInvoices:function(){var t=this;return j.a.get("".concat(T.baseURL,"/invoice/invoices")).then((function(e){return t.invoices=e.data}))},deleteInvoice:function(t){j.a.delete("".concat(T.baseURL,"/invoice/delete?invoiceID=").concat(t)).then((function(t){console.log(t),window.location.reload()}))}}}),G=B,H=Object(a["a"])(G,V,L,!1,null,null,null),J=H.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"form-box"},[r("h2",[t._v("NUEVO PRODUCTO")]),r("form",{attrs:{id:"create-post-form"},on:{submit:function(e){return e.preventDefault(),t.createProduct(e)}}},[r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.pname,expression:"pname"}],attrs:{id:"pname",required:"true",type:"text",placeholder:"Nombre del artículo(*)"},domProps:{value:t.pname},on:{input:function(e){e.target.composing||(t.pname=e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("select",{ref:"category",attrs:{required:"true"},on:{change:function(e){return t.onChange()}}},[r("option",{attrs:{selected:"true"}},[t._v(" Seleccione ")]),r("option",{attrs:{value:"Almacén"}},[t._v(" Almacén ")]),r("option",{attrs:{value:"Fiambrería"}},[t._v(" Fiambrería ")])])]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.stock,expression:"stock"}],ref:"stock",attrs:{required:"true",type:"number",step:"1",min:"0",placeholder:"Cantidad(*)"},domProps:{value:t.stock},on:{input:function(e){e.target.composing||(t.stock=e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.cost,expression:"cost"}],ref:"cost",attrs:{id:"cost",required:"true",type:"number",step:"0.01",min:"0",placeholder:"Costo(*)"},domProps:{value:t.cost},on:{input:function(e){e.target.composing||(t.cost=e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],ref:"price",attrs:{id:"price",required:"true",type:"number",step:"0.01",min:"0",placeholder:"Precio(*)"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{id:"code",required:"true",type:"text",placeholder:"Código de Referencia(*)"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{id:"description",type:"text",placeholder:"Descripción"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),r("div",{staticStyle:{"margin-top":"20px"}},[r("button",{staticStyle:{background:"#0f55e4","margin-right":"20%",padding:"10px"},on:{click:function(e){return t.redirect("Product")}}},[t._v(" Volver ")]),r("button",{staticStyle:{background:"#219E45",padding:"10px"}},[t._v(" Aprobar ")])])])])])},z=[],W=(r("a4d3"),r("e01a"),{data:function(){return{pname:"",stock:Number,cost:Number,price:Number,code:"",category:"",description:"",oldValue:""}},methods:{onChange:function(){"Fiambrería"==this.$refs.category.value?this.$refs.stock.step=.001:this.$refs.stock.step=1},redirect:function(t){this.$router.push({name:"".concat(t)})},createProduct:function(){if(0==this.$refs.category.selectedIndex)alert("No ingresó categoría");else{var t={pname:this.pname,stock:this.stock,cost:this.cost,precio:this.price,code:this.code,category:this.$refs.category.value,description:this.description,oldValue:this.cost};this.__submitToServer(t)}},__submitToServer:function(t){var e=this;j.a.post("".concat(T.baseURL,"/product/create"),t).then((function(t){e.redirect("Product")}))}}}),K=W,Y=(r("b9dd"),Object(a["a"])(K,Q,z,!1,null,null,null)),X=Y.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"form-box"},[r("h2",[t._v("EDITAR PRODUCTO")]),r("form",{attrs:{id:"create-post-form"},on:{submit:function(e){return e.preventDefault(),t.editProduct(e)}}},[r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.pname,expression:"product.pname"}],attrs:{id:"pname",required:"true",type:"text",placeholder:"Nombre del artículo(*)"},domProps:{value:t.product.pname},on:{input:function(e){e.target.composing||t.$set(t.product,"pname",e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("select",{ref:"category",attrs:{required:"true"},on:{change:function(e){return t.onChange()}}},[r("option",[t._v(" Seleccione ")]),r("option",{attrs:{value:"Almacén"}},[t._v(" Almacén ")]),r("option",{attrs:{value:"Fiambrería"}},[t._v(" Fiambrería ")])])]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.stock,expression:"product.stock"}],ref:"stock",attrs:{required:"true",type:"number",step:"1",min:"0",placeholder:"Cantidad(*)"},domProps:{value:t.product.stock},on:{input:function(e){e.target.composing||t.$set(t.product,"stock",e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.cost,expression:"product.cost"}],attrs:{id:"cost",required:"true",type:"number",step:"0.01",min:"0",placeholder:"Precio(*)"},domProps:{value:t.product.cost},on:{input:function(e){e.target.composing||t.$set(t.product,"cost",e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],attrs:{id:"price",required:"true",type:"number",step:"0.01",min:"0",placeholder:"Precio(*)"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.code,expression:"product.code"}],attrs:{type:"text",id:"code",placeholder:"Código de Referencia"},domProps:{value:t.product.code},on:{input:function(e){e.target.composing||t.$set(t.product,"code",e.target.value)}}})]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],attrs:{id:"description",type:"text",placeholder:"Descripción"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})]),r("div",{staticStyle:{"margin-top":"20px"}},[r("button",{staticStyle:{background:"#0f55e4","margin-right":"20%",padding:"10px"},on:{click:function(e){return t.redirect("Product")}}},[t._v(" Volver ")]),r("button",{staticStyle:{background:"#219E45",padding:"10px"},on:{click:function(e){return t.redirect("Product")}}},[t._v(" Aprobar ")])])])])])},tt=[],et={data:function(){return{id:0,product:{},saveOldValue:Number}},created:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.id=t.$route.params.id,e.next=3,t.getProduct();case 3:t.loadOldValue(),t.loadForm();case 5:case"end":return e.stop()}}),e)})))()},methods:{loadForm:function(){switch(this.product.category){case"Almacén":this.$refs.category[1].selected=!0;break;case"Fiambrería":this.$refs.paymentMethod[2].selected=!0;break}"Fiambrería"==this.$refs.category.value&&(this.$refs.stock.step=.001)},onChange:function(){"Fiambrería"==this.$refs.category.value?this.$refs.stock.step=.001:this.$refs.stock.step=1},loadOldValue:function(){this.saveOldValue=this.product.cost},editProduct:function(){if(0==this.$refs.category.selectedIndex)alert("No ingresó categoría");else{var t={pname:this.product.pname,stock:this.product.stock,cost:this.product.cost,price:this.product.price,code:this.product.code,category:this.product.category,description:this.product.description,oldValue:this.saveOldValue};j.a.put("".concat(T.baseURL,"/product/update?productID=").concat(this.id),t).then((function(t){_t.push({name:"Product"})}))}},getProduct:function(){var t=this;return j.a.get("".concat(T.baseURL,"/product/product/").concat(this.id)).then((function(e){return t.product=e.data}))},navigate:function(){_t.go(-1)}}},rt=et,nt=(r("5669"),Object(a["a"])(rt,Z,tt,!1,null,null,null)),ot=nt.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"form-box"},[r("h2",[t._v("NUEVA FACTURA")]),r("form",{attrs:{id:"create-post-form"},on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"input-box"},[r("label",{attrs:{name:"title"}},[t._v("Método de Pago: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.paymentMethod,expression:"paymentMethod"}],staticStyle:{width:"40%"},attrs:{required:"true"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.paymentMethod=e.target.multiple?r:r[0]}}},[r("option",{domProps:{selected:!0}},[t._v(" EFECTIVO ")]),r("option",[t._v(" MERCADOPAGO ")]),r("option",[t._v(" TARJETA ")])])]),r("div",{staticStyle:{"text-align":"left"}},[r("label",[t._v("Pendiente de Entrega")]),r("input",{ref:"toDeliver",staticStyle:{width:"10%"},attrs:{value:"SI",type:"checkbox"}})]),r("div",{staticClass:"input-box"},[r("label",{attrs:{name:"title"}},[t._v("Producto: ")]),r("select",{ref:"selectedProd",staticStyle:{width:"40%"},attrs:{required:"true"},on:{change:function(e){return t.onChange()}}},[r("option",{attrs:{selected:"true"}},[t._v(" Seleccione ")]),t._l(t.products,(function(e){return r("option",{key:e._id,domProps:{value:e._id}},[t._v(" "+t._s(e.pname)+" ")])}))],2),r("br"),r("input",{ref:"prodQty",staticStyle:{width:"80px","text-align":"center"},attrs:{id:"qty",required:!0,type:"number",step:"1",min:"0",placeholder:"Cantidad"}}),r("button",{staticStyle:{"border-radius":"40px",color:"black",align:"center","margin-left":"10%"},on:{click:t.addToCart}},[t._v(" Añadir ")])]),r("div",{staticStyle:{"margin-top":"20px"}},[r("button",{staticStyle:{background:"#0f55e4","margin-right":"20%",padding:"10px"},on:{click:function(e){return t.redirect("Invoice")}}},[t._v(" Volver ")]),r("button",{staticStyle:{background:"#219E45",padding:"10px"},on:{click:t.createInvoice}},[t._v(" Aprobar ")])])])]),0!=this.cart.length?r("div",{staticClass:"form-box another"},[r("h2",[t._v("PRODUCTOS")]),r("table",[t._m(0),r("tbody",t._l(t.cart,(function(e){return r("tr",{key:e._id},[r("td",[t._v(t._s(e.pname))]),r("td",[t._v(t._s(e.qty))]),r("td",[t._v(t._s(e.price))]),r("td",[r("button",{staticStyle:{background:"#EB6C49",width:"100%"},on:{click:function(r){return t.deleteProduct(e._id)}}},[t._v(" Quitar ")])])])})),0)]),t._v(" TOTAL = $"+t._s(t.total)+" ")]):t._e()])},at=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Nombre")]),r("th",{attrs:{scope:"col"}},[t._v("cantidad")]),r("th",{attrs:{scope:"col"}},[t._v("Precio/Un.")])])])}],ct=(r("7db0"),r("a434"),{data:function(){return{productItem:{_id:"",pName:"",qty:Number},products:[],cart:[],paymentMethod:"EFECTIVO",toDeliver:"",total:Number}},created:function(){this.fetchProducts()},methods:{onChange:function(){var t=this.getProperty(this.$refs.selectedProd.value,"category");this.$refs.prodQty.step="Fiambrería"==t?.001:1},redirect:function(t){this.$router.push({name:"".concat(t)})},deleteProduct:function(t){for(var e in this.cart)this.cart[e]._id===t&&this.cart.splice(e,1)},addToCart:function(){var t=this.$refs.prodQty.value;if(t<=0||0==this.$refs.selectedProd.selectedIndex)alert("No ingresó ningún producto");else{var e=this.$refs.selectedProd.value,r=this.getProperty(e,"stock"),n=null;void 0===this.cart.find((function(t){return t._id==e}))?(n=0,console.log("cantidad undefined: "+n)):(n=this.cart.find((function(t){return t._id==e})).qty,console.log("cantidad incart: "+n));var o=parseFloat(n)+parseFloat(t);if(r<o)console.log("ERROR >>> qtyinstock: "+r+"  || qtyToAdd: "+t+"  || qtyinCart "+n+"  || total: "+o),alert("No hay suficientes stock de este producto para realizar la compra");else{for(var i in console.log("PASSED >>> qtyinstock: "+r+"  || qtyToAdd: "+t+"  || qtyinCart "+n+"  || total: "+o),this.productItem={_id:e,pname:this.getProperty(e,"pname"),price:this.getProperty(e,"price"),qty:parseFloat(this.$refs.prodQty.value)},this.cart)this.cart[i]._id===this.productItem._id&&(this.productItem.qty=parseFloat(this.cart[i].qty)+parseFloat(this.productItem.qty),this.cart.splice(i,1));this.cart.push(this.productItem),this.total=this.getTotal()}}},fetchProducts:function(){var t=this;j.a.get("".concat(T.baseURL,"/product/products")).then((function(e){return t.products=e.data}))},getProperty:function(t,e){var r=this.products.find((function(e){return e._id==t}));return r[e]},createInvoice:function(){if(this.cart.length<=0)alert("No hay Productos Seleccionados");else{var t=confirm("Aprobar factura");if(1==t){!0===this.$refs.toDeliver.checked?this.toDeliver="SI":this.toDeliver="NO";var e={paymentMethod:this.paymentMethod,toDeliver:this.toDeliver,order:this.cart,total:this.total};this.__submitToServer(e)}}},getTotal:function(){var t=0;for(var e in this.cart){var r=this.cart[e].price*this.cart[e].qty;t+=r}return t},__submitToServer:function(t){var e=this;j.a.post("".concat(T.baseURL,"/invoice/create"),t).then((function(t){e.redirect("Invoice")}))}}}),st=ct,ut=(r("d99e"),Object(a["a"])(st,it,at,!1,null,null,null)),dt=ut.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"form-box"},[r("h2",[t._v("EDITAR FACTURA N°"+t._s(t.invoice._id))]),r("form",{attrs:{id:"create-post-form"},on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"input-box"},[r("label",{attrs:{name:"title"}},[t._v("Método de Pago: ")]),r("select",{ref:"paymentMethod",staticStyle:{width:"40%"},attrs:{required:"true"}},[r("option",[t._v(" EFECTIVO ")]),r("option",[t._v(" MERCADOPAGO ")]),r("option",[t._v(" TARJETA ")])])]),r("div",{staticStyle:{"text-align":"left"}},[r("label",[t._v("Pendiente de Entrega")]),r("input",{ref:"toDeliver",staticStyle:{width:"10%"},attrs:{value:"SI",type:"checkbox"}})]),r("div",{staticStyle:{"margin-top":"20px"}},[r("button",{staticStyle:{background:"#0f55e4","margin-right":"20%",padding:"10px"},on:{click:function(e){return t.redirect("Invoice")}}},[t._v(" Volver ")]),r("button",{staticStyle:{background:"#219E45",padding:"10px"},on:{click:t.editInvoice}},[t._v(" Guardar ")])])])]),r("div",{staticClass:"form-box another"},[r("h2",[t._v("PRODUCTOS")]),r("table",[t._m(0),r("tbody",t._l(t.invoice.order,(function(e){return r("tr",{key:e._id},[r("td",[t._v(t._s(e.pname))]),r("td",[t._v(t._s(e.qty))]),r("td",[t._v(t._s(e.cost))])])})),0)]),r("br"),t._v(" TOTAL: $"+t._s(t.invoice.total)+" ")])])},pt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Nombre")]),r("th",{attrs:{scope:"col"}},[t._v("cantidad")]),r("th",{attrs:{scope:"col"}},[t._v("Precio/Un.")])])])}],vt={data:function(){return{id:0,invoice:{},product:{}}},created:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.id=t.$route.params.id,e.next=3,t.getInvoice();case 3:t.loadOnForm();case 4:case"end":return e.stop()}}),e)})))()},methods:{redirect:function(t){this.$router.push({name:"".concat(t)})},loadOnForm:function(){switch(this.invoice.paymentMethod){case"EFECTIVO":this.$refs.paymentMethod[0].selected=!0;break;case"MERCADOPAGO":this.$refs.paymentMethod[1].selected=!0;break;case"TARJETA":this.$refs.paymentMethod[2].selected=!0;break}"SI"===this.invoice.toDeliver&&(this.$refs.toDeliver.checked=!0)},fetchProducts:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",j.a.get("".concat(T.baseURL,"/product/products")).then((function(e){return t.products=e.data})));case 1:case"end":return e.stop()}}),e)})))()},editInvoice:function(){var t={number:this.invoice.number,paymentMethod:this.invoice.paymentMethod,toDeliver:this.invoice.toDeliver};j.a.put("".concat(T.baseURL,"/invoice/update?invoiceID=").concat(this.id),t).then((function(t){_t.push({name:"Home"})}))},getInvoice:function(){var t=this;return j.a.get("".concat(T.baseURL,"/invoice/invoice/").concat(this.id)).then((function(e){return t.invoice=e.data}))},navigate:function(){_t.go(-1)}}},ht=vt,ft=(r("a07d"),Object(a["a"])(ht,lt,pt,!1,null,null,null)),mt=ft.exports;n["a"].use(l["a"]);var gt=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/product",name:"Product",component:U},{path:"/invoice",name:"Invoice",component:J},{path:"/product/create",name:"CreateProduct",component:X},{path:"/product/edit",name:"EditProduct",component:ot},{path:"/invoice/create",name:"CreateInvoice",component:dt},{path:"/invoice/edit",name:"EditInvoice",component:mt}],bt=new l["a"]({mode:"history",base:"/",routes:gt}),_t=bt;n["a"].config.productionTip=!1,new n["a"]({router:_t,render:function(t){return t(u)}}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},d99e:function(t,e,r){"use strict";var n=r("a478"),o=r.n(n);o.a},f1a6:function(t,e,r){"use strict";var n=r("7780"),o=r.n(n);o.a}});
//# sourceMappingURL=app.a1d40579.js.map