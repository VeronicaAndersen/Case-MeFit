import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './View//Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Goal from './Components/Goal/GoalDashboard';
import Exercise from './View/Exercise/Exercise';
import Profile from './View/Profile/Profile';
import Workout from './View/Workout/Workout';
import Program from './View/Program/Program';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/goals' element={<Goal />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/exercise" element={<Exercise/>}/>
          <Route path="/workouts" element={<Workout/>}/>
          <Route path="/programs" element={<Program/>}/>
        </Routes>

      <Login/>
    </div>
    </BrowserRouter>
  );
}

export default App;
