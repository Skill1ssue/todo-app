# Table of Contents
- [**Overview**](#generated-typescript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListTodo*](#listtodo)
- [**Mutations**](#mutations)
  - [*CreateTodo*](#createtodo)
  - [*DeleteTodo*](#deletetodo)
  - [*CompleteTodo*](#completetodo)

# Generated TypeScript README
This README will guide you through the process of using the generated TypeScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@firebasegen/default-connector` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListTodo
You can execute the `ListTodo` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
listTodo(): QueryPromise<ListTodoData, undefined>;

listTodoRef(): QueryRef<ListTodoData, undefined>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
listTodo(dc: DataConnect): QueryPromise<ListTodoData, undefined>;

listTodoRef(dc: DataConnect): QueryRef<ListTodoData, undefined>;
```

### Variables
The `ListTodo` query has no variables.
### Return Type
Recall that executing the `ListTodo` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTodoData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface ListTodoData {
  todos: ({
    id: UUIDString;
    completed: boolean;
    createdAt: DateString;
    text: string;
  } & Todo_Key)[];
}
```
### Using `ListTodo`'s action shortcut function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTodo } from '@firebasegen/default-connector';


// Call the `listTodo()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTodo();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTodo(dataConnect);

console.log(data.todos);

// Or, you can use the `Promise` API.
listTodo().then((response) => {
  const data = response.data;
  console.log(data.todos);
});
```

### Using `ListTodo`'s `QueryRef` function

```javascript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTodoRef } from '@firebasegen/default-connector';


// Call the `listTodoRef()` function to get a reference to the query.
const ref = listTodoRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTodoRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.todos);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.todos);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateTodo
You can execute the `CreateTodo` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
createTodo(vars: CreateTodoVariables): MutationPromise<CreateTodoData, CreateTodoVariables>;

createTodoRef(vars: CreateTodoVariables): MutationRef<CreateTodoData, CreateTodoVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
createTodo(dc: DataConnect, vars: CreateTodoVariables): MutationPromise<CreateTodoData, CreateTodoVariables>;

createTodoRef(dc: DataConnect, vars: CreateTodoVariables): MutationRef<CreateTodoData, CreateTodoVariables>;
```

### Variables
The `CreateTodo` mutation requires an argument of type `CreateTodoVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface CreateTodoVariables {
  text: string;
  completed: boolean;
}
```
### Return Type
Recall that executing the `CreateTodo` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTodoData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface CreateTodoData {
  todo_insert: Todo_Key;
}
```
### Using `CreateTodo`'s action shortcut function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTodo, CreateTodoVariables } from '@firebasegen/default-connector';

// The `CreateTodo` mutation requires an argument of type `CreateTodoVariables`:
const createTodoVars: CreateTodoVariables = {
  text: ..., 
  completed: ..., 
};

// Call the `createTodo()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTodo(createTodoVars);
// Variables can be defined inline as well.
const { data } = await createTodo({ text: ..., completed: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTodo(dataConnect, createTodoVars);

console.log(data.todo_insert);

// Or, you can use the `Promise` API.
createTodo(createTodoVars).then((response) => {
  const data = response.data;
  console.log(data.todo_insert);
});
```

### Using `CreateTodo`'s `MutationRef` function

```javascript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTodoRef, CreateTodoVariables } from '@firebasegen/default-connector';

// The `CreateTodo` mutation requires an argument of type `CreateTodoVariables`:
const createTodoVars: CreateTodoVariables = {
  text: ..., 
  completed: ..., 
};

// Call the `createTodoRef()` function to get a reference to the mutation.
const ref = createTodoRef(createTodoVars);
// Variables can be defined inline as well.
const ref = createTodoRef({ text: ..., completed: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTodoRef(dataConnect, createTodoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.todo_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.todo_insert);
});
```

## DeleteTodo
You can execute the `DeleteTodo` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
deleteTodo(vars: DeleteTodoVariables): MutationPromise<DeleteTodoData, DeleteTodoVariables>;

deleteTodoRef(vars: DeleteTodoVariables): MutationRef<DeleteTodoData, DeleteTodoVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
deleteTodo(dc: DataConnect, vars: DeleteTodoVariables): MutationPromise<DeleteTodoData, DeleteTodoVariables>;

deleteTodoRef(dc: DataConnect, vars: DeleteTodoVariables): MutationRef<DeleteTodoData, DeleteTodoVariables>;
```

### Variables
The `DeleteTodo` mutation requires an argument of type `DeleteTodoVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface DeleteTodoVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteTodo` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteTodoData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface DeleteTodoData {
  todo_delete?: Todo_Key | null;
}
```
### Using `DeleteTodo`'s action shortcut function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteTodo, DeleteTodoVariables } from '@firebasegen/default-connector';

// The `DeleteTodo` mutation requires an argument of type `DeleteTodoVariables`:
const deleteTodoVars: DeleteTodoVariables = {
  id: ..., 
};

// Call the `deleteTodo()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteTodo(deleteTodoVars);
// Variables can be defined inline as well.
const { data } = await deleteTodo({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteTodo(dataConnect, deleteTodoVars);

console.log(data.todo_delete);

// Or, you can use the `Promise` API.
deleteTodo(deleteTodoVars).then((response) => {
  const data = response.data;
  console.log(data.todo_delete);
});
```

### Using `DeleteTodo`'s `MutationRef` function

```javascript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteTodoRef, DeleteTodoVariables } from '@firebasegen/default-connector';

// The `DeleteTodo` mutation requires an argument of type `DeleteTodoVariables`:
const deleteTodoVars: DeleteTodoVariables = {
  id: ..., 
};

// Call the `deleteTodoRef()` function to get a reference to the mutation.
const ref = deleteTodoRef(deleteTodoVars);
// Variables can be defined inline as well.
const ref = deleteTodoRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteTodoRef(dataConnect, deleteTodoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.todo_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.todo_delete);
});
```

## CompleteTodo
You can execute the `CompleteTodo` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
completeTodo(vars: CompleteTodoVariables): MutationPromise<CompleteTodoData, CompleteTodoVariables>;

completeTodoRef(vars: CompleteTodoVariables): MutationRef<CompleteTodoData, CompleteTodoVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
completeTodo(dc: DataConnect, vars: CompleteTodoVariables): MutationPromise<CompleteTodoData, CompleteTodoVariables>;

completeTodoRef(dc: DataConnect, vars: CompleteTodoVariables): MutationRef<CompleteTodoData, CompleteTodoVariables>;
```

### Variables
The `CompleteTodo` mutation requires an argument of type `CompleteTodoVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface CompleteTodoVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `CompleteTodo` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CompleteTodoData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface CompleteTodoData {
  todo_update?: Todo_Key | null;
}
```
### Using `CompleteTodo`'s action shortcut function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, completeTodo, CompleteTodoVariables } from '@firebasegen/default-connector';

// The `CompleteTodo` mutation requires an argument of type `CompleteTodoVariables`:
const completeTodoVars: CompleteTodoVariables = {
  id: ..., 
};

// Call the `completeTodo()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await completeTodo(completeTodoVars);
// Variables can be defined inline as well.
const { data } = await completeTodo({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await completeTodo(dataConnect, completeTodoVars);

console.log(data.todo_update);

// Or, you can use the `Promise` API.
completeTodo(completeTodoVars).then((response) => {
  const data = response.data;
  console.log(data.todo_update);
});
```

### Using `CompleteTodo`'s `MutationRef` function

```javascript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, completeTodoRef, CompleteTodoVariables } from '@firebasegen/default-connector';

// The `CompleteTodo` mutation requires an argument of type `CompleteTodoVariables`:
const completeTodoVars: CompleteTodoVariables = {
  id: ..., 
};

// Call the `completeTodoRef()` function to get a reference to the mutation.
const ref = completeTodoRef(completeTodoVars);
// Variables can be defined inline as well.
const ref = completeTodoRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = completeTodoRef(dataConnect, completeTodoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.todo_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.todo_update);
});
```

