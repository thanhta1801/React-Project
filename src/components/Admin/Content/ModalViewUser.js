/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import _ from "lodash";

//////
const ModalViewUser = (props) => {
  const { show, setShow, dataUserUpdate } = props;
  /////////
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("USER");
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState("");
  const [previewImage, setpreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUserUpdate)) {
      setEmail(dataUserUpdate.email);
      setUserName(dataUserUpdate.username);
      setRole(dataUserUpdate.role);
      if (dataUserUpdate.image) {
        setpreviewImage(`data:image/jpeg;base64,${dataUserUpdate.image}`);
      }
    }
  }, [dataUserUpdate]);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassWord("");
    setUserName("");
    setRole("");
    setImage("");
    setpreviewImage("");
    props.resetUpdateData();
  };

  const handleUpLoadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setpreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>View User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={passWord}
                disabled
                onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">UserName</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-update-img" htmlFor="fileImg">
                <FcPlus />
                UpLoad File Image
              </label>
              <input
                id="fileImg"
                type="file"
                hidden
                onChange={(e) => handleUpLoadImage(e)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewUser;
