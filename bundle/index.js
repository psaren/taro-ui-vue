'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _classnames_2_2_6_classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var ActionSheetBody = {
  name: 'AtActionSheetBody',
  props: {
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet__body', this.className);
    return h("view", {
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var ActionSheetFooter = {
  name: 'AtActionSheetFooter',
  props: {
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methds: {
    handleClick: function handleClick(e) {
      this.onClick && this.onClick(e);
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet__footer', this.className);
    return h("view", {
      "on": {
        "tap": this.handleClick
      },
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var ActionSheetHeader = {
  name: 'AtActionSheetHeader',
  props: {
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet__header', this.className);
    return h("view", {
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var index = {
  name: 'AtActionSheet',
  props: {
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onCancel: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      show: this.isOpened
    };
  },
  watch: {
    isOpened: function isOpened(val) {
      this.show = val;
      !val && this.handleClose();
    }
  },
  methods: {
    handleClose: function handleClose() {
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    handleCancel: function handleCancel() {
      if (typeof this.onCancel === 'function') {
        return this.onCancel();
      }

      this.close();
    },
    close: function close() {
      this.show = false;
    },
    handleTouchMove: function handleTouchMove(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  },
  render: function render() {
    var h = arguments[0];
    var title = this.title,
        cancelText = this.cancelText,
        className = this.className;
    var show = this.show;
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet', {
      'at-action-sheet--active': show
    }, className);
    return h("view", {
      "class": rootClass,
      "on": {
        "touchMove": this.handleTouchMove
      }
    }, [h("view", {
      "on": {
        "tap": this.close
      },
      "class": "at-action-sheet__overlay"
    }), h("view", {
      "class": "at-action-sheet__container"
    }, [title && h(ActionSheetHeader, [title]), h(ActionSheetBody, [this.$slots.default]), cancelText && h(ActionSheetFooter, {
      "on": {
        "tap": this.handleCancel
      }
    }, [cancelText])])]);
  }
};

var index$1 = {
  name: 'AtActionSheetItem',
  props: {
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      this.onClick && this.onClick(e);
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-action-sheet__item', this.className);
    return h("view", {
      "class": rootClass,
      "on": {
        "tap": this.handleClick
      }
    }, [this.$slots.default]);
  }
};

var Loading = {
  name: 'AtLoading',
  props: {
    size: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: [String, Number],
      default: ''
    }
  },
  render: function render() {
    var h = arguments[0];
    var color = this.color,
        size = this.size;
    var loadingSize = typeof size === 'string' ? size : String(size);
    var sizeStyle = {
      width: size ? "".concat(Taro.pxTransform(parseInt(loadingSize))) : '',
      height: size ? "".concat(Taro.pxTransform(parseInt(loadingSize))) : ''
    };
    var colorStyle = {
      border: color ? "1px solid ".concat(color) : '',
      'border-color': color ? "".concat(color, " transparent transparent transparent") : ''
    };
    var ringStyle = Object.assign({}, colorStyle, sizeStyle);
    return h("view", {
      "class": "at-loading",
      "style": sizeStyle
    }, [h("view", {
      "class": "at-loading__ring",
      "style": ringStyle
    }), h("view", {
      "class": "at-loading__ring",
      "style": ringStyle
    }), h("view", {
      "class": "at-loading__ring",
      "style": ringStyle
    })]);
  }
};

var AtActivityIndicator = {
  name: 'AtActivityIndicator',
  props: {
    size: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    isOpened: {
      type: Boolean,
      default: true
    }
  },
  render: function render() {
    var h = arguments[0];
    var color = this.color,
        size = this.size,
        mode = this.mode,
        content = this.content,
        isOpened = this.isOpened,
        className = this.className;
    var rootClass = _classnames_2_2_6_classnames('at-activity-indicator', {
      'at-activity-indicator--center': mode === 'center',
      'at-activity-indicator--isopened': isOpened
    }, className);
    return h("view", {
      "class": rootClass
    }, [h("view", {
      "class": "at-activity-indicator__body"
    }, [h(Loading, {
      "attrs": {
        "size": size,
        "color": color
      }
    })]), content && h("view", {
      "class": "at-activity-indicator__content"
    }, [content])]);
  }
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
};
var index$2 = {
  name: 'AtAvatar',
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: function validator(val) {
        return ['large', 'normal', 'small'].includes(val);
      }
    },
    circle: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    openData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render(h) {
    var _classObject;

    var size = this.size,
        circle = this.circle,
        image = this.image,
        text = this.text,
        openData = this.openData,
        customStyle = this.customStyle,
        className = this.className;
    var rootClassName = ['at-avatar'];
    var iconSize = SIZE_CLASS[size || 'normal'];
    var classObject = (_classObject = {}, _defineProperty(_classObject, "at-avatar--".concat(iconSize), iconSize), _defineProperty(_classObject, 'at-avatar--circle', circle), _classObject);
    var letter = '';
    if (text) letter = text[0];
    var isOpenData = openData && openData.type === 'userAvatarUrl' && this.$isWEAPP();
    var isImage = !isOpenData && image !== '';
    var isText = !isOpenData && !image;
    return h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, classObject, className),
      "style": customStyle
    }, [isOpenData && h("OpenData", {
      "attrs": {
        "type": openData.type
      }
    }), isImage && h("image", {
      "class": "at-avatar__img",
      "attrs": {
        "src": image
      }
    }), isText && h("view", {
      "class": "at-avatar__text"
    }, [letter])]);
  }
};

/**
 * formatValue
 * @param {string | number | undefined} value
 * @param {number} maxValue
 * @return string | number
 */

var formatValue = function formatValue(value, maxValue) {
  if (value === '' || value === null || value === undefined) return '';
  var numValue = +value;

  if (Number.isNaN(numValue)) {
    return value;
  }

  return numValue > maxValue ? "".concat(maxValue, "+") : numValue;
};

var Badge = {
  name: 'AtBadge',
  props: {
    dot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxValue: {
      type: Number,
      default: 99
    },
    customStyle: {
      type: [String, Object],
      default: function _default() {}
    },
    className: {
      type: [String, Array],
      default: ''
    }
  },
  render: function render() {
    var h = arguments[0];
    var dot = this.dot,
        customStyle = this.customStyle,
        className = this.className,
        maxValue = this.maxValue,
        value = this.value;
    var rootClassName = ['at-badge'];
    var val = formatValue(value, maxValue);
    return h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, className),
      "style": customStyle
    }, [this.$slots.default, dot ? h("view", {
      "class": "at-badge__dot"
    }) : val !== '' && h("view", {
      "class": "at-badge__num"
    }, [val])]);
  }
};

function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return typeof o === 'undefined';
}
function isObject(o) {
    return o !== null && typeof o === 'object';
}
function isFunction(o) {
    return typeof o === 'function';
}
function isBooleanStringLiteral(o) {
    return o === 'true' || o === 'false';
}
const isArray = Array.isArray;

const EMPTY_OBJ = {};
function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
    let camel = '';
    let nextCap = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            camel += nextCap ? s[i].toUpperCase() : s[i];
            nextCap = false;
        }
        else {
            nextCap = true;
        }
    }
    return camel;
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
    if (condition) {
        return;
    }
    throw new Error(msg + '\n' + reportIssue);
}
function warn(condition, msg) {
    if (process.env.NODE_ENV !== 'production') {
        if (condition) {
            console.warn(msg);
        }
    }
}
const touchEvents = {
    bindTouchStart: '',
    bindTouchMove: '',
    bindTouchEnd: '',
    bindTouchCancel: '',
    bindLongTap: ''
};
const View = Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': 'false', 'hover-start-time': '50', 'hover-stay-time': '400', animation: '', bindAnimationEnd: '' }, touchEvents);
const Icon = {
    type: '',
    size: '23',
    color: ''
};
const Map$1 = Object.assign({ longitude: '', latitude: '', scale: '16', markers: '', covers: '', polyline: '', circles: '', controls: '', 'include-point': 'false', 'show-location': '', polygons: '', subkey: '', 'layer-style': '1', rotate: '0', skew: 'skew', 'enable-3D': 'false', 'show-compass': 'false', 'show-scale': 'false', 'enable-overlooking': 'false', 'enable-zoom': 'true', 'enable-scroll': 'true', 'enable-rotate': 'false', 'enable-satellite': 'false', 'enable-traffic': 'false', setting: '', bindMarkerTap: '', bindLabelTap: '', bindControlTap: '', bindCalloutTap: '', bindUpdated: '', bindRegionChange: '', bindPoiTap: '' }, touchEvents);
const Progress = {
    percent: '',
    'show-info': 'false',
    'border-radius': '0',
    'font-size': '16',
    'stroke-width': '6',
    color: singleQuote('#09BB07'),
    activeColor: singleQuote('#09BB07'),
    backgroundColor: singleQuote('#EBEBEB'),
    active: 'false',
    'active-mode': singleQuote('backwards'),
    duration: '30',
    bindActiveEnd: ''
};
const RichText = {
    nodes: '[]',
    space: ''
};
const Text = {
    selectable: 'false',
    space: '',
    decode: 'false'
};
const Button = {
    size: singleQuote('default'),
    type: '',
    plain: 'false',
    disabled: '',
    loading: 'false',
    'form-type': '',
    'open-type': '',
    'hover-class': singleQuote('button-hover'),
    'hover-stop-propagation': 'false',
    'hover-start-time': '20',
    'hover-stay-time': '70',
    lang: 'en',
    'session-from': '',
    'send-message-title': '',
    'send-message-path': '',
    'send-message-img': '',
    'app-parameter': '',
    'show-message-card': 'false',
    bindGetUserInfo: '',
    bindContact: '',
    bindGetPhoneNumber: '',
    bindError: '',
    bindOpenSetting: '',
    bindLaunchApp: '',
    name: ''
};
if (process.env.TARO_ENV === 'qq') {
    Button['app-packagename'] = '';
    Button['app-bundleid'] = '';
    Button['app-connect-id'] = '';
}
const Checkbox = {
    value: '',
    disabled: '',
    checked: 'false',
    color: singleQuote('#09BB07'),
    name: ''
};
const CheckboxGroup = {
    bindChange: '',
    name: ''
};
const Editor = {
    'read-only': 'false',
    placeholder: '',
    'show-img-size': 'false',
    'show-img-toolbar': 'false',
    'show-img-resize': 'false',
    focus: 'false',
    bindReady: '',
    bindFocus: '',
    bindBlur: '',
    bindInput: '',
    bindStatusChange: '',
    name: ''
};
const Form = {
    'report-submit': 'false',
    'report-submit-timeout': '0',
    bindSubmit: '',
    bindReset: '',
    name: ''
};
const Input = {
    value: '',
    type: singleQuote(''),
    password: 'false',
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': singleQuote('input-placeholder'),
    disabled: '',
    maxlength: '140',
    'cursor-spacing': '0',
    'auto-focus': 'false',
    focus: 'false',
    'confirm-type': singleQuote('done'),
    'confirm-hold': 'false',
    cursor: '',
    'selection-start': '-1',
    'selection-end': '-1',
    'adjust-position': 'true',
    'hold-keyboard': 'false',
    bindInput: '',
    bindFocus: '',
    bindBlur: '',
    bindConfirm: '',
    bindKeyboardHeightChange: '',
    name: ''
};
const Label = {
    for: '',
    name: ''
};
const Picker = {
    mode: singleQuote('selector'),
    disabled: '',
    bindCancel: '',
    range: '',
    'range-key': '',
    value: '',
    bindChange: '',
    bindColumnChange: '',
    start: '',
    end: '',
    fields: singleQuote('day'),
    'custom-item': '',
    name: ''
};
const PickerView = {
    value: '',
    'indicator-style': '',
    'indicator-class': '',
    'mask-style': '',
    'mask-class': '',
    bindChange: '',
    bindPickStart: '',
    bindPickEnd: '',
    name: ''
};
const PickerViewColumn = {
    name: ''
};
const Radio = {
    value: '',
    checked: 'false',
    disabled: '',
    color: singleQuote('#09BB07'),
    name: ''
};
const RadioGroup = {
    bindChange: '',
    name: ''
};
const Slider = {
    min: '0',
    max: '100',
    step: '1',
    disabled: '',
    value: '0',
    color: singleQuote('#e9e9e9'),
    'selected-color': singleQuote('#1aad19'),
    activeColor: singleQuote('#1aad19'),
    backgroundColor: singleQuote('#e9e9e9'),
    'block-size': '28',
    'block-color': singleQuote('#ffffff'),
    'show-value': 'false',
    bindChange: '',
    bindChanging: '',
    name: ''
};
const Switch = {
    checked: 'false',
    disabled: '',
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: '',
    name: ''
};
const CoverImage = {
    src: '',
    bindLoad: 'eh',
    bindError: 'eh'
};
const Textarea = {
    value: '',
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': singleQuote('textarea-placeholder'),
    disabled: '',
    maxlength: '140',
    'auto-focus': 'false',
    focus: 'false',
    'auto-height': 'false',
    fixed: 'false',
    'cursor-spacing': '0',
    cursor: '-1',
    'show-confirm-bar': 'true',
    'selection-start': '-1',
    'selection-end': '-1',
    'adjust-position': 'true',
    'hold-keyboard': 'false',
    bindFocus: '',
    bindBlur: '',
    bindLineChange: '',
    bindInput: '',
    bindConfirm: '',
    bindKeyboardHeightChange: '',
    name: ''
};
const CoverView = Object.assign({ 'scroll-top': 'false' }, touchEvents);
const MovableArea = {
    'scale-area': 'false'
};
const MovableView = Object.assign({ direction: 'none', inertia: 'false', 'out-of-bounds': 'false', x: '', y: '', damping: '20', friction: '2', disabled: '', scale: 'false', 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', animation: 'true', bindAnimationEnd: '', bindChange: '', bindScale: '', htouchmove: '', vtouchmove: '', width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents);
const ScrollView = Object.assign({ 'scroll-x': 'false', 'scroll-y': 'false', 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': '', 'scroll-left': '', 'scroll-into-view': '', 'scroll-with-animation': 'false', 'enable-back-to-top': 'false', 'enable-flex': 'false', 'scroll-anchoring': ' false', bindScrolltoUpper: '', bindScrolltoLower: '', bindScroll: '' }, touchEvents);
function singleQuote(s) {
    return `'${s}'`;
}
const Swiper = {
    'indicator-dots': 'false',
    'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
    'indicator-active-color': singleQuote('#000000'),
    autoplay: 'false',
    current: '0',
    interval: '5000',
    duration: '500',
    circular: 'false',
    vertical: 'false',
    'previous-margin': '\'0px\'',
    'next-margin': '\'0px\'',
    'display-multiple-items': '1',
    'skip-hidden-item-layout': 'false',
    'easing-function': singleQuote('default'),
    bindChange: '',
    bindTransition: '',
    bindAnimationFinish: ''
};
const SwiperItem = {
    'item-id': ''
};
const FunctionalPageNavigator = {
    version: singleQuote('release'),
    name: '',
    args: '',
    bindSuccess: '',
    bindFail: '',
    bindCancel: ''
};
const Navigator = {
    target: singleQuote('self'),
    url: '',
    'open-type': singleQuote('navigate'),
    delta: '1',
    'app-id': '',
    path: '',
    'extra-data': '',
    version: singleQuote('version'),
    'hover-class': singleQuote('navigator-hover'),
    'hover-stop-propagation': 'false',
    'hover-start-time': '50',
    'hover-stay-time': '600',
    bindSuccess: '',
    bindFail: '',
    bindComplete: ''
};
const Audio = {
    id: '',
    src: '',
    loop: 'false',
    controls: 'false',
    poster: '',
    name: '',
    author: '',
    bindError: '',
    bindPlay: '',
    bindPause: '',
    bindTimeUpdate: '',
    bindEnded: ''
};
const Camera = {
    mode: singleQuote('normal'),
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    'frame-size': singleQuote('medium'),
    bindStop: '',
    bindError: '',
    bindInitDone: '',
    bindScanCode: ''
};
const Image = {
    src: '',
    mode: singleQuote('scaleToFill'),
    webp: 'false',
    'lazy-load': 'false',
    'show-menu-by-longpress': 'false',
    bindError: '',
    bindLoad: ''
};
const LivePlayer = {
    src: '',
    mode: singleQuote('live'),
    autoplay: 'false',
    muted: 'false',
    orientation: singleQuote('vertical'),
    'object-fit': singleQuote('contain'),
    'background-mute': 'false',
    'min-cache': '1',
    'max-cache': '3',
    'sound-mode': singleQuote('speaker'),
    'auto-pause-if-navigate': 'true',
    'auto-pause-if-open-native': 'true',
    bindStateChange: '',
    bindFullScreenChange: '',
    bindNetStatus: ''
};
const LivePusher = {
    url: '',
    mode: singleQuote('RTC'),
    autopush: 'false',
    muted: 'false',
    'enable-camera': 'true',
    'auto-focus': 'true',
    orientation: singleQuote('vertical'),
    beauty: '0',
    whiteness: '0',
    aspect: singleQuote('9:16'),
    'min-bitrate': '200',
    'max-bitrate': '1000',
    'audio-quality': singleQuote('high'),
    'waiting-image': '',
    'waiting-image-hash': '',
    zoom: 'false',
    'device-position': singleQuote('front'),
    'background-mute': 'false',
    mirror: 'false',
    'remote-mirror': 'false',
    'local-mirror': 'false',
    'audio-reverb-type': '0',
    'enable-mic': 'true',
    'enable-agc': 'false',
    'enable-ans': 'false',
    'audio-volume-type': singleQuote('voicecall'),
    'video-width': '360',
    'video-height': '640',
    bindStateChange: '',
    bindNetStatus: '',
    bindBgmStart: '',
    bindBgmProgress: '',
    bindBgmComplete: ''
};
const Video = {
    src: '',
    duration: '',
    controls: 'true',
    'danmu-list': '',
    'danmu-btn': '',
    'enable-danmu': '',
    autoplay: 'false',
    loop: 'false',
    muted: 'false',
    'initial-time': '0',
    'page-gesture': 'false',
    direction: '',
    'show-progress': 'true',
    'show-fullscreen-btn': 'true',
    'show-play-btn': 'true',
    'show-center-play-btn': 'true',
    'enable-progress-gesture': 'true',
    'object-fit': singleQuote('contain'),
    poster: '',
    'show-mute-btn': 'false',
    title: '',
    'play-btn-position': singleQuote('bottom'),
    'enable-play-gesture': 'false',
    'auto-pause-if-navigate': 'true',
    'auto-pause-if-open-native': 'true',
    'vslide-gesture': 'false',
    'vslide-gesture-in-fullscreen': 'true',
    'ad-unit-id': '',
    bindPlay: '',
    bindPause: '',
    bindEnded: '',
    bindTimeUpdate: '',
    bindFullScreenChange: '',
    bindWaiting: '',
    bindError: '',
    bindProgress: '',
    bindLoadedMetadata: ''
};
const Canvas = {
    type: '',
    'canvas-id': '',
    'disable-scroll': 'false',
    bindTouchStart: '',
    bindTouchMove: '',
    bindTouchEnd: '',
    bindTouchCancel: '',
    bindLongtap: '',
    bindError: ''
};
const Ad = {
    'unit-id': '',
    'ad-intervals': '',
    bindLoad: '',
    bindError: '',
    bindClose: ''
};
const OfficialAccount = {
    bindLoad: '',
    bindError: ''
};
const OpenData = {
    type: '',
    'open-gid': '',
    lang: singleQuote('en'),
    'default-text': '',
    'default-avatar': '',
    bindError: ''
};
const WebView = {
    src: '',
    bindMessage: '',
    bindLoad: ''
};
const NavigationBar = {
    title: '',
    loading: 'false',
    'front-color': '',
    'background-color': '',
    'color-animation-duration': '0',
    'color-animation-timing-func': singleQuote('linear')
};
const PageMeta = {
    'background-text-style': '',
    'background-color': '',
    'background-color-top': '',
    'background-color-bottom': '',
    'scroll-top': singleQuote(''),
    'scroll-duration': '300',
    'page-style': singleQuote(''),
    'root-font-size': singleQuote(''),
    bindResize: '',
    bindScroll: '',
    bindScrollDone: ''
};
const Block = {};
const internalComponents = {
    View,
    Icon,
    Progress,
    RichText,
    Text,
    Button,
    Checkbox,
    CheckboxGroup,
    Editor,
    Form,
    Input,
    Label,
    Picker,
    PickerView,
    PickerViewColumn,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    CoverImage,
    Textarea,
    CoverView,
    MovableArea,
    MovableView,
    ScrollView,
    Swiper,
    SwiperItem,
    FunctionalPageNavigator,
    Navigator,
    Audio,
    Camera,
    Image,
    LivePlayer,
    LivePusher,
    Video,
    Canvas,
    Ad,
    OfficialAccount,
    OpenData,
    WebView,
    NavigationBar,
    PageMeta,
    Block,
    Map: Map$1
};
const controlledComponent = new Set([
    'input',
    'checkbox',
    'picker-view',
    'radio',
    'slider',
    'textarea'
]);

const incrementId = () => {
    let id = 0;
    return () => (id++).toString();
};
function isElement(node) {
    return node.nodeType === 1 /* ELEMENT_NODE */;
}
function isText(node) {
    return node.nodeType === 3 /* TEXT_NODE */;
}

class TaroEventTarget {
    constructor() {
        this.__handlers = {};
    }
    addEventListener(type, handler, options) {
        warn(type === 'regionchange', 'map 组件的 regionchange 事件非常特殊，请使用 begin/end 事件替代。详情：https://github.com/NervJS/taro/issues/5766');
        type = type.toLowerCase();
        const handlers = this.__handlers[type];
        let isCapture = Boolean(options);
        let isOnce = false;
        if (isObject(options)) {
            isCapture = Boolean(options.capture);
            isOnce = Boolean(options.once);
        }
        if (isOnce) {
            const wrapper = function () {
                handler.apply(this, arguments); // this 指向 Element
                this.removeEventListener(type, wrapper);
            };
            this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), { once: false }));
            return;
        }
        warn(isCapture, 'The event capture feature is unimplemented.');
        if (isArray(handlers)) {
            handlers.push(handler);
        }
        else {
            this.__handlers[type] = [handler];
        }
    }
    removeEventListener(type, handler) {
        type = type.toLowerCase();
        if (handler == null) {
            return;
        }
        const handlers = this.__handlers[type];
        if (!isArray(handlers)) {
            return;
        }
        const index = handlers.indexOf(handler);
        warn(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
        handlers.splice(index, 1);
    }
}

const eventSource = new Map();

/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
    if (isText(node)) {
        return {
            ["v" /* Text */]: node.nodeValue,
            ["nn" /* NodeName */]: node.nodeName
        };
    }
    const data = {
        ["nn" /* NodeName */]: node.nodeName,
        uid: node.uid
    };
    const { props, childNodes } = node;
    for (const prop in props) {
        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
            prop !== 'class' &&
            prop !== 'style' &&
            prop !== 'id') {
            data[process.env.FRAMEWORK === 'vue' ? toCamelCase(prop) : prop] = props[prop];
        }
    }
    if (childNodes.length > 0) {
        data["cn" /* Childnodes */] = childNodes.map(hydrate);
    }
    if (node.className !== '') {
        data["cl" /* Class */] = node.className;
    }
    if (node.cssText !== '') {
        data["st" /* Style */] = node.cssText;
    }
    return data;
}

const options = {
    prerender: true,
    debug: false,
    // html 只影响 Element#innerHTML API
    html: {
        skipElements: new Set(['style', 'script']),
        voidElements: new Set([
            '!doctype', 'area', 'base', 'br', 'col', 'command',
            'embed', 'hr', 'img', 'input', 'keygen', 'link',
            'meta', 'param', 'source', 'track', 'wbr'
        ]),
        closingElements: new Set([
            'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
            'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
        ])
    }
};

function initPosition() {
    return {
        index: 0,
        column: 0,
        line: 0
    };
}
function feedPosition(position, str, len) {
    const start = position.index;
    const end = position.index = start + len;
    for (let i = start; i < end; i++) {
        const char = str.charAt(i);
        if (char === '\n') {
            position.line++;
            position.column = 0;
        }
        else {
            position.column++;
        }
    }
}
function jumpPosition(position, str, end) {
    const len = end - position.index;
    return feedPosition(position, str, len);
}
function copyPosition(position) {
    return {
        index: position.index,
        line: position.line,
        column: position.column
    };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
    return whitespace.test(char);
}
function shouldBeIgnore(tagName) {
    const name = tagName.toLowerCase();
    if (options.html.skipElements.has(name)) {
        return true;
    }
    return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
    while (true) {
        const textEnd = str.indexOf('<', index);
        if (textEnd === -1) {
            return textEnd;
        }
        const char = str.charAt(textEnd + 1);
        if (char === '/' || char === '!' || alphanumeric.test(char)) {
            return textEnd;
        }
        index = textEnd + 1;
    }
}
class Scaner {
    constructor(html) {
        this.tokens = [];
        this.position = initPosition();
        this.html = html;
    }
    scan() {
        const { html, position } = this;
        const len = html.length;
        while (position.index < len) {
            const start = position.index;
            this.scanText();
            if (position.index === start) {
                const isComment = html.startsWith('!--', start + 1);
                if (isComment) {
                    this.scanComment();
                }
                else {
                    const tagName = this.scanTag();
                    if (shouldBeIgnore(tagName)) {
                        this.scanSkipTag(tagName);
                    }
                }
            }
        }
        return this.tokens;
    }
    scanText() {
        const type = 'text';
        const { html, position } = this;
        let textEnd = findTextEnd(html, position.index);
        if (textEnd === position.index) {
            return;
        }
        if (textEnd === -1) {
            textEnd = html.length;
        }
        const start = copyPosition(position);
        const content = html.slice(position.index, textEnd);
        jumpPosition(position, html, textEnd);
        const end = copyPosition(position);
        this.tokens.push({ type, content, position: { start, end } });
    }
    scanComment() {
        const type = 'comment';
        const { html, position } = this;
        const start = copyPosition(position);
        feedPosition(position, html, 4); // "<!--".length
        let contentEnd = html.indexOf('-->', position.index);
        let commentEnd = contentEnd + 3; // "-->".length
        if (contentEnd === -1) {
            contentEnd = commentEnd = html.length;
        }
        const content = html.slice(position.index, contentEnd);
        jumpPosition(position, html, commentEnd);
        this.tokens.push({
            type,
            content,
            position: {
                start,
                end: copyPosition(position)
            }
        });
    }
    scanTag() {
        this.scanTagStart();
        const tagName = this.scanTagName();
        this.scanAttrs();
        this.scanTagEnd();
        return tagName;
    }
    scanTagStart() {
        const type = 'tag-start';
        const { html, position } = this;
        const secondChar = html.charAt(position.index + 1);
        const close = secondChar === '/';
        const start = copyPosition(position);
        feedPosition(position, html, close ? 2 : 1);
        this.tokens.push({ type, close, position: { start } });
    }
    scanTagEnd() {
        const type = 'tag-end';
        const { html, position } = this;
        const firstChar = html.charAt(position.index);
        const close = firstChar === '/';
        feedPosition(position, html, close ? 2 : 1);
        const end = copyPosition(position);
        this.tokens.push({ type, close, position: { end } });
    }
    scanTagName() {
        const type = 'tag';
        const { html, position } = this;
        const len = html.length;
        let start = position.index;
        while (start < len) {
            const char = html.charAt(start);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (isTagChar)
                break;
            start++;
        }
        let end = start + 1;
        while (end < len) {
            const char = html.charAt(end);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (!isTagChar)
                break;
            end++;
        }
        jumpPosition(position, html, end);
        const tagName = html.slice(start, end);
        this.tokens.push({
            type,
            content: tagName
        });
        return tagName;
    }
    scanAttrs() {
        const { html, position, tokens } = this;
        let cursor = position.index;
        let quote = null; // null, single-, or double-quote
        let wordBegin = cursor; // index of word start
        const words = []; // "key", "key=value", "key='value'", etc
        const len = html.length;
        while (cursor < len) {
            const char = html.charAt(cursor);
            if (quote) {
                const isQuoteEnd = char === quote;
                if (isQuoteEnd) {
                    quote = null;
                }
                cursor++;
                continue;
            }
            const isTagEnd = char === '/' || char === '>';
            if (isTagEnd) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                break;
            }
            const isWordEnd = isWhitespaceChar(char);
            if (isWordEnd) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                wordBegin = cursor + 1;
                cursor++;
                continue;
            }
            const isQuoteStart = char === '\'' || char === '"';
            if (isQuoteStart) {
                quote = char;
                cursor++;
                continue;
            }
            cursor++;
        }
        jumpPosition(position, html, cursor);
        const wLen = words.length;
        const type = 'attribute';
        for (let i = 0; i < wLen; i++) {
            const word = words[i];
            const isNotPair = word.includes('=');
            if (isNotPair) {
                const secondWord = words[i + 1];
                if (secondWord && secondWord.startsWith('=')) {
                    if (secondWord.length > 1) {
                        const newWord = word + secondWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                    const thirdWord = words[i + 2];
                    i += 1;
                    if (thirdWord) {
                        const newWord = word + '=' + thirdWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                }
            }
            if (word.endsWith('=')) {
                const secondWord = words[i + 1];
                if (secondWord && !secondWord.includes('=')) {
                    const newWord = word + secondWord;
                    tokens.push({ type, content: newWord });
                    i += 1;
                    continue;
                }
                const newWord = word.slice(0, -1);
                tokens.push({ type, content: newWord });
                continue;
            }
            tokens.push({ type, content: word });
        }
    }
    scanSkipTag(tagName) {
        const { html, position, tokens } = this;
        const safeTagName = tagName.toLowerCase();
        const len = html.length;
        let index = position.index;
        while (index < len) {
            const nextTag = html.indexOf('</', index);
            if (nextTag === -1) {
                this.scanText();
                break;
            }
            const tagStartPosition = copyPosition(position);
            jumpPosition(tagStartPosition, html, nextTag);
            const tagState = { html, position: tagStartPosition, tokens: [] };
            const name = this.scanTag();
            if (safeTagName !== name.toLowerCase()) {
                index = tagState.position.index;
                continue;
            }
            if (nextTag !== position.index) {
                const textStart = copyPosition(position);
                jumpPosition(position, html, nextTag);
                tokens.push({
                    type: 'text',
                    content: html.slice(textStart.index, nextTag),
                    position: {
                        start: textStart,
                        end: copyPosition(position)
                    }
                });
            }
            tokens.push.apply(tokens, tagState.tokens);
            jumpPosition(position, html, tagState.position.index);
            break;
        }
    }
}

function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}
const specialMiniElements = {
    img: 'image',
    iframe: 'web-view'
};
// https://developers.weixin.qq.com/miniprogram/dev/component
const isMiniElements = makeMap('input,canvas,progress,video,audio,form', true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
const isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,bdi,kbd,strong,big,map,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp', true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
const isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

const closingTagAncestorBreakers = {
    li: ['ul', 'ol', 'menu'],
    dt: ['dl'],
    dd: ['dl'],
    tbody: ['table'],
    thead: ['table'],
    tfoot: ['table'],
    tr: ['table'],
    td: ['table']
};
function hasTerminalParent(tagName, stack) {
    const tagParents = closingTagAncestorBreakers[tagName];
    if (tagParents) {
        let currentIndex = stack.length - 1;
        while (currentIndex >= 0) {
            const parentTagName = stack[currentIndex].tagName;
            if (parentTagName === tagName) {
                break;
            }
            if (tagParents && tagParents.includes(parentTagName)) {
                return true;
            }
            currentIndex--;
        }
    }
    return false;
}
function unquote(str) {
    const car = str.charAt(0);
    const end = str.length - 1;
    const isQuoteStart = car === '"' || car === "'";
    if (isQuoteStart && car === str.charAt(end)) {
        return str.slice(1, end);
    }
    return str;
}
function getTagName(tag) {
    if (specialMiniElements[tag]) {
        return specialMiniElements[tag];
    }
    else if (isMiniElements(tag)) {
        return tag;
    }
    else if (isBlockElements(tag)) {
        return 'view';
    }
    else if (isInlineElements(tag)) {
        return 'text';
    }
    return 'view';
}
function splitEqual(str) {
    const sep = '=';
    const idx = str.indexOf(sep);
    if (idx === -1)
        return [str];
    return [str.slice(0, idx), str.slice(idx + sep.length)];
}
function format(children) {
    return children.filter(child => {
        if (child.type === 'comment') {
            return false;
        }
        else if (child.type === 'text') {
            return child.content !== '';
        }
        return true;
    }).map((child) => {
        if (child.type === 'text') {
            const text = document$1.createTextNode(child.content);
            if (isFunction(options.html.transformText)) {
                return options.html.transformText(text, child);
            }
            return text;
        }
        const el = document$1.createElement(getTagName(child.tagName));
        el.className = child.tagName;
        for (let i = 0; i < child.attributes.length; i++) {
            const attr = child.attributes[i];
            const [key, value] = splitEqual(attr);
            if (key === 'class') {
                el.className += el.className;
            }
            else if (key[0] === 'o' && key[1] === 'n') {
                continue;
            }
            else {
                el.setAttribute(key, value == null ? true : unquote(value));
            }
        }
        const ch = format(child.children);
        for (let i = 0; i < ch.length; i++) {
            el.appendChild(ch[i]);
        }
        if (isFunction(options.html.transformElement)) {
            return options.html.transformElement(el, child);
        }
        return el;
    });
}
function parser(html) {
    const tokens = new Scaner(html).scan();
    const root = { tagName: '', children: [], type: 'element', attributes: [] };
    const state = { tokens, options, cursor: 0, stack: [root] };
    parse(state);
    return format(root.children);
}
function parse(state) {
    const { tokens, stack } = state;
    let { cursor } = state;
    const len = tokens.length;
    let nodes = stack[stack.length - 1].children;
    while (cursor < len) {
        const token = tokens[cursor];
        if (token.type !== 'tag-start') {
            // comment or text
            nodes.push(token);
            cursor++;
            continue;
        }
        const tagToken = tokens[++cursor];
        cursor++;
        const tagName = tagToken.content.toLowerCase();
        if (token.close) {
            let index = stack.length;
            let shouldRewind = false;
            while (--index > -1) {
                if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                }
            }
            while (cursor < len) {
                const endToken = tokens[cursor];
                if (endToken.type !== 'tag-end')
                    break;
                cursor++;
            }
            if (shouldRewind) {
                stack.splice(index);
                break;
            }
            else {
                continue;
            }
        }
        const isClosingTag = options.html.closingElements.has(tagName);
        let shouldRewindToAutoClose = isClosingTag;
        if (shouldRewindToAutoClose) {
            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
        }
        if (shouldRewindToAutoClose) {
            let currentIndex = stack.length - 1;
            while (currentIndex > 0) {
                if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    const previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                }
                currentIndex = currentIndex - 1;
            }
        }
        const attributes = [];
        let attrToken;
        while (cursor < len) {
            attrToken = tokens[cursor];
            if (attrToken.type === 'tag-end')
                break;
            attributes.push(attrToken.content);
            cursor++;
        }
        cursor++;
        const children = [];
        const element = {
            type: 'element',
            tagName: tagToken.content,
            attributes,
            children
        };
        nodes.push(element);
        const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
        if (hasChildren) {
            stack.push({ tagName, children });
            const innerState = { tokens, cursor, stack };
            parse(innerState);
            cursor = innerState.cursor;
        }
    }
    state.cursor = cursor;
}

function setInnerHTML(element, html) {
    element.textContent = '';
    const children = parser(html);
    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
}

const nodeId = incrementId();
class TaroNode extends TaroEventTarget {
    constructor(nodeType, nodeName) {
        super();
        this.parentNode = null;
        this.childNodes = [];
        this.hydrate = (node) => () => hydrate(node);
        this.nodeType = nodeType;
        this.nodeName = nodeName;
        this.uid = `_n_${nodeId()}`;
        eventSource.set(this.uid, this);
    }
    get _path() {
        if (this.parentNode !== null) {
            const index = process.env.TARO_ENV === 'swan'
                ? this.parentNode.childNodes.indexOf(this)
                : '[' + this.parentNode.childNodes.indexOf(this) + ']';
            return `${this.parentNode._path}.${"cn" /* Childnodes */}.${index}`;
        }
        return '';
    }
    get _root() {
        if (this.parentNode !== null) {
            return this.parentNode._root;
        }
        return null;
    }
    get nextSibling() {
        const parentNode = this.parentNode;
        if (parentNode) {
            return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
        }
        return null;
    }
    get previousSibling() {
        const parentNode = this.parentNode;
        if (parentNode) {
            return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1] || null;
        }
        return null;
    }
    insertBefore(newChild, refChild, isReplace) {
        newChild.remove();
        newChild.parentNode = this;
        let payload;
        if (refChild) {
            const index = this.findIndex(this.childNodes, refChild);
            this.childNodes.splice(index, 0, newChild);
            if (isReplace === true) {
                payload = {
                    path: newChild._path,
                    value: this.hydrate(newChild)
                };
            }
            else {
                payload = {
                    path: `${this._path}.${"cn" /* Childnodes */}`,
                    value: () => this.childNodes.map(hydrate)
                };
            }
        }
        else {
            this.childNodes.push(newChild);
            payload = {
                path: newChild._path,
                value: this.hydrate(newChild)
            };
        }
        this.enqueueUpdate(payload);
        return newChild;
    }
    appendChild(child) {
        this.insertBefore(child);
    }
    replaceChild(newChild, oldChild) {
        if (oldChild.parentNode === this) {
            this.insertBefore(newChild, oldChild, true);
            oldChild.remove(true);
            return oldChild;
        }
    }
    removeChild(child, isReplace) {
        const index = this.findIndex(this.childNodes, child);
        this.childNodes.splice(index, 1);
        if (isReplace !== true) {
            this.enqueueUpdate({
                path: `${this._path}.${"cn" /* Childnodes */}`,
                value: () => this.childNodes.map(hydrate)
            });
        }
        child.parentNode = null;
        eventSource.delete(child.uid);
        child._empty();
        return child;
    }
    remove(isReplace) {
        if (this.parentNode) {
            this.parentNode.removeChild(this, isReplace);
        }
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        const c = this.childNodes;
        return c[c.length - 1] || null;
    }
    hasChildNodes() {
        return this.childNodes.length > 0;
    }
    enqueueUpdate(payload) {
        if (this._root === null) {
            return;
        }
        this._root.enqueueUpdate(payload);
    }
    /**
     * like jQuery's $.empty()
     */
    _empty() {
        while (this.childNodes.length > 0) {
            const child = this.childNodes[0];
            child.parentNode = null;
            eventSource.delete(child.uid);
            this.childNodes.shift();
        }
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    set textContent(text) {
        if (text === '') {
            this._empty();
            this.enqueueUpdate({
                path: `${this._path}.${"cn" /* Childnodes */}`,
                value: () => []
            });
        }
    }
    set innerHTML(html) {
        setInnerHTML(this, html);
    }
    get innerHTML() {
        return '';
    }
    findIndex(childeNodes, refChild) {
        const index = childeNodes.indexOf(refChild);
        ensure(index !== -1, 'The node to be replaced is not a child of this node.');
        return index;
    }
}

class TaroText extends TaroNode {
    constructor(text) {
        super(3 /* TEXT_NODE */, '#text');
        this._value = text;
    }
    set textContent(text) {
        this._value = text;
        this.enqueueUpdate({
            path: `${this._path}.${"v" /* Text */}`,
            value: text
        });
    }
    get textContent() {
        return this._value;
    }
    set nodeValue(text) {
        this.textContent = text;
    }
    get nodeValue() {
        return this._value;
    }
}

/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
const styleProperties = [
    'alignContent',
    'alignItems',
    'alignSelf',
    'alignmentAdjust',
    'alignmentBaseline',
    'all',
    'animation',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction',
    'appearance',
    'azimuth',
    'backfaceVisibility',
    'background',
    'backgroundAttachment',
    'backgroundBlendMode',
    'backgroundClip',
    'backgroundColor',
    'backgroundImage',
    'backgroundOrigin',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'baselineShift',
    'blockOverflow',
    'blockSize',
    'bookmarkLabel',
    'bookmarkLevel',
    'bookmarkState',
    'border',
    'borderBlock',
    'borderBlockColor',
    'borderBlockEnd',
    'borderBlockEndColor',
    'borderBlockEndStyle',
    'borderBlockEndWidth',
    'borderBlockStart',
    'borderBlockStartColor',
    'borderBlockStartStyle',
    'borderBlockStartWidth',
    'borderBlockStyle',
    'borderBlockWidth',
    'borderBottom',
    'borderBottomColor',
    'borderBottomFitLength',
    'borderBottomFitWidth',
    'borderBottomImage',
    'borderBottomLeftFitWidth',
    'borderBottomLeftImage',
    'borderBottomLeftRadius',
    'borderBottomRightFitLength',
    'borderBottomRightFitWidth',
    'borderBottomRightImage',
    'borderBottomRightRadius',
    'borderBottomStyle',
    'borderBottomWidth',
    'borderBottomlEftFitLength',
    'borderBoundary',
    'borderBreak',
    'borderCollapse',
    'borderColor',
    'borderCornerFit',
    'borderCornerImage',
    'borderCornerImageTransform',
    'borderEndEndRadius',
    'borderEndStartRadius',
    'borderFit',
    'borderFitLength',
    'borderFitWidth',
    'borderImage',
    'borderImageOutset',
    'borderImageRepeat',
    'borderImageSlice',
    'borderImageSource',
    'borderImageTransform',
    'borderImageWidth',
    'borderInline',
    'borderInlineColor',
    'borderInlineEnd',
    'borderInlineEndColor',
    'borderInlineEndStyle',
    'borderInlineEndWidth',
    'borderInlineStart',
    'borderInlineStartColor',
    'borderInlineStartStyle',
    'borderInlineStartWidth',
    'borderInlineStyle',
    'borderInlineWidth',
    'borderLeft',
    'borderLeftColor',
    'borderLeftFitLength',
    'borderLeftFitWidth',
    'borderLeftImage',
    'borderLeftStyle',
    'borderLeftWidth',
    'borderRadius',
    'borderRight',
    'borderRightColor',
    'borderRightFitLength',
    'borderRightFitWidth',
    'borderRightImage',
    'borderRightStyle',
    'borderRightWidth',
    'borderSpacing',
    'borderStartEndRadius',
    'borderStartStartRadius',
    'borderStyle',
    'borderTop',
    'borderTopColor',
    'borderTopFitLength',
    'borderTopFitWidth',
    'borderTopImage',
    'borderTopLeftFitLength',
    'borderTopLeftFitWidth',
    'borderTopLeftImage',
    'borderTopLeftRadius',
    'borderTopRightFitLength',
    'borderTopRightFitWidth',
    'borderTopRightImage',
    'borderTopRightRadius',
    'borderTopStyle',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'boxDecorationBreak',
    'boxShadow',
    'boxSizing',
    'boxSnap',
    'breakAfter',
    'breakBefore',
    'breakInside',
    'captionSide',
    'caret',
    'caretColor',
    'caretShape',
    'chains',
    'clear',
    'clip',
    'clipPath',
    'clipRule',
    'color',
    'colorAdjust',
    'colorInterpolationFilters',
    'colorScheme',
    'columnCount',
    'columnFill',
    'columnGap',
    'columnRule',
    'columnRuleColor',
    'columnRuleStyle',
    'columnRuleWidth',
    'columnSpan',
    'columnWidth',
    'columns',
    'contain',
    'content',
    'continue',
    'counterIncrement',
    'counterReset',
    'counterSet',
    'cue',
    'cueAfter',
    'cueBefore',
    'cursor',
    'direction',
    'display',
    'dominantBaseline',
    'dropInitialAfterAdjust',
    'dropInitialAfterAlign',
    'dropInitialBeforeAdjust',
    'dropInitialBeforeAlign',
    'dropInitialSize',
    'dropInitialValue',
    'elevation',
    'emptyCells',
    'filter',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexFlow',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'float',
    'floodColor',
    'floodOpacity',
    'flow',
    'flowFrom',
    'flowInto',
    'font',
    'fontFamily',
    'fontFeatureSettings',
    'fontKerning',
    'fontLanguageOverride',
    'fontMaxSize',
    'fontMinSize',
    'fontOpticalSizing',
    'fontPalette',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontSynthesis',
    'fontSynthesisSmallCaps',
    'fontSynthesisStyle',
    'fontSynthesisWeight',
    'fontVariant',
    'fontVariantAlternates',
    'fontVariantCaps',
    'fontVariantEastAsian',
    'fontVariantEmoji',
    'fontVariantLigatures',
    'fontVariantNumeric',
    'fontVariantPosition',
    'fontVariationSettings',
    'fontWeight',
    'footnoteDisplay',
    'footnotePolicy',
    'forcedColorAdjust',
    'gap',
    'glyphOrientationVertical',
    'grid',
    'gridArea',
    'gridAutoColumns',
    'gridAutoFlow',
    'gridAutoRows',
    'gridColumn',
    'gridColumnEnd',
    'gridColumnStart',
    'gridRow',
    'gridRowEnd',
    'gridRowStart',
    'gridTemplate',
    'gridTemplateAreas',
    'gridTemplateColumns',
    'gridTemplateRows',
    'hangingPunctuation',
    'height',
    'hyphenateCharacter',
    'hyphenateLimitChars',
    'hyphenateLimitLast',
    'hyphenateLimitLines',
    'hyphenateLimitZone',
    'hyphens',
    'imageOrientation',
    'imageResolution',
    'initialLetters',
    'initialLettersAlign',
    'initialLettersWrap',
    'inlineBoxAlign',
    'inlineSize',
    'inlineSizing',
    'inset',
    'insetBlock',
    'insetBlockEnd',
    'insetBlockStart',
    'insetInline',
    'insetInlineEnd',
    'insetInlineStart',
    'isolation',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'left',
    'letterSpacing',
    'lightingColor',
    'lineBreak',
    'lineClamp',
    'lineGrid',
    'lineHeight',
    'linePadding',
    'lineSnap',
    'lineStacking',
    'lineStackingRuby',
    'lineStackingShift',
    'lineStackingStrategy',
    'listStyle',
    'listStyleImage',
    'listStylePosition',
    'listStyleType',
    'margin',
    'marginBlock',
    'marginBlockEnd',
    'marginBlockStart',
    'marginBottom',
    'marginInline',
    'marginInlineEnd',
    'marginInlineStart',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginTrim',
    'markerSide',
    'mask',
    'maskBorder',
    'maskBorderMode',
    'maskBorderOutset',
    'maskBorderRepeat',
    'maskBorderSlice',
    'maskBorderSource',
    'maskBorderWidth',
    'maskClip',
    'maskComposite',
    'maskImage',
    'maskMode',
    'maskOrigin',
    'maskPosition',
    'maskRepeat',
    'maskSize',
    'maskType',
    'maxBlockSize',
    'maxHeight',
    'maxInlineSize',
    'maxLines',
    'maxWidth',
    'minBlockSize',
    'minHeight',
    'minInlineSize',
    'minWidth',
    'mixBlendMode',
    'navDown',
    'navLeft',
    'navRight',
    'navUp',
    'objectFit',
    'objectPosition',
    'offset',
    'offsetAfter',
    'offsetAnchor',
    'offsetBefore',
    'offsetDistance',
    'offsetEnd',
    'offsetPath',
    'offsetPosition',
    'offsetRotate',
    'offsetStart',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outlineColor',
    'outlineOffset',
    'outlineStyle',
    'outlineWidth',
    'overflow',
    'overflowBlock',
    'overflowInline',
    'overflowWrap',
    'overflowX',
    'overflowY',
    'padding',
    'paddingBlock',
    'paddingBlockEnd',
    'paddingBlockStart',
    'paddingBottom',
    'paddingInline',
    'paddingInlineEnd',
    'paddingInlineStart',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'page',
    'pageBreakAfter',
    'pageBreakBefore',
    'pageBreakInside',
    'pause',
    'pauseAfter',
    'pauseBefore',
    'perspective',
    'perspectiveOrigin',
    'pitch',
    'pitchRange',
    'placeContent',
    'placeItems',
    'placeSelf',
    'playDuring',
    'position',
    'quotes',
    'regionFragment',
    'resize',
    'richness',
    'right',
    'rowGap',
    'rubyAlign',
    'rubyMerge',
    'rubyPosition',
    'running',
    'scrollBehavior',
    'scrollMargin',
    'scrollMarginBlock',
    'scrollMarginBlockEnd',
    'scrollMarginBlockStart',
    'scrollMarginBottom',
    'scrollMarginInline',
    'scrollMarginInlineEnd',
    'scrollMarginInlineStart',
    'scrollMarginLeft',
    'scrollMarginRight',
    'scrollMarginTop',
    'scrollPadding',
    'scrollPaddingBlock',
    'scrollPaddingBlockEnd',
    'scrollPaddingBlockStart',
    'scrollPaddingBottom',
    'scrollPaddingInline',
    'scrollPaddingInlineEnd',
    'scrollPaddingInlineStart',
    'scrollPaddingLeft',
    'scrollPaddingRight',
    'scrollPaddingTop',
    'scrollSnapAlign',
    'scrollSnapStop',
    'scrollSnapType',
    'shapeImageThreshold',
    'shapeInside',
    'shapeMargin',
    'shapeOutside',
    'speak',
    'speakHeader',
    'speakNumeral',
    'speakPunctuation',
    'speechRate',
    'stress',
    'stringSet',
    'tabSize',
    'tableLayout',
    'textAlign',
    'textAlignAll',
    'textAlignLast',
    'textCombineUpright',
    'textDecoration',
    'textDecorationColor',
    'textDecorationLine',
    'textDecorationStyle',
    'textEmphasis',
    'textEmphasisColor',
    'textEmphasisPosition',
    'textEmphasisStyle',
    'textGroupAlign',
    'textHeight',
    'textIndent',
    'textJustify',
    'textOrientation',
    'textOverflow',
    'textShadow',
    'textSpaceCollapse',
    'textSpaceTrim',
    'textSpacing',
    'textTransform',
    'textUnderlinePosition',
    'textWrap',
    'top',
    'transform',
    'transformBox',
    'transformOrigin',
    'transformStyle',
    'transition',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'unicodeBidi',
    'userSelect',
    'verticalAlign',
    'visibility',
    'voiceFamily',
    'volume',
    'whiteSpace',
    'widows',
    'width',
    'willChange',
    'wordBreak',
    'wordSpacing',
    'wordWrap',
    'wrapAfter',
    'wrapBefore',
    'wrapFlow',
    'wrapInside',
    'wrapThrough',
    'writingMode',
    'zIndex'
];

const PROPERTY_THRESHOLD = 2046;
const SET_DATA = '小程序 setData';
const PAGE_INIT = '页面初始化';

function setStyle(newVal, styleKey) {
    const old = this[styleKey];
    if (newVal) {
        this._usedStyleProp.add(styleKey);
    }
    warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
    if (old !== newVal) {
        this._value[styleKey] = newVal;
        this._element.enqueueUpdate({
            path: `${this._element._path}.${"st" /* Style */}`,
            value: this.cssText
        });
    }
}
function initStyle(ctor) {
    const properties = {};
    for (let i = 0; i < styleProperties.length; i++) {
        const styleKey = styleProperties[i];
        properties[styleKey] = {
            get() {
                return this._value[styleKey] || '';
            },
            set(newVal) {
                setStyle.call(this, newVal, styleKey);
            }
        };
    }
    Object.defineProperties(ctor.prototype, properties);
}
class Style {
    constructor(element) {
        this._element = element;
        this._usedStyleProp = new Set();
        this._value = {};
    }
    setCssVariables(styleKey) {
        this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
            enumerable: true,
            configurable: true,
            get: () => {
                return this._value[styleKey] || '';
            },
            set: (newVal) => {
                setStyle.call(this, newVal, styleKey);
            }
        });
    }
    get cssText() {
        let text = '';
        this._usedStyleProp.forEach(key => {
            const val = this[key];
            if (!val)
                return;
            text += `${toDashed(key)}: ${val};`;
        });
        return text;
    }
    set cssText(str) {
        if (str == null) {
            str = '';
        }
        this._usedStyleProp.forEach(prop => {
            this.removeProperty(prop);
        });
        if (str === '') {
            return;
        }
        const rules = str.split(';');
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i].trim();
            if (rule === '') {
                continue;
            }
            const [propName, val] = rule.split(':');
            if (isUndefined(val)) {
                continue;
            }
            this.setProperty(propName.trim(), val.trim());
        }
    }
    setProperty(propertyName, value) {
        if (propertyName[0] === '-') {
            this.setCssVariables(propertyName);
        }
        else {
            propertyName = toCamelCase(propertyName);
        }
        if (isUndefined(value)) {
            return;
        }
        if (value === null || value === '') {
            this.removeProperty(propertyName);
        }
        else {
            this[propertyName] = value;
        }
    }
    removeProperty(propertyName) {
        propertyName = toCamelCase(propertyName);
        if (!this._usedStyleProp.has(propertyName)) {
            return '';
        }
        const value = this[propertyName];
        this[propertyName] = '';
        this._usedStyleProp.delete(propertyName);
        return value;
    }
    getPropertyValue(propertyName) {
        propertyName = toCamelCase(propertyName);
        const value = this[propertyName];
        if (!value) {
            return '';
        }
        return value;
    }
}
initStyle(Style);

/* eslint-disable no-dupe-class-members */
class TaroElement extends TaroNode {
    constructor(nodeType, nodeName) {
        super(nodeType || 1 /* ELEMENT_NODE */, nodeName);
        this.props = {};
        this.dataset = EMPTY_OBJ;
        this.tagName = nodeName.toUpperCase();
        this.style = new Style(this);
        warn(this.tagName === 'MAP' && process.env.TARO_ENV === 'weapp', '微信小程序 map 组件的 `setting` 属性需要传递一个默认值。详情：\n https://developers.weixin.qq.com/miniprogram/dev/component/map.html');
    }
    get id() {
        return this.getAttribute('id');
    }
    set id(val) {
        this.setAttribute('id', val);
    }
    get className() {
        return this.getAttribute('class') || '';
    }
    set className(val) {
        this.setAttribute('class', val);
    }
    get cssText() {
        return this.getAttribute('style') || '';
    }
    get children() {
        return this.childNodes.filter(isElement);
    }
    hasAttribute(qualifiedName) {
        return !isUndefined(this.props[qualifiedName]);
    }
    hasAttributes() {
        return this.attributes.length > 0;
    }
    focus() {
        this.setAttribute('focus', true);
    }
    blur() {
        this.setAttribute('focus', false);
    }
    setAttribute(qualifiedName, value) {
        warn(isString(value) && value.length > PROPERTY_THRESHOLD, `元素 ${this.nodeName} 的 属性 ${qualifiedName} 的值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`);
        if (qualifiedName === 'style') {
            this.style.cssText = value;
            qualifiedName = "st" /* Style */;
        }
        else if (qualifiedName === 'id') {
            eventSource.delete(this.uid);
            this.props[qualifiedName] = this.uid = value;
            eventSource.set(value, this);
            qualifiedName = 'uid';
        }
        else {
            this.props[qualifiedName] = value;
            if (qualifiedName === 'class') {
                qualifiedName = "cl" /* Class */;
            }
            if (qualifiedName.startsWith('data-')) {
                if (this.dataset === EMPTY_OBJ) {
                    this.dataset = Object.create(null);
                }
                this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] = value;
            }
        }
        this.enqueueUpdate({
            path: `${this._path}.${process.env.FRAMEWORK === 'vue' ? toCamelCase(qualifiedName) : qualifiedName}`,
            value
        });
    }
    removeAttribute(qualifiedName) {
        if (qualifiedName === 'style') {
            this.style.cssText = '';
        }
        else if (process.env.FRAMEWORK === 'vue') {
            const compName = capitalize(toCamelCase(this.tagName.toLowerCase()));
            if (compName in internalComponents && hasOwn(internalComponents[compName], qualifiedName) && isBooleanStringLiteral(internalComponents[compName][qualifiedName])) {
                // avoid attribute being removed because set false value in vue
                this.setAttribute(qualifiedName, false);
            }
            else {
                delete this.props[qualifiedName];
            }
        }
        else {
            delete this.props[qualifiedName];
        }
        this.enqueueUpdate({
            path: `${this._path}.${process.env.FRAMEWORK === 'vue' ? toCamelCase(qualifiedName) : qualifiedName}`,
            value: ''
        });
    }
    getAttribute(qualifiedName) {
        const attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
        return attr !== null && attr !== void 0 ? attr : '';
    }
    get attributes() {
        const propKeys = Object.keys(this.props);
        const style = this.style.cssText;
        const attrs = propKeys.map(p => ({ name: p, value: this.props[p] }));
        return attrs.concat(style ? { name: 'style', value: style } : []);
    }
    get parentElement() {
        if (this.parentNode instanceof TaroElement) {
            return this.parentNode;
        }
        return null;
    }
    dispatchEvent(event) {
        const cancelable = event.cancelable;
        const listeners = this.__handlers[event.type];
        if (!isArray(listeners)) {
            return;
        }
        for (let i = listeners.length; i--;) {
            const listener = listeners[i];
            let result;
            if (listener._stop) {
                listener._stop = false;
            }
            else {
                result = listener.call(this, event);
            }
            if ((result === false || event._end) && cancelable) {
                event.defaultPrevented = true;
            }
            if (event._end && event._stop) {
                break;
            }
        }
        if (event._stop) {
            this._stopPropagation(event);
        }
        else {
            event._stop = true;
        }
        return listeners != null;
    }
    get textContent() {
        let text = '';
        for (let i = 0; i < this.childNodes.length; i++) {
            const element = this.childNodes[i];
            text += element.textContent;
        }
        return text;
    }
    set textContent(text) {
        super.textContent = text;
    }
    _stopPropagation(event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let target = this;
        // eslint-disable-next-line no-cond-assign
        while ((target = target.parentNode)) {
            const listeners = target.__handlers[event.type];
            if (!isArray(listeners)) {
                continue;
            }
            for (let i = listeners.length; i--;) {
                const l = listeners[i];
                l._stop = true;
            }
        }
    }
}

class FormElement extends TaroElement {
    get value() {
        // eslint-disable-next-line dot-notation
        const val = this.props['value'];
        return val == null ? '' : val;
    }
    set value(val) {
        this.setAttribute('value', val);
    }
}

class Performance {
    constructor() {
        this.recorder = new Map();
    }
    start(id) {
        if (!options.debug) {
            return;
        }
        this.recorder.set(id, Date.now());
    }
    stop(id) {
        if (!options.debug) {
            return;
        }
        const now = Date.now();
        const prev = this.recorder.get(id);
        const time = now - prev;
        // eslint-disable-next-line no-console
        console.log(`${id} 时长： ${time}ms`);
    }
}
const perf = new Performance();

class TaroRootElement extends TaroElement {
    constructor() {
        super(1 /* ELEMENT_NODE */, 'root');
        this.pendingUpdate = false;
        this.updatePayloads = [];
        this.pendingFlush = false;
        this.updateCallbacks = [];
        this.ctx = null;
    }
    get _path() {
        return 'root';
    }
    get _root() {
        return this;
    }
    enqueueUpdate(payload) {
        this.updatePayloads.push(payload);
        if (this.pendingUpdate || this.ctx === null) {
            return;
        }
        this.performUpdate();
    }
    performUpdate(initRender = false, prerender) {
        this.pendingUpdate = true;
        const ctx = this.ctx;
        setTimeout(() => {
            perf.start(SET_DATA);
            const data = Object.create(null);
            const resetPaths = new Set(initRender
                ? ['root.cn.[0]', 'root.cn[0]']
                : []);
            while (this.updatePayloads.length > 0) {
                const { path, value } = this.updatePayloads.shift();
                if (path.endsWith("cn" /* Childnodes */)) {
                    resetPaths.add(path);
                }
                data[path] = value;
            }
            for (const path in data) {
                resetPaths.forEach(p => {
                    // 已经重置了数组，就不需要分别再设置了
                    if (path.includes(p) && path !== p) {
                        delete data[path];
                    }
                });
                const value = data[path];
                if (isFunction(value)) {
                    data[path] = value();
                }
            }
            if (isFunction(prerender)) {
                prerender(data);
            }
            else {
                this.pendingUpdate = false;
                ctx.setData(data, () => {
                    perf.stop(SET_DATA);
                    if (!this.pendingFlush) {
                        this.flushUpdateCallback();
                    }
                    if (initRender) {
                        perf.stop(PAGE_INIT);
                    }
                });
            }
        }, 0);
    }
    enqueueUpdateCallbak(cb, ctx) {
        this.updateCallbacks.push(() => {
            ctx ? cb.call(ctx) : cb();
        });
    }
    flushUpdateCallback() {
        this.pendingFlush = false;
        const copies = this.updateCallbacks.slice(0);
        this.updateCallbacks.length = 0;
        for (let i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

const isBrowser = typeof document !== 'undefined' && !!document.scripts;
const doc = isBrowser ? document : EMPTY_OBJ;
const win = isBrowser ? window : EMPTY_OBJ;

class TaroDocument extends TaroElement {
    constructor() {
        super(9 /* DOCUMENT_NODE */, '#document');
    }
    createElement(type) {
        if (type === 'root') {
            return new TaroRootElement();
        }
        if (controlledComponent.has(type)) {
            return new FormElement(1 /* ELEMENT_NODE */, type);
        }
        return new TaroElement(1 /* ELEMENT_NODE */, type);
    }
    createTextNode(text) {
        return new TaroText(text);
    }
    getElementById(id) {
        const el = eventSource.get(id);
        return isUndefined(el) ? null : el;
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    createComment() {
        return new TaroText('');
    }
}
function createDocument() {
    const doc = new TaroDocument();
    doc.appendChild((doc.documentElement = doc.createElement('html')));
    doc.documentElement.appendChild((doc.head = doc.createElement('head')));
    doc.documentElement.appendChild((doc.createElement('body')));
    const app = doc.createElement('app');
    app.id = 'app';
    const container = doc.createElement('container'); // 多包一层主要为了兼容 vue
    container.appendChild(app);
    doc.documentElement.lastChild.appendChild(container);
    return doc;
}
const document$1 = (isBrowser ? doc : createDocument());

const machine = 'Macintosh';
const arch = 'Intel Mac OS X 10_14_5';
const engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
const navigator = isBrowser ? win.navigator : {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
    cookieEnabled: true,
    mimeTypes: [],
    onLine: true,
    platform: 'MacIntel',
    plugins: [],
    product: 'Taro',
    productSub: '20030107',
    userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
    vendor: 'Joyent',
    vendorSub: ''
};

// https://github.com/myrne/performance-now
let now;
(function () {
    let loadTime;
    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
        now = function () {
            return performance.now();
        };
    }
    else if (Date.now) {
        now = function () {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    }
    else {
        now = function () {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
})();
let lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
const raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
    const _now = now();
    const nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
    return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - _now);
};
const caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;

const window$1 = isBrowser ? win : {
    navigator,
    document: document$1
};
if (process.env.TARO_ENV === 'tt' || process.env.TARO_ENV === 'swan' || process.env.TARO_ENV === 'jd') {
    window$1.requestAnimationFrame = raf;
    window$1.cancelAnimationFrame = caf;
    window$1.Date = Date;
    window$1.setTimeout = setTimeout;
}

const Current = {
    app: null,
    router: null,
    page: null
};

class Events {
    constructor(opts) {
        if (typeof opts !== 'undefined' && opts.callbacks) {
            this.callbacks = opts.callbacks;
        }
        else {
            this.callbacks = {};
        }
    }
    on(eventName, callback, context) {
        let event, node, tail, list;
        if (!callback) {
            return this;
        }
        eventName = eventName.split(Events.eventSplitter);
        const calls = this.callbacks;
        while ((event = eventName.shift())) {
            list = calls[event];
            node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event, calls, node, tail, cb, ctx;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (!(events || callback || context)) {
            delete this.callbacks;
            return this;
        }
        events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
        while ((event = events.shift())) {
            node = calls[event];
            delete calls[event];
            if (!node || !(callback || context)) {
                continue;
            }
            tail = node.tail;
            while ((node = node.next) !== tail) {
                cb = node.callback;
                ctx = node.context;
                if ((callback && cb !== callback) || (context && ctx !== context)) {
                    this.on(event, cb, ctx);
                }
            }
        }
        return this;
    }
    trigger(events) {
        let event, node, calls, tail;
        if (!(calls = this.callbacks)) {
            return this;
        }
        events = events.split(Events.eventSplitter);
        const rest = [].slice.call(arguments, 1);
        while ((event = events.shift())) {
            if ((node = calls[event])) {
                tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, rest);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = /\s+/;
let eventCenter;
if (process.env.TARO_ENV === 'alipay') {
    if (!my.taroEventCenter) {
        my.taroEventCenter = new Events();
    }
    eventCenter = my.taroEventCenter;
}
else {
    eventCenter = new Events();
}

/* eslint-disable dot-notation */
const instances = new Map();
function injectPageInstance(inst, id) {
    instances.set(id, inst);
}
function getPageInstance(id) {
    return instances.get(id);
}
function stringify(obj) {
    if (obj == null) {
        return '';
    }
    return '?' + Object.keys(obj).map((key) => {
        return key + '=' + obj[key];
    }).join('&');
}
function getPath(id, options) {
    let path = id;
    if (!isBrowser) {
        path = id + stringify(options);
    }
    return path;
}
// 初始值设置为 any 主要是为了过 TS 的校验
let R = EMPTY_OBJ;
let PageContext = EMPTY_OBJ;

const taroHooks = (lifecycle) => {
    return (fn, deps = []) => {
        const id = R.useContext(PageContext);
        R.useLayoutEffect(() => {
            let inst = getPageInstance(id);
            let first = false;
            if (inst == null) {
                first = true;
                inst = Object.create(null);
            }
            if (lifecycle !== 'onShareAppMessage') {
                inst[lifecycle] = [
                    ...(inst[lifecycle] || []),
                    fn.bind(null)
                ];
            }
            else {
                inst[lifecycle] = fn.bind(null);
            }
            if (first) {
                injectPageInstance(inst, id);
            }
        }, deps);
    };
};
const useDidShow = taroHooks('componentDidShow');
const useDidHide = taroHooks('componentDidHide');
const usePullDownRefresh = taroHooks('onPullDownRefresh');
const useReachBottom = taroHooks('onReachBottom');
const usePageScroll = taroHooks('onPageScroll');
const useResize = taroHooks('onResize');
const useShareAppMessage = taroHooks('onShareAppMessage');
const useTabItemTap = taroHooks('onTabItemTap');
const useTitleClick = taroHooks('onTitleClick');
const useOptionMenuClick = taroHooks('onOptionMenuClick');
const usePullIntercept = taroHooks('onPullIntercept');
const useRouter = (dynamic = false) => {
    return dynamic ? Current.router : R.useMemo(() => Current.router, []);
};

function removeLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path.slice(1) : path;
}
const nextTick = (cb, ctx) => {
    const router = Current.router;
    const timerFunc = () => {
        setTimeout(function () {
            ctx ? cb.call(ctx) : cb();
        }, 1);
    };
    if (!isBrowser && router !== null) {
        let pageElement = null;
        const path = getPath(removeLeadingSlash(router.path), router.params);
        pageElement = document$1.getElementById(path);
        if (pageElement !== null) {
            pageElement.enqueueUpdateCallbak(cb, ctx);
        }
        else {
            timerFunc();
        }
    }
    else {
        timerFunc();
    }
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var _i = 0; _i < descs.length; _i++) {
      Object.defineProperty(obj, descs[_i][0], descs[_i][1]);
    }

    return obj;
  };
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

function render() {}

var Chain = /*#__PURE__*/function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p["catch"](function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread2({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    chain.proceed(requestParams).then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    })["catch"](function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (typeof p.abort === 'function') ;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url; // eslint-disable-next-line no-console

  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    // eslint-disable-next-line no-console
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});

var onAndSyncApis = {
  onSocketOpen: true,
  onSocketError: true,
  onSocketMessage: true,
  onSocketClose: true,
  onBackgroundAudioPlay: true,
  onBackgroundAudioPause: true,
  onBackgroundAudioStop: true,
  onNetworkStatusChange: true,
  onAccelerometerChange: true,
  onCompassChange: true,
  onBluetoothAdapterStateChange: true,
  onBluetoothDeviceFound: true,
  onBLEConnectionStateChange: true,
  onBLECharacteristicValueChange: true,
  onBeaconUpdate: true,
  onBeaconServiceChange: true,
  onUserCaptureScreen: true,
  onHCEMessage: true,
  onGetWifiList: true,
  onWifiConnected: true,
  onDeviceMotionChange: true,
  setStorageSync: true,
  getStorageSync: true,
  getStorageInfoSync: true,
  removeStorageSync: true,
  clearStorageSync: true,
  getSystemInfoSync: true,
  getExtConfigSync: true,
  getLogManager: true,
  onMemoryWarning: true,
  reportMonitor: true,
  reportAnalytics: true,
  navigateToSmartGameProgram: true,
  // 文件
  getFileSystemManager: true,
  getLaunchOptionsSync: true,
  onPageNotFound: true,
  onError: true,
  onAppShow: true,
  onAppHide: true,
  offPageNotFound: true,
  offError: true,
  offAppShow: true,
  offAppHide: true,
  onAudioInterruptionEnd: true,
  onAudioInterruptionBegin: true,
  onLocationChange: true,
  offLocationChange: true
};
var noPromiseApis = {
  // 媒体
  stopRecord: true,
  getRecorderManager: true,
  pauseVoice: true,
  stopVoice: true,
  pauseBackgroundAudio: true,
  stopBackgroundAudio: true,
  getBackgroundAudioManager: true,
  createAudioContext: true,
  createInnerAudioContext: true,
  createVideoContext: true,
  createCameraContext: true,
  createLivePlayerContext: true,
  createLivePusherContext: true,
  // 位置
  createMapContext: true,
  // 设备
  canIUse: true,
  startAccelerometer: true,
  stopAccelerometer: true,
  startCompass: true,
  stopCompass: true,
  // 界面
  hideToast: true,
  hideLoading: true,
  showNavigationBarLoading: true,
  hideNavigationBarLoading: true,
  createAnimation: true,
  createSelectorQuery: true,
  createOffscreenCanvas: true,
  createCanvasContext: true,
  // createContext: true,
  drawCanvas: true,
  hideKeyboard: true,
  stopPullDownRefresh: true,
  createIntersectionObserver: true,
  // 菜单
  getMenuButtonBoundingClientRect: true,
  onWindowResize: true,
  offWindowResize: true,
  // 拓展接口
  arrayBufferToBase64: true,
  base64ToArrayBuffer: true,
  getAccountInfoSync: true,
  getUpdateManager: true,
  createWorker: true,
  // 广告
  createRewardedVideoAd: true,
  createInterstitialAd: true
};
var otherApis = {
  // 网络
  uploadFile: true,
  downloadFile: true,
  connectSocket: true,
  sendSocketMessage: true,
  closeSocket: true,
  // 媒体
  chooseImage: true,
  chooseMessageFile: true,
  previewImage: true,
  getImageInfo: true,
  compressImage: true,
  saveImageToPhotosAlbum: true,
  startRecord: true,
  playVoice: true,
  setInnerAudioOption: true,
  getAvailableAudioSources: true,
  getBackgroundAudioPlayerState: true,
  playBackgroundAudio: true,
  seekBackgroundAudio: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  loadFontFace: true,
  // 文件
  saveFile: true,
  getFileInfo: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  // 数据缓存
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  // 导航
  navigateBack: true,
  navigateTo: true,
  redirectTo: true,
  switchTab: true,
  reLaunch: true,
  // 位置
  startLocationUpdate: true,
  startLocationUpdateBackground: true,
  stopLocationUpdate: true,
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  // 设备
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setClipboardData: true,
  getClipboardData: true,
  openBluetoothAdapter: true,
  closeBluetoothAdapter: true,
  getBluetoothAdapterState: true,
  startBluetoothDevicesDiscovery: true,
  stopBluetoothDevicesDiscovery: true,
  getBluetoothDevices: true,
  getConnectedBluetoothDevices: true,
  createBLEConnection: true,
  closeBLEConnection: true,
  getBLEDeviceServices: true,
  getBLEDeviceCharacteristics: true,
  readBLECharacteristicValue: true,
  writeBLECharacteristicValue: true,
  notifyBLECharacteristicValueChange: true,
  startBeaconDiscovery: true,
  stopBeaconDiscovery: true,
  getBeacons: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  getHCEState: true,
  startHCE: true,
  stopHCE: true,
  sendHCEMessage: true,
  startWifi: true,
  stopWifi: true,
  connectWifi: true,
  getWifiList: true,
  setWifiList: true,
  getConnectedWifi: true,
  startDeviceMotionListening: true,
  stopDeviceMotionListening: true,
  // 界面
  pageScrollTo: true,
  showToast: true,
  showLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  setTabBarBadge: true,
  removeTabBarBadge: true,
  showTabBarRedDot: true,
  hideTabBarRedDot: true,
  setTabBarStyle: true,
  setTabBarItem: true,
  showTabBar: true,
  hideTabBar: true,
  setTopBarText: true,
  startPullDownRefresh: true,
  canvasToTempFilePath: true,
  canvasGetImageData: true,
  canvasPutImageData: true,
  setBackgroundColor: true,
  setBackgroundTextStyle: true,
  getSelectedTextRange: true,
  hideHomeButton: true,
  // 第三方平台
  getExtConfig: true,
  // 开放接口
  login: true,
  checkSession: true,
  authorize: true,
  getUserInfo: true,
  checkIsSupportFacialRecognition: true,
  startFacialRecognitionVerify: true,
  startFacialRecognitionVerifyAndUploadVideo: true,
  faceVerifyForPay: true,
  requestPayment: true,
  showShareMenu: true,
  hideShareMenu: true,
  updateShareMenu: true,
  getShareInfo: true,
  chooseAddress: true,
  addCard: true,
  openCard: true,
  openSetting: true,
  getSetting: true,
  getWeRunData: true,
  navigateToMiniProgram: true,
  navigateBackMiniProgram: true,
  chooseInvoice: true,
  chooseInvoiceTitle: true,
  checkIsSupportSoterAuthentication: true,
  startSoterAuthentication: true,
  checkIsSoterEnrolledInDevice: true,
  // 订阅消息
  requestSubscribeMessage: true,
  setEnableDebug: true,
  // 支付宝小程序API
  getOpenUserInfo: true,
  // 百度小程序专有 API
  // 百度小程序 AI 相关
  ocrIdCard: true,
  ocrBankCard: true,
  ocrDrivingLicense: true,
  ocrVehicleLicense: true,
  textReview: true,
  textToAudio: true,
  imageAudit: true,
  advancedGeneralIdentify: true,
  objectDetectIdentify: true,
  carClassify: true,
  dishClassify: true,
  logoClassify: true,
  animalClassify: true,
  plantClassify: true,
  setPageInfo: true,
  // 用户信息
  getSwanId: true,
  // 百度收银台支付
  requestPolymerPayment: true,
  // 打开小程序
  navigateToSmartProgram: true,
  navigateBackSmartProgram: true,
  preloadSubPackage: true
};

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === void 0 ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
}

/* eslint-disable camelcase */
var Taro$1 = {
  Events: Events,
  eventCenter: eventCenter,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  render: render,
  noPromiseApis: noPromiseApis,
  onAndSyncApis: onAndSyncApis,
  otherApis: otherApis,
  initPxTransform: initPxTransform,
  Link: Link,
  interceptors: interceptors,
  Current: Current,
  useDidShow: useDidShow,
  useDidHide: useDidHide,
  usePullDownRefresh: usePullDownRefresh,
  useReachBottom: useReachBottom,
  usePageScroll: usePageScroll,
  useResize: useResize,
  useShareAppMessage: useShareAppMessage,
  useTabItemTap: useTabItemTap,
  useTitleClick: useTitleClick,
  useOptionMenuClick: useOptionMenuClick,
  usePullIntercept: usePullIntercept,
  useRouter: useRouter,
  options: options,
  nextTick: nextTick
};

var dataCache = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheDataSet = cacheDataSet;
exports.cacheDataGet = cacheDataGet;
exports.cacheDataHas = cacheDataHas;
var data = {};

function cacheDataSet(key, val) {
  data[key] = val;
}

function cacheDataGet(key, delelteAfterGet) {
  var temp = data[key];
  delelteAfterGet && delete data[key];
  return temp;
}

function cacheDataHas(key) {
  return key in data;
}
});

unwrapExports(dataCache);
var dataCache_1 = dataCache.cacheDataSet;
var dataCache_2 = dataCache.cacheDataGet;
var dataCache_3 = dataCache.cacheDataHas;

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryToJson = queryToJson;
exports.getUniqueKey = getUniqueKey;

function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;

  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];

    if (item.length) {
      var s = item.indexOf('=');

      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }

      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }

      if (Array.isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }

  return ret; // Object
}

var _i = 1;

var _loadTime = new Date().getTime().toString();

function getUniqueKey() {
  return _loadTime + _i++;
}
});

unwrapExports(utils);
var utils_1 = utils.queryToJson;
var utils_2 = utils.getUniqueKey;

var alipay = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNativeApi;

var _api = _interopRequireDefault(Taro$1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var noPromiseApis = _api["default"].noPromiseApis,
    onAndSyncApis = _api["default"].onAndSyncApis,
    otherApis = _api["default"].otherApis,
    initPxTransform = _api["default"].initPxTransform,
    Link = _api["default"].Link;
var apiDiff = {
  showActionSheet: {
    options: {
      change: [{
        old: 'itemList',
        "new": 'items'
      }]
    }
  },
  showToast: {
    options: {
      change: [{
        old: 'title',
        "new": 'content'
      }, {
        old: 'icon',
        "new": 'type'
      }]
    }
  },
  showLoading: {
    options: {
      change: [{
        old: 'title',
        "new": 'content'
      }]
    }
  },
  setNavigationBarTitle: {
    alias: 'setNavigationBar'
  },
  setNavigationBarColor: {
    alias: 'setNavigationBar'
  },
  saveImageToPhotosAlbum: {
    alias: 'saveImage',
    options: {
      change: [{
        old: 'filePath',
        "new": 'url'
      }]
    }
  },
  previewImage: {
    options: {
      set: [{
        key: 'current',
        value: function value(options) {
          return options.urls.indexOf(options.current || options.urls[0]);
        }
      }]
    }
  },
  getFileInfo: {
    options: {
      change: [{
        old: 'filePath',
        "new": 'apFilePath'
      }]
    }
  },
  getSavedFileInfo: {
    options: {
      change: [{
        old: 'filePath',
        "new": 'apFilePath'
      }]
    }
  },
  removeSavedFile: {
    options: {
      change: [{
        old: 'filePath',
        "new": 'apFilePath'
      }]
    }
  },
  saveFile: {
    options: {
      change: [{
        old: 'tempFilePath',
        "new": 'apFilePath'
      }]
    }
  },
  openLocation: {
    options: {
      set: [{
        key: 'latitude',
        value: function value(options) {
          return String(options.latitude);
        }
      }, {
        key: 'longitude',
        value: function value(options) {
          return String(options.longitude);
        }
      }]
    }
  },
  uploadFile: {
    options: {
      change: [{
        old: 'name',
        "new": 'fileName'
      }]
    }
  },
  getClipboardData: {
    alias: 'getClipboard'
  },
  setClipboardData: {
    alias: 'setClipboard',
    options: {
      change: [{
        old: 'data',
        "new": 'text'
      }]
    }
  },
  makePhoneCall: {
    options: {
      change: [{
        old: 'phoneNumber',
        "new": 'number'
      }]
    }
  },
  scanCode: {
    alias: 'scan',
    options: {
      change: [{
        old: 'onlyFromCamera',
        "new": 'hideAlbum'
      }],
      set: [{
        key: 'type',
        value: function value(options) {
          return options.scanType && options.scanType[0].slice(0, -4) || 'qr';
        }
      }]
    }
  },
  setScreenBrightness: {
    options: {
      change: [{
        old: 'value',
        "new": 'brightness'
      }]
    }
  }
};
var nativeRequest = my.canIUse('request') ? my.request : my.httpRequest;
var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _arguments = arguments,
        _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        completeFn && completeFn.apply(options, _toConsumableArray(_arguments));

        _this.run();
      };

      return nativeRequest(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var defaultHeaders = {
    'content-type': 'application/json'
  };
  options.headers = defaultHeaders;

  if (options.header) {
    for (var k in options.header) {
      var lowerK = k.toLocaleLowerCase();
      options.headers[lowerK] = options.header[k];
    }

    delete options.header;
  }

  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      res.statusCode = res.status;
      delete res.status;
      res.header = res.headers;
      delete res.headers;
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options.complete = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro) {
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!onAndSyncApis[key] && !noPromiseApis[key]) {
      taro[key] = function (options) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var result = generateSpecialApis(key, options || {});
        var newKey = result.api;
        options = result.options;
        var task = null;
        var obj = Object.assign({}, options);

        if (!(newKey in my)) {
          console.warn("\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(newKey));
          return;
        }

        if (typeof options === 'string') {
          if (args.length) {
            var _my;

            return (_my = my)[newKey].apply(_my, [options].concat(args));
          }

          return my[newKey](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo' || key === 'switchTab') {
          var url = obj.url ? obj.url.replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = (0, dataCache.cacheDataGet)(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = (0, utils.getUniqueKey)();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = (0, utils.queryToJson)(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              (0, dataCache.cacheDataSet)(cacheKey, component.componentWillPreload(params));
              (0, dataCache.cacheDataSet)(preloadInitedComponent, component);
            }
          }
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              if (k === 'success') {
                if (newKey === 'saveFile') {
                  res.savedFilePath = res.apFilePath;
                } else if (newKey === 'downloadFile') {
                  res.tempFilePath = res.apFilePath;
                } else if (newKey === 'chooseImage') {
                  res.tempFilePaths = res.apFilePaths;
                } else if (newKey === 'getClipboard') {
                  res.data = res.text;
                } else if (newKey === 'scan') {
                  res.result = res.code;
                } else if (newKey === 'getScreenBrightness') {
                  res.value = res.brightness;
                  delete res.brightness;
                }
              }

              options[k] && options[k](res);

              if (k === 'success') {
                resolve(res);
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _my2;

            task = (_my2 = my)[newKey].apply(_my2, [obj].concat(args));
          } else {
            task = my[newKey](obj);
          }
        });

        if (newKey === 'uploadFile' || newKey === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        if (!(key in my)) {
          console.warn("\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
          return;
        }

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (key === 'getStorageSync') {
          var arg1 = args[0];

          if (arg1 != null) {
            return my[key]({
              key: arg1
            }).data || my[key]({
              key: arg1
            }).APDataStorage || '';
          }

          return console.log('getStorageSync 传入参数错误');
        }

        if (key === 'setStorageSync') {
          var _arg = args[0];
          var arg2 = args[1];

          if (_arg != null) {
            return my[key]({
              key: _arg,
              data: arg2
            });
          }

          return console.log('setStorageSync 传入参数错误');
        }

        if (key === 'removeStorageSync') {
          var _arg2 = args[0];

          if (_arg2 != null) {
            return my[key]({
              key: _arg2
            });
          }

          return console.log('removeStorageSync 传入参数错误');
        }

        if (key === 'createSelectorQuery') {
          var query = my[key]();

          query["in"] = function () {
            return query;
          };

          return query;
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return my[key].apply(my, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function generateSpecialApis(api, options) {
  var apiAlias = api;

  if (api === 'showModal') {
    options.cancelButtonText = options.cancelText;
    options.confirmButtonText = options.confirmText || '确定';
    apiAlias = 'confirm';

    if (options.showCancel === false) {
      options.buttonText = options.confirmText || '确定';
      apiAlias = 'alert';
    }
  } else {
    Object.keys(apiDiff).forEach(function (item) {
      var apiItem = apiDiff[item];

      if (api === item) {
        if (apiItem.alias) {
          apiAlias = apiItem.alias;
        }

        if (apiItem.options) {
          var change = apiItem.options.change;
          var set = apiItem.options.set;

          if (change) {
            change.forEach(function (changeItem) {
              options[changeItem["new"]] = options[changeItem.old];
            });
          }

          if (set) {
            set.forEach(function (setItem) {
              options[setItem.key] = typeof setItem.value === 'function' ? setItem.value(options) : setItem.value;
            });
          }
        }
      }
    });
  }

  return {
    api: apiAlias,
    options: options
  };
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.initPxTransform = initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
}
});

unwrapExports(alipay);

var jd_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNativeApi;

var _api = _interopRequireDefault(Taro$1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noPromiseApis = _api["default"].noPromiseApis,
    onAndSyncApis = _api["default"].onAndSyncApis,
    otherApis = _api["default"].otherApis,
    initPxTransform = _api["default"].initPxTransform,
    Link = _api["default"].Link;
var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        completeFn && completeFn.apply(options, args);

        _this.run();
      };

      return jd.request(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options.complete = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro) {
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  var useDataCacheApis = {
    navigateTo: true,
    redirectTo: true,
    reLaunch: true
  };
  var routerParamsPrivateKey = '__key_';
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!(key in jd)) {
      taro[key] = function () {
        console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
      };

      return;
    }

    if (!onAndSyncApis[key] && !noPromiseApis[key]) {
      taro[key] = function (options) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _jd;

            return (_jd = jd)[key].apply(_jd, [options].concat(args));
          }

          return jd[key](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo' || key === 'switchTab') {
          var url = obj.url ? obj.url.replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = (0, dataCache.cacheDataGet)(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = (0, utils.getUniqueKey)();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = (0, utils.queryToJson)(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              (0, dataCache.cacheDataSet)(cacheKey, component.componentWillPreload(params));
              (0, dataCache.cacheDataSet)(preloadInitedComponent, component);
            }
          }
        }

        if (useDataCacheApis[key]) {
          var _url = obj.url = obj.url || '';

          var _MarkIndex = _url.indexOf('?');

          var _hasMark = _MarkIndex > -1;

          var _urlQueryStr = _hasMark ? _url.substring(_MarkIndex + 1, _url.length) : '';

          var _params = (0, utils.queryToJson)(_urlQueryStr);

          var _cacheKey = (0, utils.getUniqueKey)();

          obj.url += (_hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(_cacheKey);
          (0, dataCache.cacheDataSet)(_cacheKey, _params);
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _jd2;

            task = (_jd2 = jd)[key].apply(_jd2, [obj].concat(args));
          } else {
            task = jd[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return jd[key].apply(jd, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function canIUseWebp() {
  var _jd$getSystemInfoSync = jd.getSystemInfoSync(),
      _jd$getSystemInfoSync2 = _jd$getSystemInfoSync.platform,
      platform = _jd$getSystemInfoSync2 === void 0 ? '' : _jd$getSystemInfoSync2;

  var platformLower = platform.toLowerCase();

  if (platformLower === 'android' || platformLower === 'devtools') {
    return true;
  }

  return false;
}

function jdCloud(taro) {
  var jdC = jd.cloud || {};
  var jdcloud = {};
  var apiList = ['init', 'database', 'uploadFile', 'downloadFile', 'getTempFileURL', 'deleteFile', 'callFunction', 'CloudID'];
  apiList.forEach(function (v) {
    jdcloud[v] = jdC[v];
  });
  taro.cloud = jdcloud;
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.requirePlugin = requirePlugin;
  taro.initPxTransform = initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
  taro.canIUseWebp = canIUseWebp;
  jdCloud(taro);
}
});

unwrapExports(jd_1);

var qq_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNativeApi;

var _api = _interopRequireDefault(Taro$1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noPromiseApis = _api["default"].noPromiseApis,
    onAndSyncApis = _api["default"].onAndSyncApis,
    otherApis = _api["default"].otherApis,
    initPxTransform = _api["default"].initPxTransform,
    Link = _api["default"].Link;
var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        completeFn && completeFn.apply(options, args);

        _this.run();
      };

      return qq.request(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options.complete = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro) {
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  var useDataCacheApis = {
    navigateTo: true,
    redirectTo: true,
    reLaunch: true
  };
  var routerParamsPrivateKey = '__key_';
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!(key in qq)) {
      taro[key] = function () {
        console.warn("QQ\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
      };

      return;
    }

    if (!onAndSyncApis[key] && !noPromiseApis[key]) {
      taro[key] = function (options) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _qq;

            return (_qq = qq)[key].apply(_qq, [options].concat(args));
          }

          return qq[key](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo' || key === 'switchTab') {
          var url = obj.url ? obj.url.replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = (0, dataCache.cacheDataGet)(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = (0, utils.getUniqueKey)();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = (0, utils.queryToJson)(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              (0, dataCache.cacheDataSet)(cacheKey, component.componentWillPreload(params));
              (0, dataCache.cacheDataSet)(preloadInitedComponent, component);
            }
          }
        }

        if (useDataCacheApis[key]) {
          var _url = obj.url = obj.url || '';

          var _MarkIndex = _url.indexOf('?');

          var _hasMark = _MarkIndex > -1;

          var _urlQueryStr = _hasMark ? _url.substring(_MarkIndex + 1, _url.length) : '';

          var _params = (0, utils.queryToJson)(_urlQueryStr);

          var _cacheKey = (0, utils.getUniqueKey)();

          obj.url += (_hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(_cacheKey);
          (0, dataCache.cacheDataSet)(_cacheKey, _params);
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _qq2;

            task = (_qq2 = qq)[key].apply(_qq2, [obj].concat(args));
          } else {
            task = qq[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return qq[key].apply(qq, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function canIUseWebp() {
  var _qq$getSystemInfoSync = qq.getSystemInfoSync(),
      platform = _qq$getSystemInfoSync.platform;

  var platformLower = platform.toLowerCase();

  if (platformLower === 'android' || platformLower === 'devtools') {
    return true;
  }

  return false;
}

function qqCloud(taro) {
  var qqC = qq.cloud || {};
  var qqcloud = {};
  var apiList = ['init', 'database', 'uploadFile', 'downloadFile', 'getTempFileURL', 'deleteFile', 'callFunction'];
  apiList.forEach(function (v) {
    qqcloud[v] = qqC[v];
  });
  taro.cloud = qqcloud;
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.requirePlugin = requirePlugin;
  taro.initPxTransform = initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
  taro.canIUseWebp = canIUseWebp;
  qqCloud(taro);
}
});

unwrapExports(qq_1);

var swan_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNativeApi;

var _api = _interopRequireDefault(Taro$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var noPromiseApis = _api["default"].noPromiseApis,
    onAndSyncApis = _api["default"].onAndSyncApis,
    otherApis = _api["default"].otherApis,
    initPxTransform = _api["default"].initPxTransform,
    Link = _api["default"].Link;
var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _arguments = arguments,
        _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        completeFn && completeFn.apply(options, _toConsumableArray(_arguments));

        _this.run();
      };

      return swan.request(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options.complete = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro) {
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  Object.keys(weApis).forEach(function (key) {
    if (!(key in swan)) {
      taro[key] = function () {
        console.warn("\u767E\u5EA6\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
      };

      return;
    }

    if (!onAndSyncApis[key] && !noPromiseApis[key]) {
      taro[key] = function (options) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _swan;

            return (_swan = swan)[key].apply(_swan, [options].concat(args));
          }

          return swan[key](options);
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _swan2;

            task = (_swan2 = swan)[key].apply(_swan2, [obj].concat(args));
          } else {
            task = swan[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return swan[key].apply(swan, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.initPxTransform = initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
}
});

unwrapExports(swan_1);

var tt_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNativeApi;

var _api = _interopRequireDefault(Taro$1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var noPromiseApis = _api["default"].noPromiseApis,
    onAndSyncApis = _api["default"].onAndSyncApis,
    otherApis = _api["default"].otherApis,
    initPxTransform = _api["default"].initPxTransform,
    Link = _api["default"].Link;
var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _arguments = arguments,
        _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        completeFn && completeFn.apply(options, _toConsumableArray(_arguments));

        _this.run();
      };

      return tt.request(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options.complete = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro) {
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!(key in tt)) {
      taro[key] = function () {
        console.warn("\u5934\u6761\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
      };

      return;
    }

    if (!onAndSyncApis[key] && !noPromiseApis[key]) {
      taro[key] = function (options) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _tt;

            return (_tt = tt)[key].apply(_tt, [options].concat(args));
          }

          return tt[key](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo' || key === 'switchTab') {
          var url = obj.url ? obj.url.replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = (0, dataCache.cacheDataGet)(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = (0, utils.getUniqueKey)();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = (0, utils.queryToJson)(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              (0, dataCache.cacheDataSet)(cacheKey, component.componentWillPreload(params));
              (0, dataCache.cacheDataSet)(preloadInitedComponent, component);
            }
          }
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _tt2;

            task = (_tt2 = tt)[key].apply(_tt2, [obj].concat(args));
          } else {
            task = tt[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return tt[key].apply(tt, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.initPxTransform = initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
}
});

unwrapExports(tt_1);

var wx_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNativeApi;

var _api = _interopRequireDefault(Taro$1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noPromiseApis = _api["default"].noPromiseApis,
    onAndSyncApis = _api["default"].onAndSyncApis,
    otherApis = _api["default"].otherApis,
    initPxTransform = _api["default"].initPxTransform,
    Link = _api["default"].Link;
var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        completeFn && completeFn.apply(options, args);

        _this.run();
      };

      return wx.request(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options.complete = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro) {
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  var useDataCacheApis = {
    navigateTo: true,
    redirectTo: true,
    reLaunch: true
  };
  var routerParamsPrivateKey = '__key_';
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!(key in wx)) {
      taro[key] = function () {
        console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
      };

      return;
    }

    if (!onAndSyncApis[key] && !noPromiseApis[key]) {
      taro[key] = function (options) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _wx;

            return (_wx = wx)[key].apply(_wx, [options].concat(args));
          }

          return wx[key](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo' || key === 'switchTab') {
          var url = obj.url ? obj.url.replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = (0, dataCache.cacheDataGet)(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = (0, utils.getUniqueKey)();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = (0, utils.queryToJson)(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              (0, dataCache.cacheDataSet)(cacheKey, component.componentWillPreload(params));
              (0, dataCache.cacheDataSet)(preloadInitedComponent, component);
            }
          }
        }

        if (useDataCacheApis[key]) {
          var _url = obj.url = obj.url || '';

          var _MarkIndex = _url.indexOf('?');

          var _hasMark = _MarkIndex > -1;

          var _urlQueryStr = _hasMark ? _url.substring(_MarkIndex + 1, _url.length) : '';

          var _params = (0, utils.queryToJson)(_urlQueryStr);

          var _cacheKey = (0, utils.getUniqueKey)();

          obj.url += (_hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(_cacheKey);
          (0, dataCache.cacheDataSet)(_cacheKey, _params);
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _wx2;

            task = (_wx2 = wx)[key].apply(_wx2, [obj].concat(args));
          } else {
            task = wx[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return wx[key].apply(wx, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function canIUseWebp() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform;

  var platformLower = platform.toLowerCase();

  if (platformLower === 'android' || platformLower === 'devtools') {
    return true;
  }

  return false;
}

function wxCloud(taro) {
  var wxC = wx.cloud || {};
  var wxcloud = {};
  var apiList = ['init', 'database', 'uploadFile', 'downloadFile', 'getTempFileURL', 'deleteFile', 'callFunction', 'CloudID'];
  apiList.forEach(function (v) {
    wxcloud[v] = wxC[v];
  });
  taro.cloud = wxcloud;
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.requirePlugin = requirePlugin;
  taro.initPxTransform = initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
  taro.canIUseWebp = canIUseWebp;
  wxCloud(taro);
}
});

unwrapExports(wx_1);

var taro = createCommonjsModule(function (module) {
const Taro = Taro$1.default;

let api;

// bundler 可以自动移除不需要的 require
if (process.env.TARO_ENV === 'alipay') {
  api = alipay;
} else if (process.env.TARO_ENV === 'jd') {
  api = jd_1;
} else if (process.env.TARO_ENV === 'qq') {
  api = qq_1;
} else if (process.env.TARO_ENV === 'swan') {
  api = swan_1;
} else if (process.env.TARO_ENV === 'tt') {
  api = tt_1;
} else if (process.env.TARO_ENV === 'weapp') {
  api = wx_1;
}

// 兼容不同工具的 import 机制，如 Jest, rollup
const initNativeAPI = api && api.default ? api.default : api;
// 如果没有对应的 env type，那就啥也不干，例如 h5
if (typeof initNativeAPI === 'function') {
  initNativeAPI(Taro);
}

module.exports = Taro;
module.exports.default = module.exports;
});

var getEnv$1 = taro.getEnv,
    ENV_TYPE$1 = taro.ENV_TYPE;
var env = getEnv$1();
var SIZE_CLASS$1 = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
};
var Button$1 = {
  name: 'AtButton',
  components: {
    Loading: Loading
  },
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: undefined
    },
    circle: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    className: {
      type: [Object, String],
      default: function _default() {}
    },
    formType: {
      type: String,
      default: undefined
    },
    openType: {
      type: String,
      default: undefined
    },
    lang: {
      type: String,
      default: 'en'
    },
    sessionFrom: {
      type: String,
      default: ''
    },
    sendMessageTitle: {
      type: String,
      default: ''
    },
    sendMessagePath: {
      type: String,
      default: ''
    },
    sendMessageImg: {
      type: String,
      default: ''
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: function _default() {}
    },
    onGetUserInfo: {
      type: Function,
      default: function _default() {}
    },
    onContact: {
      type: Function,
      default: function _default() {}
    },
    onGetPhoneNumber: {
      type: Function,
      default: function _default() {}
    },
    onError: {
      type: Function,
      default: function _default() {}
    },
    onOpenSetting: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      isWEB: env === ENV_TYPE$1.WEB,
      isWEAPP: env === ENV_TYPE$1.WEAPP,
      isALIPAY: env === ENV_TYPE$1.ALIPAY
    };
  },
  mounted: function mounted() {
    console.log('this.onGetPhoneNumber', this.onGetPhoneNumber);
  },
  methods: {
    hanldeClick: function hanldeClick(event) {
      if (!this.disabled) {
        this.onClick && this.onClick(event);
      }
    },
    handleGetUserInfo: function handleGetUserInfo(event) {
      this.onGetUserInfo && this.onGetUserInfo(event);
    },
    handleGetPhoneNumber: function handleGetPhoneNumber(event) {
      this.onGetPhoneNumber && this.onGetPhoneNumber(event);
    },
    handleOpenSetting: function handleOpenSetting(event) {
      this.onOpenSetting && this.onOpenSetting(event);
    },
    handleError: function handleError(event) {
      this.onError && this.onError(event);
    },
    handleContact: function handleContact(event) {
      this.onContact && this.onContact(event);
    },
    handleSubmit: function handleSubmit(event) {
      if (this.isWEAPP || this.isWEB) {
        this.$scope.triggerEvent('submit', event.detail, {
          bubbles: true,
          composed: true
        });
      }
    },
    handleReset: function handleReset(event) {
      if (this.isWEAPP || this.isWEB) {
        this.$scope.triggerEvent('reset', event.detail, {
          bubbles: true,
          composed: true
        });
      }
    }
  },
  render: function render() {
    var _classObject;

    var h = arguments[0];
    // props
    var _this$size = this.size,
        size = _this$size === void 0 ? 'normal' : _this$size,
        _this$type = this.type,
        type = _this$type === void 0 ? '' : _this$type,
        circle = this.circle,
        full = this.full,
        loading = this.loading,
        disabled = this.disabled,
        customStyle = this.customStyle,
        className = this.className,
        formType = this.formType,
        openType = this.openType,
        lang = this.lang,
        sessionFrom = this.sessionFrom,
        sendMessageTitle = this.sendMessageTitle,
        sendMessagePath = this.sendMessagePath,
        sendMessageImg = this.sendMessageImg,
        showMessageCard = this.showMessageCard,
        appParameter = this.appParameter; // data

    var isWEB = this.isWEB,
        isWEAPP = this.isWEAPP,
        isALIPAY = this.isALIPAY;
    var rootClassName = ['at-button'];
    var classObject = (_classObject = {}, _defineProperty(_classObject, "at-button--".concat(SIZE_CLASS$1[size]), SIZE_CLASS$1[size]), _defineProperty(_classObject, 'at-button--disabled', disabled), _defineProperty(_classObject, "at-button--".concat(type), TYPE_CLASS[type]), _defineProperty(_classObject, 'at-button--circle', circle), _defineProperty(_classObject, 'at-button--full', full), _classObject);
    var loadingColor = type === 'primary' ? '#fff' : '';
    var loadingSize = size === 'small' ? '30' : 0;

    if (loading) {
      rootClassName.push('at-button--icon');
    }

    var webButton = h("button", {
      "attrs": {
        "className": "at-button__wxbutton",
        "lang": lang,
        "formType": formType === 'submit' || formType === 'reset' ? formType : undefined
      }
    });
    var button = h("button", {
      "attrs": {
        "className": "at-button__wxbutton",
        "formType": formType,
        "openType": openType,
        "lang": lang,
        "sessionFrom": sessionFrom,
        "sendMessageTitle": sendMessageTitle,
        "sendMessagePath": sendMessagePath,
        "sendMessageImg": sendMessageImg,
        "showMessageCard": showMessageCard,
        "appParameter": appParameter
      },
      "on": {
        "getUserInfo": this.handleGetUserInfo,
        "getPhoneNumber": this.hanldeGetPhoneNumber,
        "openSetting": this.hanldeSetting,
        "error": this.hanldeError,
        "contact": this.hanldeContact
      }
    });
    return h("view", {
      "on": {
        "tap": this.hanldeClick
      },
      "class": _classnames_2_2_6_classnames(rootClassName, classObject, className),
      "style": customStyle
    }, [isWEB && !disabled && webButton, isWEAPP && !disabled && h("form", {
      "on": {
        "submit": this.handleSubmit,
        "reset": this.handleReset
      }
    }, [button]), isALIPAY && !disabled && button, loading && h("view", {
      "class": "at-button__icon"
    }, [h(Loading, {
      "attrs": {
        "color": loadingColor,
        "size": loadingSize
      }
    })]), h("view", {
      "class": "at-button__text"
    }, [this.$slots.default])]);
  }
};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var index$3 = {
  name: 'AtCard',
  props: {
    note: {
      type: String,
      default: ''
    },
    isFull: {
      type: Boolean,
      default: false
    },
    thumb: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extra: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: function _default() {}
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    renderIcon: {
      type: String,
      default: ''
    },
    extraStyle: {
      type: Object,
      default: function _default() {}
    },
    className: {
      type: [String, Array],
      default: ''
    }
  },
  methods: {
    handleClick: function handleClick(args) {
      if (typeof this.onClick === 'function') {
        this.onClick(args);
      }
    }
  },
  render: function render() {
    var _classNames;

    var h = arguments[0];
    var title = this.title,
        note = this.note,
        extra = this.extra,
        extraStyle = this.extraStyle,
        thumb = this.thumb,
        isFull = this.isFull,
        icon = this.icon,
        renderIcon = this.renderIcon;
    var rootClass = _classnames_2_2_6_classnames('at-card', {
      'at-card--full': isFull
    }, this.className);
    var iconClass = _classnames_2_2_6_classnames((_classNames = {
      'at-icon': true
    }, _defineProperty(_classNames, "at-icon-".concat(icon && icon.value), icon && icon.value), _defineProperty(_classNames, 'at-card__header-icon', true), _classNames));
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && "".concat(icon.size, "px") || ''
    };
    return h("view", {
      "on": {
        "click": this.handleClick
      },
      "class": rootClass
    }, [h("view", {
      "class": "at-card__header"
    }, [thumb && h("view", {
      "class": "at-card__header-thumb"
    }, [h("image", {
      "class": "at-card__header-thumb-info",
      "attrs": {
        "mode": "scaleToFill",
        "src": thumb
      }
    })]), renderIcon || this.$slots.renderIcon || '', !thumb && icon && icon.value && h("view", {
      "class": iconClass,
      "style": iconStyle
    }), h("view", {
      "class": "at-card__header-title"
    }, [title]), extra && h("view", {
      "style": _objectSpread2$1({}, extraStyle),
      "class": "at-card__header-extra"
    }, [extra])]), h("view", {
      "class": "at-card__content"
    }, [h("view", {
      "class": "at-card__content-info"
    }, [this.$slots.default]), note && h("view", {
      "class": "at-card__content-note"
    }, [note])])]);
  }
};

var mixins = {
    methods: {
        setState: function (newState, fn) {
            var _this = this;
            var ks = Object.keys(newState);
            if (Array.isArray(ks)) {
                ks.forEach(function (k) {
                    if (k in _this.state) {
                        _this.state[k] = newState[k];
                    }
                });
            }
            this.$nextTick(function () {
                typeof fn === 'function' && fn.call(_this);
            });
        },
    },
};

var getEnv$2 = taro.getEnv, ENV_TYPE$2 = taro.ENV_TYPE;
var ENV = taro.getEnv();
var getEnvs = function () {
    var env = getEnv$2();
    return {
        isWEAPP: env === ENV_TYPE$2.WEAPP,
        isALIPAY: env === ENV_TYPE$2.ALIPAY,
        isWEB: env === ENV_TYPE$2.WEB,
    };
};
function delay(delayTime) {
    if (delayTime === void 0) { delayTime = 500; }
    return new Promise(function (resolve) {
        if ([taro.ENV_TYPE.WEB, taro.ENV_TYPE.SWAN].includes(ENV)) {
            setTimeout(function () {
                resolve();
            }, delayTime);
            return;
        }
        resolve();
    });
}
function delayGetScrollOffset(_a) {
    var _b = _a.delayTime, delayTime = _b === void 0 ? 500 : _b;
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            taro.createSelectorQuery()
                .selectViewport()
                .scrollOffset()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function delayGetClientRect(_a) {
    var _ = _a._, selectorStr = _a.selectorStr, _b = _a.delayTime, delayTime = _b === void 0 ? 500 : _b;
    var selector = taro.createSelectorQuery();
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function delayQuerySelector(_, selectorStr, delayTime) {
    if (delayTime === void 0) { delayTime = 500; }
    var selector = taro.createSelectorQuery();
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
function uuid(len, radix) {
    if (len === void 0) { len = 8; }
    if (radix === void 0) { radix = 16; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var value = [];
    var i = 0;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++)
            value[i] = chars[0 | (Math.random() * radix)];
    }
    else {
        // rfc4122, version 4 form
        var r 
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        = void 0;
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        value[8] = value[13] = value[18] = value[23] = '-';
        value[14] = '4';
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!value[i]) {
                r = 0 | (Math.random() * 16);
                value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return value.join('');
}
function isTest() {
    return process.env.NODE_ENV === 'test';
}
var scrollTop = 0;
function handleTouchScroll(flag) {
    if (ENV !== taro.ENV_TYPE.WEB) {
        return;
    }
    if (flag) {
        scrollTop = document.documentElement.scrollTop;
        // 使body脱离文档流
        document.body.classList.add('at-frozen');
        // 把脱离文档流的body拉上去！否则页面会回到顶部！
        document.body.style.top = -scrollTop + "px";
    }
    else {
        document.body.style.top = '';
        document.body.classList.remove('at-frozen');
        document.documentElement.scrollTop = scrollTop;
    }
}
function pxTransform(size) {
    if (!size)
        return '';
    return taro.pxTransform(size);
}

var index$4 = {
  name: 'AtFloatLayout',
  mixins: [mixins],
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onScroll: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onScrollToLower: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onScrollToUpper: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    },
    upperThreshold: {
      type: Number,
      default: 0
    },
    lowerThreshold: {
      type: Number,
      default: 0
    },
    className: {
      type: [String, Array],
      default: ''
    }
  },
  data: function data() {
    var isOpened = this.isOpened;
    return {
      state: {
        _isOpened: isOpened
      }
    };
  },
  watch: {
    isOpened: function isOpened(val, oldVal) {
      if (val !== oldVal) {
        handleTouchScroll(val);
      }

      if (val !== this.state._isOpened) {
        this.setState({
          _isOpened: val
        });
      }
    }
  },
  methods: {
    handleClose: function handleClose() {
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    close: function close() {
      this.setState({
        _isOpened: false
      }, this.handleClose);
    },

    /**
     *
     * @param {event} e
     */
    handleTouchMove: function handleTouchMove(e) {
      e.stopPropagation();
    }
  },
  render: function render() {
    var h = arguments[0];
    var _isOpened = this.state._isOpened;
    var title = this.title,
        scrollY = this.scrollY,
        scrollX = this.scrollX,
        scrollTop = this.scrollTop,
        scrollLeft = this.scrollLeft,
        upperThreshold = this.upperThreshold,
        lowerThreshold = this.lowerThreshold,
        scrollWithAnimation = this.scrollWithAnimation;
    var rootClass = _classnames_2_2_6_classnames('at-float-layout', {
      'at-float-layout--active': _isOpened
    }, this.className);
    return h("view", {
      "class": rootClass,
      "on": {
        "touchMove": this.handleTouchMove
      }
    }, [h("view", {
      "on": {
        "tap": this.close
      },
      "class": "at-float-layout__overlay"
    }), h("view", {
      "class": "at-float-layout__container layout"
    }, [title ? h("view", {
      "class": "layout-header"
    }, [h("view", {
      "class": "layout-header__title"
    }, [title]), h("view", {
      "class": "layout-header__btn-close",
      "on": {
        "tap": this.close
      }
    })]) : null, h("view", {
      "class": "layout-body"
    }, [h("scroll-view", {
      "attrs": {
        "scrollY": scrollY,
        "scrollX": scrollX,
        "scrollTop": scrollTop,
        "scrollLeft": scrollLeft,
        "upperThreshold": upperThreshold,
        "lowerThreshold": lowerThreshold,
        "scrollWithAnimation": scrollWithAnimation
      },
      "on": {
        "scroll": this.onScroll,
        "scrollToLower": this.onScrollToLower,
        "scrollToUpper": this.onScrollToUpper
      },
      "class": "layout-body__content"
    }, [this.$slots.default])])])]);
  }
};

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? _isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger_1(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, (index += size));
  }
  return result;
}

var chunk_1 = chunk;

var index$5 = {
  name: 'AtGrid',
  props: {
    mode: {
      type: String,
      default: 'square',
      validator: function validator(val) {
        return ['rect', 'square'].includes(val);
      }
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    columnNum: {
      type: Number,
      default: 3
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    className: {
      type: [Object, String],
      default: ''
    }
  },
  methods: {
    /**
     *
     * @param {AtGridItem} item
     * @param {number} index
     * @param {number} row
     * @param {event} event
     */
    handleClick: function handleClick(item, index, row, event) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          columnNum = _this$props.columnNum;

      if (typeof onClick === 'function') {
        var clickIndex = row * columnNum + index;
        onClick(item, clickIndex, event);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var data = this.data,
        mode = this.mode,
        columnNum = this.columnNum,
        hasBorder = this.hasBorder;

    if (Array.isArray(data) && data.length === 0) {
      return null;
    }

    var gridGroup = chunk_1(data, columnNum);

    var bodyClass = _classnames_2_2_6_classnames(['at-grid__flex-item', 'at-grid-item', "at-grid-item--".concat(mode)], {
      'at-grid-item--no-border': !hasBorder
    });
    return h("view", {
      "class": _classnames_2_2_6_classnames('at-grid', this.className)
    }, [gridGroup.map(function (item, i) {
      return h("view", {
        "class": "at-grid__flex",
        "key": "at-grid-group-".concat(i)
      }, [item.map(function (childItem, index) {
        return h("view", {
          "key": "at-grid-item-".concat(index),
          "class": _classnames_2_2_6_classnames(bodyClass, {
            'at-grid-item--last': index === columnNum - 1
          }),
          "on": {
            "click": _this.handleClick.bind(_this, childItem, index, i)
          },
          "style": {
            flex: "0 0 ".concat(100 / columnNum, "%")
          }
        }, [h("view", {
          "class": "at-grid-item__content"
        }, [h("view", {
          "class": "at-grid-item__content-inner"
        }, [h("view", {
          "class": "content-inner__icon"
        }, [childItem.image && h("image", {
          "class": "content-inner__img",
          "attrs": {
            "src": childItem.image,
            "mode": "scaleToFill"
          }
        }), childItem.iconInfo && !childItem.image && h("view", {
          "class": _classnames_2_2_6_classnames(childItem.iconInfo.prefixClass || 'at-icon', _defineProperty({}, "".concat(childItem.iconInfo.prefixClass || 'at-icon', "-").concat(childItem.iconInfo.value), childItem.iconInfo.value), childItem.iconInfo.className),
          "style": _this.$mergeStyle({
            color: childItem.iconInfo.color,
            fontSize: "".concat(childItem.iconInfo.size || 24, "px")
          }, childItem.iconInfo.customStyle)
        })]), h("view", {
          "class": "content-inner__text"
        }, [childItem.value])])])]);
      })]);
    })]);
  }
};

var index$6 = {
  name: 'AtIcon',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    prefixClass: {
      type: String,
      default: 'at-icon'
    },
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: ''
    },
    handleClick: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    handleTab: function handleTab(event) {
      this.handleClick && this.handleClick(event);
    }
  },
  render: function render() {
    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        prefixClass = this.prefixClass,
        value = this.value,
        size = this.size,
        color = this.color;
    var rootStyle = {
      fontSize: "".concat(taro.pxTransform(parseInt(String(size)) * 2)),
      color: color
    };
    var iconName = value ? "".concat(prefixClass, "-").concat(value) : '';
    return h("view", {
      "class": _classnames_2_2_6_classnames(prefixClass, iconName, className),
      "style": this.$mergeStyle(rootStyle, customStyle),
      "on": {
        "tab": this.handleTab
      }
    });
  }
};

var AtList = {
  name: 'AtList',
  props: {
    hasBorder: {
      type: Boolean,
      default: true
    },
    className: {
      type: [Array, String],
      default: ''
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-list', {
      'at-list--no-border': !this.hasBorder
    }, this.className);
    return h("view", {
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var AtListItem = {
  name: 'AtListItem',
  props: {
    className: {
      type: [Array, String],
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    isSwitch: {
      type: Boolean,
      default: false
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    switchColor: {
      type: String,
      default: '#6190E8'
    },
    switchIsCheck: {
      type: Boolean,
      default: false
    },
    extraText: {
      type: String,
      default: ''
    },
    extraThumb: {
      type: String,
      default: ''
    },
    iconInfo: {
      type: Object,
      default: function _default() {
        return {
          value: ''
        };
      }
    },
    onSwitchChange: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    arrow: {
      type: String,
      default: 'up',
      validator: function validator(val) {
        return ['up', 'down', 'right'].includes(val);
      }
    }
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClick: function handleClick(event) {
      if (typeof this.onClick === 'function' && !this.disabled) {
        this.onClick(event);
      }
    },

    /**
     *
     * @param {event} event
     */
    handleSwitchClick: function handleSwitchClick(evente) {
      event.stopPropagation();
    },

    /**
     *
     * @param {event} event
     */
    handleSwitchChange: function handleSwitchChange(event) {
      if (typeof this.onSwitchChange === 'function' && !this.disabled) {
        this.onSwitchChange(event);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var note = this.note,
        arrow = this.arrow,
        thumb = this.thumb,
        iconInfo = this.iconInfo,
        disabled = this.disabled,
        isSwitch = this.isSwitch,
        hasBorder = this.hasBorder,
        extraThumb = this.extraThumb,
        switchColor = this.switchColor,
        switchIsCheck = this.switchIsCheck;
    var extraText = this.extraText,
        title = this.title;
    extraText = String(extraText);
    title = String(title);
    var rootClass = _classnames_2_2_6_classnames('at-list__item', {
      'at-list__item--thumb': thumb,
      'at-list__item--multiple': note,
      'at-list__item--disabled': disabled,
      'at-list__item--no-border': !hasBorder
    }, this.className);
    var iconClass = _classnames_2_2_6_classnames(iconInfo.prefixClass || 'at-icon', _defineProperty({}, "".concat(iconInfo.prefixClass || 'at-icon', "-").concat(iconInfo.value), iconInfo.value), iconInfo.className);
    return h("view", {
      "class": rootClass,
      "on": {
        "tap": this.handleClick
      }
    }, [h("view", {
      "class": "at-list__item-container"
    }, [thumb && h("view", {
      "class": "at-list__item-thumb item-thumb"
    }, [h("image", {
      "class": "item-thumb__info",
      "attrs": {
        "mode": "scaleToFill",
        "src": thumb
      }
    })]), iconInfo.value && h("view", {
      "class": "at-list__item-icon item-icon"
    }, [h("view", {
      "class": iconClass,
      "style": this.mergeStyle({
        color: iconInfo.color || '',
        fontSize: "".concat(iconInfo.size || 24, "px")
      }, iconInfo.customStyle)
    })]), h("view", {
      "class": "at-list__item-content item-content"
    }, [h("view", {
      "class": "item-content__info"
    }, [h("view", {
      "class": "item-content__info-title"
    }, [title]), note && h("view", {
      "class": "item-content__info-note"
    }, [note])])]), h("view", {
      "class": "at-list__item-extra item-extra"
    }, [extraText && h("view", {
      "class": "item-extra__info"
    }, [extraText]), extraThumb && !extraText && h("view", {
      "class": "item-extra__image"
    }, [h("image", {
      "class": "item-extra__image-info",
      "attrs": {
        "mode": "aspectFit",
        "src": extraThumb
      }
    })]), isSwitch && !extraThumb && !extraText && h("view", {
      "class": "item-extra__switch",
      "on": {
        "tap": this.handleSwitchClick
      }
    }, [h("switch", {
      "attrs": {
        "color": switchColor,
        "disabled": disabled,
        "checked": switchIsCheck
      },
      "on": {
        "change": this.handleSwitchChange
      }
    })]), arrow ? h("view", {
      "class": "item-extra__icon"
    }, [h("view", {
      "class": "at-icon item-extra__icon-arrow at-icon-chevron-".concat(arrow)
    })]) : null])])]);
  }
};

var ModalAction = {
  name: 'AtModalAction',
  props: {
    isSimple: {
      type: Boolean,
      default: false
    },
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-modal__footer', {
      'at-modal__footer--simple': this.isSimple
    }, this.className);
    return h("view", {
      "class": rootClass
    }, [h("view", {
      "class": "at-modal__action"
    }, [this.$slots.default])]);
  }
};

var ModalContent = {
  name: 'AtModalContent',
  props: {
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-modal__content', this.className);
    return h("scroll-view", {
      "attrs": {
        "scrollY": true
      },
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var ModalHeader = {
  name: 'AtModalHeader',
  props: {
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-modal__header', this.className);
    return h("view", {
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var index$7 = {
  name: 'AtModal',
  mixins: [mixins],
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onConfirm: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    content: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      state: _objectSpread2$1(_objectSpread2$1({}, getEnvs()), {}, {
        _isOpened: this.isOpened
      })
    };
  },
  watch: {
    isOpened: function isOpened(val) {
      if (val !== this.state._isOpened) {
        this.setState({
          _isOpened: val
        });
      }
    }
  },
  methods: {
    handleClickOverlay: function handleClickOverlay() {
      if (this.closeOnClickOverlay) {
        this.setState({
          _isOpened: false
        }, this.handleClose);
      }
    },
    handleClose: function handleClose(event) {
      if (typeof this.onClose === 'function') {
        this.onClose(event);
      }
    },
    handleCancel: function handleCancel(event) {
      if (typeof this.onCancel === 'function') {
        this.onCancel(event);
      }
    },
    handleConfirm: function handleConfirm(event) {
      if (typeof this.onConfirm === 'function') {
        this.onConfirm(event);
      }
    },
    handleTouchMove: function handleTouchMove(e) {
      e.stopPropagation();
    }
  },
  render: function render() {
    var h = arguments[0];
    var _this$state = this.state,
        _isOpened = _this$state._isOpened,
        isWEB = _this$state.isWEB;
    var title = this.title,
        content = this.content,
        cancelText = this.cancelText,
        confirmText = this.confirmText;
    var rootClass = _classnames_2_2_6_classnames('at-modal', {
      'at-modal--active': _isOpened
    }, this.className);

    if (title || content) {
      var isRenderAction = cancelText || confirmText;
      return h("view", {
        "class": rootClass
      }, [h("view", {
        "on": {
          "tap": this.handleClickOverlay
        },
        "class": "at-modal__overlay"
      }), h("view", {
        "class": "at-modal__container"
      }, [title && h(ModalHeader, [h("view", [title])]), content && h(ModalContent, [h("view", {
        "class": "content-simple"
      }, [isWEB ? h("view", {
        "attrs": {
          "dangerouslySetInnerHTML": {
            __html: content.replace(/\n/g, '<br/>')
          }
        }
      }) : h("view", [content])])]), isRenderAction && h(ModalAction, {
        "attrs": {
          "isSimple": true
        }
      }, [cancelText && h("button", {
        "on": {
          "tap": this.handleCancel
        }
      }, [cancelText]), confirmText && h("button", {
        "on": {
          "tap": this.handleConfirm
        }
      }, [confirmText])])])]);
    }

    return h("view", {
      "on": {
        "touchMove": this.handleTouchMove
      },
      "class": rootClass
    }, [h("view", {
      "class": "at-modal__overlay",
      "on": {
        "tap": this.handleClickOverlay
      }
    }), h("view", {
      "class": "at-modal__container"
    }, [this.$slots.default])]);
  }
};

var index$8 = {
  name: 'AtNavBar',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    },
    leftIconType: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    onClickLeftIcon: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClickRgIconSt: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClickRgIconNd: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    rightFirstIconType: {
      type: [String, Object],
      default: ''
    },
    rightSecondIconType: {
      type: [String, Object],
      default: ''
    }
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClickLeftView: function handleClickLeftView(event) {
      this.onClickLeftIcon && this.onClickLeftIcon(event);
    },

    /**
     *
     * @param {event} event
     */
    handleClickSt: function handleClickSt(event) {
      this.onClickRgIconSt && this.onClickRgIconSt(event);
    },

    /**
     *
     * @param {event} event
     */
    handleClickNd: function handleClickNd(event) {
      this.onClickRgIconNd && this.onClickRgIconNd(event);
    }
  },
  render: function render() {
    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        color = this.color,
        fixed = this.fixed,
        border = this.border,
        leftIconType = this.leftIconType,
        leftText = this.leftText,
        title = this.title,
        rightFirstIconType = this.rightFirstIconType,
        rightSecondIconType = this.rightSecondIconType;
    var linkStyle = {
      color: color
    };
    var defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'at-icon',
      value: '',
      color: '',
      size: 24
    };
    var leftIconInfo = leftIconType instanceof Object ? _objectSpread2$1(_objectSpread2$1({}, defaultIconInfo), leftIconType) : _objectSpread2$1(_objectSpread2$1({}, defaultIconInfo), {}, {
      value: leftIconType
    });
    var leftIconClass = _classnames_2_2_6_classnames(leftIconInfo.prefixClass, _defineProperty({}, "".concat(leftIconInfo.prefixClass, "-").concat(leftIconInfo.value), leftIconInfo.value), leftIconInfo.className);
    var rightFirstIconInfo = rightFirstIconType instanceof Object ? _objectSpread2$1(_objectSpread2$1({}, defaultIconInfo), rightFirstIconType) : _objectSpread2$1(_objectSpread2$1({}, defaultIconInfo), {}, {
      value: rightFirstIconType
    });
    var rightFirstIconClass = _classnames_2_2_6_classnames(rightFirstIconInfo.prefixClass, _defineProperty({}, "".concat(rightFirstIconInfo.prefixClass, "-").concat(rightFirstIconInfo.value), rightFirstIconInfo.value), rightFirstIconInfo.className);
    var rightSecondIconInfo = rightSecondIconType instanceof Object ? _objectSpread2$1(_objectSpread2$1({}, defaultIconInfo), rightSecondIconType) : _objectSpread2$1(_objectSpread2$1({}, defaultIconInfo), {}, {
      value: rightSecondIconType
    });
    var rightSecondIconClass = _classnames_2_2_6_classnames(rightSecondIconInfo.prefixClass, _defineProperty({}, "".concat(rightSecondIconInfo.prefixClass, "-").concat(rightSecondIconInfo.value), rightSecondIconInfo.value), rightSecondIconInfo.className);
    return h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-nav-bar': true,
        'at-nav-bar--fixed': fixed,
        'at-nav-bar--no-border': !border
      }, className),
      "style": customStyle
    }, [h("view", {
      "class": "at-nav-bar__left-view",
      "on": {
        "tap": this.handleClickLeftView.bind(this)
      },
      "style": linkStyle
    }, [leftIconType && h("view", {
      "class": leftIconClass,
      "style": this.$mergeStyle({
        color: leftIconInfo.color,
        fontSize: "".concat(taro.pxTransform(parseInt(leftIconInfo.size.toString()) * 2))
      }, leftIconInfo.customStyle)
    }), h("view", {
      "class": "at-nav-bar__text"
    }, [leftText])]), h("view", {
      "class": "at-nav-bar__title"
    }, [title || this.$slots.default]), h("view", {
      "class": "at-nav-bar__right-view"
    }, [h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightSecondIconType
      }),
      "style": linkStyle,
      "on": {
        "tap": this.handleClickNd.bind(this)
      }
    }, [rightSecondIconType && h("view", {
      "class": rightSecondIconClass,
      "style": this.$mergeStyle({
        color: rightSecondIconInfo.color,
        fontSize: "".concat(taro.pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2))
      }, rightSecondIconInfo.customStyle)
    })]), h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightFirstIconType
      }),
      "style": linkStyle,
      "on": {
        "tap": this.handleClickSt.bind(this)
      }
    }, [rightFirstIconType && h("view", {
      "class": rightFirstIconClass,
      "style": this.$mergeStyle({
        color: rightFirstIconInfo.color,
        fontSize: "".concat(taro.pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2))
      }, rightFirstIconInfo.customStyle)
    })])])]);
  }
};

var index$9 = {
  name: 'AtNoticebar',
  mixins: [mixins],
  props: {
    close: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    marquee: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 100
    },
    moreText: {
      type: String,
      default: '查看详情'
    },
    showMore: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onGotoMore: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    var animElemId = "J_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    return {
      timeout: null,
      interval: null,
      state: _objectSpread2$1(_objectSpread2$1({}, getEnvs()), {}, {
        show: true,
        animElemId: animElemId,
        animationData: [{}],
        dura: 15
      })
    };
  },
  mounted: function mounted() {
    if (!this.marquee) return;
    this.initAnimation();
  },
  methods: {
    handleClose: function handleClose(event) {
      this.setState({
        show: false
      });
      this.onClose && this.onClose(event);
    },
    handleGotoMore: function handleGotoMore(event) {
      this.onGotoMore && this.onGotoMore(event);
    },
    initAnimation: function initAnimation() {
      var _this = this;

      var _this$state = this.state,
          isWEAPP = _this$state.isWEAPP,
          isALIPAY = _this$state.isALIPAY;
      this.timeout = setTimeout(function () {
        _this.timeout = null;

        if (_this.state.isWEB) {
          var elem = document.querySelector(".".concat(_this.state.animElemId));
          if (!elem) return;
          var width = elem.getBoundingClientRect().width;
          var dura = width / +_this.speed;

          _this.setState({
            dura: dura
          });
        } else if (isWEAPP || isALIPAY) {
          var query = isALIPAY ? taro.createSelectorQuery() : taro.createSelectorQuery().in(_this.$scope);
          query.select(".".concat(_this.state.animElemId)).boundingClientRect().exec(function (res) {
            var queryRes = res[0];
            if (!queryRes) return;
            var width = queryRes.width;
            var dura = width / +_this.speed;
            var animation = taro.createAnimation({
              duration: dura * 1000,
              timingFunction: 'linear'
            });
            var resetAnimation = taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });
            var resetOpacityAnimation = taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });

            var animBody = function animBody() {
              resetOpacityAnimation.opacity(0).step();

              _this.setState({
                animationData: resetOpacityAnimation.export()
              });

              setTimeout(function () {
                resetAnimation.translateX(0).step();

                _this.setState({
                  animationData: resetAnimation.export()
                });
              }, 300);
              setTimeout(function () {
                resetOpacityAnimation.opacity(1).step();

                _this.setState({
                  animationData: resetOpacityAnimation.export()
                });
              }, 600);
              setTimeout(function () {
                animation.translateX(-width).step();

                _this.setState({
                  animationData: animation.export()
                });
              }, 900);
            };

            animBody();
            _this.interval = setInterval(animBody, dura * 1000 + 1000);
          });
        }
      }, 100);
    }
  },
  render: function render() {
    var h = arguments[0];
    var single = this.single,
        icon = this.icon,
        marquee = this.marquee,
        customStyle = this.customStyle,
        className = this.className;
    var showMore = this.showMore,
        close = this.close;
    var dura = this.state.dura;
    var rootClassName = ['at-noticebar'];
    var _moreText = this.moreText;
    if (!single) showMore = false;
    if (!_moreText) _moreText = '查看详情';
    var style = {};
    var innerClassName = ['at-noticebar__content-inner'];

    if (marquee) {
      close = false;
      style['animation-duration'] = "".concat(dura, "s");
      innerClassName.push(this.state.animElemId);
    }

    var classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (this.state.isWEAPP || this.state.isALIPAY),
      'at-noticebar--single': !marquee && single
    };
    var iconClass = ['at-icon'];
    if (icon) iconClass.push("at-icon-".concat(icon));
    return this.state.show && h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, classObject, className),
      "style": customStyle
    }, [close && h("view", {
      "class": "at-noticebar__close",
      "on": {
        "click": this.handlClose
      }
    }, [h("view", {
      "class": "at-icon at-icon-close"
    })]), h("view", {
      "class": "at-noticebar__content"
    }, [icon && h("view", {
      "class": "at-noticebar__content-icon"
    }, [h("view", {
      "class": _classnames_2_2_6_classnames(iconClass, iconClass)
    })]), h("view", {
      "class": "at-noticebar__content-text"
    }, [h("view", {
      "attrs": {
        "animation": this.state.animationData
      },
      "class": _classnames_2_2_6_classnames(innerClassName),
      "style": style
    }, [this.$slots.default])])]), showMore && h("view", {
      "class": "at-noticebar__more",
      "on": {
        "click": this.handleGotoMore
      }
    }, [h("view", {
      "class": "text"
    }, [_moreText]), h("view", {
      "class": "at-noticebar__more-icon"
    }, [h("view", {
      "class": "at-icon at-icon-chevron-right"
    })])])]);
  }
};

var MIN_MAXPAGE = 1;
/**
 *
 * @param {number} maxPage
 */

var getMaxPage = function getMaxPage() {
  var maxPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (maxPage <= 0) return MIN_MAXPAGE;
  return maxPage;
};
/**
 *
 * @param {number} maxPage
 */


var createPickerRange = function createPickerRange(max) {
  var range = new Array(max).fill(0).map(function (val, index) {
    return index + 1;
  });
  return range;
};

var index$a = {
  name: 'AtPagination',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    },
    icon: {
      type: Boolean,
      default: false
    },
    onPageChange: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    var current = this.current,
        pageSize = this.pageSize,
        total = this.total;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));
    return {
      state: {
        currentPage: current || 1,
        maxPage: maxPage,
        pickerRange: createPickerRange(maxPage)
      }
    };
  },
  methods: {
    onPrev: function onPrev() {
      var currentPage = this.state.currentPage;
      var originCur = currentPage;
      currentPage -= 1;
      currentPage = Math.max(1, currentPage);
      if (originCur === currentPage) return;
      this.onPageChange && this.onPageChange({
        type: 'prev',
        current: currentPage
      });
      this.setState({
        currentPage: currentPage
      });
    },
    onNext: function onNext() {
      var currentPage = this.state.currentPage;
      var originCur = currentPage;
      var maxPage = this.state.maxPage;
      currentPage += 1;
      currentPage = Math.min(maxPage, currentPage);
      if (originCur === currentPage) return;
      this.onPageChange && this.onPageChange({
        type: 'next',
        current: currentPage
      });
      this.setState({
        currentPage: currentPage
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
        customStyle = this.customStyle;
    var _this$state = this.state,
        currentPage = _this$state.currentPage,
        maxPage = _this$state.maxPage;
    var rootClassName = ['at-pagination'];
    var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
    var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
    var classObject = {
      'at-pagination--icon': icon
    };
    return h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, classObject, this.className),
      "style": customStyle
    }, [h("view", {
      "class": "at-pagination__btn-prev"
    }, [icon && h("button", {
      "on": {
        "tap": this.onPrev.bind(this)
      },
      "attrs": {
        "size": "small",
        "disabled": prevDisabled
      }
    }, [h("view", {
      "class": "at-icon at-icon-chevron-left text"
    })]), !icon && h("button", {
      "on": {
        "tap": this.onPrev.bind(this)
      },
      "attrs": {
        "size": "small",
        "disabled": prevDisabled
      }
    }, ["\u4E0A\u4E00\u9875"])]), h("view", {
      "class": "at-pagination__number"
    }, [h("view", {
      "class": "at-pagination__number-current text"
    }, [currentPage]), "/", maxPage]), h("view", {
      "class": "at-pagination__btn-next"
    }, [icon && h("button", {
      "on": {
        "tap": this.onNext.bind(this)
      },
      "attrs": {
        "size": "small",
        "disabled": nextDisabled
      }
    }, [h("view", {
      "class": "at-icon at-icon-chevron-right text"
    })]), !icon && h("button", {
      "on": {
        "tap": this.onNext.bind(this)
      },
      "attrs": {
        "size": "small",
        "disabled": nextDisabled
      }
    }, ["\u4E0B\u4E00\u9875"])])]);
  }
};

var index$b = {
  name: 'AtProgress',
  props: {
    color: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: 'progress',
      validator: function validator(val) {
        return ['progress', 'error', 'success'].includes(val);
      }
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 0
    },
    isHidePercent: {
      type: Boolean,
      default: false
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var color = this.color;
    var percent = this.percent;
    var strokeWidth = this.strokeWidth,
        status = this.status,
        isHidePercent = this.isHidePercent;

    if (typeof percent !== 'number') {
      percent = 0;
    }

    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }

    var rootClass = _classnames_2_2_6_classnames('at-progress', _defineProperty({}, "at-progress--".concat(status), !!status), this.className);
    var iconClass = _classnames_2_2_6_classnames('at-icon', {
      'at-icon-close-circle': status === 'error',
      'at-icon-check-circle': status === 'success'
    });
    var progressStyle = {
      width: percent && "".concat(+percent, "%"),
      height: strokeWidth && "".concat(+strokeWidth, "px"),
      backgroundColor: color
    };
    return h("view", {
      "class": rootClass
    }, [h("view", {
      "class": "at-progress__outer"
    }, [h("view", {
      "class": "at-progress__outer-inner"
    }, [h("view", {
      "class": "at-progress__outer-inner-background",
      "style": progressStyle
    })])]), !isHidePercent && h("view", {
      "class": "at-progress__content"
    }, [!status || status === 'progress' ? "".concat(percent, "%") : h("view", {
      "class": iconClass
    })])]);
  }
};

var index$c = {
  name: 'AtSegmentedControl',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    current: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selectedColor: {
      type: String,
      default: ''
    },
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {
    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick: function handleClick(index, event) {
      if (this.disabled) return;
      this.onClick(index, event);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        disabled = this.disabled,
        values = this.values,
        selectedColor = this.selectedColor,
        current = this.current,
        color = this.color,
        fontSize = this.fontSize;
    var rootStyle = {
      borderColor: selectedColor
    };
    var itemStyle = {
      color: selectedColor,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: color
    };
    var selectedItemStyle = {
      color: color,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: selectedColor
    };
    var rootCls = _classnames_2_2_6_classnames('at-segmented-control', {
      'at-segmented-control--disabled': disabled
    }, className);
    return h("view", {
      "class": rootCls,
      "style": this.$mergeStyle(rootStyle, customStyle)
    }, [values.map(function (value, i) {
      return h("view", {
        "class": _classnames_2_2_6_classnames('at-segmented-control__item', {
          'at-segmented-control__item--active': current === i
        }),
        "style": current === i ? selectedItemStyle : itemStyle,
        "key": value,
        "on": {
          "tap": _this.handleClick.bind(_this, i)
        }
      }, [value]);
    })]);
  }
};

var index$d = {
  name: 'AtTabBar',
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    current: {
      type: Number,
      default: 0
    },
    iconSize: {
      type: [Number, String],
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    selectedColor: {
      type: String,
      default: ''
    },
    tabList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {
    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick: function handleClick(index, event) {
      this.onClick && this.onClick(index, event);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        fixed = this.fixed,
        backgroundColor = this.backgroundColor,
        tabList = this.tabList,
        current = this.current,
        color = this.color,
        iconSize = this.iconSize,
        fontSize = this.fontSize,
        selectedColor = this.selectedColor; // const { isIPhoneX } = this.state

    var defaultStyle = {
      color: color || ''
    };
    var selectedStyle = {
      color: selectedColor || ''
    };
    var titleStyle = {
      fontSize: fontSize ? "".concat(fontSize, "px") : ''
    };
    var rootStyle = {
      backgroundColor: backgroundColor || ''
    };
    var imgStyle = {
      width: "".concat(iconSize, "px"),
      height: "".concat(iconSize, "px")
    };
    return h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-tab-bar': true,
        'at-tab-bar--fixed': fixed // 'at-tab-bar--ipx': isIPhoneX

      }, className),
      "style": this.$mergeStyle(rootStyle, customStyle)
    }, [tabList.map(function (item, i) {
      var _classNames;

      return h("view", {
        "class": _classnames_2_2_6_classnames('at-tab-bar__item', {
          'at-tab-bar__item--active': current === i
        }),
        "style": current === i ? selectedStyle : defaultStyle,
        "key": item.title,
        "on": {
          "tap": _this.handleClick.bind(_this, i)
        }
      }, [item.iconType ? h(Badge, {
        "attrs": {
          "dot": !!item.dot,
          "value": item.text,
          "maxValue": Number(item.max)
        }
      }, [h("view", {
        "class": "at-tab-bar__icon"
      }, [h("view", {
        "class": _classnames_2_2_6_classnames("".concat(item.iconPrefixClass || 'at-icon'), (_classNames = {}, _defineProperty(_classNames, "".concat(item.iconPrefixClass || 'at-icon', "-").concat(item.selectedIconType), current === i && item.selectedIconType), _defineProperty(_classNames, "".concat(item.iconPrefixClass || 'at-icon', "-").concat(item.iconType), !(current === i && item.selectedIconType)), _classNames)),
        "style": {
          color: current === i ? selectedColor : color,
          fontSize: iconSize ? "".concat(iconSize, "px") : ''
        }
      })])]) : null, item.image ? h(Badge, {
        "attrs": {
          "dot": !!item.dot,
          "value": item.text,
          "maxValue": Number(item.max)
        }
      }, [h("view", {
        "class": "at-tab-bar__icon"
      }, [h("image", {
        "class": _classnames_2_2_6_classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current !== i
        }),
        "attrs": {
          "mode": "widthFix",
          "src": item.selectedImage || item.image
        },
        "style": imgStyle
      }), h("image", {
        "class": _classnames_2_2_6_classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current === i
        }),
        "attrs": {
          "mode": "widthFix",
          "src": item.image
        },
        "style": imgStyle
      })])]) : null, h("view", [h(Badge, {
        "attrs": {
          "dot": item.iconType || item.image ? false : !!item.dot,
          "value": item.iconType || item.image ? '' : item.text,
          "maxValue": item.iconType || item.image ? 0 : Number(item.max)
        }
      }, [h("view", {
        "class": "at-tab-bar__title",
        "style": titleStyle
      }, [item.title])])])]);
    })]);
  }
};

var ENV$1 = taro.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;
var index$e = {
  name: 'AtTabs',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    tabDirection: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].includes(val);
      }
    },
    height: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    },
    swipeable: {
      type: Boolean,
      default: true
    },
    scroll: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    },
    tabList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      tabId: isTest() ? 'tabs-AOTU2018' : uuid(),
      // 触摸时的原点
      touchDot: 0,
      // 定时器
      timer: null,
      // 滑动时间间隔
      interval: 0,
      // 是否已经在滑动
      isMoving: false,
      state: {
        _scrollLeft: 0,
        _scrollTop: 0,
        _scrollIntoView: ''
      }
    };
  },
  watch: {
    scroll: function scroll() {
      this.getTabHeaderRef();
    },
    current: function current(val) {
      this.updateState(val);
    }
  },
  mounted: function mounted() {
    this.getTabHeaderRef();
    this.updateState(this.current);
  },
  beforeDestroy: function beforeDestroy() {
    this.tabHeaderRef = null;
  },
  methods: {
    /**
     *
     * @param {number} idx
     */
    updateState: function updateState(idx) {
      if (this.scroll) {
        // 标签栏滚动
        switch (ENV$1) {
          case taro.ENV_TYPE.WEAPP:
          case taro.ENV_TYPE.ALIPAY:
          case taro.ENV_TYPE.SWAN:
            {
              var index = Math.max(idx - 1, 0);
              this.setState({
                _scrollIntoView: "tab".concat(index)
              });
              break;
            }

          case taro.ENV_TYPE.WEB:
            {
              var _index = Math.max(idx - 1, 0);

              var prevTabItem = this.tabHeaderRef.childNodes[_index];
              prevTabItem && this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }

          default:
            {
              console.warn('AtTab 组件在该环境还未适配');
              break;
            }
        }
      }
    },

    /**
     *
     * @param {number} index
     * @param {event} event
     */
    handleClick: function handleClick(index, event) {
      this.onClick(index, event);
    },

    /**
     *
     * @param {event} e
     */
    handleTouchStart: function handleTouchStart(e) {
      var _this = this;

      var swipeable = this.swipeable,
          tabDirection = this.tabDirection;
      if (!swipeable || tabDirection === 'vertical') return; // 获取触摸时的原点

      this.touchDot = e.touches[0].pageX; // 使用js计时器记录时间

      this.timer = setInterval(function () {
        _this.interval++;
      }, 100);
    },

    /**
     *
     * @param {event} e
     */
    handleTouchMove: function handleTouchMove(e) {
      var swipeable = this.swipeable,
          tabDirection = this.tabDirection,
          current = this.current,
          tabList = this.tabList;
      if (!swipeable || tabDirection === 'vertical') return;
      var touchMove = e.touches[0].pageX;
      var moveDistance = touchMove - this.touchDot;
      var maxIndex = tabList.length;

      if (!this.isMoving && this.interval < MAX_INTERVAL && this.touchDot > 20) {
        // 向左滑动
        if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
          this.isMoving = true;
          this.handleClick(current + 1, e); // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
          this.isMoving = true;
          this.handleClick(current - 1, e);
        }
      }
    },
    handleTouchEnd: function handleTouchEnd() {
      var swipeable = this.swipeable,
          tabDirection = this.tabDirection;
      if (!swipeable || tabDirection === 'vertical') return;
      clearInterval(this.timer);
      this.interval = 0;
      this.isMoving = false;
    },
    getTabHeaderRef: function getTabHeaderRef() {
      if (ENV$1 === taro.ENV_TYPE.WEB) {
        this.tabHeaderRef = document.getElementById(this.tabId);
      }
    }
  },
  render: function render() {
    var _this2 = this,
        _classNames;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        height = this.height,
        tabDirection = this.tabDirection,
        animated = this.animated,
        tabList = this.tabList,
        scroll = this.scroll,
        current = this.current;
    var _this$state = this.state,
        _scrollLeft = _this$state._scrollLeft,
        _scrollTop = _this$state._scrollTop,
        _scrollIntoView = _this$state._scrollIntoView;
    var heightStyle = {
      height: height
    };
    var underlineStyle = {
      height: tabDirection === 'vertical' ? "".concat(tabList.length * 100, "%") : '1PX',
      width: tabDirection === 'horizontal' ? "".concat(tabList.length * 100, "%") : '1PX'
    };
    var bodyStyle = {};
    var transformStyle = "translate3d(0px, -".concat(current * 100, "%, 0px)");

    if (tabDirection === 'horizontal') {
      transformStyle = "translate3d(-".concat(current * 100, "%, 0px, 0px)");
    }

    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle
    });

    if (!animated) {
      bodyStyle.transition = 'unset';
    }

    var tabItems = tabList.map(function (item, idx) {
      var itemCls = _classnames_2_2_6_classnames({
        'at-tabs__item': true,
        'at-tabs__item--active': current === idx
      });
      return h("view", {
        "class": itemCls,
        "attrs": {
          "id": "tab".concat(idx)
        },
        "key": item.title,
        "on": {
          "tap": _this2.handleClick.bind(_this2, idx)
        }
      }, [item.title, h("view", {
        "class": "at-tabs__item-underline"
      })]);
    });
    var rootCls = _classnames_2_2_6_classnames((_classNames = {
      'at-tabs': true,
      'at-tabs--scroll': scroll
    }, _defineProperty(_classNames, "at-tabs--".concat(tabDirection), true), _defineProperty(_classNames, "at-tabs--".concat(ENV$1), true), _classNames), className);
    var scrollX = tabDirection === 'horizontal';
    var scrollY = tabDirection === 'vertical';
    return h("view", {
      "class": rootCls,
      "style": this.$mergeStyle(heightStyle, customStyle)
    }, [scroll ? h("scroll-view", {
      "attrs": {
        "id": this.tabId,
        "scrollX": scrollX,
        "scrollY": scrollY,
        "scrollWithAnimation": true,
        "scrollLeft": _scrollLeft,
        "scrollTop": _scrollTop,
        "scrollIntoView": _scrollIntoView
      },
      "class": "at-tabs__header",
      "style": heightStyle
    }, [tabItems]) : h("view", {
      "attrs": {
        "id": this.tabId
      },
      "class": "at-tabs__header"
    }, [tabItems]), h("view", {
      "class": "at-tabs__body",
      "on": {
        "touchStart": this.handleTouchStart.bind(this),
        "touchEnd": this.handleTouchEnd.bind(this),
        "touchMove": this.handleTouchMove.bind(this)
      },
      "style": this.$mergeStyle(bodyStyle, heightStyle)
    }, [h("view", {
      "class": "at-tabs__underline",
      "style": underlineStyle
    }), this.$slots.default])]);
  }
};

var index$f = {
  name: 'AtTabsPane',
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    tabDirection: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].includes(val);
      }
    },
    index: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    }
  },
  render: function render() {
    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        tabDirection = this.tabDirection,
        index = this.index,
        current = this.current;
    return h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-tabs-pane': true,
        'at-tabs-pane--vertical': tabDirection === 'vertical',
        'at-tabs-pane--active': index === current,
        'at-tabs-pane--inactive': index !== current
      }, className),
      "style": customStyle
    }, [this.$slots.default]);
  }
};

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

var index$g = {
  name: 'AtTimeline',
  props: {
    pending: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      },
      validator: function validator(val) {
        return val.every(function (item) {
          return _typeof$1(item) === 'object';
        });
      }
    },
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var pending = this.pending,
        items = this.items,
        customStyle = this.customStyle,
        className = this.className;
    var rootClassName = ['at-timeline'];
    if (pending) rootClassName.push('at-timeline--pending');
    var rootClassObject = {
      'at-timeline--pending': pending
    };
    var itemElems = items.map(function (item, index) {
      var _item$title = item.title,
          title = _item$title === void 0 ? '' : _item$title,
          color = item.color,
          icon = item.icon,
          _item$content = item.content,
          content = _item$content === void 0 ? [] : _item$content;
      var iconClass = _classnames_2_2_6_classnames(_defineProperty({
        'at-icon': true
      }, "at-icon-".concat(icon), icon));
      var itemRootClassName = ['at-timeline-item'];
      if (color) itemRootClassName.push("at-timeline-item--".concat(color));
      var dotClass = [];

      if (icon) {
        dotClass.push('at-timeline-item__icon');
      } else {
        dotClass.push('at-timeline-item__dot');
      }

      return h("view", {
        "class": _classnames_2_2_6_classnames(itemRootClassName),
        "key": "at-timeline-item-".concat(index)
      }, [h("view", {
        "class": "at-timeline-item__tail"
      }), h("view", {
        "class": _classnames_2_2_6_classnames(dotClass)
      }, [icon && h("view", {
        "class": iconClass
      })]), h("view", {
        "class": "at-timeline-item__content"
      }, [h("view", {
        "class": "at-timeline-item__content-item"
      }, [title]), content.map(function (sub, subIndex) {
        return h("view", {
          "class": "at-timeline-item__content-item at-timeline-item__content--sub",
          "key": subIndex
        }, [sub]);
      })])]);
    });
    return h("view", {
      "class": _classnames_2_2_6_classnames(rootClassName, rootClassObject, className),
      "style": customStyle
    }, [itemElems]);
  }
};

var error = "data:image/png;base64,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";
var success = "data:image/png;base64,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";
var loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC";
var statusImg = {
	error: error,
	success: success,
	loading: loading
};

var AtToast = {
  name: 'AtToast',
  mixins: [mixins],
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    hasMask: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3000
    },
    status: {
      type: String,
      default: '',
      validator: function validator(val) {
        return ['', 'error', 'loading', 'success'].includes(val);
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClose: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      state: {
        _timer: null,
        _isOpened: this.isOpened
      }
    };
  },
  watch: {
    isOpened: {
      immediate: true,
      handler: function handler() {
        this.handleChange();
      }
    },
    duration: function duration() {
      this.handleChange();
    }
  },
  methods: {
    clearTimmer: function clearTimmer() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    },
    makeTimer: function makeTimer(duration) {
      var _this = this;

      if (duration === 0) {
        return;
      }

      this._timer = setTimeout(function () {
        _this.close();
      }, +duration);
    },
    close: function close() {
      var _isOpened = this.state._isOpened;

      if (_isOpened) {
        this.setState({
          _isOpened: false
        }, this.handleClose);
        this.clearTimmer();
      }
    },
    handleClose: function handleClose(event) {
      if (typeof this.onClose === 'function') {
        this.onClose(event);
      }
    },
    handleClick: function handleClick(event) {
      var onClick = this.onClick,
          status = this.status;

      if (status === 'loading') {
        return;
      }

      if (onClick) {
        return onClick(event);
      }

      this.close();
    },
    handleChange: function handleChange() {
      var isOpened = this.isOpened,
          duration = this.duration;

      if (!isOpened) {
        this.close();
        return;
      }

      if (!this.state._isOpened) {
        this.setState({
          _isOpened: true
        });
      } else {
        this.clearTimmer();
      }

      this.makeTimer(duration || 0);
    }
  },
  render: function render() {
    var h = arguments[0];
    var _isOpened = this.state._isOpened;
    var customStyle = this.customStyle,
        text = this.text,
        icon = this.icon,
        status = this.status,
        image = this.image,
        hasMask = this.hasMask;
    var realImg = image || statusImg[status] || null;
    var isRenderIcon = !!(icon && !(image || statusImg[status]));
    var bodyClass = _classnames_2_2_6_classnames('toast-body', _defineProperty({
      'at-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon
    }, "at-toast__body--".concat(status), !!status));
    var iconClass = _classnames_2_2_6_classnames('at-icon', _defineProperty({}, "at-icon-".concat(icon), icon));
    return _isOpened ? h("view", {
      "class": _classnames_2_2_6_classnames('at-toast', this.className)
    }, [hasMask && h("view", {
      "class": "at-toast__overlay"
    }), h("view", {
      "class": bodyClass,
      "style": customStyle,
      "on": {
        "click": this.handleClick
      }
    }, [h("view", {
      "class": "toast-body-content"
    }, [realImg ? h("view", {
      "class": "toast-body-content__img"
    }, [h("image", {
      "class": "toast-body-content__img-item",
      "attrs": {
        "src": realImg,
        "mode": "scaleToFill"
      }
    })]) : null, isRenderIcon && h("view", {
      "class": "toast-body-content__icon"
    }, [h("view", {
      "class": iconClass
    })]), text && h("view", {
      "class": "toast-body-content__info"
    }, [h("view", [text])])])])]) : null;
  }
};

var index$h = {
  name: 'AtAccordion',
  mixins: [mixins],
  props: {
    open: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: function _default() {
        return {
          value: ''
        };
      }
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    isAnimation: {
      type: Boolean,
      default: true
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      isCompleted: true,
      startOpen: false,
      state: {
        wrapperHeight: 0
      }
    };
  },
  watch: {
    open: function open(val, oldVal) {
      if (val !== oldVal) {
        this.startOpen = !!val && !!this.isAnimation;
        this.toggleWithAnimation();
      }
    }
  },
  methods: {
    /**
     *
     * @param {event} event
     */
    handleClick: function handleClick(event) {
      var open = this.open;
      if (!this.isCompleted) return;
      this.onClick && this.onClick(!open, event);
    },
    toggleWithAnimation: function toggleWithAnimation() {
      var _this = this;

      var open = this.open,
          isAnimation = this.isAnimation;
      if (!this.isCompleted || !isAnimation) return;
      this.isCompleted = false;
      delayQuerySelector(this, '.at-accordion__body', 0).then(function (rect) {
        var height = parseInt(rect[0].height.toString());
        var startHeight = open ? height : 0;
        var endHeight = open ? 0 : height;
        _this.startOpen = false;

        _this.setState({
          wrapperHeight: startHeight
        }, function () {
          setTimeout(function () {
            _this.setState({
              wrapperHeight: endHeight
            }, function () {
              setTimeout(function () {
                _this.isCompleted = true;

                _this.setState({});
              }, 700);
            });
          }, 100);
        });
      });
    }
  },
  render: function render() {
    var _classNames;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        title = this.title,
        icon = this.icon,
        hasBorder = this.hasBorder,
        open = this.open,
        note = this.note;
    var wrapperHeight = this.state.wrapperHeight;
    var rootCls = _classnames_2_2_6_classnames('at-accordion', className);
    var prefixClass = icon && icon.prefixClass || 'at-icon';
    var iconCls = _classnames_2_2_6_classnames((_classNames = {}, _defineProperty(_classNames, prefixClass, true), _defineProperty(_classNames, "".concat(prefixClass, "-").concat(icon && icon.value), icon && icon.value), _defineProperty(_classNames, 'at-accordion__icon', true), _classNames));
    var headerCls = _classnames_2_2_6_classnames('at-accordion__header', {
      'at-accordion__header--noborder': !hasBorder
    });
    var arrowCls = _classnames_2_2_6_classnames('at-accordion__arrow', {
      'at-accordion__arrow--folded': !!open
    });
    var contentCls = _classnames_2_2_6_classnames('at-accordion__content', {
      'at-accordion__content--inactive': !open && this.isCompleted || this.startOpen
    });
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && "".concat(icon.size, "px") || ''
    };
    var contentStyle = {
      height: "".concat(wrapperHeight, "px")
    };

    if (this.isCompleted) {
      contentStyle.height = '';
    }

    return h("view", {
      "class": rootCls,
      "style": customStyle
    }, [h("view", {
      "class": headerCls,
      "on": {
        "tap": this.handleClick
      }
    }, [icon && icon.value && h("view", {
      "class": iconCls,
      "style": iconStyle
    }), h("view", {
      "class": "at-accordion__info"
    }, [h("view", {
      "class": "at-accordion__info__title"
    }, [title]), h("view", {
      "class": "at-accordion__info__note"
    }, [note])]), h("view", {
      "class": arrowCls
    }, [h("view", {
      "class": "at-icon at-icon-chevron-down"
    })])]), h("view", {
      "style": contentStyle,
      "class": contentCls
    }, [h("view", {
      "class": "at-accordion__body"
    }, [this.$slots.default])])]);
  }
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax$1(start, end);
}

var _baseInRange = baseInRange;

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite_1(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite_1(end);
  }
  number = toNumber_1(number);
  return _baseInRange(number, start, end);
}

var inRange_1 = inRange;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$2;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$4 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Map$2 = _getNative(_root, 'Map');

var _Map = Map$2;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (_Map && getTag(new _Map) != mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    setTag$2 = '[object Set]';

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) &&
      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag$2 || tag == setTag$2) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$5.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;

var AtSwipeActionOptions = {
  name: 'AtSwipeActionOptions',
  props: {
    componentId: {
      type: String,
      default: ''
    },
    onQueryedDom: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  methods: {
    trrigerOptionsDomUpadte: function trrigerOptionsDomUpadte() {
      var _this = this;

      delayQuerySelector(this, "#swipeActionOptions-".concat(this.componentId)).then(function (res) {
        _this.onQueryedDom(res[0]);
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var rootClass = _classnames_2_2_6_classnames('at-swipe-action__options', this.className);
    return h("view", {
      "attrs": {
        "id": "swipeActionOptions-".concat(this.componentId)
      },
      "class": rootClass
    }, [this.$slots.default]);
  }
};

var index$i = {
  name: 'AtSwipeAction',
  mixins: [mixins],
  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      },
      validator: function validator(options) {
        return options.every(function (item) {
          if (_typeof$1(item) === 'object') {
            if (!item.text) return false;
            if (item.style && typeof item.style !== 'string' && _typeof$1(item.style) !== 'object') return false;
            if (item.className && typeof item.className !== 'string' && typeof item.className !== 'array' && _typeof$1(item.className) !== 'object') return false;
            return true;
          } else {
            return false;
          }
        });
      }
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onOpened: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onClosed: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    var isOpened = this.isOpened;
    return {
      endValue: 0,
      startX: 0,
      startY: 0,
      maxOffsetSize: 0,
      domInfo: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      isMoving: false,
      isTouching: false,
      state: {
        componentId: isTest() ? 'tabs-AOTU2018' : uuid(),
        offsetSize: 0,
        _isOpened: !!isOpened
      }
    };
  },
  methods: {
    getDomInfo: function getDomInfo() {
      var _this = this;

      return Promise.all([delayGetClientRect({
        self: this,
        delayTime: 0,
        selectorStr: "#swipeAction-".concat(this.state.componentId)
      }), delayGetScrollOffset({
        delayTime: 0
      })]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            rect = _ref2[0],
            scrollOffset = _ref2[1];

        rect[0].top += scrollOffset[0].scrollTop;
        rect[0].bottom += scrollOffset[0].scrollTop;
        _this.domInfo = rect[0];
      });
    },

    /**
     *
     * @param {boolean} isOpened
     */
    _reset: function _reset(isOpened) {
      this.isMoving = false;
      this.isTouching = false;

      if (isOpened) {
        this.endValue = -this.maxOffsetSize;
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        });
      } else {
        this.endValue = 0;
        this.setState({
          offsetSize: 0,
          _isOpened: false
        });
      }
    },

    /**
     *
     * @param {number} value
     */
    computeTransform: function computeTransform(value) {
      return value ? "translate3d(".concat(value, "px,0,0)") : null;
    },

    /**
     *
     * @param {event} event
     */
    handleOpened: function handleOpened(event) {
      var onOpened = this.onOpened;

      if (typeof onOpened === 'function' && !this.state._isOpened) {
        onOpened(event);
      }
    },

    /**
     *
     * @param {event} event
     */
    handleClosed: function handleClosed(event) {
      var onClosed = this.onClosed;

      if (typeof onClosed === 'function' && this.state._isOpened) {
        onClosed(event);
      }
    },
    handleTouchStart: function handleTouchStart(e) {
      var _e$touches$ = e.touches[0],
          clientX = _e$touches$.clientX,
          clientY = _e$touches$.clientY;
      if (this.disabled) return;
      this.getDomInfo();
      this.startX = clientX;
      this.startY = clientY;
      this.isTouching = true;
    },
    handleTouchMove: function handleTouchMove(e) {
      if (isEmpty_1(this.domInfo)) {
        return;
      }

      var startX = this.startX,
          startY = this.startY;
      var _this$domInfo = this.domInfo,
          top = _this$domInfo.top,
          bottom = _this$domInfo.bottom,
          left = _this$domInfo.left,
          right = _this$domInfo.right;
      var _e$touches$2 = e.touches[0],
          clientX = _e$touches$2.clientX,
          clientY = _e$touches$2.clientY,
          pageX = _e$touches$2.pageX,
          pageY = _e$touches$2.pageY;
      var x = Math.abs(clientX - startX);
      var y = Math.abs(clientY - startY);

      var inDom = inRange_1(pageX, left, right) && inRange_1(pageY, top, bottom);

      if (!this.isMoving && inDom) {
        this.isMoving = y === 0 || x / y >= Number.parseFloat(Math.tan(45 * Math.PI / 180).toFixed(2));
      }

      if (this.isTouching && this.isMoving) {
        e.preventDefault();
        var offsetSize = clientX - this.startX;
        var isRight = offsetSize > 0;
        if (this.state.offsetSize === 0 && isRight) return;
        var value = this.endValue + offsetSize;
        this.setState({
          offsetSize: value >= 0 ? 0 : value
        });
      }
    },
    handleTouchEnd: function handleTouchEnd(event) {
      this.isTouching = false;
      var offsetSize = this.state.offsetSize;
      this.endValue = offsetSize;
      var breakpoint = this.maxOffsetSize / 2;
      var absOffsetSize = Math.abs(offsetSize);

      if (absOffsetSize > breakpoint) {
        this._reset(true);

        this.handleOpened(event);
        return;
      }

      this._reset(false); // TODO: Check behavior


      this.handleClosed(event);
    },

    /**
     *
     * @param {{width: number}} param0
     */
    handleDomInfo: function handleDomInfo(_ref3) {
      var width = _ref3.width;
      var _isOpened = this.state._isOpened;
      this.maxOffsetSize = width;

      this._reset(_isOpened);
    },

    /**
     *
     * @param {{text: string, style?: object | string, className?: object | string | string[]}} item
     * @param {number} index
     * @param {event} event
     */
    handleClick: function handleClick(item, index, event) {
      var onClick = this.onClick,
          autoClose = this.autoClose;

      if (typeof onClick === 'function') {
        onClick(item, index, event);
      }

      if (autoClose) {
        this._reset(false);

        this.handleClosed(event);
      }
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var _this$state = this.state,
        offsetSize = _this$state.offsetSize,
        componentId = _this$state.componentId;
    var options = this.options;
    var rootClass = _classnames_2_2_6_classnames('at-swipe-action', this.className);
    var transform = this.computeTransform(offsetSize);
    var transformStyle = transform ? {
      transform: transform
    } : {};
    return h("view", {
      "attrs": {
        "id": "swipeAction-".concat(componentId)
      },
      "class": rootClass,
      "on": {
        "touchMove": this.handleTouchMove,
        "touchEnd": this.handleTouchEnd,
        "touchStart": this.handleTouchStart
      }
    }, [h("view", {
      "class": _classnames_2_2_6_classnames('at-swipe-action__content', {
        animtion: !this.isTouching
      }),
      "style": transformStyle
    }, [this.$slots.default]), Array.isArray(options) && options.length > 0 ? h(AtSwipeActionOptions, {
      "attrs": {
        "options": options,
        "componentId": componentId
      },
      "on": {
        "queryedDom": this.handleDomInfo
      }
    }, [options.map(function (item, key) {
      return h("view", {
        "key": "".concat(item.text, "-").concat(key),
        "style": item.style,
        "on": {
          "tap": function tap(e) {
            return _this2.handleClick(item, key, e);
          }
        },
        "class": _classnames_2_2_6_classnames('at-swipe-action__option', item.className)
      }, [h("view", {
        "class": "option__text"
      }, [item.text])]);
    })]) : null]);
  }
};

var index$j = {
  name: 'AtLoadMore',
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    noMoreTextStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    moreBtnStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    status: {
      type: String,
      default: 'more',
      validator: function validator(val) {
        return ['more', 'loading', 'noMore'].includes(val);
      }
    },
    loadingText: {
      type: String,
      default: '加载中'
    },
    moreText: {
      type: String,
      default: '查看更多'
    },
    noMoreText: {
      type: String,
      default: '没有更多'
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {},
  render: function render() {
    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle,
        loadingText = this.loadingText,
        moreText = this.moreText,
        status = this.status,
        moreBtnStyle = this.moreBtnStyle,
        noMoreTextStyle = this.noMoreTextStyle,
        noMoreText = this.noMoreText;
    var component;

    if (status === 'loading') {
      component = h(AtActivityIndicator, {
        "attrs": {
          "mode": "center",
          "content": loadingText
        }
      });
    } else if (status === 'more') {
      component = h("view", {
        "class": "at-load-more__cnt"
      }, [h(Button$1, {
        "attrs": {
          "full": true,
          "customStyle": moreBtnStyle
        },
        "on": {
          "tap": this.onClick
        }
      }, [moreText])]);
    } else {
      component = h("view", {
        "class": "at-load-more__tip",
        "style": noMoreTextStyle
      }, [noMoreText]);
    }

    return h("view", {
      "class": _classnames_2_2_6_classnames('at-load-more', className),
      "style": customStyle
    }, [component]);
  }
};

var index$k = {
  name: 'AtDivider',
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 0
    },
    fontColor: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 0
    },
    lineColor: {
      type: String,
      default: ''
    },
    className: {
      type: [Object, String],
      default: function _default() {}
    }
  },
  render: function render() {
    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle,
        content = this.content,
        height = this.height,
        fontColor = this.fontColor,
        fontSize = this.fontSize,
        lineColor = this.lineColor;
    var rootStyle = {
      height: height ? "".concat(Taro.pxTransform(Number(height))) : ''
    };
    var fontStyle = {
      color: fontColor,
      'font-size': fontSize ? "".concat(Taro.pxTransform(Number(fontSize))) : ''
    };
    var lineStyle = {
      backgroundColor: lineColor
    };
    return h("view", {
      "class": _classnames_2_2_6_classnames('at-divider', className),
      "style": this.$mergeStyle(rootStyle, customStyle)
    }, [h("view", {
      "class": "at-divider__content",
      "style": fontStyle
    }, [content === '' ? this.$slots.default : content]), h("view", {
      "class": "at-divider__line",
      "style": lineStyle
    })]);
  }
};

/**
 *
 * @param {number} num
 */
var formatNum = function formatNum(num) {
  return num <= 9 ? "0".concat(num) : "".concat(num);
};

var CountdownItem = {
  name: 'AtCountdownItem',
  props: {
    num: {
      type: Number,
      default: 0
    },
    separator: {
      type: String,
      default: ''
    }
  },
  render: function render() {
    var h = arguments[0];
    var num = this.num,
        separator = this.separator;
    return h("view", {
      "class": "at-countdown__item"
    }, [h("view", {
      "class": "at-countdown__time-box"
    }, [h("view", {
      "class": "at-countdown__time"
    }, [formatNum(num)])]), h("view", {
      "class": "at-countdown__separator"
    }, [separator])]);
  }
};

/**
 *
 * @param {number} day
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 */

var toSeconds = function toSeconds(day, hours, minutes, seconds) {
  return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
};

var index$l = {
  name: 'AtCountdown',
  props: {
    customStyle: {
      type: [String, Object],
      default: function _default() {}
    },
    className: {
      type: [String, Array],
      default: ''
    },
    isCard: {
      type: Boolean,
      default: false
    },
    isShowDay: {
      type: Boolean,
      default: false
    },
    isShowHour: {
      type: Boolean,
      default: true
    },
    format: {
      type: Object,
      default: function _default() {
        return {
          day: '天',
          hours: '时',
          minutes: '分',
          seconds: '秒'
        };
      }
    },
    day: {
      type: Number,
      default: 0
    },
    hours: {
      type: Number,
      default: 0
    },
    minutes: {
      type: Number,
      default: 0
    },
    seconds: {
      type: Number,
      default: 0
    },
    handleTimeUp: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    var day = this.day,
        hours = this.hours,
        minutes = this.minutes,
        seconds = this.seconds;
    var stateSeconds = toSeconds(day, hours, minutes, seconds);
    var state = this.calculateTime();
    return {
      state: state,
      stateSeconds: stateSeconds,
      timer: null
    };
  },
  mounted: function mounted() {
    this.setTimer();
  },
  beforeDestroy: function beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    calculateTime: function calculateTime() {
      var day = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;

      if (this.stateSeconds > 0) {
        day = this.isShowDay ? Math.floor(this.stateSeconds / (60 * 60 * 24)) : 0;
        hours = Math.floor(this.stateSeconds / (60 * 60)) - day * 24;
        minutes = Math.floor(this.stateSeconds / 60) - day * 24 * 60 - hours * 60;
        seconds = Math.floor(this.stateSeconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
      }

      return {
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    },
    setTimer: function setTimer() {
      if (!this.timer) this.countdonwn();
    },
    clearTimer: function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    countdonwn: function countdonwn() {
      var _this = this;

      this.state = this.calculateTime();
      this.stateSeconds--;

      if (this.stateSeconds < 0) {
        this.clearTimer();
        this.onTimeUp && this.onTimeUp();
        return;
      }

      this.timer = setTimeout(function () {
        _this.countdonwn();
      }, 1000);
    }
  },
  render: function render() {
    var h = arguments[0];
    var isShowDay = this.isShowDay,
        isShowHour = this.isShowHour,
        className = this.className,
        customStyle = this.customStyle,
        isCard = this.isCard,
        format = this.format;
    var _this$state = this.state,
        day = _this$state.day,
        hours = _this$state.hours,
        minutes = _this$state.minutes,
        seconds = _this$state.seconds;
    return h("view", {
      "class": _classnames_2_2_6_classnames({
        'at-countdown': true,
        'at-countdown--card': isCard
      }, className),
      "style": customStyle
    }, [isShowDay && h(CountdownItem, {
      "attrs": {
        "num": day,
        "separator": format.day
      }
    }), isShowHour && h(CountdownItem, {
      "attrs": {
        "num": hours,
        "separator": format.hours
      }
    }), h(CountdownItem, {
      "attrs": {
        "num": minutes,
        "separator": format.minutes
      }
    }), h(CountdownItem, {
      "attrs": {
        "num": seconds,
        "separator": format.seconds
      }
    })]);
  }
};

var index$m = {
  name: 'AtSteps',
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    className: {
      type: [Object, String],
      default: function _default() {
        return '';
      }
    },
    current: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      },
      validator: function validator(ary) {
        return ary.every(function (item) {
          return Array.isArray(item) || typeof item === 'string';
        });
      }
    },
    onChange: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      this.onClick && this.onClick(event);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var customStyle = this.customStyle,
        className = this.className,
        items = this.items,
        current = this.current;
    return h("view", {
      "class": _classnames_2_2_6_classnames('at-steps', className),
      "style": customStyle
    }, [!!items && items.map(function (item, i) {
      var _classNames;

      return h("view", {
        "key": item.title,
        "class": _classnames_2_2_6_classnames({
          'at-steps__item': true,
          'at-steps__item--active': i === current,
          'at-steps__item--inactive': i !== current
        }),
        "on": {
          "click": _this.handleClick.bind(_this, i)
        }
      }, [h("view", {
        "class": "at-steps__circular-wrap"
      }, [i !== 0 && h("view", {
        "class": "at-steps__left-line"
      }), item.status ? h("view", {
        "class": _classnames_2_2_6_classnames({
          'at-icon': true,
          'at-icon-check-circle': item.status === 'success',
          'at-icon-close-circle': item.status === 'error',
          'at-steps__single-icon': true,
          'at-steps__single-icon--success': item.status === 'success',
          'at-steps__single-icon--error': item.status === 'error'
        })
      }) : h("view", {
        "class": "at-steps__circular"
      }, [item.icon ? h("view", {
        "class": _classnames_2_2_6_classnames('at-icon', (_classNames = {}, _defineProperty(_classNames, "at-icon-".concat(item.icon.value), item.icon.value), _defineProperty(_classNames, 'at-steps__circle-icon', true), _classNames))
      }) : h("view", {
        "class": "at-steps__num"
      }, [i + 1])]), i !== items.length - 1 && h("view", {
        "class": "at-steps__right-line"
      })]), h("view", {
        "class": "at-steps__title"
      }, [item.title]), h("view", {
        "class": "at-steps__desc"
      }, [item.desc])]);
    })]);
  }
};

var index$n = {
  name: 'AtCurtain',
  props: {
    customStyle: {
      type: [Object, String],
      default: function _default() {}
    },
    className: {
      type: [Array, String],
      default: function _default() {
        return '';
      }
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    closeBtnPosition: {
      type: String,
      default: 'bottom'
    },
    onClose: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    handleTab: function handleTab(event) {
      event.stopPropagation();
      console.log(this.onClose);
      this.onClose && this.onClose(event);
    },
    stopPropagation: function stopPropagation(event) {
      event.stopPropagation();
    }
  },
  render: function render() {
    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle,
        isOpened = this.isOpened,
        closeBtnPosition = this.closeBtnPosition;
    var curtainClass = _classnames_2_2_6_classnames({
      'at-curtain': true,
      'at-curtain--closed': !isOpened
    }, className);
    var btnCloseClass = _classnames_2_2_6_classnames(_defineProperty({
      'at-curtain__btn-close': true
    }, "at-curtain__btn-close--".concat(closeBtnPosition), closeBtnPosition));
    return h("view", {
      "class": curtainClass,
      "style": customStyle,
      "on": {
        "tap": this.stopPropagation
      }
    }, [h("view", {
      "class": "at-curtain__container"
    }, [h("view", {
      "class": "at-curtain__body"
    }, [this.$slots.default, h("view", {
      "class": btnCloseClass,
      "on": {
        "tap": this.handleTab
      }
    })])])]);
  }
};

var index$o = {
  name: 'AtMessage',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    }
  },
  data: function data() {
    return {
      timer: null,
      state: {
        _isOpened: false,
        _message: '',
        _type: 'info',
        _duration: 3000
      }
    };
  },
  mounted: function mounted() {
    this.bindMessageListener();
  },
  beforeDestroy: function beforeDestroy() {
    taro.eventCenter.off('atMessage');
  },
  methods: {
    bindMessageListener: function bindMessageListener() {
      var _this = this;

      taro.eventCenter.on('atMessage', function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var message = options.message,
            type = options.type,
            duration = options.duration;
        var newState = {
          _isOpened: true,
          _message: message,
          _type: type,
          _duration: duration || _this.state._duration
        };

        _this.setState(newState, function () {
          clearTimeout(_this.timer);
          _this.timer = setTimeout(function () {
            _this.setState({
              _isOpened: false
            });
          }, _this.state._duration);
        });
      }); // 绑定函数

      taro.atMessage = taro.eventCenter.trigger.bind(taro.eventCenter, 'atMessage');
    }
  },
  render: function render() {
    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle;
    var _this$state = this.state,
        _message = _this$state._message,
        _isOpened = _this$state._isOpened,
        _type = _this$state._type;
    var rootCls = _classnames_2_2_6_classnames({
      'at-message': true,
      'at-message--show': _isOpened,
      'at-message--hidden': !_isOpened
    }, "at-message--".concat(_type), className);
    return h("view", {
      "class": rootCls,
      "style": customStyle
    }, [_message]);
  }
};

var ENV$2 = taro.getEnv();
var index$p = {
  name: 'AtIndexes',
  mixins: [mixins],
  props: {
    customStyle: {
      type: [Object, String],
      default: ''
    },
    className: {
      type: [Array, String],
      default: ''
    },
    animation: {
      type: Boolean,
      default: false
    },
    isVibrate: {
      type: Boolean,
      default: true
    },
    isShowToast: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    topKey: {
      type: String,
      default: 'Top'
    },
    onClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    onScrollIntoView: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      // 右侧导航高度
      menuHeight: 0,
      // 右侧导航距离顶部高度
      startTop: 0,
      // 右侧导航元素高度
      itemHeight: 0,
      // 当前索引
      currentIndex: -1,
      listId: isTest() ? 'indexes-list-AOTU2018' : "list-".concat(uuid()),
      timeoutTimerL: null,
      state: {
        _scrollIntoView: '',
        _scrollTop: 0,
        _tipText: '',
        _isShowToast: false,
        isWEB: taro.getEnv() === taro.ENV_TYPE.WEB
      }
    };
  },
  computed: {
    listLen: function listLen() {
      return this.list.length;
    }
  },
  watch: {
    listLen: function listLen() {
      this.initData();
    }
  },
  beforeMount: function beforeMount() {
    this.onScrollIntoView && this.onScrollIntoView(this.__jumpTarget.bind(this));
  },
  mounted: function mounted() {
    if (ENV$2 === taro.ENV_TYPE.WEB) {
      this.listRef = document.getElementById(this.listId);
    }

    this.initData();
  },
  methods: {
    handleClick: function handleClick(item) {
      this.onClick && this.onClick(item);
    },
    handleTouchMove: function handleTouchMove(event) {
      event.stopPropagation();
      event.preventDefault();
      var list = this.list;
      var pageY = event.touches[0].pageY;
      var index = Math.floor((pageY - this.startTop) / this.itemHeight);

      if (index >= 0 && index <= list.length && this.currentIndex !== index) {
        this.currentIndex = index;
        var key = index > 0 ? list[index - 1].key : 'top';
        var touchView = "at-indexes__list-".concat(key);
        this.jumpTarget(touchView, index);
      }
    },
    handleTouchEnd: function handleTouchEnd() {
      this.currentIndex = -1;
    },

    /**
     *
     * @param {string} _scrollIntoView
     * @param {number} idx
     */
    jumpTarget: function jumpTarget(_scrollIntoView, idx) {
      var _this = this;

      var topKey = this.topKey,
          list = this.list;

      var _tipText = idx === 0 ? topKey : list[idx - 1].key;

      if (ENV$2 === taro.ENV_TYPE.WEB) {
        delayQuerySelector(this, '.at-indexes', 0).then(function (rect) {
          var targetOffsetTop = _this.listRef.childNodes[idx].offsetTop;

          var _scrollTop = targetOffsetTop - rect[0].top;

          _this.updateState({
            _scrollTop: _scrollTop,
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText
          });
        });
        return;
      }

      this.updateState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText
      });
    },

    /**
     *
     * @param {string} key
     */
    __jumpTarget: function __jumpTarget(key) {
      var list = this.list; // const index = _findIndex(list, ['key', key])

      var index = list.findIndex(function (item) {
        return item.key === key;
      });
      var targetView = "at-indexes__list-".concat(key);
      this.jumpTarget(targetView, index + 1);
    },
    updateState: function updateState(state) {
      var _this2 = this;

      var isShowToast = this.isShowToast,
          isVibrate = this.isVibrate;
      var _scrollIntoView = state._scrollIntoView,
          _tipText = state._tipText,
          _scrollTop = state._scrollTop; // TODO: Fix dirty hack

      this.setState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText,
        _scrollTop: _scrollTop,
        _isShowToast: isShowToast
      }, function () {
        clearTimeout(_this2.timeoutTimer);
        _this2.timeoutTimer = setTimeout(function () {
          _this2.setState({
            _tipText: '',
            _isShowToast: false
          });
        }, 3000);
      });

      if (isVibrate) {
        taro.vibrateShort();
      }
    },
    initData: function initData() {
      var _this3 = this;

      delayQuerySelector(this, '.at-indexes__menu').then(function (rect) {
        var len = _this3.list.length;
        _this3.menuHeight = rect[0].height;
        _this3.startTop = rect[0].top;
        _this3.itemHeight = Math.floor(_this3.menuHeight / (len + 1));
      });
    },
    handleScroll: function handleScroll(e) {
      if (e && e.detail) {
        this.setState({
          _scrollTop: e.detail.scrollTop
        });
      }
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var className = this.className,
        customStyle = this.customStyle,
        animation = this.animation,
        topKey = this.topKey,
        list = this.list;
    var _this$state = this.state,
        _scrollTop = _this$state._scrollTop,
        _scrollIntoView = _this$state._scrollIntoView,
        _tipText = _this$state._tipText,
        _isShowToast = _this$state._isShowToast,
        isWEB = _this$state.isWEB;
    var toastStyle = {
      minWidth: taro.pxTransform(100)
    };
    var rootCls = _classnames_2_2_6_classnames('at-indexes', className);
    var menuList = list.map(function (dataList, i) {
      var key = dataList.key;
      var targetView = "at-indexes__list-".concat(key);
      return h("view", {
        "class": "at-indexes__menu-item",
        "key": key,
        "on": {
          "tap": _this4.jumpTarget.bind(_this4, targetView, i + 1)
        }
      }, [key]);
    });
    var indexesList = list.map(function (dataList) {
      return h("view", {
        "attrs": {
          "id": "at-indexes__list-".concat(dataList.key)
        },
        "class": "at-indexes__list",
        "key": dataList.key
      }, [h("view", {
        "class": "at-indexes__list-title"
      }, [dataList.title]), h(AtList, [dataList.items && dataList.items.map(function (item) {
        return h(AtListItem, {
          "key": item.name,
          "attrs": {
            "title": item.name
          },
          "on": {
            "tap": _this4.handleClick.bind(_this4, item)
          }
        });
      })])]);
    });
    return h("view", {
      "class": rootCls,
      "style": customStyle
    }, [h(AtToast, {
      "attrs": {
        "customStyle": toastStyle,
        "isOpened": _isShowToast,
        "text": _tipText,
        "duration": 2000
      }
    }), h("view", {
      "class": "at-indexes__menu",
      "on": {
        "touchMove": this.handleTouchMove,
        "touchEnd": this.handleTouchEnd
      }
    }, [h("view", {
      "class": "at-indexes__menu-item",
      "on": {
        "tap": this.jumpTarget.bind(this, 'at-indexes__top', 0)
      }
    }, [topKey]), menuList]), h("scroll-view", {
      "class": "at-indexes__body",
      "attrs": {
        "id": this.listId,
        "scrollY": true,
        "scrollWithAnimation": animation,
        "scrollTop": isWEB ? _scrollTop : undefined,
        "scrollIntoView": !isWEB ? _scrollIntoView : ''
      },
      "on": {
        "scroll": this.handleScroll.bind(this)
      }
    }, [h("view", {
      "class": "at-indexes__content",
      "attrs": {
        "id": "at-indexes__top"
      }
    }, [this.$slots.default]), indexesList])]);
  }
};

var index$q = {
  name: 'AtFab',
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: function validator(val) {
        return ['normal', 'small'].includes(val);
      }
    },
    className: {
      type: String,
      default: ''
    },
    handleClick: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    handleTab: function handleTab(event) {
      this.handleClick && this.handleClick(event);
    }
  },
  render: function render() {
    var h = arguments[0];
    var size = this.size,
        className = this.className;
    var rootClass = _classnames_2_2_6_classnames('at-fab', className, _defineProperty({}, "at-fab--".concat(size), size));
    return h("view", {
      "class": rootClass,
      "on": {
        "tab": this.handleTab
      }
    }, [this.$slots.default]);
  }
};

exports.AtAccordion = index$h;
exports.AtActionSheet = index;
exports.AtActionSheetItem = index$1;
exports.AtActivityIndicator = AtActivityIndicator;
exports.AtAvatar = index$2;
exports.AtBadge = Badge;
exports.AtButton = Button$1;
exports.AtCard = index$3;
exports.AtCountdown = index$l;
exports.AtCurtain = index$n;
exports.AtDivider = index$k;
exports.AtFab = index$q;
exports.AtFloatLayout = index$4;
exports.AtGrid = index$5;
exports.AtIcon = index$6;
exports.AtIndexes = index$p;
exports.AtList = AtList;
exports.AtListItem = AtListItem;
exports.AtLoadMore = index$j;
exports.AtLoading = Loading;
exports.AtMessage = index$o;
exports.AtModal = index$7;
exports.AtModalAction = ModalAction;
exports.AtModalContent = ModalContent;
exports.AtModalHeader = ModalHeader;
exports.AtNavBar = index$8;
exports.AtNoticebar = index$9;
exports.AtPagination = index$a;
exports.AtProgress = index$b;
exports.AtSegmentedControl = index$c;
exports.AtSteps = index$m;
exports.AtSwipeAction = index$i;
exports.AtTabBar = index$d;
exports.AtTabs = index$e;
exports.AtTabsPane = index$f;
exports.AtTimeline = index$g;
exports.AtToast = AtToast;
//# sourceMappingURL=index.js.map
