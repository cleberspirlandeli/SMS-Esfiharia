/**
 * Created by Cleber Spirlandeli on 06/04/2019.
 */
'use strict'
const async = require('async');
const ClienteValidation = require('./clienteValidation.js');
const ClienteRepository = require('./clienteRepository.js');

module.exports = {
    listarCliente,
    editarCliente,
    inserirCliente,
    removerCliente
}

function listarCliente(req, res) {
 
    let params = {
        idCliente: parseInt(req.params.idCliente) || null,
        nomeCliente1: req.body.nomeCliente1 || null,
        nomeCliente2: req.query.nomeCliente2 || null
    }

    async.waterfall([
        (callback) => {
            ClienteValidation.listarCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            ClienteRepository.listarCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        }
    ], (err, httpCode, result) => {
        if (err) {
            res.status(httpCode).json({ success: false, mensagem: result });
        } else {
            res.status(httpCode).json({ success: true,  mensagem: result });
        }
    });    
}

function editarCliente(req, res) {
 
    let params = {
        idCliente: parseInt(req.params.idCliente) || null,
        nomeCliente1: req.body.nomeCliente1 || null,
        nomeCliente2: req.query.nomeCliente2 || null
    }

    async.waterfall([
        (callback) => {
            ClienteValidation.editarCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            ClienteRepository.editarCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        }
    ], (err, httpCode, result) => {
        if (err) {
            res.status(httpCode).json({ success: false, mensagem: result });
        } else {
            res.status(httpCode).json({ success: true,  mensagem: result });
        }
    });
}

function inserirCliente(req, res) {
 
    let params = {
        idCliente: parseInt(req.params.idCliente) || null,
        nomeCliente1: req.body.nomeCliente1 || null,
        nomeCliente2: req.query.nomeCliente2 || null
    }

    async.waterfall([
        (callback) => {
            ClienteValidation.inserirCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            ClienteRepository.inserirCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        }
    ], (err, httpCode, result) => {
        if (err) {
            res.status(httpCode).json({ success: false, mensagem: result });
        } else {
            res.status(httpCode).json({ success: true,  mensagem: result });
        }
    });
}


function removerCliente(req, res) {
 
    let params = {
        idCliente: parseInt(req.params.idCliente) || null,
        nomeCliente1: req.body.nomeCliente1 || null,
        nomeCliente2: req.query.nomeCliente2 || null
    }

    async.waterfall([
        (callback) => {
            ClienteValidation.removerCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            ClienteRepository.removerCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        }
    ], (err, httpCode, result) => {
        if (err) {
            res.status(httpCode).json({ success: false, mensagem: result });
        } else {
            res.status(httpCode).json({ success: true,  mensagem: result });
        }
    });
}
