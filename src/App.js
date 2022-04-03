// import logo from "./logo.svg";
import "./App.css";
import { Container, Form, Col, Row } from "react-bootstrap";
import { Title } from "./components/Title";
import { AddForm } from "./components/AddForm";
import { TaskList } from "./components/TaskList";
// import { FormRow } from "./components/FormRow";
import { BadList } from "./components/BadList";
import { Component, useState } from "react";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);

  const addToTaskList = (newInfo) => {
    setTaskList([...taskList, newInfo]);
    console.log(taskList, newInfo);
  };
  // console.log(taskList);

  //remove item from the task list
  //use i because its unique
  const removeFromTaskList = (i) => {
    const filteredArg = taskList.filter((item, index) => index !== i);
    setTaskList(filteredArg);
  };

  //moving from the task list to bad list based on an index
  const shiftToBadList = (i) => {
    //get the item that to be shifted
    const item = taskList[i];
    console.log(item);

    //add the item in the bad list
    setBadList([...badList, item]);

    //remove the item from the task list
    removeFromTaskList(i);
  };

  return (
    <div className="wrapper">
      <Container>
        {/* title component here */}
        <Title />
        {/* form component here */}
        <AddForm addToTaskList={addToTaskList} />
        <hr />

        {/* task list component here */}
        <Row>
          <Col md="6">
            <TaskList
              taskList={taskList}
              removeFromTaskList={removeFromTaskList}
              shiftToBadList={shiftToBadList}
            />
          </Col>
          <Col md="6">
            <BadList badList={badList} />
          </Col>
        </Row>
        <Row>
          {/* Total hours allocation */}
          <Row>
            <Col>
              <h2 className="mt-5">The total allocated hours us :15 hours</h2>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default App;

// functionality:
// 1.get the form data and store i local state on input field changed(done)
// 2.on form SubmitEvent,send the task data tot he parent component to put in the task collections(done)
// 3. send the task list array to TaskList component(done)
// 4.receive and loop the task array int he task list component(done)

//feature
// 1.delete on click delete button
// 2.switch task to bad list when you click on the arrow button
// 3.delete from the bad list
// 4.switch bad list item to task list when you click on pointing arrow in the bad list
// 5.show the totalallocated hours int he app Component
// 6.show the total hours that could haave been saved int he bad list Component
// 7.make sure use can not add task that exceeds the total weekly hours 168 hours.

// additional:
// 8.  make thecheck box to be selected for the bulk delete
//9.
