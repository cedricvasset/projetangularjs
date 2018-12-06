var app = angular.module('fonction', ['ngRoute']);
app.run(function($rootScope){
  $rootScope.nameList=[];
});
app.controller('onectrl', function($scope, $http){
  $http.get('content.json').then(function(json){
    $scope.products = json.data;
    $scope.showModal = function() {
      $('.modal').modal('show');
    }
  });
});
app.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/home',{
    templateUrl: 'partials/productviewhome.html'
  })
  .when('/productview', {
    templateUrl: 'partials/productviewone.html',
  })
  .when('/db',{
    templateUrl: 'partials/productviewdb.html',
  })
  .when('/aot',{
    templateUrl: 'partials/productviewaot.html',
  });

}]);
app.controller('basketctrl', function($scope, $rootScope){
  $scope.send = function(item){
    $rootScope.nameList.push(item.name);
    $rootScope.nameList.push(item.price);
    $rootScope.nameList.push(item.ref);
  };
});
app.controller('resultatcontrol', function ($scope, $rootScope, $routeParams){
  $scope.id = $routeParams.id;
  $scope.name = $rootScope.nameList[$scope.id];
  $scope.price = $rootScope.priceList[$scope.id];
  $scope.ref = $rootScope.refList[$scope.id];
});
