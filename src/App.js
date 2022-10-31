import './App.css';

import Links from './component/Links';
import Profile from './component/Profile';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App container">
        <Profile />
        <Links />
        <Footer></Footer>
    </div>
  );
}

export default App;
