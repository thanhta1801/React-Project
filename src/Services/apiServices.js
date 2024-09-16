import axios from "../Utils/axiosCustomize";

const postCreateNewUser =  (email, passWord, userName, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", passWord);
  data.append("username", userName);
  data.append("role", role);
  data.append("userImage", image);

  return   axios.post("api/v1/participant", data);
};

export {postCreateNewUser}