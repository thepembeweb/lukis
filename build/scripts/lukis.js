define(["require","flight/component","fabric"],function(t){function e(){this.defaultAttrs({handlerHelper:{},selectedObjects:[],canvas:void 0,canvasEl:void 0}),this.after("initialize",function(){this.attr.canvas=new r.Canvas(this.$node.attr("id")),this.attr.canvasEl="#"+this.$node.attr("id"),this.on(document,"canvasRequested",this.onCanvasRequested),this.on(this.attr.canvasEl,"paintRequested",this.preparePainting),this.on(this.attr.canvasEl,"releaseCanvasHandlers",this.releaseHandlers)}),this.onCanvasRequested=function(){this.trigger(document,"canvasReady",{canvas:this.attr.canvas,canvasEl:this.attr.canvasEl})},this.preparePainting=function(t,e){var i,r=this.attr.canvas,e=e||{};this.attr.painter=i=e.painter||{},this.trigger(this.attr.canvasEl,"paintPreparationReady",{canvas:r}),i.onMouseDown&&"function"==typeof i.onMouseDown&&(this.attr.handlerHelper.onMouseDown=function(t){i.onMouseDown(t)},r.on("mouse:down",this.attr.handlerHelper.onMouseDown)),i.onMouseUp&&"function"==typeof i.onMouseUp&&(this.attr.handlerHelper.onMouseUp=function(t){i.onMouseUp(t)},r.on("mouse:up",this.attr.handlerHelper.onMouseUp)),i.onMouseMove&&"function"==typeof i.onMouseMove&&(this.attr.handlerHelper.onMouseMove=function(t){i.onMouseMove(t)},r.on("mouse:move",this.attr.handlerHelper.onMouseMove)),this.on(document,"keydown",this.onKeyDown),this.on(this.attr.canvasEl,"paintStopRequested",this.releaseHandlers)},this.releaseHandlers=function(){var t=this.attr.canvas,e=this.attr.painter;e.onMouseDown&&"function"==typeof e.onMouseDown&&t.off("mouse:down",this.attr.handlerHelper.onMouseDown),e.onMouseUp&&"function"==typeof e.onMouseUp&&t.off("mouse:up",this.attr.handlerHelper.onMouseUp),e.onMouseMove&&"function"==typeof e.onMouseMove&&t.off("mouse:move",this.attr.handlerHelper.onMouseMove)},this.onKeyDown=function(t){27===t.keyCode&&(this.releaseHandlers(),this.trigger(this.attr.canvasEl,"releaseHandlersRequested"))}}var i=t("flight/component"),r=t("fabric");return i(e)});