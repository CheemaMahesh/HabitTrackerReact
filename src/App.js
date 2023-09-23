import './App.css';
import Navbar from './Components/Navbar';
import HabitContext from './HabitContext';

function App() {
  return (
    <div className="App">
     <HabitContext>
     <Navbar/>
     </HabitContext>
    </div>
  );
}

export default App;
