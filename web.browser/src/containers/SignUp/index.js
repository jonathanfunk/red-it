import React from 'react';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Gandalf from '../../lib/gandalf-validator/gandalf';
import styles from './styles.css';


class SignUp extends Gandalf {
  constructor() {
    const fields = {
      fname: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'First Name',
          style: { width: 'calc(100% - 20px)' },
        },
      },
      lname: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Last Name',
          style: { width: 'calc(100% - 20px)' },
        },
      },
      email: {
        component: TextField,
        validators: ['required', 'email'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
          style: { width: 'calc(100% - 20px)' },
        },
      },
      password: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Password',
          type: 'password',
          style: { width: 'calc(100% - 20px)' },
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
      <div className={styles.signup}>
        <Card style={{ width: '500px' }}>
          <Toolbar>
            <ToolbarTitle text="Login" />
          </Toolbar>
          <form style={{ width: '100%' }}>
            {fields.fname.element} <br />
            {fields.lname.element} <br />
            {fields.email.element} <br />
            {fields.password.element} <br />
            <FlatButton label="Submit" primary onClick={() => this.handleSubmit()} />
          </form>
        </Card>
      </div>
    );
  }
}

export default SignUp;

