(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc240146"],{"299f":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("d4ec"),o=r("bee2"),i=function(){function e(){Object(n["a"])(this,e),this.usernameReg=/^[A-Za-z]\w{3,7}$/,this.pwdReg=/^(?=.*[a-z])\w{6,16}$/}return Object(o["a"])(e,[{key:"validUsername",value:function(e){return this.usernameReg.test(e)}},{key:"validPwd",value:function(e){return this.pwdReg.test(e)}},{key:"validEqual",value:function(e,t){return e===t}}]),e}(),a=new i},"4de4":function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("d039"),a=r("1dde"),s=a("filter"),c=s&&!i((function(){[].filter.call({length:-1,0:1},(function(e){throw e}))}));n({target:"Array",proto:!0,forced:!s||!c},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},7272:function(e,t,r){"use strict";var n=r("7cf0"),o=r.n(n);o.a},"7cf0":function(e,t,r){},a55b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[e._m(0),r("div",[r("van-cell-group",[r("van-field",{attrs:{type:"text",label:"用户名",placeholder:"请输入用户名","left-icon":"manager-o","error-message":e.user.errorMessage},on:{input:function(t){e.validUP(e.user.value,"validUsername",{key:"user",errorMessage:"用户名支持4-8个(字母数字_)组合，必须字母开头"})}},model:{value:e.user.value,callback:function(t){e.$set(e.user,"value",t)},expression:"user.value"}}),r("van-field",{attrs:{type:e.pwd1.type,"left-icon":"bulb-o",label:"密码",placeholder:"请输入密码","right-icon":e.pwd1.icon,"error-message":e.pwd1.errorMessage},on:{"click-right-icon":function(t){return e.checkPassword("pwd1")},input:function(t){return e.validUP(e.pwd1.value,"validPwd",{key:"pwd1",errorMessage:"密码支持6-16个字母数字组合，小写字母开头"})}},model:{value:e.pwd1.value,callback:function(t){e.$set(e.pwd1,"value",t)},expression:"pwd1.value"}})],1),r("div",{staticClass:"register-form"},[r("van-button",{staticClass:"register-btn",attrs:{loading:e.isLoading,type:"info",block:"","loading-text":"登录中...",text:"登录",disabled:!e.isValid},on:{click:e.login}})],1),r("div",{staticClass:"login"},[r("router-link",{staticClass:"login-text",attrs:{to:"/register"}},[e._v(" 没有账号？ "),r("span",{staticClass:"span1"},[e._v("立即注册")])])],1)],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-logo"},[r("div",{staticClass:"logo"})])}],i=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),a=r("299f"),s=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=Object(s["a"])("loginModule"),d=l.mapState,f=l.mapMutations,g={name:"login",computed:u({},d(["isLoading","user","pwd1","isValid"])),methods:u({},f(["checkPassword"]),{login:function(){var e=this;this.$store.commit("loginModule/login",!0);var t=5*Math.random()*1e3;setTimeout((function(){var t=localStorage.getItem("users");if(t=t?JSON.parse(t):[],0===t.length)return e.$toast({duration:2e3,message:"该用户不存在"}),void e.$store.commit("loginModule/login",!1);for(var r=0;r<t.length;r++)if(t[r].username==e.user.value){if(t[r].pwd==e.pwd1.value){e.$toast({duration:2e3,message:"登录成功"}),e.$store.commit("loginModule/login",!1);var n={isLogin:!0,username:e.user.value};return localStorage.setItem("user",JSON.stringify(n)),e.$router.push({name:"home"})}return e.$toast({duration:2e3,message:"用户名或者密码不正确"}),void e.$store.commit("loginModule/login",!1)}e.$toast({duration:2e3,message:"该用户不存在"}),e.$store.commit("loginModule/login",!1)}),t)},validUP:function(e,t,r){var n=a["a"][t](e);r.isValid=n,this.$store.commit("loginModule/validUP",r),this.$store.commit("loginModule/passForm")}})},v=g,p=(r("7272"),r("2877")),b=Object(p["a"])(v,n,o,!1,null,"249d0a3b",null);t["default"]=b.exports},ade3:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},b64b:function(e,t,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),s=a((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(e){return i(o(e))}})},dbb4:function(e,t,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),s=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,n=a(e),o=s.f,u=i(n),l={},d=0;while(u.length>d)r=o(n,t=u[d++]),void 0!==r&&c(l,t,r);return l}})},e439:function(e,t,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,s=r("83ab"),c=o((function(){a(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})}}]);
//# sourceMappingURL=chunk-bc240146.d138c5cd.js.map