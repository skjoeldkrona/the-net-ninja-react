import "./App.css";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: "Mario's birthday bash", id: 1 },
    { title: "Ewa's live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevItem) => {
      return prevItem.filter((item) => {
        return id !== item.id;
      })
    });
  };

  return (
    <div className="App">
      {events.map((item, index) => (
        <div key={item.id}>
          <h2>
            {index + 1}. {item.title}
          </h2>
          <button onClick={() => handleClick(item.id)}>Delete item</button>
        </div>
      ))}
    </div>
  );
}

export default App;
