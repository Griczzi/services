import React from 'react';
import { connect } from 'react-redux';

import NavBar from './../NavBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { pageInfo } = this.props;
    document.title = 'App - ' + pageInfo.title;
    return (
      <header>
        <NavBar />
        <h1>{ pageInfo.title }</h1>
      </header>
    );
  }
}

const mapStateToProps = state => (
  { pageInfo: state.pageTitle }
)

export default connect(mapStateToProps)(Header);
