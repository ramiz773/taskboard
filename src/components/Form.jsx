import { useContext, useState } from "react";
import { AppContext } from "../context/AppContextWrapper";
function Form() {
  const { state, dispatch } = useContext(AppContext);
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = () => {
    if (taskInput === "") return;
    dispatch({ type: "NEW_TASK", payload: taskInput });
    setTaskInput("");
  };

  return (
    <div id="taskForm">
      <h3>Add New Task</h3>
      <div className="formField">
        <input
          type="text"
          className="taskInput"
          name="task"
          required
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="taskSubmit" onClick={handleSubmit}>
          submit Task
        </button>
      </div>
    </div>
  );
}

export default Form;
