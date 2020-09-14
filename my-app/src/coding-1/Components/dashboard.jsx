import React, { Component } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";

export default class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) =>
            this.setState({
                data: res.data,
            })
        );
    }
    render() {
        const { email, token } = this.context;
        // console.log(email, token)
        return (
            <>
                <div>
                    <h4>Email : {email}</h4>
                    <h4>token : {token}</h4>
                </div>
                <h1>Todos</h1>
                {this.state.data.map((item) => (
                    <div key={item.id}> 
                        <h2>{item.id} : {item.title}</h2>
                        <h4>{item.body}</h4>
                    </div>
                ))}
            </>
        )
    }
}
DashBoard.contextType = AuthContext;