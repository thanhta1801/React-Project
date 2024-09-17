// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { DeleteUser } from "../../../Services/apiServices";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataUser } = props;

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleDeleteUser = async () => {
    let res = await DeleteUser(dataUser.id);

    if (res && res.EC === 0) {
      toast.success(res.EM);
      handleClose();
      await props.fetchListUser();
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Xóa Người Dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc muốn xóa người dùng. Email:
          <b>{dataUser && dataUser.email ? dataUser.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="btn-danger"
            variant="primary"
            onClick={() => handleDeleteUser()}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
