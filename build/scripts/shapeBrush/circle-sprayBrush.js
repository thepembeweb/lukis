define(["require","utils/circleOutline","brushes/sprayBrush"],function(t){function e(t,e){var r=n.create(t),s=i(r,e.x,e.y,e.radius),o=s.length;r.color=e.color||"#000000";for(var a=0;o>a;a++)r.addSprayChunk(s[a]);r.onMouseUp()}var i=t("utils/circleOutline"),n=t("brushes/sprayBrush");return{create:function(t,i){if(!i.x||!i.y||!i.radius)throw new Error("Required params not provided");return e(t,i)}}});