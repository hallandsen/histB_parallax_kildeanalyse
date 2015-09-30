$(document).ready(function() {
// init controller
	var controller = new ScrollMagic.Controller();

	var animateElement = document.getElementById("midte"); //animation af farveændring
	var myTween = new TweenMax.to("#brick2", 10.5, {x: '390'});

	//create a scene
	var scene = new ScrollMagic.Scene({
		triggerElement: '#scene-3'})//farven skifter når scene-3 rammer midten af viewport
			.on('enter', function(){
				animateElement.style.fill = 'grey';
			});
			// .on('leave', function(){
			// 	animateElement.style.fill = "";
			// });
	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-4'
	}).setPin('#pinned-container-1');//pinner første brik så den flyder med videre ned når vi scroller

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '#scene-6'
	}).setPin('#pinned-container-2');

	var scene4 = new ScrollMagic.Scene({
		triggerElement: '#scene-7', triggerhook:0, duration: 100
	}).setTween(myTween);

	controller.addScene([
		scene,
		scene2,
		scene3,
		scene4
	]);

});	