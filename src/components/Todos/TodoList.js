import Todo from './Todo';
import styles from './TodoList.module.css';
export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empy</h2>}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
}
