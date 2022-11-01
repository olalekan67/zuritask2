import './App.css';
import { useEffect, useState } from 'react'
import Links from './component/Links';
import Profile from './component/Profile';
import Footer from './component/Footer';
function App() {
  const [slackUname, setSlackUname] = useState('')
  useEffect(() => setSlackUname('Bunyamin Abdulsalam'), [])
  return (
    <div className="App container">
        <Profile name={slackUname}/>
        <Links name={slackUname}/>
        <Footer />
    </div>
  );
}

export default App;
