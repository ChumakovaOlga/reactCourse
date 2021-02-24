import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting/Greeting.js'
import './Greeting/Greeting.css';
import Button from '@material-ui/core/Button';
import Header from './Header/Header'
// import TextField from '@material-ui/core/TextField';



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
        input: ''
    }
    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }
    componentDidUpdate() {
            if (this.state.greetings[this.state.greetings.length - 1].name === 'me')
        {
            setTimeout(() =>
                this.setState(
                    {
                        greetings: [...this.state.greetings, {text: 'Не приставай ко мне, я - робот', name: 'robot'}]
                    }), 1000)
        }
    }
    handleClick = (greeting) => {
        this.sendMessage(greeting)
        // this.setState({ greetings: [ ...this.state.greetings, {text: greeting, name: 'me'} ] });
    };
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
                  <div className='message-field'>
                     {greetingsText}
                   </div>
                 <div style={{width: '100%', display: 'flex'}}>

                     {/*<TextField*/}
                     {/*    ref={this.textInput}*/}
                     {/*    name = 'input'*/}
                     {/*    id="outlined-basic"*/}
                     {/*    label="Outlined" variant="outlined"*/}
                     {/*    className='text' type="text"*/}
                     {/*    onChange={this.handleChange}*/}
                     {/*    value={this.state.input}*/}
                     {/*    onKeyUp={(event) =>*/}
                     {/*          this.handleKeyUp(event, this.state.input)}*/}
                     {/*/>*/}


                         <input
                             ref={this.textInput}
                             name = 'input'
                                className='text' type="text"
                                onChange={this.handleChange}
                                value={this.state.input}
                                onKeyUp={(event) =>
                                    this.handleKeyUp(event, this.state.input)}
                         />



                         {/*<button className='button'*/}
                         {/*        onClick={ () => this.handleClick(this.state.input)}*/}
                         {/*>*/}
                         {/*    Отправить*/}
                         {/*</button>*/}

                     <Button variant="contained"
                             className='button'
                             onClick={ () => this.handleClick(this.state.input)}
                     >
                         Send
                     </Button>

                 </div>
             </div>
     );
    }
}

export default App;
