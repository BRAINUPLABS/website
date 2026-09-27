import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Labs from './pages/SchoolPrograms/Labs';
import Books from './pages/SchoolPrograms/Books';
import TeacherTraining from './pages/SchoolPrograms/TeacherTraining';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Hackathon from './pages/Impact/Hackathon';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/school-programs/labs" element={<Labs />} />
          <Route path="/school-programs/books" element={<Books />} />
          <Route path="/school-programs/teacher-training" element={<TeacherTraining />} />
          <Route path="/impact/hackathons" element={<Hackathon />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;