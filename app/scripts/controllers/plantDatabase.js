'use strict';

angular.module('suculentsOfTheSouthApp')
  .controller('PlantDatabaseCtrl', function ($scope, $firebase, $location) {
  	var firebaseURL = new Firebase("https://boiling-heat-2151.firebaseio.com/plants");
    var sync = $firebase(firebaseURL);

    $scope.plants = sync.$asArray();

  	$scope.addPlant = function(genus, gps) {
  		console.log(genus, gps);
  	}
  });
