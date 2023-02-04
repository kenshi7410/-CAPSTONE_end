import AddUser from "features/Admin/AddUser";
import Admin from "features/Admin/Admin";
import User from "features/Admin/User";
import CourseList from "features/Booking/CourseList";
import Detail from "features/Booking/Detail";
import { fetchCategoryAction } from "features/Booking/redux/action";
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
    dispatch(fetchCategoryAction())
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courselist/:maDanhMuc&:MaNhom=GP01" element={<CourseList/>} />
        <Route path="/detail/:maKhoaHoc" element={<Detail/>}/>
        <Route path="/dangnhap" element={<Login />} />
        <Route path="/dangki" element={<SignUp />} />
        <Route path="/thongtintaikhoan" element={<UserInfor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/quanlinguoidung" element={<User />} />
        <Route path="/admin/quanlinguoidung/addUser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
