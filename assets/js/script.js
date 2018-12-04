var app = angular.module('fonction', []);
app.controller('onectrl', function($scope, $http) {
  $http.get('content.json').then(function(json){
    $scope.products = json.data;
  });
});
