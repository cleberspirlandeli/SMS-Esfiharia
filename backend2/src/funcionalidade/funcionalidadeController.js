/**
 * Created by Cleber Spirlandeli on 06/04/2019.
 */
'use strict'
const async = require('async');
const FuncionalidadeValidation = require('./funcionalidadeValidation.js');
const FuncionalidadeRepository = require('./funcionalidadeRepository.js');

module.exports = {
    listarFuncionalidade
};

function listarFuncionalidade(req, res) {

    let params = {
        idUsuario: req.body.usuario || null
    }

    async.waterfall([
        (callback) => {
            LoginValidation.login(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            LoginRepository.login(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            LoginJwt.login(result, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        }
    ], (err, httpCode, result) => {
        if (err) {
            res.clearCookie('token');
            res.status(httpCode).json({ mensagem: result }).end(); // renderizar para a tela de login
        } else {
            res.clearCookie('token');
            res.cookie('token', result.token, { maxAge: 60000, httpOnly: true });
            res.status(httpCode).json({ success: true, id: result.id, token: result.token });
        }
    });

}


// function validarToken(req, res, next) {
//     async.waterfall([
//         (callback) => {
//             LoginJwt.validarToken(req.headers, (err, result) => { // Mensagem recebe o decode do Token ou mensagem de erro
//                 if (err) {
//                     callback(err, result);
//                 } else {
//                     callback(null, result);
//                 }
//             });
//         },
//         (decode, callback) => {
//             // Chama o Refresh Token
//             LoginJwt.refreshToken(decode, (err, result) => {
//                 if (err) {
//                     callback(err, result);
//                 } else {
//                     callback(null, result);
//                 }
//             });
//         }
//     ], (err, result) => {
//         if (err) {
//             res.status(401)
//                 .json(result);
//         } else {
//             res.clearCookie('token')
//                 .cookie('token', result.data.token, { maxAge: 60000, httpOnly: true });
//             next();
//         }
//     });
// }