import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import ListTableUsers from "./ListTableUsers";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <ModalCreateUser />
        <div className="table-users-container">
          <ListTableUsers />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
