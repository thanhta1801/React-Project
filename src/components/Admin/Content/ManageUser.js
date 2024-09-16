import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div classNameName="manage-user-container">
      <div classNameName="title">Manage Users</div>
      <div classNameName="users-content">
        <div>
          <ModalCreateUser />
        </div>
        <div>Table Users</div>
      </div>
    </div>
  );
};

export default ManageUser;
