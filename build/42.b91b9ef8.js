(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1036:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return a})),n(8);var i=0,r=5e3,c=new Date(2e3,0,0,0,0),a=new Date(2e3,0,0,0,10),u=2500,o="Warning",d=(new Date(c.getTime()+1/3*(a.getTime()-c.getTime())),{x:(c.getTime()+a.getTime())/2,y:u})},921:function(e,t,n){"use strict";n.r(t),n.d(t,"line_chart_unsupported_data_types",(function(){return d}));var i=n(14),r=(n(8),n(39)),c=n(1036),a=new Date(1998,0,0),u=new Date(2e3,0,1),o=u.getTime()-a.getTime(),d=function(){function e(e){Object(i.l)(this,e)}return e.prototype.render=function(){return Object(i.j)("div",{class:"synchro-chart-tests"},Object(i.j)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(i.j)("sc-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[{x:new Date(a.getTime()+o/4).getTime(),y:c.c},{x:new Date(a.getTime()+o/4).getTime(),y:c.c}],resolution:0,dataType:r.b.STRING}],size:{height:500,width:500},viewport:{start:a,end:u,yMin:0,yMax:5e3},bufferFactor:1,minBufferSize:1}),Object(i.j)("sc-webgl-context",null)))},e}()}}]);