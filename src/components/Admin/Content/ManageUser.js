import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import ListTableUsers from "./ListTableUsers";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../Services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [dataUserUpdate, setDataUserUpdate] = useState({});

  useEffect(() => {
    fetchListUser();
  }, []);
  const fetchListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUsers(data.DT);
    }
  };

  const handleClickBtnUpdate = (dataUser) => {
    setShowUpdateUser(true);
    setDataUserUpdate(dataUser);
  };

  const resetUpdateData = () => {
    setDataUserUpdate({});
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <ModalCreateUser fetchListUser={fetchListUser} />
        <ModalUpdateUser
          show={showUpdateUser}
          setShow={setShowUpdateUser}
          dataUserUpdate={dataUserUpdate}
          fetchListUser={fetchListUser}
          resetUpdateData={resetUpdateData}
        />
        <div className="table-users-container">
          <ListTableUsers
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
