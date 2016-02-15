/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

      nombre:{
        type:'text'
      },
      apellido:{
        type:'text'
      },
      edad:{
        type:'integer'      
      },
      correo:{
        type:'text'
      },
      ciudad:{
        type:'text'
      },
      foto:{
        type:'text',
          defaultsTo:'imagen.jpg'
      },
      pasteles:{
        collection:'Pastel',
        via:'idUsuario'          
      }
  }
};

