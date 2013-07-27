define(function(require){
  var circleOutlinePts = require("utils/circleOutlinePoints"),
      circleBrush = require("brushes/circleBrush");

  function createCircularCircle(canvas, cfg){
    var cb = circleBrush.create(canvas);
    cb.width = (cfg.brushWidth < 10 ? 10 : cfg.brushWidth);

    var outline = circleOutlinePts(cb, cfg.x, cfg.y, cfg.radius),
        outlineLength = outline.length;

    cb.color = cfg.color || "#000000";

    for (var i = 0; i < outlineLength; i++){
      cb.addPoint(outline[i]);
    }

    cb.onMouseUp();
  }

  return {
    create: function(canvas, cfg){
      if (!cfg.x || !cfg.y || !cfg.radius){
        throw new Error("Required params not provided");
      }

      cfg.brushWidth = cfg.brushWidth || 10;

      return createCircularCircle(canvas, cfg);
    }
  };
});