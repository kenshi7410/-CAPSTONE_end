import { Button } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";

const Admin = () => {
  return (
    <div className="flex">
      <div className="basis-1/6 h-max ">
        <Nav />
      </div>
      <div className="basis-5/6  bg-slate-100">
        <div className="bg-white m-3 px-6 ">
          <h2>Quản lí phim</h2>
          <Link to="/admin/addnew">
            <Button type="primary" className="mb-5">
              Thêm phim
            </Button>
          </Link>
          <form className="h-12 mx-auto " action="">
            <input
              className="w-11/12 h-8 "
              type="text"
              placeholder="tìm kiếm"
            />

            <button className="hover:cursor-pointer rounded-r-lg align-bottom w-20 h-10 bg-blue-500 text-white border-none text-xl">
              <SearchOutlined />
            </button>
          </form>
          <table className=" table-fixed border-collapse w-full mx-auto text-center ">
            <thead className=" bg-slate-100">
              <tr className=" border-solid border-0 border-b-2  border-gray-300">
                <th className="py-5">Mã phim</th>
                <th>Hình ảnh</th>
                <th>Tên phim</th>
                <th className="m-9 w-5/12 ">Mô tả</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
