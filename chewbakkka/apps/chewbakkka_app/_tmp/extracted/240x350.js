(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 350,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"./Du1.jpg", id:"Du1"},
		{src:"./Fin.jpg", id:"Fin"},
		{src:"./Pl1.jpg", id:"Pl1"},
		{src:"./Pl2.jpg", id:"Pl2"},
		{src:"./Plate1.jpg", id:"Plate1"},
		{src:"./Plate2.jpg", id:"Plate2"}
	]
};



// symbols:



(lib.Du1 = function() {
	this.initialize(img.Du1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,122);


(lib.Fin = function() {
	this.initialize(img.Fin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,461);


(lib.Pl1 = function() {
	this.initialize(img.Pl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,399);


(lib.Pl2 = function() {
	this.initialize(img.Pl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,263);


(lib.Plate1 = function() {
	this.initialize(img.Plate1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,192);


(lib.Plate2 = function() {
	this.initialize(img.Plate2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,192);


(lib.Symbol35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(237,242,245,0)","rgba(255,255,255,0.8)"],[0,1],-122.9,0,123,0).s().p("EgTMAstMAAAhZaMAmZAAAMAAABZag");
	this.shape.setTransform(123,286.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246,572.4);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EDF2F5","#E8E7EC"],[0.51,1],0,0,0,0,0,298.5).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EDF2F5","#E8E7EC"],[0.51,1],6,-82.5,0,6,-82.5,179.8).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Symbol31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(42,125,188,0.6)").s().p("AzvTxMAAAghfMAnfgGCMAAAAnhg");
	this.shape.setTransform(45,45,0.356,0.356);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90.1,90.1);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEF8F9").s().p("A3bEXIAAotMAu2AAAIAAItg");
	this.shape.setTransform(150,607.6,1,1.286);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEF8F9").s().p("EgXbAspMAAAhTAMAu2gGSMAAABZSg");
	this.shape_1.setTransform(150,285.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,643.6);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007EB9").s().p("AgKCjIAshRQhAhbgNhjIA+AAQALBNAhBFIABAAQAchKAJhIIBAAAQgLBZg2BlIgsBRgAkHCjIAAkGQAmgOAvAAQA1AAAeAaQAfAbAAAwQAAAtgbAcQgcAcgyAAQgUAAgNgEIAABOgAjKhMIAACBQAJADAMAAQA2AAAAhDQAAgjgMgQQgNgSgbAAQgNAAgKAEgAKlA9QgbgcAAgsQAAgtAbgcQAcgdAxAAQAwAAAcAdQAaAcAAAtQAAAsgaAcQgcAdgwAAQgxAAgcgdgALIgMQAABBAqAAQAUAAALgTQAKgRgBgdQABgegKgSQgLgTgUAAQgqAAAABDgAnWBMIALgfQAaALAcAAQAsAAABgaQAAgdg5AAIgdAAIAAgdIAbAAQA3AAAAgdQAAgLgLgGQgKgGgUAAQgbAAgZALIgLgdQAhgPApAAQAqAAAWANQAYANAAAZQAAAPgMAMQgMAMgVAEIAAABQAYAFANANQAPALAAATQAAAcgZAQQgaAQgsAAQgrAAghgOgAsBBLQgcgQAAgfQAAghAogRQAegNA+gGIAAgJQAAgcgrAAQggAAgeALIgNggQAogOAsAAQBcAAAABIIAAB1QgjAOg1AAQgxAAgZgPgArOgFQgTAIgBAXQABAgAsAAQASAAAKgEIAAhGQgmAEgPAHgAOQBQQgLgKAAgNQAAgNALgJQALgJAOAAQAPAAAKAJQALAJAAANQAAANgLAKQgKAJgPAAQgOAAgLgJgAIoBVIAAhTIhCAAIAABTIg9AAIAAjBIA9AAIAABOIBCAAIAAhOIA9AAIAADBgAFABVIAAhHQgWAJgZAAQhPAAABhGIAAg9IA9AAIAAA9QAAAkAiAAQAQAAAOgHIAAhaIA9AAIAADBgAucBVIAAieIgxAAIAAgjICfAAIAAAjIgxAAIAACegAOSgDIgOifIBKAAIgNCfg");
	this.shape.setTransform(148,16.4,0.943,0.943);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007EB9").s().p("AEKCXIgCg1IiPAAIgCA1IgqAAIgEhQQATgPAJgZQAHgTAEggIAIhMICbAAIAQCfIAVAIIgFBQgACpgVQgDAbgFARQgGAWgLATIBYAAIgLh/IgwAAgAJDBJQgbgbAAguQAAgsAbgbQAcgdAxAAQAwAAAcAdQAbAbAAAsQAAAugbAbQgcAdgwAAQgxAAgcgdgAJnAAQAAAeAJARQALATAVAAQAVAAAKgTQAKgSAAgdQAAgegKgRQgKgTgVAAQgpAAAABCgAl2BZIAAivQAlgOAwAAQAyAAAaAOQAbANAAAaQAAARgNAMQgMALgSAEIAAAAQAUADAOAMQAPANAAATQAAA6hrAAQgxAAgmgNgAk7BGQALAEARAAQAuAAAAggQAAgigyAAIgYAAgAk7hFIAAA4IAXAAQAuAAAAgfQAAgdgqAAQgPAAgMAEgAHZBiIgSgrQgPgkgjgTIgBAAIAABiIg9AAIAAjCIA9AAIAABaIABAAIBFhaIBBAAIhMBZQAiAUARAgIAbA1gAgIBiIAAhoIACgbIgBAAIhSCDIg3AAIAAjCIA2AAIgBB6IAAAAQAFgMAIgLIA/hjIA7AAIAADCgAr2BiIAAj4IA9AAIAADTIBNAAIAAjTIA+AAIAADTIBNAAIAAjTIA9AAIAAD4g");
	this.shape_1.setTransform(-28.7,15.2,0.943,0.943);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.3,1,340.3,30.9);


(lib.Symbol23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007EB9").s().p("AgnAkIAAhHQAPgGAUAAQApAAAAAWQAAAHgGAFQgEAFgIABQAVADAAAQQAAAYgrAAQgUAAgQgGgAgPAcQAGACAGAAQARAAAAgNQABgOgUAAIgKAAgAgPgcIAAAXIAKAAQARAAAAgNQABgMgRAAg");
	this.shape.setTransform(38.6,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007EB9").s().p("AgmAQQAAgOARgGQAMgFAXgCIAAgEQAAgMgPAAQgOAAgMAFIgFgNQAQgGAQAAQAnAAAAAeIAAAvQgOAGgXAAQgoAAAAgagAgFACQgJAEABAKQAAANAQAAQAGAAAFgCIAAgcQgOABgFACg");
	this.shape_1.setTransform(28.7,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007EB9").s().p("AgoA5IAAhrQAPgHAVAAQAUABANAKQAMALAAAVQAAARgLALQgMANgTAAQgHAAgGgCIAAAggAgOgpIAAA1IAJAAQAUAAAAgaQAAgcgTAAQgHAAgDABg");
	this.shape_2.setTransform(19.5,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007EB9").s().p("AgLAoIAAhBIgVAAIAAgOIBBAAIAAAOIgVAAIAABBg");
	this.shape_3.setTransform(10.6,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007EB9").s().p("AgUAeQgLgMAAgSQAAgSALgLQAKgMARAAQAPAAAJAGIgFAMQgGgDgHAAQgRAAAAAaQAAALAEAHQAEAIAJAAQAIAAAFgDIAGANQgLAGgOAAQgQAAgLgMg");
	this.shape_4.setTransform(3.2,4.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,11.6);


(lib.Symbol22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007EB9").s().p("AAPApIAAgkQgLADgEALIgMAWIgcAAIAQgXQAGgKAHgEIAAAAQgZgDAAgQQAAgZAqAAQATAAAQAGIAABLgAgLgOQAAAOASAAIAIAAIAAgbQgEgCgFAAQgRAAAAAPg");
	this.shape.setTransform(104.7,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007EB9").s().p("AANAoIAAgiIgZAAIAAAiIgaAAIAAhPIAaAAIAAAgIAZAAIAAggIAaAAIAABPg");
	this.shape_1.setTransform(95.3,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007EB9").s().p("AANAoIAAgiIgZAAIAAAiIgaAAIAAhPIAaAAIAAAgIAZAAIAAggIAaAAIAABPg");
	this.shape_2.setTransform(85.7,4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007EB9").s().p("AgmARQAAgPARgGQALgFAZgCIAAgEQAAgMgQAAQgOAAgMAFIgFgNQAQgGAQAAQAnAAAAAeIAAAvQgOAGgXAAQgoAAAAgZgAgFACQgJAEAAAKQABANAQAAQAFAAAHgCIAAgcQgPABgFACg");
	this.shape_3.setTransform(76,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007EB9").s().p("AgnAkIAAhHQAQgGATAAQAqAAgBAWQAAAOgSAEQAVADAAAQQAAAYgrAAQgUAAgQgGgAgOAcQAEACAHAAQASAAAAgNQAAgOgUAAIgJAAgAgOgcIAAAXIAJAAQASAAgBgNQAAgMgPAAQgHAAgEACg");
	this.shape_4.setTransform(66.8,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007EB9").s().p("AgcA4IASghQgagkgGgqIAbAAQADAfANAdIAAAAQALgeAFgeIAaAAQgFAmgWAoIgQAhg");
	this.shape_5.setTransform(57,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007EB9").s().p("AgLAoIAAhBIgVAAIAAgOIBBAAIAAAOIgVAAIAABBg");
	this.shape_6.setTransform(48.3,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007EB9").s().p("AgfAeQgLgMAAgSQAAgSALgLQAMgMATAAQATAAAMAMQAMALAAASQAAASgMAMQgLAMgUAAQgTAAgMgMgAgQAAQAAAbAQAAQARAAAAgbQAAgbgRAAQgQAAAAAbg");
	this.shape_7.setTransform(39.9,4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007EB9").s().p("AgbAoIAAhPIA2AAIAAAOIgcAAIAABBg");
	this.shape_8.setTransform(32.1,4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007EB9").s().p("AARAoIAAg1IAAAAIgFAKIgbArIgXAAIAAhPIAWAAIAAAxIAAAAIAFgJIAZgoIAZAAIAABPg");
	this.shape_9.setTransform(23.4,4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007EB9").s().p("AgoA5IAAhsQAPgFAVgBQAUAAANAMQAMAKAAAUQAAATgLALQgMAMgTAAQgHgBgGgBIAAAggAgOgpIAAA0IAJABQAUAAAAgaQAAgcgTAAQgHAAgDABg");
	this.shape_10.setTransform(13.8,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#007EB9").s().p("AANAoIAAhBIgZAAIAABBIgaAAIAAhPIBNAAIAABPg");
	this.shape_11.setTransform(3.9,4.3);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108.8,11.6);


(lib.Symbol20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007EB9").s().p("AARAoIAAg1IAAAAIgGAKIgbArIgWAAIAAhPIAWAAIAAAxIAAAAIAFgJIAYgoIAaAAIAABPg");
	this.shape.setTransform(134.7,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007EB9").s().p("AAgAoIgGguIAAgJIAAAAIgDAJIgSAuIgNAAIgUg3IgGA3IgVAAIALhPIAaAAIARAsIABAKIAAAAIACgKIAQgsIAbAAIALBPg");
	this.shape_1.setTransform(123.6,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007EB9").s().p("AgmAQQAAgOAQgGQANgFAXgDIAAgDQAAgMgPAAQgMAAgNAFIgGgOQARgFAQAAQAmAAAAAdIAAAwQgOAGgXAAQgoAAAAgagAgFACQgJAEAAAJQAAAOARAAQAHAAAEgCIAAgcQgOABgFACg");
	this.shape_2.setTransform(112.6,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007EB9").s().p("AgoA5IAAhsQAPgFAVAAQAUAAAMAKQANALAAAUQAAASgLAMQgMALgSAAQgIAAgHgBIAAAggAgPgpIAAA0IAJABQAVAAAAgaQAAgdgUAAQgFAAgFACg");
	this.shape_3.setTransform(103.3,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007EB9").s().p("AgaAoIAAhPIA2AAIAAAPIgdAAIAABAg");
	this.shape_4.setTransform(95,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007EB9").s().p("AgeAeQgMgLAAgTQAAgRAMgMQALgMATAAQAUAAAMAMQALAMAAARQAAATgLALQgMAMgUAAQgSAAgMgMgAgQAAQAAAbAQAAQARAAAAgbQAAgbgRAAQgQAAAAAbg");
	this.shape_5.setTransform(86.3,7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007EB9").s().p("AgoA5IAAhsQAPgFAVAAQAUAAAMAKQANALAAAUQAAASgLAMQgMALgSAAQgIAAgHgBIAAAggAgPgpIAAA0IAJABQAVAAAAgaQAAgdgUAAQgGAAgEACg");
	this.shape_6.setTransform(76.7,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007EB9").s().p("AANAoIAAhBIgZAAIAABBIgaAAIAAhPIBNAAIAABPg");
	this.shape_7.setTransform(66.8,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007EB9").s().p("AgLA5IAAhPIAXAAIAABPgAgJglQgDgEAAgEQAAgFADgDQAFgDAEAAQAFAAAEADQAFADAAAFQAAAEgFAEQgEADgFAAQgEAAgFgDg");
	this.shape_8.setTransform(55.7,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007EB9").s().p("AANAoIAAgiIgZAAIAAAiIgaAAIAAhPIAaAAIAAAhIAZAAIAAghIAaAAIAABPg");
	this.shape_9.setTransform(48.6,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007EB9").s().p("AANAoIAAgdQgKADgIAAQggAAAAgbIAAgaIAZAAIAAAaQAAANANAAQAGAAAGgBIAAgmIAZAAIAABPg");
	this.shape_10.setTransform(38.9,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#007EB9").s().p("AAQAoIABg1IgBAAIgFAKIgbArIgWAAIAAhPIAWAAIgBAyIABAAIAFgKIAZgoIAZAAIAABPg");
	this.shape_11.setTransform(29.4,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#007EB9").s().p("AgLAoIAAhAIgVAAIAAgPIBBAAIAAAPIgVAAIAABAg");
	this.shape_12.setTransform(20.7,7.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#007EB9").s().p("AgmARQAAgPAQgGQANgFAXgCIAAgEQAAgMgPAAQgNAAgNAFIgFgNQARgGAQAAQAmAAAAAdIAAAxQgPAFgWAAQgoAAAAgZgAgFACQgIAEgBAKQAAANARAAQAHAAAEgCIAAgbQgOAAgFACg");
	this.shape_13.setTransform(12.3,7.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#007EB9").s().p("AAgAoIgGgtIAAgKIAAAAIgVA3IgNAAIgRguIgDgJIAAAAIAAAJIgGAuIgVAAIALhPIAaAAIAQAsIACAKIAAAAIACgKIAQgsIAbAAIALBPg");
	this.shape_14.setTransform(1.5,7.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#007EB9").s().p("AgfAeQgKgMgBgSQABgSAKgLQAMgMATAAQAUAAALAMQAMALAAASQAAASgMAMQgLAMgUAAQgTAAgMgMgAgQAAQABAbAPAAQAQAAABgbQgBgbgQAAQgPAAgBAbg");
	this.shape_15.setTransform(-9.5,7.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#007EB9").s().p("AgLAoIAAhAIgVAAIAAgPIBBAAIAAAPIgVAAIAABAg");
	this.shape_16.setTransform(-18,7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#007EB9").s().p("AgnAlIAAhIQAPgGAUAAQApAAAAAWQAAAHgGAFQgEAFgIABIAAABQAJAAAGAEQAGAGAAAIQAAAYgrAAQgUAAgQgFgAgPAcIAMACQARAAABgNQAAgPgUAAIgKAAgAgPgcIAAAXIAKAAQARAAAAgMQABgNgRAAg");
	this.shape_17.setTransform(-26.2,7.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#007EB9").s().p("AgmARQAAgYA0gEIAAgEQAAgMgPAAQgNAAgNAFIgFgNQAQgGARAAQAmAAAAAdIAAAxQgPAFgWAAQgoAAAAgZgAgFACQgIAEAAAKQAAANAQAAQAIAAADgCIAAgbQgOAAgFACg");
	this.shape_18.setTransform(-36,7.5);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,0,178.7,14.8);


(lib.Symbol19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJA+QgEgFAAgFQAAgFAEgFQAEgDAFgBQAGABAEADQAEAFAAAFQAAAFgEAFQgEADgGAAQgFAAgEgDgAgHAUIgFhUIAaAAIgFBUg");
	this.shape.setTransform(85.4,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAmQgOgPABgXQgBgXAOgOQAPgPAYABQAZgBAOAPQAOAOABAXQgBAXgOAPQgOAPgZAAQgYAAgPgPgAgUAAQAAAiAUgBQAVABAAgiQAAgigVAAQgUAAAAAig");
	this.shape_1.setTransform(76.1,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBKIglg3IAAA3IggAAIAAiTIAgAAIAABZIAjgqIAhAAIgoAqIAtA6g");
	this.shape_2.setTransform(65,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAmQgPgNAAgZQAAgYAOgOQAPgNAXAAQAzAAAAAzIhHAKQADAXAaAAQASAAAOgGIAHATQgRAGgaABQgaAAgQgPgAgPgbQgGAIAAAOIAAACIAqgGQAAgagVAAQgJAAgGAIg");
	this.shape_3.setTransform(52.4,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A8IAAh2QAUgIAaAAQAbAAAPAKQAOAJAAAQQAAAMgIAIQgIAHgLACIAAAAQANACAJAHQAJAJAAANQAAAmg5AAQgdAAgUgHgAgUAvQAFACAKAAQAaAAAAgVQgBgYgfAAIgJAAgAgUgvIAAAnIAJAAQAPAAAHgFQAGgFAAgLQAAgUgWAAQgKAAgFACg");
	this.shape_4.setTransform(40.1,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBAIgBgbIhLAAIgBAbIgRAAIgBglQAKgKAEgOQAEgIACgTIAFgnIBGAAIAIBWIALAEIgDAlgAgOgYQgDAegLARIA0AAIgHhJIgcAAg");
	this.shape_5.setTransform(21.6,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBGIAAhkIAVAAIAABkgAgIgyQgEgEAAgEQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAEgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_6.setTransform(12.8,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAuIAAhbQARgGAXAAQAwAAAAAbQgBAIgGAGQgHAHgKABQAMACAHAFQAIAHAAALQAAAegyAAQgWgBgTgGgAgXAmQALADAIAAQAbAAAAgTQAAgUgeAAIgQAAgAgXgmIAAAgIAQAAQAbAAgBgRQAAgRgYgBQgJABgJACg");
	this.shape_7.setTransform(4.7,9.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86.9,17.6);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBFIAAhMIAAAAIgwBMIgVAAIAAhjIAVAAIgBBIIAthIIAYAAIAABjgAgSgwQgHgHAAgMIAKgBQABAOAOAAQAPAAACgOIAKABQAAAMgIAHQgHAHgMAAQgKAAgIgHg");
	this.shape.setTransform(26.8,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBHIAAhkIAWAAIAABkgAgIgyQgEgDAAgFQAAgFAEgDQAEgDAEgBQAFABAEADQAEADAAAFQAAAFgEADQgEADgFABQgEgBgEgDg");
	this.shape_1.setTransform(18.4,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAuIAAhbQASgHAWAAQAVAAANAHQAOAHAAANQAAAJgHAGQgHAGgKACIAAABQALABAIAFQAIAHAAALQABAegzAAQgXAAgSgHgAgXAmQAJADAKAAQAaAAAAgTQABgUgeAAIgQAAgAgXgmIAAAgIAQAAQAaAAAAgRQAAgRgYAAQgJAAgJACg");
	this.shape_2.setTransform(10.4,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAlQgNgOAAgXQAAgWANgOQAOgQAWAAQAXAAAOAQQANAOAAAWQAAAXgNAOQgOAQgXAAQgWAAgOgQgAgZAAQAAAmAZAAQAaAAAAgmQAAgmgaAAQgZAAAAAmg");
	this.shape_3.setTransform(-1.5,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUAyIAAgtIgoAAIAAAtIgXAAIAAhjIAXAAIAAAqIAoAAIAAgqIAZAAIAABjg");
	this.shape_4.setTransform(-13.2,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBHIAXgsQghgugJgzIAZAAQAGApAWAnIAAAAQARgoAGgoIAZAAQgHAxgcAwIgVAsg");
	this.shape_5.setTransform(-30.2,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBHIAAhlIAVAAIAABlgAgIgyQgEgEAAgEQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAEgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_6.setTransform(164.6,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBeIAAgrQgIAFgIAAQgUgBgMgPQgKgNAAgZQAAgVAKgOQAMgPAUAAQAKAAAGAEIAAgxIAUAAIAAAxQAIgEAJAAQATAAAMAPQALAOAAAVQAAAZgLANQgMAPgTABQgHAAgKgFIAAArgAAKggIAABHQAGADAGAAQANAAAFgMQAHgKAAgSQAAglgZAAQgHAAgFADgAgogYQgGALAAAPQAAASAGAKQAGAMAMAAQAIAAAEgDIAAhHQgEgDgIAAQgMAAgGALg");
	this.shape_7.setTransform(154.3,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsAWQAAgTAUgHQAQgIAfgCIAAgGQAAgSgXAAQgQAAgPAGIgGgNQATgHATAAQAsAAAAAjIAAA/QgRAHgZAAQgvAAAAgfgAgJABQgMAGAAAOQAAATAZAAQALAAAIgDIAAgpQgXADgJACg");
	this.shape_8.setTransform(140.6,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHAzIAAhlIAWAAIAABWIAnAAIAAhWIAVAAIAABWIAnAAIAAhWIAWAAIAABlg");
	this.shape_9.setTransform(126.7,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZBGIAAhNIAAAAQgEAHgDADIgpBDIgVAAIAAhlIAVAAIgBBJIAthJIAYAAIAABlgAgSgxQgHgGAAgMIAKgCQABAPAOABQAPgBACgPIAKACQAAAMgIAGQgHAIgMgBQgKABgIgIg");
	this.shape_10.setTransform(106.8,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBHIAAhlIAWAAIAABlgAgIgyQgEgEAAgEQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAEgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_11.setTransform(98.4,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguAuIAAhbQATgHAWAAQAvAAAAAbQABAJgHAGQgGAGgLACIAAABQAMABAHAFQAJAHAAALQgBAegyAAQgXAAgTgHgAgXAmQAIADALAAQAbAAgBgTQABgUgeAAIgQAAgAgXgmIAAAgIAQAAQAaAAAAgRQAAgSgYAAQgKAAgIADg");
	this.shape_12.setTransform(90.4,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAlQgNgOAAgXQAAgWANgPQAOgPAWAAQAYAAANAPQANAPAAAWQAAAXgNAOQgOAQgXAAQgWAAgOgQgAgZAAQAAAmAZAAQAaAAAAgmQAAgmgaAAQgZAAAAAmg");
	this.shape_13.setTransform(78.4,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZAzIgZgnIgaAnIgZAAIAogzIgkgyIAaAAIAWAjIAAAAIAYgjIAXAAIglAxIApA0g");
	this.shape_14.setTransform(67.5,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfBHIAYgrQgjgwgIgyIAZAAQAHAqAUAmIABAAQASgoAFgoIAZAAQgHAvgcAzIgVArg");
	this.shape_15.setTransform(56.2,11.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnBAIgBgbIhLAAIgCAbIgPAAIgDglQALgKAEgNQAEgJACgTIAEgnIBGAAIAJBWIAKAEIgCAlgAgOgYQgDAegLARIA1AAIgHhJIgdAAg");
	this.shape_16.setTransform(44.7,11.1);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.4,0,201.4,18.9);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3C2C9").s().p("AgiA5IAAhrQANgFAQgBQASABALAKQAKALAAATQABATgLALQgMAMgRAAQgHgBgJgCIAAAhgAgVgtIAAA+QAGACAIAAQANgBAIgIQAIgKAAgOQAAghgcgBQgIABgHACg");
	this.shape.setTransform(156.3,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3C2C9").s().p("AggASQAAgPAQgGQANgFAXgCIAAgGQAAgQgUgBQgMAAgLAGIgDgIQANgFANgBQAhAAAAAaIAAAzQgMAGgTAAQgiAAAAgYgAgIAAQgLAFAAANQAAAQAVAAQAMAAAGgDIAAgjQgUACgIACg");
	this.shape_1.setTransform(147.3,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3C2C9").s().p("AAWAnIgWghIgXAhIgOAAIAggnIgcgnIAOAAIATAfIAVgfIANAAIgcAmIAgAog");
	this.shape_2.setTransform(139.2,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3C2C9").s().p("AgVA4IATgjQgbglgIgnIAOAAQAGAiATAgIABAAQAQgiAFggIAOAAQgHAngVAlIgRAjg");
	this.shape_3.setTransform(130.6,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3C2C9").s().p("AASAnIgLgSQgHgPgTgGIAAAnIgNAAIAAhOIANAAIAAAmIAkgmIAQAAIgmAkQAOAGAKAPIAOAVg");
	this.shape_4.setTransform(122.7,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3C2C9").s().p("AAWA2IAAhDIAAAAIgGAKIgkA5IgMAAIAAhOIALAAIAABAIAAAAIAGgKIAjg2IANAAIAABOgAgMgmQgGgFAAgJIAGgBQACAMAKAAQAMAAABgMIAGABQAAAJgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_5.setTransform(109.4,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3C2C9").s().p("AAWAnIAAhCIgGAKIgkA4IgMAAIAAhOIALAAIAABBIAFgKIAjg3IAOAAIAABOg");
	this.shape_6.setTransform(100.5,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3C2C9").s().p("AATAnIAAglIglAAIAAAlIgNAAIAAhOIANAAIAAAjIAlAAIAAgjIANAAIAABOg");
	this.shape_7.setTransform(91.7,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3C2C9").s().p("AATAnIAAggQgJAFgKAAQgfAAAAgbIAAgYIAOAAIAAAYQgBATATAAQAKAAAIgEIAAgnIAMAAIAABOg");
	this.shape_8.setTransform(83.1,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3C2C9").s().p("AAWAnIAAhCIgGAKIgkA4IgMAAIAAhOIALAAIAABBIAFgKIAjg3IAOAAIAABOg");
	this.shape_9.setTransform(74.5,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3C2C9").s().p("AgFAnIAAhGIgYAAIAAgIIA7AAIAAAIIgYAAIAABGg");
	this.shape_10.setTransform(66.6,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3C2C9").s().p("AggASQAAgPAQgGQANgFAXgCIAAgGQAAgQgUgBQgLAAgMAGIgDgIQANgFANgBQAhAAAAAaIAAAzQgMAGgTAAQgiAAAAgYgAgIAAQgLAFAAANQAAAQAVAAQAMAAAGgDIAAgjQgUACgIACg");
	this.shape_11.setTransform(59,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3C2C9").s().p("AAkAnIgJhDIgCAKIgWA5IgGAAIgYhDIAAAAIgJBDIgLAAIAMhOIANAAIAWBCIAXhCIANAAIAMBOg");
	this.shape_12.setTransform(49.3,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3C2C9").s().p("AgbAdQgJgLAAgSQAAgRAJgLQALgMAQgBQARABAKAMQAKALAAARQAAASgKALQgKANgRAAQgQAAgLgNgAgSgXQgFAKAAANQAAAOAFAJQAHAKALAAQAYAAAAghQAAghgYAAQgLAAgHAKg");
	this.shape_13.setTransform(39.3,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3C2C9").s().p("AgFAnIAAhGIgYAAIAAgIIA7AAIAAAIIgYAAIAABGg");
	this.shape_14.setTransform(31.6,8.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3C2C9").s().p("AghAkIAAhHQANgFAQgBQAPABAKAFQAJAGAAAKQAAAHgEAFQgGAEgJACIAAABQAJAAAHAEQAHAFAAAJQAAAYglAAQgQAAgOgGgAgVAfQALAEAHAAQAYgBAAgPQAAgSgbgBIgPAAgAgVgfIAAAbIAPAAQAYAAAAgPQAAgPgVABQgJAAgJACg");
	this.shape_15.setTransform(24.2,8.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3C2C9").s().p("AggASQAAgPAQgGQANgFAXgCIAAgGQAAgQgUgBQgMAAgLAGIgDgIQANgFANgBQAhAAAAAaIAAAzQgMAGgTAAQghAAgBgYgAgHAAQgMAFAAANQAAAQAVAAQAMAAAGgDIAAgjQgUACgHACg");
	this.shape_16.setTransform(15.3,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3C2C9").s().p("AAEASQAAgDACgCQADgDAEAAQAEAAADADQACACAAADQAAAJgJAAQgJAAAAgJgAgVASQAAgDACgCQADgDAEAAQAEAAADADQACACAAADQAAAJgJAAQgJAAAAgJgAgEAHQgDgCAAgEQAAgBADgBQACgDACAAQADAAACADQACABAAABQAAAEgCACQgCACgDAAQgCAAgCgCgAAMgCQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAGgKAAQgJAAAAgGgAgegCQAAgEADgDQADgCAEAAQADAAADACQADADAAAEQAAAGgJAAQgKAAAAgGgAgFgLQgDgCAAgEQAAgJAIAAQAEAAACACQADAEAAADQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_17.setTransform(3.1,2.8);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,159.8,16.1);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgWAMgOQANgQAVAAQAWAAANAQQAMAOAAAWQAAAXgMAOQgNAQgWAAQgVAAgNgQgAgWgdQgIAMAAARQAAASAIALQAIANAOAAQAPAAAIgNQAIgLAAgSQAAgRgIgMQgIgNgPAAQgOAAgIANg");
	this.shape.setTransform(143,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXBJIgxg4IAAAAIAAA4IgQAAIAAiSIAQAAIAABZIAAAAIAugqIASAAIgwAqIA1A5g");
	this.shape_1.setTransform(133.1,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAoQgOgOAAgaQAAgYANgOQANgOAUAAQAtAAAAAyIhMAIQACARALAKQAKAJAPAAQAQAAANgGIAFAKQgPAHgVAAQgXAAgOgNgAgVggQgKALAAAUIAAAAIA9gIQABghgfAAQgMAAgJAKg");
	this.shape_2.setTransform(121.6,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguA8IAAh3QAPgHAYAAQAWAAANAJQANAJAAAPQAAANgJAIQgIAIgMABIAAABQAOACAJAGQAMAJAAAOQAAATgQAKQgOAJgWAAQgYAAgRgHgAgdA1QAJAEAOAAQAPAAAJgHQALgHAAgNQAAgQgLgHQgMgHgXAAIgMAAgAgdg1IAAAvIAMAAQAVAAALgHQAJgGAAgNQAAgYgfAAQgOAAgIADg");
	this.shape_3.setTransform(110.2,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbAzIAAgwQgUADgJAQIgVAdIgTAAIAZgfQAHgKAKgGIAAAAQgngBAAgZQAAgNAOgIQAMgHAUAAQATgBARAIIAABegAgPglQgIAGAAAKQABAVAgAAIARgBIAAgmQgJgDgLAAQgNAAgJAFg");
	this.shape_4.setTransform(92.7,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHBFIAAhjIAOAAIAABjgAgGg0QgDgDAAgEQAAgEADgCQADgDADAAQADAAAEADQADADAAADQAAAEgDADQgEACgDAAQgDAAgDgCg");
	this.shape_5.setTransform(85.4,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAyIAAhjIA7AAIAAAKIgrAAIAABZg");
	this.shape_6.setTransform(79.4,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgWAMgOQANgQAVAAQAWAAANAQQAMAOAAAWQAAAXgMAOQgNAQgWAAQgVAAgNgQgAgWgdQgIAMAAARQAAASAIALQAIANAOAAQAPAAAIgNQAIgLgBgSQABgRgIgMQgIgNgPAAQgOAAgIANg");
	this.shape_7.setTransform(69.2,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxAoQALgIAGgNQADgKABgPIAFgsIA/AAIAKBjIgQAAIgJhZIgiAAIgDAiQgCAUgGAMQgHAQgSAJg");
	this.shape_8.setTransform(57.3,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAlQgMgOAAgXQAAgWAMgOQANgQAVAAQAWAAANAQQAMAOAAAWQAAAXgMAOQgNAQgWAAQgVAAgNgQgAgWgdQgIAMAAARQAAASAIALQAIANAOAAQAPAAAIgNQAIgLAAgSQAAgRgIgMQgIgNgPAAQgOAAgIANg");
	this.shape_9.setTransform(46.4,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYAyIAAgvIgvAAIAAAvIgQAAIAAhjIAQAAIAAAsIAvAAIAAgsIARAAIAABjg");
	this.shape_10.setTransform(35.2,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdAyIgdgqIAAAAIgdAqIgSAAIAogzIgkgwIATAAIAYAmIAcgmIAQAAIgkAvIAoA0g");
	this.shape_11.setTransform(24.4,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAoQgPgOAAgaQAAgYAOgOQANgOATAAQAtAAAAAyIhMAIQADAkAjAAQAPAAAPgGIAEAKQgPAHgVAAQgWAAgOgNgAgVggQgJALAAAUIAAAAIA8gIQAAghgeAAQgMAAgJAKg");
	this.shape_12.setTransform(13.9,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHBAIAAh1IgjAAIAAgLIBWAAIAAALIgkAAIAAB1g");
	this.shape_13.setTransform(4.4,8.3);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147.8,15.1);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuPA3Icgj/IAACSI8gD/g");
	this.shape.setTransform(45.3,54.5,0.402,0.402);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AisC0QhGhCAAhvQAAhvBEhDQBEhDBvAAQBqAABCBDQBCBCAABpQAAB3hMBEQhEA8hkAAQhpAAhCg/gAhHheQgVAlAAA5QAAA9AYAmQAaAoArAAQAqAAAZgmQAZgmAAg/QAAg5gVgmQgZgsguAAQgvAAgZAtg");
	this.shape_1.setTransform(74.6,34.7,0.402,0.402);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AioD6QhFg+gEhqIAAmHICVAAIAACWQAvgQAyAAQBrAABBBDQBCBCAABnQAAB5hNBEQhDA8hkAAQhlAAhCg8gAhDgiQgVAigEAzIAAAfQAEA4AXAhQAaAjAoAAQAqAAAZgmQAZgmAAhAQABg6gWgkQgZgsguAAQgrAAgZAmg");
	this.shape_2.setTransform(18.4,32,0.402,0.402);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AibCzQhBhAAAhtQAAhiA5hFQBBhQBvgBQBpABA4BIQAvBAAABgQAAAegFAZIkqAAQADArAnAZQAjAVA1AAQBCAAA+gTIATBiQhHAchhAAQh0ABhChAgABWgzQAAgjgPgZQgWgigtAAQgnAAgYAgQgVAagDAkICpAAIAAAAg");
	this.shape_3.setTransform(37.9,34.7,0.402,0.402);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0EwIiSjYIAADYIiRAAIAApfICRAAIAAFPIB9i/IC8AAIi5DcIDODzg");
	this.shape_4.setTransform(57.5,31.8,0.402,0.402);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(42,125,188,0.6)").s().p("AzvTxMAAAghfMAnfgGCMAAAAnhg");
	this.shape_5.setTransform(45,45,0.356,0.356);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90.1,90.1);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Fin();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,461);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBaQgUgVAAglQAAghAUgWQAXgWAkAAQAmAAAWAWQAVAVAAAiQAAAlgVAVQgWAXgmAAQgkAAgXgXgAgHAgQABA0AeAAQAgAAAAg0QAAgzggAAQgeAAgBAzgAjbBaQgVgVAAglQAAghAVgWQAWgWAmAAQAmAAAWAWQAUAWAAAhQAAAlgUAVQgWAXgmAAQgmAAgWgXgAi/AgQAAA0AgAAQAgAAAAg0QAAgzggAAQggAAAAAzgAl1BTQgYgbAAgsQAAgqAYgcQAageAqAAQAeAAAVALIgMAcQgLgGgSgBQgZAAgNAUQgMATAAAcQAAAeAMASQAOATAYAAQAQAAANgHIAMAfQgVAKgeABQgrAAgZgegAoyBaQgWgVAAglQAAghAWgWQAVgWAmAAQAmAAAXAWQAUAWAAAhQAAAlgUAVQgXAXgmAAQgmAAgVgXgAoWAgQAAA0AfAAQAhAAAAg0QAAgzghAAQgfAAAAAzgAtsA4IAAhiIAwAAIAABjQAAAbAcAAQANAAAKgFIAAh5IAwAAIAACQQgfAKgoABQhMgBAAg4gAPXBcQgQgTgBggIgkAAIAABEIgXAAIAAiPIAXAAIAAA9IAkAAQACgbAQgSQASgSAdAAQAhAAARAVQARASgBAiQABAigRATQgSAWggAAQgfAAgRgUgAPlgEQgKAPAAAZQAAAbAKAQQAMASAWAAQAWAAAMgSQALgQAAgbQAAgZgLgPQgMgSgWAAQgWAAgMASgAJgBeQgWgUAAgmQAAgjAUgSQASgTAfAAQA/AAAABEIhuAOQACAZAPANQAOANAYAAQAZAAATgJIAFAPQgUAJgeAAQgjAAgTgSgAJtgJQgNAOAAAcIAAABIBYgLQAAgugrAAQgTAAgNAOgAqpBBIAAhQIgWAAIAAgbIAWAAIAAghIAwgLIAAAsIAeAAIAAAbIgeAAIAABRQAAAQAUAAIAKgBIAAAbQgKAEgQAAQg0AAAAgvgANMBtIAAhEIhGAAIAABEIgWAAIAAiPIAWAAIAAA9IBGAAIAAg9IAYAAIAACPgAIbBtIgPh6IgBAAIgqB6IgQAAIgrh6IgQB6IgUAAIAWiPIAYAAIApB4IABAAIAqh4IAXAAIAWCPgADwBtIg5hRIgCAAIAABRIgvAAIAAjcIAvAAIAACFIACAAIA3hAIAxAAIg9BAIBFBXgAu0BtIgOgsIhIAAIgOAsIgxAAIBOjBIAwAAIBNDBgAwCApIA4AAIgchYIAAAAgAFSgsQAAgDADgCQADgDAEAAQAJAAAAAIQAAAJgJAAQgKAAAAgJgAE2gsQAAgDADgCQADgDAEAAQAEAAADADQACACABADQAAAJgKAAQgKAAAAgJgAFGg+QAAgHAIAAQAIAAAAAHQAAAJgIgBQgIABAAgJgAFchDQAAgJAJAAQAKAAAAAJQAAAJgKAAQgJAAAAgJgAEuhDQgBgJALAAQAJAAAAAJQAAAJgJAAQgLAAABgJgAFEhTQABgJAJAAQAJAAAAAJQAAAJgJABQgJgBgBgJg");
	this.shape.setTransform(109.8,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,219.6,22.6);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao/KMQkCkCAAltQAAlsECkDQEDkCFsAAQFtAAEDECQECEDAAFsQAAFtkCECQkDEDltAAQlsAAkDkDg");
	mask.setTransform(93.1,91.1);

	// Layer 1
	this.instance = new lib.Plate2();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.7,5.8,176.5,176.5);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AptJvQkBkCAAltQAAlsEBkDQECkBFrAAQFsAAEBEBQECEDAAFsQAAFtkCECQkBEDlsAAQlrAAkCkDg");
	mask.setTransform(97.9,94.2);

	// Layer 1
	this.instance = new lib.Plate1();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.9,6,176,176.4);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Du1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190,122);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax6TKIhcAAQgPAAgCgTIAAibQgDgMAMgFMAAAgidQgIgBAAgOIAAg3QACgNAMAAMAm0AAAQAOAAgBANIAAA8QAAALgHgBMgADAihQAHgCABAHIAACeQABAVgTAAIhhAAIAAASQACAOgNgBMgjQAAAIgCAAQgUAAADgcg");
	mask.setTransform(133.5,131.4);

	// Layer 1
	this.instance = new lib.Pl2();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.8,5.9,251.5,250.9);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxWZkIAAjbImGAAIAAhZIDumyMAAAgiOQgOgJABgOIAAkrQgBgmAegBMAnNAAAQANABABAOMAAAAndIDgFUIAAC3IlBAAIAADuMgjbAANIgEABQgUAAABgWgAv5WdIAABVQAAAJALgCMAgjgAHQAUgDABgOIAAhVQgBgGgJgCMggvAARIgEAAQgIAAACAIg");
	mask.setTransform(150,205.8);

	// Layer 1
	this.instance = new lib.Pl1();

	this.instance.mask = mask;

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(148,145,146,0)","#949192","#949192","rgba(148,145,146,0)"],[0,0.09,0.918,1],0,-189.4,0,189.5).s().p("AgIdmMAAAg7LIARAAMAAAA7Lg");
	this.shape.setTransform(22.9,195.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(148,145,146,0)","#949192","#949192","rgba(148,145,146,0)"],[0,0.09,0.918,1],0,-189.4,0,189.5).s().p("AgIdmMAAAg7LIARAAMAAAA7Lg");
	this.shape_1.setTransform(277.9,195.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(148,145,146,0)","#949192","#949192","rgba(148,145,146,0)"],[0,0.09,0.918,1],-158.2,0,158.3,0).s().p("A4tAJIAAgRMAxbAAAIAAARg");
	this.shape_2.setTransform(150.1,289.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(148,145,146,0)","#949192","#949192","rgba(148,145,146,0)"],[0,0.09,0.918,1],-158.2,0,158.3,0).s().p("A4tAJIAAgRMAxbAAAIAAARg");
	this.shape_3.setTransform(150.1,39.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,6.3,316.5,379);


(lib.shapka = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39A9CE").s().p("AtmAfIAHgEIbGj1IsiG1g");
	this.shape.setTransform(87.2,184.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(65,169,182,0.502)").s().p("AnWlfIABAAIOsC8IutIDg");
	this.shape_1.setTransform(47.1,222.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#41A9B6").s().p("Ar2umIADABIXqOTI3lO4IgIABg");
	this.shape_2.setTransform(75.9,93.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2893CB").s().p("AreAvIJmj0INXEKIjrCBg");
	this.shape_3.setTransform(225.4,87);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3394BE").s().p("ACLgSI3puTMAhQAKcIpnD3ITUCVIvxIrIgBABI7GD3g");
	this.shape_4.setTransform(137.9,93.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F8ECB").s().p("Ah5A0IDoh/IALgGIAACjg");
	this.shape_5.setTransform(287.7,101.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F8FCB").s().p("AmwAnINhlaIAAJhIgLAGg");
	this.shape_6.setTransform(256.6,63.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#498AC2").s().p("ATmEAID1AeIAAFbIznCzgA3YsoIgDgBIAAgCMAu2AAAIAAFEItjFcg");
	this.shape_7.setTransform(150,81.2);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3394BE").s().p("A3aNMIAIgFIgJACIAA9OIADABIgDgBIAAgCMAu2AAAIAAWkIznCzIgBAAIsfG4g");
	this.shape_8.setTransform(150,103.2);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,258.1);


(lib.ClipGroup_1 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3395D6").s().p("ACLC5QgjAAgqggQgmgegYg9QgWA9gnAeQgqAggiAAIgBAAQgaAAgOgSQgKgMAAgRQABgoA0goQArggBEgFQgig1gBgzQABgtAOgZQAHgOAMgIQANgJAMAAQAOAAAMAJQALAIAIAOQAPAaAAAsQgBAzgiA1QBEAFAqAgQA1AoAAAoQAAARgJAMQgOASgaAAgAApBEQATAnAXASQAhAZAXAAQAIAAAEgFQACgCAAgFQABgIgJgNQgLgQgUgPQgagUg1gIgAguA8QgqAHgZATQgUAPgLAQQgJANABAIQAAAFACACQADAFAKAAQAXAAAggZQAZgTAWgwgAgNiJQgLATAAAjQAAAhAYAuIAFgKQAUgnAAgeQAAgjgLgTQgHgMgHAAQgGAAgHAMg");
	this.shape.setTransform(53.2,51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3395D6").s().p("AjJDKQhUhUAAh2QAAh1BUhUQBUhUB1AAQB2AABUBUQBUBUAAB1QAAB2hUBUQhUBUh2AAQh1AAhUhUgAiwiwQhKBJAABnQAABoBKBJQBJBKBngBQBoABBJhKQBKhJgBhoQABhnhKhJQhJhKhoAAQhnAAhJBKg");
	this.shape_1.setTransform(53.2,53.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.6,24.6,57.3,57.3);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzlTQIAAinMAnLAAAIAACngAuLolIAAhwIciAAIAABwgAzaySIAAg9MAnAAAAIAAA9g");
	mask.setTransform(125.5,123.3);

	// Layer 2
	this.instance = new lib.Symbol35("synched",0);
	this.instance.setTransform(-271.1,142.5,1.454,1,0,26.7,0.2,122.9,286.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:481.3},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,246.6);


(lib.Symbol21 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Symbol22("synched",0);
	this.instance.setTransform(15.5,6,1,1,0,0,0,54.4,5.8);

	this.instance_1 = new lib.Symbol23("synched",0);
	this.instance_1.setTransform(97.2,6,1,1,0,0,0,21.3,5.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,0.2,157.4,11.6);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(53.2,53.2,1,1,0,0,0,53.2,53.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3395D6").s().p("AoTIUIAAwmIQnAAIAAQmgAnwHxIPhAAIAAvgIvhAAg");
	this.shape.setTransform(53.2,53.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoTIUIAAwmIQnAAIAAQmg");
	this.shape_1.setTransform(53.2,53.2);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106.4,106.4);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol24("synched",0);
	this.instance.setTransform(97.5,7.5,1,1,0,0,0,75.9,15.1);
	this.instance.alpha = 0.059;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:69.8,regY:16.4,x:91.4,y:2.2,alpha:0.42},0).wait(1).to({y:-1.2,alpha:0.609},0).wait(1).to({y:-3.5,alpha:0.733},0).wait(1).to({y:-5,alpha:0.82},0).wait(1).to({y:-6.2,alpha:0.883},0).wait(1).to({y:-7,alpha:0.928},0).wait(1).to({y:-7.6,alpha:0.959},0).wait(1).to({y:-7.9,alpha:0.98},0).wait(1).to({y:-8.2,alpha:0.992},0).wait(1).to({y:-8.3,alpha:0.998},0).wait(1).to({regX:75.9,regY:15.1,x:97.5,y:-9.6,alpha:1},0).wait(63).to({startPosition:0},0).wait(1).to({regX:69.8,regY:16.4,scaleX:1,scaleY:1,x:91.4,y:-8.3,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,y:-8.2,alpha:0.985},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-8.1,alpha:0.966},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-8,alpha:0.938},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:91.5,y:-7.7,alpha:0.902},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:91.6,y:-7.5,alpha:0.855},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:91.7,y:-7.1,alpha:0.796},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:91.8,y:-6.7,alpha:0.721},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:92,y:-6.2,alpha:0.626},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:92.2,y:-5.4,alpha:0.502},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:92.5,y:-4.4,alpha:0.331},0).wait(1).to({regX:75.9,regY:15.1,scaleX:0.74,scaleY:0.74,x:97.5,y:-3.9,alpha:0.059},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.8,-6.7,340.3,30.9);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol20("synched",0);
	this.instance.setTransform(54.2,14.2,1,1,0,0,0,48.5,5.9);
	this.instance.alpha = 0.059;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:49.3,regY:7.4,x:55,y:12.7,alpha:0.399},0).wait(1).to({y:11,alpha:0.586},0).wait(1).to({y:9.9,alpha:0.711},0).wait(1).to({y:9.1,alpha:0.801},0).wait(1).to({y:8.6,alpha:0.867},0).wait(1).to({y:8.1,alpha:0.915},0).wait(1).to({y:7.8,alpha:0.95},0).wait(1).to({y:7.6,alpha:0.974},0).wait(1).to({y:7.5,alpha:0.99},0).wait(1).to({y:7.4,alpha:0.998},0).wait(1).to({regX:48.5,regY:5.9,x:54.2,y:5.9,alpha:1},0).wait(52).to({startPosition:0},0).to({scaleX:0.78,scaleY:0.78,x:54.3,y:12.1,alpha:0.059},11).to({_off:true},1).wait(4));

	// Layer 3
	this.instance_1 = new lib.Symbol21("synched",0);
	this.instance_1.setTransform(54.4,35.2,1,1,0,0,0,37.9,5.8);
	this.instance_1.alpha = 0.059;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:39.8,regY:5.9,x:56.3,y:32.3,alpha:0.399},0).wait(1).to({y:30.6,alpha:0.586},0).wait(1).to({y:29.5,alpha:0.711},0).wait(1).to({y:28.7,alpha:0.801},0).wait(1).to({y:28.2,alpha:0.867},0).wait(1).to({y:27.7,alpha:0.915},0).wait(1).to({y:27.4,alpha:0.95},0).wait(1).to({y:27.2,alpha:0.974},0).wait(1).to({y:27.1,alpha:0.99},0).wait(1).to({y:27,alpha:0.998},0).wait(1).to({regX:37.9,regY:5.8,x:54.4,y:26.9,alpha:1},0).wait(52).to({startPosition:0},0).to({regY:5.7,scaleX:0.78,scaleY:0.78,y:28.4,alpha:0.059},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,8.3,178.6,14.8);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol18("synched",0);
	this.instance.setTransform(63.6,38,1,1,0,0,0,63.6,9.5);
	this.instance.alpha = 0.059;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:65.3,regY:9.4,x:65.3,y:36,alpha:0.3},0).wait(1).to({y:34.6,alpha:0.478},0).wait(1).to({y:33.5,alpha:0.614},0).wait(1).to({y:32.7,alpha:0.72},0).wait(1).to({y:32,alpha:0.804},0).wait(1).to({y:31.5,alpha:0.869},0).wait(1).to({y:31.1,alpha:0.919},0).wait(1).to({y:30.8,alpha:0.956},0).wait(1).to({y:30.7,alpha:0.981},0).wait(1).to({y:30.5,alpha:0.995},0).wait(1).to({regX:63.6,regY:9.5,x:63.6,y:30.6,alpha:1},0).wait(58).to({startPosition:0},0).wait(1).to({regX:65.3,regY:9.4,scaleX:1,scaleY:1,x:65.3,y:30.5,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.955},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:65.2,alpha:0.92},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.873},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.814},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.738},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.641},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:65.1,alpha:0.515},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:65,alpha:0.341},0).wait(1).to({regX:63.6,regY:9.5,scaleX:0.75,scaleY:0.75,x:63.6,alpha:0.059},0).to({_off:true},1).wait(4));

	// Layer 1
	this.instance_1 = new lib.Symbol19("synched",0);
	this.instance_1.setTransform(66.7,59.1,1,1,0,0,0,43.4,8.8);
	this.instance_1.alpha = 0.059;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({y:57.1,alpha:0.3},0).wait(1).to({y:55.8,alpha:0.478},0).wait(1).to({y:54.7,alpha:0.614},0).wait(1).to({y:53.8,alpha:0.72},0).wait(1).to({y:53.2,alpha:0.804},0).wait(1).to({y:52.7,alpha:0.869},0).wait(1).to({y:52.3,alpha:0.919},0).wait(1).to({y:52,alpha:0.956},0).wait(1).to({y:51.8,alpha:0.981},0).wait(1).to({y:51.7,alpha:0.995},0).wait(1).to({alpha:1},0).wait(57).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,y:51.6,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,x:66.6,y:51.5,alpha:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:51.4,alpha:0.955},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:51.2,alpha:0.92},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:66.5,y:50.9,alpha:0.873},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:50.6,alpha:0.814},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:66.4,y:50.2,alpha:0.738},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:49.6,alpha:0.641},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:66.3,y:48.9,alpha:0.515},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:66.2,y:47.9,alpha:0.341},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:65.9,y:46.4,alpha:0.059},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,28.5,201.4,18.9);


// stage content:



(lib._240x350 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33();
	this.instance.setTransform(120,175,0.8,0.583,0,0,0,150,300);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol33(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(454));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvbWMAAAg2rMAlfAAAMAAAA2rg");
	mask.setTransform(120,175);

	// Layer 3
	this.instance_1 = new lib.Symbol16("synched",0);
	this.instance_1.setTransform(51.3,342.8,0.563,0.563,0,0,0,79.9,7.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(454));

	// Layer 4
	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(190.4,327.6,0.8,0.8,0,0,0,45,45);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(454));

	// Layer 5
	this.instance_3 = new lib.shapka("synched",0);
	this.instance_3.setTransform(120,56.3,0.8,0.8,0,0,0,150,129.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(434).to({_off:false},0).to({alpha:0.789},13).wait(7));

	// Layer 6
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(120,259,0.576,0.576,0,0,0,150,199.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(440).to({_off:false},0).to({regX:150.1,scaleX:0.59,scaleY:0.59,x:119.1,y:217.2,alpha:1},13,cjs.Ease.get(1)).wait(1));

	// Layer 7
	this.instance_5 = new lib.Symbol32("synched",0);
	this.instance_5.setTransform(120,193.1,0.8,0.8,0,0,0,150,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(434).to({_off:false},0).to({alpha:1},13).wait(7));

	// Layer 9
	this.instance_6 = new lib.Symbol15("synched",0);
	this.instance_6.setTransform(114.3,220.9,0.173,0.173,0,0,0,53.1,53.1);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(250).to({_off:false},0).to({regX:53.2,regY:53.2,scaleX:0.34,scaleY:0.34,x:178.2},12,cjs.Ease.get(1)).wait(52).to({startPosition:0},0).to({regX:53.1,regY:53.1,scaleX:0.17,scaleY:0.17,x:114.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(129));

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3395D6").ss(2,0,1).p("AgbALIA3gV");
	this.shape.setTransform(102.2,228.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3395D6").ss(2,0,1).p("AhHAeICPg7");
	this.shape_1.setTransform(106.8,226.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3395D6").ss(2,0,1).p("AhvAvIDfhd");
	this.shape_2.setTransform(111,225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3395D6").ss(2,0,1).p("AiUA+IEph7");
	this.shape_3.setTransform(114.7,223.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#3395D6").ss(2,0,1).p("Ai1BLIFriV");
	this.shape_4.setTransform(118.1,221.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#3395D6").ss(2,0,1).p("AjRBYIGjiv");
	this.shape_5.setTransform(121,220.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#3395D6").ss(2,0,1).p("AjqBiIHVjD");
	this.shape_6.setTransform(123.6,219.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3395D6").ss(2,0,1).p("Aj/BrIH/jV");
	this.shape_7.setTransform(125.8,218.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#3395D6").ss(2,0,1).p("AkQByIIhjj");
	this.shape_8.setTransform(127.5,217.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3395D6").ss(2,0,1).p("AkeB4II9jv");
	this.shape_9.setTransform(128.9,217.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3395D6").ss(2,0,1).p("AkoB8IJQj3");
	this.shape_10.setTransform(129.9,216.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3395D6").ss(2,0,1).p("AktB/IJbj8");
	this.shape_11.setTransform(130.5,216.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#3395D6").ss(2,0,1).p("AkvB/IJfj9");
	this.shape_12.setTransform(130.7,216.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#3395D6").ss(2,0,1).p("AksB+IJZj7");
	this.shape_13.setTransform(130.4,216.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3395D6").ss(2,0,1).p("AkkB7IJJj1");
	this.shape_14.setTransform(129.6,216.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#3395D6").ss(2,0,1).p("AkWB1IItjp");
	this.shape_15.setTransform(128.1,217.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3395D6").ss(2,0,1).p("AkDBtIIHjZ");
	this.shape_16.setTransform(126.2,218.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3395D6").ss(2,0,1).p("AjLBVIGYip");
	this.shape_17.setTransform(120.5,220.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3395D6").ss(2,0,1).p("AioBGIFRiL");
	this.shape_18.setTransform(116.8,222.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#3395D6").ss(2,0,1).p("Ah/A1ID/hp");
	this.shape_19.setTransform(112.5,224.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#3395D6").ss(2,0,1).p("AhQAhIChhB");
	this.shape_20.setTransform(107.6,226.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},250).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},52).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(129));

	// Layer 11
	this.instance_7 = new lib.Symbol13("synched",0,false);
	this.instance_7.setTransform(124,204.3,0.634,0.634,0,0,0,97.4,38.1);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(238).to({_off:false},0).to({_off:true},87).wait(129));

	// Layer 12
	this.instance_8 = new lib.Symbol12("synched",0);
	this.instance_8.setTransform(119.5,205.5,1.211,1.211,0,0,0,54.4,34.6);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(160).to({_off:false},0).to({_off:true},78).wait(216));

	// Layer 13
	this.instance_9 = new lib.Symbol11("synched",0,false);
	this.instance_9.setTransform(118.1,38.4,1.095,1.095,0,0,0,63.6,30.2);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(75).to({_off:false},0).to({_off:true},85).wait(294));

	// Layer 14
	this.instance_10 = new lib.Symbol10();
	this.instance_10.setTransform(119.6,32.3,1.1,1.1,0,0,0,73.8,7.5);
	this.instance_10.alpha = 0.059;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:16.3,alpha:1},10,cjs.Ease.get(1)).wait(52).to({regX:73.9,x:119.7,y:15.7,alpha:0.987},0).wait(1).to({y:14,alpha:0.944},0).wait(1).to({y:10.8,alpha:0.863},0).wait(1).to({y:5.9,alpha:0.738},0).wait(1).to({y:-0.7,alpha:0.573},0).wait(1).to({y:-7.8,alpha:0.393},0).wait(1).to({y:-14,alpha:0.238},0).wait(1).to({y:-18.2,alpha:0.133},0).wait(1).to({y:-20.4,alpha:0.076},0).wait(1).to({regX:73.8,x:119.6,y:-21.1,alpha:0.059},0).to({_off:true},1).wait(382));

	// Layer 17
	this.instance_11 = new lib.Symbol6();
	this.instance_11.setTransform(121.8,46.4,0.568,0.568,0,0,0,109.9,11.5);
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).to({regX:109.8,scaleX:1.08,scaleY:1.08},4).to({regX:109.9,regY:11.4,scaleX:0.93,scaleY:0.93,y:46.3},7,cjs.Ease.get(1)).wait(40).to({regX:109.8,regY:11.3,scaleX:0.93,scaleY:0.93,x:121.2,y:45.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:119.3,y:44.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:115.7,y:41.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:110.3,y:36.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:103,y:30.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:95.2,y:23.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:88.4,y:18.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:83.8,y:14.4},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:81.3,y:12.2},0).wait(1).to({regX:109.9,scaleX:0.65,scaleY:0.65,x:80.7,y:11.7},0).wait(255).to({regX:109.8,scaleX:0.66,scaleY:0.66,x:80.9,y:11.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:82.1,y:12.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:84.4,y:13},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:88.3,y:14.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:94,y:16.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:100.9,y:18.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:107.3,y:20.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:112.1,y:22.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:115.3,y:23.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:117.2,y:24.1},0).wait(1).to({scaleX:1,scaleY:1,x:118.2,y:24.5},0).wait(1).to({scaleX:1,scaleY:1,x:118.6,y:24.6},0).to({_off:true},111).wait(6));

	// Layer 16
	this.instance_12 = new lib.Symbol31("synched",0);
	this.instance_12.setTransform(190.5,327.6,0.8,0.8,0,0,0,45.1,45);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(325).to({_off:false},0).to({alpha:1},12).to({_off:true},111).wait(6));

	// Layer 18
	this.instance_13 = new lib.Symbol4();
	this.instance_13.setTransform(298.5,91.8,0.7,0.7,180,0,0,96.5,96);
	this.instance_13._off = true;

	this.instance_14 = new lib.Symbol5();
	this.instance_14.setTransform(305.3,91.8,0.7,0.7,180,0,0,96.5,96);
	this.instance_14._off = true;

	this.instance_13.mask = this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(160).to({_off:false},0).wait(1).to({regX:97.9,regY:94.2,rotation:119.7,x:239.4,y:93.3},0).wait(1).to({rotation:84.1,x:204.9,y:92.6},0).wait(1).to({rotation:59.5,x:180.9,y:92},0).wait(1).to({rotation:41.5,x:163.1,y:91.6},0).wait(1).to({rotation:28.1,x:149.7,y:91.1},0).wait(1).to({rotation:18.2,x:139.7,y:90.9},0).wait(1).to({rotation:10.9,x:132.3,y:90.7},0).wait(1).to({rotation:5.7,x:127.2,y:90.6},0).wait(1).to({rotation:2.4,x:123.8},0).wait(1).to({rotation:0.6,x:122,y:90.5},0).wait(1).to({regX:96.5,regY:96,rotation:0,x:120.4,y:91.8},0).wait(57).to({regX:97.9,regY:94.2,rotation:-0.5,x:120.8,y:90.5},0).wait(1).to({rotation:-2.4,x:118.8},0).wait(1).to({rotation:-6.1,x:115.1,y:90.4},0).wait(1).to({rotation:-11.9,x:109,y:90.3},0).wait(1).to({rotation:-20.6,x:100.1},0).wait(1).to({rotation:-32.9,x:87.4,y:90.2},0).wait(1).to({rotation:-50.2,x:69.5,y:90.3},0).wait(1).to({rotation:-74.8,x:44,y:90.5},0).wait(1).to({rotation:-112,x:5.9,y:91.4},0).wait(1).to({regX:96.5,regY:96,rotation:-180,x:-61.3,y:91.8},0).to({_off:true},1).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(238).to({_off:false},0).wait(1).to({regX:93.1,regY:91.1,rotation:116.2,x:243.8,y:91.2},0).wait(1).to({rotation:81.6,x:207.3,y:89},0).wait(1).to({rotation:58.1,x:181.8,y:88},0).wait(1).to({rotation:41,x:163,y:87.7},0).wait(1).to({rotation:28.1,x:148.8,y:87.6},0).wait(1).to({rotation:18.4,x:138.2,y:87.8},0).wait(1).to({rotation:11.2,x:130.2,y:88},0).wait(1).to({rotation:6,x:124.6,y:88.1},0).wait(1).to({rotation:2.6,x:120.8,y:88.3},0).wait(1).to({rotation:0.6,x:118.7},0).wait(1).to({regX:96.5,regY:96,rotation:0,x:120.4,y:91.8},0).wait(65).to({regX:93.1,regY:91.1,rotation:-0.4,x:117.1,y:88.4},0).wait(1).to({rotation:-1.8,x:114.4,y:88.5},0).wait(1).to({rotation:-4,x:109.8,y:88.6},0).wait(1).to({rotation:-7.2,x:103.2,y:88.7},0).wait(1).to({rotation:-11.5,x:94.3,y:89},0).wait(1).to({rotation:-17.2,x:82.7,y:89.2},0).wait(1).to({rotation:-24.5,x:67.9,y:89.7},0).wait(1).to({rotation:-33.9,x:48.8,y:90.3},0).wait(1).to({rotation:-46.2,x:23.9,y:91.1},0).wait(1).to({rotation:-63.3,x:-10.3,y:92.4},0).wait(1).to({regX:96.5,regY:95.9,rotation:-90,x:-59.6,y:91.8},0).to({_off:true},1).wait(129));

	// Layer 19
	this.instance_15 = new lib.Symbol2();
	this.instance_15.setTransform(74.4,275,0.464,0.464,0,0,0,133.5,131.3);
	this.instance_15._off = true;

	this.instance_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(325).to({_off:false},0).wait(1).to({regY:131.4},0).wait(12).to({regY:131.3},0).to({_off:true},110).wait(6));

	// Layer 20
	this.instance_16 = new lib.shapka("synched",0);
	this.instance_16.setTransform(120,56.3,0.8,0.8,0,0,0,150,129.1);

	this.instance_16.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(325).to({startPosition:0},0).to({alpha:0.699},13).to({_off:true},110).wait(6));

	// Layer 21
	this.instance_17 = new lib.Symbol26("synched",0);
	this.instance_17.setTransform(120,170.7,0.8,0.8,0,0,0,150,313.8);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.instance_17.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(325).to({_off:false},0).to({regY:313.7,y:522.8,alpha:1},13,cjs.Ease.get(1)).to({_off:true},110).wait(6));

	// Layer 22
	this.instance_18 = new lib.Symbol7();
	this.instance_18.setTransform(120,157.5,0.8,0.8,0,0,0,150,230.6);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.instance_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(325).to({_off:false},0).to({alpha:1},13).to({_off:true},110).wait(6));

	// Layer 23
	this.instance_19 = new lib.Symbol1();
	this.instance_19.setTransform(119.1,217.2,0.591,0.591,0,0,0,150.1,199.6);

	this.instance_19.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(62).to({alpha:0},12).to({_off:true},1).wait(379));

	// Layer 24
	this.instance_20 = new lib.Symbol34("synched",0,false);
	this.instance_20.setTransform(119.1,196.8,0.599,0.599,0,0,0,125.6,123.3);
	this.instance_20._off = true;

	this.instance_20.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(92).to({_off:false},0).to({_off:true},37).wait(325));

	// Layer 25
	this.instance_21 = new lib.Symbol3();
	this.instance_21.setTransform(119.9,212.3,0.599,0.599,0,0,0,94.9,60.9);
	this.instance_21._off = true;

	this.instance_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(62).to({_off:false},0).wait(78).to({alpha:0},9).to({_off:true},1).wait(304));

	// Layer 26
	this.instance_22 = new lib.Symbol2();
	this.instance_22.setTransform(119.3,197.9,0.599,0.599,0,0,0,133.4,131.6);
	this.instance_22._off = true;

	this.instance_22.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(52).to({_off:false},0).wait(98).to({regX:133.5,regY:131.4,scaleX:0.6,scaleY:0.6,x:118.9,y:198.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:117.5,y:201},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:114.7,y:205.7},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:110.4,y:213.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:104.1,y:223.9},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:96.2,y:237.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:88.1,y:251.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:81.6,y:262.6},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:77.3,y:269.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:75,y:273.8},0).wait(1).to({regY:131.3,scaleX:0.46,scaleY:0.46,x:74.4,y:275},0).to({_off:true},165).wait(129));

	// Layer 27
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#EDF2F5","#E8E7EC"],[0.51,1],4.8,-48.1,0,4.8,-48.1,143.9).s().p("AsHbVIAAABImoAAMAAAg2rMAlfAAAMAAAA2rg");
	this.shape_21.setTransform(120,175);

	this.shape_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).to({_off:true},448).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,175,240,350);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;