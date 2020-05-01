## React app created to locate servers in Brown's CIT

# Introduction

For a UI/UX class project, we created a live-filtering webpage,
similar to Netflix’s content page. The ability of a user on Netflix to
see the spread of content, sort and filter the items on certain
categories, and favorite specific items is what makes it a
live-filtering webpage. Our webpage, Server Search , includes the
same functionality.

Link to page: https://quiet-forest-54350.herokuapp.com/

Traditionally, websites have been created with HTML and CSS.
However, these languages do not allow for dynamic displays and
filtering. Therefore, we achieved this functionality by using the
language React, which allows a programmer to incorporate HTML
and CSS along with Javascript and organizational structures called
components which allowed for more leverage to control the
webpage.

As such, the focus of our project was on demonstrating a
proficiency in React to allow for filtering on at least two filters,
sorting the items on one category, and allowing items to be
favorited, and a favorite-only view to be toggled.

# Design Principles

Following design principles in class, we used a simple color
pallette of only two primary colors and greyscale. We only use one
font, and we make use of whitespace to differentiate objects, as
well as repetition to group objects with common functionality (like
the servers and the filters). We visibly change the text of the filter
buttons and color of the favorite buttons to make clear how user
interactions change the state of the app.

# Application Structure

The App component’s state contains a list of dictionaries, where
each dictionary holds information about a server. App renders a
SortedList, passing it the servers, and an empty list to hold the
names of favorited servers.

SortedList accesses the servers as props, and maintains a state
variable “criteria”, which is either Alphabetical or Unsorted. It
renders a dropdown button which allows users to select the
sorting criteria, changing the value of “criteria” appropriately. It
also renders FilteredList, passing it a sorted server list, and the
favorites list.

FilteredList maintains state variables “search”, “type”, “location”,
and “favoritesOnly”. “favoritesOnly” indicates whether the user has
checked the box to only see favorites. FilteredList renders the
filtering dropdown buttons and the checkbox, which change the
corresponding state variables according to user input. It also
renders all of the servers in its sorted list (accessed through props)
that meet the filtering criteria.

Servers are passed their name, type, location, and the favorites list.
When a server’s favorite button is clicked, it adds its name to the
favorites list. It removes its name when unfavorited. Servers
maintain the state variable “serverIcon” so that anyone can easily
find and change the small server icon next to “CIT”.

# Project Goal

Server Search is designed for CS students at Brown University to
easily locate servers and machines in the Center for Information
Technology (CIT). Students can access the servers remotely or
in-person. Having spent lots of time around these servers, we
realized that it might be helpful for students to have a tool like this
that allows them to remember which machine they were working
on if they can only remember that it was some type of food, for
instance, or that it was on the 2nd floor. If the website was further
developed to save user data, it could even keep track of users’
favorite machines and allow them to quickly reference their
names and locations during a busy night of CS.
