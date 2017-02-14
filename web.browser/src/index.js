import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from '../src/store/createStore';
import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import Welcome from './containers/Welcome';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import muiTheme from './styles/mui-theme';
import './styles/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
            <Route path="login" component={Login} />
            <Route path="signup" component={SignUp} />
            <Route path="posts">
              <Route path="new" component={CreatePost} />
              <Route path=":name" component={PostList} />
            </Route>
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
