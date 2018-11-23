/**
 * Created by Cleber Rezende on 21/11/2018.
 */

'use strict'

const connectionString = require('./../../../config/database/coneccao.js');
const { Pool } = require('pg')
const pg = new Pool({ connectionString: connectionString });

module.exports = {
    inserirCliente
};

function inserirCliente(params, callback) {
    let row;
    pg.query("SELECT * FROM PUBLIC.INSERIRCLIENTE($1, $2);",
        [
            params.usuario,
            params.senha
        ], (err, data) => {
            if (err) {
                err = {
                    httpCode: 500,
                    message: `Erro ao inserir cliente: ERROR (' ${err.message} ')`
                };
            }
            else if (data.rows.length == 0) {
                var err = {
                    httpCode: 403,
                    message: `Usuário ou senha inválido`,
                };
            }
            if (!err) {
                row = data.rows;
            }
            callback(err, (err ? err.httpCode : 200), row);
        }
    )
}

/*
async function listarCliente(params) {
    const res = await pg.query("SELECT * FROM PUBLIC.LISTARPRODUTO($1);",
        [
            params.idProduto
        ]
    );

    var result = res.rows;
    return result;
}

async function excluirCliente(params) {
    const res = await pg.query("SELECT * FROM PUBLIC.EXCLUIRPRODUTO($1, $2);",
        [
            params.idAlteracao,
            params.idProduto
        ]
    );
    var result = res.rows[0].excluirproduto;
    return result;
}

async function alterarCliente(params) {
    const res = await pg.query("SELECT * FROM PUBLIC.ALTERARPRODUTO($1, $2, $3, $4, $5, $6, $7);",
        [
            params.idAlteracao,
            params.idProduto,
            params.descricao,
            params.codigoProduto,
            params.valorVenda,
            params.quantidade,
            params.ativo
        ]
    );

    var result = res.rows[0].alterarproduto;
    return result;
}

*/