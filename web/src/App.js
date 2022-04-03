import "./css/App.css";
import CustomButton from "./components/CustonButton";
import PlantShowcase from "./components/PlantShowcase";

function App() {
  return (
    <div className="App">
      <div className="searchAndData">
        <div className="searchBar">
          <input
            type="text"
            name="searchByNameInput"
            placeholder="Søg på plantenavn eller art..."
          ></input>
          <CustomButton title="Søg med navn" width="200px"></CustomButton>
          <CustomButton
            title="Søg med filtre"
            width="256px"
            margin="0 0 0 30px"
          ></CustomButton>
        </div>
        <div className="dataContainer"></div>
      </div>
      <PlantShowcase />
    </div>
  );
}

export default App;
