'use strict'
// SMS TWILIO
// https://www.youtube.com/watch?v=REyT7DUMMu8
// DOC https://www.twilio.com/docs/libraries/node

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// TWILIO
const accountSid = 'AC8daeabea34f1857c50cef362e965df2b';
const authToken = '7f7b5923d3273bf5c8f6509617f795c0';
const client = require('twilio')(accountSid, authToken);

// TWILIO

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// A Esfiharia informa: Fabricio, seu pedido foi registrado, logo iremos iniciar a preparação!
// A Esfiharia informa: Fabricio, seu pedido já esta em preparação, logo logo iremos entregar! :)
// A Esfiharia informa: Fabricio, seu pedido já esta a caminho! Tenha uma ótima noite! Muito obrigado!
app.get('/teste-sms', function (req, res) {

    client.messages
        .create({
            body: 'A Esfiharia informa: Fabricio, seu pedido já esta a caminho! Tenha uma ótima noite! Muito obrigado!',
            messagingServiceSid: 'MG4ade46ca1e774c30154d383f3bff34fb',
            to: '+5516999893010'
        })
        .then(
            message => res.status(201).json({ data: message})
        )
        .catch(
            err => res.status(400).json({ data: err })
        )
        .done();
});






require('./../scr/route/cliente.js')(app);
require('./../scr/route/pedido')(app);
module.exports = app;