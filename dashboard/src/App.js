import './App.css';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import Analysis from './components/Analysis';
import Visitors from './components/Visitors';
function App() {
  return (
    <div id='Mainpage'>
      <Menu/>
      <div id='rightside'>
        <div id='top'>
          <Reviews/>
          <Rating/>
          <Analysis/>
        </div>
        <div id='visitorspanel'>
          <Visitors id='visitor'/>
          <div id='graph'/>
        </div>
      </div>
    </div>
  );
}

export default App;
