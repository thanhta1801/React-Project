import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
// import ListTableUsers from "./ListTableUsers";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../Services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
import { getUserWithPaginate } from "../../../Services/apiServices";

const ManageUser = (props) => {
  const LIMIT_USER = 3;
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [dataUserUpdate, setDataUserUpdate] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // fetchListUser();
    fetchListUserPaginte(2);
  }, []);

  /// lấy tất cả gười dùng
  const fetchListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUsers(data.DT);
    }
  };

  /// lấy người dùng theo phân trang
  const fetchListUserPaginte = async (page) => {
    let data = await getUserWithPaginate(page, LIMIT_USER);
    if (data.EC === 0) {
      console.log("res.dât", data.DT.totalPages);

      setListUsers(data.DT.users);
      setPageCount(data.DT.totalPages);
    }
  };

  const handleClickBtnUpdate = (dataUser) => {
    setShowUpdateUser(true);
    setDataUserUpdate(dataUser);
  };

  const handleClickBtnView = (dataUser) => {
    setShowUpdateUser(true);
    setDataUserUpdate(dataUser);
  };

  const handleDeleteUser = (dataUser) => {
    setShowDeleteUser(true);
    setDataUserDelete(dataUser);
  };
  const resetUpdateData = () => {
    setDataUserUpdate({});
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <ModalCreateUser
          fetchListUser={fetchListUser}
          fetchListUserPaginte={fetchListUserPaginte}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalUpdateUser
          show={showUpdateUser}
          setShow={setShowUpdateUser}
          dataUserUpdate={dataUserUpdate}
          fetchListUser={fetchListUser}
          resetUpdateData={resetUpdateData}
          fetchListUserPaginte={fetchListUserPaginte}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalViewUser
          show={showUpdateUser}
          setShow={setShowUpdateUser}
          dataUserUpdate={dataUserUpdate}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showDeleteUser}
          setShow={setShowDeleteUser}
          handleDeleteUser={handleDeleteUser}
          dataUser={dataUserDelete}
          fetchListUser={fetchListUser}
          fetchListUserPaginte={fetchListUserPaginte}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="table-users-container">
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleDeleteUser={handleDeleteUser}
            fetchListUserPaginte={fetchListUserPaginte}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
