(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{980:function(t,e,a){"use strict";a.r(e),a.d(e,"sc_webgl_chart_annotation_editable",(function(){return w}));var n,i=a(14),s=a(11),o=a(39),l=new Date(1998,0,0),c=new Date(2001,0,1),h={x:new Date(1999,0,0).getTime(),y:2e3},u={x:new Date(2e3,0,0).getTime(),y:4e3},b={x:new Date(1999,0,0).getTime(),y:4e3},r={x:new Date(2e3,0,0).getTime(),y:2e3},d={isEditable:!0,comparisonOperator:s.a.GREATER_THAN,value:3800,label:{text:"here is a y label",show:!0},showValue:!0,color:"blue",id:"blue-threshold"},g={isEditable:!0,value:3200,label:{text:"another y label",show:!0},showValue:!0,color:"green",id:"green-anotation"},w=function(){function t(t){var e=this;Object(i.l)(this,t),this.isEditableValue=!1,this.isShowValue=!0,this.annotations={x:[{value:new Date((c.getTime()+l.getTime())/2),label:{text:"here is a x label",show:!0},showValue:!0,color:"purple"}],y:[Object.assign(Object.assign({},g),{isEditable:!this.isEditableValue,showValue:this.isShowValue}),Object.assign(Object.assign({},d),{isEditable:!this.isEditableValue,showValue:!this.isShowValue}),Object.assign(Object.assign({},g),{isEditable:this.isEditableValue,value:2300,color:"red",showValue:this.isShowValue,id:"red-annotation"})]},this.changeValue=function(){var t=e.annotations.y;e.annotations=Object.assign(Object.assign({},e.annotations),{y:t.map((function(t){return Object.assign(Object.assign({},t),{value:n.y.find((function(e){return e.id===t.id})).value})}))})},this.onEditableChange=function(){var t=e.annotations.y;e.annotations=Object.assign(Object.assign({},e.annotations),{y:t.map((function(t){return Object.assign(Object.assign({},t),{isEditable:!t.isEditable})}))})},this.onShowValueChange=function(){var t=e.annotations.y;e.annotations=Object.assign(Object.assign({},e.annotations),{y:t.map((function(t){return Object.assign(Object.assign({},t),{showValue:!t.showValue})}))})}}return t.prototype.onWidgetUpdated=function(t){var e=t.detail;this.annotations=e.annotations,n=this.annotations},t.prototype.componentDidLoad=function(){n=this.annotations,setInterval(this.changeValue,1e3)},t.prototype.render=function(){return Object(i.j)("div",{class:"synchro-chart-tests",style:{width:"1000px",height:"1000px"}},Object(i.j)("div",null,Object(i.j)("button",{id:"change-editable",onClick:this.onEditableChange},"Change Editable")),Object(i.j)("div",null,Object(i.j)("button",{id:"change-showvalue",onClick:this.onShowValueChange},"Change Show Value")),Object(i.j)("div",null,Object(i.j)("sc-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[h,u],resolution:0,dataType:o.b.NUMBER},{id:"test2",color:"orange",name:"test stream2",data:[b,r],resolution:0,dataType:o.b.NUMBER}],annotations:this.annotations,viewport:{start:l,end:c},size:{height:1e3,width:1e3}}),Object(i.j)("sc-webgl-context",null)))},t}()}}]);