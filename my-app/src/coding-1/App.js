import React from 'react';
import "./Components/style.css"
import RegisterForm from "./Components/register"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          <RegisterForm />
        </div>
    );
  }
}

