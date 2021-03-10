import { Link } from "react-router-dom";
import './ChatList.css'
export default function ChatList({ chats, chatId, onAddChat }) {
    console.log(chatId);
    return (
        <>
            {chats.map((chat, i) => (
                <div
                    key={i}
                    className='chatList'
                >
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{ color: chat.id === chatId ? "#000000" : "grey" }}>
                            {chat.name}
                        </b>
                    </Link>
                </div>
            ))}
            <div onClick={onAddChat} style={{cursor: 'pointer'}}>Add Chat</div>
        </>
    );
}





//import React from 'react';
//import Avatar from "@material-ui/core/Avatar";
// import './Index.css'
// import {withRouter} from 'react-router-dom'
//
// const Index =  props => {
//
//     return (
//         <div className='chatList'>
//             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
//             <h3>{props.person}</h3>
//         </div>
//     )
// }
// export default withRouter(Index)
//



