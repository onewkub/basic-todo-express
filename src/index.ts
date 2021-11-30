import express from "express";
import router from "./router";

const app = express();
app.use(express.urlencoded())
app.use(express.json())

app.use("/api", router);


app.use("/", (req, res) => {
  res.send("Hello world this is my express app.");
});

app.listen(3000, () => {
  console.log("this app running on https://localhost:3000");
});
