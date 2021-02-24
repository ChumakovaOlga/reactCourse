import React from 'react'
import Avatar from '@material-ui/core/Avatar';


export default props => (
    <div className='message'
         style={ { alignSelf: props.name === 'robot' ?
                 'flex-start' : 'flex-end',

         } }
    >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
        <div>{props.text}</div>
        <div className='message-sender'>{props.name}</div>

    </div>
    )
