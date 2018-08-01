import React from 'react'
import { NavLink } from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import NavItems from '../NavItems/NavItems'
import './Toolbar.css'
const toolbar = (props) => {
  return (
    <header className="Toolbar">
        <nav className="Toolbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="Toolbar__logo"><NavLink exact to="/">The Logo</NavLink></div>
            <div className="Toolbar__spacer"/>
            <NavItems whichNav="Toolbar__navigation-items"/>
        </nav>
    </header>
  )
}

export default toolbar
