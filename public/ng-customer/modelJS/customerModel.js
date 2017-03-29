myApp.factory('customerModel', ['$http', function ($http) {
    return {
        saveCustomer: function (customerData) {
            return $http({
                headers: {
                    'Content-type': 'application/json'
                },
                url: baseUrl + 'customer',
                method: 'POST',
                data: {
                    name: customerData.name
                }
            });
        },
        getAllCustomers: function () {
            return $http.get(baseUrl + 'customer');
        },
        getCustomerById: function (id) {
            return $http.get(baseUrl + 'customer/' + id);
        }
    };
}]);