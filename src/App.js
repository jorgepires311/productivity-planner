import Planner from "./components/Planner";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container" />
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <Quotes />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <Planner />
        </div>
      </div>
    </div>
  );
}

export default App;
