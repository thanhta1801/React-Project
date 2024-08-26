import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleHideUser = (e) => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    let { listUser } = this.props;
    let { isShowListUser } = this.state;
    return (
      <div>
        <button onClick={(e) => this.handleHideUser(e)}>Ẩn...</button>
        {isShowListUser && (
          <div>
            {listUser.map((user, index) => {
              return (
                <div key={index} className={user.age >= 18 ? "green" : "red"}>
                  <p>ID : {user.id}</p>
                  <p>Name : {user.name}</p>
                  <p>Age : {user.age}</p>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
