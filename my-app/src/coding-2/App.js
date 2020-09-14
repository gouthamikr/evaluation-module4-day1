import React from 'react';
import "./Components/style.css"
import Form from "./Components/form"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          <Form />
        </div>
    );
  }
}

