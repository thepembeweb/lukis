define(["require","flight/component","mixins/with_canvas","mixins/with_paint_shape","fabric","outlinePainter/circle"],function(t){function e(){this.defaultAttrs({type:"circle"}),this.getOutlinePainter=function(){return o.init(this.attr.canvas,{color:this.attr.brush.color})},this.afterFinishCallback=function(){this.trigger(this.attr.canvasEl,"paintStopRequested"),this.attr.circle=this.attr.outlinePainter.outline,this.createShapeBrush()},this.createShapeBrush=function(){var e=this.attr.brushId,i=this,n=this.attr.circle;t(["brushes/"+e],function(t){t.createShapeBrush(i.attr.canvas,{brush:e,shape:"circle",x:n.x,y:n.y,radius:n.radius,color:i.attr.brush.color,brushWidth:i.attr.brush.width})}),i.attr.circle=null}}var i=t("flight/component"),n=t("mixins/with_canvas"),r=t("mixins/with_paint_shape"),o=(t("fabric"),t("outlinePainter/circle"));return i(e,n,r)});