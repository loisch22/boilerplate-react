import React from 'react';
import { connect } from 'react-redux'; // use redux store to check authentication
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';


export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest // contains all other props not defined above i.e. from approuter - exact, path - doesn't have to 'rest' can name as anything
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid // would return string or undefined, change to boolean value
});

export default connect(mapStateToProps)(PrivateRoute);
