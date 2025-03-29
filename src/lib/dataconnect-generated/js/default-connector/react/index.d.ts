import { CreateTodoData, CreateTodoVariables, DeleteTodoData, DeleteTodoVariables, CompleteTodoData, CompleteTodoVariables, ListTodoData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateTodo(options?: useDataConnectMutationOptions<CreateTodoData, FirebaseError, CreateTodoVariables>): UseDataConnectMutationResult<CreateTodoData, CreateTodoVariables>;
export function useCreateTodo(dc: DataConnect, options?: useDataConnectMutationOptions<CreateTodoData, FirebaseError, CreateTodoVariables>): UseDataConnectMutationResult<CreateTodoData, CreateTodoVariables>;

export function useDeleteTodo(options?: useDataConnectMutationOptions<DeleteTodoData, FirebaseError, DeleteTodoVariables>): UseDataConnectMutationResult<DeleteTodoData, DeleteTodoVariables>;
export function useDeleteTodo(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteTodoData, FirebaseError, DeleteTodoVariables>): UseDataConnectMutationResult<DeleteTodoData, DeleteTodoVariables>;

export function useCompleteTodo(options?: useDataConnectMutationOptions<CompleteTodoData, FirebaseError, CompleteTodoVariables>): UseDataConnectMutationResult<CompleteTodoData, CompleteTodoVariables>;
export function useCompleteTodo(dc: DataConnect, options?: useDataConnectMutationOptions<CompleteTodoData, FirebaseError, CompleteTodoVariables>): UseDataConnectMutationResult<CompleteTodoData, CompleteTodoVariables>;

export function useListTodo(options?: useDataConnectQueryOptions<ListTodoData>): UseDataConnectQueryResult<ListTodoData, undefined>;
export function useListTodo(dc: DataConnect, options?: useDataConnectQueryOptions<ListTodoData>): UseDataConnectQueryResult<ListTodoData, undefined>;
