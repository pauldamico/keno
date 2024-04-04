import './App.css';
import Keno from './components/Keno';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const test = true
  return (
    <Router>
    <div className="App">
      <Routes>
      {<Route path="/" element={<Login/>}/>}
      <Route path="/keno" element={<Keno/>}/>
      </Routes>   
    </div>
    </Router>
  );
}

export default App;
