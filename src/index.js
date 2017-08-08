import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router  , Route , Link  } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Basic from './App';

ReactDOM.render(<Basic />, document.getElementById('root'));
registerServiceWorker();
