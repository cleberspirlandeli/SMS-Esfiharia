import './app.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from './../components/template/logo'
import Routes from './../components/router/routes'
import Nav from './../components/template/nav'
import Main from './../components/template/main'
import CadastrarCliente from './../components/cliente/cadastrarCliente'
import ListarPedido from '../components/pedido/listarPedido'



export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Routes />
        </div>
    </BrowserRouter>