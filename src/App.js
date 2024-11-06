import logo from './logo.svg';
import './App.css';
import Router from './components/Routes'
import Route from './components/Route';
import MainPage from './pages/MainPage';
import SingleBlog from './pages/SingleBlog';
import TitlePage from './pages/TitlePage';
import BlogPage from './pages/BlogPage';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="APP">
      <Router >
        <Route href="/" ><TitlePage /></Route>
        <Route href={"/home"} ><MainPage /> </Route>
        <Route href="/blogs"><BlogPage /></Route>
        <Route href="/projects"><Projects /></Route>
      </Router>
    </div>
  );
}

export default App;
