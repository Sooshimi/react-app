//used shortcuts (from 'Simple React Snippets' addon)

//'imrc' shortcut to create standard imports
import React, { Component } from "react";

//'cc' shortcut for creating component template
class Counter extends Component {

    //change count state
    state= {
        count: 0,
    };

    //renders it in browser
    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    //define class to change colour of the counter if it's 0 or more
    //appends to 'classes' string
    //this then gets passed into the below <span> className
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count == 0) ? "warning" : "primary";
        return classes;
    }

    //function to change format of the count display
    formatCount() {
        const {count} = this.state; //as opposed to this.state.count (return this.state.count == 0 ? "Zero": this.state.count;)
        return count == 0 ? "Zero": count; //if count = 0, return "Zero", else return 'count'
    }
}

export default Counter; //export the class separately