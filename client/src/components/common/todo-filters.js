import React, { Component } from "react";
import { Button } from "reactstrap";

class TodoFilters extends Component {
  constructor(props) {
    super(props);
    this.completedFun = this.completedFun.bind(this);
    this.inCompletedFun = this.inCompletedFun.bind(this);
    this.allFun = this.allFun.bind(this);
  }

  completedFun(e) {
    e.preventDefault();
    this.props.filterList("done");
  }

  inCompletedFun(e) {
    e.preventDefault();
    this.props.filterList("not");
  }

  allFun(e) {
    e.preventDefault();
    this.props.filterList("all");
  }

  render() {
    return (
      <div className="offset-md-5 p-3">
        <Button
          color="success"
          size="sm"
          className="mr-4"
          onClick={this.completedFun}
        >
          Completed
        </Button>
        <Button
          color="warning"
          size="sm"
          className="mr-4"
          onClick={this.inCompletedFun}
        >
          In Completed
        </Button>
        <Button color="info" size="sm" onClick={this.allFun}>
          All
        </Button>
      </div>
    );
  }
}

export default TodoFilters;
