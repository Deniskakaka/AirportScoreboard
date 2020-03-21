import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.querySelector('#root');

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, rootElement);