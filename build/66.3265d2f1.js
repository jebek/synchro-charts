(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{929:function(e,t,n){"use strict";n.r(t),n.d(t,"sc_chart_y_range",(function(){return l}));var i,a=n(14),c=n(39),o=(n(141),n(65)),r=new URLSearchParams(window.location.search).get("componentTag")||"sc-line-chart",g=new Date(2e3,0,0),s=new Date(2001,0,0),w=s.getTime()-g.getTime(),m={x:new Date(g.getTime()+w/5).getTime(),y:1e3},d={x:new Date(g.getTime()+2*w/5).getTime(),y:1250},T={x:new Date(g.getTime()+3*w/5).getTime(),y:5e3},u={x:new Date(g.getTime()+4*w/5).getTime(),y:1e4},p={x:new Date(g.getTime()+w).getTime(),y:15e3},h=[{id:"test",dataType:c.b.NUMBER,color:"black",name:"test stream",aggregates:(i={},i[o.f]=[m,d,T,u,p],i),data:[],resolution:o.f}],l=function(){function e(e){Object(a.l)(this,e),this.component=r}return e.prototype.render=function(){return Object(a.j)("div",null,Object(a.j)(this.component,{widgetId:"widget-id",dataStreams:h,size:{height:500,width:500},viewport:{start:g,end:s}}),Object(a.j)("sc-webgl-context",null))},e}()}}]);