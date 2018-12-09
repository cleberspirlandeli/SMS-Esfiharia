import './app.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './../components/router/routes'
import Logo from './../components/template/logo'
import Nav from './../components/template/nav'
import Main from './../components/template/main'
import CadastrarCliente from './../components/cliente/cadastrarCliente'
import ListarPedido from '../components/pedido/listarPedido'



export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            {/* <Main /> */}
            <CadastrarCliente />
            {/* <ListarPedido /> */}
        </div>
    </HashRouter>