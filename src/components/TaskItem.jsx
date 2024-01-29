import React from "react";

function TaskItem({ item, categories, dispatch }) {
  const { category, id, task } = item;

  const handleMove = (id, category) => {
    switch (true) {
      case category === categories[0]:
        dispatch({ type: "TO_ONGOING", payload: id });
        break;
      case category === categories[1]:
        dispatch({ type: "TO_COMPLETED", payload: id });
        break;
      case category === categories[2]:
        dispatch({ type: "DELETE_TASK", payload: id });
        break;
    }
  };
  return (
    <div className="taskItem">
      <p>{task}</p>
      <button
        className={`taskButton ${category === "completed" ? "delete" : "move"}`}
        onClick={() => {
          handleMove(id, category);
        }}
      >
        {category === "completed" ? "Delete" : "Move"}
      </button>
    </div>
  );
}

export default TaskItem;
