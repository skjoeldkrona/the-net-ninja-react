import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title.js";
import Modal from "./components/Modal.js";
import TasksList from "./components/TasksList.js";
import NewTaskForm from "./components/NewTaskForm.js";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Practice every day", id: 1 },
    { title: "Read programming book", id: 2 },
    { title: "Write loads of code", id: 3 },
    { title: "Eat well", id: 4 },
    { title: "Let my brain rest", id: 5 },
    { title: "Do exercise", id: 6 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((item) => {
        return id !== item.id;
      });
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const subtitle = "All the things I have to do to learn to code";

  return (
    <div className="App">
      <Title title="My simple to-do list" subtitle={subtitle} />
      {showEvents && <TasksList events={events} handleClick={handleClick} />}
      <hr />
      {showEvents && (
        <>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </>
      )}
      {!showEvents && (
        <>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </>
      )}
      <hr />
      <button onClick={() => setShowModal(true)}>Add new task</button>
      {showModal && (
        <Modal handleClose={handleModalClose} isSalesModal={true}>
          <NewTaskForm />
        </Modal>
      )}
    </div>
  );
};

export default App;
