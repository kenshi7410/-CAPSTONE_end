import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "./redux/action";

const Login = () => {
  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      await dispatch(loginAction(values));

      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className="container text-center mx-auto ">
      <h1 className="text-center mb-0">Login</h1>
      <h4 className="text-center my-0 text-red-600">{err}</h4>
      <div className="flex justify-center pt-5">
        <Form name="basic" onFinish={handleLogin}>
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
