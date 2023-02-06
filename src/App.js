import Footer from "components/Footer";
import AddCourse from "features/Admin/AddCourse";
import AddUser from "features/Admin/AddUser";
import Admin from "features/Admin/Admin";
import EditCourse from "features/Admin/EditCourse";
import User from "features/Admin/User";
import SearchCourse from "features/Booking/component/SearchCourse";
import DetailCourseList from "features/Booking/DetailCourseList";
import DetailofCourse from "features/Booking/DetailofCourse";
import { fetchCardAction, fetchCategoryAction, fetchCourseAction } from "features/Booking/redux/action";
import { fetchProfileAction } from "features/Login/redux/action";
import UserInfor from "features/Login/UserInfor";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./features/Booking/Home";
import Login from "./features/Login/Login";
import SignUp from "./features/Login/SignUp";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch async action fetch profile
    dispatch(fetchProfileAction);
    dispatch(fetchCategoryAction());
    dispatch(fetchCardAction())
    // dispatch(fetchCourseAction());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="search/:tenKhoaHoc" element={<SearchCourse />} />
        <Route path="/courselist/:maDanhMuc&:MaNhom=GP01" element={<DetailCourseList />} />
        <Route path="/detail/:maKhoaHoc" element={<DetailofCourse />} />
        <Route path="/dangnhap" element={<Login />} />
        <Route path="/dangki" element={<SignUp />} />
        <Route path="/thongtintaikhoan" element={<UserInfor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/quanlinguoidung" element={<User />} />
        <Route path="/admin/quanlikhoahoc/addCourse" element={<AddCourse />} />
        <Route path="/admin/quanlikhochoc/editCourse" element={<EditCourse />} />

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
