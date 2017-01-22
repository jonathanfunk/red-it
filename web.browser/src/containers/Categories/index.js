import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Week from '../../components/Week';
import styles from './styles.css';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class Categories extends Component {
  render() {
    const weeks = this.props.weeks;
    console.log('Weeks:', weeks);
    return (
      <aside className={styles.categories}>
        <Drawer>
          <AppBar
            title={<span>RED it</span>}
            iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
            />
          {weeks.map((x, i) => (
            <Week
              key={i} 
              week={x.title}
              categories={x.categories}
            />
          ))}
        </Drawer>
      </aside>
    );
  }
}

Categories.propTypes = {
  weeks: PropTypes.array.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  weeks: state.weeks,
});

export default connect(mapStateToProps)(Categories);