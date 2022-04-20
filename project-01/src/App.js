import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title.js";
import Modal from "./components/Modal.js";
import TasksList from "./components/TasksList.js";
import NewTaskForm from "./components/NewTaskForm.js";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addTask = (event) => {
    setEvents((prevTasks) => {
      return [...prevTasks, event]
    })
    setShowModal(false);
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((item) => {
        return id !== item.id;
      });
    });
  };

  const subtitle = "All the things I have to do to learn to code";

  return (
    <div className="App">
      <Title title="My to-do list" subtitle={subtitle} />
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
        <Modal isSalesModal={true}>
          <NewTaskForm addTask={addTask}/>
        </Modal>
      )}
    </div>
  );
};

export default App;
