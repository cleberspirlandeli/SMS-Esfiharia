import './cliente.css'
import React from 'react'
import { Input, Row, Col, Collapsible, CollapsibleItem, Button } from 'react-materialize'

export default props => {

    let formErrors = props.formErrors

    return (
        <Row className="container margin-bottom">
            <h4 className="center">CADASTRO DE CLIENTES</h4>

            {/* 
        <Button
            floating
            large
            className='blue right'
            waves='light'
            icon='check'
            onClick={props.handleAdd}
            style={{ bottom: '28px', right: '24px' }}
        /> */}

            {/* 
        <Button
            floating
            large
            className='green right'
            waves='light'
            icon='check'
            onClick={props.handleAdd}
            style={{ bottom: '28px', right: '24px' }}
        /> */}

            <Button
                floating
                large
                className='red right'
                waves='light'
                icon='close'
                onClick={props.handleAdd}
                style={{ bottom: '28px', right: '24px' }}
            />

            <Collapsible accordion defaultActiveKey={0}>

                <CollapsibleItem header='Dados Pessoais' icon='account_circle'>
                    <Row>
                        <Col s={12}>
                            <Input
                                id="numeroPedido"
                                name="numeroPedido"
                                label="Nº Pedido"
                                type="number"
                                value={props.numeroPedido}
                                onChange={props.handleInputChange}
                                s={12}
                                l={4} />

                        </Col>
                        <Col s={12}>
                            <Input className={formErrors.nome.length > 0 ? 'teste':''}
                                id="nome"
                                name="nome"
                                label="Nome"
                                value={props.nome}
                                onChange={props.handleInputChange}
                                s={12}
                                l={8} />
                            {formErrors.nome.length > 0 && (
                                <span className="errorMessage">{formErrors.nome}</span>
                            )}
                            <Input
                                id="telefone"
                                name="telefone"
                                label="Telefone"
                                value={props.telefone}
                                onChange={props.handleInputChange}
                                s={12}
                                l={4} />
                                {formErrors.telefone.length > 0 && (
                                    <span className="errorMessage">{formErrors.telefone}</span>
                                )}

                            <Input
                                id="dataNascimento"
                                name="dataNascimento"
                                label="Data Nascimento"
                                value={props.dataNascimento}
                                onChange={props.handleInputChange}
                                s={12}
                                l={4} />
                                {formErrors.dataNascimento.length > 0 && (
                                    <span className="errorMessage">{formErrors.dataNascimento}</span>
                                )}
                            <Input 
                                id="cpf"
                                name="cpf"
                                label="CPF"
                                value={props.cpf}
                                onChange={props.handleInputChange}
                                s={12}
                                l={4} />
                                {formErrors.cpf.length > 0 && (
                                    <span className="errorMessage">{formErrors.cpf}</span>
                                )}
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
                            <Input
                                id="cep"
                                name="cep"
                                label="CEP"
                                value={props.cep}
                                onChange={props.handleInputChange}
                                s={12} l={3} />

                            <Input
                                id="rua"
                                name="rua"
                                label="Rua"
                                value={props.rua}
                                onChange={props.handleInputChange}
                                s={12} l={6} />

                            <Input
                                id="numeroRua"
                                name="numeroRua"
                                label="Número"
                                value={props.numeroRua}
                                onChange={props.handleInputChange}
                                s={12} l={3} />

                            <Input
                                id="bairro"
                                name="bairro"
                                label="Bairro"
                                value={props.bairro}
                                onChange={props.handleInputChange}
                                s={12} l={4} />

                            <Input
                                id="complemento"
                                name="complemento"
                                label="Complemento"
                                value={props.complemento}
                                onChange={props.handleInputChange}
                                s={12} l={8} />

                        </Col>
                    </Row>
                </CollapsibleItem>
            </Collapsible>
        </Row>
    )
}