import React from "react";
import axios from "axios";
import severUrl, { register } from "@/utils/api";

type props = {
  registering: boolean
}

type state = {
  user: any,
  errorMessage: any,
  errorMsg: any,
  submitted: any
}

class LoginForm extends React.Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      user: {
        password: "",
        username: "",
      },
      errorMessage: {
        username: null,
        password: null,
        email: null,
        non_field_errors: null,
      },
      errorMsg: null,
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.password) {
      // this.props.register(user);
      console.log(user);
      var bodyFormData = new FormData();
      bodyFormData.append("username", user.username);
      // bodyFormData.append("email", user.email);
      bodyFormData.append("password", user.password);
      try {
        const response = await axios.post(severUrl + `registration/login_user`, bodyFormData)
        if (response) {
          console.log(response.data.result);
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.reload();
        }
      } catch (err) {
        console.log(err.response.data)
        this.setState({ errorMsg: err.response.data.message })
      }
    }
  }

  _handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSubmit(e)
    }
  }

  render() {
    const { registering } = this.props;
    const { user, errorMessage, submitted } = this.state;
    return (
      <div className="form-style-6">
        <form name="form" onSubmit={this.handleSubmit}>
          {/* <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
            {submitted && !user.email &&
              <div className="help-block">Email is required</div>
            }
          </div> */}
          <div
            className={
              "form-group" + (submitted && !user.username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={this.handleChange}
            />
            {submitted && !user.username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          {submitted && errorMessage.username != null && (
            <div className="help-block">{errorMessage.username}</div>
          )}
          <div
            className={
              "form-group" + (submitted && !user.password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={this.handleChange}
              onKeyDown={this._handleKeyPress}
            />
            {submitted && !user.password && (
              <div className="help-block">Password is required</div>
            )}
            {submitted && errorMessage.password != null && (
              <div className="help-block">{errorMessage.password}</div>
            )}
          </div>
          {submitted && this.state.errorMsg != null && (
            <div className="help-block" style={{ color: "red" }}>{this.state.errorMsg}</div>
          )}
          <div className="form-group">
            <button
              onClick={this.handleSubmit}
              type="submit"
              form="form"
              className="button-3"
            >
              Log In
            </button>
            {registering && (
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm
