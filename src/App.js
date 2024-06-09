import './App.css';
import sisterPng from "./sister.png"

function App() {
  return (
    <div className="App">
        <img src={sisterPng} alt="sister png" />
        <h1>La gastronomie de Dakar à Paris</h1>
        <h2>Sisters-Tasty, c'est un restaurant gastronomique tenu par deux soeurs françaises d'origines sénégalaises qui vous font voyager avec les plats de leurs pays bien aimés</h2>
    </div>
  );
}

export default App;
