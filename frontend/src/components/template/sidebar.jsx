import React from 'react'
import { SideNav, Button, Icon, SideNavItem } from 'react-materialize'
// import { Link } from 'react-router-dom'
import './sidebar.css'
import imgOffice from './../../assets/imgs/office.jpg'
import imgPeopple from './../../assets/imgs/yuna.jpg'

// export default props => (
class Sidebar extends React.Component {
  render() {
    return (
      <div id="btn-sidebar">
        <SideNav trigger={<Button className="z-depth-2"><Icon>menu</Icon></Button>} options={{ closeOnClick: true }}>
          <SideNavItem userView user={{
            background: imgOffice,
            image: imgPeopple,
            name: 'Cleber Rezende',
            email: 'Operador de Caixa'
          }} />
          <SideNavItem subheader>
            Menu
          </SideNavItem>

          <SideNavItem waves href="listar-pedidos" icon="home">
            Início
            </SideNavItem>
          <SideNavItem waves href="cadastrar-clientes" icon="people">
            Clientes
          </SideNavItem>
          <SideNavItem waves href="listar-pedidos" icon="restaurant">
            Pedidos
            </SideNavItem>
          <SideNavItem divider />
          <SideNavItem waves href="configuracoes" icon="build">
            Configurações
          </SideNavItem>
        </SideNav>
      </div >
    )
  }
}
export default Sidebar;