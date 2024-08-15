import "./App.css";
import InfoCard from "./Components/InfoCard/InfoCard";

function App() {
  function ourFirstFunction() {
    console.log("prvi log");
    console.log("drugi log");
    console.log("treci log");
    console.log("peti log");
    console.log("sesti log");
  }

  const drugaFunkcija = function (nekiArgument) {
    console.log("druga funkcija");
    console.log(nekiArgument);
  };

  const trecaFunkcija = () => {
    console.log("treca funkcija");
  };

  return (
    <div className="App">
      <h1>Radi li ovo ?</h1>

      <button onClick={() => drugaFunkcija("mis")}>
        Prva javascript funckija u css-u
      </button>
      <div className="ucenici">
        <InfoCard firstAndLastName={"Aldin Halilovic"} />
        <InfoCard firstAndLastName={"Ali Korac"} />
        <InfoCard firstAndLastName={"Said Mecinovic"} />
      </div>
    </div>
  );
}

export default App;
