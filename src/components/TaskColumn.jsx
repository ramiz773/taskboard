import React from "react";
import TaskItem from "./TaskItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContextWrapper";

function TaskColumn({ category }) {
  const { state, dispatch } = useContext(AppContext);
  const data = state?.tasks?.filter((task) => task?.category === category);

  return (
    <div className="taskColumn">
      <div className="columnHeader">
        <h3>{category}</h3>
      </div>
      <div className="taskItems">
        {data?.map((task) => {
          return (
            <TaskItem
              item={task}
              key={task.id}
              dispatch={dispatch}
              categories={state.categories}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskColumn;
