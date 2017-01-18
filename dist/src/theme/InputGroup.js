Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _variables=require('./variables');var _variables2=_interopRequireDefault(_variables);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_variables2.default;
var inputGroupTheme={
'NativeBase.Icon':{
fontSize:24,
color:variables.topTabBarActiveTextColor,
paddingHorizontal:5},

'NativeBase.IconNB':{
fontSize:24,
color:variables.topTabBarActiveTextColor,
paddingHorizontal:5},

'NativeBase.Input':{
height:variables.inputHeightBase,
color:variables.inputColor,
paddingLeft:5,
paddingRight:5,
flex:1,
fontSize:variables.inputFontSize,
lineHeight:variables.inputLineHeight},

'.underline':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

paddingLeft:5,
borderWidth:variables.borderWidth,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputBorderColor},

'.regular':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

paddingLeft:5,
borderWidth:variables.borderWidth,
borderColor:variables.inputBorderColor},

'.rounded':{
'.success':{
borderColor:variables.inputSuccessBorderColor},

'.error':{
borderColor:variables.inputErrorBorderColor},

paddingLeft:5,
borderWidth:variables.borderWidth,
borderRadius:variables.inputGroupRoundedBorderRadius,
borderColor:variables.inputBorderColor},


'.success':{
'.rounded':{
borderRadius:30,
borderColor:variables.inputSuccessBorderColor},

'.regular':{
borderColor:variables.inputSuccessBorderColor},

'.underline':{
borderWidth:variables.borderWidth,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputSuccessBorderColor},

borderColor:variables.inputSuccessBorderColor},


'.error':{
'.rounded':{
borderRadius:30,
borderColor:variables.inputErrorBorderColor},

'.regular':{
borderColor:variables.inputErrorBorderColor},

'.underline':{
borderWidth:variables.borderWidth,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputErrorBorderColor},

borderColor:variables.inputErrorBorderColor},


paddingLeft:5,
borderWidth:variables.borderWidth,
borderTopWidth:0,
borderRightWidth:0,
borderLeftWidth:0,
borderColor:variables.inputBorderColor,
backgroundColor:'transparent',
flexDirection:'row',
alignItems:'center'};



return inputGroupTheme;
};
//# sourceMappingURL=InputGroup.js.map