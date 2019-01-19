(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.background2x = function() {
	this.initialize(img.background2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3022,1703);


(lib.cor = function() {
	this.initialize(img.cor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,939,89);


(lib.light2x = function() {
	this.initialize(img.light2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,112);


(lib.mobile_img2x = function() {
	this.initialize(img.mobile_img2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,430);


(lib.text_img012x = function() {
	this.initialize(img.text_img012x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,336);


(lib.text_img022x = function() {
	this.initialize(img.text_img022x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,336);


(lib.text_img032x = function() {
	this.initialize(img.text_img032x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,335);


(lib.text_img042x = function() {
	this.initialize(img.text_img042x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,55);


(lib.text_img052x = function() {
	this.initialize(img.text_img052x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,498);


(lib.text_img062x = function() {
	this.initialize(img.text_img062x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,55);


(lib.text_img072x = function() {
	this.initialize(img.text_img072x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,463);


(lib.train = function() {
	this.initialize(img.train);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,710,263);


(lib.window = function() {
	this.initialize(img.window);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,779,985);


(lib.women2x = function() {
	this.initialize(img.women2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,630);


(lib.yellow_light2x = function() {
	this.initialize(img.yellow_light2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,829);


(lib.补间34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img062x();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-27.5,207,55);


(lib.补间33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img062x();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-27.5,207,55);


(lib.补间32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img072x();
	this.instance.parent = this;
	this.instance.setTransform(-14,-231.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-231.5,28,463);


(lib.补间31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img072x();
	this.instance.parent = this;
	this.instance.setTransform(-14,-231.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-231.5,28,463);


(lib.补间30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img062x();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-27.5,207,55);


(lib.补间29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img062x();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-27.5,207,55);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img072x();
	this.instance.parent = this;
	this.instance.setTransform(-14,-231.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-231.5,28,463);


(lib.补间27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img072x();
	this.instance.parent = this;
	this.instance.setTransform(-14,-231.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-231.5,28,463);


(lib.补间26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img042x();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-27.5,207,55);


(lib.补间25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img042x();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-27.5,207,55);


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img052x();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-249,27,498);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img052x();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-249,27,498);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.women2x();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-315,275,630);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.women2x();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-315,275,630);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cor();
	this.instance.parent = this;
	this.instance.setTransform(-469.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469.5,-44.5,939,89);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cor();
	this.instance.parent = this;
	this.instance.setTransform(-469.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469.5,-44.5,939,89);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img032x();
	this.instance.parent = this;
	this.instance.setTransform(-78,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-167.5,156,335);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img032x();
	this.instance.parent = this;
	this.instance.setTransform(-78,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-167.5,156,335);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.light2x();
	this.instance.parent = this;
	this.instance.setTransform(-92,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-56,184,112);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.light2x();
	this.instance.parent = this;
	this.instance.setTransform(-92,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-56,184,112);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img022x();
	this.instance.parent = this;
	this.instance.setTransform(-78,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-168,156,336);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img022x();
	this.instance.parent = this;
	this.instance.setTransform(-78,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-168,156,336);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img012x();
	this.instance.parent = this;
	this.instance.setTransform(-78,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-168,156,336);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text_img012x();
	this.instance.parent = this;
	this.instance.setTransform(-78,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-168,156,336);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.background2x();
	this.instance.parent = this;
	this.instance.setTransform(-1476.2,-831.9,0.977,0.977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1476.2,-831.9,2952.6,1663.9);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.background2x();
	this.instance.parent = this;
	this.instance.setTransform(-1476.2,-831.9,0.977,0.977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1476.2,-831.9,2952.6,1663.9);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.train();
	this.instance.parent = this;
	this.instance.setTransform(-355,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355,-131.5,710,263);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.train();
	this.instance.parent = this;
	this.instance.setTransform(-355,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355,-131.5,710,263);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.window();
	this.instance.parent = this;
	this.instance.setTransform(-389.5,-492.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.5,-492.5,779,985);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.window();
	this.instance.parent = this;
	this.instance.setTransform(-389.5,-492.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.5,-492.5,779,985);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.mobile_img2x();
	this.instance.parent = this;
	this.instance.setTransform(-288,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288,-215,576,430);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.mobile_img2x();
	this.instance.parent = this;
	this.instance.setTransform(-288,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288,-215,576,430);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.yellow_light2x();
	this.instance.parent = this;
	this.instance.setTransform(-341.5,-414.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.5,-414.5,683,829);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.yellow_light2x();
	this.instance.parent = this;
	this.instance.setTransform(-341.5,-414.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.5,-414.5,683,829);


(lib.linght = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// linght1
	this.instance = new lib.补间15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(411,-724);

	this.instance_1 = new lib.补间16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-484.2,-190.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},28).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-484.2,y:-190.8,alpha:0},28,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319,-780,184,112);


// stage content:
(lib.canvasWrap = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// light2
	this.instance = new lib.linght("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(437.7,92.4,0.479,0.479,0,0,0,-36.6,-457.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(241).to({_off:false},0).to({_off:true},27).wait(51).to({_off:false,regX:-36.5,scaleX:0.6,scaleY:0.6,x:285.5,y:125.6,alpha:0.719},0).to({_off:true},27).wait(51).to({_off:false,regX:-36.6,scaleX:0.48,scaleY:0.48,x:437.7,y:92.4,alpha:1},0).to({_off:true},27).wait(51).to({_off:false,regX:-36.5,scaleX:0.6,scaleY:0.6,x:285.5,y:125.6,alpha:0.719},0).to({_off:true},27).wait(51).to({_off:false,regY:-457.3,scaleX:0.72,scaleY:0.72,x:505.8,y:92.4,alpha:1},0).to({_off:true},27).wait(13).to({_off:false,regY:-457.4,scaleX:0.6,scaleY:0.6,x:285.5,y:125.6,alpha:0.719},0).to({_off:true},27).wait(2).to({_off:false,regY:-457.3,scaleX:0.72,scaleY:0.72,x:505.8,y:92.4,alpha:1},0).wait(24));

	// light1
	this.instance_1 = new lib.linght("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.9,210.6,1,1,0,0,0,-36.6,-457.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(228).to({_off:false},0).to({_off:true},29).wait(49).to({_off:false,x:417.7},0).to({_off:true},29).wait(49).to({_off:false,x:-10.9},0).to({_off:true},29).wait(49).to({_off:false,x:417.7},0).to({_off:true},29).wait(49).to({_off:false,x:-10.9},0).to({_off:true},29).wait(11).to({_off:false,x:678.1,y:374.3},0).to({_off:true},29).wait(8).to({_off:false,x:-10.9,y:210.6},0).wait(29));

	// light2
	this.instance_2 = new lib.linght("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(650,206.5,0.479,0.479,0,0,0,-36.6,-457.4);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).to({_off:true},27).wait(51).to({_off:false,scaleX:0.66,scaleY:0.66,x:545.8,y:278.6,alpha:0.891},0).to({_off:true},27).wait(51).to({_off:false,scaleX:0.48,scaleY:0.48,x:650,y:206.5,alpha:0.5},0).to({_off:true},27).wait(51).to({_off:false,scaleX:0.66,scaleY:0.66,x:545.8,y:278.6,alpha:0.891},0).to({_off:true},27).wait(51).to({_off:false,scaleX:0.48,scaleY:0.48,x:650,y:206.5,alpha:1},0).to({_off:true},27).wait(51).to({_off:false,scaleX:0.66,scaleY:0.66,x:545.8,y:278.6,alpha:0.891},0).to({_off:true},27).wait(2).to({_off:false,scaleX:0.48,scaleY:0.48,x:650,y:206.5,alpha:1},0).wait(24));

	// light1
	this.instance_3 = new lib.linght("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(371.6,154.5,1,1,0,0,0,-36.6,-457.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(190).to({_off:false},0).to({_off:true},29).wait(49).to({_off:false},0).to({_off:true},29).wait(49).to({_off:false},0).to({_off:true},29).wait(49).to({_off:false},0).to({_off:true},29).wait(49).to({_off:false},0).to({_off:true},29).wait(49).to({_off:false},0).to({_off:true},29).wait(11).to({_off:false},0).wait(26));

	// train
	this.instance_4 = new lib.补间7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-355,972.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(355,972.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({_off:true,x:355},39).wait(437));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(170).to({_off:false},39).wait(118).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(303));

	// women
	this.instance_6 = new lib.补间21("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(405.5,1146);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间22("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(405.5,927);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(372).to({_off:false},0).to({_off:true,y:927},21,cjs.Ease.get(1)).wait(253));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(372).to({_off:false},21,cjs.Ease.get(1)).wait(42).to({startPosition:0},0).to({y:1527,alpha:0},22).to({_off:true},1).wait(188));

	// cor
	this.instance_8 = new lib.补间19("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(374.5,1305.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.补间20("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(374.5,1161.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(372).to({_off:false},0).to({_off:true,y:1161.5,alpha:1},21,cjs.Ease.get(1)).wait(253));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(372).to({_off:false},21,cjs.Ease.get(1)).wait(42).to({startPosition:0},0).to({y:1761.5,alpha:0},22).to({_off:true},1).wait(188));

	// 图层 26
	this.instance_10 = new lib.补间27("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(375,524.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.补间28("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(375,524.5);

	this.instance_12 = new lib.补间31("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(375,524.5);
	this.instance_12._off = true;

	this.instance_13 = new lib.补间32("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(375,524.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},555).to({state:[{t:this.instance_11}]},15).to({state:[{t:this.instance_12}]},40).to({state:[{t:this.instance_13}]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(555).to({_off:false},0).to({_off:true,alpha:1},15).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(610).to({_off:false},0).to({_off:true,alpha:0},35).wait(1));

	// 图层 25
	this.instance_14 = new lib.补间29("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(375.5,205.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.补间30("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(375.5,205.5);

	this.instance_16 = new lib.补间33("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(375.5,205.5);
	this.instance_16._off = true;

	this.instance_17 = new lib.补间34("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(375.5,205.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},555).to({state:[{t:this.instance_15}]},15).to({state:[{t:this.instance_16}]},40).to({state:[{t:this.instance_17}]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(555).to({_off:false},0).to({_off:true,alpha:1},15).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(610).to({_off:false},0).to({_off:true,alpha:0},35).wait(1));

	// text_05
	this.instance_18 = new lib.补间23("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(375.5,545);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.instance_19 = new lib.补间24("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(375.5,545);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(465).to({_off:false},0).to({_off:true,alpha:1},20).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(465).to({_off:false},20).wait(42).to({startPosition:0},0).to({alpha:0},16).to({_off:true},1).wait(102));

	// text_04
	this.instance_20 = new lib.补间25("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(375.5,208.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.instance_21 = new lib.补间26("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(375.5,208.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(465).to({_off:false},0).to({_off:true,alpha:1},20).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(465).to({_off:false},20).wait(42).to({startPosition:0},0).to({alpha:0},16).to({_off:true},1).wait(102));

	// text_03
	this.instance_22 = new lib.补间17("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(375,-179.5);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.instance_23 = new lib.补间18("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(375,327.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(372).to({_off:false},0).to({_off:true,y:327.5,alpha:1},21,cjs.Ease.get(1)).wait(253));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(372).to({_off:false},21,cjs.Ease.get(1)).wait(42).to({startPosition:0},0).to({y:-192.5,alpha:0},22).to({_off:true},1).wait(188));

	// text_02
	this.instance_24 = new lib.补间13("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(119,-171.5);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.instance_25 = new lib.补间14("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(119,209);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(170).to({_off:false},0).to({_off:true,y:209,alpha:1},20).wait(456));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(170).to({_off:false},20).wait(105).to({startPosition:0},0).to({alpha:0},20).to({_off:true},112).wait(219));

	// text_01
	this.instance_26 = new lib.补间11("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(119,-176);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.instance_27 = new lib.补间12("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(119,209);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(73).to({_off:false},0).to({_off:true,y:209,alpha:1},15).wait(558));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(73).to({_off:false},15).wait(46).to({startPosition:0},0).to({alpha:0},24).to({_off:true},269).wait(219));

	// yellowLight
	this.instance_28 = new lib.补间1("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(408.5,-414.5);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.instance_29 = new lib.补间2("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(414.5,406.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(9).to({_off:false},0).wait(1).to({x:409.7,y:-252.8,alpha:0.197},0).wait(1).to({x:410.2,y:-184.1,alpha:0.281},0).wait(1).to({x:410.6,y:-131.1,alpha:0.345},0).wait(1).to({x:410.9,y:-86.2,alpha:0.4},0).wait(1).to({x:411.2,y:-46.6,alpha:0.448},0).wait(1).to({x:411.4,y:-10.9,alpha:0.492},0).wait(1).to({x:411.7,y:21.8,alpha:0.531},0).wait(1).to({x:411.9,y:52.1,alpha:0.568},0).wait(1).to({x:412.1,y:80.3,alpha:0.603},0).wait(1).to({x:412.3,y:106.8,alpha:0.635},0).wait(1).to({x:412.5,y:131.8,alpha:0.665},0).wait(1).to({x:412.7,y:155.4,alpha:0.694},0).wait(1).to({x:412.8,y:177.7,alpha:0.721},0).wait(1).to({x:413,y:198.8,alpha:0.747},0).wait(1).to({x:413.1,y:218.9,alpha:0.771},0).wait(1).to({x:413.3,y:237.9,alpha:0.795},0).wait(1).to({x:413.4,y:255.9,alpha:0.817},0).wait(1).to({x:413.5,y:273,alpha:0.837},0).wait(1).to({x:413.6,y:289.2,alpha:0.857},0).wait(1).to({x:413.8,y:304.4,alpha:0.876},0).wait(1).to({x:413.9,y:318.7,alpha:0.893},0).wait(1).to({x:414,y:332.2,alpha:0.909},0).wait(1).to({y:344.6,alpha:0.925},0).wait(1).to({x:414.1,y:356.2,alpha:0.939},0).wait(1).to({x:414.2,y:366.7,alpha:0.952},0).wait(1).to({x:414.3,y:376.3,alpha:0.963},0).wait(1).to({y:384.7,alpha:0.973},0).wait(1).to({x:414.4,y:392,alpha:0.982},0).wait(1).to({y:398,alpha:0.99},0).wait(1).to({x:414.5,y:402.5,alpha:0.995},0).wait(1).to({y:405.4,alpha:0.999},0).to({_off:true},1).wait(605));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(41).to({_off:false},0).wait(93).to({startPosition:0},0).to({alpha:0},24).to({_off:true},269).wait(219));

	// moblie
	this.instance_30 = new lib.补间3("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(438,866);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.instance_31 = new lib.补间4("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(438,866);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(41).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.247},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.477},0).wait(1).to({alpha:0.566},0).wait(1).to({alpha:0.687},0).to({_off:true},1).wait(585));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(61).to({_off:false},0).wait(73).to({startPosition:0},0).to({alpha:0},24).to({_off:true},269).wait(219));

	// item01
	this.instance_32 = new lib.window();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-27,-14);

	this.instance_33 = new lib.补间5("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(362.5,478.5);
	this.instance_33._off = true;

	this.instance_34 = new lib.补间6("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(362.5,478.5);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32}]}).to({state:[{t:this.instance_33}]},134).to({state:[{t:this.instance_34}]},24).to({state:[]},269).to({state:[]},163).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(134).to({_off:false},0).to({_off:true,alpha:0},24).wait(488));

	// background
	this.instance_35 = new lib.background2x();
	this.instance_35.parent = this;
	this.instance_35.setTransform(0,-280,0.977,0.977);

	this.instance_36 = new lib.补间9("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(1476.3,551.9);
	this.instance_36._off = true;

	this.instance_37 = new lib.补间10("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(116.3,551.9);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35}]}).to({state:[{t:this.instance_36}]},209).to({state:[{t:this.instance_37}]},134).to({state:[{t:this.instance_37}]},13).to({state:[{t:this.instance_37}]},36).to({state:[{t:this.instance_37}]},63).to({state:[{t:this.instance_37}]},155).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(209).to({_off:false},0).to({_off:true,x:116.3},134).wait(303));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(209).to({_off:false},134).wait(13).to({regX:205.6,regY:-24,x:321.9,y:527.9},0).to({regX:205.5,regY:-23.8,scaleX:1.68,scaleY:1.68,x:321.6,y:528.3},36).wait(63).to({startPosition:0},0).to({y:1154.7},155).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(348,323,2979.6,1663.9);
// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"img/background2x.png", id:"background2x"},
		{src:"img/cor.png", id:"cor"},
		{src:"img/light2x.png", id:"light2x"},
		{src:"img/mobile_img2x.png", id:"mobile_img2x"},
		{src:"img/text_img012x.png", id:"text_img012x"},
		{src:"img/text_img022x.png", id:"text_img022x"},
		{src:"img/text_img032x.png", id:"text_img032x"},
		{src:"img/text_img042x.png", id:"text_img042x"},
		{src:"img/text_img052x.png", id:"text_img052x"},
		{src:"img/text_img062x.png", id:"text_img062x"},
		{src:"img/text_img072x.png", id:"text_img072x"},
		{src:"img/train.png", id:"train"},
		{src:"img/window.png", id:"window"},
		{src:"img/women2x.png", id:"women2x"},
		{src:"img/yellow_light2x.png", id:"yellow_light2x"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;