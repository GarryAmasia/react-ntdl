import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";

export const AddForm = () => {
  // 1.get the form data and store i local state on input field changed

  return (
    <div>
      <Form>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control name="task" placeholder="Task..." required />
          </Col>
          <Col md={3}>
            <Form.Control name="hr" placeholder="hour" type="number" required />
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
