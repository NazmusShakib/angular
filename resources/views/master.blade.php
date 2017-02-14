<!doctype html>
<html ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
    <script>var baseUrl = "{{ url('/') }}/"</script>
</head>
<body >

<div class="container" ng-controller="globalController">

        <div ng-view></div>

</div>


<script src="{{asset('bower_components/angular/angular.min.js')}}"></script>
<script src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
<script src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
{{--My app code is from here.--}}
<script src="{{asset('app/js/app.js')}}"></script>
<script src="{{asset('app/js/modelJS/userModel.js')}}"></script>
<script src="{{asset('app/js/controllerJS/userController.js')}}"></script>
<script src="{{asset('app/js/controllerJS/globalController.js')}}"></script>
<script src="{{asset('app/js/controllerJS/navController.js')}}"></script>

</body>
</html>