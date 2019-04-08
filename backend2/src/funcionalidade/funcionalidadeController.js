/**
 * Created by Cleber Spirlandeli on 06/04/2019.
 */
'use strict'
const async = require('async');
const FuncionalidadeValidation = require('./funcionalidadeValidation.js');
const FuncionalidadeRepository = require('./funcionalidadeRepository.js');

const sql = require('mssql')
const config = require('./../bin/conexao')

module.exports = {
    listarFuncionalidade
}

function listarFuncionalidade(req, res) {

    sql.connect(config)
        .then(pool => {
            // Query
            // return pool.request()
            //     .query('select * from empresa')

            // Stored procedure
            return pool.request()
                .input('idempresaa', sql.Int, null)
                .execute('LISTAR_EMPRESA');
        }).then(result => {
            console.dir(result.recordset)
            res.status(200).json(result.recordset)
        }).catch(err => {
            console.log(err)
            res.status(500).json({ err: err.message })
        })

    // sql.on('error', err => {
    //     console.log(err)
    // })










    // let params = {
    //     idUsuario: req.params.idUsuario || null
    // }

    // async.waterfall([
    //     (callback) => {
    //         transaction.begin(err => {
    //             if (err) {
    //                 callback(err);
    //             }
    //             else {
    //                 callback(null);
    //             }
    //         });
    //     },
    //     (callback) => {
    //         FuncionalidadeValidation.listarFuncionalidade(params, (err, httpCode, result) => {
    //             if (err) {
    //                 callback(err, httpCode, result);
    //             } else {
    //                 callback(null, httpCode, result);
    //             }
    //         });
    //     },
    //     (httpCode, result, callback) => {
    //         FuncionalidadeRepository.listarFuncionalidade(params, transaction, (err, httpCode, result) => {
    //             if (err) {
    //                 callback(err, httpCode, result);
    //             } else {
    //                 callback(null, httpCode, result);
    //             }
    //         });
    //     }
    // ], (err, httpCode, result) => {
    //     if (err) {
    //         res.status(httpCode).json({ mensagem: result }).end(); // renderizar para a tela de login
    //     } else {
    //         res.status(httpCode).json({ success: true, id: result.id, token: result.token });
    //     }
    // });

}