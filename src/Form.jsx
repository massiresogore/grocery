import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            className="form-input"
          />
          <button type="submit" className="btn">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
