import React from "react";

function Task({text}:{text:string}) {
  return <div className={`px-6 py-2 text-sm bg-bg_light text-secondary rounded-lg`}>{text}</div>;
}

export default Task;
