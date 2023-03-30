import data from "./data.json";
import "./App.css";
import Games from "./Games";
import Category from "./Category";

function App() {
  //  "https://www.boredapi.com/api/",
  return (
    <div className="main">
      <div className="header mb-5">
        <h1>Productively Bored</h1>
        <h2>Make Your Time Well Wasted</h2>
      </div>
      <div className="row">
        <div className="box box-1 shadow">
          <h3>Dumb Joke of the Day</h3>
        </div>
        <div className="box box-2 shadow">
          <Games games={data.games} />
        </div>
      
      </div>
      <div className="row">
        {data.categories.map((cat, i) => (
          <Category data={cat} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
