import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { DiReact } from "react-icons/di";
import { FaTachometerAlt, FaGem, FaGithub } from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import "./SideBarAdmin.scss";
import { NavLink } from "react-router-dom";

const SidebarAdmin = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <div>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <DiReact size={"3rem"} color={"00bfff"} />
            Bài Kiểm Tra
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              Dashboard
              <NavLink to="/admins" />
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title={"Tính Năng"}>
              <MenuItem>
                Quản lý Users
                <NavLink to="/admins/manage-users" />
              </MenuItem>
              <MenuItem> Quản lý Bài Quiz</MenuItem>
              <MenuItem> Quản lý Câu hỏi</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="/"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                Thành Tạ
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};
export default SidebarAdmin;
