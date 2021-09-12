import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about';
import Projects from './pages/projects';
import { BrowserRouter as BR, Switch, Route } from 'react-router-dom';
import generateBg from './components/background/MainBackground';

function App() {
  return (
    <BR>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
        <Footer />
      </div>

    </BR>
  );
}

export default App;
