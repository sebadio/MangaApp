import React from "react";

export const Tag = ({ tag }) => {
  return (
    <span className="py-1 px-3 bg-black bg-opacity-40 text-teal-100 rounded-2xl select-none">
      {tag}
    </span>
  );
};
