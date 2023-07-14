import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';


const NumberGame = () => {
    const [round, setRound] = useState(1);
    const [number, setNumber] = useState(null);
    const [tableData, setTableData] = useState(Array(10).fill(null));
    const [selectedRow, setSelectedRow] = useState(null);
    const [message, setMessage] = useState('');
  
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 1000) + 1;
    };
  
    const handleNextRound = () => {
      const newNumber = generateRandomNumber();
      setNumber(newNumber);
  
      if (selectedRow !== null) {
        const newData = [...tableData];
        newData[selectedRow] = newNumber;
        setTableData(newData);
        setSelectedRow(null);
  
        if (!checkPlacement(newData)) {
          setMessage('Game over! You lose. Try again!');
          return;
        }
      }
  
      if (round === 20) {
        setMessage('Congratulations! You win!');
      } else {
        setRound(round + 1);
      }
    };
  
    const checkPlacement = (data) => {
      for (let i = 1; i < data.length; i++) {
        if (data[i] !== null && data[i] < data[i - 1]) {
          return false;
        }
      }
      return true;
    };
  
    const handleCellClick = (rowIndex) => {
      setSelectedRow(rowIndex);
    };
  
    return (
      <Container>
        <NumberDisplay>{number}</NumberDisplay>
        <Table>
          <thead>
            <tr>
              <TableHeader>Number</TableHeader>
            </tr>
          </thead>
          <tbody>
            {tableData.map((value, index) => (
              <tr key={index}>
                <TableCell
                  onClick={() => handleCellClick(index)}
                  isHighlighted={selectedRow === index}
                >
                  {value}
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
        <Message>{message}</Message>
        {message === '' && (
          <button onClick={handleNextRound}>Next Round ({round}/20)</button>
        )}
      </Container>
    );
  };

export default NumberGame;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 300px;
  text-align: center;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  background-color: ${(props) => (props.isHighlighted ? '#f2f2f2' : 'white')};

  &:hover {
    background-color: #f2f2f2;
  }
`;

const NumberDisplay = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;
