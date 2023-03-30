import data from './data.json'
import './App.css';
import Games from './Games';
import Category from './Category';

function App() {
  return (
    <div className='main'>
      <div className='header'>
         <h1>Welcome to Bored</h1>
      </div>
      <div className=''>
        <Games games={data.games} />
      </div>
      <div className=''>
        {data.categories.map((cat, i) => <div className='card shadow m-4'> <Category data={cat} key={i} /> </div> )}
      </div>
    </div>
  );
}

export default App;
