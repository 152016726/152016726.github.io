webpackJsonp([3],{"7nLv":function(o,t,e){var i=e("pt3K");"string"==typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);e("rjj0")("46cd7f3a",i,!0,{})},C34Q:function(o,t,e){o.exports=e.p+"static/img/bg.ea3f44e.png"},"T+/8":function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("mvHQ"),n=e.n(i),a=e("woOf"),r=e.n(a),s=e("E4LH"),l=e("q2Iq"),c=e("lbHh"),d=e.n(c),p="info";function g(){return d.a.get(p)}var u={name:"SocialSignin",methods:{wechatHandleClick:function(o){alert("ok")},tencentHandleClick:function(o){alert("ok")}}},f={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(t){return o.wechatHandleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),o._v("\n    微信\n  ")]),o._v(" "),e("div",{staticClass:"sign-btn",on:{click:function(t){return o.tencentHandleClick("tencent")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),o._v("\n    QQ\n  ")])])},staticRenderFns:[]};var m={name:"login",data:function(){return{loginForm:{account:"",password:""},passwordType:"password",loginRules:{account:[{required:!0,trigger:"blur",validator:function(o,t,e){Object(s.isValidUsername)(t)?e():e(new Error("请输入正确格式的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(o,t,e){Object(s.validPassword)(t)?e():e(new Error("请输入正确格式的密码"))}}]},checked:!0,acActive:!1,pwActive:!1,icActive:!1,imgCodeSrc:"",imgVerifyToken:"",showDialog:!1,errorTips:""}},components:{SocialSign:e("VU/8")(u,f,!1,function(o){e("Ti0z")},"data-v-14f83b64",null).exports},created:function(){if(Object(l.a)()&&this.$router.push({path:"./"}),g()){var o=JSON.parse(g()),t=o.account,e=o.password;this.loginForm.account=t,this.loginForm.password=e}},methods:{submitData:function(){var o=this,t=this.loginForm;this.$refs.loginForm.validate(function(e){if(!e)return!1;o.$store.dispatch("user/login",r()(t)).then(function(t){var e,i=o.account,a=o.password;o.checked?(e=n()({account:i,password:a}),d.a.set(p,e)):d.a.remove(p),o.$router.push({path:"/"})},function(t){460===t.data.errcode?o.$message.error(t.data.datas[0].message):o.$message.error(t.data.errmsg),t.data&&(600403!==t.data.errcode&&600402!==t.data.errcode||o.reGetCodeImg())})})},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},acTextOnblur:function(){this.loginForm.account||(this.acActive=!1)},acTextOnFocus:function(){this.acActive=!0},pwTextOnblur:function(){this.loginForm.password||(this.pwActive=!1)},pwTextOnFocus:function(){this.pwActive=!0},reGetCodeImg:function(){}}},b={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"login"},[e("div",{staticClass:"loginDialog"},[e("h1",[o._v("药师帮后台ERP管理系统")]),o._v(" "),e("div",{staticClass:"loginBox"},[e("el-form",{ref:"loginForm",attrs:{model:o.loginForm,rules:o.loginRules}},[e("el-form-item",{class:{active:o.acActive},attrs:{prop:"account"}},[e("div",{staticClass:"svg-container",class:{active:o.acActive}},[e("svg-icon",{attrs:{"icon-class":"user","class-name":"tag"}})],1),o._v(" "),e("el-input",{attrs:{placeholder:"请输入账号",type:"text",name:"account"},on:{blur:o.acTextOnblur},nativeOn:{keyup:function(t){return o.acTextOnFocus(t)}},model:{value:o.loginForm.account,callback:function(t){o.$set(o.loginForm,"account",t)},expression:"loginForm.account"}})],1),o._v(" "),e("el-form-item",{class:{active:o.pwActive},attrs:{prop:"password"}},[e("div",{staticClass:"svg-container",class:{active:o.pwActive}},[e("svg-icon",{attrs:{"icon-class":"lock","class-name":"tag"}})],1),o._v(" "),e("el-input",{attrs:{placeholder:"请输入密码",type:o.passwordType,name:"password"},on:{blur:o.pwTextOnblur},nativeOn:{keyup:[function(t){return o.pwTextOnFocus(t)},function(t){return!t.type.indexOf("key")&&o._k(t.keyCode,"enter",13,t.key,"Enter")?null:o.submitData(t)}]},model:{value:o.loginForm.password,callback:function(t){o.$set(o.loginForm,"password",t)},expression:"loginForm.password"}}),o._v(" "),e("div",{staticClass:"svg-eye",on:{click:function(t){return t.preventDefault(),o.showPwd(t)}}},[e("svg-icon",{attrs:{"icon-class":"password"===o.passwordType?"eye":"eye-open","class-name":"tag"}})],1)],1),o._v(" "),e("div",{staticClass:"choosed"},[e("el-checkbox",{model:{value:o.checked,callback:function(t){o.checked=t},expression:"checked"}},[o._v("记住密码")])],1),o._v(" "),e("a",{staticClass:"loginBtn",class:{active:o.loginForm.account&&o.loginForm.password},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),o.submitData(t)}}},[o._v("\n          登陆系统\n        ")])],1),o._v(" "),e("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(t){o.showDialog=!0}}},[o._v("\n        第三方登录\n      ")])],1)]),o._v(" "),e("el-dialog",{attrs:{title:"第三方登录",visible:o.showDialog},on:{"update:visible":function(t){o.showDialog=t}}},[o._v("\n    暂未开放! ! !\n    "),e("br"),o._v(" "),e("br"),o._v(" "),e("br"),o._v(" "),e("social-sign")],1)],1)},staticRenderFns:[]};var h=e("VU/8")(m,b,!1,function(o){e("7nLv")},null,null);t.default=h.exports},T9IX:function(o,t,e){(o.exports=e("FZ+f")(!1)).push([o.i,".social-signup-container[data-v-14f83b64]{margin:20px 0}.social-signup-container .sign-btn[data-v-14f83b64]{display:inline-block;cursor:pointer}.social-signup-container .icon[data-v-14f83b64]{color:#fff;font-size:24px;margin-top:8px}.social-signup-container .qq-svg-container[data-v-14f83b64],.social-signup-container .wx-svg-container[data-v-14f83b64]{display:inline-block;width:40px;height:40px;line-height:40px;text-align:center;padding-top:1px;border-radius:4px;margin-bottom:20px;margin-right:5px}.social-signup-container .wx-svg-container[data-v-14f83b64]{background-color:#24da70}.social-signup-container .qq-svg-container[data-v-14f83b64]{background-color:#6ba2d6;margin-left:50px}",""])},Ti0z:function(o,t,e){var i=e("T9IX");"string"==typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);e("rjj0")("6b8db252",i,!0,{})},kxFB:function(o,t){o.exports=function(o){return"string"!=typeof o?o:(/^['"].*['"]$/.test(o)&&(o=o.slice(1,-1)),/["'() \t\n]/.test(o)?'"'+o.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':o)}},mvHQ:function(o,t,e){o.exports={default:e("qkKv"),__esModule:!0}},pt3K:function(o,t,e){var i=e("kxFB");(o.exports=e("FZ+f")(!1)).push([o.i,".login{width:100%;height:100vh;position:relative;background:url("+i(e("C34Q"))+") no-repeat 50%;background-size:cover}.login .el-form{padding-top:45px}.login .el-form-item{margin-bottom:45px}.login .el-form-item.active .el-form-item__content{border:1px solid #4486ff}.login .el-form-item .el-form-item__content{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #ddd;border-radius:4px;position:relative}.login .el-form-item .svg-container{width:9%;padding:0 10px;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.login .el-form-item .svg-container.active{color:#4486ff}.login .el-form-item .svg-container .tag{height:100%;background-size:contain;background-repeat:no-repeat;background-position:50%}.login .el-form-item .el-input{width:91%;height:100%;font-size:16px;color:#3f4457}.login .el-form-item .el-input input{background:transparent;border:0;-webkit-appearance:none;border-radius:0;padding:0}.login .el-form-item .el-input input::-webkit-input-placeholder,.login .el-form-item .el-input textarea::-webkit-input-placeholder{color:#bababa}.login .el-form-item .el-input input:-moz-placeholder,.login .el-form-item .el-input input::-moz-placeholder,.login .el-form-item .el-input textarea:-moz-placeholder,.login .el-form-item .el-input textarea::-moz-placeholder{color:#bababa}.login .el-form-item .el-input input:-ms-input-placeholder,.login .el-form-item .el-input textarea:-ms-input-placeholder{color:#bababa}.login .el-form-item .svg-eye{cursor:pointer;position:absolute;right:0;top:50%;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%);-moz-transform:translateY(-50%);width:11.67%;height:18px;line-height:18px;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}.login .el-form-item .svg-eye .tag{height:100%;background:none}.login .imgCode{border:none;margin-bottom:0}.login .imgCode .el-form-item__content{border:none;padding:0}.login .imgCode .codeCheck{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;border:1px solid #ddd}.login .imgCode .codeCheck.active{border:1px solid #4486ff}.login .imgCode .codeCheck .svg-container{width:25%}.login .imgCode .codeCheck .el-input{width:75%}.login .imgCode .codeImg{width:35%;height:40px;border:1px solid #ddd;margin-left:10px}.login .imgCode .exchangeImg{width:15%;margin-left:10px;line-height:40px;color:#4486ff}.login .loginDialog{width:500px;padding-bottom:30px;border:1px solid #e5ebfd;-webkit-box-shadow:0 0 10px #e5ebfd;box-shadow:0 0 10px #e5ebfd;left:20.73%;top:50%;background-color:#fff;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%);-moz-transform:translateY(-50%);position:absolute}.login .loginDialog h1{font-weight:700;font-size:40px;text-align:center}.login .loginDialog .loginBox{margin:0 14%}.login .loginDialog .errorTips{height:20px;font-size:12px;color:#f65860}.login .loginDialog .choosed{margin:20px 0;height:20px;font-size:12px}.login .loginDialog .loginBtn{display:block;height:60px;text-align:center;line-height:60px;color:#fff;border-radius:4px;font-size:18px;background-color:#4486ff;opacity:.5}.login .loginDialog .loginBtn.active{opacity:1}.login .thirdparty-button{margin:10px auto}@media only screen and (max-width:470px){.login .thirdparty-button{display:none}}",""])},qkKv:function(o,t,e){var i=e("FeBl"),n=i.JSON||(i.JSON={stringify:JSON.stringify});o.exports=function(o){return n.stringify.apply(n,arguments)}}});
//# sourceMappingURL=3.c51ca5e622c7dac98df0.js.map