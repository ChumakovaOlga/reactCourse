import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Greeting from './Greeting/Greeting'
import Button from '@material-ui/core/Button';
import Header from './Header/Header'
import TextField from '@material-ui/core/TextField';
import ChatList from "./ChatList/ChatList";


class App extends Component {
    constructor(props) {
        super(props);
        // создадим ref в поле `textInput` для хранения DOM-элемента
        this.textInput = React.createRef();
    }
    state = {
        greetings: [
            {text: 'Привет!', name: 'robot'},
            {text: 'Как дела?', name: 'robot'},
        ],
        chats: [
            {person:'Ali Connors'},
            {person:'Jennifer'},
            {person:'Sandra Adams'},
        ],
        input: ''
    }
    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }
    componentDidUpdate(prevProps, prevState) {
        if  (prevState.greetings.length < this.state.greetings.length &&
       this.state.greetings[this.state.greetings.length - 1].name === 'me')
        {
            setTimeout(() =>
                this.setState(
                    {
                        greetings: [...this.state.greetings, {text: 'Не приставай ко мне, я - робот', name: 'robot'}]
                    }), 1000)
        }
    }

    handleClick = () => {const{input} = this.state;
        this.sendMessage(input);
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    }
    handleKeyUp = (event, greeting) => {
        if (event.keyCode === 13) {
            this.sendMessage(greeting)
            this.setState({greetings: [...this.state.greetings, {text: greeting, name: 'me'}]})
        }
    }

    sendMessage = (greeting) => {
        this.setState({greetings: [...this.state.greetings, {text: greeting,name: 'me'}],
            input: ''
        })
    }
    render() {
        const greetingsText = this.state.greetings.map((greeting, index) =>
            (
                <Greeting
                    key = {index}
                    text = {greeting.text}
                    name = {greeting.name}
                />
            ))
        return (
            <div  id='main' className="layout">
                <Header/>
                <Route path="/ChatList" render={() => <h1>List</h1>}/>
                <Route path="/Greeting" render={() => <h1>Message</h1>} />

                <div   className='side-bar' >

                    {this.state.chats.map((chat, index) => {
                        return (
                            <ChatList
                                key={index}
                                person={chat.person}

                            />
                        )
                    })}
                 </div>

                <div className='message-field'>
                        {greetingsText}
                       </div>

               <form className='form-item'>
                <div style={{width: '100%', display: 'flex'}}>
                    <TextField
                        inputRef={this.textInput}
                        name = 'input'
                        id="outlined-basic"
                        label="Outlined" variant="outlined"
                        className='text' type="text"
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={(event) =>
                            this.handleKeyUp(event, this.state.input)}
                    />

                    <Button variant="contained"
                            className='button'
                            onClick={this.handleClick}>
                        Send
                    </Button>
                </div>
              </form>
            </div>
        );
    }
}

export default App;
