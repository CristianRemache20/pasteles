var applicacion = angular.module('app', ['ui.router','ngAnimate','ngResource','toastr']);

applicacion.config(function ($stateProvider, $urlRouterProvider) {


    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
    $urlRouterProvider.otherwise("/home");
    //
    // VISTAS DE NUESTRA APLICACION
    $stateProvider
        .state('home', {
            url: "/home",
            views: {
                "home": {
                    templateUrl: "/APP/Rutas/home.html",
                    controller: 'homecontroller',
                }
            }
        })
        .state('nuevousuario', {
            url: "/nuevousuario",
            templateUrl: "/APP/Rutas/nuevousuario.html",
            controller: 'nuevousuariocontroller'
        })
        .state('pastel', {
            url: "/pastel/:idUsuario",
            templateUrl: "/APP/Rutas/pastel.html",
            controller: 'pastelcontroller'
        })
    
        .state('ingrediente', {
            url: "/ingrediente/:idPastel",
            templateUrl: "/APP/Rutas/ingrediente.html",
            controller: 'ingredientecontroller'
        });


});