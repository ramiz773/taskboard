import { nanoid } from "nanoid";
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "NEW_TASK":
      let newTask = {
        id: nanoid(),
        category: state.categories[0],
        task: payload,
      };
      return { ...state, tasks: [...state.tasks, newTask] };

    default:
      return state;
      break;
  }
};
