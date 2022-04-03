// import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import { Title } from "./components/Title";
import { AddForm } from "./components/AddForm";
import { TaskList } from "./components/TaskList";
// import { FormRow } from "./components/FormRow";
import { useState } from "react";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        {/* title component here */}
        <Title />
        {/* form component here */}
        <AddForm />
        <hr />

        {/* task list component here */}
        <TaskList />
      </Container>
    </div>
  );
};

export default App;

// functionality:
// 1.get the form data and store i local state on input field changed
// 2.on form SubmitEvent,send the task data tot he parent component to put in the task collections
// 3. send the task list array to TaskList component
// 4.receive and loop the task array int he task list component
