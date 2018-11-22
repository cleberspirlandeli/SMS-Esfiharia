const ClienteCtrl = require('./../core/cliente/clienteController');

module.exports = function (app) {
    app.route('/cliente/')
        .post(ClienteCtrl.inserirCliente);
  
};