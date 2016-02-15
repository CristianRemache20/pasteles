applicacion.controller('homecontroller',['$scope','toastr', '$http',function($scope,toastr, $http){
    console.log('Entraste a Home');
    
    toastr.info('Entraste a la Pantalla Home','INFORMACIÓN');
    
    $http({
        method:'GET',
        url: 'http://localhost:1337/Usuario/'
    }).then(
        function correctoLlamoUsuario(respuesta){
            console.log(respuesta);
            $scope.Usuario=respuesta.data;
            console.log($scope.Usuario);
        
        },
        function errorNoLlamoUsuario(error){
            console.log(error);
        
        });
    
    $scope.editarUsuario = function(Usuario, indice){
        console.log(Usuario);
        console.log(indice);
        
                
        $http({
        method:'PUT',
        url: 'http://localhost:1337/Usuario/'+Usuario.id, 
            data:{
        nombre:Usuario.nombre,
        apellido:Usuario.apellido,
        edad:Usuario.edad,
        correo:Usuario.correo,
        ciudad:Usuario.ciudad,
        foto:Usuario.foto,
        
        }
    }).then(
        function correctoLlamoEntrenadores(respuesta){
            console.log(respuesta);
        },
        function errorNoLlamoEntrenadores(error){
            console.log(error);
        
        });
        
    };
    
    
    
    
    
    
    
    
}]);

