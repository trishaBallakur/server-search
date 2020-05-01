import React, { Component } from "react";
import ReactDOM from 'react-dom'
import "./App.css";
import FilteredList from "./FilteredList";
import SortedList from "./SortedList";
import Server from "./Server";

/* Edits made by Trisha:
 * 1) Added all servers and their info
 * 2) Type "Location" was changed to "Place" to avoid confusion with field location
 * 3) is_favorited field in dictionaries removed. It is now handled as a state of the Server component.
 */

class App extends Component {

  constructor() {
    super()
    this.state = {
      servers: [
        {name: "Bletchley", type: "Place", location: "3rd"}, 
        {name: "Quartz", type: "Metal", location: "2nd"},
        {name: "Iron", type: "Metal", location: "2nd"},
        {name: "Titanium", type: "Metal", location: "2nd"},
        {name: "Poundcake", type: "Food", location: "2nd"},
        {name: "Excalibur", type: "Place", location: "3rd"},
        {name: "Aluminum", type: "Metal", location: "2nd"},
        {name: "Daisy", type: "Character", location: "2nd"},
        {name: "Ocean", type: "Place", location: "4th"},
        {name: "Nickel", type: "Metal", location: "2nd"},
        {name: "Golum", type: "Character", location: "2nd"},
        {name: "Kai", type: "Character", location: "2nd"},
        {name: "Louvre", type: "Place", location: "3rd"},

      ],
    }
  }

  render() {
    return (
      <div className="App">
        {<FilteredList items={this.state.servers}/>}
        {<SortedList items={this.state.servers} />}
      </div>
    );
  }


}

export default App;
