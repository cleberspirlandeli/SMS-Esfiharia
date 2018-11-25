/**
 * Created by Cleber Rezende on 21/11/2018.
 */
'use strict'
const async = require('async');
const ClienteValidation = require('./clienteValidation.js');
const ClienteRepository = require('./clienteRepository.js');

module.exports = {
    inserirCliente,
    listarCliente,
    excluirCliente,
    alterarCliente
};

function inserirCliente(req, res) {

    const params = {
        nomeCliente: req.body.nomeCliente ? req.body.nomeCliente : null,
        cpfCliente: req.body.cpfCliente ? req.body.cpfCliente : null,
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
            res.status(httpCode).json({ data: result });
        } else {
            res.status(httpCode).json({ data: result });
        }
    });

}


function listarCliente(req, res) {

    const params = {
        idCliente: req.params.idCliente ? req.params.idCliente : null
    };
    //console.log(params.idCliente);
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
            res.status(httpCode).json({ data: result });
        } else {
            res.status(httpCode).json({ data: result });
        }
    });
}


function excluirCliente(req, res) {
    const params = {
        idCliente: req.params.idCliente ? req.params.idCliente : null
    };

    async.waterfall([
        (callback) => {
            ClienteValidation.excluirCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            ClienteRepository.excluirCliente(params, (err, httpCode, result) => {
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


function alterarCliente(req, res) {

    const params = {
        idCliente: req.params.idCliente ? req.params.idCliente : null,
        nomeCliente: req.body.nomeCliente ? req.body.nomeCliente : null,
        cpfCliente: req.body.cpfCliente ? req.body.cpfCliente : null,
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
            ClienteValidation.alterarCliente(params, (err, httpCode, result) => {
                if (err) {
                    callback(err, httpCode, result);
                } else {
                    callback(null, httpCode, result);
                }
            });
        },
        (httpCode, result, callback) => {
            ClienteRepository.alterarCliente(params, (err, httpCode, result) => {
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