import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Rate, Row, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { cancelAction, fetchOneProfileAction, putProfileAction } from "./redux/action";
import { useNavigate } from "react-router-dom";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} chưa nhập",
  types: {
    email: "${label} không hợp lệ !",
    number: "${label} bắt buộc phải là số !",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const UserInfor = () => {
  const colClass = " sm:text-lg  lg:text-2xl my-2";
  const oneProfile = useSelector((state) => state.user.oneProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isERR, setIsERR] = useState("");
  useEffect(() => {
    dispatch(fetchOneProfileAction);
  }, []);
  const handelCancelCourse = async (item) => {
    await dispatch(cancelAction(item, oneProfile.taiKhoan));
    await dispatch(fetchOneProfileAction);
  };
  const deleteLogin = async () => {
    await localStorage.removeItem("accessToken");
    navigate("/");
    await window.location.reload();
  };
  // modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleModal = () => {
    setIsModalOpen(true);
    setIsERR("");
  };
  const onFinish = async (item) => {
    const items = {
      ...item,
      maNhom: "GP01",
      maLoaiNguoiDung: oneProfile.maLoaiNguoiDung,
    };
    try {
      await dispatch(putProfileAction(items));
      handleCancel();
      dispatch(fetchOneProfileAction);
    } catch (err) {
      setIsERR(err);
    }
    
  };
  const items = [
    {
      key: "1",
      label: `THÔNG TIN CÁ NHÂN`,
      children: (
        <div>
          <Row justify="space-around" className="text-">
            <Col className={colClass} span={10}>
              Email : {oneProfile?.email}
            </Col>
            <Col className={colClass} span={10}>
              Tài khoản : {oneProfile?.taiKhoan}
            </Col>
            <Col className={colClass} span={10}>
              Họ tên : {oneProfile?.hoTen}
            </Col>
            <Col className={colClass} span={10}>
              Mật khẩu : {oneProfile?.matKhau}
            </Col>
            <Col className={colClass} span={10}>
              Số điện thoại : {oneProfile?.soDT}
            </Col>
            <Col className="my-2" span={10}>
              <Button onClick={handleModal} type="primary" className="mr-2">
                Cập nhật
              </Button>
              <Button onClick={deleteLogin} type="primary" danger>
                Đăng xuất
              </Button>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: "2",
      label: `KHÓA HỌC CỦA TÔI`,
      children: oneProfile && (
        <div>
          <h2>Các khóa học đã tham gia</h2>
          {oneProfile.chiTietKhoaHocGhiDanh?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between mb-5 border-solid border-0 border-t-2 pt-2"
              >
                <div className="w-4/12">
                  <img
                    className="w-full"
                    src={item.hinhAnh}
                    alt={item.biDanh}
                  />
                </div>
                <div className="w-5/12">
                  <h2 className="my-0">{item.tenKhoaHoc}</h2>
                  <p>{item.moTa}</p>
                </div>
                <div className="w-2/12">
                  <Rate count={10} defaultValue={item.danhGia} />
                  <p>lượt xem : {item.luotXem}</p>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      handelCancelCourse(item.maKhoaHoc);
                    }}
                  >
                    Hủy
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    oneProfile && (
      <div className="sm:w-11/12 xl:w-4/6 mx-auto">
        <Tabs defaultActiveKey="1" items={items} />

        <Modal
          title="THÔNG TIN CÁ NHÂN"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <div>
            <Form
              onFinish={onFinish}
              labelCol={{
                sm: { span: 10 },
                lg: { span: 5 },
              }}
              wrapperCol={{
                span: 16,
              }}
              validateMessages={validateMessages}
            >
              <h2 className="text-red-600 text-center my-0">{isERR}</h2>
              <Form.Item
                label="Tài khoản :"
                name="taiKhoan"
                initialValue={oneProfile?.taiKhoan}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                label="Email :"
                name="email"
                initialValue={oneProfile?.email}
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Họ tên :"
                name="hoTen"
                initialValue={oneProfile?.hoTen}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mật khẩu :"
                name="matKhau"
                initialValue={oneProfile?.matKhau}
                rules={[
                  {
                    required: true,
                    message: "password chưa nhập",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Số điện thoại :"
                name="soDT"
                initialValue={oneProfile?.soDT}
                rules={[
                  {
                    required: true,
                    
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 30,
                  sm: { offset: 9 },
                  lg: { offset: 5 },
                }}
              >
                <Button type="primary" htmlType="submit">
                  Lưu thông tin
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    )
  );
};

export default UserInfor;
