import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import Server from "./Server";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "defaultType"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    //TODO Set the state of the filter type in this.state
    this.setState({type: event});
  };

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {
    // TODO: add conditions to check if item type is equal to selected type
    if (item.type == this.state.type || this.state.type == "all") {
      return true;
    } else {
      return false;
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    return item.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item);
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Server Search</h1>
        {/* TODO: Add more menu items with onSelect handlers*/}
        <DropdownButton title="Type" id="dropdown-basic-button">
          <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType}>
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Location" onSelect={this.onSelectFilterType}>
            Location
          </Dropdown.Item>
          <Dropdown.Item eventKey="Metal" onSelect={this.onSelectFilterType}>
            Metal
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Location" id="dropdown-basic-button">
          <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType}>
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Location" onSelect={this.onSelectFilterType}>
            Location
          </Dropdown.Item>
          <Dropdown.Item eventKey="Metal" onSelect={this.onSelectFilterType}>
            Metal
          </Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        {this.props.items.filter(this.filterAndSearch).map((value, index) => (
          <Server name={this.props.items[index].name} type={this.props.items[index].type}/>
        ))}
      </div>
    );
  }
}

export default FilteredList;
