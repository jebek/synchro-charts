(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{973:function(t,e,a){"use strict";a.r(e),a.d(e,"sc_webgl_bar_chart_start_from_zero",(function(){return o}));var n=a(14),i=a(39),r=(a(141),a(65)),c=new Date(2e3,0,0,0,0),s=new Date(2e3,0,0,0,10),o=function(){function t(t){var e=this;Object(n.l)(this,t),this.testData=[{x:new Date((c.getTime()+s.getTime())/2).getTime(),y:4500}],this.changeDataDirection=function(){e.testData=e.testData.map((function(t){return{x:t.x,y:-t.y}}))}}return t.prototype.render=function(){var t;return Object(n.j)("div",{class:"synchro-chart-tests"},Object(n.j)("button",{id:"change-data-direction",onClick:this.changeDataDirection},"Change Data Direction"),Object(n.j)("br",null),Object(n.j)("br",null),Object(n.j)("div",{id:"chart-container",style:{width:"500px",height:"500px"}},Object(n.j)("sc-bar-chart",{dataStreams:[{id:"test",color:"purple",name:"test stream",data:[],aggregates:(t={},t[r.c]=this.testData,t),resolution:r.c,dataType:i.b.NUMBER}],widgetId:"test-id",size:{width:500,height:500},viewport:{start:c,end:s}}),Object(n.j)("sc-webgl-context",null)))},t}()}}]);