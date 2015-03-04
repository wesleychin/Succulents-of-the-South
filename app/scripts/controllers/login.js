'use strict';

angular.module('succulentsOfTheSouthApp')
  .controller('LoginCtrl', function ($scope, $location) {
  	$scope.login = function(email, password) {
  		console.log(email, password);
	    $location.path( "/main" );
  	}
  });
