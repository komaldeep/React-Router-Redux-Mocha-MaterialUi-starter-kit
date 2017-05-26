import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store';
const store = configureStore();

import App from './components/app';
import Posts from './components/posts';
import Post from './components/post';

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="post" component={Post} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>,
  document.querySelector('.container')
);
