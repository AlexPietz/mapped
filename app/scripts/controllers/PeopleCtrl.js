var app = angular.module('app', []);
app.controller('PeopleCtrl', function($scope, $http) {

    $scope.loadPeople = function() {
  $http.get('data.json').success(function(data) {
       $scope.people = data;
   });

        window.alert("sometext");
    };

});