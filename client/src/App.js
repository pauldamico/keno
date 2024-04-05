import './App.css';
import Keno from './components/Keno';
import Login from './components/login';
import { Routes, Route} from "react-router-dom";

function App() {
  const test = true
  return (
    <div className="App">
      <Routes>
      {<Route path="/login" element={<Login/>}/>}
      <Route path="/keno" element={<Keno/>}/>
      </Routes>   
    </div>
  );
}

export default App;
