import React from "react";
import moment from "moment";

import router from "react-router";
var Link = router.Link;


class Main extends React.Component {

//   // Here we set a generic state associated with the number of clicks
  getInitialState() {
//     return { searchTerm: "", results: "" };
  }

//   // componentDidUpdate is a lifecycle method that will get run every time the component update's it's
//   // props or state
//   componentDidUpdate(prevProps, prevState) {
//     // If we have a new search term, run a new search
//     if (prevState.searchTerm !== this.state.searchTerm) {
//       console.log("UPDATED");

//       helpers.runQuery(this.state.searchTerm).then(function(data) {
//         if (data !== this.state.results) {
//           console.log(data);
//           this.setState({ results: data });
//         }
//         // This code is necessary to bind the keyword "this" when we say this.setState
//         // to actually mean the component itself and not the runQuery function.
//       }.bind(this));
//     }
//   }

//   setTerm(term) {
//     this.setState ({ searchTerm: term });
//   }


    getDate() {
        return moment().format("MMMM Do YYYY");
    }

    render() {
        return (
            <div className="container">
                <div id="content">
                    <div id="header">
                        <br />
                        <hr style="margin-top: 0;" />
                            <h1>The Daily Scraper</h1>
                        <hr />
                            <div id="date">{this.getDate()}</div>
                        <hr />
                    </div>
                </div>
            {this.props.children}
        </div>
    );
  }
};