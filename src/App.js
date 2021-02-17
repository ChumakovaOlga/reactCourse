import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting/greeting.js'

class App extends Component {
    state = {
        greetings: [
            {text: 'Привет!'},
            {text: 'Как дела?'},
        ]
    }
    addText = () => {
        let greetings = this.state.greetings;
        greetings.push({text: 'Нормально'});
        this.setState({
            greetings: greetings
        })
    }

    render() {
        const greetings =  this.state.greetings;
        let greetingsText = greetings.map((el) =>
            <Greeting text={el.text}/>
        );
     return (
        <div>
            {greetingsText}
            <button onClick={this.addText}>Добавить текст</button>
       </div>
     );
    }
}

export default App;
