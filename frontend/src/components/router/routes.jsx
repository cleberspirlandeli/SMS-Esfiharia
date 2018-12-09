import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import CadastrarCliente from '../cliente/cadastrarCliente'
import ListarPedido from '../pedido/listarPedido'

export default props =>
    <Switch>
        <Route exact path='/' component={ListarPedido} />
        <Route path='/cadastrar-cliente' component={ListarPedido} />
        <Redirect from='*' to='/' />

    </Switch>
