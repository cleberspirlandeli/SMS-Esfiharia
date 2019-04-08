const FuncionalidadeCtrl = require('./../funcionalidade/funcionalidadeController');

module.exports = function (app) {

    app.route('/api/funcionalidade/:idUsuario')
        .get(FuncionalidadeCtrl.listarFuncionalidade);
        // .post(ColaboradorCtrl.inserirColaborador);

//     app.route('/api/colaborador/:id')
//         .get(ColaboradorCtrl.listarColaborador);

//     app.route('/api/colaborador/:idalteracao/:idcolaborador')
//         .delete(ColaboradorCtrl.excluirColaborador)
//         .put(ColaboradorCtrl.alterarColaborador);
}