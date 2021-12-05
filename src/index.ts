import express from "express";
import cors from "cors";
import router from "./router";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.use("/", (_, res) => {
  res.send("Hello world this is my express app.");
});

app.listen(3080, () => {
  console.log("this app running on http://localhost:3080");
});
