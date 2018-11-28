/**
 * Created by Cleber Spirlandeli on 25/11/2018.
 */
'use strict'

const ValidatiorParams = require('./../../util/validator/validator');

module.exports = {
    inserirPedido,
    listarPedido,
    //excluirPedido,
    alterarPedido
};


async function inserirPedido(params, callback) {
    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Cliente
    valParams.isRequired(params.idCliente, 'O identificado do Cliente deve ser obrigatório');
    valParams.isNumber(params.idCliente, 'O identificado do Cliente deve ser um número');
    valParams.isMinLen(params.idCliente, 0, 'O identificado do Cliente deve ser maior que 0 (zero)');

    // ID Status Pedido
    valParams.isRequired(params.idStatusPedido, 'O identificado do Status do Pedido deve ser obrigatório');
    valParams.isNumber(params.idStatusPedido, 'O identificado do Status do Pedido deve ser um número');
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

    // ID Cliente
    valParams.isNumber(params.idCliente, 'O identificado do Cliente deve ser um número');
    valParams.isMinLen(params.idCliente, 0, 'O identificado do Cliente deve ser maior que 0 (zero)');

    // ID Pedido
    valParams.isNumber(params.idPedido, 'O identificado do Pedido deve ser um número');
    valParams.isMinLen(params.idPedido, 0, 'O identificado do Pedido deve ser maior que 0 (zero)');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}

/*
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
*/

async function alterarPedido(params, callback) {
    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID PEDIDO
    valParams.isRequired(params.idPedido, 'O identificado do Pedido deve ser obrigatório');
    valParams.isNumber(params.idPedido, 'O identificado do Pedido deve ser um número');
    valParams.isMinLen(params.idPedido, 0, 'O identificado do Pedido deve ser maior que 0 (zero)');

    // ID Status Pedido
    valParams.isRequired(params.idStatusPedido, 'O identificado do Status do Pedido deve ser obrigatório');
    valParams.isNumber(params.idStatusPedido, 'O identificado do Status do Pedido deve ser um número');
    valParams.isMinLen(params.idStatusPedido, 0, 'O identificado do Status do Pedido deve ser maior que 0 (zero)');


    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}