/**
 * Created by Cleber Spirlandeli on 22/11/2018.
 */
'use strict'

const ValidatiorParams = require('./../../util/validator/validator');

module.exports = {
    inserirCliente,
    listarCliente,
    excluirCliente,
    alterarCliente
};


async function inserirCliente(params, callback) {
    let valParams = new ValidatiorParams();
    valParams.clear();

    // Nome Cliente
    valParams.isRequired(params.nomeCliente, 'O nome do cliente é obrigatório');
    valParams.isString(params.nomeCliente, 'O nome do cliente deve ser um texto');
    valParams.isMinLen(params.nomeCliente, 2, 'O nome do cliente deve ser maior que 2 (dois)');
    valParams.isMaxLen(params.nomeCliente, 100, 'O nome do cliente deve ser menor que 100 (cem)');

    // CPF Cliente
    valParams.isCpf(params.cpfCliente, 'O CPF do cliente é inválido');
    valParams.isFixedLen(params.cpfCliente, 14, 'O CPF do cliente deve ter 14 caracteres');

    // Data Nascimento
    valParams.isFixedLen(params.dataNascimento, 10, 'Data de nascimento incorreto');

    // Sexo
    valParams.isString(params.sexo, 'O sexo do cliente deve ser um texto');
    valParams.isMinLen(params.sexo, 8, 'O sexo do cliente deve ser Masculino ou Feminino');
    valParams.isMaxLen(params.sexo, 9, 'O sexo do cliente deve ser Masculino ou Feminino');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}


async function listarCliente(params, callback) {

    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Cliente
    valParams.isString(params.idCliente, 'O identificado do cliente deve ser um texto');
    valParams.isMinLen(params.idCliente, 0, 'O identificado do cliente deve ser maior que 0 (zero)');
    valParams.isMaxLen(params.idCliente, 100, 'O identificado do cliente deve ser menor que 100 (cem)');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}


async function excluirCliente(params, callback) {

    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID cliente
    valParams.isRequired(params.idCliente, 'Identificado do cliente é obrigatório');
    valParams.isString(params.idCliente, 'O identificado do cliente deve ser um texto');
    valParams.isMinLen(params.idCliente, 0, 'O identificado do cliente deve ser maior que 0 (zero)');
    valParams.isMaxLen(params.idCliente, 100, 'O identificado do cliente deve ser menor que 100 (cem)');


    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}


async function alterarCliente(params, callback) {
    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Cliente
    valParams.isRequired(params.idCliente, 'Identificado do cliente é obrigatório');
    valParams.isString(params.idCliente, 'O identificado do cliente deve ser um texto');
    valParams.isMinLen(params.idCliente, 0, 'O identificado do cliente deve ser maior que 0 (zero)');
    valParams.isMaxLen(params.idCliente, 100, 'O identificado do cliente deve ser menor que 100 (cem)');

    // Nome Cliente
    valParams.isRequired(params.nomeCliente, 'O nome do cliente é obrigatório');
    valParams.isString(params.nomeCliente, 'O nome do cliente deve ser um texto');
    valParams.isMinLen(params.nomeCliente, 2, 'O nome do cliente deve ser maior que 2 (dois)');
    valParams.isMaxLen(params.nomeCliente, 100, 'O nome do cliente deve ser menor que 100 (cem)');

    // CPF Cliente
    valParams.isCpf(params.cpfCliente, 'O CPF do cliente é inválido');
    valParams.isFixedLen(params.cpfCliente, 14, 'O CPF do cliente deve ter 14 caracteres');

    // Data Nascimento
    valParams.isFixedLen(params.dataNascimento, 10, 'Data de nascimento incorreto');

    // Sexo
    valParams.isString(params.sexo, 'O sexo do cliente deve ser um texto');
    valParams.isMinLen(params.sexo, 8, 'O sexo do cliente deve ser Masculino ou Feminino');
    valParams.isMaxLen(params.sexo, 9, 'O sexo do cliente deve ser Masculino ou Feminino');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}