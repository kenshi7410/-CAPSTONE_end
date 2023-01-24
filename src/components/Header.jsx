import { Button, Dropdown, Input, Space } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import logo from "./../assets/cyberlogo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
//search thông tin
const { Search } = Input;
const onSearch = (value) => console.log(value);
const Header = () => {
  const profile = useSelector((state) => state.user.profile);
  return (
    <div className="flex justify-between content-center items-center py-4 bg-slate-500">
      <div>
        <Link to="/" className="no-underline mx-5 ">
          <img src={logo} alt="logo" className="w-64 h-20" />
        </Link>
      </div>
      <div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button>
            <MenuOutlined />
            Danh mục khóa học
          </Button>
        </Dropdown>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 500,
          }}
        />
      </div>
      <div>
      
        {profile ? (
          <span className="text-white text-xl mr-10">Xin chào, {profile.hoTen}</span>
        ) : (
          <nav className="mr-10">
            <NavLink
              to="/login"
              className={(param) => {
                if (param.isActive)
                  return "text-yellow-200 text-lg no-underline";
                return "text-white text-lg no-underline";
              }}
            >
              Đăng Nhập
            </NavLink>
            <span className="text-white text-xl">|</span>
            <NavLink
              to="/signup"
              className={(param) => {
                if (param.isActive)
                  return "text-yellow-200 text-lg no-underline";
                return "text-white text-lg no-underline";
              }}
            >
              Đăng Ký
            </NavLink>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
