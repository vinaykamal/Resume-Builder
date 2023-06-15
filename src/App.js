import "./App.css";
import Section from "./components/Section";


function App() {
  return (
    <div className="App">
      <h4>Select Your Sections</h4>
      <Section/>
      <button className="save">Save and Next</button>
    </div>
  );
}

export default App;
