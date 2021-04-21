import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './routes';

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
