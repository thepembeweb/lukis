define(["require","fabric"],function(t){var e=t("fabric");return{drawChunks:function(t,i){var r=i.chunks,n=t.renderOnAddition;t.renderOnAddition=!1;for(var o=r.length-1;o>=0;o--)for(var a=r[o],h=0,s=a.length;s>h;h++)t.add(new e.Rect({width:a[h].width,height:a[h].width,left:a[h].x+1,top:a[h].y+1,fill:i.color,hasControls:!1,hasRotatingPoint:!1,lockUniScaling:!0}));t.clearContext(t.contextTop),t.renderOnAddition=n,t.renderAll()}}});