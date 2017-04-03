var app =  angular.module('main-App',['ngRoute','angularUtils.directives.dirPagination']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'items/templates/home.html',
                controller: 'AdminController'
            }).
            when('/items', {
                templateUrl: 'items/templates/items.html',
                controller: 'ItemController'
            });
}]);