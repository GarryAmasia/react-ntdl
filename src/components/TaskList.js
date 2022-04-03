import React from "react";
import { Row, Col, Table, Button, Form } from "react-bootstrap";
// import { FormRow } from "./FormRow";

export const TaskList = ({ taskList, removeFromTaskList, shiftToBadList }) => {
  // create sample data

  return (
    <div>
      <h2 className="text-center">Task List</h2>
      <hr />
      {/* this table is for task list */}
      <Table striped hover>
        <tbody>
          {taskList.map((item, index) => (
            <tr key={index}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td className="text-end">
                <Button
                  variant="danger"
                  onClick={() => removeFromTaskList(index)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
                <Button variant="primary" onClick={() => shiftToBadList(index)}>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
