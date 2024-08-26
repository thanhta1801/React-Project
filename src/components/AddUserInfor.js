import React from "react";

class AddUser extends React.Component {
  state = {
    name: "",
    age: "",
  };
  onChangeInputName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onChangeInputAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  addUser = (e) => {
    console.log(this.state);
    this.props.addUserInfor({
      id: Math.floor(Math.random() * 10) + 1,
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        <div>
          <label>Name:</label>
          <input type="text" onChange={(e) => this.onChangeInputName(e)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" onChange={(e) => this.onChangeInputAge(e)} />
        </div>
        <button onClick={(e) => this.addUser(e)}>Thêm Mới</button>
      </div>
    );
  }
}
export default AddUser;
