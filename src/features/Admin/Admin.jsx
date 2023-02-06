import { Button, Pagination } from "antd";
import { DeleteOutlined, EditOutlined, DiffOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseEditAction, fetchCourseListAction, fetchSearchAction } from "./redux/action";
import { useEffect, useState } from "react";

const Admin = () => {
  const courseList = useSelector((state) => state.admin.card)
  const handleDelete = async (item) => {
    try {
      await
        (deleteCourseEditAction(item));
    } catch (err) {
      setIsFalse(err)
    }
    dispatch(fetchCourseListAction)
  }
  const handleSearch = async (value) => {
    console.log(value)
    if (value) {
      dispatch(fetchSearchAction(value));
    } else {
      dispatch(fetchCourseListAction());
    }
  };
  useEffect(() => {
    // call api ds khoá học
    dispatch(fetchCourseListAction());
  }, []);
  // console.log(fetchCourseListAction())
  const dispatch = useDispatch()
  const [isFalse, setIsFalse] = useState("")
  // console.log(courseList)
  return (
    <div className="flex">
      <div className="basis-1/6 h-max ">
        <Nav />
      </div>
      <div className="basis-5/6  bg-slate-100">
        <div className="bg-white m-3 px-6 ">
          <h2>Quản lí khoá học</h2>
          <Link to="/admin/quanlikhoahoc/addCourse">
            <Button type="primary" className="mb-5">
              Thêm khoá học
            </Button>
          </Link>
          <form className="h-12 mx-auto " action="">
            <input
              className="w-11/12 h-8 "
              type="text"
              placeholder="tìm kiếm"
              onSearch={handleSearch}
            />

            <button className="hover:cursor-pointer rounded-r-lg align-bottom w-20 h-10 bg-blue-500 text-white border-none text-xl">
              <SearchOutlined />
            </button>
          </form>
          <table className=" table-fixed border-collapse w-full mx-auto text-center ">
            <thead className=" bg-slate-100">
              <tr className=" border-solid border-0 border-b-2  border-gray-300">
                <th className="py-5">STT</th>
                <th>Mã khoá học</th>
                <th>Bí danh</th>
                <th>Tên khoá học</th>
                {/* <th>Mô tả</th> */}
                <th>Mã nhóm</th>
                {/* <th>Mã danh mục khoá học</th> */}
                <th className="m-9 w-5/12 ">Hình ảnh</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {courseList.items?.map((item, index) => {
                console.log(item)
                return (
                  <tr
                    key={item.maKhoaHoc}
                    className=" border-solid border-0 border-b-2  border-gray-300">
                    <td className="sm:hidden md:table-cell">{index + 1}</td>
                    <td className="py-5">{item.maKhoaHoc}</td>
                    <td className=" sm:hidden lg:table-cell px-5">
                      {item.biDanh}
                    </td>
                    <td className="sm:hidden xl:table-cell px-5">
                      {item.tenKhoaHoc}
                    </td>
                    {/* <td className="sm:hidden xl:table-cell px-5">
                      {item.moTa}
                    </td> */}
                    <td className="px-5">{item.maNhom}</td>
                    {/* <td className="px-5">{item.maDanhMucKhoahoc}</td> */}
                    <td className="px-5"><img src={item.hinhAnh} alt={item.tenKhoaHoc} style={{width:"15rem"}} /></td>
                    <td>
                      <button
                        onClick={() => {
                          // handleCourse(item.taiKhoan);
                        }}
                        className="cursor-pointer mr-2 text-2xl p-0 text-green-600 border-none bg-transparent"
                      >
                        <DiffOutlined />
                      </button>
                      <Link
                        state={item}
                        to="/admin/quanlikhoahoc/addCourse"
                        className="text-2xl mr-3"
                      >
                        <EditOutlined />
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(item.maKhoaHoc);
                        }}
                        className="cursor-pointer mr-2 text-2xl p-0 text-red-600 border-none bg-transparent"
                      >
                        <DeleteOutlined />
                      </button>
                    </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {courseList.items && (
            <Pagination
              className="text-center mb-10"
              defaultCurrent={1}
              total={courseList.totalCount}
              pageSize={10}
              onChange={(page) => {
                dispatch(fetchCourseListAction("",page));
              }}
            />
          )}
      </div>
    </div>
  );
};

export default Admin;
