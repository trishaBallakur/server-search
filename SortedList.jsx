import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import Server from "./Server";

/*
 * This component is used to build a sorted list of servers. 
 * It has sorting functionality for one criteria: alphabetical sorting by the server's name.
 */

class SortedList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //search: "",
            criteria: "unsorted"
        };
    }


    /*
     * Function to set the sorting criteria to produce the sorted list from. 
     * This function is triggered when a criteria is selected from the dropdown.
     */

    onSelectSortCriteria = event => {
        this.setState({criteria: event});
    };

    /*
     * Comparator function that tells sort() how to sort the prop, items.
     * Specifically, the function will sort the servers (represented by items) by their name 
     * (a key in a dictionary element of the list) alphabetically.
     * 
     * Input: a tuple of two items, item1 and item 2
     * Output: an int, 1 if item1's name comes before item2's name, -1 if vice versa, and 0 if they have
     *         the same name.
     */

     compareByName = (item1, item2) => {
         var name1 = item1.name.toUpperCase();
         var name2 = item2.name.toUpperCase();

         if (name1 < name2) {
             return -1;
         } else if (name1 > name2) {
             return 1;
         } else {
             return 0;
         }
    };

    /*
     * Function to output the correct list, based on whether the user
     * selected the unsorted option or to sort alphabetically. 
     * Input: the list of servers, items
     * Output: the list of servers, either in default unsorted orientation,
     *         or sorted alphabetically.
     */

     getCorrectList = () => {
       if (this.state.criteria == "Alphabetical") {
         return this.props.items.concat().sort(this.compareByName);
         //return this.props.items.sort(this.compareByName);
       } else {
         //return this.props.items;
         return this.props.items.concat();
       }
     }


    /*
     * Function to render the effects of sorting the list of servers, items.
     */

    render() {
        return (
          <div className="sort-list">
            {/* <h1>Server Search</h1> */}
            {/* Do we need the above line? */}

            {/* One dropdown button for the one type of sort: */}

            <DropdownButton title="Sort By" id="dropdown-basic-button">
              <Dropdown.Item eventKey="Unsorted" onSelect={this.onSelectSortCriteria}>
                Unsorted
              </Dropdown.Item>
              <Dropdown.Item eventKey="Alphabetical" onSelect={this.onSelectSortCriteria}>
                Alphabetical
              </Dropdown.Item>
            </DropdownButton>
    
            {/* <input type="text" placeholder="Search" onChange={this.onSearch} /> */}
            
            {/* <List items={this.props.items.sort(this.compareByName)} /> */}
            {/* <List items={this.getCorrectList} /> */}
            <List items={this.getCorrectList()} />
          </div>
        );
    }
}
    
export default SortedList;