const PedidoCtrl = require('./../core/pedido/pedidoController');

module.exports = function (app) {
    app.route('/pedido/:idCliente/:idStatusPedido')
        .post(PedidoCtrl.inserirPedido);

    app.route('/listar-pedido/')
        .get(PedidoCtrl.listarPedido);    
        
    app.route('/alterar-pedido/:idPedido/:idStatusPedido')
        .put(PedidoCtrl.alterarPedido);

};