(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1105:function(e,t,a){"use strict";a.r(t);var s=a(6),r=a.n(s),i=a(4),n=a(0),o=a.n(n),l=a(7);a(16);function u(e,t,a,s,r,i,n){try{var o=e[i](n),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(s,r)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={metaInfo:{title:"Users"},data:function(){return{editmode:!1,isLoading:!0,SubmitProcessing:!1,email_exist:"",serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},totalRows:"",search:"",limit:"10",Filter_Name:"",Filter_Email:"",Filter_status:"",Filter_Phone:"",permissions:{},users:[],roles:[],data:new FormData,user:{firstname:"",lastname:"",username:"",password:"",NewPassword:null,email:"",phone:"",statut:"",role_id:"",avatar:""}}},computed:c(c({},Object(i.c)(["currentUserPermissions"])),{},{columns:function(){return[{label:this.$t("Firstname"),field:"firstname",tdClass:"text-left",thClass:"text-left"},{label:this.$t("lastname"),field:"lastname",tdClass:"text-left",thClass:"text-left"},{label:this.$t("username"),field:"username",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Email"),field:"email",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Phone"),field:"phone",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Status"),field:"statut",html:!0,sortable:!1,tdClass:"text-center",thClass:"text-center"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{Submit_User:function(){var e=this;this.$refs.Create_User.validate().then((function(t){t?e.editmode?e.Update_User():e.Create_User():e.makeToast("danger",e.$t("Please_fill_the_form_correctly"),e.$t("Failed"))}))},updateParams:function(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange:function(e){var t=e.currentPage;this.serverParams.page!==t&&(this.updateParams({page:t}),this.Get_Users(t))},onPerPageChange:function(e){var t=e.currentPerPage;this.limit!==t&&(this.limit=t,this.updateParams({page:1,perPage:t}),this.Get_Users(1))},onSortChange:function(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Users(this.serverParams.page)},onSearch:function(e){this.search=e.searchTerm,this.Get_Users(this.serverParams.page)},getValidationState:function(e){var t=e.dirty,a=e.validated,s=e.valid;return t||a?void 0===s?null:s:null},Reset_Filter:function(){this.search="",this.Filter_Name="",this.Filter_status="",this.Filter_Phone="",this.Filter_Email="",this.Get_Users(this.serverParams.page)},makeToast:function(e,t,a){this.$root.$bvToast.toast(t,{title:a,variant:e,solid:!0})},isChecked:function(e){var t=this;axios.put("users/Activated/"+e.id,{statut:e.statut,id:e.id}).then((function(a){a.data.success?e.statut?(e.statut=1,t.makeToast("success",t.$t("ActivateUser"),t.$t("Success"))):(e.statut=0,t.makeToast("success",t.$t("DisActivateUser"),t.$t("Success"))):(e.statut=1,t.makeToast("warning",t.$t("Delete.Therewassomethingwronge"),t.$t("Warning")))})).catch((function(a){e.statut=1,t.makeToast("warning",t.$t("Delete.Therewassomethingwronge"),t.$t("Warning"))}))},Users_PDF:function(){var e=new l.default("p","pt");e.autoTable([{title:"First Name",dataKey:"firstname"},{title:"Last Name",dataKey:"lastname"},{title:"Username",dataKey:"username"},{title:"Email",dataKey:"email"},{title:"Phone",dataKey:"phone"}],this.users),e.text("User List",40,25),e.save("User_List.pdf")},Users_Excel:function(){o.a.start(),o.a.set(.1),axios.get("users/export/Excel",{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download","List_Users.xlsx"),document.body.appendChild(a),a.click(),setTimeout((function(){return o.a.done()}),500)})).catch((function(){setTimeout((function(){return o.a.done()}),500)}))},setToStrings:function(){null===this.Filter_status&&(this.Filter_status="")},Get_Users:function(e){var t=this;o.a.start(),o.a.set(.1),this.setToStrings(),axios.get("users?page="+e+"&name="+this.Filter_Name+"&statut="+this.Filter_status+"&phone="+this.Filter_Phone+"&email="+this.Filter_Email+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(e){t.users=e.data.users,t.roles=e.data.roles,t.totalRows=e.data.totalRows,o.a.done(),t.isLoading=!1})).catch((function(e){o.a.done(),setTimeout((function(){t.isLoading=!1}),500)}))},New_User:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_User")},Edit_User:function(e){this.Get_Users(this.serverParams.page),this.reset_Form(),this.user=e,this.user.NewPassword=null,this.editmode=!0,this.$bvModal.show("New_User")},onFileSelected:function(e){var t,a=this;return(t=r.a.mark((function t(){var s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$refs.Avatar.validate(e);case 2:s=t.sent,i=s.valid,a.user.avatar=i?e.target.files[0]:"";case 5:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(s,r){var i=t.apply(e,a);function n(e){u(i,s,r,n,o,"next",e)}function o(e){u(i,s,r,n,o,"throw",e)}n(void 0)}))})()},Create_User:function(){var e=this,t=this;t.SubmitProcessing=!0,t.data.append("firstname",t.user.firstname),t.data.append("lastname",t.user.lastname),t.data.append("username",t.user.username),t.data.append("email",t.user.email),t.data.append("password",t.user.password),t.data.append("phone",t.user.phone),t.data.append("role",t.user.role_id),t.data.append("avatar",t.user.avatar),axios.post("users",t.data).then((function(a){t.SubmitProcessing=!1,Fire.$emit("Event_User"),e.makeToast("success",e.$t("Create.TitleUser"),e.$t("Success"))})).catch((function(a){t.SubmitProcessing=!1,a.errors.email.length>0&&(t.email_exist=a.errors.email[0]),e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},Update_User:function(){var e=this,t=this;t.SubmitProcessing=!0,t.data.append("firstname",t.user.firstname),t.data.append("lastname",t.user.lastname),t.data.append("username",t.user.username),t.data.append("email",t.user.email),t.data.append("NewPassword",t.user.NewPassword),t.data.append("phone",t.user.phone),t.data.append("role",t.user.role_id),t.data.append("statut",t.user.statut),t.data.append("avatar",t.user.avatar),t.data.append("_method","put"),axios.post("users/"+this.user.id,t.data).then((function(a){e.makeToast("success",e.$t("Update.TitleUser"),e.$t("Success")),Fire.$emit("Event_User"),t.SubmitProcessing=!1})).catch((function(a){a.errors.email.length>0&&(t.email_exist=a.errors.email[0]),e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed")),t.SubmitProcessing=!1}))},reset_Form:function(){this.user={id:"",firstname:"",lastname:"",username:"",password:"",NewPassword:null,email:"",phone:"",statut:"",role_id:"",avatar:""},this.email_exist=""},Remove_User:function(e){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(a){a.value&&axios.delete("users/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.UserDeleted"),"success"),Fire.$emit("Delete_User")})).catch((function(){t.$swal(t.$t("Delete.Failed"),"this User already linked with other operation","warning")}))}))}},created:function(){var e=this;this.Get_Users(1),Fire.$on("Event_User",(function(){setTimeout((function(){e.Get_Users(e.serverParams.page),e.$bvModal.hide("New_User")}),500)})),Fire.$on("Delete_User",(function(){setTimeout((function(){e.Get_Users(e.serverParams.page)}),500)}))}},f=a(2),b=Object(f.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:e.$t("UserManagement"),folder:e.$t("Users")}}),e._v(" "),e.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):a("div",[a("vue-good-table",{attrs:{mode:"remote",columns:e.columns,totalRows:e.totalRows,rows:e.users,"search-options":{enabled:!0,placeholder:e.$t("Search_this_table")},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":e.onPageChange,"on-per-page-change":e.onPerPageChange,"on-sort-change":e.onSortChange,"on-search":e.onSearch},scopedSlots:e._u([{key:"table-row",fn:function(t){return["actions"==t.column.field?a("span",[e.currentUserPermissions&&e.currentUserPermissions.includes("users_edit")?a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit"},on:{click:function(a){return e.Edit_User(t.row)}}},[a("i",{staticClass:"i-Edit text-25 text-success"})]):e._e()]):"statut"==t.column.field?a("div",[a("label",{staticClass:"switch switch-primary mr-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.row.statut,expression:"props.row.statut"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.row.statut)?e._i(t.row.statut,null)>-1:t.row.statut},on:{change:[function(a){var s=t.row.statut,r=a.target,i=!!r.checked;if(Array.isArray(s)){var n=e._i(s,null);r.checked?n<0&&e.$set(t.row,"statut",s.concat([null])):n>-1&&e.$set(t.row,"statut",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(t.row,"statut",i)},function(a){return e.isChecked(t.row)}]}}),e._v(" "),a("span",{staticClass:"slider"})])]):e._e()]}}])},[a("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{variant:"outline-info m-1",size:"sm"}},[a("i",{staticClass:"i-Filter-2"}),e._v("\n          "+e._s(e.$t("Filter"))+"\n        ")]),e._v(" "),a("b-button",{attrs:{size:"sm",variant:"outline-success m-1"},on:{click:function(t){return e.Users_PDF()}}},[a("i",{staticClass:"i-File-Copy"}),e._v(" PDF\n        ")]),e._v(" "),a("b-button",{attrs:{size:"sm",variant:"outline-danger m-1"},on:{click:function(t){return e.Users_Excel()}}},[a("i",{staticClass:"i-File-Excel"}),e._v(" EXCEL\n        ")]),e._v(" "),e.currentUserPermissions&&e.currentUserPermissions.includes("users_add")?a("b-button",{attrs:{size:"sm",variant:"btn btn-primary btn-icon m-1"},on:{click:function(t){return e.New_User()}}},[a("i",{staticClass:"i-Add"}),e._v("\n          "+e._s(e.$t("Add"))+"\n        ")]):e._e()],1)])],1),e._v(" "),a("b-sidebar",{attrs:{id:"sidebar-right",title:e.$t("Filter"),"bg-variant":"white",right:"",shadow:""}},[a("div",{staticClass:"px-3 py-2"},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:e.$t("username")}},[a("b-form-input",{attrs:{label:"Code",placeholder:e.$t("username")},model:{value:e.Filter_Name,callback:function(t){e.Filter_Name=t},expression:"Filter_Name"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:e.$t("Phone")}},[a("b-form-input",{attrs:{label:"Phone",placeholder:e.$t("SearchByPhone")},model:{value:e.Filter_Phone,callback:function(t){e.Filter_Phone=t},expression:"Filter_Phone"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:e.$t("Email")}},[a("b-form-input",{attrs:{label:"Email",placeholder:e.$t("SearchByEmail")},model:{value:e.Filter_Email,callback:function(t){e.Filter_Email=t},expression:"Filter_Email"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:e.$t("Status")}},[a("v-select",{attrs:{reduce:function(e){return e.value},placeholder:e.$t("Choose_Status"),options:[{label:"Actif",value:"1"},{label:"Inactif",value:"0"}]},model:{value:e.Filter_status,callback:function(t){e.Filter_status=t},expression:"Filter_status"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-button",{attrs:{variant:"primary m-1",size:"sm",block:""},on:{click:function(t){return e.Get_Users(e.serverParams.page)}}},[a("i",{staticClass:"i-Filter-2"}),e._v("\n            "+e._s(e.$t("Filter"))+"\n          ")])],1),e._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-button",{attrs:{variant:"danger m-1",size:"sm",block:""},on:{click:function(t){return e.Reset_Filter()}}},[a("i",{staticClass:"i-Power-2"}),e._v("\n            "+e._s(e.$t("Reset"))+"\n          ")])],1)],1)],1)]),e._v(" "),a("validation-observer",{ref:"Create_User"},[a("b-modal",{attrs:{"hide-footer":"",size:"lg",id:"New_User",title:e.editmode?e.$t("Edit"):e.$t("Add")}},[a("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.Submit_User.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Firstname",rules:{required:!0,min:3,max:30}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-group",{attrs:{label:e.$t("Firstname")}},[a("b-form-input",{attrs:{state:e.getValidationState(t),"aria-describedby":"Firstname-feedback",label:"Firstname"},model:{value:e.user.firstname,callback:function(t){e.$set(e.user,"firstname",t)},expression:"user.firstname"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Firstname-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),e._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"lastname",rules:{required:!0,min:3,max:30}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-group",{attrs:{label:e.$t("lastname")}},[a("b-form-input",{attrs:{state:e.getValidationState(t),"aria-describedby":"lastname-feedback",label:"lastname"},model:{value:e.user.lastname,callback:function(t){e.$set(e.user,"lastname",t)},expression:"user.lastname"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"lastname-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),e._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"username",rules:{required:!0,min:3,max:30}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-group",{attrs:{label:e.$t("username")}},[a("b-form-input",{attrs:{state:e.getValidationState(t),"aria-describedby":"username-feedback",label:"username"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"username-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),e._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Phone",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-group",{attrs:{label:e.$t("Phone")}},[a("b-form-input",{attrs:{state:e.getValidationState(t),"aria-describedby":"Phone-feedback",label:"Phone"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Phone-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),e._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Email",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-group",{attrs:{label:e.$t("Email")}},[a("b-form-input",{attrs:{state:e.getValidationState(t),"aria-describedby":"Email-feedback",label:"Email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Email-feedback"}},[e._v(e._s(t.errors[0]))]),e._v(" "),""!=e.email_exist?a("b-alert",{staticClass:"error mt-1",attrs:{show:"",variant:"danger"}},[e._v(e._s(e.email_exist))]):e._e()],1)]}}])})],1),e._v(" "),e.editmode?e._e():a("b-col",{attrs:{md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"password",rules:{required:!0,min:6,max:14}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-group",{attrs:{label:e.$t("password")}},[a("b-form-input",{attrs:{state:e.getValidationState(t),"aria-describedby":"password-feedback",label:"password",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"password-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,2321465681)})],1),e._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"role",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.valid,r=t.errors;return a("b-form-group",{attrs:{label:e.$t("RoleName")}},[a("v-select",{class:{"is-invalid":!!r.length},attrs:{state:!r[0]&&(!!s||null),reduce:function(e){return e.value},placeholder:e.$t("PleaseSelect"),options:e.roles.map((function(e){return{label:e.name,value:e.id}}))},model:{value:e.user.role_id,callback:function(t){e.$set(e.user,"role_id",t)},expression:"user.role_id"}}),e._v(" "),a("b-form-invalid-feedback",[e._v(e._s(r[0]))])],1)}}])})],1),e._v(" "),a("b-col",{attrs:{md:"6",sm:"12"}},[a("validation-provider",{ref:"Avatar",attrs:{name:"Avatar",rules:"mimes:image/*|size:200"},scopedSlots:e._u([{key:"default",fn:function(t){t.validate;var s=t.valid,r=t.errors;return a("b-form-group",{attrs:{label:e.$t("UserImage")}},[a("input",{class:{"is-invalid":!!r.length},attrs:{state:!r[0]&&(!!s||null),label:"Choose Avatar",type:"file"},on:{change:e.onFileSelected}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Avatar-feedback"}},[e._v(e._s(r[0]))])],1)}}])})],1),e._v(" "),e.editmode?a("b-col",{attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"New password",rules:{min:6,max:14}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-group",{attrs:{label:e.$t("Newpassword")}},[a("b-form-input",{attrs:{state:e.getValidationState(t),"aria-describedby":"Nawpassword-feedback",placeholder:e.$t("LeaveBlank"),label:"New password"},model:{value:e.user.NewPassword,callback:function(t){e.$set(e.user,"NewPassword",t)},expression:"user.NewPassword"}}),e._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Nawpassword-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,1010016937)})],1):e._e(),e._v(" "),a("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[a("b-button",{attrs:{variant:"primary",type:"submit",disabled:e.SubmitProcessing}},[e._v(e._s(e.$t("submit")))]),e._v(" "),e.SubmitProcessing?e._m(0):e._e()],1)],1)],1)],1)],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null);t.default=b.exports}}]);