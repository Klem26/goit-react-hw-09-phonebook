import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from './components/Loader';

const HomeView = lazy(() =>
  import('./views/Home/HomeView' /* webpackChunkName: "home-page" */),
);
const LoginView = lazy(() =>
  import('./views/Login/LoginView' /* webpackChunkName: "login-page" */),
);
const RegisterView = lazy(() =>
  import(
    './views/Register/RegisterView' /* webpackChunkName: "register-page" */
  ),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "contacts-page" */
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}
const mapDispatchToprops = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToprops)(App);
