(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{921:function(t,e,i){"use strict";i.r(e),i.d(e,"line_chart_viewport_change",(function(){return s}));var n=i(14),r="some-group",o={start:new Date(2e3,0,0),end:new Date(2e3,0,1),group:r},c={start:new Date(2e3,0,0),end:new Date(2001,0,0),group:r},u={duration:"5m"},w={duration:"30m"},s=function(){function t(t){var e=this;Object(n.l)(this,t),this.viewport=o,this.setViewPort=function(t){e.viewport=t}}return t.prototype.render=function(){var t=this;return Object(n.j)("div",{class:"synchro-chart-tests"},Object(n.j)("button",{id:"toggle-narrow-view-port",onClick:function(){return t.setViewPort(o)}},"use narrow viewport"),Object(n.j)("button",{id:"toggle-wide-view-port",onClick:function(){return t.setViewPort(c)}},"use wide viewport"),Object(n.j)("button",{id:"toggle-five-minute-view-port",onClick:function(){return t.setViewPort(u)}},"use 5 minute viewport"),Object(n.j)("button",{id:"toggle-thirty-moinute-view-port",onClick:function(){return t.setViewPort(w)}},"use 30 minute viewport"),Object(n.j)("br",null),Object(n.j)("br",null),Object(n.j)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(n.j)("sc-line-chart",{widgetId:"widget-id",dataStreams:[],viewport:this.viewport})),Object(n.j)("sc-webgl-context",null))},t}()}}]);