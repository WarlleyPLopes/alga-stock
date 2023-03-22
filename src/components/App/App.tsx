import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from '../../views/HomeView';
import NotFoundView from '../../views/NotFoundView';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;