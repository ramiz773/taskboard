import React from "react";

function TaskItem({ task }) {
  const { category } = task;

  return (
    <div className="taskItem">
      <p>{task.task}</p>
      <button
        className={`taskButton ${category === "completed" ? "delete" : "move"}`}
      >
        {category === "completed" ? "Delete" : "Move"}
      </button>
    </div>
  );
}

export default TaskItem;
