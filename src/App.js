import Footer from "components/Footer";
import AddUser from "features/Admin/AddUser";
import Admin from "features/Admin/Admin";
import User from "features/Admin/User";
import DetailCourseList from "features/Booking/component/DetailCourseList";
import Detail from "features/Booking/CategoryList";
import { fetchCategoryAction, fetchCourseAction } from "features/Booking/redux/action";
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
import CategoryList from "features/Booking/CategoryList";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch async action fetch profile
    dispatch(fetchProfileAction);
    dispatch(fetchCategoryAction());
    // dispatch(fetchCourseAction());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courselist/:maDanhMuc&:MaNhom=GP01" element={<CategoryList/>} />
        {/* <Route path="/detail/:maKhoaHoc" element={<Detail/>}/> */}
        <Route path="/dangnhap" element={<Login />} />
        <Route path="/dangki" element={<SignUp />} />
        <Route path="/thongtintaikhoan" element={<UserInfor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/quanlinguoidung" element={<User />} />
        <Route path="/admin/quanlinguoidung/addUser" element={<AddUser />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
