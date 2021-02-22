import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting/Greeting.js'

class App extends Component {
    state = {
        greetings: [
            {text: 'Привет!', name: 'John'},
            {text: 'Как дела?', name: 'Pete'},
        ],
        textMessage: '',
        pageTitle: ''
    }
    addText = () => {
        const newGreetings = [...this.state.greetings, {text: 'Нормально!', name: 'Mike'}]
        this.setState({
            greetings: newGreetings
        })
    }
    showNameHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }
    handleInput = (event) => {
        this.setState({
            textMessage: event.target.value
        })
    }
    componentDidUpdate() {
        if (this.state.greetings.length % 2 === 1) {
            setTimeout(() =>
                this.setState(
                    {
                        greetings: [...this.state.greetings, {text: 'Не приставай ко мне, я - робот', name: 'robot'}]
                    }), 1000)
        }
    }
    render() {
        const divStyle = {
            textAlign: 'center'
        }
        const greetings =  this.state.greetings;
        let greetingsText = greetings.map((greeting, index) =>
            <Greeting
                key = {index}
                text = {greeting.text}
                name = {greeting.name}
                onChangeName={() => this.showNameHandler( greetings[index].name)}
            />
        );
     return (
         <div style={divStyle}>

             <h2>Сообщение отправил: {this.state.pageTitle}</h2>
             <h3>Текст сообщения:{this.state.textMessage}</h3>
             <input type="text" onChange={this.handleInput}/>

             {greetingsText}

             <button onClick={this.addText}>Добавить текст</button>
       </div>
     );
    }
}

export default App;
