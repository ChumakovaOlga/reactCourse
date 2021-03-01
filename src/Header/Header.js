import React from "react";
import { NavLink} from 'react-router-dom'
import './Header.css'

const Header = props => (
    <div className="title">
        <p><NavLink to="/chatlist">ChatList</NavLink></p>
       <p><NavLink to={{pathname:"/greeting"}}>ChatMessage</NavLink></p>
    </div>
)
export default Header





