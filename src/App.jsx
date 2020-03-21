import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Head from "./head/Head.jsx";
import { Provider } from 'react-redux';
import { useLocation } from "react-router";
import Flyght from './main/Flyght.jsx';
import store from './store.js';

function App() {
    let location = useLocation().pathname;

    return (
        <Provider store={store}>
            <Head></Head>
            <Switch>
                <Route exact path={location}><Flyght/></Route>
            </Switch>
        </Provider>
    );
};

export default App;