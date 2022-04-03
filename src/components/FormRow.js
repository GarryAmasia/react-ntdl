import React from "react";
import { Form, Button } from "react-bootstrap";

export const FormRow = () => {
  return (
    <tr>
      <td>
        <Form.Check type="checkbox" />
      </td>
      <td>task name</td>
      <td>10 hour</td>
      <td className="text-end">
        <Button variant="danger">
          <i className="fa-solid fa-trash-can"></i>
        </Button>{" "}
        <Button variant="primary">
          <i className="fa-solid fa-arrow-right-long"></i>
        </Button>
      </td>
    </tr>
  );
};
