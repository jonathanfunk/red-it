import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import Categories from './../Categories';

class App extends Component {
  render() {
    return (
      <section className={styles.app}>
        {this.props.children}
        <Categories />
      </section>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
