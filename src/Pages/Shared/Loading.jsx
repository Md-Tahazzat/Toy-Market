import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-[calc(100vh-340px)] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-dotted border-8 animate-spin border-blue-500"></div>
    </div>
  );
};

export default Loading;
