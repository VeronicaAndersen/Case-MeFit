import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './View//Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Goal from './View/Goal/Goal';
import Exercise from './View/Exercise/Exercise';
import Profile from './View/Profile/Profile';
import Workout from './View/Workout/Workout';
import Program from './View/Program/Program';
import SetGoal from './View/SetGoal/SetGoal';
import Dashboard from './View/Dashboard/Dashboard';
import AchievedGoal from './View/AchievedGoal/AchievedGoal';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/goals' element={<Goal />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/exercise" element={<Exercise/>}/>
          <Route path="/workouts" element={<Workout/>}/>
          <Route path="/programs" element={<Program/>}/>
          <Route path='/setgoals' element={<SetGoal />} />
          <Route path='/achievedgoals' element={<AchievedGoal />} />
        </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
