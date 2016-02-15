applicacion.controller('pastelcontroller',['$scope','$stateParams','UsuarioFactory','PastelFactory',function($scope, $stateParams, UsuarioFactory,PastelFactory){
    
    
    console.log('Parametro Id Usuario');
    console.log($stateParams.idUsuario);
    
    
    
    $scope.parametroIdUsuario = $stateParams.idUsuario;
    
         
    PastelFactory.busquedaPorIdUsuario(
    {
        idUsuario:$stateParams.idUsuario
        }).$promise.then(
    function success(respuesta)
    {
        $scope.pastel= respuesta;
        console.log('Estos son los pasteles');
        console.log(respuesta);
    },
    function error(error){
        console.log(error);
        });
    
    
    
    $scope.existeUsuario = false;
    
    UsuarioFactory.get({
        id:$stateParams.idUsuario
    }).$promise.then(
        function success(respuesta)
        {
            $scope.existeUsuario = true;
            $scope.Usuario = respuesta; 
            console.log($scope.Usuario);
        },
        function error(error)
        {
            $scope.existeUsuario = false;
            $scope.error = "No existe ese usuario";
        });
    
    $scope.agregarNuevoPastel = function(){
       PastelFactory.save({
            nombre: $scope.nuevoPastel.nombre,
            apellido: $scope.nuevoPastel.tipo,
            foto:$scope.nuevoPastel.foto,
            preparacion:$scope.nuevoPastel.preparacion,
            idUsuario:$scope.Usuario.id,
        }).$promise.then(
            function correctoLlamoPastel(respuesta){
            console.log(respuesta);
                //esta linea no se usa en factory
                //$scope.entrenadores.push(respuesta.data);
            $scope.nuevoPastel = {
                            nombre:'',
                            tipo:'',
                            foto:'',
                            preparacion:'',
                            idUsuario:'',
                               
            }
            },
                
            function errorNoLlamoPastel(error){
            console.log(error);
            }
            )
   }
    
  
    
}]);