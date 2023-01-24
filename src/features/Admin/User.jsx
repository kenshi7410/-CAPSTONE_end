import { Button, Pagination } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import { fetchUserListAction } from "./redux/action";

const User = () => {
    const userList = useSelector((state) => state.admin.User);
    // useEffect(() => {
    //     // call api ds người dùng
    //     dispatch(fetchUserListAction);
    //   });
      const dispatch = useDispatch();
  return (
    <div className="flex">
      <div className="basis-1/6 h-max ">
        <Nav />
      </div>
      <div className="basis-5/6  bg-slate-100">
        <div className="bg-white m-3 px-6 ">
          <h2>Quản lí người dùng</h2>
          <Link to="/admin/user/addnew">
            <Button type="primary" className="mb-5">
              Thêm người dùng
            </Button>
          </Link>
          <form className="h-12 mx-auto " action="">
            <input
              className="w-full h-8 "
              type="text"
              placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
              //onChange={}
            />
          </form>
          <table className=" table-fixed border-collapse w-full mx-auto text-center ">
            <thead className=" bg-slate-100">
              <tr className=" border-solid border-0 border-b-2  border-gray-300">
                <th className="py-5 w-10">STT</th>
                <th>Tài khoản</th>
                <th>Mật khẩu</th>
                <th>Họ Tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th className="w-20">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {userList?.map((item, index) => {
                // console.log(item);
                return (
                  <tr
                    key={item.taiKhoan}
                    className=" border-solid border-0 border-b-2  border-gray-300"
                  >
                    <td>{index + 1}</td>
                    <td className="py-5">{item.taiKhoan}</td>
                    <td>{item.matKhau}</td>
                    <td className="px-5">{item.hoTen}</td>
                    <td className="px-5">{item.email}</td>
                    <td className="px-5">{item.soDT}</td>
                    <td>
                      <Link
                        to={`/admin/user/edit/${item.taiKhoan}`}
                        className="text-2xl mr-4"
                      >
                        <EditOutlined />
                      </Link>
                      <button
                        onClick={() => {
                         // handelDelete(item.taiKhoan);
                        }}
                        className="cursor-pointer mr-2 text-2xl p-0 text-red-600 border-none bg-transparent"
                      >
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {userList && (
        <Pagination className="text-center mb-10"
          defaultCurrent={1}
          total={50}
          pageSize={10}
          onChange={(page) => {
           // dispatch(fetchMoviesAction(page));
          }}
        />
      )}
        </div>
      </div>
    </div>
  );
};

export default User;
