import React from "react";

const Task = ({
  task,
  onDragEnterTask,
  onDragOverTask,
  isHovered,
  dropPosition,
}) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.taskId);
  };

  const handleDragEnter = () => {
    onDragEnterTask(task.taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOverTask(task.taskId, e);
  };

  const handleDragLeave = () => {
    onDragEnterTask(null);
  };
  return (
    <>
      {isHovered && dropPosition === "above" && (
        <div className="h-1 mb-2 rounded bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      )}
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className="bg-white text-[#333] p-4 mb-3 rounded-lg cursor-grab active:cursor-grabbing shadow-[0_2px_4px_rgba(0,0,0,0.2)] active:shadow-[0_4px_8px_rgba(0,0,0,0.2)] active:scale-105 transition-[transform,shadow] duration-200 ease"
      >
        {task.task}
      </div>

      {isHovered && dropPosition === "below" && (
        <div className="h-1 mb-2 rounded bg-gradient-to-r from-red-500 to-green-500"></div>
      )}
    </>
  );
};

export default Task;
