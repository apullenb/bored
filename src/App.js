import data from './data.json'
import './App.css'
import Games from './Games';

function App() {
  return (
    <div>
      <div className="app-header">
         <h1>Bored</h1>
      </div>
        <Games games={data.games} />
    </div>
  );
}

export default App;
