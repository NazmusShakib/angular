myApp.factory('userModel', ['$http', '$cookies', function ($http, $cookies) {
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
            $cookies.put('auth', JSON.stringify(response));
        }, function errorCallback(data, status, headers) {
            console.log(data, status, headers);
            alert(data);
        });
    };

    userModel.getAuthStatus = function () {
        var status = $cookies.get('auth');
        if (status) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Get the user object converted from string to JSON
     * @returns {user object}
     */

    userModel.getUserObject = function() {
        var userObj = angular.fromJson($cookies.get('auth'));
        return userObj;
    };

    userModel.doUserLogout = function () {
      $cookies.remove('auth');
    };

    return userModel;
}]);