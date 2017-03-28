myApp.controller('ctrl1', ['$scope', 'model1', '$cookies', function ($scope, model1, $cookies) {
    angular.extend($scope, {
        doLogin: function (loginForm) {
            var data = {
                email: $scope.login.username,
                password: $scope.login.password
            };
            model1.doLogin(data).then(function () {
                console.log("Successfully logedin.");
            })
        }
    });
}]);