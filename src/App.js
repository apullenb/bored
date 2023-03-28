
import data from './data.json'
import './App.scss';
import Games from './Games';
import Category from './Category';

function App() {
  return (
    <div>
      <div>
         <h1>Bored</h1>
      </div>
      <div>
        <Games games={data.games} />
      </div>
      <div>
        {data.categories.map((cat, i) => <Category data={cat} key={i} /> )}
      </div>
    </div>
  );
}

export default App;
