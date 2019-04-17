import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import imgOffice from './../../assets/imgs/office.jpg'
import imgPeopple from './../../assets/imgs/yuna.jpg'

// export default props => (
class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li><div className="user-view">
            <div className="background">
              <img src={imgOffice} alt="office" />
            </div>
            <img className="circle" src={imgPeopple} alt="" />
            <span className="white-text name">Cleber Rezende</span>
            <span className="white-text email">Operador de Caixa</span>
          </div>
          </li>
          <li><div className="divider"></div></li>
          <li><a href="#" className="subheader">Menu</a></li>
          <Link to="listar-pedidos"><li><a href="#" className="waves-effect"><i className="material-icons">home</i>Início</a></li></Link>
          <Link to="cadastrar-clientes"><li><a href="#" className="waves-effect"><i className="material-icons">people</i>Clientes</a></li></Link>
          <Link to="listar-pedidos"><li><a href="#" className="waves-effect"><i className="material-icons">restaurant</i>Pedidos</a></li></Link>

          <li><div className="divider"></div></li>
          <li><a href="#" className="waves-effect"><i className="material-icons">input</i>Sair</a></li>

        </ul>
        <a id="btn-sidebar" href="#" data-target="slide-out" className="sidenav-trigger btn z-depth-3"><i className="material-icons">menu</i></a>

      </div>
    )
  }
}
export default Sidebar;