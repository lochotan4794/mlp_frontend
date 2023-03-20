import React from "react";
import axios from "axios";
import severUrl from "@/utils/api";

class RegisterPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            user: {
                // firstName: '',
                // lastName: '',
                username: "",
                password: "",
                email: "",
            },
            submitted: false,
            errorMessage: {
                username: null,
                password: null,
                email: null,
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value,
            },
        });
    }

    handleSubmit =  async (event: any) => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;

        // console.log(user);
        if (user.email && user.username && user.password) {
            // this.props.register(user);
            var bodyFormData = new FormData();
            bodyFormData.append("username", user.username);
            bodyFormData.append("password", user.password);
            bodyFormData.append("email", user.email);
            await axios
                .post(severUrl + `registration/register/`, bodyFormData)
                .then((response) => {
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    localStorage.setItem("access", JSON.stringify(response.data.access));
                    localStorage.setItem(
                        "refresh",
                        JSON.stringify(response.data.refresh)
                    );
                    if (window.confirm("Please confirm email id")) {
                        window.location.href = '/account'
                    }
                }).catch(error => {
                    console.error('There was an error!', error.response.data);
                    this.setState({ errorMessage: error.response.data })
                });
        }
    }

    render() {
        const { registering, cus_style } = this.props;
        const { user, errorMessage, submitted } = this.state;
        return (
            <div className="form-style-6">
                <form name="form" onSubmit={this.handleSubmit}>
                    {/* <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
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
                        {submitted && errorMessage.username != null && (
                            <div className="help-block">{errorMessage.username}</div>
                        )}
                    </div>
                    <div
                        className={
                            "form-group" + (submitted && !user.email ? " has-error" : "")
                        }
                    >
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={this.handleChange}
                        />
                        {submitted && !user.email && (
                            <div className="help-block">Email is required</div>
                        )}
                        {submitted && errorMessage.email != null && (
                            <div className="help-block">{errorMessage.email}</div>
                        )}
                    </div>
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
                        />
                        {submitted && !user.password && (
                            <div className="help-block">Password is required</div>
                        )}
                        {submitted && errorMessage.password != null && (
                            <div className="help-block">{errorMessage.password}</div>
                        )}
                    </div>
                    <div
                        className={
                            "form-group" + (submitted && !user.password ? " has-error" : "")
                        }
                    >
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={user.password}
                            onChange={this.handleChange}
                        />
                        {submitted && !user.password && (
                            <div className="help-block">Password is required</div>
                        )}
                    </div>
                    <div className="form-group">
                        <button
                            onClick={this.handleSubmit}
                            className="button-3"
                        // style={cus_style ? cus_style : { width: "fit-content" }}
                        >
                            Register
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



export default RegisterPage