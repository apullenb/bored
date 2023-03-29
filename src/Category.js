import React from "react";

function Category(props) {
  return (
    <div className="card shadow">
      <div className="card-header">
        <h2>{props.data.name}</h2>
      </div>
    </div>
  );
}

export default Category;
