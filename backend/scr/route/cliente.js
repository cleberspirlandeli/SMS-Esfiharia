const ClienteCtrl = require('./../core/cliente/clienteController');

module.exports = function (app) {
    app.route('/cliente/')
        .get(ClienteCtrl.listarCliente)
        .post(ClienteCtrl.inserirCliente);

    app.route('/cliente/:idCliente')
        .get(ClienteCtrl.listarCliente)
        .delete(ClienteCtrl.excluirCliente)
        .put(ClienteCtrl.alterarCliente);
};