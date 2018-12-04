/**
 * Created by Cleber Rezende on 03/12/2018.
 */

'use strict'

const connectionString = require('./../../config/database/coneccao.js');
const { Pool } = require('pg')
const pg = new Pool({ connectionString: connectionString });

module.exports = {
    listarUsuario
};

function listarUsuario(params, callback) {
    //console.log(params.idCliente);

    pg.query("SELECT * FROM PUBLIC.LISTARUSUARIOSISTEMA($1, $2);",
        [
            params.usuario,
            params.senha
        ], (err, data) => {
            // if (err) {
            //     console.log(err)
            // } else {
            //     console.log(data)
            // }

            if (data.rows.length == 0) {
                err = {
                    sucess: false,
                    httpCode: 404,
                    message: 'Usuário ou senha inválido!'
                };
            } else {
                var result = data.rows[0];
            }

            callback(err, (err ? err.httpCode : 200), result || err);
        }
    );
}
