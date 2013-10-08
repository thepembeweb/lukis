define(function(require){

  var fabric = require("fabric"),
      getRandomInt = fabric.util.getRandomInt;

  function createSprayChunk( pointer, width, brush ) {
    var sprayChunkPoints = [ ];

    var x, y, radius = width / 2, _width;

    for (var i = 0; i < brush.density; i++) {

      x = fabric.util.getRandomInt(pointer.x - radius, pointer.x + radius);
      y = fabric.util.getRandomInt(pointer.y - radius, pointer.y + radius);

      if (brush.dotWidthVariance) {
        _width = fabric.util.getRandomInt(
          // bottom clamp width to 1
          Math.max(1, brush.dotWidth - brush.dotWidthVariance),
          brush.dotWidth + brush.dotWidthVariance);
      }
      else {
        _width = brush.dotWidth;
      }

      sprayChunkPoints.push({ x: x, y: y, width: _width });
    }

    return sprayChunkPoints;
  }

  function SprayBrush(canvas, cfg){
    this.canvas = canvas;

    cfg = cfg || {};

    cfg.fillColor = cfg.fillColor || "#000000";
    cfg.strokeColor = cfg.strokeColor || "#000000";

    cfg.width = cfg.width || 10;
    cfg.offset = cfg.offset || 0;

    this.cfg = cfg;

    this.initBrush();
  }

  SprayBrush.prototype.initBrush = function() {
    this.brush = new fabric.SprayBrush(this.canvas);
  };

  SprayBrush.prototype.getBrush = function() {
    return this.brush;
  };

  SprayBrush.prototype.set = function(key, value) {
    this.cfg[key] = value;
  };

  SprayBrush.prototype.get = function(key) {
    return this.cfg[key];
  };

  SprayBrush.prototype.drawAtPoints = function( points ) {
    var originalRenderOnAddition = this.canvas.renderOnAddition;
    this.canvas.renderOnAddition = false;

    var sprays = [],
        point,
        sprayChunk;

    for (var i = 0, len = points.length; i < len; i++) {
      sprayChunk = createSprayChunk(points[i], this.cfg.width, this.brush);

      for (var j = 0, jlen = sprayChunk.length; j < jlen; j++) {
        
        sprays.push(new fabric.Rect({
          width: sprayChunk[j].width,
          height: sprayChunk[j].width,
          left: sprayChunk[j].x + 1,
          top: sprayChunk[j].y + 1,
          fill: this.cfg.fillColor
        }));
      }
    }

    if (this.optimizeOverlapping) {
      sprays = this._getOptimizedRects(sprays);
    }

    var group = new fabric.Group(sprays);

    this.canvas.add(group);
    this.canvas.fire('path:created', { path: group });

    this.canvas.clearContext(this.canvas.contextTop);
    this.canvas.renderOnAddition = originalRenderOnAddition;
    this.canvas.renderAll();
  };

  return SprayBrush;

});