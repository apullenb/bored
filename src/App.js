import data from './data.json'
import './App.css'
import Games from './Games';
import Category from './Category';

function App() {
  return (
    <div>
      <div className="app-header">
         <h1>Bored</h1>
      </div>
      <div>
        <Games games={data.games} />
      </div>
      <div className='categories'>
        {data.categories.map((cat, i) => <Category data={cat} key={i} /> )}
      </div>
    </div>
  );
}

export default App;
