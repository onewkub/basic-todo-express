# basic-todo-express

## Setup
```
npm install
```

## Start
```
npm start
```

## API Route
- [GET] /api/todos : Get All todo

- [POST] /api/todos : Create new todos

- [PUT] /api/todos/:id : Update todo ex. __localhost:3080/api/todos/e1726b5b-cac8-4d6e-b676-26211f9408a8__

- [PUT] /api/todos/:id/marked : marked todo ex. __localhost:3080/api/todos/e1726b5b-cac8-4d6e-b676-26211f9408a8/marked__

- [DELETE] - [PUT] /api/todos/:id : Delete todo ex. __localhost:3080/api/todos/e1726b5b-cac8-4d6e-b676-26211f9408a8__

## interface 

```typescript
export type todo = {
  todoId: string
  name: string
  marked: boolean
}
```