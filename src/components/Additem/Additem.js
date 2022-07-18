import React, { Component } from "react";

class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
        name:'',
        age:''
    })
  };
  render() {
    return (
      <div className="ListItems">
        <form onSubmit={this.handleSubmit}>
          <input
            className="inputName"
            type="text"
            placeholder="Enter Name ..."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            className="inputAge"
            type="number"
            placeholder="Enter Age ..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input className="inputAdd" type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default AddItem;
