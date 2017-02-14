import React from 'react';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Gandalf from '../../lib/gandalf-validator/gandalf';
import styles from './styles.css';
// import { postJson } from '../../lib/fetch-json/index';


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
    console.log({ 'users': data });

    const params = { method: 'POST', credentials: 'include' };
    const headers = { 'Content-Type': 'application/json' };
    //const body = { data };
    fetch('http://localhost:8000/auth/register', Object.assign(params, headers, data)).then(function (response) {
      return response.json()
    }).then(function (body) {
      console.log(body);
    });
  }

  render() {
    const fields = this.state.fields;

    return (
      <div className={styles.signup}>
        <Card style={{ width: '500px' }}>
          <Toolbar>
            <ToolbarTitle text="Sign Up" />
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

