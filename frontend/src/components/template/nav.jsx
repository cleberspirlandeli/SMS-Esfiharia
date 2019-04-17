import './logo.css'
import './nav.css'
//import Logo from './../../assets/imgs/logo-rzn.jpg'
import { Navbar, NavItem, Row, Col, Icon, Badge } from 'react-materialize'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <div className="nav-materialize">
        <Navbar href="#" className="sidenav-trigger"
            brand='A Esfiharia' data-target="slide-out" right>

            <Row className="padding-top">

                <Col s={12}>

                    <NavItem>
                        <Link to="listar-pedidos">
                            <Icon left tiny>restaurant</Icon>
                            Pedidos
                            <Badge className="red" newIcon data-badge-caption="Novos">
                                4
                            </Badge>
                        </Link>
                    </NavItem>

                    {/* <NavItem>
                        <Link to="cadastrar-clientes">
                            <Icon left tiny>people</Icon>
                            Clientes
                            <Badge className="blue darken-2" newIcon>
                                4
                            </Badge>
                        </Link>
                    </NavItem> */}
                    
                    <NavItem>
                        <Icon left tiny>input</Icon>
                        Sair
                    </NavItem>
                </Col>

            </Row>
        </Navbar>
    </div>