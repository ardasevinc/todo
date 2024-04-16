import { fakeTodoArray, nanoid } from '@/lib/utils';
import TodoItem from '@/components/todo-item';
import { useId } from 'react';

const TodoList = () => {
  const todoBaseId = useId();
  const fakeTodoData = fakeTodoArray(20);
  const todos = fakeTodoData.map(
    ({ title, completed, created, description, hidden }, index) => {
      if (hidden) {
        return null;
      }

      const baseId = `${todoBaseId}-${index}`;

      return (
        <li key={nanoid()}>
          <TodoItem
            title={title}
            completed={completed}
            created={created}
            description={description}
            htmlId={baseId}
          />
        </li>
      );
    },
  );

  return (
    <section>
      <ul>{todos}</ul>
    </section>
  );
};

export default TodoList;
