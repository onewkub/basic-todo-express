import { Router } from "express";
import todoController from "../controllers/todo.controller";

const router = Router();

router.get("/hello-world", (req, res) => {
  res.send("Hello World");
});

router.get("/todos", todoController.getAllTodo);

router.post("/todos", todoController.createTodo);

router.put("/todos/:id", todoController.updateTodo);

router.put("/todos/:id/marked", todoController.markTodo);

router.delete("/todos/:id", todoController.deleteTodo);

export default router;
