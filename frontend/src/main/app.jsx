import './app.css'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './../components/router/routes'
import Nav from './../components/template/nav'
import Footer from './../components/template/footer'
import Sidebar from './../components/template/sidebar.jsx'


//export default props =>
export default class Todo extends Component {

    handleAdd() {
        console.log('add');
    }

    render() {
        return (
            <div className="content-materialize">

                <BrowserRouter>
                    <div className="grid">
                        <Nav />
                        <Sidebar />
                        <Routes handleAdd={this.handleAdd} />
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}