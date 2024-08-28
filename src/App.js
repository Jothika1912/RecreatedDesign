
import './App.css';
import Nav from './components/Nav'
import First from './components/First';
import Second from './components/Second';


function App() {
  return (
    <div style={{
      backgroundImage: `url('/background.jpg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     
      width: '100%',
    }} >
      <Nav/>
      <First/>
      <Second/>
      


   
    </div>
  );
}

export default App;
