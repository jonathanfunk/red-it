import React from 'react';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Gandalf from '../../lib/gandalf-validator/gandalf';
import styles from './styles.css';


class Login extends Gandalf {
  constructor() {
    const fields = {
      name: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Name',
        },
      },
      email: {
        component: TextField,
        validators: ['required', 'email'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
        },
        debounce: 300,
      },
    };
    super(fields);
  }

  handleSubmit() {
    const data = this.getCleanFormData();
    if (!data) return;
    // Submit to REDUX
    console.log('goin\' to REDUX', data);
  }

  render() {
    const fields = this.state.fields;

    return (
      <div className={styles.login}>
        <Card style={{ width: '500px' }}>
          <Toolbar>
            <ToolbarTitle text="Login" />
          </Toolbar>
          <form style={{ width: '100%' }}>
            {fields.name.element} <br />
            {fields.email.element} <br />
            <FlatButton label="Submit" primary onClick={() => this.handleSubmit()} />
            <FlatButton label="Signup" />
          </form>
        </Card>
      </div>
    );
  }
}

export default Login;

