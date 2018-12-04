const ClienteCtrl = require('./../core/cliente/clienteController');
const AuthCtrl = require('./../authentication/authentication');


module.exports = function (app) {
    app.route('/cliente/')
        .get(AuthCtrl.authorize, ClienteCtrl.listarCliente)
        .post(ClienteCtrl.inserirCliente);

    app.route('/cliente/:idCliente')
        .get(ClienteCtrl.listarCliente)
        .delete(ClienteCtrl.excluirCliente)
        .put(ClienteCtrl.alterarCliente);
};