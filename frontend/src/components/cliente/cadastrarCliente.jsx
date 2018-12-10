import './cadastrarCliente.css'
import { Input, Row, Col, Collapsible, CollapsibleItem } from 'react-materialize'
import React from 'react'

export default props =>
    <Row className="container">
        <h4 className="center">CADASTRO DE CLIENTES</h4>
        <Collapsible accordion defaultActiveKey={0}>

            <CollapsibleItem header='Dados Pessoais' icon='account_circle'>

                <Row>
                    <Col s={12}>
                        <Input s={12} l={8} label="Nome" />
                        <Input s={12} l={4} label="Telefone" />
                        <Input s={12} l={4} label="Data Nascimento" />
                        <Input s={12} l={4} label="CPF" />

                        <Input s={12} l={4} type='select' label="Sexo" defaultValue='2'>
                            <option value='1'>Masculino</option>
                            <option value='2'>Feminino</option>
                        </Input>
                    </Col>
                </Row>
            </CollapsibleItem>

            <CollapsibleItem header='Endereço' icon='location_on'>
                <Row>
                    <Col s={12}>
                        <Input s={12} l={3} label="CEP" />
                        <Input s={12} l={6} label="Rua" />
                        <Input s={12} l={3} label="Número" />
                        <Input s={12} l={4} label="Bairro" />
                        <Input s={12} l={8} label="Complemento" />

                    </Col>
                </Row>
            </CollapsibleItem>

        </Collapsible>
    </Row>