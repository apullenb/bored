import data from "./data.json";
import "./App.css";
import Games from "./Games";
import Category from "./Category";

function App() {
  //  "https://www.boredapi.com/api/",
  return (
    <div className="main">
      <div className="header pb-3">
        <h1>Productively Bored</h1>
        <h2>Make Your Time Well Wasted</h2>
      </div>
      <div className="box-row pb-3">
        {data.categories.map((cat, i) => (
          <Category data={cat} key={i} />
        ))}
      </div>
      <div className="box-row pb-3">
        <div>
          <h4 style={{paddingLeft:'5%'}}>Try the Dumb Game of the Day!</h4>
          <Games games={data.games} />
        </div>
      </div>
    </div>
  );
}

export default App;
