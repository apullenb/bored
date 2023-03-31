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
        <h2>Time Well Wasted</h2>
      </div>
      <div className="content">
        <h5>Boredom & The Paradox of Choice</h5>
        <p>
        Having too many options, known as the Paradox of Choice, can cause boredom when decision fatigue and FOMO (Fear of Missing Out) kick in. Limiting your options can help overcome this, and that is the purpose of this website! Just choose a category and an activity will be randomly selected for you, making it easy to enjoy a fun new experience!
        </p>
      </div>
      <h2>Choose a Category</h2>
      <div className="box-row pb-3">
        {data.categories.map((cat, i) => (
          <Category data={cat} key={i} />
        ))}
      </div>
      <div className="box-row pb-3">
        <div>
          <h4 style={{paddingLeft:'5%'}}>Random Mini Game</h4>
          <Games games={data.games} />
        </div>
      </div>
    </div>
  );
}

export default App;
