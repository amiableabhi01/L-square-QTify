import "./App.css";
import Apicall from "./components/Api/Apicall";
import HeroOne from "./components/Hero/HeroOne";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroOne/>
      <Apicall/>
    </div>
  );
}

export default App;
