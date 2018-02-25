import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './routes'

render(<BrowserRouter>{routes}</BrowserRouter>, document.getElementById('app'));

// render(<Router><Route exact path="/" component={App} /></Router>, document.getElementById('app'));
