import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'cloud-sql-todo',
  location: 'us-south1'
};

export function listTodoRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTodo');
}

export function listTodo(dc) {
  return executeQuery(listTodoRef(dc));
}

export function createTodoRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTodo', inputVars);
}

export function createTodo(dcOrVars, vars) {
  return executeMutation(createTodoRef(dcOrVars, vars));
}

export function deleteTodoRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTodo', inputVars);
}

export function deleteTodo(dcOrVars, vars) {
  return executeMutation(deleteTodoRef(dcOrVars, vars));
}

export function completeTodoRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CompleteTodo', inputVars);
}

export function completeTodo(dcOrVars, vars) {
  return executeMutation(completeTodoRef(dcOrVars, vars));
}

