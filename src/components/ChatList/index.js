import { Link } from "react-router-dom";
import './ChatList.css'
export default function ChatList({ chats, chatId, onAddChat }) {

    return (
        <div className='side-bar'>
            {chats.map((chat, i) => (
                <div
                    key={i}
                    className='chatList'
                >
                    <Link to={`/chats/${chat.id}`}>
                        <b
                            style={{ color: chat.id === chatId ? "red" : "#000" }}
                        >
                            {chat.name}
                        </b>
                    </Link>
                </div>
            ))}
            <button
                className='addChat'
                onClick={onAddChat}
                >
                Add Chat
            </button>
        </div>
    );
}








