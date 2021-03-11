import React from 'react'
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import './Router.css'

export default function Router() {
    return (
        <BrowserRouter>
            <div className='nav'>
            <ul>
                <li className='navLi'>
                    <Link to="/profile">profile</Link>
                </li>

                <li>
                    <Link to="/chats">chats</Link>
                </li>

                <li>
                    <Link to="/">home</Link>
                </li>
            </ul>
            </div>

            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>

                <Route exact path="/chats"
                    render={({ match }) => <Chats params={match.params} />}
                />

                <Route path="/chats/:chatId"
                    render={({ match }) => <Chats params={match.params} />}
                />

                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
