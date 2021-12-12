
import './App.css';
import Dashboard from './pages/dashboard';
import Landing from './pages/landingpage';
import Reset from './pages/reset';
import SignIn from './pages/signIn';
import {

  Routes,
  Route,
} from "react-router-dom"


function App() {
  return <div className="App">

    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="dashboard" element={<Dashboard />} />


    </Routes>
  </div>
}

export default App;
