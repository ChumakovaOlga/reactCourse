import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import './ChatList.css'
import {withRouter} from 'react-router-dom'

const ChatList =  props => {

    return (
        <div className='chatList'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
            <h3>{props.person}</h3>
        </div>
    )
}
export default withRouter(ChatList)




