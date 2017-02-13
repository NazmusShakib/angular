myApp.factory('userModel', ['$http', function ($http) {
    var userModel = {};
    userModel.doLogin = function(data) {
        return $http({
            headers: {
                'Content-Type': 'application/json'
            },
            url: baseUrl + 'auth',
            method: 'POST',
            data: {
                email: data.email,
                password: data.password
            }
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(data, status, headers) {
            console.log(data, status, headers);
            alert(data);
        });
    };
    return userModel;
}]);