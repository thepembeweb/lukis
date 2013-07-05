define(["require","flight/component","fabric","flight/lib/advice","flight/lib/compose","data/with_canvas","ui/with_handlebars","outlinePainter/rect","text!templates/hiddenInputImage.hbs"],function(t){function e(){this.defaultAttrs({color:"#585858",imageInput:"#hidden-image-input"}),this.after("initialize",function(){var t=this;this.$node.parent().append(this.renderData({},c)),this.on("click",this.onClick),this.on(document,"uiBrushClicked",this.onUiBrushClicked),$(this.attr.imageInput).change(function(e){t.attr.url=$(this).val().replace(/C:\\fakepath\\/i,""),t.attr.file=e.target.files[0],t.attr.canvas.cursor="crosshair",t.attr.outlinePainter=a.init(t.attr.canvas,{color:t.attr.color}),n.mixin(t.attr.outlinePainter,[r.withAdvice]),t.attr.outlinePainter.after("finish",function(){t.afterFinishCallback()}.bind(t)),t.trigger(document,"paintRequested",{painter:t.attr.outlinePainter})})}),this.onUiBrushClicked=function(t,e){"image"!==e.clicked&&this.trigger(document,"paintStopRequested")},this.onClick=function(){this.trigger(document,"uiBrushClicked",{clicked:"image"}),this.loadImageSelectionDialog()},this.loadImageSelectionDialog=function(){$(this.attr.imageInput).click()},this.afterFinishCallback=function(){this.trigger(document,"paintStopRequested"),this.attr.rect=this.attr.outlinePainter.outline,this.addImageToCanvas(),this.attr.canvas.cursor="default"},this.addImageToCanvas=function(){var e=this,i=this.attr.rect;t(["images/imageCanvasPlacement"],function(t){t.create(e.attr.canvas,{x:i.width>0?i.x:i.x+i.width,y:i.height>0?i.y:i.y+i.height,width:Math.abs(i.width),height:Math.abs(i.height),url:e.attr.url,file:e.attr.file})}),this.attr.rect=null}}var i=t("flight/component"),r=(t("fabric"),t("flight/lib/advice")),n=t("flight/lib/compose"),s=t("data/with_canvas"),o=t("ui/with_handlebars"),a=t("outlinePainter/rect"),c=t("text!templates/hiddenInputImage.hbs");return i(e,s,o)});