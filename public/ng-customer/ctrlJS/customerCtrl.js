myApp.controller('customerCtrl', ['$scope', '$http', '$location', '$timeout', '$routeParams', 'customerModel',
    function ($scope, $http, $location, $timeout, $routeParams, customerModel) {
        // Get all the customers
        customerModel.getAllCustomers().then(function (response) {
            $timeout(function () {
                $scope.customers = response.data;
                $scope.showCustomers = true;
            }, 500);
        });


        // IF the param is present, load the single Gallery data.
        if($routeParams.id) {
            customerModel.getCustomerById($routeParams.id).then(function (response) {
                $scope.singleGallery = response.data;
                console.log($scope.singleGallery);
            });
        }

        //Functions
        angular.extend($scope, {
            saveNewGallery: function (addGalleryForm) {
                console.log(addGalleryForm);
                if (addGalleryForm.$valid) {
                    $scope.formSubmitted = false;
                    //console.log('Correct');
                    galleryModel.saveGallery($scope.newGallery).then(function (response) {
                        $location.path('customer/view');
                    });
                } else {
                    $scope.formSubmitted = true;
                    console.log('Error');
                }
            },
            viewCustomer: function (id) {
                $location.path('/customer/view/' + id);
            }
        });

        // show modal Form
        $scope.toggle = function (modalstate, id) {
            $scope.modalstate = modalstate;
            switch (modalstate) {
                case 'add':
                    $scope.form_title = "Add New Customer";
                    break;
                case 'edit':
                    $scope.form_title = "Customer Detail";
                    $scope.id = id;
                    $http.get(baseUrl + 'customer/' + id).then(function (response) {
                        console.log(response.data);
                        $scope.customer = response.data;
                    });
                    break;
                default:
                    break;
            }
            console.log(id);
            $('#myModal').modal('show');
        };

        // save new supplier and update existing supplier
        $scope.save = function (modalstate, id) {
            var url = baseUrl + "customer";
            if (modalstate === 'edit') {
                url += "/" + id;
            }
            $http({
                method: 'POST',
                url: url,
                data: $.param($scope.customer),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(response) {
                $('#myModal').modal('hide');
                $location.path('/');
                console.log(response);
            }, function errorCallback(data, status, headers) {
                console.log(data, status, headers);
                alert(data);
            });
        }

        // delete supplier record
        $scope.confirmDelete = function (id) {
            var isConfirmDelete = confirm('Are you sure you want this record?');
            if (isConfirmDelete) {
                $http({
                    method: 'DELETE',
                    url: baseUrl + 'customer/' + id
                }).then(function successCallback(response) {
                    $scope.getall();
                    console.log(response);
                }, function errorCallback(data, status, headers) {
                    console.log(data, status, headers);
                    alert(data);
                });
            } else {
                return false;
            }
        };

        // Refresh page

        angular.extend($scope, {
            getCustomers: function () {
                $http({
                    method: 'GET',
                    url: baseUrl
                }).then(function (responseSuccess) {
                    $scope.success_message = "Customer Deleted :)";
                    $scope.customer = responseSuccess.data;
                }, function (responseError) {
                    $scope.danger_message = "Failed to delete :(";
                    $scope.error = responseError;
                });
            }
        });



        $scope.getall = function () {
            customerModel.getAllCustomers().then(function (response) {
                $timeout(function () {
                    $scope.customers = response.data;
                    $scope.showCustomers = true;
                    $scope.flashMessage = true;
                }, 200);
            });
        }
    }
]);