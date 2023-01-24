import { Button, Modal, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined,DiffOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import { fetchUserListAction } from "./redux/action";

const User = () => {
  const userList = useSelector((state) => state.admin.User);
  useEffect(() => {
    // call api ds người dùng
    dispatch(fetchUserListAction(1));
  }, []);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
                <th>Họ Tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th className="w-28">
                  Tên loại <br /> người dùng
                </th>
                <th className="w-28">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {userList.items?.map((item, index) => {
                return (
                  <tr
                    key={item.taiKhoan}
                    className=" border-solid border-0 border-b-2  border-gray-300"
                  >
                    <td>{index + 1}</td>
                    <td className="py-5">{item.taiKhoan}</td>
                    <td className="px-5">{item.hoTen}</td>
                    <td className="px-5">{item.email}</td>
                    <td className="px-5">{item.soDT}</td>
                    <td className="px-5">{item.tenLoaiNguoiDung}</td>
                    <td>
                      <button
                        onClick={showModal}
                        className="cursor-pointer mr-2 text-2xl p-0 text-green-600 border-none bg-transparent"
                      >
                        <DiffOutlined />
                      </button>
                      <Link to="/admin/user/addnew"
                      className="text-2xl mr-3">
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
        </div>
        {userList.items && (
          <Pagination
            className="text-center mb-10"
            defaultCurrent={userList.currentPage}
            total={userList.totalCount}
            pageSize={10}
            onChange={(page) => {
              dispatch(fetchUserListAction(page));
            }}
          />
        )}
      </div>
      <Modal
        title="Ghi danh khóa học"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default User;
