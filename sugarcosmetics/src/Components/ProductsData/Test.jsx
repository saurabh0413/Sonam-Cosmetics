import React from "react";

const Test = ({ value, onChange, category }) => {
  return (
    <div>
      <input
        type="checkbox"
        value={value}
        defaultChecked={category.includes(value)}
        onChange={onChange}
      />
      <label>{value}</label>
    </div>
  );
};

export default Test;
