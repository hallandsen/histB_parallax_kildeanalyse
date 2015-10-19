$(document).ready(function() {
// init controller
	var controller = new ScrollMagic.Controller();
	
	var leftW = $('.left').width();
		var brickW = $('#brick22').width();
		var x = leftW - brickW;
		var xPos = x + 24;
		console.log('xPos: '+xPos);
	//Tweens 
	var horizontalTweenB22 = new TweenMax.to('#brick22', 0.5, {

		x: xPos
	});

	var colorTween = new TweenMax.to('#svg-clr', 0.5, {
		fill: '#F15548'
	});

//INTRO

	//tweens
	var timeLineIntro1 = new TimelineMax();
	timeLineIntro1
		.to('#scene-intro-1 h4', 1, {opacity : 0, scale: 0.5})
		.to('#arrow-up', 1, {opacity : 0, scale: 0.5, delay: -1});

	var timeLineIntro2 = new TimelineMax();
	timeLineIntro1
		.from('#intro-container-2', 1, {opacity : 0, scale: 0});

	var timeLineIntro2span1 = new TimelineMax();
	timeLineIntro2span1
		.to('#intro-4-span', 1, {opacity:1, ease:Power2.easeIn});

	var timeLineIntro2span2 = new TimelineMax();
	timeLineIntro2span2
		.to('#intro-41-span', 1, {opacity:1, ease:Power2.easeIn});

	var timeLineIntro3 = new TimelineMax();
	timeLineIntro3
		.from('#intro-container-4', 1, {opacity : 0, scale: 0});

	//scenes
	var intro1Time = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-1',
		triggerHook:'onLeave',
		duration: '100%'
	}).setTween(timeLineIntro1);

	var intro1 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-1',
		triggerHook:'onLeave',
		duration: '50%'
	}).setPin('#intro-container-1');

	//SCENE 2

	var intro2Time = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-3',
		triggerHook: 'onEnter',
		duration: '100%'
	}).setTween(timeLineIntro2);

	var intro2 = new ScrollMagic.Scene({
		triggerElement: '#intro-container-2',
		offset: '100',
		duration: '350%'
	}).setPin('#intro-container-2');

	var intro2Expl = new ScrollMagic.Scene({
		triggerElement: '#intro-container-3',
		duration: '330%',
		offset: "100"
	}).setPin('#intro-container-3');

	var intro2ExplfadeIn1 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-5',
		triggerHook: 'onEnter',
		duration: '100%'
	}).setTween(timeLineIntro2span1);

	var intro2ExplfadeIn2 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-6',
		triggerHook: 'onEnter',
		duration: '100%'
	}).setTween(timeLineIntro2span2);

	var intro3 = new ScrollMagic.Scene({
		triggerElement: '#intro-container-4',
		offset: '100',
		duration: '150%'
	}).setPin('#intro-container-4');

	var intro3Time = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-8',
		triggerHook: 'onEnter',
		duration: '80%'
	}).setTween(timeLineIntro3);

	controller.addScene([
		intro1,intro1Time,
		intro2, intro2Time, intro2Expl, intro2ExplfadeIn1,intro2ExplfadeIn2,
		intro3, intro3Time
	]);



//BRIKKER BEGYNDER

	//Timeslines
	
	var brick2FadeIn = new TimelineMax();
	brick2FadeIn.to('#brick-2', 1, {opacity: 1});

	var brick3FadeIn = new TimelineMax();
	brick3FadeIn.to('#brick-3', 1, {opacity: 1});

	var brick4FadeIn = new TimelineMax();
	brick4FadeIn.to('#brick-4', 1, {opacity: 1});

	var brick1Parallax = new TimelineMax();
	brick1Parallax.to('#brick-1', 1, {y:'-40%', ease: Linear.easeNone});

	var brick2Parallax = new TimelineMax();
	brick2Parallax.to('#brick-2', 1, {y:'-60%', ease: Linear.easeNone});

	var brickTxtParallax = new TimelineMax();
	brickTxtParallax.to('#brick-txt', 1, {y:'-80%', ease: Linear.easeNone});

	var brick3Parallax = new TimelineMax();
	brick3Parallax.to('#brick-3', 1, {y:'-100%', ease: Linear.easeNone});

	var brick4Parallax = new TimelineMax();
	brick4Parallax.to('#brick-4', 1, {y:'-120%', ease: Linear.easeNone});


	//Scenes
	var brikker1 = new ScrollMagic.Scene({
		triggerElement: '#brick-1',
		triggerHook:'onLeave',
		duration: '460%'
	}).setPin('#brick-1');

	var brikker1Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-1',
		triggerHook:'onLeave',
		duration: '660%'
	}).setTween(brick1Parallax);

	//Brick layer 2
	var brikker2 = new ScrollMagic.Scene({
		triggerElement: '#brick-2',
		triggerHook:'onLeave',
		duration: '360%'
	}).setPin('#brick-2');

	var brikker2Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2',
		triggerHook:'onLeave',
		duration: '460%'
	}).setTween(brick2Parallax);

	
	var brikkerTekst = new ScrollMagic.Scene({

		triggerElement: '#brick-txt',
		duration: '360%'
	}).setPin('#brick-txt');

	var brikkerTxtParallax = new ScrollMagic.Scene({
		triggerElement:'#brick-txt',
		duration: '460%'
	}).setTween(brickTxtParallax);

	//Brick layer 3
	var brikker3 = new ScrollMagic.Scene({
		triggerElement: '#brick-3',
		triggerHook:'onLeave',
		duration: '360%'
	}).setPin('#brick-3');

	var brikker3Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-3',
		triggerHook:'onLeave',
		duration: '360%'
	}).setTween(brick3Parallax);

	//Brick layer 4
	var brikker4 = new ScrollMagic.Scene({
		triggerElement: '#brick-4',
		triggerHook:'onLeave',
		// offset:'300',
		duration: '260%'
	}).setPin('#brick-4');

	var brikker4Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-4',
		triggerHook:'onLeave',
		duration: '60%'
	}).setTween(brick4Parallax);


	controller.addScene([
		brikker1, 
		brikker1Parallax,
		
		brikker2,
		brikker2Parallax,

		brikkerTekst,
		brikkerTxtParallax,

		brikker3,
		brikker3Parallax,

		brikker4,
		brikker4Parallax
	]);




//DE 7 TRIN

// 1. HVAD

	//Tweens
	var timeLine1 = new TimelineMax();
	timeLine1.to('#quest-1', 3.7, {opacity : 1, scale: 1.5});
		
	var timeLine2 = new TimelineMax();
	timeLine2.to('#quest-1', 5, {xPercent: -120, delay: 16, ease:Power2.easeOut});
	
	var explFadeIn = new TimelineMax();
	explFadeIn.from('#hvad-txt', 1, {opacity : 0});

	//scenes

	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#no-1',
		offset:'100',
		duration: '30%'
	}).setPin('#no-1');

	var scene1Time = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
	 	duration: '100%'
	}).setTween(timeLine1);

	var scene1Time2 = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
	 	duration: '100%'
	}).setTween(timeLine2);

	var scene1Quest = new ScrollMagic.Scene({
		triggerElement: '#quest-1',
		offset:'100',
	 	duration: '260%'
	}).setPin('#quest-1');

	var scene1Time3 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(explFadeIn);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		offset:'75',
		duration: '164%'
	}).setPin('#expl-container-1');

	controller.addScene([
		scene1,
		scene1Quest,
		scene1Time,
		scene1Time2,scene1Time3,
		scene2
	]);



	

// 2. HVEM

	//Tweens
	var hvemFadeGrow = new TimelineMax();
	hvemFadeGrow.to('#quest-2', 3.7, {opacity : 1, scale: 1.5});
		
	var hvemMoveX = new TimelineMax();
	hvemMoveX.to('#quest-2', 5, {xPercent: -120, delay: 16, ease:Power2.easeOut});
	
	var hvemFadeIn1 = new TimelineMax();
	hvemFadeIn1
	.from('#hvem-txt-1', 1, {opacity : 0})
	.from('#hvem-txt-2', 1, {opacity : 0, delay:2});

	//scenes

	var hvem1 = new ScrollMagic.Scene({
		triggerElement: '#no-2',
		offset:'100',
		duration: '30%'
	}).setPin('#no-2');

	var hvemTime = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
	 	duration: '100%'
	}).setTween(hvemFadeGrow);

	var hvemTime2 = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
	 	duration: '100%'
	}).setTween(hvemMoveX);

	var hvemQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-2',
		offset:'100',
	 	duration: '255%'
	}).setPin('#quest-2');

	var hvemTime3 = new ScrollMagic.Scene({
		triggerElement: '#scene-5',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(hvemFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var hvemExpl = new ScrollMagic.Scene({
		triggerElement: '#scene-5',
		offset:'75',
		duration: '159%'
	}).setPin('#expl-container-2');

controller.addScene([
		hvem1, hvemTime, hvemTime2, hvemTime3, hvemQuest, hvemExpl
	]);


// 3. HVORNÅR

	//Tweens
	var hvornaarFadeGrow = new TimelineMax();
	hvornaarFadeGrow.to('#quest-3', 3.7, {opacity : 1, scale: 1.5});
		
	var hvornaarMoveX = new TimelineMax();
	hvornaarMoveX.to('#quest-3', 5, {xPercent: -110, delay: 16, ease:Power2.easeOut});
	
	var hvornaarFadeIn1 = new TimelineMax();
	hvornaarFadeIn1
	.from('#hvornaar-txt-1', 1, {opacity : 0})
	.from('#hvornaar-txt-2', 1, {opacity : 0, delay:2});

	//scenes

	var hvornaar1 = new ScrollMagic.Scene({
		triggerElement: '#no-3',
		offset:'100',
		duration: '30%'
	}).setPin('#no-3');

	var hvornaarTime = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-1',
	 	duration: '100%'
	}).setTween(hvornaarFadeGrow);

	var hvornaarTime2 = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-1',
	 	duration: '100%'
	}).setTween(hvornaarMoveX);

	var hvornaarQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-3',
		offset:'100',
	 	duration: '255%'
	}).setPin('#quest-3');

	var hvornaarTime3 = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-2',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(hvornaarFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var hvornaarExpl = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-2',
		offset:'75',
		duration: '156%'
	}).setPin('#expl-container-3');

controller.addScene([
		hvornaar1, hvornaarTime, hvornaarTime2, hvornaarTime3, hvornaarQuest, hvornaarExpl
	]);

// 4. TIL HVEM

	//Tweens
	var tilHvemFadeGrow = new TimelineMax();
	tilHvemFadeGrow.to('#quest-4', 3.7, {opacity : 1, scale: 1.5});
		
	var tilHvemMoveX = new TimelineMax();
	tilHvemMoveX.to('#quest-4', 5, {xPercent: -105, delay: 16, ease:Power2.easeOut});
	
	var tilHvemFadeIn1 = new TimelineMax();
	tilHvemFadeIn1
	.from('#til-hvem-txt-1', 1, {opacity : 0});

	//scenes

	var tilHvem1 = new ScrollMagic.Scene({
		triggerElement: '#no-4',
		offset:'100',
		duration: '30%'
	}).setPin('#no-4');

	var tilHvemTime = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-1',
	 	duration: '100%'
	}).setTween(tilHvemFadeGrow);

	var tilHvemTime2 = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-1',
	 	duration: '100%'
	}).setTween(tilHvemMoveX);

	var tilHvemQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-4',
		offset:'100',
	 	duration: '260%'
	}).setPin('#quest-4');

	var tilHvemTime3 = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-2',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(tilHvemFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var tilHvemExpl = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-2',
		offset:'75',
		duration: '163%'
	}).setPin('#expl-container-4');

controller.addScene([
		tilHvem1, tilHvemTime, tilHvemTime2, tilHvemTime3, tilHvemQuest, tilHvemExpl
	]);

	// var scene3 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-4',
	// 	duration: $(window).height() - 200
	// }).setPin('#brick1');//pinner første brik saa den flyder med videre ned naar vi scroller

	// //sectionX
	// var scene4 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-5',
	// 	duration: '170%'
	// }).setPin('#no-2');

	// var scene5 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-6',
	// 	duration: $(window).height() - 400
	// }).setPin('#expl-container-2');

	// var scene6 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-7',
	// 	duration: $(window).height() - 200
	// }).setPin('#brick-container-no-2');

	// var scene7 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-7', 
	// 	duration: $(window).height() - 400
	// }).setTween(horizontalTweenB22);

	// var scene8 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-7', duration: $(window).height() - 400
	// }).setTween(colorTween);

	

});	