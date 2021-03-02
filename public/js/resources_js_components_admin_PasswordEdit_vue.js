(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_PasswordEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/PasswordEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/PasswordEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      passwordchange: {}
    };
  },
  mounted: function mounted() {
    if (this.$route.name == 'adminpasswordedit') {
      this.passwordchange.id = this.$route.params.id;
      console.log(this.passwordchange);
    }
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      console.log(this.passwordchange);
      this.$swal.showLoading();

      if (this.$route.name == 'adminpasswordedit') {
        axios.post('/api/account/changepasswordadmin', this.passwordchange).then(function () {
          _this.$swal.close();

          _this.$swal.fire({
            title: 'Success',
            text: "Password Berhasil Diubah",
            icon: 'success'
          });
        })["catch"](function (error) {
          if (error.response.data.errors.old) {
            _this.$swal.fire({
              title: 'Gagal',
              text: "Password Lama Anda salah",
              icon: 'error'
            });
          } else {
            _this.$swal.fire({
              title: 'Gagal',
              text: "Pastikan kedua input password sudah sama dan terisi",
              icon: 'error'
            });
          }
        });
      } else {
        axios.post('/api/account/changepassword', this.passwordchange).then(function () {
          _this.$swal.close();

          _this.$swal.fire({
            title: 'Success',
            text: "Password Berhasil Diubah",
            icon: 'success'
          });
        })["catch"](function (error) {
          if (error.response.data.errors.old) {
            _this.$swal.fire({
              title: 'Gagal',
              text: "Password Lama Anda salah",
              icon: 'error'
            });
          } else {
            _this.$swal.fire({
              title: 'Gagal',
              text: "Pastikan kedua input password sudah sama dan terisi",
              icon: 'error'
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/PasswordEdit.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/PasswordEdit.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PasswordEdit_vue_vue_type_template_id_38b9d5a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordEdit.vue?vue&type=template&id=38b9d5a0& */ "./resources/js/components/admin/PasswordEdit.vue?vue&type=template&id=38b9d5a0&");
/* harmony import */ var _PasswordEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/PasswordEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PasswordEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PasswordEdit_vue_vue_type_template_id_38b9d5a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _PasswordEdit_vue_vue_type_template_id_38b9d5a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/PasswordEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/PasswordEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/PasswordEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/PasswordEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/PasswordEdit.vue?vue&type=template&id=38b9d5a0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/PasswordEdit.vue?vue&type=template&id=38b9d5a0& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordEdit_vue_vue_type_template_id_38b9d5a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordEdit_vue_vue_type_template_id_38b9d5a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordEdit_vue_vue_type_template_id_38b9d5a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordEdit.vue?vue&type=template&id=38b9d5a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/PasswordEdit.vue?vue&type=template&id=38b9d5a0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/PasswordEdit.vue?vue&type=template&id=38b9d5a0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/PasswordEdit.vue?vue&type=template&id=38b9d5a0& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "p-3 p-md-0" }, [
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "col-md-4" }),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white col-md-4 p-4 border-rounded" }, [
        _c(
          "h4",
          { staticClass: "text-center font-weight-bold border-rounded" },
          [_vm._v("Edit Password")]
        ),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { action: "POST" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.changePassword()
              }
            }
          },
          [
            this.$route.name != "adminpasswordedit"
              ? _c("div", [
                  _c("label", { attrs: { for: "inputPasswordold" } }, [
                    _vm._v("Masukkan Password Lama Anda")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.passwordchange.old,
                        expression: "passwordchange.old"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      id: "inputPasswordold",
                      "aria-describedby": "passwordHelpBlock"
                    },
                    domProps: { value: _vm.passwordchange.old },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.passwordchange, "old", $event.target.value)
                      }
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("label", { attrs: { for: "inputPasswordnew" } }, [
              _vm._v("Masukkan Password Baru Anda")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.passwordchange.newpassword,
                  expression: "passwordchange.newpassword"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                id: "inputPasswordnew",
                "aria-describedby": "passwordHelpBlock"
              },
              domProps: { value: _vm.passwordchange.newpassword },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.passwordchange,
                    "newpassword",
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "inputPasswordnewconf" } }, [
              _vm._v("Ulangi Password Baru Anda")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.passwordchange.confirmnewpassword,
                  expression: "passwordchange.confirmnewpassword"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                id: "inputPasswordnewconf",
                "aria-describedby": "passwordHelpBlock"
              },
              domProps: { value: _vm.passwordchange.confirmnewpassword },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.passwordchange,
                    "confirmnewpassword",
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn btn-primary mt-3 rounded-pill ml-auto mr-auto d-block",
                attrs: { type: "submit" }
              },
              [_vm._v("Ubah Password")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);