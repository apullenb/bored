import React from "react";
import styled from "styled-components";
import activities from './activities.json'

function Category(props) {
  return (
    <Box className="box box-2">
      <div className="box-header">
        <h3>{props.data.title}</h3>
      </div>
      <div className="box-body">
       <p>{props.data.subtitle}</p>
       <button></button>
      </div>
    </Box>
  );
}

export default Category;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`