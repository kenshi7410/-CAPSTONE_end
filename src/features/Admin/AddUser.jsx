import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import { postUserAction, putUserAction } from "./redux/action";

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

const AddUser = () => {
  const onFinish = async (value) => {
    const values = { ...value, maNhom: "GP01" };
    if (!state) {
      await dispatch(postUserAction(values));
      navigate("/admin/quanlinguoidung");
    } else {
      dispatch(putUserAction(values));
      navigate("/admin/quanlinguoidung");
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  let disabledFlag = false;
  if (state) {
    disabledFlag = true;
  }
  return (
    <div className="flex">
      <div className="basis-1/6 h-max ">
        <Nav />
      </div>
      <div className="basis-5/6  bg-slate-100">
        <div className="bg-white m-3 px-6 ">
          <h2>Thêm người dùng</h2>
          <Form
            labelCol={{
              sm: { span: 10 },
              lg: { span: 4 },
            }}
            wrapperCol={{
              span: 16,
            }}
            name="nest-messages"
            validateMessages={validateMessages}
            onFinish={onFinish}
          >
            <Form.Item
              name="taiKhoan"
              label="Tài khoản"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={state?.taiKhoan}
            >
              <Input disabled={disabledFlag} />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
              initialValue={state?.email}
            >
              <Input />
            </Form.Item>

            <Form.Item name="matKhau" label="Mật khẩu">
              <Input />
            </Form.Item>
            <Form.Item
              name="soDT"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={state?.soDT}
            >
              <Input />
            </Form.Item>
            <Form.Item name="hoTen" label="Họ Tên" initialValue={state?.hoTen}>
              <Input />
            </Form.Item>
            <Form.Item
              name="maLoaiNguoiDung"
              label="loại người dùng"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={state?.maLoaiNguoiDung}
            >
              <Select>
                <Select.Option value="GV">Giáo vụ</Select.Option>
                <Select.Option value="HV">Học viên</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 30,
                sm: { offset: 9 },
                lg: { offset: 4 },
              }}
            >
              <Button type="primary" htmlType="submit">
                Thêm
              </Button>
              <Button
                className="bg-green-600 text-white mx-5"
                htmlType="submit"
              >
                Thay đổi
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
