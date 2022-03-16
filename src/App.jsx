import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ActionItem from "./components/ActionItem";

function App() {
  return (
    <div className="App">
      <h1 id="title">ToDo List</h1>
      <div id="add">
        <form>
          <input type="text" />
          <button className="btn btn-primary mx-4" type="submit">
            Add
          </button>
        </form>
      </div>
      <div id="list">
        <ActionItem />
        <ActionItem />
        <ActionItem />
        <ActionItem />
      </div>
    </div>
  );
}

export default App;
