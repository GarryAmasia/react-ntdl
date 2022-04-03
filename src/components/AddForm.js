import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};

export const AddForm = ({ addToTaskList }) => {
  // 1.get the form data and store i local state on input field changed
  const [newInfo, setNewInfo] = useState(initialState);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNewInfo({
      ...newInfo,
      [name]: value,
    });
    // console.log(newInfo);
    // console.log(name);
    // console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToTaskList(newInfo);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Task..."
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              name="hr"
              placeholder="hour"
              type="number"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md={2} className="text-center">
            <Button className="btn-dark" variant="primary" type="submit">
              Add task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
