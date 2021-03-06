import React from "react";
import { NavLink} from 'react-router-dom'
import './Header.css'

const Header = props => (
    <div className="title">
        <p><NavLink to="/">HOME</NavLink></p>
        <p><NavLink to="/chatlist">CHATLIST</NavLink></p>
       <p><NavLink to={{pathname:"/greeting"}}>CHATMESSAGE</NavLink></p>
    </div>
)
export default Header





