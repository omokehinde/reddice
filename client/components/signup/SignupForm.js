import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({ errors: {} });
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors: data })
    );
  }

  render() {
    const  errors  = this.state;
    const options = map(timezones, (val, key)=> <option key={val} value={val}>{key}</option>);
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input value={this.state.username} onChange={this.onChange} type="text" name="username" className="form-control" />
          <p>{errors.username && <span className="help-block">{errors.username}</span>}</p>
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input value={this.state.email} onChange={this.onChange} type="text" name="email" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input value={this.state.password} onChange={this.onChange} type="password" name="password" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input value={this.state.passwordConfirmation} onChange={this.onChange} type="password" name="passwordConfirmation" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control=label">Timezone</label>
          <select className="form-control" name="timezone" onChange={this.onChange} value={this.state.timezone}>
            <option value="" disabled>Your Timezone</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Signup
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;
