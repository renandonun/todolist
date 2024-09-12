import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, date, status } = req.body;
  if (!title) {
    res.status(422).json({ message: "O título é obrigatório!" });
    return;
  }
  const task = {
    title,
    date,
    status,
  };

  try {
    await Task.create(task);
    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findOne({ _id: id });
    if (!task) {
      res.status(422).json({ message: "Tarefa não encontrada!" });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, date, status } = req.body;
  const task = {
    title,
    date,
    status,
  };
  try {
    const updatedTask = await Task.updateOne({ _id: id }, task);
    if (updatedTask.matchedCount === 0) {
      res.status(422).json({ message: "Tarefa não encontrada!" });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    res.status(422).json({ message: "Tarefa não encontrada!" });
    return;
  }
  try {
    await Task.deleteOne({ _id: id });
    res.status(200).json({ message: "Tarefa excluída com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
