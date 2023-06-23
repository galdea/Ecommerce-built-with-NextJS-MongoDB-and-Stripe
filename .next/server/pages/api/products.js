"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ "(api)/./backend/config/dbConnect.js":
/*!*************************************!*\
  !*** ./backend/config/dbConnect.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dbConnect = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState >= 1) {\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", false);\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/buyitnow\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2NvbmZpZy9kYkNvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVk7SUFDaEIsSUFBSUQsNERBQW1CRSxDQUFDQyxjQUFjLEdBQUc7UUFDdkM7SUFDRjtJQUVBSCxtREFBWUksQ0FBQyxlQUFlO0lBQzVCSix1REFBZ0JLLENBQUNDLG9DQUFrQkU7QUFDckM7QUFFQSxpRUFBZVAsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1dGl0bm93Ly4vYmFja2VuZC9jb25maWcvZGJDb25uZWN0LmpzP2YyNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBkYkNvbm5lY3QgPSAoKSA9PiB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG1vbmdvb3NlLnNldChcInN0cmljdFF1ZXJ5XCIsIGZhbHNlKTtcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5EQl9VUkkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiZGJDb25uZWN0IiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJzZXQiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIkRCX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./backend/config/dbConnect.js\n");

/***/ }),

/***/ "(api)/./backend/controllers/productControllers.js":
/*!***************************************************!*\
  !*** ./backend/controllers/productControllers.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newProduct: () => (/* binding */ newProduct)\n/* harmony export */ });\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product */ \"(api)/./backend/models/product.js\");\n\nconst newProduct = async (req, res, next)=>{\n    const product = await _models_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(req.body);\n    res.status(200).json({\n        product\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2NvbnRyb2xsZXJzL3Byb2R1Y3RDb250cm9sbGVycy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUVqQyxNQUFNQyxhQUFhLE9BQU9DLEtBQUtDLEtBQUtDO0lBQ3pDLE1BQU1DLFVBQVUsTUFBTUwsdURBQU9BLENBQUNNLE9BQU9KLElBQUlLO0lBQ3pDSixJQUFJSyxPQUFPLEtBQUtDLEtBQUs7UUFDbkJKO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnV0aXRub3cvLi9iYWNrZW5kL2NvbnRyb2xsZXJzL3Byb2R1Y3RDb250cm9sbGVycy5qcz82ZmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9tb2RlbHMvcHJvZHVjdFwiO1xuXG5leHBvcnQgY29uc3QgbmV3UHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5jcmVhdGUocmVxLmJvZHkpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgcHJvZHVjdCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJuZXdQcm9kdWN0IiwicmVxIiwicmVzIiwibmV4dCIsInByb2R1Y3QiLCJjcmVhdGUiLCJib2R5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./backend/controllers/productControllers.js\n");

/***/ }),

/***/ "(api)/./backend/models/product.js":
/*!***********************************!*\
  !*** ./backend/models/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please enter product name\"\n        ]\n    },\n    description: {\n        type: String,\n        required: [\n            true,\n            \"Please enter product description\"\n        ]\n    },\n    price: {\n        type: Number,\n        required: [\n            true,\n            \"Please enter product price\"\n        ]\n    },\n    images: [\n        {\n            public_id: {\n                type: String\n            },\n            url: {\n                type: String\n            }\n        }\n    ],\n    category: {\n        type: String,\n        required: [\n            true,\n            \"Please enter product category\"\n        ],\n        enum: {\n            values: [\n                \"Electronics\",\n                \"Cameras\",\n                \"Laptops\",\n                \"Accessories\",\n                \"Headphones\",\n                \"Sports\"\n            ],\n            message: \"Please select correct category\"\n        }\n    },\n    seller: {\n        type: String,\n        required: [\n            true,\n            \"Please enter product seller\"\n        ]\n    },\n    stock: {\n        type: Number,\n        required: [\n            true,\n            \"Please enter product stock\"\n        ]\n    },\n    ratings: {\n        type: Number,\n        default: 0\n    },\n    reviews: [\n        {\n            rating: {\n                type: Number,\n                required: true\n            },\n            comment: {\n                type: String,\n                required: true\n            },\n            createdAt: {\n                type: Date,\n                default: Date.now\n            }\n        }\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL21vZGVscy9wcm9kdWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxnQkFBZ0IsSUFBSUQsd0RBQWVFLENBQUM7SUFDeENDLE1BQU07UUFDSkMsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7SUFDL0M7SUFDQUMsYUFBYTtRQUNYSCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFtQztJQUN0RDtJQUNBRSxPQUFPO1FBQ0xKLE1BQU1LO1FBQ05ILFVBQVU7WUFBQztZQUFNO1NBQTZCO0lBQ2hEO0lBQ0FJLFFBQVE7UUFDTjtZQUNFQyxXQUFXO2dCQUNUUCxNQUFNQztZQUNSO1lBQ0FPLEtBQUs7Z0JBQ0hSLE1BQU1DO1lBQ1I7UUFDRjtLQUNEO0lBRURRLFVBQVU7UUFDUlQsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBZ0M7UUFDakRRLE1BQU07WUFDSkMsUUFBUTtnQkFDTjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTthQUNEO1lBQ0RDLFNBQVM7UUFDWDtJQUNGO0lBQ0FDLFFBQVE7UUFDTmIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBOEI7SUFDakQ7SUFDQVksT0FBTztRQUNMZCxNQUFNSztRQUNOSCxVQUFVO1lBQUM7WUFBTTtTQUE2QjtJQUNoRDtJQUNBYSxTQUFTO1FBQ1BmLE1BQU1LO1FBQ05XLFNBQVM7SUFDWDtJQUNBQyxTQUFTO1FBQ1A7WUFDRUMsUUFBUTtnQkFDTmxCLE1BQU1LO2dCQUNOSCxVQUFVO1lBQ1o7WUFDQWlCLFNBQVM7Z0JBQ1BuQixNQUFNQztnQkFDTkMsVUFBVTtZQUNaO1lBQ0FrQixXQUFXO2dCQUNUcEIsTUFBTXFCO2dCQUNOTCxTQUFTSyxLQUFLQztZQUNoQjtRQUNGO0tBQ0Q7SUFDREYsV0FBVztRQUNUcEIsTUFBTXFCO1FBQ05MLFNBQVNLLEtBQUtDO0lBQ2hCO0FBQ0Y7QUFFQSxpRUFBZTFCLHdEQUFlMkIsQ0FBQ0MsV0FDN0I1QixxREFBYzZCLENBQUMsV0FBVzVCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXRpdG5vdy8uL2JhY2tlbmQvbW9kZWxzL3Byb2R1Y3QuanM/NDM3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHByb2R1Y3QgbmFtZVwiXSxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBwcm9kdWN0IGRlc2NyaXB0aW9uXCJdLFxuICB9LFxuICBwcmljZToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHByb2R1Y3QgcHJpY2VcIl0sXG4gIH0sXG4gIGltYWdlczogW1xuICAgIHtcbiAgICAgIHB1YmxpY19pZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgdXJsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcblxuICBjYXRlZ29yeToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHByb2R1Y3QgY2F0ZWdvcnlcIl0sXG4gICAgZW51bToge1xuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIFwiRWxlY3Ryb25pY3NcIixcbiAgICAgICAgXCJDYW1lcmFzXCIsXG4gICAgICAgIFwiTGFwdG9wc1wiLFxuICAgICAgICBcIkFjY2Vzc29yaWVzXCIsXG4gICAgICAgIFwiSGVhZHBob25lc1wiLFxuICAgICAgICBcIlNwb3J0c1wiLFxuICAgICAgXSxcbiAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIHNlbGVjdCBjb3JyZWN0IGNhdGVnb3J5XCIsXG4gICAgfSxcbiAgfSxcbiAgc2VsbGVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgcHJvZHVjdCBzZWxsZXJcIl0sXG4gIH0sXG4gIHN0b2NrOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgcHJvZHVjdCBzdG9ja1wiXSxcbiAgfSxcbiAgcmF0aW5nczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwLFxuICB9LFxuICByZXZpZXdzOiBbXG4gICAge1xuICAgICAgcmF0aW5nOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgY29tbWVudDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNyZWF0ZWRBdDoge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgY3JlYXRlZEF0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fFxuICBtb25nb29zZS5tb2RlbChcIlByb2R1Y3RcIiwgcHJvZHVjdFNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJOdW1iZXIiLCJpbWFnZXMiLCJwdWJsaWNfaWQiLCJ1cmwiLCJjYXRlZ29yeSIsImVudW0iLCJ2YWx1ZXMiLCJtZXNzYWdlIiwic2VsbGVyIiwic3RvY2siLCJyYXRpbmdzIiwiZGVmYXVsdCIsInJldmlld3MiLCJyYXRpbmciLCJjb21tZW50IiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsIm1vZGVscyIsIlByb2R1Y3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./backend/models/product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/backend/config/dbConnect */ \"(api)/./backend/config/dbConnect.js\");\n/* harmony import */ var _backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/backend/controllers/productControllers */ \"(api)/./backend/controllers/productControllers.js\");\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\n(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.post(_backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_2__.newProduct);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDcUI7QUFDbUI7QUFFdEUsTUFBTUcsVUFBVUgsbURBQUVBO0FBRWxCQyxxRUFBU0E7QUFFVEUsUUFBUUMsS0FBS0YsK0VBQVVBO0FBRXZCLGlFQUFlQyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnV0aXRub3cvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanM/NTk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9iYWNrZW5kL2NvbmZpZy9kYkNvbm5lY3RcIjtcbmltcG9ydCB7IG5ld1Byb2R1Y3QgfSBmcm9tIFwiQC9iYWNrZW5kL2NvbnRyb2xsZXJzL3Byb2R1Y3RDb250cm9sbGVyc1wiO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcblxuZGJDb25uZWN0KCk7XG5cbmhhbmRsZXIucG9zdChuZXdQcm9kdWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJuYyIsImRiQ29ubmVjdCIsIm5ld1Byb2R1Y3QiLCJoYW5kbGVyIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();