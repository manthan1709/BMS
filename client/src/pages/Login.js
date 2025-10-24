import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate("/");
    }
  }, [navigate]); 

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', values);
      if(response.data && response.data.success) {
        message.success('Login successful!');
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        message.error(response.data?.message || 'Login failed');
      }
    } catch (error) {
      message.error(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Login to BookMyShow</h1>
          </section>

          <section className="right-section">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input id="email" type="text" placeholder="Enter your Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input id="password" type="password" placeholder="Enter your Password" />
              </Form.Item>

              <Form.Item className="d-block">
                <Button 
                  type="primary" 
                  block 
                  htmlType="submit"
                  loading={loading}
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                New User? <Link to="/register">Register Here</Link>
              </p>
              <p>
                Forgot Password? <Link to="/forget">Click Here</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Login;