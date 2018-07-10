"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React),PropTypes=_interopDefault(require("prop-types")),isEqual=_interopDefault(require("lodash.isequal")),debounce=function(l,r){var n=null;return function(){clearTimeout(n);var e=arguments,t=this;n=setTimeout(function(){l.apply(t,e)},r)}},includes=function(e,t){return-1<String(e).toLowerCase().indexOf(String(t).toLowerCase())},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function r(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,l){return t&&r(e.prototype,t),l&&r(e,l),e}}(),inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,l=Array(e.length);t<e.length;t++)l[t]=e[t];return l}return Array.from(e)},isDataObject=function(e,t,l){return"object"===(void 0===e?"undefined":_typeof(e))&&e.hasOwnProperty(t)&&e.hasOwnProperty(l)},generateGuid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},hasItem=function(e,t,l,r,n){if(!e||!t)return!1;if(Array.isArray(e)){if(isDataObject(t,l,r)){var o=e.findIndex(function(e){return e[l]===t[l]});return n?o:-1<o}var s=e.indexOf(t);return n?s:-1<s}return isDataObject(t,l,r)?e[l]===t[l]:e===t},hasItemIndex=function(e,t,l,r){return hasItem(e,t,l,r,!0)},keyExtractor=function(e,t,l){return isDataObject(e,t,l)?e[t]:e};function split(e){var t=1,l="",r=e.split("%"),n=r.length;0<n&&(l+=r[0]);for(var o=1;o<n;o++){if("s"===r[o][0]||"d"===r[o][0]){var s=arguments[t++];l+="d"===r[o][0]?Math.floor(s):s}else r[o][0]?l+="%"+r[o][0]:l+="%"+r[++o][0];l+=r[o].substring(1)}return l}var regex=/%[sdj]/;function format(e){return regex.test(e)?split.apply(null,arguments):Array.from(arguments).join(" ")}var isEmptyValue=function(e){return null==e||Array.isArray(e)&&!e.length},Placeholder=function(e){function t(e){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return inherits(t,e),createClass(t,[{key:"render",value:function(){var e=this.props,t=e.placeholder,l=e.value,r=e.numberDisplayed,n=e.multiple,o=e.valueKey,s=e.labelKey,a=e.manySelectedPlaceholder,i=e.allSelectedPlaceholder,p=e.allSelected,c="";if(isEmptyValue(this.props.value))c=t;else if(Array.isArray(l)&&n)l.length<=r?c=l.map(function(e){return isDataObject(e,o,s)?e[s]:e}).join(", "):a&&!p?c=includes(a,"%s")?format(a,l.length):a:p&&i&&(c=includes(i,"%s")?format(i,l.length):i);else{var u=Array.isArray(l)?l[0]:l;c=isDataObject(u,o,s)?u[s]:u}return React__default.createElement("span",{className:"picky__placeholder"},c)}}]),t}(React__default.PureComponent);Placeholder.defaultProps={placeholder:"None selected",allSelectedPlaceholder:"%s selected",manySelectedPlaceholder:"%s selected",allSelected:!1},Placeholder.propTypes={placeholder:PropTypes.string,value:PropTypes.oneOfType([PropTypes.array,PropTypes.string,PropTypes.number,PropTypes.object]),numberDisplayed:PropTypes.number,multiple:PropTypes.bool,valueKey:PropTypes.string,labelKey:PropTypes.string,manySelectedPlaceholder:PropTypes.string,allSelectedPlaceholder:PropTypes.string,allSelected:PropTypes.bool};var Filter=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:"render",value:function(){var t=this;return React__default.createElement("div",{className:"picky__filter"},React__default.createElement("input",{type:"text",ref:function(e){return t.filterInput=e},className:"picky__filter__input",placeholder:"Filter...",tabIndex:this.props.tabIndex,"aria-label":"filter options",onChange:function(e){return t.props.onFilterChange(e.target.value)}}))}}]),t}(React.Component);Filter.propTypes={onFilterChange:PropTypes.func.isRequired,tabIndex:PropTypes.number};var Option=function(e){var t=e.id,l=e.item,r=e.isSelected,n=e.labelKey,o=e.valueKey,s=e.selectValue,a=e.style,i=e.multiple,p=e.tabIndex,c=r?"option selected":"option",u=isDataObject(l,n,o)?l[n]:l,d=i?"checkbox":"radio",y=function(){return s(l)};return React__default.createElement("div",{tabIndex:p,id:t,role:"option",style:a,"data-selected":r?"selected":"","aria-selected":r,className:c,onClick:y,onKeyPress:function(e){e.preventDefault(),s(l)}},React__default.createElement("input",{type:d,readOnly:!0,onClick:y,tabIndex:-1,checked:r,"aria-label":u}),u)};Option.propTypes={isSelected:PropTypes.bool,valueKey:PropTypes.string,labelKey:PropTypes.string,id:PropTypes.string,item:PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.object]).isRequired,style:PropTypes.object,selectValue:PropTypes.func.isRequired,multiple:PropTypes.bool,tabIndex:PropTypes.oneOfType([PropTypes.string,PropTypes.number])};var Picky=function(e){function l(e){classCallCheck(this,l);var t=possibleConstructorReturn(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={selectedValue:e.value||(e.multiple?[]:null),open:e.open,filtered:!1,filteredOptions:[],id:generateGuid(),allSelected:!1},t.toggleDropDown=t.toggleDropDown.bind(t),t.toggleSelectAll=t.toggleSelectAll.bind(t),t.onFilterChange=t.onFilterChange.bind(t),t.selectValue=t.selectValue.bind(t),t.allSelected=t.allSelected.bind(t),t.handleOutsideClick=t.handleOutsideClick.bind(t),t.isItemSelected=t.isItemSelected.bind(t),t.focusFilterInput=t.focusFilterInput.bind(t),t}return inherits(l,e),createClass(l,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.allSelected();this.setState({allSelected:e})}},{key:"componentDidMount",value:function(){this.focusFilterInput(this.state.open)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.options===e.options&&this.state.selectedValue===e.value||this.setState({allSelected:this.allSelected()}),isEqual(e.value,this.state.selectedValue)||this.setState({selectedValue:e.value,allSelected:this.allSelected(e.value)})}},{key:"selectValue",value:function(e){var t=this,l=this.isControlled()?this.props.value:this.state.selectedValue;if(this.props.multiple&&Array.isArray(l)){var r=hasItemIndex(l,e,this.props.valueKey,this.props.labelKey);-1<r?this.setState({selectedValue:[].concat(toConsumableArray(l.slice(0,r)),toConsumableArray(l.slice(r+1)))},function(){t.props.onChange(t.state.selectedValue)}):this.setState({selectedValue:[].concat(toConsumableArray(this.state.selectedValue),[e])},function(){t.props.onChange(t.state.selectedValue)})}else this.setState({selectedValue:e},function(){t.props.onChange(t.state.selectedValue)})}},{key:"allSelected",value:function(e){var t=e||this.state.selectedValue,l=this.props.options.slice(0),r=Array.isArray(t)?t.slice(0):[];return isEqual(l,r)}},{key:"toggleSelectAll",value:function(){var e=this;this.setState({selectedValue:this.state.allSelected?[]:this.props.options,allSelected:!this.state.allSelected},function(){e.props.onChange(e.state.selectedValue)})}},{key:"isControlled",value:function(){return null!=this.props.value}},{key:"isItemSelected",value:function(e){var t=this.isControlled()?this.props.value:this.state.selectedValue;return hasItem(t,e,this.props.labelKey,this.props.valueKey)}},{key:"renderPlainList",value:function(e){var n=this,t=this.props,o=t.labelKey,s=t.valueKey,a=t.multiple,i=t.render,p=t.tabIndex,l=t.renderList;return l?l({items:e,selected:this.state.selectedValue,multiple:a,tabIndex:p,getIsSelected:this.isItemSelected,selectValue:this.selectValue}):e.map(function(e,t){var l=keyExtractor(e,s,o),r=n.isItemSelected(e);return"function"==typeof i?i({index:t,item:e,isSelected:r,selectValue:n.selectValue,labelKey:o,valueKey:s,multiple:a}):React__default.createElement(Option,{key:l,item:e,isSelected:r,selectValue:n.selectValue,labelKey:o,valueKey:s,multiple:a,tabIndex:p,id:n.state.id+"-option-"+t})})}},{key:"renderOptions",value:function(){var e=this.props.options,t=this.state.filtered?this.state.filteredOptions:e;return this.renderPlainList(t)}},{key:"onFilterChange",value:function(l){var r=this;if(!l.trim())return this.setState({filtered:!1,filteredOptions:[]});var e=this.props.options.filter(function(e){var t=e;return isDataObject(e,r.props.labelKey,r.props.valueKey)&&(t=e[r.props.labelKey]),includes(t,l)});this.setState({filtered:!0,filteredOptions:e},function(){r.props.onFiltered&&r.props.onFiltered(e)})}},{key:"handleOutsideClick",value:function(e){var t=this.props.keepOpen||this.props.multiple;this.node&&this.node.contains(e.target)&&t||this.toggleDropDown()}},{key:"focusFilterInput",value:function(e){e&&this.props.defaultFocusFilter&&this.filter&&this.filter.filterInput&&this.filter.filterInput.focus()}},{key:"toggleDropDown",value:function(){var t=this;this.state.open?document.removeEventListener("click",this.handleOutsideClick,!1):document.addEventListener("click",this.handleOutsideClick,!1),this.setState({open:!this.state.open},function(){var e=t.state.open;t.focusFilterInput(e),e&&t.props.onOpen?t.props.onOpen():!e&&t.props.onClose&&t.props.onClose()})}},{key:"render",value:function(){var t=this,e=this.props,l=e.className,r=e.placeholder,n=e.value,o=e.multiple,s=e.numberDisplayed,a=e.includeSelectAll,i=e.includeFilter,p=e.filterDebounce,c=e.valueKey,u=e.labelKey,d=e.tabIndex,y=e.dropdownHeight,f=e.renderSelectAll,h=this.state.open,b="";h&&(b+=this.state.id+"-list");var m=this.state.id+"__button",v={maxHeight:y,overflowY:"scroll"};return React__default.createElement("div",{ref:function(e){t.node=e},className:["picky",l].join(" "),id:this.state.id,role:"combobox","aria-controls":m,"aria-expanded":h,"aria-haspopup":h,"aria-owns":b,tabIndex:d},React__default.createElement("button",{id:this.state.id+"__button",type:"button",className:"picky__input",onClick:this.toggleDropDown},React__default.createElement(Placeholder,{allSelected:this.state.allSelected,placeholder:r,manySelectedPlaceholder:this.props.manySelectedPlaceholder,allSelectedPlaceholder:this.props.allSelectedPlaceholder,value:this.isControlled()?n:this.state.selectedValue,multiple:o,numberDisplayed:s,valueKey:c,labelKey:u})),h&&React__default.createElement("div",{className:"picky__dropdown",id:this.state.id+"-list",style:v},i&&React__default.createElement(Filter,{ref:function(e){return t.filter=e},onFilterChange:0<p?debounce(this.onFilterChange,p):this.onFilterChange}),f&&f({filtered:this.state.filtered,allSelected:this.state.allSelected,toggleSelectAll:this.toggleSelectAll,tabIndex:d,multiple:o}),!f&&a&&o&&!this.state.filtered&&React__default.createElement("div",{tabIndex:d,role:"option",id:this.state.id+"-option-selectall","data-selectall":"true","aria-selected":this.state.allSelected,className:this.state.allSelected?"option selected":"option",onClick:this.toggleSelectAll,onKeyPress:this.toggleSelectAll},React__default.createElement("input",{type:"checkbox",readOnly:!0,onClick:this.toggleSelectAll,tabIndex:-1,checked:this.state.allSelected,"aria-label":"select all"}),React__default.createElement("span",null,this.props.selectAllText)),this.renderOptions()))}}]),l}(React__default.PureComponent);Picky.defaultProps={numberDisplayed:3,options:[],filterDebounce:150,dropdownHeight:300,onChange:function(){},tabIndex:0,keepOpen:!0,selectAllText:"Select all"},Picky.propTypes={placeholder:PropTypes.string,value:PropTypes.oneOfType([PropTypes.array,PropTypes.string,PropTypes.number,PropTypes.object]),numberDisplayed:PropTypes.number,multiple:PropTypes.bool,options:PropTypes.array.isRequired,onChange:PropTypes.func.isRequired,open:PropTypes.bool,includeSelectAll:PropTypes.bool,includeFilter:PropTypes.bool,filterDebounce:PropTypes.number,dropdownHeight:PropTypes.number,onFiltered:PropTypes.func,onOpen:PropTypes.func,onClose:PropTypes.func,valueKey:PropTypes.string,labelKey:PropTypes.string,render:PropTypes.func,tabIndex:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),keepOpen:PropTypes.bool,manySelectedPlaceholder:PropTypes.string,allSelectedPlaceholder:PropTypes.string,selectAllText:PropTypes.string,renderSelectAll:PropTypes.func,defaultFocusFilter:PropTypes.bool,className:PropTypes.string,renderList:PropTypes.func},Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),l=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],n=0;n<l;){var o=t[n];if(e.call(r,o,n,t))return n;n++}return-1}}),module.exports=Picky;
