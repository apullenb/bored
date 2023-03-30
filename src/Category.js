import React from "react";
import styled from "styled-components";

function Category(props) {
  return (
    <Box className="card shadow">
      <div className="card-header">
        
        <h2>{props.data.title}</h2>
      </div>
      <div className="card-body">
        <h3>{props.data.subtitle}</h3>
      </div>
    </Box>
  );
}

export default Category;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`