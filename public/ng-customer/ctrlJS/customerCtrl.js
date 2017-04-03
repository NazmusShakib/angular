myApp.controller('customerCtrl', ['$scope', '$interval', '$http', '$location', '$timeout', '$routeParams', 'customerModel',
    function ($scope, $interval, $http, $location, $timeout, $routeParams, customerModel) {
        // Get all the customers
        /*customerModel.getAllCustomers().then(function (response) {
            $timeout(function () {
                $scope.customers = response.data;
                $scope.showCustomers = true;
            }, 500);
        });
*/
        $scope.customers = [];
        $scope.totalPages = 0;
        $scope.currentPage = 1;
        $scope.range = [];

        customerModel.getAllCustomers().then(function (response) {
            console.log(response.data.last_page);
            $scope.customers    = response.data.data;
            $scope.totalPages   = response.data.last_page;
            $scope.currentPage  = response.data.current_page;
            $scope.showCustomers = true;

            // Pagination Range
            var pages = [];
            for(var i=1; i<=response.data.last_page; i++) {
                pages.push(i);
            }
            $scope.range = pages;
        });

        // IF the param is present, load the single Gallery data.
        if ($routeParams.id) {
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
            var method = "POST";
            var status_message = "Customer added successfully.";
            if (modalstate === 'edit') {
                url += "/" + id;
                method = "PUT";
                status_message = "Changes saved to the server.";
            }
            $http({
                method: method,
                url: url,
                data: $.param($scope.customer),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(response) {
                $('#myModal').modal('hide');
                $scope.getall(status_message);
                console.log(response);
            }, function errorCallback(data, status, headers) {
                console.log(data, status, headers);
                alert(data);
            });
        };

        // delete supplier record
        $scope.confirmDelete = function (id) {
            var isConfirmDelete = confirm('Are you sure you want this record?');
            if (isConfirmDelete) {
                $http({
                    method: 'DELETE',
                    url: baseUrl + 'customer/' + id
                }).then(function successCallback(response) {
                    $scope.getall('Customer Deleted :)');
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

        // Get all customer after doing any event
        $scope.getall = function (success_message) {
            console.log(success_message);
            customerModel.getAllCustomers().then(function (response) {
                $timeout(function () {
                    $scope.customers = response.data;
                    $scope.success_message = success_message;
                    $scope.showCustomers = true;
                    $scope.flashMessage = true;
                }, 200);
            });

            $scope.clearFlashMessage();
        };

        // clearFlashMessage
        $scope.clearFlashMessage = function () {
            $interval(function () {
                console.log('PP');
                $scope.flashMessage = false;
            }, 5000);
        };

        $scope.ToggleSelectAll = function () {
            $scope.selectAll = !$scope.selectAll;

            angular.forEach(
                $scope.customerIDs, function (item) {
                    item.selected = $scope.selectAll;
                });
        };

        $scope.DeleteSelected = function () {

            console.log($scope.da);


            var selectedIDs = new Array();
            angular.forEach ($scope.customer, function (item) {
                if(item.selected)
                {
                    selectedIDs.push(item.customer);
                }
            });

            console.log(selectedIDs);

            /*var promise = $http.post
            ("/home/delete", selectedIDs);
            promise.success(function (msg) {
                alert(msg);
            }).error(function () {
                alert("Error");
            });*/
        }

    }
]);