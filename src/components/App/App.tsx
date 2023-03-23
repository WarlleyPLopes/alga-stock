import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from '../../views/HomeView';
import LoginView from '../../views/LoginView';
import NotFoundView from '../../views/NotFoundView';
import ProfileView from '../../views/ProfileView';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;