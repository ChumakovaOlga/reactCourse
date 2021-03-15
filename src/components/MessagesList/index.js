import React from 'react'
import { useCallback } from "react";
import './MessageList.css'

export default function MessagesList({ messages }) {
    const renderMessage = useCallback((message, i) => (
        <div className='message-field'
            key={i}
        >
            <div className='message-sender'>{message.author}: </div>
            <div className='message'>{message.text}</div>
        </div>
    ), []);

    return messages.map(renderMessage);
}










