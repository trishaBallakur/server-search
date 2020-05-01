import React, { Component } from "react";
import "./App.css";

/* Edits made by Trisha:
 * 1) Commented out line 24 to make webpage compile with "npm start" command
 */

class Server extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_favorited: 0,
    }
  }

  onFavorite = event => {
    this.setState({is_favorited: 1});
  }

  render() {
    return(
      <h1>My name is {this.props.name} and my type is {this.props.type}</h1>
      //<Button onClick="onFavorite">
    );
  }
}

export default Server;
