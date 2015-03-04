'use strict';

angular.module('succulentsOfTheSouthApp')
  .controller('RegisterCtrl', function ($scope, $firebase, $location) {
  	//var firebaseURL = new Firebase("https://boiling-heat-2151.firebaseio.com/users");
    //var sync = $firebase(firebaseURL);

    //$scope.users = sync.$asArray();

  	$scope.register = function(username, email, password) {
	    $scope.users.$add({username: username, email: email, password: password});
	    $location.path( "/main" );
  	}
  });
