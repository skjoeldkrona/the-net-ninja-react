import "./NewTaskForm.css";
import { useState } from "react";

const NewTaskForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  return (
    <form className="new-task-form">
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
      <button>Submit</button>
      <p>Task: {title}</p>
      <p>Deadline: {date}</p>
      <p onClick={resetForm}>Reset the form</p>
    </form>
  );
};

export default NewTaskForm;
