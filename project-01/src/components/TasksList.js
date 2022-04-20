import styles from "./TaskList.module.css";

const TasksList = ({ events, handleClick }) => {

  return (
    <div>{
      events.map((item, index) => (
        <div className={styles.card} key={item.id}>
          <h4>
            {index + 1}. {item.title}
          </h4>
          <p>Due by: {item.date}</p>
          <p>Priority: {item.priority}</p>
          <button onClick={() => handleClick(item.id)}>Delete item</button>
        </div>
      ))}</div>
  )

};

export default TasksList;