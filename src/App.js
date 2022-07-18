import { Component } from "react";
import "./App.css";
import ToDoItem from "./components/todoitem/todoitem";
import AddItem from "./components/Additem/Additem";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Hamza", age: 22 },
      { id: 2, name: "mohammed", age: 18 },
      { id: 3, name: "Abdo", age: 22 },
    ],
  };
  DeleteItem = (id) => {
    let items = this.state.items.filter((items) => {
      return items.id !== id;
    });
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    items.push(item)
    this.setState({items:items})
  }
  render() {
    return (
      <div className="App Container">
        <h1 className="text-center">My Students</h1>
        <ToDoItem items={this.state.items} DeleteItem={this.DeleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
