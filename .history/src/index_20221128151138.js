import React from 'react';
import  ReactDOM  from 'react-dom';

import './index.css';

import App from './App';
import { ContextProvider } from './contexts/ContextProvider';


ReactDOM.render(
<ContextProvider></ContextProvider>
<App />, 

document.getElementById('root'));