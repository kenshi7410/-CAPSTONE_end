import { Button, Form, Modal, Pagination, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined, DiffOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import {
  deleteUserAction,
  fetchApprovedCourseAction,
  fetchUnregisteredCourseAction,
  fetchUserListAction,
  fetchWaitingCourseAction,
  postAcceptCourseAction,
  postCancelCourseAction,
  postregisteredCourseAction,
  searchUserAction,
} from "./redux/action";
import Search from "antd/es/input/Search";

const User = () => {
  const userList = useSelector((state) => state.admin.User);
  const courseList = useSelector((state) => state.admin.Course);
  const courseWaiting = useSelector((state) => state.admin.WaitingCourse);
  const courseApproved = useSelector((state) => state.admin.ApprovedCourse);

  useEffect(() => {
    // call api ds người dùng
    dispatch(fetchUserListAction());
  }, []);
  const handelDelete = async (item) => {
    try {
      await dispatch(deleteUserAction(item));
    } catch (err) {
      setIsFalse(err);
    }
    dispatch(fetchUserListAction());
  };
  const onSearch = async (value) => {
    console.log("asd", value);
    if (value) {
      await dispatch(searchUserAction(value));
    } else {
      dispatch(fetchUserListAction());
    }
  };

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccountModal, setIsAccountModal] = useState("");
  const [isFalse, setIsFalse] = useState("");
  const handleCourse = (value) => {
    dispatch(fetchUnregisteredCourseAction(value));
    dispatch(fetchWaitingCourseAction({ taiKhoan: value }));
    dispatch(fetchApprovedCourseAction({ taiKhoan: value }));
    setIsAccountModal(value);
    setIsModalOpen(true);
  };
  const onFinish = async (value) => {
    const item = { maKhoaHoc: value.course, taiKhoan: isAccountModal };
    await dispatch(postregisteredCourseAction(item));
    handleCourse(item.taiKhoan);
  };
  const handleAcceptCourse = async (value) => {
    const item = { maKhoaHoc: value, taiKhoan: isAccountModal };
    await dispatch(postAcceptCourseAction(item));
    handleCourse(item.taiKhoan);
  };
  const handleCancelCourse = async (value) => {
    const item = { maKhoaHoc: value, taiKhoan: isAccountModal };
    await dispatch(postCancelCourseAction(item));
    handleCourse(item.taiKhoan);
  };
  // phần modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    userList && (
      <div className="flex">
        <div className=" basis-1/6 h-max ">
          <Nav />
        </div>
        <div className=" basis-5/6  bg-slate-100">
          <div className="bg-white m-3 px-6 ">
            <h2>Quản lí người dùng</h2>
            <Link to="/admin/quanlinguoidung/addUser">
              <Button type="primary" className="mb-5">
                Thêm người dùng
              </Button>
            </Link>

            <Search
              placeholder="Nhập vào tài khoản người dùng"
              onSearch={onSearch}
              enterButton
              className="mb-5"
              size="large"
            />
            <h2 className="text-center text-red-600 mt-0">{isFalse}</h2>
            <table className="sm:text-xs lg:text-base table-fixed border-collapse w-full mx-auto text-center ">
              <thead className=" bg-slate-100">
                <tr className=" border-solid border-0 border-b-2  border-gray-300">
                  <th className="sm:hidden md:table-cell py-5 w-10 ">STT</th>
                  <th>Tài khoản</th>
                  <th className="sm:hidden lg:table-cell">Họ Tên</th>
                  <th className="sm:hidden xl:table-cell">Email</th>
                  <th className="sm:hidden xl:table-cell">Số điện thoại</th>
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
                      <td className="sm:hidden md:table-cell">{index + 1}</td>
                      <td className="py-5">{item.taiKhoan}</td>
                      <td className=" sm:hidden lg:table-cell px-5">
                        {item.hoTen}
                      </td>
                      <td className="sm:hidden xl:table-cell px-5">
                        {item.email}
                      </td>
                      <td className="sm:hidden xl:table-cell px-5">
                        {item.soDT}
                      </td>
                      <td className="px-5">{item.tenLoaiNguoiDung}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleCourse(item.taiKhoan);
                          }}
                          className="cursor-pointer mr-2 text-2xl p-0 text-green-600 border-none bg-transparent"
                        >
                          <DiffOutlined />
                        </button>
                        <Link
                          state={item}
                          to="/admin/quanlinguoidung/addUser"
                          className="text-2xl mr-3"
                        >
                          <EditOutlined />
                        </Link>
                        <button
                          onClick={() => {
                            handelDelete(item.taiKhoan);
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
          onCancel={handleCancel}
          footer={null}
        >
          <div className="border-solid border-0 border-b-2 ">
            <Form className="flex justify-between" onFinish={onFinish}>
              <Form.Item name="course" initialValue="chọn khóa học">
                <Select
                  style={{
                    width: 360,
                  }}
                  options={courseList?.map((item) => {
                    return {
                      value: item.maKhoaHoc,
                      label: item.tenKhoaHoc,
                    };
                  })}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Ghi danh
                </Button>
              </Form.Item>
            </Form>
          </div>
          {courseWaiting && (
            <div className="border-solid border-0 border-b-2 ">
              <h2 className="mb-0">khóa chờ xác nhận</h2>
              <table className="table-fixed border-collapse w-full text-left">
                <thead className="bg-slate-300">
                  <tr>
                    <th className="w-10 py-1">STT</th>
                    <th>Tên khóa học</th>
                    <th className="w-40 ">Chờ xác nhận</th>
                  </tr>
                </thead>
                <tbody>
                  {courseWaiting.map((item, index) => {
                    return (
                      <tr key={item.maKhoaHoc}>
                        <td>{index}</td>
                        <td>{item.tenKhoaHoc}</td>
                        <td>
                          <Button
                            onClick={() => {
                              handleAcceptCourse(item.maKhoaHoc);
                            }}
                            type="primary"
                            className="mr-3"
                          >
                            Xác thực
                          </Button>
                          <Button
                            danger
                            onClick={() => {
                              handleCancelCourse(item.maKhoaHoc);
                            }}
                          >
                            Hủy
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {courseApproved && (
            <div className="border-solid border-0  ">
              <h2 className="mb-0">khóa đã ghi danh</h2>
              <table className="table-fixed border-collapse w-full text-left">
                <thead className="bg-slate-300">
                  <tr>
                    <th className="w-10 py-1">STT</th>
                    <th>Tên khóa học</th>
                    <th className="w-24 ">Chờ xác nhận</th>
                  </tr>
                </thead>
                <tbody>
                  {courseApproved.map((item, index) => {
                    return (
                      <tr key={item.maKhoaHoc}>
                        <td>{index}</td>
                        <td>{item.tenKhoaHoc}</td>
                        <td className="text-right">
                          <Button
                            danger
                            className="mr-2"
                            onClick={() => {
                              handleCancelCourse(item.maKhoaHoc);
                            }}
                          >
                            Hủy
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </Modal>
      </div>
    )
  );
};

export default User;
