import React from "react";
import { Row, Col, Table, Button, Form } from "react-bootstrap";
// import { FormRow } from "./FormRow";

export const BadList = () => {
  // create sample data

  return (
    <div>
      <h2 className="text-center">Bad List</h2>
      <hr />
      {/* this table is for task list */}
      <Table striped hover>
        <tbody>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>task name</td>
            <td>10 hour</td>
            <td className="text-end">
              <Button variant="warning">
                <i className="fa-solid fa-arrow-left-long"></i>
              </Button>{" "}
              <Button variant="primary">
                <i className="fa-solid fa-trash-can"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <h5 className="mt-4 text-danger">You could have saved : 20 hours</h5>
    </div>
  );
};
