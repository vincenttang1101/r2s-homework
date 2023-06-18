import "./App.css";
import FormInput from "./components/FormInput";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: "e6f7ff", color: "rgb(8, 126, 164)" }}
      >
        <Table />
        <FormInput />
      </header>
    </div>
  );
}

export default App;
