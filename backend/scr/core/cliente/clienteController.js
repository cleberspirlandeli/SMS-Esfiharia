/**
 * Created by Cleber Rezende on 21/11/2018.
 */
'use strict'

const ClienteValidation = require('./clienteValidation.js');
//const ClienteRepository = require('./clienteRepository.js');

module.exports = {
    inserirCliente
    //listarCliente,
    //excluirCliente,
   // alterarCliente
};

async function inserirCliente(req, res) {

    const params = {
        nomeCliente: req.body.nomeCliente ? req.body.nomeCliente : null,
        cpfCliente: req.body.cpfCliente ? req.body.cpfCliente : null,
        dataNascimento: req.body.dataNascimento ? req.body.dataNascimento : null,
        sexo: req.body.sexo ? req.body.sexo : null
    };

    try {
        const resValidation = await ClienteValidation.inserirCliente(params);
        
        res.status(200).json({ data: resValidation });
/*
        if (resValidation.success) {

            res.status(500).json({ httpCode: 500, data: resRepository });

        } else {
            res.status(resValidation.httpCode)
                .json({
                    httpCode: resValidation.httpCode,
                    data: {
                        success: resValidation.success,
                        message: resValidation.message[0].message
                    }
                }
                );
        }
*/        
    } catch (e) {
        
        res.status(200).json({ data: resValidation });
    }
}

/*

async function listarCliente(req, res) {

    const params = {
        idProduto: req.params.idproduto ? req.params.idproduto : null
    };

    try {
        const resValidation = await ClienteValidation.listarProduto(params);
        if (resValidation.success) {
            const resRepository = await ClienteRepository.listarCliente(params);

            if (resRepository.length == 0)
                res.status(204).json({ httpCode: 204, data: null });
            else if (resRepository.length > 0)
                res.status(200).json({ httpCode: 200, data: resRepository });
            else
                res.status(500).json({ httpCode: 500, data: resRepository });

        } else {
            res.status(resValidation.httpCode)
                .json({
                    httpCode: resValidation.httpCode,
                    data: {
                        success: resValidation.success,
                        message: resValidation.message[0].message
                    }
                }
                );
        }
    } catch (e) {
        if (e.message === 'invalid base64 end sequence' ||
            e.message.includes('invalid input syntax for integer'))
            e = 'Sua sessão expirou por inatividade. Por favor, efetue login novamente.';

        res.status(500).json({
            httpCode: 500,
            data: {
                success: false,
                message: e
            }
        }
        );
    }
}


async function excluirCliente(req, Cliente
    const params = {
        idAlteracao: req.params.idalteracao ? req.params.idalteracao : null,
        idProduto: req.params.idproduto ? req.params.idproduto : null
    };

    try {
        const resValidation = await ClienteValidation.excluirProduto(params);
        if (resValidation.success) {
            const resRepository = await ClienteRepository.excluirCliente(paCliente
            if (resRepository.success)
                res.status(200).json({ httpCode: 200, data: resRepository });
            else if (resRepository.message.includes('Somente Gestores podem realizar a exclusão'))
                res.status(403).json({ httpCode: 403, data: resRepository });
            else
                res.status(500).json({ httpCode: 500, data: resRepository });

        } else {
            res.status(resValidation.httpCode)
                .json({
                    httpCode: resValidation.httpCode,
                    data: {
                        success: resValidation.success,
                        message: resValidation.message[0].message
                    }
                }
                );
        }
    } catch (e) {
        if (e.message === 'invalid base64 end sequence')
            e = 'Sua sessão expirou por inatividade. Por favor, efetue login novamente.';

        res.status(500).json({
            httpCode: 500,
            data: {
                success: false,
                message: e
            }
        }
        );
    }
}


async function alterarProduto(req, res) {

    const params = {
        idAlteracao: req.params.idalteracao ? req.params.idalteracao : null,
        idProduto: req.params.idproduto ? req.params.idproduto : null,
        descricao: req.body.descricao ? req.body.descricao : null,
        codigoProduto: req.body.codigoProduto ? req.body.codigoProduto : null,
        valorVenda: req.body.valorVenda ? req.body.valorVenda : null,
        quantidade: req.body.quantidade ? req.body.quantidade : null,
        ativo: req.body.ativo ? req.body.ativo : null
    };

    try {
        const resValidation = await ClienteValidation.alterarProduto(params);
        if (resValidation.success) {
            const resRepository = await ClienteRepository.alterarProduto(params);

            if (resRepository.success)
                res.status(200).json({ httpCode: 200, data: resRepository });
            else if (resRepository.message.includes('Somente Gestores podem realizar alteração'))
                res.status(403).json({ httpCode: 403, data: resRepository });
            else if (resRepository.message.includes('produto é menor do que a quantidade que se deseja'))
                res.status(400).json({ httpCode: 400, data: resRepository });

        } else {
            res.status(resValidation.httpCode)
                .json({
                    httpCode: resValidation.httpCode,
                    data: {
                        success: resValidation.success,
                        message: resValidation.message[0].message
                    }
                }
                );
        }
    } catch (e) {
        if (e.message === 'invalid base64 end sequence')
            e = 'Sua sessão expirou por inatividade. Por favor, efetue login novamente.';

        res.status(500).json({
            httpCode: 500,
            data: {
                success: false,
                message: e
            }
        }
        );
    }
}

*/