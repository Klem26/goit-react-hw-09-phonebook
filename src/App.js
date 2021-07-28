import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
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

export default function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>


          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
          ><LoginView />
          </PublicRoute>

          <PrivateRoute
            path="/contacts"
            redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container >
  );

}

