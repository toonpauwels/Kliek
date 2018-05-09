angular.module('Kliek', [
  'ngRoute',
  'mobile-angular-ui',
  'Kliek.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});