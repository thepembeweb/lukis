define(["require","fabric","flight/lib/compose","mixins/with_outline_helper"],function(e){var t=e("fabric"),i=e("flight/lib/compose"),r=e("mixins/with_outline_helper"),n=t.util.createClass(t.PatternBrush,{getPatternSrc:function(){var e=t.document.createElement("canvas");e.width=e.height=10;var i=e.getContext("2d");return i.strokeStyle=this.color,i.lineWidth=5,i.beginPath(),i.moveTo(5,0),i.lineTo(5,10),i.closePath(),i.stroke(),e}}),o={create:function(e){return new n(e)},createShapeBrush:function(e,i){var r=this.create(e);r.width=i.brushWidth||10,r.color=i.color;for(var n=this.createOutline(r,i.shape,i),o=n.length-1;o>=0;o--)r._points.push(new t.Point(n[o].x,n[o].y));r._finalizeAndAddPath()}};return i.mixin(o,[r]),o});