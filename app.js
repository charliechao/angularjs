(function (){
	var app = angular.module("store",[]);
	app.controller("storeController", function(){
		this.product = gem;
	});
	var gem = {
		name: "Dodecahedron",
		price: 2.95,
		description: ".....",

	}
}) ();