/**
 * Created by Cleber Rezende on 25/11/2018.
 */

'use strict'

const connectionString = require('./../../../config/database/coneccao.js');
const { Pool } = require('pg')
const pg = new Pool({ connectionString: connectionString });

module.exports = {
    inserirPedido,
    listarPedido,
    //excluirPedido,
    alterarPedido
};

function inserirPedido(params, callback) {

    // TRATAMENTO DAS VARIAVEIS
    let row;

    pg.query("SELECT * FROM PUBLIC.INSERIRPEDIDO($1, $2);",
        [
            params.idCliente,
            params.idStatusPedido
        ], (err, data) => {
            // if (err) {
            //     console.log(err)
            // } else {
            //     console.log(data)
            // }

            if (err) {
                err = {
                    sucess: false,
                    httpCode: 500,
                    message: `Erro ao inserir Pedido: ERROR (' ${err.message} ')`
                };
            }
            else if (data.rows.length == 0) {
                var err = {
                    sucess: false,
                    httpCode: 403,
                    message: 'Usuário não cadastrado.'
                };
            }
            if (!err) {
                row = data.rows[0].inserirpedido;
            }
            callback(err, (err ? err.httpCode : 201), row || err);

        }
    )
}


function listarPedido(params, callback) {

    pg.query("SELECT * FROM PUBLIC.LISTARPEDIDO($1, $2);",
        [
            params.idCliente,
            params.idPedido
        ], (err, data) => {
            // if (err) {
            //     console.log(err)
            // } else {
            //     console.log(data)
            // }
            if (err) {
                err = {
                    httpCode: 500,
                    message: `Erro ao tentar listar os pedidos [PedidoRepository.js] - Error: ${err.message}`
                };
            } else if (data.rows.length == 0) {
                err = {
                    httpCode: 204,
                    message: 'Pedido não encontrado.'
                };
            } else {
                var result = data.rows;
            }

            callback(err, (err ? err.httpCode : 200), result || err);
        }
    );
}


function alterarPedido(params, callback) {

    // TRATAMENTO DAS VARIAVEIS
    pg.query("SELECT * FROM PUBLIC.ALTERARPEDIDO($1, $2);",
        [
            params.idPedido,
            params.idStatusPedido
        ], (err, data) => {
            // if (err) {
            //     console.log(err)
            // } else {
            //     console.log(data)
            // }

            if (err) {
                err = {
                    sucess: false,
                    httpCode: 500,
                    message: `Erro ao alterar Pedido: ERROR (' ${err.message} ')`
                };
            }

            if (!err) {
                var result = data.rows[0].alterarpedido;
            }
            callback(err, (err ? err.httpCode : 200), result || err);
        }
    );
}


/*
function excluirPedido(params, callback) {
    // console.log(params.idPedido)
    pg.query("SELECT * FROM PUBLIC.EXCLUIRPedido($1);",
        [
            params.idPedido
        ], (err, data) => {
            // if (err) {
            //     console.log(err)
            // } else {
            //     console.log(data)
            // }

            if (err) {
                err = {
                    sucess: false,
                    httpCode: 500,
                    message: `Erro ao inserir Pedido: ERROR (' ${err.message} ')`
                };
            }

            let result = data.rows[0].excluirPedido;
            callback(err, (err ? err.httpCode : 200), result || err);
        }
    );
}
*/