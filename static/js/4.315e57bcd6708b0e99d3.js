webpackJsonp([4],{B5WT:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"[data-v-71b63731]:export{menuText:#bfcbd9;menuActiveText:#409eff;subMenuActiveText:#f4f4f5;menuBg:#304156;menuHover:#263445;subMenuBg:#1f2d3d;subMenuHover:#001528;sideBarWidth:210px;border:#ddd}.memberManage-container[data-v-71b63731]{width:100%;background-color:#fff}.memberManage-container .show-table[data-v-71b63731]{height:calc(100vh - 164px)}.memberManage-container .show-table .searchTitle[data-v-71b63731]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:10px}.memberManage-container .show-table .searchTitle .el-input[data-v-71b63731]{width:auto}.memberManage-container .show-table .searchTitle .el-date-editor[data-v-71b63731],.memberManage-container .show-table .searchTitle .el-input[data-v-71b63731],.memberManage-container .show-table .searchTitle .el-select[data-v-71b63731]{margin-top:10px;margin-left:10px}.memberManage-container .show-table .searchTitle .search-btn[data-v-71b63731]{margin-top:10px;margin-left:10px;padding:0 50px}.memberManage-container .show-table .activeColor[data-v-71b63731]{color:#409eff}.memberManage-container .show-table .goods-form[data-v-71b63731]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:calc(100% - 120px);padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.memberManage-container .show-table .goods-form.isMultiScreen[data-v-71b63731]{height:calc(100% - 140px)}.memberManage-container .show-table .goods-form .goods-handle[data-v-71b63731]{margin-bottom:20px}.memberManage-container .show-table .goods-form .goods-handle[data-v-71b63731] .el-button{width:92px;background-color:transparent;border-radius:2px;border:1px solid #ddd;color:#409eff;-webkit-box-sizing:border-box;box-sizing:border-box}.memberManage-container .show-table .goods-form .goods-handle[data-v-71b63731] .el-button:hover{border-color:#409eff;background-color:#409eff;color:#fff}.memberManage-container .show-table .goods-form .el-table[data-v-71b63731] .el-table__row{min-height:0;transition:min-height 2s ease;-moz-transition:min-height 2s ease;-webkit-transition:min-height 2s ease;-o-transition:min-height 2s ease}.memberManage-container .show-table .goods-form .el-table[data-v-71b63731] tr.current-row>td{background-color:#9cbeea}.memberManage-container .show-table .goods-form .el-table[data-v-71b63731] .el-table__body-wrapper{height:calc(100% - 60px)}.memberManage-text[data-v-71b63731]{font-size:30px;line-height:46px}.dialog[data-v-71b63731]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:10px 0}.dialog .note[data-v-71b63731]{width:50px}.dialog[data-v-71b63731] .el-input-number{width:100px}.dialog[data-v-71b63731] .el-radio__label{padding-left:10px}@media only screen and (max-width:1410px){.memberManage-container .search-btn[data-v-71b63731]{height:30px}.memberManage-container .show-table .goods-form[data-v-71b63731]{height:calc(100% - 100px)}}",""])},Y4bC:function(e,t,a){var l=a("ZxsB");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("09690398",l,!0,{})},ZxsB:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"[data-v-eca6915c]:export{menuText:#bfcbd9;menuActiveText:#409eff;subMenuActiveText:#f4f4f5;menuBg:#304156;menuHover:#263445;subMenuBg:#1f2d3d;subMenuHover:#001528;sideBarWidth:210px;border:#ddd}.priceTag[data-v-eca6915c]{position:relative}.priceTag[data-v-eca6915c] .el-input.is-disabled .el-input__inner{color:#606266;cursor:default;text-align:left}.priceTag[data-v-eca6915c] .el-input-number .el-input{display:-webkit-box;display:-ms-flexbox;display:flex}.priceTag .unit[data-v-eca6915c]{position:absolute;top:50%;left:4%;font-size:12px;font-style:normal;-webkit-transform:translateY(-50%);transform:translateY(-50%)}@media only screen and (max-width:1410px){.priceTag .el-input-number[data-v-eca6915c]{height:30px}}",""])},"j/+Y":function(e,t,a){var l=a("B5WT");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("b0150686",l,!0,{})},"o4T/":function(e,t,a){"use strict";var l=a("woOf"),n=a.n(l),o={name:"priceTag",data:function(){return{val:this.value}},props:{value:{default:""},isDisabled:{default:!0},customStyle:{default:function(){return{}}}},watch:{val:function(e){this.$emit("input",e)},value:function(e){this.val=e}},computed:{diyStyle:function(){return n()({width:"80px","box-sizing":"border-box"},this.customStyle)}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"priceTag"},[a("el-input-number",{style:e.diyStyle,attrs:{controls:!1,disabled:e.isDisabled},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}}),e._v(" "),a("i",{staticClass:"unit"},[e._v("￥")])],1)},staticRenderFns:[]};var i=a("VU/8")(o,r,!1,function(e){a("Y4bC")},"data-v-eca6915c",null);t.a=i.exports},utBu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("lHA8"),n=a.n(l),o=a("c/Tr"),r=a.n(o),i={components:{priceTag:a("o4T/").a},name:"memberManage",data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},offices:"",searchNum:"",level:"",status:"",cardDateRange:"",consumeDateRange:"",amountRange:"",handler:"",tableData:[{memberId:"01010204001",name:"罗小黑",telephone:" 13838383838",idCard:"12345615647896136",gender:"男",age:"18",address:"广东省清远市后花园村后庭街0号",integral:"23",status:"新卡",level:"金卡",date:"2018-06-12",recent:"2018-09-12 12:12:12",cost:"10",frequency:"2",profit:"5",handler:"曹达华",institutions:"九江制药集团",isBlackList:!1},{memberId:"010101",name:"罗小白",telephone:" 13838383830",idCard:"12345615647896131",gender:"女",age:"21",address:"广东省宜章市喷泉村温泉街0号",integral:"23",status:"活跃",level:"银卡",date:"2018-06-12",recent:"2018-09-12 12:12:12",cost:"10",frequency:"2",profit:"5",handler:"曹达华",institutions:"九江制药集团",isBlackList:!0}],multipleSelection:[],filterObj:{},isChangeLevel:!1,changeLevel:"1",isIntegerCount:!1,add:"",subtract:"",changeInteger:"1",reason:""}},computed:{isShowTable:function(){return"/member/memberManagement"===this.$route.fullPath},isMultiScreen:function(){return this.$store.state.resize.multiScreen}},methods:{levelOk:function(){console.log(this.changeLevel,"会员等级"),this.levelCancel()},levelCancel:function(){this.changeLevel="1"},integerOk:function(){"1"===this.changeInteger?console.log(this.add,"加分"):console.log(this.subtract,"减分"),this.integerCancel()},integerCancel:function(){this.changeInteger="1",this.reason=""},gotoRegister:function(){this.$router.push({name:"registerCard"})},handleSelectionChange:function(e){this.multipleSelection=e,this.changeLevel=e.level},filterDataset:function(){var e={};for(var t in this.tableData.forEach(function(t){for(var a in t)e[a]?e[a].push(t[a]):e[a]=[t[a]]}),e){var a=r()(new n.a(e[t]));e[t]=a.map(function(e){return{text:e,value:e}})}this.filterObj=e},filterTag:function(e,t,a){return t[a.property]===e}},mounted:function(){this.filterDataset()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"memberManage-container"},[e.isShowTable?a("div",{staticClass:"show-table"},[a("div",{staticClass:"searchTitle"},[a("el-select",{attrs:{placeholder:"按业务机构筛选"},model:{value:e.offices,callback:function(t){e.offices=t},expression:"offices"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),e._v(" "),a("el-input",{attrs:{placeholder:"请输入手机号码/姓名/身份证号码/会员ID查询"},model:{value:e.searchNum,callback:function(t){e.searchNum=t},expression:"searchNum"}}),e._v(" "),a("el-select",{attrs:{placeholder:"按会员卡级别筛选"},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),e._v(" "),a("el-select",{attrs:{placeholder:"按会员卡状态筛选"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),e._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"办卡开始日期","end-placeholder":"办卡结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.cardDateRange,callback:function(t){e.cardDateRange=t},expression:"cardDateRange"}}),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"最近消费开始日期","end-placeholder":"最近消费结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:e.consumeDateRange,callback:function(t){e.consumeDateRange=t},expression:"consumeDateRange"}}),e._v(" "),a("el-select",{attrs:{placeholder:"按最近一年消费金额范文筛选"},model:{value:e.amountRange,callback:function(t){e.amountRange=t},expression:"amountRange"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),e._v(" "),a("el-select",{attrs:{placeholder:"选择办卡操作员"},model:{value:e.handler,callback:function(t){e.handler=t},expression:"handler"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),e._v(" "),a("el-button",{staticClass:"search-btn",attrs:{type:"primary"}},[e._v("搜索")])],1),e._v(" "),a("div",{staticClass:"line"}),e._v(" "),a("div",{staticClass:"goods-form",class:{isMultiScreen:e.isMultiScreen}},[a("div",{staticClass:"goods-handle clearfix"},[a("el-button",{staticClass:"fl",attrs:{type:"primary"},on:{click:function(t){e.isChangeLevel=!0}}},[e._v("级别变更")]),e._v(" "),a("el-button",{staticClass:"fl",attrs:{type:"primary"},on:{click:function(t){e.isIntegerCount=!0}}},[e._v("积分加减")]),e._v(" "),a("el-button",{staticClass:"fl",attrs:{type:"primary"},on:{click:e.gotoRegister}},[e._v("办理")]),e._v(" "),a("el-button",{staticClass:"fl",attrs:{type:"primary"}},[e._v("注销")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark","highlight-current-row":""},on:{"current-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",label:"序列",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memberId",label:"会员ID","show-overflow-tooltip":"",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"/member/memberManagement/memberDetail"}},[a("span",{staticClass:"activeColor"},[e._v(e._s(t.row.memberId))])])]}}],null,!1,1161603063)}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"会员姓名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"telephone",label:"手机号码",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"idCard",label:"身份证号码",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别",sortable:"",filters:e.filterObj.gender,"filter-method":e.filterTag,width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"详细地址","show-overflow-tooltip":"",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"integral",label:"剩余积分",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"会员卡状态",sortable:"",filters:e.filterObj.status,"filter-method":e.filterTag,width:"140","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"level",label:"会员卡级别",sortable:"",filters:e.filterObj.level,"filter-method":e.filterTag,width:"140","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"办卡日期",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"recent",label:"最近消费时间","show-overflow-tooltip":"",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"近一年消费金额",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("price-tag",{model:{value:t.row.cost,callback:function(a){e.$set(t.row,"cost",a)},expression:"scope.row.cost"}})]}}],null,!1,2430727682)}),e._v(" "),a("el-table-column",{attrs:{prop:"frequency",label:"近一年消费频次",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"profit",label:"近一年毛利",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"handler",label:"办卡操作员",sortable:"",filters:e.filterObj.handler,"filter-method":e.filterTag,width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"institutions",label:"业务机构",sortable:"",filters:e.filterObj.institutions,"filter-method":e.filterTag,width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"是否黑名单",prop:"isBlackList",width:"140",sortable:"",filters:e.filterObj.isBlackList,"filter-method":e.filterTag},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:"","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:!t.row.isBlackList,callback:function(a){e.$set(!t.row,"isBlackList",a)},expression:"!scope.row.isBlackList"}})]}}],null,!1,873358474)})],1)],1),e._v(" "),a("Modal",{staticClass:"modal",attrs:{title:"会员级别变更"},on:{"on-ok":e.levelOk,"on-cancel":e.levelCancel},model:{value:e.isChangeLevel,callback:function(t){e.isChangeLevel=t},expression:"isChangeLevel"}},[a("p",{staticClass:"dialog"},[a("el-radio",{attrs:{label:"1"},model:{value:e.changeLevel,callback:function(t){e.changeLevel=t},expression:"changeLevel"}},[e._v("普通卡")])],1),e._v(" "),a("p",{staticClass:"dialog"},[a("el-radio",{attrs:{label:"2"},model:{value:e.changeLevel,callback:function(t){e.changeLevel=t},expression:"changeLevel"}},[e._v("银卡")])],1),e._v(" "),a("p",{staticClass:"dialog"},[a("el-radio",{attrs:{label:"3"},model:{value:e.changeLevel,callback:function(t){e.changeLevel=t},expression:"changeLevel"}},[e._v("金卡")])],1)]),e._v(" "),a("Modal",{staticClass:"modal",attrs:{title:"积分加减"},on:{"on-ok":e.integerOk,"on-cancel":e.integerCancel},model:{value:e.isIntegerCount,callback:function(t){e.isIntegerCount=t},expression:"isIntegerCount"}},[a("p",{staticClass:"dialog"},[a("el-radio",{attrs:{label:"1"},model:{value:e.changeInteger,callback:function(t){e.changeInteger=t},expression:"changeInteger"}},[e._v("\n          加\n          "),a("el-input-number",{attrs:{controls:!1,min:1},model:{value:e.add,callback:function(t){e.add=t},expression:"add"}}),e._v("\n          积分\n        ")],1)],1),e._v(" "),a("p",{staticClass:"dialog"},[a("el-radio",{attrs:{label:"2"},model:{value:e.changeInteger,callback:function(t){e.changeInteger=t},expression:"changeInteger"}},[e._v("\n          扣\n          "),a("el-input-number",{attrs:{controls:!1,min:1},model:{value:e.subtract,callback:function(t){e.subtract=t},expression:"subtract"}}),e._v("\n          积分\n        ")],1)],1),e._v(" "),a("p",{staticClass:"dialog"},[a("span",{staticClass:"note"},[e._v("备注")]),e._v(" "),a("el-input",{staticClass:"reason",attrs:{type:"textarea",placeholder:"请输入理由",maxlength:"30",resize:"none","show-word-limit":""},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}})],1)])],1):e._e(),e._v(" "),a("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")(i,s,!1,function(e){a("j/+Y")},"data-v-71b63731",null);t.default=c.exports}});