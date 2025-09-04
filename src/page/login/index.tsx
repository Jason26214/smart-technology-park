import "./index.scss";
import bg from "../../assets/bg.jpg";
import lgbg from "../../assets/lgbg.jpg";
import logo from "../../assets/logo.png";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import http from "../../utils/http";
import { useEffect } from "react";

export default function Login() {
  const [form] = Form.useForm();

  function handleLogin() {
    form.validateFields().then().catch();
  }

  useEffect(() => {
    http({
      method: "post",
      url: "/login",
      data: { username: "Jack", password: 123456 },
    })
      .then((res) => {
        console.log("The request result is", res);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
        <div className="part">
          <div className="title">
            <div className="logo">
              <img src={logo} width={100} />
            </div>
            <h1>
              Smart Technology Park
              <br />
              Management System
            </h1>
          </div>
          <Form form={form}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
                { min: 5, message: "Username must be at least 5 characters" },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "Only letters, numbers, and underscores are allowed",
                },
              ]}
            >
              <Input
                placeholder="Please input your username"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 6, message: "Password must be at least 6 characters" },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                  message:
                    "Must include uppercase, lowercase, number, and special character",
                },
              ]}
            >
              <Input.Password
                placeholder="Please input your password"
                prefix={<LockOutlined />}
                autoComplete="off"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={handleLogin}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
