import './App.css';
import Login from "./pages/Login/Login";
import Signup from './pages/Signup/Signup';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}/>
          <Route path='/Sign-up' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
