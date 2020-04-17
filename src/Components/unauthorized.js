import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
import Register from './auth/register';
// import RegisterUser from './auth/registerUser';
import Login from './auth/login';
// import Activate from './auth/activate';
// import validateInvite from './auth/validate-invite';
// import ResetPasswordInit from './auth/reset-password-init';
// import ResetPasswordFinish from './auth/reset-password-finish';

const UnauthorizedLayout = () => (
  <div className="unauthorized-layout">
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/register" component={Register} />
      {/* <Route path="/auth/registerUser/:key" component={RegisterUser} />
      <Route path="/auth/activate/:key" component={Activate} />
      <Route path="/auth/validateUser/:key" component={validateInvite} />
      <Route path="/auth/reset-password/init" component={ResetPasswordInit} /> */}
      <Redirect to="/auth/register" />
    </Switch>
  </div>
)

export default UnauthorizedLayout;
