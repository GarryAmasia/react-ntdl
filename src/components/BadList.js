import React from "react";
import { Table, Button, Form } from "react-bootstrap";
// import { FormRow } from "./FormRow";

export const BadList = ({
  badList,
  removeFromBadList,
  shiftToTaskList,
  BadListTotalHr,
}) => {
  // create sample data

  return (
    <div>
      <h2 className="text-center">Bad List</h2>
      <hr />
      {/* this table is for task list */}
      <Table striped hover>
        <tbody>
          {badList.map((item, i) => (
            <tr key={i}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td className="text-end">
                <Button variant="warning" onClick={() => shiftToTaskList(i)}>
                  <i className="fa-solid fa-arrow-left-long"></i>
                </Button>{" "}
                <Button variant="danger" onClick={() => removeFromBadList(i)}>
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="mt-4 text-danger">
        You could have saved : {BadListTotalHr} hours
      </h5>
    </div>
  );
};
