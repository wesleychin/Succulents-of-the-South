'use strict';

angular.module('suculentsOfTheSouthApp')
  .controller('StatisticsCtrl', function ($scope, $firebase) {
    var firebaseURL = new Firebase("https://boiling-heat-2151.firebaseio.com/messages");
    var sync = $firebase(firebaseURL);

    $scope.messages = sync.$asArray();

    $scope.addMessage = function(user, message) {
    	$scope.messages.$add({user: user, message: message});
  	}

  	$scope.removeMessage = function(id) {
  		var itemRef = new Firebase(firebaseURL + '/' + id);
  		itemRef.remove();
  	}
});