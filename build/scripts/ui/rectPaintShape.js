define(["require","flight/component","mixins/with_canvas","mixins/with_paint_shape","fabric","outlinePainter/rect"],function(t){function e(){this.defaultAttrs({type:"rect"}),this.getOutlinePainter=function(){return o.init(this.attr.canvas,{color:this.attr.brush.color})},this.afterFinishCallback=function(){this.trigger(this.attr.canvasEl,"paintStopRequested"),this.attr.rect=this.attr.outlinePainter.outline,this.createShapeBrush()},this.createShapeBrush=function(){var e=this.attr.brushId,i=this,n=i.attr.rect;t(["brushes/"+e],function(t){t.createShapeBrush(i.attr.canvas,{brush:e,shape:"rect",x:n.width>0?n.x:n.x+n.width,y:n.height>0?n.y:n.y+n.height,width:Math.abs(n.width),height:Math.abs(n.height),color:i.attr.brush.color,brushWidth:i.attr.brush.width})}),i.attr.rect=null}}var i=t("flight/component"),n=t("mixins/with_canvas"),r=t("mixins/with_paint_shape"),o=(t("fabric"),t("outlinePainter/rect"));return i(e,n,r)});