const TasksList = ({ events, handleClick }) => {

  return (
    <div>{
      events.map((item, index) => (
        <div key={item.id}>
          <h4>
            {index + 1}. {item.title}
          </h4>
          <button onClick={() => handleClick(item.id)}>Delete item</button>
        </div>
      ))}</div>
  )

};

export default TasksList;