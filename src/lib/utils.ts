import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { customAlphabet } from 'nanoid';

import { faker } from '@faker-js/faker';
import type { Todo } from '@/lib/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7,
); // 7-character random string

// generates *n* fake todos using method
export const fakeTodoArray = (n: number) => {
  const method = (): Todo => ({
    title: faker.git.commitMessage(),
    description: faker.hacker.phrase(),
    completed: faker.datatype.boolean({ probability: 0.25 }),
    created: faker.date.recent({ days: 30 }),
    hidden: faker.datatype.boolean({ probability: 0.1 }),
    id: nanoid(),
  });

  return Array.from({ length: n }, method);
};
