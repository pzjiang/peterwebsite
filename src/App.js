import logo from './logo.svg';
import './App.css';
import Router from './components/Routes'
import Route from './components/Route';
import MainPage from './pages/MainPage';

import TitlePage from './pages/TitlePage';
import BlogPage from './pages/BlogPage';

import Avalon from './pages/Avalon';
import PurdueCircle from './pages/PurdueCircle';
import PurdueHang from './pages/PurdueHang';


function App() {
  return (
    <div className="APP">
      <Router >
        <Route href="/" ><TitlePage /></Route>
        <Route href={"/home"} ><MainPage /> </Route>
        <Route href="/blogs"><BlogPage /></Route>
        <Route href="/avalon"><Avalon /></Route>
        <Route href="/purdueZilla"><PurdueCircle/></Route>
        <Route href="/purdueHang"><PurdueHang/></Route>
      </Router>
    </div>
  );
}

export default App;
