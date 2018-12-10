import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import CadastrarCliente from '../cliente/cadastrarCliente'
import ListarPedido from '../pedido/listarPedido'

export default props =>
    <Switch>
        <Route exact path='/listar-pedidos' component={ListarPedido} />
        <Route path='/cadastrar-clientes' component={CadastrarCliente} />
        <Redirect from='*' to='/listar-pedidos' />
    </Switch>
