import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface CompleteTodoData {
  todo_update?: Todo_Key | null;
}

export interface CompleteTodoVariables {
  id: UUIDString;
}

export interface CreateTodoData {
  todo_insert: Todo_Key;
}

export interface CreateTodoVariables {
  text: string;
  completed: boolean;
}

export interface DeleteTodoData {
  todo_delete?: Todo_Key | null;
}

export interface DeleteTodoVariables {
  id: UUIDString;
}

export interface ListTodoData {
  todos: ({
    id: UUIDString;
    completed: boolean;
    createdAt: DateString;
    text: string;
  } & Todo_Key)[];
}

export interface Todo_Key {
  id: UUIDString;
  __typename?: 'Todo_Key';
}

/* Allow users to create refs without passing in DataConnect */
export function createTodoRef(vars: CreateTodoVariables): MutationRef<CreateTodoData, CreateTodoVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createTodoRef(dc: DataConnect, vars: CreateTodoVariables): MutationRef<CreateTodoData, CreateTodoVariables>;

export function createTodo(vars: CreateTodoVariables): MutationPromise<CreateTodoData, CreateTodoVariables>;
export function createTodo(dc: DataConnect, vars: CreateTodoVariables): MutationPromise<CreateTodoData, CreateTodoVariables>;

/* Allow users to create refs without passing in DataConnect */
export function deleteTodoRef(vars: DeleteTodoVariables): MutationRef<DeleteTodoData, DeleteTodoVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteTodoRef(dc: DataConnect, vars: DeleteTodoVariables): MutationRef<DeleteTodoData, DeleteTodoVariables>;

export function deleteTodo(vars: DeleteTodoVariables): MutationPromise<DeleteTodoData, DeleteTodoVariables>;
export function deleteTodo(dc: DataConnect, vars: DeleteTodoVariables): MutationPromise<DeleteTodoData, DeleteTodoVariables>;

/* Allow users to create refs without passing in DataConnect */
export function completeTodoRef(vars: CompleteTodoVariables): MutationRef<CompleteTodoData, CompleteTodoVariables>;
/* Allow users to pass in custom DataConnect instances */
export function completeTodoRef(dc: DataConnect, vars: CompleteTodoVariables): MutationRef<CompleteTodoData, CompleteTodoVariables>;

export function completeTodo(vars: CompleteTodoVariables): MutationPromise<CompleteTodoData, CompleteTodoVariables>;
export function completeTodo(dc: DataConnect, vars: CompleteTodoVariables): MutationPromise<CompleteTodoData, CompleteTodoVariables>;

/* Allow users to create refs without passing in DataConnect */
export function listTodoRef(): QueryRef<ListTodoData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function listTodoRef(dc: DataConnect): QueryRef<ListTodoData, undefined>;

export function listTodo(): QueryPromise<ListTodoData, undefined>;
export function listTodo(dc: DataConnect): QueryPromise<ListTodoData, undefined>;

