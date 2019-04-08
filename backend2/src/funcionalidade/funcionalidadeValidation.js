/**
 * Created by Cleber Spirlandeli on 06/04/2019.
 */
'use strict'

const ValidatiorParams = require('../bin/validation.js');

module.exports = {
    listarCliente,
    // editarCliente,
    // inserirCliente,
    // removerCliente
};


async function listarCliente(params, callback) {
    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Cliente
    valParams.isNumber(params.idCliente, 'O identificador do cliente deve ser um número')
    valParams.isMinLen(params.idCliente, 0, 'O identificado do cliente deve ser maior que 0 (zero)');
    valParams.isMaxLen(params.idCliente, 100, 'O identificado do cliente deve ser menor que 100 (cem)');

    // Nome Usuario
    valParams.isString(params.nomeCliente1, 'O nome do cliente deve conter somente letras')
    valParams.isMinLen(params.nomeCliente1, 3, 'O nome do cliente deve ter no minímo três caracteres');
    valParams.isMaxLen(params.nomeCliente1, 80, 'O nome do cliente deve ter no maxímo oitenta caracteres');    

    // Nome Usuario 2
    valParams.isString(params.nomeCliente2, 'O nome do cliente deve conter somente letras')
    valParams.isMinLen(params.nomeCliente2, 3, 'O nome do cliente deve ter no minímo três caracteres');
    valParams.isMaxLen(params.nomeCliente2, 80, 'O nome do cliente deve ter no maxímo oitenta caracteres');    

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}
