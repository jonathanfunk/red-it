import React from 'react';
import styles from './styles.css';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import Gandalf from '../../lib/gandalf-validator/gandalf';
import MenuItem from 'material-ui/MenuItem';

class createPost extends Gandalf {

  // state = {
  //   value: 1,
  // };

  // handleChange = (event, index, value) => this.setState({value});

  constructor() {
    const fields = {
      title: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Title',
        },
      },
      description: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Description',
        },
        debounce: 300,
      },
      link: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Link',
        },
      },
      tags: {
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Tags',
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
      <div className={styles.createPost}>
        <Card style={{ width: '500px' }}>
          <Toolbar>
            <ToolbarTitle text="Create new post" />
          </Toolbar>
          <form style={{ width: '100%' }}>
            {fields.title.element} <br />
            {fields.description.element} <br />
            <SelectField
              floatingLabelText="Select a lesson"
              value={this.state.value}
              onChange={this.handleChange}
              >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            {fields.link.element} <br />
            {fields.tags.element} <br />
            <FlatButton label="Submit" primary onClick={() => this.handleSubmit()} />
            <FlatButton label="Signup" />
          </form>
        </Card>
      </div>
    );
  }
}

export default createPost;
