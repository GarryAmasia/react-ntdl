import React from "react";
import { Row, Col, Table, Button, Form } from "react-bootstrap";
// import { FormRow } from "./FormRow";

export const TaskList = () => {
  // create sample data

  return (
    <div>
      <h2 className="text-center">Task List</h2>
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
              <Button variant="danger">
                <i className="fa-solid fa-trash-can"></i>
              </Button>{" "}
              <Button variant="primary">
                <i className="fa-solid fa-arrow-right-long"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
