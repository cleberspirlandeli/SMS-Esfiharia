/**
 * Created by Cleber Spirlandeli on 06/04/2019.
 */
'use strict'
const sql = require('mssql')
const config = require('../bin/conexao')

module.exports = {
    listarCliente,
    // editarCliente,
    // inserirCliente,
    // removerCliente
}

function listarCliente(params, callback) {

    sql.connect(config).then(pool => {
        return pool.request()
            .input('IDUSUARIO',    sql.Int, params.idCliente)
            .input('NOMEUSUARIO1', sql.Int, params.nomeCliente1)
            .input('NOMEUSUARIO2', sql.Int, params.nomeCliente2)
            .execute('SP_LISTAR_CLIENTE');
    }).then(result => {
        if (result.recordsets.length > 0) {
            callback(false, 200, result.recordset)
        } else {
            callback(false, 204, result.recordset)
        }
    }).catch(err => {
        callback(true, 500, err.message)
    })
}
