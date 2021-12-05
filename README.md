# basic-todo-express

## Setup
```
npm install
npx prisma migrate dev
// i think it should be deploy but it's not migrate database.
```

## Start
```
npm start
```

## API Route
### [GET] /api/todos : Get All todo
```
localhost:3080/api/todos
```
### [POST] /api/todos : Create new todo
```
localhost:3080/api/todos/e1726b5b-cac8-4d6e-b676-26211f9408a8
```
Body:
```json
{
  "name": "New Todo"
}
```
### [PUT] /api/todos/:id : Update todo
```
localhost:3080/api/todos/e1726b5b-cac8-4d6e-b676-26211f9408a8
```
Body:
```json
{
  "name": "New Todo"
}
```
### [PUT] /api/todos/:id/marked : marked todo 
```
localhost:3080/api/todos/e1726b5b-cac8-4d6e-b676-26211f9408a8
```
### [DELETE] - [PUT] /api/todos/:id : Delete todo 
```
localhost:3080/api/todos/e1726b5b-cac8-4d6e-b676-26211f9408a8
```
## interface 

```typescript
export type todo = {
  todoId: string
  name: string
  marked: boolean
}
```