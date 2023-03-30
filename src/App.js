import data from './data.json'
import './App.css';
import Games from './Games';
import Category from './Category';

function App() {
  return (
    <div className='main'>
      <div className='header mb-5'>
         <h1>BORED</h1>
      </div>
      <div className='section'>
        <Games games={data.games} />
      </div>
      <div className='section'>
        {data.categories.map((cat, i) => <div className='column'> <Category data={cat} key={i} /> </div> )}
      </div>
    </div>
  );
}

export default App;
