import React from "react";
import { Button, Col, Row, Tabs } from "antd";
import { useSelector } from "react-redux";



const UserInfor = () => {
  const profile = useSelector((state) => state.user.profile); 
  console.log(profile)
  const items = [
    {
      key: "1",
      label: `THÔNG TIN CÁ NHÂN`,
      children: (
        <div>
          <Row justify="space-around">
            <Col className="text-xl my-2" span={10}>Email : {profile?.email}</Col>
            <Col className="text-xl my-2" span={10}>Tài khoản : {profile?.taiKhoan}</Col>
            <Col className="text-xl my-2" span={10}>Họ tên : {profile?.hoTen}</Col>
            <Col className="text-xl my-2" span={10}>Mật khẩu : {profile?.matKhau}</Col>
            <Col className="text-xl my-2" span={10}>Số điện thoại : {profile?.soDT}</Col>
            <Col className="my-2" span={10}><Button type="primary">Cập nhật</Button></Col>
          </Row>
        </div>
      ),
    },
    {
      key: "2",
      label: `KHÓA HỌC CỦA TÔI`,
      children: `Content of Tab Pane 2`,
    },
  ];

  return (profile &&
    <div className="w-3/6 mx-auto">
      <Tabs defaultActiveKey="1" items={items}  />
    </div>
  );
};

export default UserInfor;
