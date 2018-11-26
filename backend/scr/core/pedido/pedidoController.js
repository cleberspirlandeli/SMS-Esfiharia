/**
 * Created by Cleber Rezende on 25/11/2018.
 */
'use strict'
const async = require('async');
const PedidoValidation = require('./PedidoValidation.js');
const PedidoRepository = require('./PedidoRepository.js');

module.exports = {
    inserirPedido,
    listarPedido,
    excluirPedido,
    alterarPedido
};

function inserirPedido(req, res) {

    const params = {
        idCliente: req.params.idCliente ? req.params.idCliente : null,
        idStatusPedido: req.params.idStatusPedido ? req.params.idStatusPedido : null
    };

    async.waterfall([
        (callback) => {
            PedidoValidation.inserirPedido(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            PedidoRepository.inserirPedido(params, (err, httpCode, result) => {
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


function listarPedido(req, res) {

    const params = {
        idPedido: req.params.idPedido ? req.params.idPedido : null
    };
    //console.log(params.idPedido);
    async.waterfall([
        (callback) => {
            PedidoValidation.listarPedido(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            PedidoRepository.listarPedido(params, (err, httpCode, result) => {
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


function excluirPedido(req, res) {
    const params = {
        idPedido: req.params.idPedido ? req.params.idPedido : null
    };

    async.waterfall([
        (callback) => {
            PedidoValidation.excluirPedido(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            PedidoRepository.excluirPedido(params, (err, httpCode, result) => {
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


function alterarPedido(req, res) {

    const params = {
        idPedido: req.params.idPedido ? req.params.idPedido : null,
        nomePedido: req.body.nomePedido ? req.body.nomePedido : null,
        cpfPedido: req.body.cpfPedido ? req.body.cpfPedido : null,
        dataNascimento: req.body.dataNascimento ? req.body.dataNascimento : null,
        sexo: req.body.sexo ? req.body.sexo : null,
        cep: req.body.cep ? req.body.cep : null,
        rua: req.body.rua ? req.body.rua : null,
        numero: req.body.numero ? req.body.numero : null,
        bairro: req.body.bairro ? req.body.bairro : null,
        cidade: req.body.cidade ? req.body.cidade : null,
        complemento: req.body.complemento ? req.body.complemento : null,
        idTipoTelefone: req.body.idTipoTelefone ? req.body.idTipoTelefone : null,
        telefone: req.body.telefone ? req.body.telefone : null
    };

    async.waterfall([
        (callback) => {
            PedidoValidation.alterarPedido(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            PedidoRepository.alterarPedido(params, (err, httpCode, result) => {
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