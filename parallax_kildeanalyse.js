// ScrollMagic vars

// init controller
var controller = new ScrollMagic.Controller();

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
	triggerElement: '#scene-4'})
		.setPin('#pinned-container');//pinner første brik så den flyder med videre ned når vi scroller

var scene3 = new ScrollMagic.Scene({
	triggerElement: '#scene-6'})
		.setPin('#brick2')
	// .on('enter', function(){
	// 	$('#brick2').detach().appendTo('#pinned-container');
	// });

controller.addScene([
	scene,
	scene2,
	scene3
]);

var animateElement = document.getElementById("midte"); //animation af farveændring
