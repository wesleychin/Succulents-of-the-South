'use strict';

angular.module('suculentsOfTheSouthApp')
  .controller('LoginCtrl', function ($scope, $location) {
  	$scope.login = function(email, password) {
  		console.log(email, password);
	    $location.path( "/main" );
  	}
  });
