import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './View//Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Goal from './Components/Goal/GoalDashboard';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/goals' element={<Goal />} />
          <Route
            path="/profile"
            
          />
        </Routes>

      <Login/>
    </div>
    </BrowserRouter>
  );
}

export default App;
