import React from "react"
import "./style.css"
import axios from "axios"
import { AuthContext } from "../Context/AuthContextProvider";
import Dashboard from "./dashboard"

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            token: ""
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            [e.target.name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios("https://reqres.in/api/register", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            data: {
                email: this.state.email,
                password: this.state.password,
            }
        }).then((res) => {
            console.log(res)
            this.handleData(res.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleData = (res) => {
        const { isAuthHandleEmail, isAuthHandleToken } = this.context
        isAuthHandleEmail(this.state.email)
        isAuthHandleToken(res.token)
        this.setState({
            token: res.token
        });
    };

    render() {
        if(this.state.token===""){
            return (
                <div>
                    <div className="container">
                        <h1>Register Form</h1>
                        {/* register container */}
                        <div className="register-container">
                            <div className="flex">
                                <div className="flex1" style={{ marginTop: "2%" }}>
                                    <div className="password">Email : </div>
                                    <div className="password">Password :</div>
                                </div>
                                <div className="flex1" style={{ marginTop: "1%" }}>
                                    <input type="email" name="email" value={this.state.email} className="input-password" placeholder="Enter email" onChange={this.handleChange} />
                                    <input type="password" name="password" value={this.state.password} className="input-password" placeholder="Enter password" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div style={{ marginTop: "2%" }}>
                                <button className="submit" onClick={this.handleSubmit}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return <Dashboard/>
        }
    }
}

Register.contextType = AuthContext;