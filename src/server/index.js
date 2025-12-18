import express from "express";
import mongoose from "mongoose";
import User from "./controllers/UserController.js";
import { login, register, getUser, updateUser } from "./controllers/UserController.js";
import { registerValidation } from "../validations/auth.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

mongoose
  .connect("mongodb://localhost:27017/project")
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

app.get("/test", (req, res) => {
  res.json({ message: "API çalışıyor" });
});


app.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Hata oluştu" });
  }
});


app.get("/users/:id", getUser);

app.put("/users/:id", updateUser);

app.post("/auth/login", login);
app.post("/auth/register", registerValidation, register);

app.listen(5000, () => {
  console.log("server ok");
});
