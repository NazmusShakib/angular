myApp.controller('navController', ['$scope', '$location', 'userModel', function ($scope, $location, userModel) {
    // Variables
    angular.extend($scope, {
       user: userModel.getUserObject(),
       navUrl: [{
           link: 'Home',
           url: '/dashboard',
           subMenu: [{
               link: 'View Gallery',
               url: '/gallery/view'
           }, {
               link: 'Add Gallery',
               url: '/gallery/add'
           }]
       }, {
           link: 'Test',
           url: '/dashboard'
       }, {
           link: 'Test2',
           url: '/dashboard'
       }]
    });

    //Methods
   angular.extend($scope, {
        doLogout: function () {
            userModel.doUserLogout();
            $location.path('/');
        }
    });
}]);