import "./App.css";
import Article from "./components/Article";
import CallToAction from "./components/CallToAction";
import Catogery from "./components/Catogery";
import HeaderCarosel from "./components/HeaderCarosel";
import Panel_8 from "./components/Panel_8";
import Panel_9 from "./components/Panel_9";
import StatsDetail from "./components/StatsDetail";

function App() {
  return (
    <div className="App">
      <HeaderCarosel />
      <StatsDetail />
      <CallToAction />
      <Article />
      {/* <Catogery /> */}
      <Panel_8 />
      <Panel_9 />
    </div>
  );
}

export default App;
