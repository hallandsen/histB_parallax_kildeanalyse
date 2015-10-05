$(document).ready(function() {
// init controller
	var controller = new ScrollMagic.Controller();
	var animateElement = document.getElementById("midte"); //animation af farveændring

	// var colorTween = new TweenMax.to('#midte', 1, {
 //    	fill: 'grey',
	// });
	
	var myTween = new TweenMax.to("#brick22", 0.5, {
		x: '464'
	});

	//create a scene
	// var scene1 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-2'})//farven skifter når scene-3 rammer midten af viewport
	// 	.on('enter', function(){
	// 		animateElement.style.fill = 'grey';
	// 	});

	// var scene2 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-2'
	// }).setPin('#pinned-container-1');//pinner første brik så den flyder med videre ned når vi scroller

	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
		duration: $(window).height() + ($(window).height()-400)
	}).setPin('#no-1');//pinner første brik så den flyder med videre ned når vi scroller


	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		duration: $(window).height()-400
	}).setPin('#expl-container-1');

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
		duration: $(window).height() - 200
	}).setPin('#brick1');//pinner første brik så den flyder med videre ned når vi scroller

	//section2

	var scene4 = new ScrollMagic.Scene({
		triggerElement: '#scene-5',
		duration: $(window).height() + ($(window).height()-400)
	}).setPin('#no-2');

	var scene5 = new ScrollMagic.Scene({
		triggerElement: '#scene-6',
		duration: $(window).height()-400
	}).setPin('#expl-container-2');

	var scene5 = new ScrollMagic.Scene({
		triggerElement: '#scene-7',
		duration: $(window).height()
	}).setPin('#brick-container-no-2');

	var scene6 = new ScrollMagic.Scene({
		triggerElement: '#scene-7', duration: $(window).height()
	}).setTween(myTween);

	controller.addScene([
		scene1,
		scene2,
		scene3,
		scene4,
		scene5,
		scene6
	]);

});	