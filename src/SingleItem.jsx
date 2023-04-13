import React, { useState } from "react";

const SingleItem = ({ id, completed, name, removeItem, editItem }) => {
  const [isChecked, setIschecked] = useState(completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          editItem(id);
          setIschecked(!isChecked);
        }}
      />
      <p style={{ textDecoration: isChecked && "line-through" }}>{name}</p>
      <button
        className="btn remove-btn"
        onClick={() => removeItem(id)}
        type="button"
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
