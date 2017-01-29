import React from 'react';
import styles from './styles.css';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const Login = () => (
  <div className={styles.login}>
    <Card style={{ width: '500px' }}>
      <Toolbar>
        <ToolbarTitle text="Login" />
      </Toolbar>
      <form>
        <TextField
          style={{ width: '100%' }}
          hintText="Email"
          errorText="Please enter your email"
          floatingLabelText="Email"
          />
        <TextField
          style={{ width: '100%' }}
          hintText="Password"
          errorText="Please enter your password"
          floatingLabelText="Password"
          />
        <FlatButton
          style={{ 
            backgroundColor: 'red',
            color: 'white',
          }}
          label="Login"
          />
        <FlatButton
          label="Signup"
          />
      </form>
    </Card>
  </div>
);

export default Login;

