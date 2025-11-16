// import logo from './logo.svg';
// import './App.css';
import './universal.css'
import Hero from './Components/Hero/hero';
import Cards from './Components/Cards/cards';

function App() {
  return (
      <div className="universal">
        <div className="body">
          <Hero/>
          <Cards/>
        </div>
      </div>
  );
}

export default App;
