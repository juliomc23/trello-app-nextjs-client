import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../interfaces/Task";

const initialState: Task = {
  data: [
    {
      _id: "",
      title: "",
      description: "",
      employees: [],
      initDate: "",
      endDate: "",
      board: "",
      state: "Todo" || "In progress" || "Done",
      tags: [],
    },
  ],
};

type TasksList = Task[];

const initialDataState: TasksList = [];

export const tasksSlice = createSlice({
  name: "tasksList",
  initialState: initialDataState,
  reducers: {
    addTask(state: TasksList, action: PayloadAction<Task>) {
      state.push(action.payload);
    },
  },
});

export const TasksActions = tasksSlice.actions;

export default tasksSlice;
