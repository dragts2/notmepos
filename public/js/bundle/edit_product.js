(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1133:function(t,e,a){"use strict";a.r(e);var r=a(112),o=a(110),s=a.n(o),i=a(0),n=a.n(i);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var r,o,s=[],i=!0,n=!1;try{for(a=a.call(t);!(i=(r=a.next()).done)&&(s.push(r.value),!e||s.length!==e);i=!0);}catch(t){n=!0,o=t}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var d={metaInfo:{title:"Edit Product"},data:function(){return{tag:"",len:8,images:[],imageArray:[],change:!1,isLoading:!0,SubmitProcessing:!1,data:new FormData,categories:[],Subcategories:[],units:[],units_sub:[],brands:[],roles:{},variants:[],product:{name:"",code:"",Type_barcode:"",cost:"",price:"",brand_id:"",category_id:"",TaxNet:"",tax_method:"1",unit_id:"",unit_sale_id:"",unit_purchase_id:"",stock_alert:"",image:"",note:"",is_variant:!1},code_exist:""}},components:{VueUploadMultipleImage:r.a,VueTagsInput:s.a},methods:{Submit_Product:function(){var t=this;this.$refs.Edit_Product.validate().then((function(e){e?t.Update_Product():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},getValidationState:function(t){var e=t.dirty,a=t.validated,r=t.valid;return e||a?void 0===r?null:r:null},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},showNotifDuplicate:function(){this.makeToast("warning",this.$t("VariantDuplicate"),this.$t("Warning"))},uploadImageSuccess:function(t,e,a,r){this.images=a},beforeRemove:function(t,e,a){1==confirm("remove image")&&(this.images.splice(t,1),e())},GetElements:function(){var t=this,e=this.$route.params.id;axios.get("Products/".concat(e,"/edit")).then((function(e){t.product=e.data.product,t.variants=e.data.product.ProductVariant,t.images=e.data.product.images,t.categories=e.data.categories,t.brands=e.data.brands,t.units=e.data.units,t.units_sub=e.data.units_sub,t.Subcategories=e.data.Subcategories,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))},Get_Units_SubBase:function(t){var e=this;axios.get("Get_Units_SubBase?id="+t).then((function(t){var a=t.data;return e.units_sub=a}))},Selected_Unit:function(t){this.units_sub=[],this.product.unit_sale_id="",this.product.unit_purchase_id="",this.Get_Units_SubBase(t)},Update_Product:function(){var t=this;n.a.start(),n.a.set(.1);var e=this;if(e.SubmitProcessing=!0,e.product.is_variant&&e.variants.length<=0&&(e.product.is_variant=!1),Object.entries(e.product).forEach((function(t){var a=c(t,2),r=a[0],o=a[1];e.data.append(r,o)})),e.variants.length)for(var a=0;a<e.variants.length;a++)Object.entries(e.variants[a]).forEach((function(t){var r=c(t,2),o=r[0],s=r[1];e.data.append("variants["+a+"]["+o+"]",s)}));if(e.images.length>0)for(var r=0;r<e.images.length;r++)Object.entries(e.images[r]).forEach((function(t){var a=c(t,2),o=a[0],s=a[1];e.data.append("images["+r+"]["+o+"]",s)}));e.data.append("_method","put"),axios.post("Products/"+this.product.id,e.data).then((function(a){n.a.done(),e.SubmitProcessing=!1,t.$router.push({name:"index_products"}),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success"))})).catch((function(a){a.errors.code.length>0&&(e.code_exist=a.errors.code[0]),n.a.done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),e.SubmitProcessing=!1}))}},created:function(){this.GetElements(),this.imageArray=[],this.images=[]}},u=a(2),p=Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"Update Product",folder:t.$t("Products")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("validation-observer",{ref:"Edit_Product"},[a("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.Submit_Product.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{md:"8"}},[a("b-card",[a("b-card-body",[a("b-row",[a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"name",rules:{required:!0,min:3,max:55}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Name_product")}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"name-feedback",label:"name",placeholder:t.$t("Enter_Name_Product")},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"name-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2669341686)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Code Product",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("CodeProduct")}},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.code,expression:"product.code"}],staticClass:"form-control",attrs:{state:t.getValidationState(e),"aria-describedby":"CodeProduct-feedback",type:"text"},domProps:{value:t.product.code},on:{input:function(e){e.target.composing||t.$set(t.product,"code",e.target.value)}}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"CodeProduct-feedback"}},[t._v(t._s(e.errors[0]))])],1),t._v(" "),a("span",[t._v(t._s(t.$t("Scan_your_barcode_and_select_the_correct_symbology_below")))]),t._v(" "),""!=t.code_exist?a("b-alert",{staticClass:"error mt-1",attrs:{show:"",variant:"danger"}},[t._v(t._s(t.code_exist))]):t._e()],1)]}}],null,!1,1408029394)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"category",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,o=e.errors;return a("b-form-group",{attrs:{label:t.$t("Categorie")}},[a("v-select",{class:{"is-invalid":!!o.length},attrs:{state:!o[0]&&(!!r||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Category"),options:t.categories.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.product.category_id,callback:function(e){t.$set(t.product,"category_id",e)},expression:"product.category_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)}}],null,!1,442498797)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("b-form-group",{attrs:{label:t.$t("Brand")}},[a("v-select",{attrs:{placeholder:t.$t("Choose_Brand"),reduce:function(t){return t.value},options:t.brands.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.product.brand_id,callback:function(e){t.$set(t.product,"brand_id",e)},expression:"product.brand_id"}})],1)],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Barcode Symbology",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,o=e.errors;return a("b-form-group",{attrs:{label:t.$t("BarcodeSymbology")}},[a("v-select",{class:{"is-invalid":!!o.length},attrs:{state:!o[0]&&(!!r||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Symbology"),options:[{label:"Code 128",value:"CODE128"},{label:"Code 39",value:"CODE39"},{label:"EAN8",value:"EAN8"},{label:"EAN13",value:"EAN13"},{label:"UPC",value:"UPC"}]},model:{value:t.product.Type_barcode,callback:function(e){t.$set(t.product,"Type_barcode",e)},expression:"product.Type_barcode"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)}}],null,!1,4092838316)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Product Cost",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("ProductCost")}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"ProductCost-feedback",label:"Cost",placeholder:t.$t("Enter_Product_Cost")},model:{value:t.product.cost,callback:function(e){t.$set(t.product,"cost",e)},expression:"product.cost"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"ProductCost-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1613947113)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Product Price",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("ProductPrice")}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"ProductPrice-feedback",label:"Price",placeholder:t.$t("Enter_Product_Price")},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"ProductPrice-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,3709170025)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Unit Product",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,o=e.errors;return a("b-form-group",{attrs:{label:t.$t("UnitProduct")}},[a("v-select",{staticClass:"required",class:{"is-invalid":!!o.length},attrs:{state:!o[0]&&(!!r||null),required:"",placeholder:t.$t("Choose_Unit_Product"),reduce:function(t){return t.value},options:t.units.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Unit},model:{value:t.product.unit_id,callback:function(e){t.$set(t.product,"unit_id",e)},expression:"product.unit_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)}}],null,!1,748547594)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Unit Sale",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,o=e.errors;return a("b-form-group",{attrs:{label:t.$t("UnitSale")}},[a("v-select",{class:{"is-invalid":!!o.length},attrs:{state:!o[0]&&(!!r||null),placeholder:t.$t("Choose_Unit_Sale"),reduce:function(t){return t.value},options:t.units_sub.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.product.unit_sale_id,callback:function(e){t.$set(t.product,"unit_sale_id",e)},expression:"product.unit_sale_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)}}],null,!1,616760917)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Unit Purchase",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,o=e.errors;return a("b-form-group",{attrs:{label:t.$t("UnitPurchase")}},[a("v-select",{class:{"is-invalid":!!o.length},attrs:{state:!o[0]&&(!!r||null),placeholder:t.$t("Choose_Unit_Purchase"),reduce:function(t){return t.value},options:t.units_sub.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.product.unit_purchase_id,callback:function(e){t.$set(t.product,"unit_purchase_id",e)},expression:"product.unit_purchase_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)}}],null,!1,3136313157)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Stock Alert",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("StockAlert")}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"StockAlert-feedback",label:"Stock alert",placeholder:t.$t("Enter_Stock_alert")},model:{value:t.product.stock_alert,callback:function(e){t.$set(t.product,"stock_alert",e)},expression:"product.stock_alert"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"StockAlert-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1999382198)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("OrderTax")}},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.TaxNet,expression:"product.TaxNet"}],staticClass:"form-control",attrs:{state:t.getValidationState(e),"aria-describedby":"OrderTax-feedback",type:"number"},domProps:{value:t.product.TaxNet},on:{input:function(e){e.target.composing||t.$set(t.product,"TaxNet",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[t._v("%")])])]),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2796358256)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{lg:"6",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Tax Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,o=e.errors;return a("b-form-group",{attrs:{label:t.$t("TaxMethod")}},[a("v-select",{class:{"is-invalid":!!o.length},attrs:{state:!o[0]&&(!!r||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),options:[{label:"Exclusive",value:"1"},{label:"Inclusive",value:"2"}]},model:{value:t.product.tax_method,callback:function(e){t.$set(t.product,"tax_method",e)},expression:"product.tax_method"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(o[0]))])],1)}}],null,!1,2612488639)})],1),t._v(" "),a("b-col",{staticClass:"mb-2",attrs:{md:"12"}},[a("b-form-group",{attrs:{label:t.$t("Note")}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.note,expression:"product.note"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.product.note},on:{input:function(e){e.target.composing||t.$set(t.product,"note",e.target.value)}}})])],1)],1)],1)],1)],1),t._v(" "),a("b-col",{attrs:{md:"4"}},[a("b-card",[a("div",{staticClass:"card-header"},[a("h5",[t._v(t._s(t.$t("MultipleImage")))])]),t._v(" "),a("div",{staticClass:"card-body"},[a("b-row",{staticClass:"form-group"},[a("b-col",{attrs:{md:"12 mb-5"}},[a("div",{staticClass:"d-flex justify-content-center",attrs:{id:"my-strictly-unique-vue-upload-multiple-image"}},[a("vue-upload-multiple-image",{attrs:{dragText:"Drag & Drop Multiple images For product",dropText:"Drag & Drop image",browseText:"(or) Select",accept:"image/gif,image/jpeg,image/png,image/bmp,image/jpg",primaryText:"success",markIsPrimaryText:"success",popupText:"have been successfully uploaded","data-images":t.images,idUpload:"myIdUpload",showEdit:!1},on:{"upload-success":t.uploadImageSuccess,"before-remove":t.beforeRemove}})],1)]),t._v(" "),a("b-col",{attrs:{md:"12 mb-2"}},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"checkbox checkbox-outline-primary"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.is_variant,expression:"product.is_variant"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.product.is_variant)?t._i(t.product.is_variant,null)>-1:t.product.is_variant},on:{change:function(e){var a=t.product.is_variant,r=e.target,o=!!r.checked;if(Array.isArray(a)){var s=t._i(a,null);r.checked?s<0&&t.$set(t.product,"is_variant",a.concat([null])):s>-1&&t.$set(t.product,"is_variant",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.product,"is_variant",o)}}}),t._v(" "),a("span",[t._v(t._s(t.$t("ProductHasMultiVariants")))]),t._v(" "),a("span",{staticClass:"checkmark"})])])]),t._v(" "),a("b-col",{directives:[{name:"show",rawName:"v-show",value:t.product.is_variant,expression:"product.is_variant"}],attrs:{md:"12 mb-5"}},[a("vue-tags-input",{staticClass:"tag-custom text-15",attrs:{placeholder:"+ add",tags:t.variants},on:{"adding-duplicate":function(e){return t.showNotifDuplicate()},"tags-changed":function(e){return t.variants=e}},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}})],1)],1)],1)])],1),t._v(" "),a("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[a("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[t._v(t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null);e.default=p.exports}}]);