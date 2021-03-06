
import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import profileReducer from "./profile/reducer";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import articlesReducer from "./articles/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer,
        articles: articlesReducer,
    })
);
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

