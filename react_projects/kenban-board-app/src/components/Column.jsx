import React, { useState } from "react";
import Task from "./Task";

const Column = ({ tasks, title, onMovetask }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const [dragOverTaskId, setDragOverTaskId] = useState(null);
  const [dropPosition, setDropPosition] = useState("above");

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = Number(e.dataTransfer.getData("taskId"));
    onMovetask(taskId, title, targetId, dropPosition);
    setIsDragOver(false);
    setTargetId(null);
    setDragOverTaskId(null);
  };

  const handleDragEnterTask = (id) => {
    setTargetId(id);
    setDragOverTaskId(id);
  };

  const handleDragOverTask = (id, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;

    if (e.clientY > midpoint) {
      setDropPosition("below");
    } else {
      setDropPosition("above");
    }

    setTargetId(id);
    setDragOverTaskId(id);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`w-full text-center p-4 ${
        isDragOver ? "bg-[#d1d3d8]" : "bg-[#e3e4e8]"
      } w-[30%] min-h-[400px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg`}
    >
      <h2 className="text-xl font-semibold text-[#555] mb-4">{title}</h2>
      {tasks
        .filter((task) => task.status === title)
        .sort((a, b) => a.order - b.order)
        .map((task) => (
          <Task
            key={task.taskId}
            task={task}
            onDragEnterTask={(id) => handleDragEnterTask(id)}
            onDragOverTask={handleDragOverTask}
            isHovered={dragOverTaskId === task.taskId}
            dropPosition={dropPosition}
          />
        ))}
    </div>
  );
};

export default Column;
