import "./App.css";
import { useState } from "react";
import Title from "./components/Title.js"

const App = () => {
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

  return (
    <div className="App">
      <Title />
      {showEvents &&
        events.map((item, index) => (
          <div key={item.id}>
            <h4>
              {index + 1}. {item.title}
            </h4>
            <button onClick={() => handleClick(item.id)}>Delete item</button>
          </div>
        ))}
        <hr />
        {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}
    </div>
  );
}

export default App;
