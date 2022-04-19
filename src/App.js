import './App.css';
import Article from './components/Article';
import CallToAction from './components/CallToAction';
import Catogery from './components/Catogery';
import HeaderCarosel from './components/HeaderCarosel';
import StatsDetail from './components/StatsDetail';

function App() {
  return (
    <div className="App">
      <HeaderCarosel/>
      <StatsDetail/>
      <CallToAction/>
      <Article/>
      <Catogery/>
    </div>
  );
}

export default App;
