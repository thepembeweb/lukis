define(["require"],function(){function t(t,e){e=e||{},this.canvas=t,this.brushColor=e.color||"#000000",this.canvas.selection=!1,this.isDrawing=!1,this.brushColor="#000000",this.outline=void 0}return t.prototype.onMouseDown=function(t){var e=this.canvas.getPointer(t.e);return this.outline={x:e.x,y:e.y,radius:1},this.isDrawing=!0,this},t.prototype.onMouseMove=function(t){if(this.isDrawing){var e=this.canvas.getPointer(t.e);this.outline.radius=Math.sqrt(Math.pow(e.x-this.outline.x,2)+Math.pow(e.y-this.outline.y,2)),this.renderOutline()}return this},t.prototype.onMouseUp=function(){return this.isDrawing=!1,this.finish(),this},t.prototype.finish=function(){return this.canvas.clearContext(this.canvas.contextTop),this.canvas.selection=!0,this},t.prototype.renderOutline=function(){var t=this.canvas.contextTop;t.save(),t.beginPath(),t.lineWidth=1,t.strokeStyle=this.brushColor,t.arc(this.outline.x,this.outline.y,this.outline.radius,2*Math.PI,!1),t.stroke(),t.restore()},{init:function(e,i){return new t(e,i)}}});