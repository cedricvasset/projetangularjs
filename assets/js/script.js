var app = angular.module('fonction', ['ngRoute']);
app.run(function($rootScope){
  $rootScope.basketList=[];
});
app.controller('onectrl', function($scope, $http) {
  $http.get('content.json').then(function(json){
    $scope.products = json.data;
    $scope.showModal = function() {
      $(".modal").modal("show");
    }
  });
});
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/one', {
    templateUrl: 'productviewone.html',
  })
  .when('/db', {
    templateUrl: 'produtviewdb.html',
  })
  .when('/aot', {
    templateUrl: 'productviewaot.html',
  })
  .when('/home', {
    templateUrl:'productviewhome.html'
  })
  .when('/modal/:id', {
    templateUrl:'modalview.html',
    controller: 'ciblectrl'
  });
}]);
app.controller('basketctrl', function($scope, $rootScope){
  $scope.send = function(item){
    /*on envoi les données des inputs dans les tableaux correspondants*/
    $rootScope.basketList.push(item.name);
    $rootScope.basketList.push(item.ref);
    $rootScope.basketList.push(item.price);
  };
});
app.controller('ciblectrl', function($scope, $rootScope, $routeParams) {
  /*on récupère (name,mail etc..)dans la liste correspondante.
  la liste est composée d'un id unique avec 4 éléments*/
  item.name = $rootScope.basketList[$scope.id];

});
