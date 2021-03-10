import React from "react";
import { useState, useCallback, useMemo} from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MessagesList from "../MessagesList";
import Input from "../Input";
import ChatList from "../ChatList";
import AddChatDialog from "../AddChatDialog";
import { addChat } from "../../store/chats/actions";
import { addMessageThunk } from "../../store/messages/actions";
import './Chats.css'
import Header from "../Header/Header";

export default function Chats() {
    const params = useParams();
    const chats = useSelector(state => state.chats.chatList);
    const messages = useSelector((state) => state.messages.messageList);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const addNewChat = useCallback((name) => {
        dispatch(addChat(name));
        setVisible(false);
    }, [dispatch]);

    const handleClose = useCallback(() => {
        setVisible(false);
    }, []);
    const handleOpen = useCallback(() => {
        setVisible(true);
    }, []);
    const selectedChat = useMemo(
        () => chats.find((chat) => chat.id === params.chatId),
        [params, chats]
    );
    const sendMessage = useCallback(
        (text, author) => {
            dispatch(addMessageThunk(selectedChat?.id, { text, author }));
        },
        [selectedChat, dispatch]
    );
    const messageList = useMemo(() => messages?.[selectedChat?.id] || [], [
        messages,
        selectedChat,
    ]);
    if (!params.chatId) {
        return (
            <>
                <div className='side-bar'>
                <ChatList
                    chats={chats}
                    chatId={null}
                    onAddChat={handleOpen} />
                </div>
                <AddChatDialog
                    visible={visible}
                    onClose={handleClose}
                    onSubmit={addNewChat}
                />
            </>
        );
    }
    if (!selectedChat) {
        return <Redirect to='/chats' />
    }
    return (
            <div className='layout'>
                <div>
                        <div>
                            <Header/>
                            <ChatList
                                chats={chats}
                                chatId={params.chatId} onAddChat={handleOpen} />
                        </div>
                    <div>
                        <MessagesList messages={messageList} />
                        <Input onAddMessage={sendMessage} />
                    </div>
                </div>
                    <AddChatDialog
                        visible={visible}
                        onClose={handleClose}
                        onSubmit={addNewChat}
                    />
            </div>
    );
}
