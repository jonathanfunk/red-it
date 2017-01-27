import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import Week from '../../components/Week';
import styles from './styles.css';
import filterCategory from './../../actions/FilterActions';
import { getJson } from './../../lib/fetch-json';


class Categories extends Component {

  componentWillMount() {
    const url = 'http://localhost:8000/weeks';
    getJson(url);
  }

  render() {
    const weeks = this.props.weeks;
    const filter = this.props.filter;
    console.log(filter);
    return (
      <aside className={styles.categories}>
        <Drawer>
          <AppBar
            title={<span>RED it</span>}
            iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
            />
          {weeks.map((week, i) => (
            <Week
              key={i} 
              week={week.title}
              categories={week.categories}
              filterClick={this.props.handleFilterCategory}
            />
          ))}
        </Drawer>
      </aside>
    );
  }
}

Categories.propTypes = {
  weeks: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  handleFilterCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  weeks: state.weeks,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleFilterCategory: (category) => {
    dispatch(filterCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);