(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1092:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a.n(r),o={metaInfo:{title:"Report Providers"},data:function(){return{isLoading:!0,serverParams:{sort:{field:"id",type:"desc"},page:1,perPage:10},limit:"10",search:"",totalRows:"",providers:[],provider:{}}},computed:{columns:function(){return[{label:this.$t("SupplierCode"),field:"code",tdClass:"text-left",thClass:"text-left"},{label:this.$t("SupplierName"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Phone"),field:"phone",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Purchases"),field:"total_purchase",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("TotalAmount"),field:"total_amount",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Paid"),field:"total_paid",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Due"),field:"due",type:"decimal",tdClass:"text-left",thClass:"text-left",sortable:!1},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Provider_Report(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Provider_Report(1))},onSortChange:function(t){this.updateParams({sort:{type:t[0].type,field:t[0].field}}),this.Get_Provider_Report(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Provider_Report(this.serverParams.page)},formatNumber:function(t,e){var a=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return a[0];var r=a[1]||"";if(r.length>e)return"".concat(a[0],".").concat(r.substr(0,e));for(;r.length<e;)r+="0";return"".concat(a[0],".").concat(r)},Get_Provider_Report:function(t){var e=this;s.a.start(),s.a.set(.1),axios.get("report/provider?page="+t+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.providers=t.data.report,e.totalRows=t.data.totalRows,s.a.done(),e.isLoading=!1})).catch((function(t){s.a.done(),setTimeout((function(){e.isLoading=!1}),500)}))}},created:function(){this.Get_Provider_Report(1)}},i=a(2),l=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:t.$t("SuppliersReport"),folder:t.$t("Reports")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("b-card",{staticClass:"wrapper"},[a("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.providers,"search-options":{placeholder:t.$t("Search_this_table"),enabled:!0},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"tableOne table-hover vgt-table mt-4"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch},scopedSlots:t._u([{key:"table-row",fn:function(e){return["actions"==e.column.field?a("span",[a("router-link",{attrs:{title:"Report",to:"/app/reports/detail_supplier/"+e.row.id}},[a("b-button",{attrs:{variant:"primary"}},[t._v(t._s(t.$t("Reports")))])],1)],1):t._e()]}}],null,!1,3233719127)})],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);