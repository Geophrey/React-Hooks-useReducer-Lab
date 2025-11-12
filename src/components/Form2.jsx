import { useState, useReducer } from "react";

export default function Form() {
    const ACTIONS = {
        ADD_TASK: "addTask",
    };
    const [stateTasks, dispatch] = useReducer(reducer, []);
    const [taskName, setTaskName] = useState("");

    function addTaskFunc(taskName) {
        return {
            taskNum: taskID,
            taskName: taskName,
            taskCompleted: false,
        };
    }
    console.log(stateTasks);
    function reducer(stateTasks, action) {
        switch (action.type) {
            case "addTask": {
                // taskID++
                return [...stateTasks, addTaskFunc(action.payload.taskName)];
            }

            case "deleteTask":
                console.log("deleted task");
                break;

            case "editTask":
                console.log("edited task");
                break;

            default:
                return console.log("this is default");
        }
    }

    function addTask(e) {
        console.dir(e.parentNode.target)
        e.parentNode.preventDefault();
        dispatch({ type: ACTIONS.ADD_TASK, payload: { taskName: taskName } });
        setTaskName("")
    }

    function deleteTask() {
        dispatch({ type: "deleteTask" });
    }

    function editTask() {
        dispatch({ type: "editTask" });
    }
    //   console.log(stateTasks);

    return (
        //might have to do a handle submit in form instead of onclick in button
        <form>
            <input
                className="nameOfTask"
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            ></input>
            <button className="addTask" onClick={addTask}>
                Add Task
            </button>
        </form>
    );
}
