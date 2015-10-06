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

	var timeLineIntro1 = new TimelineMax();
	timeLineIntro1
		.to('#scene-intro-1 h4', 1, {opacity : 0, scale: 0.5})
		.to('#arrow-up', 1, {opacity : 0, scale: 0.5, delay: -1});

	var timeLineIntro2 = new TimelineMax();
	timeLineIntro1
		.to('#intro-container-2', 1, {opacity : 1, scale: 1.5, delay: 3});


	//scenes
	var intro1Time = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-1',
		triggerHook:'onLeave',
		duration: $(window).height() + ($(window).height() - 400)
	}).setTween(timeLineIntro1);

	var intro1 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-1',
		triggerHook:'onLeave',
		duration: $(window).height() + ($(window).height() - 800)
	}).setPin('#intro-container-1');

	var intro2Time = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-3',
		triggerHook:'onLeave',
		duration: $(window).height() + ($(window).height() - 400)
	}).setTween(timeLineIntro2);

	var intro2 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-3',
		duration: $(window).height() + ($(window).height() - 400)
	}).setPin('#intro-container-2');

	controller.addScene([
		intro1,intro1Time,
		intro2, intro2Time
	]);

//('#scene-intro-3 .left')
	//de syv trin

	//section 1

	//Timeline1
	var timeLine1 = new TimelineMax();
	timeLine1
		.to('#quest-1', 2, {opacity : 1, scale: 1.5})
		.to('#quest-1', 1.5, {xPercent: -100, delay: 0.2});

	//SCENES

	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
		duration: $(window).height() - ($(window).height()/1.5)
	}).setPin('#no-1');

	var scene1Time = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
	 	duration: $(window).height()
	}).setTween(timeLine1);

	var scene1Quest = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
	 	duration: $(window).height() + ($(window).height() - 400)
	}).setPin('#quest-1');

	//section2

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		duration: $(window).height() - 400
	}).setPin('#expl-container-1');

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
		duration: $(window).height() - 200
	}).setPin('#brick1');//pinner første brik så den flyder med videre ned når vi scroller

	//sectionX
	var scene4 = new ScrollMagic.Scene({
		triggerElement: '#scene-5',
		duration: $(window).height() + ($(window).height()-400)
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
		scene2,
		scene3,
		scene4,
		scene5,
		scene6,
		scene7,
		scene8
	]);

});	