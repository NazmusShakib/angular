<!doctype html>
<html ng-app="myCustomer">
<head>
    <meta charset="UTF-8">
    <title>Customer</title>
    <link rel="stylesheet" href="{{asset('css/bootstrap-lumen.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <script>var baseUrl = "{{ url('/') }}/"</script>
    <script>var csrfToken = "{{ csrf_token() }}"</script>
</head>
<body >

<div class="container">

    <div ng-view></div>

</div>

{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>--}}

<script type="text/javascript" src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
<script type="text/javascript" src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>


<script src="{{asset('bower_components/angular/angular.min.js')}}"></script>
<script src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
<script src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
{{--My app code is from here.--}}
<script src="{{asset('ng-customer/app.js')}}"></script>
<script src="{{asset('ng-customer/ctrlJS/customerCtrl.js')}}"></script>
<script src="{{asset('ng-customer/modelJS/customerModel.js')}}"></script>

</body>
</html>