myApp.controller('ctrl1', ['$scope', '$http', function ($scope, $http) {
    angular.extend($scope, {
        doLogin: function (loginForm) {
            $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'auth',
                method: 'POST',
                data: {
                    email: $scope.login.username,
                    password: $scope.login.password
                }
            }).then(function successCallback(response) {
                console.log(response);
                $cookies.put('auth', JSON.stringify(response.data));
            }, function errorCallback(data, status, headers) {
                console.log(data, status, headers);
                alert(data);
            });
        }
    });
}]);