/**
 * Created by Cleber Rezende on 03/12/2018.
 */
'use strict'
const async = require('async');
const AuthValidation = require('./authValidation.js');
const AuthRepository = require('./authRepository.js');
const Authentication = require('./authentication.js');

module.exports = {
    listarUsuario
};

function listarUsuario(req, res) {

    const params = {
        usuario: req.body.usuario ? req.body.usuario : null,
        senha: req.body.senha ? req.body.senha : null
    };

    async.waterfall([
        (callback) => {
            AuthValidation.listarUsuario(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            AuthRepository.listarUsuario(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            Authentication.gerarToken(result, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        }
    ], (err, httpCode, result) => {
        if (err) {
            res.status(httpCode).json({ data: result });
        } else {
            res.status(httpCode).json({ data: result });
        }
    });
}