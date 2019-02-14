import React, { Component } from "react";
import { Input, Label } from "reactstrap";

class ListOfTodo extends Component {
  constructor(props) {
    super(props);
    this.checkListF = this.checkListF.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  checkListF(e) {
    this.props.checkedFun(e);
  }

  deleteList(e) {
    this.props.deleteListFun(e);
  }

  render() {
    const me = this;
    const todoList = this.props.todolist || [];
    return (
      <div className="ml-1">
        {todoList && todoList.length > 0 ? (
          <div>
            {todoList.map(list => (
              <div className="col-9 border-bottom p-2 ml-3">
                <Label
                  id={list.id}
                  style={{ textDecoration: list.status ? "line-through" : "" }}
                >
                  <Input
                    type="checkbox"
                    checked={list.status}
                    id={list.id}
                    onChange={me.checkListF}
                  />{" "}
                  <span className="col-10">{list.listName} </span>
                  <span className="col-1 float-right">
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      id={list.id}
                      onClick={this.deleteList}
                    >
                      <span aria-hidden="true" id={list.id}>
                        &times;
                      </span>
                    </button>
                  </span>
                </Label>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ListOfTodo;
