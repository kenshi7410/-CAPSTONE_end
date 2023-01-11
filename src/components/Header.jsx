import { Button, Dropdown, Input, Space } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import logo from "./../assets/cyberlogo.png";

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
  return (
    <div className="flex justify-between content-center items-center py-4 bg-slate-500">
      <div>
        <a href="#" className="no-underline mx-5 ">
          <img src={logo} alt="logo" className="w-64 h-20" />
        </a>
      </div>
      <div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button>
            <MenuOutlined />
            Danh mục khóa học
            kenshi
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
        <Button>Đăng kí</Button>
        <Button>Đăng nhập</Button>
      </div>
    </div>
  );
};

export default Header;
