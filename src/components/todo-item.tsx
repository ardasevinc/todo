import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import type { Todo } from '@/lib/types';
import { cn } from '@/lib/utils';

type TodoItemProps = Pick<
  Todo,
  'title' | 'completed' | 'created' | 'description'
> & { htmlId: string };

const TodoItem = ({
  title,
  completed,
  created,
  description,
  htmlId,
}: TodoItemProps) => {
  return (
    <div className={cn(completed && 'line-through text-muted-foreground')}>
      <Checkbox id={htmlId} checked={completed} className='rounded-full' />
      <Label htmlFor={htmlId} id={`${htmlId}-label`} className='text-lg'>
        {title}
      </Label>
      <p
        aria-describedby={`${htmlId}-label`}
        className='text-sm text-foreground/80'
      >
        {description}
      </p>
      <p className='font-mono text-sm text-muted-foreground'>
        {created.toISOString()}
      </p>
    </div>
  );
};

export default TodoItem;
