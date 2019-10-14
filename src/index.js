import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom" 

// import Header from './components/header/index'
// import Footer from './components/footer/index'
import App from './App'
import * as ServiceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'));

ServiceWorker.unregister();

