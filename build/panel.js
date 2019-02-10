/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _presents = __webpack_require__(3);

var _presents2 = _interopRequireDefault(_presents);

var _bookingbugConfiguratorJs = __webpack_require__(4);

var _bookingbugConfiguratorJs2 = _interopRequireDefault(_bookingbugConfiguratorJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// add a new menu item for the presents
_bookingbugConfiguratorJs2.default.addMenuItem({
  group: 'business',
  key: 'presents',
  roles: ['owner', 'admin', 'personal', 'user', 'parent'],
  label: 'Presents',
  sref: 'app.page.views',
  params: {
    view: 'present'
  }
});

// add new page to the custom pages
_bookingbugConfiguratorJs2.default.addPage('CustomPages', 'present', {
  style: 'tab',
  layout: [[{
    type: 'bb-present-panel',
    width: 12,
    index: 0,
    panel_params: {}
  }]]
});

var PresentController = function () {
  function PresentController($scope, bbAuthorisation, $stateParams) {
    _classCallCheck(this, PresentController);

    this.$scope = $scope;
    this.company = bbAuthorisation.getCompany();

    this.getApp();

    this.onCancel = this.onCancel.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  // get the day9 app and the load the objects properties


  PresentController.prototype.getApp = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var app, new_obj;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.company.$get('apps', { app_name: 'day9' });

            case 2:
              app = _context.sent;

              this.app = app;

              // load the existing presents
              this.load_objects();

              // load the schema form for seeing what a 'new' present looks like
              _context.next = 7;
              return this.app.$get('new_present');

            case 7:
              new_obj = _context.sent;

              this.schema = new_obj.schema;
              this.form = new_obj.form;

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getApp() {
      return _ref.apply(this, arguments);
    }

    return getApp;
  }();

  // load all obejcts - currently we're not using pagination or anything fancy


  PresentController.prototype.load_objects = function load_objects() {
    var _this = this;

    // flush the current presents from the local browser cache
    this.app.$flush('presents');
    // re-get the presents
    this.app.$get('presents').then(function (res) {
      res.$get('custom_objects').then(function (objs) {
        _this.objects = objs;
      });
    });
  };

  // create a new present - you could add any defaults here


  PresentController.prototype.createNew = function createNew() {
    this.object = {};
  };

  PresentController.prototype.onCancel = function onCancel() {
    this.object = null;
  };

  PresentController.prototype.onSuccess = function onSuccess(res) {
    this.object = null;
    this.load_objects();
  };

  // edit an existing present


  PresentController.prototype.edit = function edit(obj) {
    this.object = obj;
  };

  // delete a present


  PresentController.prototype.delete = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(obj) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return obj.$del('self');

            case 2:
              // reload the objects
              this.load_objects();

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function _delete(_x) {
      return _ref2.apply(this, arguments);
    }

    return _delete;
  }();

  return PresentController;
}();

var presentPanel = {
  templateUrl: _presents2.default.id,
  controller: PresentController,
  scope: true,
  bindings: {
    filter: '<'
  }
};

angular.module('BBAdminDashboard').component('bbPresentPanel', presentPanel);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var angular=window.angular,ngModule;
try {ngModule=angular.module(["ng"])}
catch(e){ngModule=angular.module("ng",[])}
var v1="<div class=\"bb-panel__body\">\n<h3>Presents</h3>\n<div ng-if=\"$ctrl.object\">\n<div ng-if=\"!$ctrl.object.id\" class=\"bb-schema-form\" bb-schema-form custom-form=\"\" base=\"$ctrl.app\" form-rel=\"new_present\" save-rel=\"presents\" options=\"$ctrl.schemaFormOptions\" on-success-save=\"$ctrl.onSuccess\" on-cancel=\"$ctrl.onCancel\">\n</div>\n<div ng-if=\"$ctrl.object.id\" bb-schema-form-edit class=\"bb-schema-form\" model=\"$ctrl.object\" custom-form=\"$ctrl.customForm\" on-success-save=\"$ctrl.onSuccess\" on-cancel=\"$ctrl.onCancel\" readonly=\"false\" options=\"$ctrl.schemaFormOptions\">\n</div>\n</div>\n<div ng-if=\"!$ctrl.object && $ctrl.app\">\n<div class=\"btn-primary btn pull-right\" ng-click=\"$ctrl.createNew()\">Create Present</div>\n<table class=\"table\" ng-if=\"$ctrl.schema\">\n<thead>\n<tr>\n<th ng-repeat=\"col in $ctrl.schema.properties\" scope=\"col\">{{col.title || col.key}}</th>\n<th scope=\"col\">&nbsp;</th>\n</tr>\n</thead>\n<tbody>\n<tr ng-repeat=\"obj in $ctrl.objects\">\n<th ng-repeat=\"col in $ctrl.schema.properties\" scope=\"col\">{{obj[col.key]}}</th>\n<td>\n<a ng-click=\"$ctrl.delete(obj)\" class=\"btn btn-default btn-sm pull-right\"><i class=\"fa fa-trash\"></i> Delete</a>\n<a ng-click=\"$ctrl.edit(obj)\" class=\"btn btn-default btn-sm pull-right\"><i class=\"fa fa-pencil\"></i> Edit</a>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n</div>";
var id1="day9/presents.html";
var inj=angular.element(window.document).injector();
if(inj){inj.get("$templateCache").put(id1,v1);}
else{ngModule.run(["$templateCache",function(c){c.put(id1,v1)}]);}
exports.id=id1;
exports.template=v1;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = bbConfig;

/***/ })
/******/ ]);