import './logo.css'
import Logo from './../../assets/imgs/logo-rzn.jpg'
import { Navbar, NavItem, Row, Col, Icon } from 'react-materialize'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <div>
        <Navbar brand='A Esfiharia' right>

            <Row className="padding-top">
                <Col s={12}>
                    <NavItem
                        onClick={() => console.log('click Pedidos')}
                    >
                        <Link to="listar-pedidos">
                            <Icon left tiny>restaurant</Icon>
                            Pedidos
                    </Link>
                    </NavItem>
                    <NavItem href='#'>
                        <Link to="cadastrar-clientes">
                            <Icon left tiny>people</Icon>
                            Clientes
                    </Link>
                    </NavItem>
                    <NavItem href='#'>
                        <Icon left tiny>input</Icon>
                        Sair
                </NavItem>
                </Col>
            </Row>
        </Navbar>

    </div>