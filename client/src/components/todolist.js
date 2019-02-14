/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Container, Row, Input, Button } from "reactstrap";
import ListOfTodo from "./common/list-of-todo";
import TodoFilters from "./common/todo-filters";
import axios from "axios";
import { connect } from "react-redux";
import { getTodoList, addTodoListCall } from "../actions/todoActions";
import PropTypes from "prop-types";

const _ = require("lodash");

class TodoList extends Component {
  state = {
    todolist: [],
    filterArray: [],
    listName: "",
    filter: ""
  };
  // constructor(props) {
  //   super(props);
  //   state = {
  //     todolist: [],
  //     filterArray: [],
  //     listName: "",
  //     filter: ""
  //   };
  //   //this.newListName = this.newListName.bind(this);
  //   //this.addTodoList = this.addTodoList.bind(this);
  //   //this.handleKeyPress = this.handleKeyPress.bind(this);
  //   //this.checkThisList = this.checkThisList.bind(this);
  //   //this.filterListFun = this.filterListFun.bind(this);
  //   //this.deleteTodoList = this.deleteTodoList.bind(this);
  // }

  componentDidMount() {
    this.props.getTodoList();
  }

  newListName(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addTodoList() {
    if (this.state.listName && this.state.listName.length > 0) {
      const oldList = this.state.todolist;
      const listObj = {
        listName: this.state.listName
      };

      oldList.push(listObj);
      //const newList = oldList;
      this.props.addTodoListCall(listObj);
      // axios
      //   .post("/todo/todolist")
      //   .then(response => {
      //     if (response.success == "success") {
      //       this.setState({
      //         todolist: newList,
      //         listName: "",
      //         filter: ""
      //       });
      //     }
      //   })
      //   .catch(err => {
      //     console.log("err : ", err);
      //   });
    }
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.addTodoList();
    }
  }

  checkThisList(e) {
    const listArray = this.state.todolist;
    listArray.map(list => {
      if (list.id == e.target.id) {
        if (e.target.checked) {
          list.status = true;
        } else {
          list.status = false;
        }
      }
    });
    this.setState({
      todolist: listArray
    });
  }

  filterListFun(status) {
    const listArray = this.state.todolist;
    if (status === "all") {
      this.setState({
        filterArray: listArray,
        filter: "filter"
      });
    } else if (status === "done") {
      const completedL = _.filter(listArray, { status: true });
      this.setState({
        filterArray: completedL,
        filter: "filter"
      });
    } else if (status === "not") {
      const incompletedL = _.filter(listArray, { status: false });
      this.setState({
        filterArray: incompletedL,
        filter: "filter"
      });
    }
  }

  deleteTodoList(e) {
    e.preventDefault();
    const listArray = this.state.todolist;
    const newList = _.remove(listArray, { id: parseInt(e.target.id) });
    this.setState({
      todolist: listArray
    });
  }

  render() {
    let todolist = [];
    {
      this.state.filter === "filter"
        ? (todolist = this.state.filterArray)
        : (todolist = this.state.todolist || this.state.list || []);
    }
    return (
      <div>
        <Container className="border-0 bg-light">
          <div className="pt-4 mb-4">
            <h3>Todo App Example</h3>
          </div>

          <Row className="pb-4">
            <div className="col-9">
              <Input
                type="text"
                name="listName"
                bsSize="lg"
                className="mr-2"
                value={this.state.listName}
                onChange={this.newListName.bind(this)}
                placeholder="What need to be done?"
                onKeyPress={this.handleKeyPress.bind(this)}
              />
            </div>
            <div className="col-1">
              <Button
                color="primary"
                size="lg"
                onClick={this.addTodoList.bind(this)}
              >
                {" "}
                Add{" "}
              </Button>
            </div>
          </Row>

          <ListOfTodo
            deleteListFun={this.deleteTodoList.bind(this)}
            todolist={todolist}
            checkedFun={this.checkThisList.bind(this)}
          />
          {todolist && todolist.length > 0 ? (
            <TodoFilters filterList={this.filterListFun.bind(this)} />
          ) : (
            ""
          )}
        </Container>
      </div>
    );
  }
}
TodoList.propTypes = {
  getTodoList: PropTypes.func.isRequired,
  addTodoListCall: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.list
});

export default connect(
  mapStateToProps,
  { getTodoList, addTodoListCall }
)(TodoList);
