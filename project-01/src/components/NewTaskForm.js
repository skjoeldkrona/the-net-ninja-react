import "./NewTaskForm.css";
import { useState } from "react";

const NewTaskForm = ( {addTask} ) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("low");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setPriority("low")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      priority: priority,
      id: Math.floor(Math.random() * 100)
    }
    addTask(event);
    resetForm();
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        <span>Task to be added: </span>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Deadline: </span>
        <input
          type="date"
          onChange={(event) => setDate(event.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Task priority: </span>
        <select onChange={(event) => setPriority(event.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewTaskForm;
