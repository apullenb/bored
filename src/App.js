import data from './data.json'
import './App.css';
import Games from './Games';
import Category from './Category';

function App() {
     //  "https://www.boredapi.com/api/",
  return (
    <div className='main'>
      <div className='header mb-5'>
         <h1>BORED</h1>
      </div>
      <div className='section'>
        <Games games={data.games} />
      </div>
      <div className='section'>
        {data.categories.map((cat, i) => <Category data={cat} key={i} />  )}
      </div>
    </div>
  );
}

export default App;
