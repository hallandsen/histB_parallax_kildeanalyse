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

	//intro

	//SCENE 1
	var timeLineIntro1 = new TimelineMax();
	timeLineIntro1
		.to('#scene-intro-1 h4', 1, {opacity : 0, scale: 0.5})
		.to('#arrow-up', 1, {opacity : 0, scale: 0.5, delay: -1});

	var timeLineIntro2 = new TimelineMax();
	timeLineIntro1
		.from('#intro-container-2', 1, {opacity : 0, scale: 0});

	var timeLineIntro2span = new TimelineMax();
	timeLineIntro2span
		.to('#intro-4-span', 1, {opacity:1, ease:Power2.easeIn});

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
		duration: '270%'
	}).setPin('#intro-container-2');

	var intro2Expl = new ScrollMagic.Scene({
		triggerElement: '#intro-container-3',
		duration: '250%',
		offset: "100"
	}).setPin('#intro-container-3');

	var intro2ExplfadeIn = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-5',
		triggerHook: 'onEnter',
		duration: '100%'
	}).setTween(timeLineIntro2span);

	controller.addScene([
		intro1,intro1Time,
		intro2, intro2Time, intro2Expl, intro2ExplfadeIn
	]);



//BRIKKER BEGYNDER

	//Timeslines
	
	var brick2FadeIn = new TimelineMax();
	brick2FadeIn.to('#brick-2', 1, {opacity: 1});

	var brick3FadeIn = new TimelineMax();
	brick3FadeIn.to('#brick-3', 1, {opacity: 1});

	var brick4FadeIn = new TimelineMax();
	brick4FadeIn.to('#brick-4', 1, {opacity: 1});


	var brikker1 = new ScrollMagic.Scene({
		triggerElement: '#brick-1',
		triggerHook:'onLeave',
		duration: '860%'
	}).setPin('#brick-1');

	var brikker2 = new ScrollMagic.Scene({
		triggerElement: '#brick-2',
		triggerHook:'onLeave',
		duration: '760%'
	}).setPin('#brick-2');

	var brikker3 = new ScrollMagic.Scene({
		triggerElement: '#brick-3',
		triggerHook:'onLeave',
		duration: '560%'
	}).setPin('#brick-3');

	var brikker4 = new ScrollMagic.Scene({
		triggerElement: '#brick-4',
		triggerHook:'onLeave',
		duration: '460%'
	}).setPin('#brick-4');

	var brikker2Fade = new ScrollMagic.Scene({
		triggerElement:'#brick-2',
		offset:'400',
		duration:'50%'
	}).setTween(brick2FadeIn);

	var brikker3Fade = new ScrollMagic.Scene({
		triggerElement:'#brick-3',
		offset:'400',
		duration:'50%'
	}).setTween(brick3FadeIn);

	var brikker4Fade = new ScrollMagic.Scene({
		triggerElement:'#brick-4',
		offset:'400',
		duration:'50%'
	}).setTween(brick4FadeIn);




	controller.addScene([
		brikker1,
		brikker2,brikker2Fade,
		brikker3,brikker3Fade,
		brikker4,brikker4Fade
			]);




//DE 7 TRIN

	//SECTION 1

	//Timeline1
	var timeLine1 = new TimelineMax();
	timeLine1.to('#quest-1', 2.7, {opacity : 1, scale: 1.5});
		

	var timeLine2 = new TimelineMax();
	timeLine2.to('#quest-1', 5, {xPercent: -110, delay: 4, ease:Power2.easeOut});
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
	 	duration: '170%'
	}).setPin('#quest-1');

	//SECTION 2

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		duration: '70%'
	}).setPin('#expl-container-1');
	

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
		duration: $(window).height() - 200
	}).setPin('#brick1');//pinner første brik så den flyder med videre ned når vi scroller

	//sectionX
	var scene4 = new ScrollMagic.Scene({
		triggerElement: '#scene-5',
		duration: '170%'
	}).setPin('#no-2');

	var scene5 = new ScrollMagic.Scene({
		triggerElement: '#scene-6',
		duration: $(window).height() - 400
	}).setPin('#expl-container-2');

	var scene6 = new ScrollMagic.Scene({
		triggerElement: '#scene-7',
		duration: $(window).height() - 200
	}).setPin('#brick-container-no-2');

	var scene7 = new ScrollMagic.Scene({
		triggerElement: '#scene-7', 
		duration: $(window).height() - 400
	}).setTween(horizontalTweenB22);

	var scene8 = new ScrollMagic.Scene({
		triggerElement: '#scene-7', duration: $(window).height() - 400
	}).setTween(colorTween);

	controller.addScene([
		scene1,
		scene1Quest,
		scene1Time,
		scene1Time2,
		scene2,
		scene3,
		scene4,
		scene5,
		scene6,
		scene7,
		scene8
	]);

});	