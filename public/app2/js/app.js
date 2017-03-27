var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates2/dashboard.html',
            controller: 'ctrl1'
        });

        $routeProvider.when('/page-2', {
            templateUrl: '/templates2/page-2.html',
            controller: 'ctrl1'
        });

        $routeProvider.when('/login-2', {
            templateUrl: '/templates2/login.html',
            controller: 'ctrl1'
        });

        $routeProvider.otherwise('/dashboard');
    }]);
