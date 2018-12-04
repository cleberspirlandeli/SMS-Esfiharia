const AuthCtrl = require('./../authentication/authController');

module.exports = function (app) {
    app.route('/login')
        .post(AuthCtrl.listarUsuario);
};