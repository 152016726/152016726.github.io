webpackJsonp([10],{"C/0R":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"[data-v-56163982]:export{menuText:#bfcbd9;menuActiveText:#409eff;subMenuActiveText:#f4f4f5;menuBg:#304156;menuHover:#263445;subMenuBg:#1f2d3d;subMenuHover:#001528;sideBarWidth:210px;border:#ddd}.activityDetail[data-v-56163982]{width:100%}.activityDetail .handle[data-v-56163982]{padding:10px;border-bottom:1px solid #ddd}.activityDetail .orgForm[data-v-56163982]{padding:20px}.activityDetail .orgForm .row[data-v-56163982]{display:-webkit-box;display:-ms-flexbox;display:flex;line-height:30px}.activityDetail .orgForm .row .columnTitle[data-v-56163982]{width:100px;text-align:left}.activityDetail .orgForm .row .columnContent[data-v-56163982]{display:-webkit-box;display:-ms-flexbox;display:flex;width:calc(100% - 100px)}.activityDetail .orgForm .row .columnContent .types[data-v-56163982]{width:100px;text-align:left}.activityDetail .orgForm .row .columnContent .details .strip[data-v-56163982]{margin-bottom:10px;display:-webkit-box;display:-ms-flexbox;display:flex}.activityDetail .orgForm .row .columnContent .details .strip.direction[data-v-56163982]{display:block}.activityDetail .orgForm .row .columnContent .details .strip .activityName[data-v-56163982]{border:1px solid #ddd}.activityDetail .orgForm .row .columnContent .details .strip .description[data-v-56163982]{width:120px}.activityDetail .orgForm .row .columnContent .details .strip .rules-handle[data-v-56163982]{margin-bottom:20px}.activityDetail .orgForm .row .columnContent .details .strip .rules-handle[data-v-56163982] .el-button{min-width:92px;background-color:transparent;border-radius:2px;border:1px solid #ddd;color:#409eff;-webkit-box-sizing:border-box;box-sizing:border-box}.activityDetail .orgForm .row .columnContent .details .strip .rules-handle[data-v-56163982] .el-button:hover{border-color:#409eff;background-color:#409eff;color:#fff}.activityDetail .orgForm .row .columnContent .details .strip[data-v-56163982] .el-input-number{width:60px;margin:0 10px;border:1px solid #ddd}.activityDetail .orgForm .org[data-v-56163982]{margin-bottom:20px}",""])},Ih1C:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"activityDetail"},[e("div",{staticClass:"handle"},[e("el-button",{staticClass:"save",attrs:{type:"primary"}},[t._v("保存")]),t._v(" "),e("el-button",{staticClass:"cancel",attrs:{type:"primary"}},[t._v("取消")])],1),t._v(" "),e("div",{staticClass:"orgForm"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[t._m(1),t._v(" "),e("div",{staticClass:"columnContent"},[e("div",{staticClass:"details"},[e("div",{staticClass:"strip"},[e("el-input",{staticClass:"activityName",attrs:{placeholder:"请输入活动名称"},model:{value:t.activityName,callback:function(a){t.activityName=a},expression:"activityName"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[t._m(2),t._v(" "),e("div",{staticClass:"columnContent"},[e("div",{staticClass:"details"},[e("div",{staticClass:"strip"},[e("el-date-picker",{attrs:{type:"datetimerange","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.activityPeriod,callback:function(a){t.activityPeriod=a},expression:"activityPeriod"}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[t._m(3),t._v(" "),e("div",{staticClass:"columnContent"},[e("div",{staticClass:"details"},[e("div",{staticClass:"strip direction"},[e("div",{staticClass:"rules-handle clearfix"},[e("el-button",{staticClass:"fl",attrs:{type:"primary"}},[t._v("添加商品")]),t._v(" "),e("el-button",{staticClass:"fl",attrs:{type:"primary"},on:{click:t.editColumn}},[t._v("添加优惠券")]),t._v(" "),e("el-button",{staticClass:"fl",attrs:{type:"primary"}},[t._v("删除")])],1),t._v(" "),e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark",border:!0},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),e("el-table-column",{attrs:{label:"兑换物",width:"560"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",t._l(a.row.material,function(a,i){return e("span",{key:i},[t._v(t._s("company"===i?a:a+"/"))])}),0)]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"数量",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-input-number",{attrs:{controls:!1},on:{change:function(e){return t.getAmountsChange(a.row,a.$index)}},model:{value:a.row.amount,callback:function(e){t.$set(a.row,"amount",e)},expression:"scope.row.amount"}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"兑换积分",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-input-number",{attrs:{controls:!1},on:{change:function(e){return t.getIntegralChange(a.row,a.$index)}},model:{value:a.row.credits,callback:function(e){t.$set(a.row,"credits",e)},expression:"scope.row.credits"}})]}}])})],1)],1)])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row org"},[a("div",{staticClass:"columnTitle"},[a("span",[this._v("业务机构")])]),this._v(" "),a("div",{staticClass:"columnContent"},[a("span",[this._v("身康大药房")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"columnTitle"},[a("span",[this._v("活动名称")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"columnTitle"},[a("span",[this._v("活动日期")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"columnTitle"},[a("span")])}]};var o=e("VU/8")({name:"activityDetail",data:function(){return{activityPeriod:"",activityName:"",tableData:[{material:{no:"01010204001",name:"阿司匹林肠溶片",dosage:"50mg*25片*3（片剂）",unit:"盒",company:"大同市利群药业有限责任公司"},amount:"1",credits:"100"},{material:{no:"01010204001",name:"阿司匹林肠溶片",dosage:"50mg*25片*3（片剂）",unit:"盒",company:"大同市利群药业有限责任公司"},amount:"1",credits:"100"}],multipleSelection:[]}},methods:{handleSelectionChange:function(t){this.multipleSelection=t},getAmountsChange:function(t,a){this.tableData[a]=t},getIntegralChange:function(t,a){this.tableData[a]=t},editColumn:function(){}}},i,!1,function(t){e("jF7h")},"data-v-56163982",null);a.default=o.exports},jF7h:function(t,a,e){var i=e("C/0R");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("05aeb0ac",i,!0,{})}});
//# sourceMappingURL=10.1ca77ab33fe10af01405.js.map