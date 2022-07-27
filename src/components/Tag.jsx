import React from "react";

export const Tag = ({ tag }) => {
  return (
    <span className="p-2 bg-black bg-opacity-40 text-teal-100 rounded-2xl">
      {tag}
    </span>
  );
};
