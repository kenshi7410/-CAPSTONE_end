import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { signUpAction } from "./redux/action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 9,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [err,setErr]=useState("")
  const onFinish = async (values) => {
    const value = { ...values, maNhom: "GP01", maLoaiNguoiDung: "HV" };
    try {
      await dispatch(signUpAction(value));
      navigate("/login")
    } catch (err) {
      setErr(err.response.data)
    }
  };

  return (
  <div>
    <h1 className="text-center mb-0">Đăng kí</h1>
    <h4 className="text-center my-0 text-red-600">{err}</h4>
    <Form
      className="my-8"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="taiKhoan"
        label="Tài khoản"
        rules={[
          {
            required: true,
            message: "chưa nhập tài khoản",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="matKhau"
        label="Password"
        rules={[
          {
            required: true,
            message: "chưa nhập mật khẩu",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["matKhau"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "chưa nhập mật khẩu",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("matKhau") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("hai mật khẩu khác nhau"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="hoTen"
        label="Họ tên"
        rules={[
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="soDT"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Đăng Kí
        </Button>
      </Form.Item>
    </Form>
  </div>
    
  );
};

export default SignUp;
