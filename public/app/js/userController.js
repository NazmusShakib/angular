myApp.controller('userController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    angular.extend($scope, {
        doLogin: function(loginForm) {
            $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                url: baseUrl + 'auth',
                data: {
                    email: $scope.login.username,
                    password: $scope.login.password
                },
            }).then(function successCallback(response) {
                console.log(response);
                $location.path('/dashboard');
            }, function errorCallback(data, status, headers) {
                console.log(data, status, headers);
                alert('login error.');
            });
        }
    });
}]);