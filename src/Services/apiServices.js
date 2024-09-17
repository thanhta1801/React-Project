import axios from "../Utils/axiosCustomize"; // đã custom ko pải lấy từ thư viện

/// goi API tạo mới một người dùng
const postCreateNewUser = (email, passWord, userName, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", passWord);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);

  return axios.post("api/v1/participant", data);
};

// gọi Api lấy all người dùng
const getAllUser = () => {
  return axios.get("api/v1/participant/all");
};

/// goi API sửa tt người dùng
const putUpdateUser = (id, userName, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);

  return axios.put("api/v1/participant", data);
};

export { postCreateNewUser, getAllUser, putUpdateUser };
