applicacion.factory('UsuarioFactory',['$resource',function($resource){
    
    var factory =$resource('http://localhost:1337/Usuario/:idUsuario',{
        idUsuario:'@idUsuario'
    },
    {
        actualizar:
        {
            method:'PUT',
            params:{
                idUsuario:'@idUsuario'
            }
        }
    });
    
    return factory;

}]);

applicacion.factory('PastelFactory',['$resource',function($resource){
    var factory = $resource(
        'http://localhost:1337/Pastel/:idPastel',
    {
        idPastel:'@idPastel'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idPastel:'@idPastel'
                }
            },
         busquedaPorIdUsuario: 
            {
                url:'http://localhost:1337/Pastel?idUsuario=:idUsuario',
                method:'GET', 
                params:{
                    idUsuario:'@idUsuario'
                },
                isArray:true
            }
         });
    return factory;
}]);

applicacion.factory('IngredienteFactory',['$resource',function($resource){
    var factory = $resource(
        'http://localhost:1337/Ingrediente/:idIngrediente',
    {
        idIngrediente:'@idIngrediente'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idIngrediente:'@idIngrediente'
                }
            },
         busquedaPorIdPastel: 
            {
                url:'http://localhost:1337/Ingrediente?idPastel=:idPastel',
                method:'GET', 
                params:{
                    idPastel:'@idPastel'
                },
                isArray:true
            }
         });
    return factory;
}]);
