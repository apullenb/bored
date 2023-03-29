import React from "react";

function Category(props) {
  return (
    <div className="card shadow">
      <div className="card-header">
        <h3>{props.data.name}</h3>
      </div>
      <div className="card-body">
        <p>words words words</p>
      </div>
      <div className="card-footer">
        <button>Click Me</button>
      </div>
    </div>
  );
}

export default Category;
