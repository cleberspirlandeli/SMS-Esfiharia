// você criou as funções/metodos que estão no src/cliente/clienteController.js
// agora você precisa importar essas funções/metodos aqui nesse arquivo
const ClienteController = require('../cliente/ClienteController');

module.exports = function (app) {
    // SELECT 1 cliente
    // Selecionar somente um cliente passando o ID por parametro
    // Você precisa receber esse paramentro no req.params.idCliente
    app.route('/cliente/:idCliente')
        .get(ClienteController.listarCliente);

    // SELECT TODOS clientes    
    // Selecionar todos os clientes    
    app.route('/cliente/')
        .get(ClienteController.listarCliente);
    
    // INSERT
    //Inserir um cliente    
    //Você recebe as variaveis por req.body.NOME_DA_VARIAVEL
    app.route('/cliente/')
        .post(ClienteController.inserirCliente);

    // UPDATE    
    // Para fazer o UPDATE você precisa receber as variáveis por 2 lugares
    // Recebe o ID por req.params.idCliente
    // As outras informações recebe por req.body.NOME_DA_VARIAVEL 
    app.route('/cliente/:idCliente')
         .put(ClienteController.listarColaborador);


    // REMOVE
    // Para remover o cliente recebe o ID por req.params.idCliente
    app.route('/cliente/:idCliente')
        .delete(ClienteController.removerCliente);
}