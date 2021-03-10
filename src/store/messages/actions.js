import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});
export const addMessageThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== AUTHORS.BOT) {
        setTimeout(() => {

            dispatch(addMessage(chatId, { text: 'Hello', author: AUTHORS.BOT }));
        }, 1000);
    }
};
