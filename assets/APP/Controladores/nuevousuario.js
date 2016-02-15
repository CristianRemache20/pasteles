applicacion.controller('nuevousuariocontroller',['$scope','toastr','UsuarioFactory',function($scope,toastr,UsuarioFactory){
    console.log('Entraste a Nuevo Usuario');
    
    toastr.info('Entraste a la pantalla Nuevo Usuario','INFORMACIÓN');
    
    
    $scope.agregarNuevoUsuario = function(){
       UsuarioFactory.save({
            nombre: $scope.nuevoUsuario.nombre,
            apellido: $scope.nuevoUsuario.apellido,
            edad:$scope.nuevoUsuario.edad,
            correo:$scope.nuevoUsuario.correo,
            ciudad:$scope.nuevoUsuario.ciudad,
            foto:$scope.nuevoUsuario.foto,
        }).$promise.then(
            function correctoLlamoUsuario(respuesta){
            console.log(respuesta);
                //esta linea no se usa en factory
                //$scope.entrenadores.push(respuesta.data);
               
            $scope.nuevoUsuario = {
                            nombre:'',
                            apellido:'',
                            edad:'',
                            correo:'',
                            ciudad:'',
                            foto:'',
                               
            }
            },
                
            function errorNoLlamoUsuario(error){
            console.log(error);
            }
            )
   }
    
}]);