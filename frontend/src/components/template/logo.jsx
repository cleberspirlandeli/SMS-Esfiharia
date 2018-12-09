import './logo.css'
import Logo from './../../assets/imgs/logo-rzn.jpg'
import { Navbar, NavItem, Row, Col, Icon } from 'react-materialize'
import React from 'react'

export default props =>
    <Navbar brand='A Esfiharia' right>
        <Row className="padding-top">
            <Col s={12}>
                <NavItem onClick={() => console.log('click Pedidos')}>
                    <Icon left tiny>restaurant</Icon>
                    Pedidos
                </NavItem>
                <NavItem href='#'>
                    <Icon left tiny>people</Icon>
                    Clientes
                </NavItem>
                <NavItem href='#'>
                    <Icon left tiny>input</Icon>
                    Sair
                </NavItem>
            </Col>
        </Row>
    </Navbar>