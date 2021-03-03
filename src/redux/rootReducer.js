
const initialState = {
    greetings:[   {text: 'Привет!', name: 'robot'},
        {text: 'Как дела?', name: 'robot'},],
    chats: [    {person:'Ali Connors'},
        {person:'Jennifer'},
        {person:'Sandra Adams'},],
    input: ''
}



export default function rootReducer(state=initialState, action) {

    switch(action.type) {
        case 'CLICK':
            return

        case 'CHANGE':
            return {

            }
        case 'KEYUP':
            return {
            }
        case 'MESSAGE':
            return {

            }
        default:
            return state
    }





}