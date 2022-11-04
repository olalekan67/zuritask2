import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
function App() {
  const [slackUname, setSlackUname] = useState('')
  useEffect(() => setSlackUname('Bunyamin Abdulsalam'), [])
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route path='/' element={<Home name={slackUname} />}/>
          <Route path='/contact' element={<Contact name={slackUname}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
