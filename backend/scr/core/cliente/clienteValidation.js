/**
 * Created by Cleber Spirlandeli on 22/11/2018.
 */
'use strict'

const ValidatiorParams = require('./../../util/validator/validator');

module.exports = {
    inserirCliente
    //listarCliente,
    //excluirCliente,
    //alterarCliente
};

async function inserirCliente(params) {

    let valParams = new ValidatiorParams();
    valParams.clear();

    // Nome Cliente
    valParams.isRequired(params.nomeCliente, 'O nome do cliente é obrigatório');
    valParams.isString(params.nomeCliente, 'O nome do cliente deve ser um texto');
    valParams.isMinLen(params.nomeCliente, 2, 'O nome do cliente deve ser maior que 2 (dois)');
    valParams.isMaxLen(params.nomeCliente, 100, 'O nome do cliente deve ser menor que 100 (cem)');

    // CPF Cliente
    //valParams.isRequired(params.cpfCliente, 'O CPF do cliente é obrigatório');
    //valParams.isNumber(params.cpfCliente, 'O CPF do cliente deve ser um número');
    valParams.isFixedLen(params.cpfCliente, 14, 'O CPF do cliente deve ter 14 caracteres');

    // Data Nascimento
    valParams.isFixedLen(params.dataNascimento, 10, 'Data de nascimento incorreto');
    
    // Sexo
    valParams.isString(params.sexo, 'O sexo do cliente deve ser um texto');
    valParams.isMinLen(params.sexo, 8, 'O sexo do cliente deve ser Masculino ou Feminino');
    valParams.isMaxLen(params.sexo, 9, 'O sexo do cliente deve ser Masculino ou Feminino');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        return { success: false, httpCode: 400, message: valParams.errors() }
    } else {
        return { success: true, httpCode: 200, message: null }
    }
}

/*

async function listarCliente(params) {

    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Produto
    valParams.isString(params.idProduto, 'O identificado do produto deve ser uma string');
    valParams.isMinLen(params.idProduto, 10, 'O identificado do produto deve ser maior que 10 (dez)');
    valParams.isMaxLen(params.idProduto, 100, 'O identificado do produto deve ser menor que 100 (cem)');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        return { success: false, httpCode: 400, message: valParams.errors() }
    } else {
        return { success: true, httpCode: 200, message: null }
    }
}

async function excluirCliente(params) {

    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Colaborador
    valParams.isRequired(params.idAlteracao, 'Identificado do colaborador é obrigatório');
    valParams.isString(params.idAlteracao, 'O identificado do colaborador deve ser uma string');
    valParams.isMinLen(params.idAlteracao, 10, 'O identificado do colaborador deve ser maior que 10 (dez)');
    valParams.isMaxLen(params.idAlteracao, 100, 'O identificado do colaborador deve ser menor que 100 (cem)');

    // ID Produto
    valParams.isRequired(params.idProduto, 'Identificado do colaborador é obrigatório');
    valParams.isString(params.idProduto, 'O identificado do colaborador deve ser uma string');
    valParams.isMinLen(params.idProduto, 10, 'O identificado do colaborador deve ser maior que 10 (dez)');
    valParams.isMaxLen(params.idProduto, 100, 'O identificado do colaborador deve ser menor que 100 (cem)');

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        return { success: false, httpCode: 400, message: valParams.errors() }
    } else {
        return { success: true, httpCode: 200, message: null }
    }
}

async function alterarCliente(params) {
    let valParams = new ValidatiorParams();
    valParams.clear();

    // ID Colaborador
    valParams.isRequired(params.idAlteracao, 'Identificado do colaborador é obrigatório');
    valParams.isString(params.idAlteracao, 'O identificado do colaborador deve ser uma string');
    valParams.isMinLen(params.idAlteracao, 10, 'O identificado do colaborador deve ser maior que 10 (dez)');
    valParams.isMaxLen(params.idAlteracao, 100, 'O identificado do colaborador deve ser menor que 100 (cem)');

    // ID Produto
    valParams.isRequired(params.idProduto, 'Identificado do produto é obrigatório');
    valParams.isString(params.idProduto, 'O identificado do produto deve ser uma string');
    valParams.isMinLen(params.idProduto, 10, 'O identificado do produto deve ser maior que 10 (dez)');
    valParams.isMaxLen(params.idProduto, 100, 'O identificado do produto deve ser menor que 100 (cem)');

    // Descrição Produto
    valParams.isRequired(params.descricao, 'A descrição do produto é obrigatório');
    valParams.isString(params.descricao, 'A descrição do produto deve ser uma string');
    valParams.isMinLen(params.descricao, 2, 'A descrição do produto deve ser maior que 2 (dois)');
    valParams.isMaxLen(params.descricao, 100, 'A descrição do produto deve ser menor que 100 (cem)');

    // Codigo Produto
    valParams.isRequired(params.codigoProduto, 'O código do produto é obrigatório');
    valParams.isNumber(params.codigoProduto, 'O código do produto deve ser um número');
    valParams.isMinLen(params.codigoProduto, 2, 'O código do produto deve ser maior que 2 (dois)');
    valParams.isMaxLen(params.codigoProduto, 10, 'O código do produto deve ser menor que 10 (dez)');


    // Valor Venda Produto
    valParams.isRequired(params.valorVenda, 'O preço de venda é obrigatório');
    valParams.isNumber(params.valorVenda, 'O preço de venda deve ser um número');
    valParams.isMinLen(params.valorVenda, 10, 'O preço de venda deve ser maior que 10 (dez)');
    valParams.isMaxLen(params.valorVenda, 100000, 'O preço de venda deve ser menor que 100000');

    // Quantidade Produto
    valParams.isRequired(params.quantidade, 'A quantidade do produto é obrigatório');
    valParams.isNumber(params.quantidade, 'A quantidade do produto deve ser um número');
    valParams.isMinLen(params.quantidade, 10, 'A quantidade do produto deve ser maior que 10 (dez)');
    valParams.isMaxLen(params.quantidade, 100000, 'A quantidade do produto deve ser menor que 100000');

    // Ativo Colaborador
    valParams.isRequired(params.ativo, 'O Status do produto é obrigatório');
    valParams.isString(params.ativo, 'O Status do produto deve ser uma string');
    valParams.isFixedLen(params.ativo, 1, 'O Status do produto deve ter 1 (um) caracter');
    valParams.isYesOrNo(params.ativo, 'O Status do produto esta incorreto');
    

    // Se os dados forem inválidos
    if (!valParams.isValid()) {
        return { success: false, httpCode: 400, message: valParams.errors() }
    } else {
        return { success: true, httpCode: 200, message: null }
    }
}

*/