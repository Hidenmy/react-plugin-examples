define(["@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BigGraphLayout.tsx":
/*!***************************************!*\
  !*** ./components/BigGraphLayout.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigGraphLayout = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var BigGraphLayout =
/** @class */
function (_super) {
  __extends(BigGraphLayout, _super);

  function BigGraphLayout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BigGraphLayout.prototype.render = function () {
    var _a = this.props,
        onInterpolate = _a.onInterpolate,
        options = _a.options,
        timeSeries = _a.timeSeries,
        timeRange = _a.timeRange,
        width = _a.width,
        height = _a.height;
    var gaugeValue = timeSeries[0].stats[options.valueOptions.stat];
    var prefix = onInterpolate(options.valueOptions.prefix);
    var suffix = onInterpolate(options.valueOptions.suffix);
    return _react2.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        height: '100%'
      }
    }, _react2.default.createElement("div", {
      style: {
        width: '70%'
      }
    }, _react2.default.createElement(_ui.Graph, {
      timeSeries: timeSeries,
      timeRange: timeRange,
      width: width,
      height: height,
      showBars: false,
      showLines: true,
      showPoints: false
    })), _react2.default.createElement("div", {
      style: {
        width: '30%'
      }
    }, _react2.default.createElement("div", {
      style: {
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, "Server ok"), _react2.default.createElement("div", {
      style: {
        height: '50%'
      }
    }, _react2.default.createElement(_ui.ThemeContext.Consumer, null, function (theme) {
      return _react2.default.createElement(_ui.Gauge, {
        value: gaugeValue,
        width: width,
        height: height / 2,
        prefix: prefix,
        suffix: suffix,
        unit: options.valueOptions.unit,
        decimals: options.valueOptions.decimals,
        thresholds: options.thresholds,
        valueMappings: options.valueMappings,
        showThresholdLabels: options.showThresholdLabels,
        showThresholdMarkers: options.showThresholdMarkers,
        minValue: options.minValue,
        maxValue: options.maxValue,
        theme: theme
      });
    }))));
  };

  return BigGraphLayout;
}(_react.PureComponent);

exports.BigGraphLayout = BigGraphLayout;

/***/ }),

/***/ "./components/BigTextLayout.tsx":
/*!**************************************!*\
  !*** ./components/BigTextLayout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigTextLayout = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var BigTextLayout =
/** @class */
function (_super) {
  __extends(BigTextLayout, _super);

  function BigTextLayout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BigTextLayout.prototype.render = function () {
    var _a = this.props,
        onInterpolate = _a.onInterpolate,
        options = _a.options,
        timeSeries = _a.timeSeries,
        timeRange = _a.timeRange,
        width = _a.width,
        height = _a.height;
    var gaugeValue = timeSeries[0].stats[options.valueOptions.stat];
    var prefix = onInterpolate(options.valueOptions.prefix);
    var suffix = onInterpolate(options.valueOptions.suffix);
    return _react2.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
      }
    }, _react2.default.createElement("div", {
      style: {
        height: '40%',
        width: '100%'
      }
    }, _react2.default.createElement("div", {
      style: {
        fontSize: '60px',
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, "Server ok")), _react2.default.createElement("div", {
      style: {
        height: '60%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, _react2.default.createElement("div", {
      style: {
        width: '60%',
        height: '100%'
      }
    }, _react2.default.createElement(_ui.Graph, {
      timeSeries: timeSeries,
      timeRange: timeRange,
      width: width,
      height: height,
      showBars: false,
      showLines: true,
      showPoints: false
    })), _react2.default.createElement("div", {
      style: {
        width: '40%',
        height: '100%'
      }
    }, _react2.default.createElement(_ui.ThemeContext.Consumer, null, function (theme) {
      return _react2.default.createElement(_ui.Gauge, {
        value: gaugeValue,
        width: width / 3,
        height: height * 0.6,
        prefix: prefix,
        suffix: suffix,
        unit: options.valueOptions.unit,
        decimals: options.valueOptions.decimals,
        thresholds: options.thresholds,
        valueMappings: options.valueMappings,
        showThresholdLabels: options.showThresholdLabels,
        showThresholdMarkers: options.showThresholdMarkers,
        minValue: options.minValue,
        maxValue: options.maxValue,
        theme: theme
      });
    }))));
  };

  return BigTextLayout;
}(_react.PureComponent);

exports.BigTextLayout = BigTextLayout;

/***/ }),

/***/ "./components/ComboPanel.tsx":
/*!***********************************!*\
  !*** ./components/ComboPanel.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboPanel = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

var _BigTextLayout = __webpack_require__(/*! ./BigTextLayout */ "./components/BigTextLayout.tsx");

var _BigGaugeLayout = __webpack_require__(/*! ./Gauge/BigGaugeLayout */ "./components/Gauge/BigGaugeLayout.tsx");

var _BigGraphLayout = __webpack_require__(/*! ./BigGraphLayout */ "./components/BigGraphLayout.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var ComboPanel =
/** @class */
function (_super) {
  __extends(ComboPanel, _super);

  function ComboPanel() {
    return _super !== null && _super.apply(this, arguments) || this;
  } // Gauge does not get proper width


  ComboPanel.prototype.render = function () {
    var _a = this.props,
        onInterpolate = _a.onInterpolate,
        options = _a.options,
        panelData = _a.panelData,
        timeRange = _a.timeRange,
        width = _a.width,
        height = _a.height;
    var layout = options.layout;

    if (panelData.timeSeries) {
      var timeSeries = (0, _ui.processTimeSeries)({
        timeSeries: panelData.timeSeries,
        nullValueMode: _ui.NullValueMode.Null
      });

      switch (layout) {
        case 'bigtext':
          return _react2.default.createElement(_BigTextLayout.BigTextLayout, {
            timeSeries: timeSeries,
            timeRange: timeRange,
            width: width,
            height: height,
            options: options,
            onInterpolate: onInterpolate
          });

        case 'biggraph':
          return _react2.default.createElement(_BigGraphLayout.BigGraphLayout, {
            timeSeries: timeSeries,
            timeRange: timeRange,
            width: width,
            height: height,
            options: options,
            onInterpolate: onInterpolate
          });

        default:
        case 'biggauge':
          return _react2.default.createElement(_BigGaugeLayout.BigGaugeLayout, {
            timeSeries: timeSeries,
            timeRange: timeRange,
            width: width,
            height: height,
            options: options,
            onInterpolate: onInterpolate
          });
      }
    } else {
      return _react2.default.createElement("div", null, "Panel needs time series data");
    }
  };

  return ComboPanel;
}(_react.PureComponent);

exports.ComboPanel = ComboPanel;

/***/ }),

/***/ "./components/ComboPanelEditor.tsx":
/*!*****************************************!*\
  !*** ./components/ComboPanelEditor.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboPanelEditor = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

var _LayoutOptions = __webpack_require__(/*! ./LayoutOptions */ "./components/LayoutOptions.tsx");

var _ValueOptions = __webpack_require__(/*! ./Gauge/ValueOptions */ "./components/Gauge/ValueOptions.tsx");

var _GaugeOptionsEditor = __webpack_require__(/*! ./Gauge/GaugeOptionsEditor */ "./components/Gauge/GaugeOptionsEditor.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var ComboPanelEditor =
/** @class */
function (_super) {
  __extends(ComboPanelEditor, _super);

  function ComboPanelEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onLayoutChange = function (layout) {
      return _this.props.onChange(__assign({}, _this.props.options, {
        layout: layout
      }));
    };

    _this.onValueOptionsChanged = function (valueOptions) {
      return _this.props.onChange(__assign({}, _this.props.options, {
        valueOptions: valueOptions
      }));
    };

    _this.onThresholdsChanged = function (thresholds) {
      return _this.props.onChange(__assign({}, _this.props.options, {
        thresholds: thresholds
      }));
    };

    return _this;
  }

  ComboPanelEditor.prototype.render = function () {
    // Options for Gauge (thresholds etc), Graph (lines, bars, points)
    // and Text (size color etc)
    // Options for resizing the sections, choose layout? ✅
    // Combine Thresholds and text (+ color)
    var _this = this;

    var _a = this.props.options,
        layout = _a.layout,
        valueOptions = _a.valueOptions;
    return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_ui.PanelOptionsGrid, null, _react2.default.createElement(_LayoutOptions.LayoutOptions, {
      onChange: function onChange(layout) {
        return _this.onLayoutChange(layout);
      },
      selectedLayout: layout
    })), _react2.default.createElement(_ui.PanelOptionsGrid, null, _react2.default.createElement(_ValueOptions.ValueOptions, {
      options: valueOptions,
      onChange: function onChange(valueOptions) {
        return _this.onValueOptionsChanged(valueOptions);
      }
    }), _react2.default.createElement(_GaugeOptionsEditor.GaugeOptionsEditor, {
      options: this.props.options,
      onChange: this.props.onChange
    }), _react2.default.createElement(_ui.ThresholdsEditor, {
      thresholds: this.props.options.thresholds,
      onChange: function onChange(thresholds) {
        return _this.onThresholdsChanged(thresholds);
      }
    })));
  };

  return ComboPanelEditor;
}(_react.PureComponent);

exports.ComboPanelEditor = ComboPanelEditor;

/***/ }),

/***/ "./components/Gauge/BigGaugeLayout.tsx":
/*!*********************************************!*\
  !*** ./components/Gauge/BigGaugeLayout.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigGaugeLayout = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var BigGaugeLayout =
/** @class */
function (_super) {
  __extends(BigGaugeLayout, _super);

  function BigGaugeLayout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BigGaugeLayout.prototype.render = function () {
    var _a = this.props,
        onInterpolate = _a.onInterpolate,
        options = _a.options,
        timeSeries = _a.timeSeries,
        timeRange = _a.timeRange,
        width = _a.width,
        height = _a.height;
    var gaugeValue = timeSeries[0].stats[options.valueOptions.stat];
    var prefix = onInterpolate(options.valueOptions.prefix);
    var suffix = onInterpolate(options.valueOptions.suffix);
    return _react2.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        height: '100%'
      }
    }, _react2.default.createElement("div", {
      style: {
        width: '50%'
      }
    }, _react2.default.createElement("div", {
      style: {
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, "Server ok"), _react2.default.createElement("div", {
      style: {
        height: '70%'
      }
    }, _react2.default.createElement(_ui.Graph, {
      timeSeries: timeSeries,
      timeRange: timeRange,
      width: width,
      height: height,
      showBars: false,
      showLines: true,
      showPoints: false
    }))), _react2.default.createElement("div", {
      style: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, _react2.default.createElement(_ui.ThemeContext.Consumer, null, function (theme) {
      return _react2.default.createElement(_ui.Gauge, {
        value: gaugeValue,
        width: width / 2,
        height: height,
        prefix: prefix,
        suffix: suffix,
        unit: options.valueOptions.unit,
        decimals: options.valueOptions.decimals,
        thresholds: options.thresholds,
        valueMappings: options.valueMappings,
        showThresholdLabels: options.showThresholdLabels,
        showThresholdMarkers: options.showThresholdMarkers,
        minValue: options.minValue,
        maxValue: options.maxValue,
        theme: theme
      });
    })));
  };

  return BigGaugeLayout;
}(_react.PureComponent);

exports.BigGaugeLayout = BigGaugeLayout;

/***/ }),

/***/ "./components/Gauge/GaugeOptionsEditor.tsx":
/*!*************************************************!*\
  !*** ./components/Gauge/GaugeOptionsEditor.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GaugeOptionsEditor = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
}; // Libraries


var GaugeOptionsEditor =
/** @class */
function (_super) {
  __extends(GaugeOptionsEditor, _super);

  function GaugeOptionsEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.labelWidth = 8;

    _this.onToggleThresholdLabels = function () {
      return _this.props.onChange(__assign({}, _this.props.options, {
        showThresholdLabels: !_this.props.options.showThresholdLabels
      }));
    };

    _this.onToggleThresholdMarkers = function () {
      return _this.props.onChange(__assign({}, _this.props.options, {
        showThresholdMarkers: !_this.props.options.showThresholdMarkers
      }));
    };

    _this.onMinValueChange = function (_a) {
      var target = _a.target;
      return _this.props.onChange(__assign({}, _this.props.options, {
        minValue: target.value
      }));
    };

    _this.onMaxValueChange = function (_a) {
      var target = _a.target;
      return _this.props.onChange(__assign({}, _this.props.options, {
        maxValue: target.value
      }));
    };

    return _this;
  }

  GaugeOptionsEditor.prototype.render = function () {
    var options = this.props.options;
    var maxValue = options.maxValue,
        minValue = options.minValue,
        showThresholdLabels = options.showThresholdLabels,
        showThresholdMarkers = options.showThresholdMarkers;
    return _react2.default.createElement(_ui.PanelOptionsGroup, {
      title: "Gauge options"
    }, _react2.default.createElement(_ui.FormField, {
      label: "Min value",
      labelWidth: this.labelWidth,
      onChange: this.onMinValueChange,
      value: minValue
    }), _react2.default.createElement(_ui.FormField, {
      label: "Max value",
      labelWidth: this.labelWidth,
      onChange: this.onMaxValueChange,
      value: maxValue
    }), _react2.default.createElement(_ui.Switch, {
      label: "Show labels",
      labelClass: "width-" + this.labelWidth,
      checked: showThresholdLabels,
      onChange: this.onToggleThresholdLabels
    }), _react2.default.createElement(_ui.Switch, {
      label: "Show markers",
      labelClass: "width-" + this.labelWidth,
      checked: showThresholdMarkers,
      onChange: this.onToggleThresholdMarkers
    }));
  };

  return GaugeOptionsEditor;
}(_react.PureComponent);

exports.GaugeOptionsEditor = GaugeOptionsEditor;

/***/ }),

/***/ "./components/Gauge/ValueOptions.tsx":
/*!*******************************************!*\
  !*** ./components/Gauge/ValueOptions.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueOptions = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

var _UnitPicker = __webpack_require__(/*! ../UnitPicker */ "./components/UnitPicker.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var labelWidth = 6;
var statOptions = [{
  value: 'min',
  label: 'Min'
}, {
  value: 'max',
  label: 'Max'
}, {
  value: 'avg',
  label: 'Average'
}, {
  value: 'current',
  label: 'Current'
}, {
  value: 'total',
  label: 'Total'
}, {
  value: 'name',
  label: 'Name'
}, {
  value: 'first',
  label: 'First'
}, {
  value: 'delta',
  label: 'Delta'
}, {
  value: 'diff',
  label: 'Difference'
}, {
  value: 'range',
  label: 'Range'
}, {
  value: 'last_time',
  label: 'Time of last point'
}];

var ValueOptions =
/** @class */
function (_super) {
  __extends(ValueOptions, _super);

  function ValueOptions() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onUnitChange = function (unit) {
      return _this.props.onChange(__assign({}, _this.props.options, {
        unit: unit.value
      }));
    };

    _this.onStatChange = function (stat) {
      return _this.props.onChange(__assign({}, _this.props.options, {
        stat: stat.value
      }));
    };

    _this.onDecimalChange = function (event) {
      if (!isNaN(event.target.value)) {
        _this.props.onChange(__assign({}, _this.props.options, {
          decimals: parseInt(event.target.value, 10)
        }));
      } else {
        _this.props.onChange(__assign({}, _this.props.options, {
          decimals: null
        }));
      }
    };

    _this.onPrefixChange = function (event) {
      return _this.props.onChange(__assign({}, _this.props.options, {
        prefix: event.target.value
      }));
    };

    _this.onSuffixChange = function (event) {
      return _this.props.onChange(__assign({}, _this.props.options, {
        suffix: event.target.value
      }));
    };

    return _this;
  }

  ValueOptions.prototype.render = function () {
    var _a = this.props.options,
        stat = _a.stat,
        unit = _a.unit,
        decimals = _a.decimals,
        prefix = _a.prefix,
        suffix = _a.suffix;
    var decimalsString = '';

    if (Number.isFinite(decimals)) {
      decimalsString = decimals.toString();
    }

    return _react2.default.createElement(_ui.PanelOptionsGroup, {
      title: "Gauge value"
    }, _react2.default.createElement("div", {
      className: "gf-form"
    }, _react2.default.createElement(_ui.FormLabel, {
      width: labelWidth
    }, "Stat"), _react2.default.createElement(_ui.Select, {
      width: 12,
      options: statOptions,
      onChange: this.onStatChange,
      value: statOptions.find(function (option) {
        return option.value === stat;
      })
    })), _react2.default.createElement("div", {
      className: "gf-form"
    }, _react2.default.createElement(_ui.FormLabel, {
      width: labelWidth
    }, "Unit"), _react2.default.createElement(_UnitPicker.UnitPicker, {
      defaultValue: unit,
      onChange: this.onUnitChange
    })), _react2.default.createElement(_ui.FormField, {
      label: "Decimals",
      labelWidth: labelWidth,
      placeholder: "auto",
      onChange: this.onDecimalChange,
      value: decimalsString,
      type: "number"
    }), _react2.default.createElement(_ui.FormField, {
      label: "Prefix",
      labelWidth: labelWidth,
      onChange: this.onPrefixChange,
      value: prefix || ''
    }), _react2.default.createElement(_ui.FormField, {
      label: "Suffix",
      labelWidth: labelWidth,
      onChange: this.onSuffixChange,
      value: suffix || ''
    }));
  };

  return ValueOptions;
}(_react.PureComponent);

exports.ValueOptions = ValueOptions;

/***/ }),

/***/ "./components/LayoutOptions.tsx":
/*!**************************************!*\
  !*** ./components/LayoutOptions.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutOptions = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var layoutOptions = [{
  value: 'bigtext',
  label: 'Big Text'
}, {
  value: 'biggraph',
  label: 'Big Graph'
}, {
  value: 'biggauge',
  label: 'Big Gauge'
}];

var LayoutOptions =
/** @class */
function (_super) {
  __extends(LayoutOptions, _super);

  function LayoutOptions() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  LayoutOptions.prototype.render = function () {
    var _a = this.props,
        onChange = _a.onChange,
        selectedLayout = _a.selectedLayout;
    return _react2.default.createElement(_ui.PanelOptionsGroup, {
      title: "Layout"
    }, _react2.default.createElement("div", {
      style: {
        display: 'flex'
      }
    }, layoutOptions.map(function (layout, index) {
      var isActive = selectedLayout === layout.value;
      return _react2.default.createElement("div", {
        key: layout.value + "-" + index,
        onClick: function onClick() {
          return onChange(layout.value);
        },
        style: {
          margin: '0 8px',
          padding: '10px',
          border: '1px solid white',
          borderRadius: '3px',
          backgroundColor: isActive && '#393737',
          cursor: isActive ? 'auto' : 'pointer',
          pointerEvents: isActive ? 'none' : 'auto',
          maxWidth: '30%'
        }
      }, layout.label);
    })));
  };

  return LayoutOptions;
}(_react.PureComponent);

exports.LayoutOptions = LayoutOptions;

/***/ }),

/***/ "./components/UnitPicker.tsx":
/*!***********************************!*\
  !*** ./components/UnitPicker.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitPicker = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var UnitPicker =
/** @class */
function (_super) {
  __extends(UnitPicker, _super);

  function UnitPicker() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  UnitPicker.prototype.render = function () {
    var _a = this.props,
        defaultValue = _a.defaultValue,
        onChange = _a.onChange,
        width = _a.width;
    var unitGroups = (0, _ui.getValueFormats)(); // Need to transform the data structure to work well with Select

    var groupOptions = unitGroups.map(function (group) {
      var options = group.submenu.map(function (unit) {
        return {
          label: unit.text,
          value: unit.value
        };
      });
      return {
        label: group.text,
        options: options
      };
    });
    var value = groupOptions.map(function (group) {
      return group.options.find(function (option) {
        return option.value === defaultValue;
      });
    });
    return _react2.default.createElement(_ui.Select, {
      width: width,
      defaultValue: value,
      isSearchable: true,
      options: groupOptions,
      placeholder: "Choose",
      onChange: onChange
    });
  };

  UnitPicker.defaultProps = {
    width: 12
  };
  return UnitPicker;
}(_react.PureComponent);

exports.UnitPicker = UnitPicker;

/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactPanel = undefined;

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

var _ComboPanel = __webpack_require__(/*! ./components/ComboPanel */ "./components/ComboPanel.tsx");

var _ComboPanelEditor = __webpack_require__(/*! ./components/ComboPanelEditor */ "./components/ComboPanelEditor.tsx");

var _types = __webpack_require__(/*! ./types */ "./types.ts");

var reactPanel = exports.reactPanel = new _ui.ReactPanelPlugin(_ComboPanel.ComboPanel);
reactPanel.setEditor(_ComboPanelEditor.ComboPanelEditor);
reactPanel.setDefaults(_types.defaults);

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaults = exports.defaults = {
  minValue: 0,
  maxValue: 100,
  layout: 'biggauge',
  showThresholdMarkers: true,
  showThresholdLabels: false,
  showLines: true,
  showBars: false,
  showPoints: false,
  valueOptions: {
    prefix: '',
    suffix: '',
    decimals: null,
    stat: 'avg',
    unit: 'none'
  },
  valueMappings: [],
  thresholds: [{
    index: 0,
    value: -Infinity,
    color: 'green'
  }]
};

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map