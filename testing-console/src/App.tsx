import { BrowserRouter as Router } from 'react-router-dom';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Routes from './routes';

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Form />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
