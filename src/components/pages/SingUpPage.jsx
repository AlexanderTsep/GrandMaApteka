import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function SignUpPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!data.name || !data.email || !data.password) return null;
    axios
      .post('/auth/signup', data)
      .then((res) => {
        window.location = '/';
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" name="name" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" name="password" placeholder="password" />
          </Form.Group>
          <Button type="submit" variant="primary">
            зарегистрироваться
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
