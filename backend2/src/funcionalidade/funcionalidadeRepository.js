

module.exports = {
    listarFuncionalidade
};

function listarFuncionalidade(params, transaction, callback) {

    new sql.Request(transaction)
        .input('idempresa', params.idUsuario)
        .execute('LISTAR_EMPRESA', (err, recordset) => {
            if (err) {
                console.log(err)
                callback(500, { informacao: 'Erro Ao Criar Novo Condominio' });
            }
            else {
                callback(null, { informacao: 'Condominio Criado Com Sucesso' });
            }
        });
}