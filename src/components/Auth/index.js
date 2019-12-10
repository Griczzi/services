import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle } from './../../helpers';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeLoginField = this.changeLoginField.bind(this);
    this.changePassField = this.changePassField.bind(this);
  }
  
  changeLoginField(e) {
    this.setState({login: e.target.value});
  }
  
  changePassField(e) {
    this.setState({password: e.target.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { login, password } = this.state;
    
    fetch('http://new.services/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        login: login,
        password: password,
      })
    }).then((res) => {
      console.log(res.json());
    });
    
    this.props.dispatch({
      type: ''
    });
  }
  
  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='login' value={ login } onChange={this.changeLoginField} />
        <input type='text' placeholder='password' value={ password } onChange={this.changePassField} />
        <input type='submit' value='Log In' />
      </form>
    )
  }
}

const mapStateToProps = state => (
  { pageTitle: state.pageTitle }
)

export default connect(mapStateToProps)(Auth);