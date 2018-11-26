/**
 * Created by Cleber Spirlandeli on 25/11/2018.
 */
'use strict'

const ValidatiorParams = require('./../../util/validator/validator');

module.exports = {
    inserirPedido,
    listarPedido,
    excluirPedido,
    alterarPedido
};


async function inserirPedido(params, callback) {
    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Cliente
    valParams.isRequired(params.idCliente, 'O identificado do Cliente deve ser obrigatório');
    valParams.isNumber(params.idCliente, 'O identificado do Cliente deve ser um texto');
    valParams.isMinLen(params.idCliente, 0, 'O identificado do Cliente deve ser maior que 0 (zero)');

    // ID Status Pedido
    valParams.isRequired(params.idStatusPedido, 'O identificado do Status do Pedido deve ser obrigatório');
    valParams.isNumber(params.idStatusPedido, 'O identificado do Status do Pedido deve ser um texto');
    valParams.isMinLen(params.idStatusPedido, 0, 'O identificado do Status do Pedido deve ser maior que 0 (zero)');


    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}


async function listarPedido(params, callback) {

    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Pedido
    valParams.isString(params.idPedido, 'O identificado do Pedido deve ser um texto');
    valParams.isMinLen(params.idPedido, 0, 'O identificado do Pedido deve ser maior que 0 (zero)');
    valParams.isMaxLen(params.idPedido, 100, 'O identificado do Pedido deve ser menor que 100 (cem)');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}


async function excluirPedido(params, callback) {

    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Pedido
    valParams.isRequired(params.idPedido, 'Identificado do Pedido é obrigatório');
    valParams.isString(params.idPedido, 'O identificado do Pedido deve ser um texto');
    valParams.isMinLen(params.idPedido, 0, 'O identificado do Pedido deve ser maior que 0 (zero)');
    valParams.isMaxLen(params.idPedido, 100, 'O identificado do Pedido deve ser menor que 100 (cem)');


    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}


async function alterarPedido(params, callback) {
    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Pedido
    valParams.isRequired(params.idPedido, 'Identificado do Pedido é obrigatório');
    valParams.isString(params.idPedido, 'O identificado do Pedido deve ser um texto');
    valParams.isMinLen(params.idPedido, 0, 'O identificado do Pedido deve ser maior que 0 (zero)');
    valParams.isMaxLen(params.idPedido, 100, 'O identificado do Pedido deve ser menor que 100 (cem)');

    // Nome Pedido
    valParams.isRequired(params.nomePedido, 'O nome do Pedido é obrigatório');
    valParams.isString(params.nomePedido, 'O nome do Pedido deve ser um texto');
    valParams.isMinLen(params.nomePedido, 2, 'O nome do Pedido deve ser maior que 2 (dois)');
    valParams.isMaxLen(params.nomePedido, 100, 'O nome do Pedido deve ser menor que 100 (cem)');

    // CPF Pedido
    valParams.isCpf(params.cpfPedido, 'O CPF do Pedido é inválido');
    valParams.isFixedLen(params.cpfPedido, 14, 'O CPF do Pedido deve ter 14 caracteres');

    // Data Nascimento
    valParams.isFixedLen(params.dataNascimento, 10, 'Data de nascimento incorreto');

    // Sexo
    valParams.isString(params.sexo, 'O sexo do Pedido deve ser um texto');
    valParams.isMinLen(params.sexo, 8, 'O sexo do Pedido deve ser Masculino ou Feminino');
    valParams.isMaxLen(params.sexo, 9, 'O sexo do Pedido deve ser Masculino ou Feminino');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}