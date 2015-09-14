'use strict';

angular.module('myApp.asset', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/asset', {
    templateUrl: 'asset/asset.html',
    controller: 'AssetCtrl'
  });
}])

.controller('AssetCtrl', [function() {

}]);