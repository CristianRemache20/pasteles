/**
* Pastel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

      nombre:{
        type:'text'
      },
      tipo:{
        type:'text',
        enum:['hojaldre', 'azucarada', 'escaldadas','reposteria']
      },
      foto:{
        type:'text',
          defaultsTo:'postre.jpg'
      },
      preparacion:{
        type:'text'
      },
      idUsuario:{
        model:'Usuario'
      },
      ingredientes:{
        collection:'Ingrediente',
        via:'idPastel'
      }
  }
};

