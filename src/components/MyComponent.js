import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUser from "./AddUserInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Thành", age: 18 },
      { id: 2, name: "Thành 1", age: 10 },
      { id: 3, name: "Thành 2", age: 20 },
    ],
  };
  addUserInfor = (user) => {
    this.setState({
      listUser: [user, ...this.state.listUser],
    });
  };
  render() {
    return (
      <>
        <div>Thêm Mới Người Dùng</div>
        <AddUser addUserInfor={this.addUserInfor} />
        <br />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
      </>
    );
  }
}

export default MyComponent;
