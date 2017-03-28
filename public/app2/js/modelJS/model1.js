myApp.factory('model1', ['$http', '$cookies', function ($http, $cookies) {
    var model1 = {};
    model1.doLogin = function(data) {
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
            console.log(response.data);
            $cookies.put('auth', JSON.stringify(response.data));
        }, function errorCallback(data, status, headers) {
            console.log(data, status, headers);
            alert(data.data);
        });
    };
    return model1;
}]);