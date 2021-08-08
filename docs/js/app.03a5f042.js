(function(t){function e(e){for(var n,c,l=e[0],a=e[1],s=e[2],u=0,p=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,l=1;l<o.length;l++){var a=o[l];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/VUE-1/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var d=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoList")],1)},i=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section"},[o("div",{staticClass:"form"},[t._m(0),o("input",t._b({staticClass:"input",attrs:{id:"task_input",placeholder:"Enter your's todo =)"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e.target)}}},"input",t.newTodo,!1)),t.loading?[o("h1",[t._v("Загрузка")])]:[o("ul",t._l(t.arr,(function(e,n){return o("TodoItem",{key:e.t_id,attrs:{todo:e,index:n},on:{"rm-todo":t.removeTodo}})})),1)]],2)])},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("span",[t._v("TODOS MANAGER")])])}],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{class:{done:t.todo.completed}},[o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:this.todo.completed,expression:"this.todo.completed"}],ref:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(this.todo.completed)?t._i(this.todo.completed,null)>-1:this.todo.completed},on:{click:t.completed,change:function(e){var o=this.todo.completed,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=null,c=t._i(o,i);n.checked?c<0&&t.$set(this.todo,"completed",o.concat([i])):c>-1&&t.$set(this.todo,"completed",o.slice(0,c).concat(o.slice(c+1)))}else t.$set(this.todo,"completed",r)}}}),o("strong",{staticClass:"idx"},[t._v(t._s(t.index+1)+":")]),t._v(" "+t._s(t._f("uppercase")(t.todo.title))+" ")]),o("button",{staticClass:"rm",on:{click:function(e){return t.$emit("rm-todo",t.todo.t_id)}}},[t._v("×")])])},s=[],d=o("bc3a"),u=o.n(d),p={props:{todo:{type:Object,required:!0},index:Number},data(){return{perv_compl:!1}},methods:{completed(){this.todo.completed=!this.todo.completed,u.a.put("http://localhost:5050/api/put/todo",{id:this.todo.t_id,title:this.todo.title,completed:this.todo.completed}).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}},filters:{uppercase(t){return t.toUpperCase()}}},f=p,h=(o("f5fb"),o("2877")),m=Object(h["a"])(f,a,s,!1,null,"379c2bca",null),v=m.exports,_=o("cc98"),g=o.n(_),b={name:"TodoList",data(){return{arr:[],index:0,newTodo:"",loading:!1}},created(){this.getData()},methods:{getData(){this.loading=!0,u.a.get("http://localhost:5050/api/get/todos").then(t=>{this.loading=!1,this.arr=t.data}).catch(t=>{this.loading=!1,console.log(t)})},addTodo:function(t){if(""!=t.value){let e=g()(),o=t.value;u.a.post("http://localhost:5050/api/post/todo",{id:e,title:o,completed:!1}).then(t=>{console.log(t.data),this.arr.push({t_id:e,title:o,completed:!1})}).catch(t=>{console.log(t)}),t.value=""}},removeTodo(t){const e="http://localhost:5050/api/delete/todo/"+t;console.log(e),u.a.delete(e).then(e=>{console.log(e),this.arr=this.arr.filter(e=>e.t_id!==t)}).catch(t=>{console.log(t)})}},components:{TodoItem:v}},y=b,O=(o("afa9"),Object(h["a"])(y,c,l,!1,null,"107d0518",null)),x=O.exports,k={name:"App",components:{TodoList:x}},T=k,w=(o("034f"),Object(h["a"])(T,r,i,!1,null,null,null)),j=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(j)}).$mount("#app")},"85ec":function(t,e,o){},"86af":function(t,e,o){},afa9:function(t,e,o){"use strict";o("86af")},d793:function(t,e,o){},f5fb:function(t,e,o){"use strict";o("d793")}});
//# sourceMappingURL=app.03a5f042.js.map