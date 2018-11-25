/**
 * Created by Cleber Rezende on 21/11/2018.
 */

'use strict'

const connectionString = require('./../../../config/database/coneccao.js');
const { Pool } = require('pg')
const pg = new Pool({ connectionString: connectionString });

module.exports = {
    inserirCliente,
    listarCliente,
    excluirCliente,
    alterarCliente
};

function inserirCliente(params, callback) {

    // TRATAMENTO DAS VARIAVEIS
    let row;
    params.cpfCliente = params.cpfCliente.replace(".", "").replace(".", "");
    params.cpfCliente = params.cpfCliente.replace("-", "");
    params.cep = params.cep.replace(".", "").replace("-", "");
    if (params.sexo == 'Feminino') {
        params.sexo = 'F';
    } else {
        params.sexo = 'M';
    }

    pg.query("SELECT * FROM PUBLIC.INSERIRCLIENTE($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);",
        [
            params.nomeCliente,
            params.cpfCliente,
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
                    message: `Erro ao inserir cliente: ERROR (' ${err.message} ')`
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
                row = data.rows[0].inserircliente;
            }
            callback(err, (err ? err.httpCode : 201), row || err);

        }
    )
}


function listarCliente(params, callback) {
    //console.log(params.idCliente);

    pg.query("SELECT * FROM PUBLIC.LISTARCLIENTE($1);",
        [
            params.idCliente
        ], (err, data) => {
            // if (err) {
            //     console.log(err)
            // } else {
            //     console.log(data)
            // }

            if (data.rows.length == 0) {
                err = {
                    httpCode: 204,
                    message: 'Cliente não encontrado.'
                };
            } else {
                var result = data.rows;
            }

            callback(err, (err ? err.httpCode : 200), result || err);
        }
    );
}


function excluirCliente(params, callback) {
    // console.log(params.idCliente)
    pg.query("SELECT * FROM PUBLIC.EXCLUIRCLIENTE($1);",
        [
            params.idCliente
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
                    message: `Erro ao inserir cliente: ERROR (' ${err.message} ')`
                };
            }

            let result = data.rows[0].excluircliente;
            callback(err, (err ? err.httpCode : 200), result || err);
        }
    );
}


function alterarCliente(params, callback) {

    // TRATAMENTO DAS VARIAVEIS
    params.cpfCliente = params.cpfCliente.replace(".", "").replace(".", "");
    params.cpfCliente = params.cpfCliente.replace("-", "");
    params.cep = params.cep.replace(".", "").replace("-", "");
    if (params.sexo == 'Feminino') {
        params.sexo = 'F';
    } else {
        params.sexo = 'M';
    }

    pg.query("SELECT * FROM PUBLIC.ALTERARCLIENTE($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);",
        [
            params.idCliente,
            params.nomeCliente,
            params.cpfCliente,
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
                    message: `Erro ao alterar cliente: ERROR (' ${err.message} ')`
                };
            }

            if (!err) {
                var result = data.rows[0].alterarcliente;
            }
            callback(err, (err ? err.httpCode : 200), result || err);
        }
    );
}