import { useState, useReducer } from "react";

function addTaskFunc(taskName) {
    return {
        taskNum: Date.now(),
        taskName: taskName,
        taskCompleted: false,
    };
}

function reducer(stateTasks, action) {
        switch (action.type) {
            case "addTask": {
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

export default function Form(addTask) {
    const [stateTasks, dispatch] = useReducer(reducer, [
        {
            taskNum: 0,
            taskName: "Cook",
            taskCompleted: false,
        },
    ]);

    const [taskName, setTaskName] = useState("");

    // console.log(stateTasks);

    function addTask(e) {
        e.preventDefault();
        dispatch({ type: "addTask", payload: { taskName: taskName } });
    }

    function deleteTask() {
        dispatch({ type: "deleteTask" });
    }

    function editTask() {
        dispatch({ type: "editTask" });
    }
    //   console.log(stateTasks);
console.log(stateTasks)
    return (
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
