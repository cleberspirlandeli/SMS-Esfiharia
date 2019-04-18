import './app.css'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Nav from './../components/template/nav'
import Sidebar from './../components/template/sidebar.jsx'
import Routes from './../components/router/routes'
import Footer from './../components/template/footer'


//export default props =>
export default class Todo extends Component {
    render() {
        return (
            <div className="content-materialize">

                <BrowserRouter>
                    <div className="">
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