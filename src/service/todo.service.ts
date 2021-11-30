import mockData, { todoModel } from "../mock.data";

let todoList = mockData;

const getAllTodo = () => {
  return todoList;
};

const createTodo = (data: todoModel) => {
  const result = {
    id: todoList.length+1,
    title: data.title,
    marked: false,
  };
  todoList.push(result);

  return result
};

const updateTodo = (id: number, data: string) => {
  const existing = todoList.some((i) => i.id === id);
  if (!existing) {
    throw Error("Not found todo following id");
  }

  todoList = todoList.map((i) => {
    if (i.id === id) return { ...i, title: data };
    return i;
  });
};

const markedTodo = (id: number) => {
  const existing = todoList.some((i) => i.id === id);
  if (!existing) {
    throw Error("Not found todo following id");
  }

  todoList = todoList.map((i) => {
    if (i.id === id) return { ...i, marked: true };
    return i;
  });
};

const deleteTodo = (id: number) => {
  todoList = todoList.filter((i) => i.id !== id);
};

const todoService = {
  getAllTodo,
  createTodo,
  updateTodo,
  markedTodo,
  deleteTodo,
};

export default todoService;
