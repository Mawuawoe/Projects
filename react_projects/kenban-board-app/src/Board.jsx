import React from "react";
import { useState } from "react";
import Column from "./components/Column";

const Board = () => {
  const [tasks, setTasks] = useState([
    { taskId: 1, task: "1Design UI", status: "todo", order: 1 },
    { taskId: 2, task: "2Build API", status: "todo", order: 2 },
    { taskId: 3, task: "3Design DataFlow", status: "todo", order: 3 },
    { taskId: 4, task: "4Build Frontend", status: "todo", order: 4 },
    { taskId: 5, task: "5Build Backend", status: "todo", order: 5 },
  ]);

  const moveTask = (
    draggedtaskId,
    newColumnTitle,
    targettaskId,
    dropPosition
  ) => {
    setTasks((prevTask) => {
      const updatedTasks = [...prevTask];
      const draggedtask = updatedTasks.find((t) => t.taskId === draggedtaskId);
      if (!draggedtask) {
        return updatedTasks;
      }

      const oldColumnTitle = draggedtask.status;

      // Same column movement
      if (oldColumnTitle === newColumnTitle) {
        //get the tasks in this column
        const columnTasks = updatedTasks
          .filter((t) => t.status === oldColumnTitle)
          .sort((a, b) => a.order - b.order);

        let draggedTaskOriginIndex;
        let toIndex;

        for (let i = 0; i < columnTasks.length; i++) {
          // get the location it was draged from
          if (columnTasks[i].taskId === draggedtaskId) {
            draggedTaskOriginIndex = i;
          }

          // get the loction we want to move to
          if (columnTasks[i].taskId === targettaskId) {
            toIndex = dropPosition === "below" ? i + 1 : i;
          }
        }

        if (
          draggedTaskOriginIndex === undefined ||
          toIndex === undefined ||
          draggedTaskOriginIndex === toIndex
        ) {
          return updatedTasks;
        }

        // Reorder column task
        const reorderColumnTasks = [...columnTasks];

        // remove the task
        reorderColumnTasks.splice(draggedTaskOriginIndex, 1);

        // adjust toIndex after reorder above
        const adjustedToIndex =
          draggedTaskOriginIndex < toIndex ? toIndex - 1 : toIndex;

        // insert the task
        reorderColumnTasks.splice(adjustedToIndex, 0, draggedtask);

        // adjust ordering
        for (let i = 0; i < reorderColumnTasks.length; i++) {
          reorderColumnTasks[i].order = i + 1;
        }

        return updatedTasks;
      }

      // Inter column movement
      if (oldColumnTitle !== newColumnTitle) {
        const columnTasks = updatedTasks
          .filter((t) => t.status === newColumnTitle)
          .sort((a, b) => a.order - b.order);

        // it is an empty column we are moving to
        if (columnTasks.length === 0) {
          draggedtask.status = newColumnTitle;
          draggedtask.order = 1;
          return updatedTasks;
        }

        // if it is not an empty column
        if (columnTasks.length !== 0) {
          let toIndex;

          if (!targettaskId) {
            toIndex = columnTasks.length + 1;
          }

          for (let i = 0; i < columnTasks.length; i++) {
            // get the loction we want to place
            if (columnTasks[i].taskId === targettaskId) {
              toIndex = dropPosition === "below" ? i + 1 : i;
            }
          }

          // we are going to insert and Reorder column task
          const reorderColumnTasks = [...columnTasks];

          // insert the task
          reorderColumnTasks.splice(toIndex, 0, draggedtask);

          // adjust ordering
          for (let i = 0; i < reorderColumnTasks.length; i++) {
            reorderColumnTasks[i].order = i + 1;
          }

          draggedtask.status = newColumnTitle;
          return updatedTasks;
        }
      }
    });
  };

  return (
    <div className="bg-[#f7f9fc] flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Simple Kanban Board</h1>
      <div className="flex flex-col sm:flex-row sm:justify-around max-w-[1200px] gap-6 w-full p-6">
        <Column tasks={tasks} title="todo" onMovetask={moveTask} />
        <Column tasks={tasks} title="in progress" onMovetask={moveTask} />
        <Column tasks={tasks} title="done" onMovetask={moveTask} />
      </div>
    </div>
  );
};

export default Board;
