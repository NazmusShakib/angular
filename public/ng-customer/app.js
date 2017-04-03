var myApp = angular.module('myCustomer', ['ngRoute', 'ngAnimate', 'ngResource']
    /*,function($interpolateProvider) {
     $interpolateProvider.startSymbol('[[');
     $interpolateProvider.endSymbol(']]');
     }*/
);

myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'ng-customer/templates/customers.html',
            controller: 'customerCtrl'
        });

        $routeProvider.otherwise('/dashboard');
    }]);


myApp.directive('postsPagination', function () {
    return {
        restrict: 'E',
        template: '<ul class="pagination">' +
        '<li ng-show="currentPage != 1"><a href="javascript:void(0)" ng-click="getCustomers(1)">&laquo;</a></li>' +
        '<li ng-show="currentPage != 1"><a href="javascript:void(0)" ng-click="getCustomers(currentPage-1)">&lsaquo; Prev</a></li>' +
        '<li ng-repeat="i in range" ng-class="{active : currentPage == i}">' +
        '<a href="javascript:void(0)" ng-click="getCustomers(i)">{{i}}</a>' +
        '</li>' +
        '<li ng-show="currentPage != totalPages"><a href="javascript:void(0)" ng-click="getCustomers(currentPage+1)">Next &rsaquo;</a></li>' +
        '<li ng-show="currentPage != totalPages"><a href="javascript:void(0)" ng-click="getCustomers(totalPages)">&raquo;</a></li>' +
        '</ul>'
    };
});