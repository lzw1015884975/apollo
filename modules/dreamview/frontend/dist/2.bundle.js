(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(4)),l=m(n(1)),i=m(n(2)),o=m(n(5)),r=m(n(6)),d=m(n(0)),u=m(n(104)),c=m(n(20)),f=n(176),s=m(n(477)),p=m(n(478));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){(0,l.default)(this,t);var n=(0,o.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));if(n.onClickHandler=n.onClickHandler.bind(n),n.scriptOnLoadHandler=n.scriptOnLoadHandler.bind(n),!u.default.mapAPILoaded){var i=function(){console.log("Map API script loaded.")};"BaiduMap"===PARAMETERS.navigation.map?window.initMap=n.scriptOnLoadHandler:"GoogleMap"===PARAMETERS.navigation.map&&(i=n.scriptOnLoadHandler),(0,s.default)({url:PARAMETERS.navigation.mapAPiUrl,onLoad:i,onError:function(){console.log("Failed to load map api")}})}return n}return(0,r.default)(t,e),(0,i.default)(t,[{key:"onClickHandler",value:function(){var e=this.props,t=e.hasRoutingControls,n=e.size,a=e.onResize;t&&(n===f.MAP_SIZE.DEFAULT?u.default.enableControls():u.default.disableControls()),a()}},{key:"componentDidMount",value:function(){u.default.mapAPILoaded&&this.scriptOnLoadHandler()}},{key:"scriptOnLoadHandler",value:function(){n(479)("./"+PARAMETERS.navigation.map+"Adapter").then((function(e){var t=new(0,e.default);u.default.mapAPILoaded=!0,u.default.initialize(c.default,t),u.default.disableControls()}))}},{key:"componentWillUnmount",value:function(){u.default.reset()}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,a=e.size;return["GoogleMap","BaiduMap"].includes(PARAMETERS.navigation.map)?d.default.createElement("div",{displayname:"navigation",className:"navigation-view",style:{width:t,height:n}},d.default.createElement("div",{id:"map_canvas"}),d.default.createElement(p.default,{type:a,onClick:this.onClickHandler})):(console.error("Map API "+PARAMETERS.navigation.map+" is not supported."),null)}}]),t}(d.default.Component);t.default=v},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.url,n=e.onLoad,a=e.onError,l=document.createElement("script");l.src=t,l.type="text/javascript",l.async=!0,l.onload=n,l.onerror=a,document.body.appendChild(l)}},478:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(4)),l=c(n(1)),i=c(n(2)),o=c(n(5)),r=c(n(6)),d=c(n(0)),u=n(176);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,i.default)(t,[{key:"getMinimizingIcon",value:function(){return d.default.createElement("svg",{viewBox:"0 0 20 20"},d.default.createElement("defs",null,d.default.createElement("path",{d:"M20 0L0 20h20V0z",id:"a"}),d.default.createElement("path",{d:"M11.53 18.5l-.03-7h7",id:"b"}),d.default.createElement("path",{d:"M12 12l7 7",id:"c"})),d.default.createElement("use",{xlinkHref:"#a",opacity:".8",fill:"#84b7FF"}),d.default.createElement("use",{xlinkHref:"#b",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}),d.default.createElement("use",{xlinkHref:"#c",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}))}},{key:"getMaximizingIcon",value:function(){return d.default.createElement("svg",{viewBox:"0 0 20 20"},d.default.createElement("defs",null,d.default.createElement("path",{d:"M20 0L0 20h20V0z",id:"a"}),d.default.createElement("path",{d:"M18.47 11.5l.03 7h-7",id:"b"}),d.default.createElement("path",{d:"M11 11l7 7",id:"c"})),d.default.createElement("use",{xlinkHref:"#a",opacity:".8",fill:"#84b7FF"}),d.default.createElement("use",{xlinkHref:"#b",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}),d.default.createElement("use",{xlinkHref:"#c",fillOpacity:"0",stroke:"#006AFF",strokeWidth:"2"}))}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.onClick,a=null;switch(t){case u.MAP_SIZE.FULL:a=this.getMinimizingIcon();break;case u.MAP_SIZE.DEFAULT:a=this.getMaximizingIcon();break;default:console.error("Unknown window size found:",t)}return d.default.createElement("div",{className:"window-resize-control",onClick:n},a)}}]),t}(d.default.PureComponent);t.default=f},479:function(e,t,n){var a={"./BaiduMapAdapter":[480,3],"./GoogleMapAdapter":[481,4]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n.t(l,7)}))}l.keys=function(){return Object.keys(a)},l.id=479,e.exports=l}}]);
//# sourceMappingURL=2.bundle.js.map