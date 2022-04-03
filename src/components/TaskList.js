import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { FormRow } from "./FormRow";

export const TaskList = () => {
  // create sample data

  return (
    <div>
      <Row>
        <Col md="6">
          <h2 className="text-center">Task List</h2>
          <hr />
          {/* this table is for task list */}
          <Table striped hover>
            <tbody>
              <FormRow />
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <h2 className="text-center">Bad List</h2>
          <hr />
          {/* this table is for bad list */}
          <Table striped hover>
            <tbody>
              <FormRow />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
