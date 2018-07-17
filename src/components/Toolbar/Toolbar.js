import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'
const toolbar = (props) => {
  return (
    <header className="Toolbar">
        <nav className="Toolbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="Toolbar__logo"><a href="/">The Logo</a></div>
            <div className="Toolbar__spacer"/>
            <div className="Toolbar__navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default toolbar
