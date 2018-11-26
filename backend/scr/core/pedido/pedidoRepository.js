/**
 * Created by Cleber Rezende on 25/11/2018.
 */

'use strict'

const connectionString = require('./../../../config/database/coneccao.js');
const { Pool } = require('pg')
const pg = new Pool({ connectionString: connectionString });

module.exports = {
    inserirPedido,
    //listarPedido,
    //excluirPedido,
    //alterarPedido
};

function inserirPedido(params, callback) {

    // TRATAMENTO DAS VARIAVEIS
    let row;

    pg.query("SELECT * FROM PUBLIC.INSERIRPedido($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);",
        [
            params.nomePedido,
            params.cpfPedido,
            params.dataNascimento,
            params.sexo,
            params.cep,
            params.rua,
            params.numero,
            params.bairro,
            params.cidade,
            params.complemento,
            params.idTipoTelefone,
            params.telefone
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
                row = data.rows[0].inserirPedido;
            }
            callback(err, (err ? err.httpCode : 201), row || err);

        }
    )
}


function listarPedido(params, callback) {
    //console.log(params.idPedido);

    pg.query("SELECT * FROM PUBLIC.LISTARPedido($1);",
        [
            params.idPedido
        ], (err, data) => {
            // if (err) {
            //     console.log(err)
            // } else {
            //     console.log(data)
            // }

            if (data.rows.length == 0) {
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


function alterarPedido(params, callback) {

    // TRATAMENTO DAS VARIAVEIS
    params.cpfPedido = params.cpfPedido.replace(".", "").replace(".", "");
    params.cpfPedido = params.cpfPedido.replace("-", "");
    params.cep = params.cep.replace(".", "").replace("-", "");
    if (params.sexo == 'Feminino') {
        params.sexo = 'F';
    } else {
        params.sexo = 'M';
    }

    pg.query("SELECT * FROM PUBLIC.ALTERARPedido($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);",
        [
            params.idPedido,
            params.nomePedido,
            params.cpfPedido,
            params.dataNascimento,
            params.sexo,
            params.cep,
            params.rua,
            params.numero,
            params.bairro,
            params.complemento,
            params.cidade,
            params.idTipoTelefone,
            params.telefone
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
                var result = data.rows[0].alterarPedido;
            }
            callback(err, (err ? err.httpCode : 200), result || err);
        }
    );
}