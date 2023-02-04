import { Button, Dropdown, Input, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import logo from "./../assets/cyberlogo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoryAction } from "features/Booking/redux/action";
import { useEffect } from "react";





const items = [];
const handleMenuClick = (e) => {
  console.log('click', e);
};



const menuProps = {
  items,
  onClick: handleMenuClick,
};
//search thông tin
const { Search } = Input;
const onSearch = (value) => console.log(value);
const Header = () => {
  const category = useSelector((state) => state.booking.category);
  // console.log(category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryAction())
  }, [])

  const profile = useSelector((state) => state.user.profile);
  return (
    <div className="flex justify-between content-center items-center py-4 bg-slate-500">
      <div>
        <Link to="/" className="no-underline mx-5 ">
          <img
            src={logo}
            alt="logo"
            className="sm:w-32 sm:h-10   lg:w-64 lg:h-20"
          />
        </Link>
      </div>
      <div className="space-x-14">
        <Space wrap>
          <Dropdown.Button menu={menuProps} placement="bottom">
            Dropdown
          </Dropdown.Button>
        </Space>
        <Search
          className="sm:hidden xl:inline-block "
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 500,
          }}
        />
      </div>
      <div>
        {profile ? (
          <span className="text-white text-xl mr-10">
            Xin chào, {profile.hoTen}
          </span>
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
    </div>
  );
};

export default Header;
