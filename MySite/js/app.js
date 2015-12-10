'use strict';

angular.module('MySite',[])
.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.working = function(){
		console.log('it works');
	}
}])