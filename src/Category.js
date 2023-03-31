import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import data from './activities.json'
import Activity from "./Activity";

function Category(props) {
  const [option, setOption] = useState('')
  const keyword = props.data.type

  const getActivities = () => {
    const filter = data.activities.filter(a => a.type === keyword && a.link !== '')
    const idx = Math.round(Math.random() * filter.length)
    console.log(idx)
    console.log(filter[idx])
    setOption(filter[idx])
  }

  return (
    <Box className="box box-2">
      <div className="box-header">
        <h3>{props.data.title}</h3>
      </div>
      <div className="box-content pb-2">
       <p>{props.data.subtitle}</p>
       <button onClick={getActivities}>Find Activities</button>
      </div>
      {option && <Activity act={option} />
      }
    </Box>
  );
}

export default Category;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`