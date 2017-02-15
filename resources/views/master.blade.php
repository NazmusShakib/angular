<!doctype html>
<html ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/bootstrap-lumen.min.css')}}">
    <link rel="stylesheet" href="{{asset('bower_components/dropzone/dist/basic.css')}}">
    <link rel="stylesheet" href="{{asset('bower_components/dropzone/dist/dropzone.css')}}">
    <link rel="stylesheet" href="{{asset('css/bootstrap-lumen.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <script>var baseUrl = "{{ url('/') }}/"</script>
    <script>var csrfToken = "{{ csrf_token() }}"</script>
</head>
<body >

<div class="container" ng-controller="globalController">

        <div ng-view></div>

</div>

{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>--}}

<script type="text/javascript" src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/dropzone/dist/dropzone.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>


<script src="{{asset('bower_components/angular/angular.min.js')}}"></script>
<script src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
<script src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
{{--My app code is from here.--}}
<script src="{{asset('app/js/app.js')}}"></script>
<script src="{{asset('app/js/modelJS/userModel.js')}}"></script>
<script src="{{asset('app/js/controllerJS/userController.js')}}"></script>
<script src="{{asset('app/js/controllerJS/globalController.js')}}"></script>
<script src="{{asset('app/js/controllerJS/navController.js')}}"></script>
{{--Gallery angular Files--}}
<script src="{{asset('app/js/modelJS/galleryModel.js')}}"></script>
<script src="{{asset('app/js/controllerJS/galleryController.js')}}"></script>

</body>
</html>