import { useContext } from "react";
import TaskColumn from "./TaskColumn";
import { AppContext } from "../context/AppContextWrapper";
function Board() {
  const { state } = useContext(AppContext);
  return (
    <div className="taskBoard">
      {state.categories?.map((category) => (
        <TaskColumn category={category} key={category} />
      ))}
    </div>
  );
}

export default Board;
