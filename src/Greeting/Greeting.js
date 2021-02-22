import React from 'react'

export default props => (


    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px'
    }}>
    <p>Текст: {props.text}</p>
    <p>{props.name}</p>
    <button onClick={props.onChangeName}>Отправить</button>
    </div>
    )

