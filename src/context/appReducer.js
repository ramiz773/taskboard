import { nanoid } from "nanoid";

const switchCategory = (arr, id, category) => {
  return arr.map((task) => {
    return task.id === id ? { ...task, category: category } : task;
  });
};

export const reducer = (state, { type, payload }) => {
  console.log("app reducer");
  switch (type) {
    case "NEW_TASK":
      let newTask = {
        id: nanoid(),
        category: state.categories[0],
        task: payload,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    case "TO_ONGOING":
      return {
        ...state,
        tasks: switchCategory(state.tasks, payload, "ongoing"),
      };
    case "TO_COMPLETED":
      return {
        ...state,
        tasks: switchCategory(state.tasks, payload, "completed"),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    default:
      return state;
      break;
  }
};
