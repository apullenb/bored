import React from "react";
import styled from "styled-components";

function Category(props) {
  return (
    <div className="card shadow">
      <div className="card-header">
        <h2>{props.data.title}</h2>
      </div>
      <div className="card-body">
        <h3>{props.data.subtitle}</h3>
      </div>
    </div>
  );
}

export default Category;
