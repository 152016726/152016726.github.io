webpackJsonp([7],{"34po":function(t,e,a){var l=a("sfRp");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a("rjj0")("2eec3356",l,!0,{})},EjV5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("lHA8"),r=a.n(l),o=a("c/Tr"),i=a.n(o),n={name:"Dashboard",data:function(){return{code:"",category:"",state:"",brand:"",factory:"",area:"",days:"",tableData:[{goodsCode:"01010204001",nationCode:"A12A020301",approval:" 国药准字H14022744",categoryName:"阿司匹林肠溶片",materialCategory:"药品-西药-非处方药",brand:"仁和",size:"50mg*25片*3板",unit:"盒",price:"¥ 29.90",factory:" 大同市利群药业有限公司",area:"山西省大同市湖东经济开发区",time:"24月",specialCategory:"麻醉药品",goodsState:"有效"},{goodsCode:"01010204001",nationCode:"A12A020301",approval:" 国药准字H14022744",categoryName:"阿司匹林肠溶片",materialCategory:"药品-西药-非处方药",brand:"仁和",size:"50mg*25片*3板",unit:"盒",price:"¥ 29.90",factory:" 大同市利群药业有限公司",area:"山西省大同市湖东经济开发区",time:"24月",specialCategory:"精神药品",goodsState:"已冻结"},{goodsCode:"01010204001",nationCode:"A12A020301",approval:" 国药准字H14022744",categoryName:"阿司匹林肠溶片",materialCategory:"药品-西药-非处方药",brand:"仁和",size:"50mg*25片*3板",unit:"盒",price:"¥ 29.90",factory:" 大同市利群药业有限公司",area:"山西省大同市湖东经济开发区",time:"24月",specialCategory:"毒性药品",goodsState:"停止销售"},{goodsCode:"01010204001",nationCode:"A12A020301",approval:" 国药准字H14022744",categoryName:"阿司匹林肠溶片",materialCategory:"药品-西药-非处方药",brand:"仁和",size:"50mg*25片*3板",unit:"盒",price:"¥ 29.90",factory:" 大同市利群药业有限公司",area:"山西省大同市湖东经济开发区",time:"24月",specialCategory:"放射药品",goodsState:"停止采购"}],multipleSelection:[],filterObj:{}}},computed:{isShowTable:function(){return"/baseInfo/baseList"===this.$route.fullPath}},methods:{handleSelectionChange:function(t){this.multipleSelection=t},handle_print:function(){window.print()},handle_export:function(){console.log("导出")},filterDataset:function(){var t={};for(var e in this.tableData.forEach(function(e){for(var a in e)t[a]?t[a].push(e[a]):t[a]=[e[a]]}),t){var a=i()(new r.a(t[e]));t[e]=a.map(function(t){return{text:t,value:t}})}this.filterObj=t},filterTag:function(t,e,a){return e[a.property]===t},handleEdit:function(t,e){this.$router.push({name:"goodsDetail"})},handleDelete:function(t,e){this.tableData.splice(t,1)}},mounted:function(){this.filterDataset()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container page-container"},[t.isShowTable?a("div",[a("div",{staticClass:"searchTitle"},[a("el-input",{attrs:{placeholder:"请输入商品编码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t._v(" "),a("el-select",{attrs:{placeholder:"请选择物料类别"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),t._v(" "),a("el-select",{attrs:{placeholder:"请选择商品状态"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),t._v(" "),a("el-select",{attrs:{placeholder:"请选择品牌"},model:{value:t.brand,callback:function(e){t.brand=e},expression:"brand"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),t._v(" "),a("el-select",{attrs:{placeholder:"请选择生产厂家"},model:{value:t.factory,callback:function(e){t.factory=e},expression:"factory"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),t._v(" "),a("el-select",{attrs:{placeholder:"请选择产地"},model:{value:t.area,callback:function(e){t.area=e},expression:"area"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),t._v(" "),a("el-select",{attrs:{placeholder:"输入保质期数"},model:{value:t.days,callback:function(e){t.days=e},expression:"days"}},[a("el-option",{attrs:{label:"测试",value:"测试"}})],1),t._v(" "),a("el-button",{staticClass:"search-btn",attrs:{type:"primary"}},[t._v("搜索")])],1),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"goods-form"},[a("div",{staticClass:"goods-handle clearfix"},[a("el-button",{staticClass:"fl",attrs:{type:"primary"}},[t._v("添加")]),t._v(" "),a("el-button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.handle_print}},[t._v("打印")]),t._v(" "),a("el-button",{staticClass:"fr",attrs:{type:"primary"},on:{click:t.handle_export}},[t._v("导出")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsCode",sortable:"",filters:t.filterObj.goodsCode,"filter-method":t.filterTag,label:"商品编码",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nationCode",label:"国际条码",sortable:"",filters:t.filterObj.nationCode,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"approval",label:"批准文号",sortable:"",filters:t.filterObj.approval,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"categoryName",label:"品名全称",sortable:"",filters:t.filterObj.categoryName,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialCategory",label:"物料类型",sortable:"",filters:t.filterObj.materialCategory,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌",sortable:"",filters:t.filterObj.brand,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"size",label:"主规格",sortable:"",filters:t.filterObj.size,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"主单位",sortable:"",filters:t.filterObj.unit,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"零售价",sortable:"",filters:t.filterObj.price,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"factory",label:"生产厂家",sortable:"",filters:t.filterObj.factory,"filter-method":t.filterTag,width:"120","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"area",label:"产地",sortable:"",filters:t.filterObj.area,"filter-method":t.filterTag,width:"120","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"保质期",sortable:"",filters:t.filterObj.time,"filter-method":t.filterTag,width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specialCategory",label:"特殊类别",fixed:"right",sortable:"",filters:t.filterObj.specialCategory,"filter-method":t.filterTag,width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"}},[t._v(t._s(e.row.specialCategory))])]}}],null,!1,836874774)}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsState",label:"商品状态",sortable:"",filters:t.filterObj.goodsState,"filter-method":t.filterTag,fixed:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v(t._s(e.row.goodsState))])]}}],null,!1,104161783)}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.handleEdit(e.$index,e.row)}}},[t._v("编辑\n            ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除\n            ")])]}}],null,!1,3699447064)})],1)],1)]):t._e(),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")(n,s,!1,function(t){a("34po")},"data-v-b93c465c",null);e.default=c.exports},sfRp:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".dashboard-container[data-v-b93c465c]{width:100%;background-color:#fff}.dashboard-container .searchTitle[data-v-b93c465c]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:10px}.dashboard-container .searchTitle .el-input[data-v-b93c465c]{width:auto}.dashboard-container .searchTitle .el-input[data-v-b93c465c],.dashboard-container .searchTitle .el-select[data-v-b93c465c]{margin-top:10px;margin-left:10px;border:1px solid #ddd}.dashboard-container .searchTitle .search-btn[data-v-b93c465c]{margin-top:10px;margin-left:10px;height:30px;padding:0 50px}.dashboard-container .goods-form[data-v-b93c465c]{padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.dashboard-container .goods-form .goods-handle[data-v-b93c465c]{margin-bottom:20px}.dashboard-container .goods-form .el-table[data-v-b93c465c] .el-table__row{min-height:0;transition:min-height 2s ease;-moz-transition:min-height 2s ease;-webkit-transition:min-height 2s ease;-o-transition:min-height 2s ease}.dashboard-text[data-v-b93c465c]{font-size:30px;line-height:46px}",""])}});