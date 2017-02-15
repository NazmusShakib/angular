myApp.controller('galleryController', ['$scope', '$location', 'galleryModel', '$timeout',
    function ($scope, $location, galleryModel, $timeout) {

    // Get all the galleries
        galleryModel.getAllGalleries().then(function (response) {
            /*$timeout(function () {
                $scope.galleries = response.data;
                $scope.showGalleries = true;
            }, 1000);*/
            $scope.galleries = response.data;
            $scope.showGalleries = true;

        });

        //Variables
        angular.extend($scope, {
           newGallery: {},
            errorDiv: false,
            errorMessages: []
        });

        //Functions
        angular.extend($scope, {
            saveNewGallery: function (addGalleryForm) {
                console.log(addGalleryForm);
                if (addGalleryForm.$valid) {
                    $scope.formSubmitted = false;
                    //console.log('Correct');
                    galleryModel.saveGallery($scope.newGallery).then(function (response) {
                        $location.path('gallery/view');
                    })
                } else {
                    $scope.formSubmitted = true;
                    console.log('Error');
                }
            }
        });
    }
]);