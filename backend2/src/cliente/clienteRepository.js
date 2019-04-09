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
            // .input('IDUSUARIO',    sql.Int, params.idCliente)
            // .input('NOMEUSUARIO1', sql.Int, params.nomeCliente1)
            // .input('NOMEUSUARIO2', sql.VarChar(50), params.nomeCliente2)
            .input('idempresa', sql.Int, params.idCliente)
            .execute('LISTAR_EMPRESA');
    }).then(result => {
        if (result.recordset.length > 0) {
            callback(false, 200, result.recordset)
        } else {
            callback(false, 204, result.recordset)
        }
        sql.close();
    }).catch(err => {
        callback(true, 500, err.message)
        sql.close();
    })
}
