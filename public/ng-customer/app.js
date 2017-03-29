var myApp = angular.module('myCustomer', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'ng-customer/templates/customers.html',
            controller: 'customerCtrl'
        });

        $routeProvider.otherwise('/dashboard');
    }]);