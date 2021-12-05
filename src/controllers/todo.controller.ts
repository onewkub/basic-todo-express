import { todo } from ".prisma/client";
import { Request, Response } from "express";
import todoService from "../service/todo.service";

const getAllTodo = async (_: Request, res: Response) => {
  try {
    const result = await todoService.getAllTodo();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTodo = async (req: Request, res: Response) => {
  try {
    const payload = req.body as todo;

    const result = await todoService.createTodo(payload);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const payload = req.body as todo;
    const id = req.params.id;
    const result = await todoService.updateTodo(id, payload);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const markTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await todoService.markedTodo(id);
    res.send({
      status: 200,
      message: `todo id:${id} has been already marked.`,
    });
  } catch (e) {
    const error = e as Error;
    res.status(400).send({ status: 400, message: error.message });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await todoService.deleteTodo(id);
    res.send({
      status: 200,
      message: `todo id:${id} has been already removed.`,
    });
  } catch (e) {
    const error = e as Error;
    res.status(400).send({ status: 400, message: error.message });
  }
};

const todoController = {
  getAllTodo,
  createTodo,
  updateTodo,
  markTodo,
  deleteTodo,
};

export default todoController;
