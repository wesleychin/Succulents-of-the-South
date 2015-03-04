'use strict';

angular.module('succulentsOfTheSouthApp')
  .controller('AdministratorCtrl', function ($scope, $firebase) {
  	var firebaseURL = new Firebase("https://boiling-heat-2151.firebaseio.com/users");
    var sync = $firebase(firebaseURL);

    $scope.allUsers = sync.$asArray();

    $scope.removeUser = function(id) {
  		var itemRef = new Firebase(firebaseURL + '/' + id);
  		itemRef.remove();
  	}

    //$scope.highchartsNG = {"options":{"chart":{"type":"areaspline"},"plotOptions":{"series":{"stacking":""}}},"series":[{"name":"Some data","data":[1,2,4,7,3],"id":"series-0"},{"name":"Some data 3","data":[3,1,null,5,2],"connectNulls":true,"id":"series-1"},{"name":"Some data 2","data":[5,2,2,3,5],"type":"column","id":"series-2"},{"name":"My Super Column","data":[1,1,2,3,2],"type":"column","id":"series-3"}],"title":{"text":"Revenue"},"credits":{"enabled":true},"loading":false,"size":{}}
  });