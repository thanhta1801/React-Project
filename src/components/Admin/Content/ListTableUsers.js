import { useEffect, useState } from "react";
import { getAllUser } from "../../../Services/apiServices";
const ListTableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUsers(data.DT);
    }
  };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-success ">View</button>
                    <button className="btn btn-warning mx-3">Updata</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td style={{ textAlign: "center" }} colSpan={"4"}>
                No found data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default ListTableUsers;
