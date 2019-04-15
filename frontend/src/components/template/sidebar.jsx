import React from 'react'
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
            <a href="#"><img className="circle" src={imgPeopple} alt=""/></a>
            <a href="#"><span className="white-text name">Cleber Rezende</span></a>
            <a href="#"><span className="white-text email">Operador de Caixa</span></a>
          </div>
          </li>
          <li><div className="divider"></div></li>
          <li><a href="#" className="subheader">Menu</a></li>
          <li><a href="#" className="waves-effect"><i className="material-icons">people</i>Clientes</a></li>
          <li><a href="#" className="waves-effect"><i className="material-icons">restaurant</i>Pedidos</a></li>
          <li><div className="divider"></div></li>
          <li><a href="#" className="waves-effect"><i className="material-icons">input</i>Sair</a></li>

        </ul>
        <a id="btn-sidebar" href="#" data-target="slide-out" className="sidenav-trigger btn z-depth-3"><i className="material-icons">menu</i></a>
      </div>
    )
  }
}
export default Sidebar;