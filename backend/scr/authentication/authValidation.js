/**
 * Created by Cleber Spirlandeli on 22/11/2018.
 */
'use strict'

const ValidatiorParams = require('./../util/validator/validator.js');

module.exports = {
    listarUsuario
};

async function listarUsuario(params, callback) {

    let valParams = new ValidatiorParams();
    valParams.clear();

    // Usuário
    valParams.isRequired(params.usuario, 'O nome de usuário é obrigatorio!');
    valParams.isString(params.usuario, 'O nome de usuário deve conter um texto');
    valParams.isMinLen(params.usuario, 4, 'O nome de usuário deve ser maior que 4 (quatro)');
    valParams.isMaxLen(params.usuario, 30, 'O nome de usuário deve ser menor que 30 (trinta)');

    // Senha
    valParams.isRequired(params.senha, 'A senha do usuário é obrigatorio!');
    valParams.isString(params.senha, 'A senha do usuário deve conter um texto');
    valParams.isMinLen(params.senha, 6, 'A senha do usuário deve ser maior que 6 (seis)');
    valParams.isMaxLen(params.senha, 50, 'A senha do usuário deve ser menor que 50 (cinquenta)');


    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        callback(true, 400, valParams.errors());
    } else {
        callback(false, 200, null);
    }
}
