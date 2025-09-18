import React, { useState } from "react";
import Layout from "../common/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

const Login = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/admin/login", {
        email,
        password,
      });

      if (res.status === 200 && res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/dashboard");
        toast.success("Login Successful! Welcome Back " + res.data.name);
        
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("Invalid credentials");
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: isMobile ? "50vh" : "60vh" }}>
        <Row className="w-100">
          <Col md={{ span: 4, offset: 4 }}>
            <Card className="shadow-lg p-4">
              <h3 className="text-center mb-4">Admin Login</h3>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? <Spinner animation="border" size="sm" /> : "Login"}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Login;
