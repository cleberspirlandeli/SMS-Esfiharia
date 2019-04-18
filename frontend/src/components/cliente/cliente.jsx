import React, { Component } from 'react'
import ClienteForm from './clienteForm'



const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    })

    return valid;
}

export default class Loja extends Component {
    constructor(props) {
        super(props);
        this.state = {

            // Cadastro Pessoal
            numeroPedido: '',
            nome: '',
            telefone: '',
            dataNascimento: '',
            cpf: '',
            sexo: '',

            // Cadastro Endereço
            cep: '',
            rua: '',
            numeroRua: '',
            bairro: '',
            complemento: '',

            formErrors: {
                numeroPedido: '',
                nome: '',
                telefone: '',
                dataNascimento: '',
                cpf: '',
                cep: '',
                rua: '',
                numeroRua: '',
                bairro: '',
                complemento: ''
            },
            formValid: true
        }

        // Funções
        this.handleInputChange = this.handleInputChange.bind(this)
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let formErrors = this.state.formErrors;

        //console.log(value, name)

        this.setState({
            [name]: value
        });

        switch (name) {
            case 'numeroPedido':
                formErrors.numeroPedido = value.length > 0 && value.length < 4 ? "Campo Número Pedido incorreto." : ''
                break;

            case 'nome':
                formErrors.nome = value.length > 0 && value.length < 3 ? "Campo Nome incorreto." : ''
                break;

            case 'telefone':
                formErrors.telefone = value.length > 0 && value.length < 11 ? "Campo Telefone incorreto." : ''
                break;

            case 'dataNascimento':
                formErrors.dataNascimento = value.length > 0 && value.length < 8 ? "Campo Data Nascimento incorreto." : ''
                break;

            case 'cpf':
                formErrors.cpf = value.length > 0 && value.length < 14 ? "Campo CPF incorreto." : ''
                break;

            case 'cep':
                formErrors.cep = value.length > 0 && value.length < 10 ? "Campo CEP incorreto." : ''
                break;

            case 'rua':
                formErrors.rua = value.length > 0 && value.length < 3 ? "Campo Rua incorreto." : ''
                break;

            case 'numeroRua':
                formErrors.numeroRua = value.length <= 0 ? "Campo Número da Rua incorreto." : ''
                break;

            case 'bairro':
                formErrors.bairro = value.length > 0 && value.length < 3 ? "Campo Bairro incorreto." : ''
                break;

            case 'complemento':
                formErrors.complemento = value.length > 0 && value.length < 2 ? "Campo Complemento incorreto." : ''
                break;

            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () =>
            console.log(this.state.formErrors)
        )
    }

    render() {
        return (
            <div >
                <ClienteForm
                    numeroPedido={this.state.numeroPedido}
                    nome={this.state.nome}
                    telefone={this.state.telefone}
                    dataNascimento={this.state.dataNascimento}
                    cpf={this.state.cpf}
                    sexo={this.state.sexo}
                    cep={this.state.cep}
                    rua={this.state.rua}
                    numeroRua={this.state.numeroRua}
                    bairro={this.state.bairro}
                    complemento={this.state.complemento}

                    formErrors={this.state.formErrors}

                    // Funções
                    handleInputChange={this.handleInputChange}
                />
            </div >
        );
    }
}