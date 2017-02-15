myApp.controller('galleryController', ['$scope', '$location', 'galleryModel', '$timeout', '$routeParams',
    function ($scope, $location, galleryModel, $timeout, $routeParams) {

    // Get all the galleries
        galleryModel.getAllGalleries().then(function (response) {
            $timeout(function () {
                $scope.galleries = response.data;
                $scope.showGalleries = true;
            }, 500);
        });

        // IF the param is present, load the single Gallery data.
        if($routeParams.id) {
            galleryModel.getGalleryById($routeParams.id).then(function (response) {
                $scope.singleGallery = response.data;
                console.log($scope.singleGallery);
            });
        }

        //Variables
        angular.extend($scope, {
            newGallery: {},
            errorDiv: false,
            errorMessages: [],
            singleGallery: {},
            dropzoneConfig: {
                'options': { // passed into the Dropzone constructor
                    'url': baseUrl + 'file-upload'
                },
                'eventHandlers': {
                    'sending': function (file, xhr, formData) {
                        console.log('Sending');
                        formData.append('_token', csrfToken);
                        formData.append('galleryId', $routeParams.id);
                    },
                    'success': function (file, response) {
                        console.log('Success');
                        console.log(response);
                    }
                }
            }
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
                    });
                } else {
                    $scope.formSubmitted = true;
                    console.log('Error');
                }
            },
            viewGallery: function (id) {
                $location.path('/gallery/view/' + id);
            }
        });
    }
]);