(function(t){function e(e){for(var o,u,c=e[0],s=e[1],a=e[2],d=0,p=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/VUE-1/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"269f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TodoList")],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("div",{staticClass:"form"},[t._m(0),n("input",t._b({staticClass:"input",attrs:{id:"task_input",placeholder:"Enter your's todo =)"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e.target)}}},"input",t.newTodo,!1)),n("ul",t._l(t.arr,(function(e,o){return n("TodoItem",{key:e.id,attrs:{todo:e,index:o},on:{"rm-todo":t.removeTodo}})})),1)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("span",[t._v("TODOS MANAGER")])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{done:t.todo.completed}},[n("span",[n("input",{attrs:{type:"checkbox"},on:{change:t.completed}}),n("strong",{staticClass:"idx"},[t._v(t._s(t.index+1)+":")]),t._v(" "+t._s(t._f("uppercase")(t.todo.title))+" ")]),n("button",{staticClass:"rm",on:{click:function(e){return t.$emit("rm-todo",t.todo.id)}}},[t._v("×")])])},a=[],l={props:{todo:{type:Object,required:!0},index:Number},methods:{completed(){this.todo.completed=!this.todo.completed}},filters:{uppercase(t){return t.toUpperCase()}}},d=l,p=(n("cfa1"),n("2877")),f=Object(p["a"])(d,s,a,!1,null,"7bc7626e",null),h=f.exports,m={name:"TodoList",data(){return{arr:[],index:0,newTodo:""}},methods:{addTodo:function(t){""!=t.value&&(this.arr.push({id:this.index,title:t.value,completed:!1}),this.index+=1,t.value="")},removeTodo(t){this.arr=this.arr.filter(e=>e.id!==t)}},components:{TodoItem:h}},v=m,b=(n("bdcc"),Object(p["a"])(v,u,c,!1,null,"8994a6fe",null)),y=b.exports,_={name:"App",components:{TodoList:y}},x=_,O=(n("034f"),Object(p["a"])(x,r,i,!1,null,null,null)),g=O.exports;o["a"].config.productionTip=!1,new o["a"]({render:t=>t(g)}).$mount("#app")},"7d20":function(t,e,n){},"85ec":function(t,e,n){},bdcc:function(t,e,n){"use strict";n("269f")},cfa1:function(t,e,n){"use strict";n("7d20")}});
//# sourceMappingURL=app.c9001ec2.js.map