import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: Boolean, default: false},
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
