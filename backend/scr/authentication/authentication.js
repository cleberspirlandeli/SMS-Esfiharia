/**
 * Created by Cleber Rezende on 03/12/2018.
 */

'use strict'
const jwt = require('jsonwebtoken');
const SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';

module.exports = {
    gerarToken,
    authorize
};


function gerarToken(params, callback) {
    // let token = jwt.sign(params, global.SALT_KEY, { expiresIn: '1d' });
    let token = jwt.sign(params, SALT_KEY, { expiresIn: '1d' });
    callback(null, 200, { 'token': token });
}

function authorize(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            data: {
                sucess: false,
                message: 'Acesso restrito! Realize o login.'
            }
        });
    } else {
        jwt.verify(token, SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    data: {
                        sucess: false,
                        message: 'Sessão expirou o tempo de conexão! Realize o login.'
                    }
                });
            } else {
                next();
            }
        });
    }
};