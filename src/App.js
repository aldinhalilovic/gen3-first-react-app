import "./App.css";
import ArticleCard from "./Components/ArticleCard/ArticleCard";
import InfoCard from "./Components/InfoCard/InfoCard";
import ArticleCardsContainer from "./Containers/ArticleCardsContainer/ArticleCardsContainer";

function App() {
  // function ourFirstFunction() {
  //   console.log("prvi log");
  //   console.log("drugi log");
  //   console.log("treci log");
  //   console.log("peti log");
  //   console.log("sesti log");
  // }

  // const drugaFunkcija = function (nekiArgument) {
  //   console.log("druga funkcija");
  //   console.log(nekiArgument);
  // };

  // const trecaFunkcija = () => {
  //   console.log("treca funkcija");
  // };

  const saidovProfil = {
    ime: "Said",
    prezime: "Mecinovic",
    godinaRodjenja: 2006,
    vozackaDozvola: true,
  };

  return (
    <div>
      {/* <button onClick={() => drugaFunkcija("mis")}>
        Prva javascript funckija u css-u
      </button> */}
      {/* <div className="ucenici">
        <InfoCard
          firstAndLastName={"Aldin Halilovic"}
          age={21}
          country={"Serbia"}
        />
        <InfoCard firstAndLastName={"Ali Korac"} age={13} country={"Italy"} />
        <InfoCard
          firstAndLastName={"Said Mecinovic"}
          age={18}
          country={"Monaco"}
          nekaPetaStvar={true}
        />
        <InfoCard profil={saidovProfil} />
      </div> */}
      <ArticleCardsContainer />
    </div>
  );
}

export default App;
