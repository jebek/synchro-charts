(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{968:function(t,e,n){"use strict";n.r(e),n.d(e,"sc_webgl_bar_chart_fast_viewport",(function(){return h}));var i=n(14),a=n(39),r=(n(141),n(65)),s=new Date(1999,9,0,0,0),c=new Date(2e3,2,0,0,10),o=Array.from({length:50},(function(t,e){return{x:new Date(2e3,0,e,0,0).getTime(),y:2500}})),h=function(){function t(t){var e=this;Object(i.l)(this,t),this.dataStreams=[],this.colorIndex=0,this.start=s,this.end=c,this.idx=0,this.timeRange=[[new Date(2e3,2,0,0,0),new Date(2e3,3,0,0,0)],[new Date(2010,4,0,0,0),new Date(2020,5,0,0,0)],[new Date(2030,6,0,0,0),new Date(2040,7,0,0,0)],[s,c]],this.changeViewport=function(){var t=e.timeRange[e.idx%e.timeRange.length],n=t[0],i=t[1];e.start=n,e.end=i,e.idx+=1}}return t.prototype.render=function(){var t;return Object(i.j)("div",{class:"synchro-chart-tests"},Object(i.j)("button",{id:"change-viewport",onClick:this.changeViewport},"Change Viewport"),Object(i.j)("br",null),Object(i.j)("br",null),Object(i.j)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(i.j)("sc-bar-chart",{dataStreams:[{id:"test",color:"#264653",name:"test stream",data:[],resolution:r.b,aggregates:(t={},t[r.b]=o,t),dataType:a.b.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},viewport:{yMin:0,yMax:5e3,start:this.start,end:this.end}}),Object(i.j)("sc-webgl-context",null)))},t}()}}]);