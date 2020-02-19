import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { Button } from 'antd';
import 'antd/dist/antd.css';

/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
      

        <div className="buttons">
          <Button onClick={() => this.updateTodoToShow("all")}>all</Button>
          <Button onClick={() => this.updateTodoToShow("active")}>
            Active
          </Button>
          <Button onClick={() => this.updateTodoToShow("complete")}>
            Complete
          </Button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div>
            <Button onClick={this.removeAllTodosThatAreComplete}>
              Remove All Complete Todos
            </Button>
          </div>
        ) : null}
        <div>
          <Button
            onClick={() =>
              this.setState(state => ({
                todos: state.todos.map(todo => ({
                  ...todo,
                  complete: state.toggleAllComplete
                })),
                toggleAllComplete: !state.toggleAllComplete
              }))
            }
          >
            Mark All Tasks Complete
          </Button>
        </div>
        <div className="todos">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        </div>
        <div className="todos-left">
          Todos Left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
      </div>
    );
  }
}

//toggle all complete: {`${this.state.toggleAllComplete}`}