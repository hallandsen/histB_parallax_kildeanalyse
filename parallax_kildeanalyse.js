$(document).ready(function() {
// init controller
	var controller = new ScrollMagic.Controller();
	var animateElement = document.getElementById("midte"); //animation af farveændring

	// var colorTween = new TweenMax.to('#midte', 1, {
 //    	fill: 'grey',
	// });
	
	var myTween = new TweenMax.to("#brick2", 0.5, {
		x: '409'
	});

	//create a scene
	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#scene-3', duration: 400})//farven skifter når scene-3 rammer midten af viewport
			// .setTween('#midte',  {fill: "grey"});
			// .setTween(colorTween);
			.on('enter', function(){
				animateElement.style.fill = 'grey';
			});

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-4'
	}).setPin('#pinned-container-1');//pinner første brik så den flyder med videre ned når vi scroller

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '#scene-6'
	}).setPin('#pinned-container-2');

	var scene4 = new ScrollMagic.Scene({
		triggerElement: '#scene-7', triggerhook:0, duration: 800
	}).setTween(myTween);

	controller.addScene([
		scene1,
		scene2,
		scene3,
		scene4
	]);

});	