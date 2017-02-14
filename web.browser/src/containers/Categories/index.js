import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import Week from '../../components/Week';
import styles from './styles.css';
import { filterCategory } from './../../actions/FilterActions';
import { fetchWeeks } from './../../actions/WeekActions';


class Categories extends Component {

  componentWillMount() {
    this.props.fetchWeeks();
  }

  render() {
    const weeks = this.props.weeks;
    console.log('This props is...', weeks)
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
              categories={week.category}
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
  fetchWeeks: () => {
    dispatch(fetchWeeks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
