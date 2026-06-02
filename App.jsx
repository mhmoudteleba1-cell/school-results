import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result/:seat_no" element={<Result />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t py-6 mt-12 text-center text-sm text-slate-500">
          <p>جميع الحقوق محفوظة &copy; وزارة التربية والتعليم 2026</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
