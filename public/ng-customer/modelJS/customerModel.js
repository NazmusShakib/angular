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
        getAllCustomers: function (pageNumber) {
            if(pageNumber === undefined){
                pageNumber = '1';
            }
            return $http.get(baseUrl + 'customer?page=' + pageNumber);
        },
        getCustomerById: function (id) {
            return $http.get(baseUrl + 'customer/' + id);
        }
    };
}]);