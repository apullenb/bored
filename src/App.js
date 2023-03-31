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
      <div className="box-row">
        {data.categories.map((cat, i) => (
          <Category data={cat} key={i} />
        ))}
      </div>
      <div className="box-row">
        <div className="box">
          <Games games={data.games} />
        </div>
      </div>
    </div>
  );
}

export default App;
