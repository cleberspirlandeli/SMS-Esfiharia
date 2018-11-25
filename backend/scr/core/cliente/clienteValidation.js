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

    // CEP
    valParams.isString(params.cep, 'O CEP do cliente deve ser um texto');
    valParams.isFixedLen(params.cep, 10, 'O CEP do cliente esta inválido');

    // Rua
    valParams.isString(params.rua, 'A rua do cliente deve ser um texto');
    valParams.isMinLen(params.rua, 1, 'A rua do cliente deve ter no mínimo uma letra');
    valParams.isMaxLen(params.rua, 100, 'A rua do cliente deve ter no máximo 100 letras');

    // Número
    valParams.isNumber(params.numero, 'O número do cliente deve ser um número');

    // Bairro
    valParams.isString(params.bairro, 'O bairro do cliente deve ser um texto');
    valParams.isMinLen(params.bairro, 1, 'O bairro do cliente deve ter no mínimo uma letra');
    valParams.isMaxLen(params.bairro, 100, 'O bairro do cliente deve ter no máximo 100 letras');

    // Cidade
    valParams.isString(params.cidade, 'A cidade do cliente deve ser um texto');
    valParams.isMinLen(params.cidade, 1, 'A cidade do cliente deve ter no mínimo uma letra');
    valParams.isMaxLen(params.cidade, 100, 'A cidade do cliente deve ter no máximo 100 letras');

    // Complemento
    valParams.isString(params.complemento, 'O complemento do cliente deve ser um texto');
    valParams.isMinLen(params.complemento, 1, 'O complemento do cliente deve ter no mínimo uma letra');
    valParams.isMaxLen(params.complemento, 100, 'O complemento do cliente deve ter no máximo 100 letras');

    // IdTipoTelefone
    valParams.isRequired(params.idTipoTelefone, 'O tipo de telefone do cliente é obrigatório');
    valParams.isNumber(params.idTipoTelefone, 'O tipo de telefone do cliente deve ser um texto');
    valParams.isMinLen(params.idTipoTelefone, 1, 'O tipo de telefone do cliente esta inválido (mínimo)');
    valParams.isMaxLen(params.idTipoTelefone, 20, 'O tipo de telefone do cliente esta inválido (máximo)');

    // Telefone
    valParams.isRequired(params.telefone, 'O telefone do cliente é obrigatório');
    valParams.isNumber(params.telefone, 'O telefone do cliente deve ser somente números');
    valParams.isMinLen(params.telefone, 8, 'O telefone do cliente deve ter no mínimo 8 números');
    valParams.isMaxLen(params.telefone, 14, 'O telefone do cliente deve ter no máximo 11 números');

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