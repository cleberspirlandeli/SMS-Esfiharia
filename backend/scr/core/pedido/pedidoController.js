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
    //excluirPedido,
    alterarPedido
};

function inserirPedido(req, res) {

    const params = {
        idCliente: req.params.idCliente ? parseInt(req.params.idCliente) : null,
        idStatusPedido: req.params.idStatusPedido ? parseInt(req.params.idStatusPedido) : null
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
        idCliente: req.query.cliente ? parseInt(req.query.cliente) : null,
        idPedido:  req.query.pedido  ? parseInt(req.query.pedido)  : null
    };

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


function alterarPedido(req, res) {

    const params = {
        idPedido: req.params.idPedido ? parseInt(req.params.idPedido) : null,
        idStatusPedido: req.params.idStatusPedido ? parseInt(req.params.idStatusPedido) : null
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


/*
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
*/