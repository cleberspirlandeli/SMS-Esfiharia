import './listarPedido.css'
import { Row, Table, Input, Icon, Button, Collection, CollectionItem } from 'react-materialize'
import React from 'react'

export default props =>
    <div>
        <Row className="container">
            <h4 className="center">PEDIDOS</h4>
        </Row>

        <Button
            floating
            large
            className='blue right'
            waves='light'
            icon='check'
            onClick={props.handleAdd}
            style={{ bottom: '28px', right: '270px' }}
        />

        {/* <Button
            id="add-pedido2"
            onClick={() => console.log('click add Pedido')}
            floating
            large
            className='blue right'
            waves='light'
            icon='add'
        /> */}
        <Collection className="container">
            <CollectionItem>
                <Row>
                    <Input s={9} label="Procurar por Pedido ou Nome" validate><Icon right>search</Icon></Input>
                    <br /><p>Total Pedidos: 5</p>
                </Row>
            </CollectionItem>

            <CollectionItem>
                {/* <Button
                    id="add-pedido"
                    onClick={() => console.log('click add Pedido')}
                    floating
                    large
                    className='blue right'
                    waves='light'
                    icon='add'
                /> */}

                <Row className="">
                    <Table striped>
                        <thead>
                            <tr>
                                <th data-field="pedido">Pedido</th>
                                <th data-field="nome">Nome</th>
                                <th data-field="horario">Horário</th>
                                <th data-field="status">Status</th>
                                <th data-field="status"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                {/* Recebido */}
                                <td>0001</td>
                                <td>Cleber Rezende Spirlandeli</td>
                                <td>20:35</td>
                                <td>
                                    <Input s={12} l={12} type='select' label='' icon='assignment_returned' defaultValue='1'>
                                        <option value='1'>Recebido</option>
                                        <option value='2'>Em Preparação</option>
                                        <option value='3'>No Forno</option>
                                        <option value='4'>Saiu Entrega</option>
                                        <option value='5'>Entregue</option>
                                    </Input>
                                </td>
                                <td>
                                    <Button waves='light'>Editar<Icon left>edit</Icon></Button>
                                </td>
                            </tr>

                            <tr>
                                {/* Em Preparação */}
                                <td>0002</td>
                                <td>Batman </td>
                                <td>20:45</td>
                                <td>
                                    <Input s={12} l={12} type='select' label='' icon='hot_tub' defaultValue='2'>
                                        <option value='1'>Recebido</option>
                                        <option value='2'>Em Preparação</option>
                                        <option value='3'>No Forno</option>
                                        <option value='4'>Saiu Entrega</option>
                                        <option value='5'>Entregue</option>
                                    </Input>
                                </td>
                                <td><Button waves='light'>Editar<Icon left>edit</Icon></Button></td>
                            </tr>

                            <tr>
                                {/* No Forno */}
                                <td>0003</td>
                                <td>Superman</td>
                                <td>21:00</td>
                                <td>
                                    <Input s={12} l={12} type='select' label='' icon='whatshot' defaultValue='3'>
                                        <option value='1'>Recebido</option>
                                        <option value='2'>Em Preparação</option>
                                        <option value='3'>No Forno</option>
                                        <option value='4'>Saiu Entrega</option>
                                        <option value='5'>Entregue</option>
                                    </Input>
                                </td>
                                <td><Button waves='light'>Editar<Icon left>edit</Icon></Button></td>
                            </tr>

                            <tr>
                                {/* Saiu Entrega */}
                                <td>0004</td>
                                <td>Mulher Maravilha</td>
                                <td>21:10</td>
                                <td>
                                    <Input s={12} l={12} type='select' label='' icon='motorcycle' defaultValue='4'>
                                        <option value='1'>Recebido</option>
                                        <option value='2'>Em Preparação</option>
                                        <option value='3'>No Forno</option>
                                        <option value='4'>Saiu Entrega</option>
                                        <option value='5'>Entregue</option>
                                    </Input>
                                </td>
                                <td><Button waves='light'>Editar<Icon left>edit</Icon></Button></td>
                            </tr>

                            <tr>
                                {/* Entregue */}
                                <td>0005</td>
                                <td>Coringa</td>
                                <td>21:10</td>
                                <td>
                                    <Input s={12} l={12} type='select' label='' icon='done_all' defaultValue='5'>
                                        <option value='1'>Recebido</option>
                                        <option value='2'>Em Preparação</option>
                                        <option value='3'>No Forno</option>
                                        <option value='4'>Saiu Entrega</option>
                                        <option value='5'>Entregue</option>
                                    </Input>
                                </td>
                                <td><Button waves='light'>Editar<Icon left>edit</Icon></Button></td>
                            </tr>

                        </tbody>
                    </Table>
                </Row>
            </CollectionItem>
        </Collection>
    </div>