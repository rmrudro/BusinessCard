import logo from './logo.svg';
import Info from './Components/Info'
import About from './Components/About'
import Interest from './Components/Interests'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='main-content'>
        <Info className="info"></Info>
        <About ></About>
        <Interest></Interest>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
