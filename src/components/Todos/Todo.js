import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <li
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}>
      <RiTodoFill className={styles.todoIcon} />
      <p className={styles.todoText}>{todo.text}</p>
      <RiDeleteBin2Line
        onClick={() => {
          deleteTodo(todo.id);
        }}
        className={styles.deleteIcon}
      />
      <FaCheck
        onClick={() => {
          toggleTodo(todo.id);
        }}
        className={styles.checkIcon}
      />
    </li>
  );
}
