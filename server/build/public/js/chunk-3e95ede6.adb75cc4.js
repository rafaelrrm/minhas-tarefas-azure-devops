(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e95ede6"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(r(t))}},"24fa":function(t,e,n){},"43fe":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentTask?n("div",{staticClass:"edit-form"},[n("h4",[t._v("Tarefa")]),n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Nome")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTask.name,expression:"currentTask.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.currentTask.name},on:{input:function(e){e.target.composing||t.$set(t.currentTask,"name",e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"description"}},[t._v("Descrição")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTask.description,expression:"currentTask.description"}],staticClass:"form-control",attrs:{type:"text",id:"description"},domProps:{value:t.currentTask.description},on:{input:function(e){e.target.composing||t.$set(t.currentTask,"description",e.target.value)}}})]),n("div",{staticClass:"form-group"},[t._m(0),t._v(" "+t._s(t.currentTask.finished?"Finalizada":"Pendente")+" ")])]),t.currentTask.finished?n("button",{staticClass:"badge badge-primary mr-2",on:{click:function(e){return t.updateFinished(!1)}}},[t._v(" Não Completa ")]):n("button",{staticClass:"badge badge-primary mr-2",on:{click:function(e){return t.updateFinished(!0)}}},[t._v(" Completar ")]),n("button",{staticClass:"badge badge-danger mr-2",on:{click:t.deleteTask}},[t._v("Remover")]),n("button",{staticClass:"badge badge-success",attrs:{type:"submit"},on:{click:t.updateTask}},[t._v(" Atualizar ")]),n("p",[t._v(t._s(t.message))])]):n("div",[n("br"),n("p",[t._v("Selecione uma tarefa...")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("strong",[t._v("Status:")])])}],o=(n("b0c0"),n("a4d3"),n("e01a"),n("ef27")),a={name:"task",data:function(){return{currentTask:null,message:""}},methods:{getTask:function(t){var e=this;o["a"].get(t).then((function(t){e.currentTask=t.data,console.log(t.data)})).catch((function(t){console.log(t)}))},updateFinished:function(t){var e=this,n={id:this.currentTask.id,name:this.currentTask.name,description:this.currentTask.description,finished:t};o["a"].update(this.currentTask.id,n).then((function(n){e.currentTask.finished=t,console.log(n.data)})).catch((function(t){console.log(t)}))},updateTask:function(){var t=this;o["a"].update(this.currentTask.id,this.currentTask).then((function(e){console.log(e.data),t.message="Tarefa atualizada com sucesso!"})).catch((function(t){console.log(t)}))},deleteTask:function(){var t=this;o["a"].delete(this.currentTask.id).then((function(e){console.log(e.data),t.$router.push({name:"tasks"})})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.getTask(this.$route.params.id)}},s=a,c=(n("fcc1"),n("2877")),u=Object(c["a"])(s,r,i,!1,null,null,null);e["default"]=u.exports},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),v=n("825a"),m=n("7b0b"),b=n("fc6a"),h=n("c04e"),g=n("5c6c"),y=n("7c73"),k=n("df75"),w=n("241c"),T=n("057f"),S=n("7418"),O=n("06cf"),_=n("9bf2"),C=n("d1e7"),j=n("9112"),P=n("6eeb"),x=n("5692"),N=n("f772"),$=n("d012"),E=n("90e3"),A=n("b622"),F=n("e538"),J=n("746f"),z=n("d44e"),D=n("69f3"),I=n("b727").forEach,Q=N("hidden"),R="Symbol",W="prototype",q=A("toPrimitive"),B=D.set,G=D.getterFor(R),H=Object[W],K=i.Symbol,L=o("JSON","stringify"),M=O.f,U=_.f,V=T.f,X=C.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),nt=x("wks"),rt=i.QObject,it=!rt||!rt[W]||!rt[W].findChild,ot=s&&f((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=M(H,e);r&&delete H[e],U(t,e,n),r&&t!==H&&U(H,e,r)}:U,at=function(t,e){var n=Y[t]=y(K[W]);return B(n,{type:R,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ct=function(t,e,n){t===H&&ct(Z,e,n),v(t);var r=h(e,!0);return v(n),l(Y,r)?(n.enumerable?(l(t,Q)&&t[Q][r]&&(t[Q][r]=!1),n=y(n,{enumerable:g(0,!1)})):(l(t,Q)||U(t,Q,g(1,{})),t[Q][r]=!0),ot(t,r,n)):U(t,r,n)},ut=function(t,e){v(t);var n=b(e),r=k(n).concat(vt(n));return I(r,(function(e){s&&!lt.call(n,e)||ct(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=h(t,!0),n=X.call(this,e);return!(this===H&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,Q)&&this[Q][e])||n)},dt=function(t,e){var n=b(t),r=h(e,!0);if(n!==H||!l(Y,r)||l(Z,r)){var i=M(n,r);return!i||!l(Y,r)||l(n,Q)&&n[Q][r]||(i.enumerable=!0),i}},pt=function(t){var e=V(b(t)),n=[];return I(e,(function(t){l(Y,t)||l($,t)||n.push(t)})),n},vt=function(t){var e=t===H,n=V(e?Z:b(t)),r=[];return I(n,(function(t){!l(Y,t)||e&&!l(H,t)||r.push(Y[t])})),r};if(c||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===H&&n.call(Z,t),l(this,Q)&&l(this[Q],e)&&(this[Q][e]=!1),ot(this,e,g(1,t))};return s&&it&&ot(H,e,{configurable:!0,set:n}),at(e,t)},P(K[W],"toString",(function(){return G(this).tag})),P(K,"withoutSetter",(function(t){return at(E(t),t)})),C.f=lt,_.f=ct,O.f=dt,w.f=T.f=pt,S.f=vt,F.f=function(t){return at(A(t),t)},s&&(U(K[W],"description",{configurable:!0,get:function(){return G(this).description}}),a||P(H,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:K}),I(k(nt),(function(t){J(t)})),r({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=K(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(m(t))}}),L){var mt=!c||f((function(){var t=K();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}));r({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),i[1]=e,L.apply(null,i)}})}K[W][q]||j(K[W],q,K[W].valueOf),z(K,R),$[Q]=!0},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(v,m,b,h){for(var g,y,k=o(v),w=i(k),T=r(m,b,3),S=a(w.length),O=0,_=h||s,C=e?_(v,S):n||d?_(v,0):void 0;S>O;O++)if((p||O in w)&&(g=w[O],y=T(g,O,k),t))if(e)C[O]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:c.call(C,g)}else switch(t){case 4:return!1;case 7:c.call(C,g)}return l?-1:u||f?f:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var v=p.toString,m="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(a(l,t))return"";var n=m?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fcc1:function(t,e,n){"use strict";n("24fa")}}]);
//# sourceMappingURL=chunk-3e95ede6.adb75cc4.js.map