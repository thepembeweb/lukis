define(["require","flight/component","data/with_canvas","fabric"],function(t){function e(){this.defaultAttrs({color:"#E74C3C",width:1,brush:{color:"#000000"}}),this.after("initialize",function(){this.on("click",this.onClick),this.on(document,"colorChanged",this.setBrushProperty)}),this.setInitHandlers=function(){this.on(document,"releaseHandlersRequested",this.onReleaseHandlerRequested),this.on(document,"selectedBrushReady",this.onSelectedBrushReady)},this.setPaintHandlers=function(){},this.releaseInitHandlers=function(){this.off(document,"paintPreparationReady"),this.off(document,"releaseHandlersRequested"),this.off(document,"selectedBrushReady")},this.releasePaintHandlers=function(){this.off(document,"canvasMouseDown")},this.init=function(){this.attr.canvas.isDrawingMode=!0,this.trigger(document,"selectedBrushRequested")},this.onClick=function(){this.setInitHandlers(),this.on(document,"paintPreparationReady",this.init),this.trigger(document,"paintRequested")},this.onSelectedBrushReady=function(t,e){this.setBrush(t,e)},this.setBrush=function(t,e){this.attr.canvas.freeDrawingBrush=e.brush.create(this.attr.canvas),this.attr.canvas.freeDrawingBrush.color=this.attr.brush.color},this.setBrushProperty=function(t,e){this.attr.brush[e.key]=e[e.key],this.attr.canvas.freeDrawingBrush[e.key]=e[e.key]},this.onReleaseHandlerRequested=function(){this.releaseInitHandlers(),this.releasePaintHandlers(),this.attr.canvas.isDrawingMode=!1}}var i=t("flight/component"),r=t("data/with_canvas");return t("fabric"),i(e,r)});