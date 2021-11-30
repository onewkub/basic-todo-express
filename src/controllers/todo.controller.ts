import { Request, Response } from "express";
import { todoModel } from "../mock.data";
import todoService from "../service/todo.service";

const getAllTodo = (req: Request, res: Response) => {
  const result = todoService.getAllTodo();
  res.send(result);
};

const createTodo = (req: Request, res: Response) => {
  const payload = req.body as todoModel;

  const result = todoService.createTodo(payload);
  res.send(result);
};

const updateTodo = (req: Request, res: Response) => {
  const payload = req.body as todoModel;
  const id = Number(req.params.id);
  const result = todoService.updateTodo(id, payload.title);
  res.send("OK");
};

const markTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  todoService.markedTodo(id);
  res.send("OK");
};

const deleteTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  todoService.deleteTodo(id);
  res.send("OK");
};

const todoController = {
  getAllTodo,
  createTodo,
  updateTodo,
  markTodo,
  deleteTodo
};

export default todoController;
