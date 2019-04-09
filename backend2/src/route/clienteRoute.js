const ClienteController = require('../cliente/ClienteController');

module.exports = function (app) {
    app.route('/cliente/:idCliente')
        .get(ClienteController.listarCliente);

    app.route('/cliente/')
        .get(ClienteController.listarCliente);
    // .post(ColaboradorCtrl.inserirColaborador);

    //     app.route('/api/colaborador/:id')
    //         .get(ColaboradorCtrl.listarColaborador);

    //     app.route('/api/colaborador/:idalteracao/:idcolaborador')
    //         .delete(ColaboradorCtrl.excluirColaborador)
    //         .put(ColaboradorCtrl.alterarColaborador);
}