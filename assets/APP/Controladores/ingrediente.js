applicacion.controller('ingredientecontroller',['$scope','$stateParams','IngredienteFactory','PastelFactory', 'UsuarioFactory',function($scope, $stateParams, IngredienteFactory,PastelFactory, UsuarioFactory){


console.log('Parametro Id Pastel');
    console.log($stateParams.idPastel);
    
    
    
    $scope.parametroIdPastel = $stateParams.idPastel;
    
         
    IngredienteFactory.busquedaPorIdPastel(
    {
        idPastel:$stateParams.idPastel
        }).$promise.then(
    function success(respuesta)
    {//ojo
        $scope.ingrediente= respuesta;
        console.log('Estos son los ingredientes');
        console.log(respuesta);
    },
    function error(error){
        console.log(error);
        });
    
    
    
    $scope.existePastel = false;
    
    PastelFactory.get({
        id:$stateParams.idPastel
    }).$promise.then(
        function success(respuesta)
        {
            $scope.existePastel = true;
            $scope.Pastel = respuesta; 
            console.log($scope.Pastel);
        },
        function error(error)
        {
            $scope.existePastel = false;
            $scope.error = "No existe ese pastel";
        });
    
    $scope.agregarNuevoIngrediente = function(){
       IngredienteFactory.save({
            nombre: $scope.nuevoIngrediente.nombre,
            idPastel:$scope.Pastel.id,
        }).$promise.then(
            function correctoLlamoIngrediente(respuesta){
            console.log(respuesta);
                //esta linea no se usa en factory
                //$scope.entrenadores.push(respuesta.data);
               
            $scope.nuevoIngrediente = {
                            nombre:'',
                            idPastel:'',
                                                          
            }
            },
                
            function errorNoLlamoIngrediente(error){
            console.log(error);
            }
            )
   }
    
    
    
    }]);