import React, { Component } from 'react';
import styles from './styles.css';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

class createPost extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className={styles.createPost}>
        <Card style={{ width: '500px' }}>
          <Toolbar>
            <ToolbarTitle text="Share a new link" />
          </Toolbar>
          <form>
            <TextField
              style={{ width: '100%' }}
              hintText="Title"
              errorText="Please provide a title."
              floatingLabelText="Title"
              />
            <TextField
              style={{ width: '100%' }}
              hintText="Description"
              errorText="Please provide a description."
              floatingLabelText="Description"
              />
            <SelectField
              style={{ width: '100%' }}
              value={this.state.value}
              onChange={this.handleChange}
              floatingLabelText="Floating Label Text"
              >
              {items}
            </SelectField>
            <TextField
              style={{ width: '100%' }}
              hintText="Link"
              errorText="You're sharing a link, provide a link."
              floatingLabelText="Link"
              />
            <TextField
              style={{ 
                width: '100%',
                marginBottom: '30px', 
              }}
              hintText="Tags"
              />
            <FlatButton
              style={{
                backgroundColor: 'red',
                color: 'white',
              }}
              label="Submit"
              />
          </form>
        </Card>
      </div>
    );
  }
}

export default createPost;
