const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'cloud-sql-todo',
  location: 'us-south1'
};
exports.connectorConfig = connectorConfig;

exports.listTodoRef = function listTodoRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTodo');
}

exports.listTodo = function listTodo(dc) {
  return executeQuery(listTodoRef(dc));
};

exports.createTodoRef = function createTodoRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTodo', inputVars);
}

exports.createTodo = function createTodo(dcOrVars, vars) {
  return executeMutation(createTodoRef(dcOrVars, vars));
};

exports.deleteTodoRef = function deleteTodoRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTodo', inputVars);
}

exports.deleteTodo = function deleteTodo(dcOrVars, vars) {
  return executeMutation(deleteTodoRef(dcOrVars, vars));
};

exports.completeTodoRef = function completeTodoRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CompleteTodo', inputVars);
}

exports.completeTodo = function completeTodo(dcOrVars, vars) {
  return executeMutation(completeTodoRef(dcOrVars, vars));
};
