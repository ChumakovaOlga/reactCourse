import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Greeting from './Greeting/Greeting'
import Button from '@material-ui/core/Button';
import Header from './Header/Header'
import TextField from '@material-ui/core/TextField';
import ChatList from "./ChatList/ChatList";
import {connect} from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props);
        // создадим ref в поле `textInput` для хранения DOM-элемента
        this.textInput = React.createRef();
    }

    //Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }
    componentDidUpdate(prevProps, prevState) {
        if  (prevState.greetings.length < this.props.greetings.length &&
       this.props.greetings[this.props.greetings.length - 1].name === 'me')
        {
            setTimeout(() =>
                this.setState(
                    {
                        greetings: [...this.props.greetings, {text: 'Не приставай ко мне, я - робот', name: 'robot'}]
                    }), 1000)
        }
    }

    // handleClick = () => {const{input} = this.props;
    //     this.sendMessage(input);
    // }

    // handleChange = (event) => {
    //     this.setState({input: event.target.value})
    // }


    // handleKeyUp = (event, greeting) => {
    //     if (event.keyCode === 13) {
    //         this.sendMessage(greeting)
    //         this.setState({greetings: [...this.props.greetings, {text: greeting, name: 'me'}]})
    //     }
    // }
    sendMessage = (greeting) => {
        this.setState({greetings: [...this.props.greetings, {text: greeting,name: 'me'}],
            input: ''
        })
    }
    render() {

        const greetingsText = this.props.greetings.map((greeting, index) =>
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

                    {this.props.chats.map((chat, index) => {
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
                        onChange={this.props.handleChange}
                        value={this.props.input}
                        onKeyUp={(event) =>
                            this.props.handleKeyUp(event, this.props.input)}
                    />

                    <Button variant="contained"
                            className='button'
                            onClick={this.props.handleClick}>
                        Send
                    </Button>
                </div>
              </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        greetings: state.greetings,
        chats: state.chats,
        input: state.input
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => dispatch({type:'CLICK'}),
        handleChange: () => dispatch({type:'CHANGE'}),
        handleKeyUp: () => dispatch({type:'KEYUP'}),
        sendMessage: () => dispatch({type:'MESSAGE'})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
