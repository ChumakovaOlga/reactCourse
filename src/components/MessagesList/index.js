import { useCallback } from "react";

export default function MessagesList({ messages }) {
    const renderMessage = useCallback((message, i) => (
        <div key={i}>
            <span>{message.author}: </span>
            <span>{message.text}</span>
        </div>
    ), []);

    return messages.map(renderMessage);
}











// import React from 'react'
// import Button from '@material-ui/core/Button';
// import TextField from "@material-ui/core/TextField";
//
//
//
// export default function MessagesList() {
//     return(
//     <div>
//     <form className='form-item'>
//         <div style={{width: '100%', display: 'flex'}}>
//
//             <TextField
//                 inputRef={this.textInput}
//                 name='input'
//                 id="outlined-basic"
//                 label="Outlined" variant="outlined"
//                 className='text' type="text"
//                 onChange={this.handleChange}
//                 value={this.state.input}
//                 onKeyUp={(event) =>
//                     this.handleKeyUp(event, this.state.input)}
//             />
//
//             <Button variant="contained"
//                     className='button'
//                 // onClick={ () => this.handleClick(this.state.input)}
//                     onClick={this.handleClick}>
//                 Send
//             </Button>
//         </div>
//     </form>
//     </div>
//     )
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
