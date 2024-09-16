import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <ModalCreateUser />
        <div>Table Users</div>
      </div>
    </div>
  );
};

export default ManageUser;
