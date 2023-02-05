import { Button, Dropdown, Input, Space } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";
import logo from "./../assets/cyberlogo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// const handleMenuClick = (e) => {
//   console.log("click", e);
// };

//search thông tin
const { Search } = Input;
const onSearch = (value) => console.log(value);
const Header = () => {
  const category = useSelector((state) => state.booking.category);
  const profile = useSelector((state) => state.user.profile);
  const categoryList = category?.map((item, index) => {
    return {
      key: index,
      label: (
        <NavLink to={`/courselist/${item.maDanhMuc}&:MaNhom=GP01`}>
          {item.tenDanhMuc}
        </NavLink>
      ),
    };
  });
  const items = categoryList;
  return (
<div className="flex justify-between content-center items-center py-4 bg-slate-500 ">
      <div>
        <Link to="/" className="no-underline mx-5 ">
          <img
            src={logo}
            alt="logo"
            className="sm:w-32 sm:h-10   lg:w-64 lg:h-20"
            style={{
              width: "20rem",
              height: "5rem",
            }}
          />
        </Link>
      </div>
      <div className="space-x-14 max-lg:300 px-2">
        <Dropdown
          style={{ width: "auto" }}
          menu={{
            items,
          }}
        >
          <Button
            style={{
              width: "480px",
              height: "50px",
              padding: "0 350px 0px 20px",
            }}
          >
            <MenuOutlined />
            Danh mục khóa học
          </Button>
        </Dropdown>

        <Search
          className="sm:hidden xl:inline-block"
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 600,
            marginTop: "10px",
            height:"10px"
          }}
        />
      </div>
      <div>
        {profile ? (
          <Link
            to="/thongtintaikhoan"
            className="text-white text-xl mr-10 no-underline"
          >
            Xin chào, {profile.hoTen}
          </Link>
        ) : (
          <nav className="mr-10">
            <NavLink
              to="/dangnhap"
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
              to="/dangki"
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
    </div>  );
};

export default Header;
