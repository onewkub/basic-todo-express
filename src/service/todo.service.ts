import { todo } from ".prisma/client";
import db from "../utils/db";

const getAllTodo = async () => {
  try {
    const result = await db.todo.findMany();
    return result;
  } catch (error) {
    throw error;
  }
};

const createTodo = async (data: todo) => {
  try {
    const result = await db.todo.create({
      data: data,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const updateTodo = async (id: string, data: todo) => {
  try {
    const existing = await db.todo.findFirst({ where: { todoId: id } });
    if (!existing) {
      throw Error("Not found todo following id");
    }

    await db.todo.update({
      where: { todoId: id },
      data,
    });
  } catch (error) {
    throw error;
  }
};

const markedTodo = async (id: string) => {
  try {
    const existing = await db.todo.findFirst({ where: { todoId: id } });
    if (!existing) {
      throw Error("Not found todo following id");
    }
    await db.todo.update({
      where: { todoId: id },
      data: {
        ...existing,
        marked: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (id: string) => {
  try {
    const existing = await db.todo.findFirst({ where: { todoId: id } });
    if (!existing) {
      throw Error("Not found todo following id");
    }
    await db.todo.delete({
      where: { todoId: id },
    });
  } catch (error) {
    throw error;
  }
};

const todoService = {
  getAllTodo,
  createTodo,
  updateTodo,
  markedTodo,
  deleteTodo,
};

export default todoService;
