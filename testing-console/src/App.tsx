import React from 'react';
import logo from './logo.svg';
import './App.css';

const url = 'https://pokeapi.co/api/v2/';

const Test = (): JSX.Element => {
  const [state, setState] = React.useState<{ response: Promise<Response> }>();
  const getPokemon = React.useCallback(async (): Promise<void> => {
    const data = await fetch(url);
    setState({ response: (await data.json()) as Promise<Response> });
  }, []);
  React.useEffect(() => {
    void getPokemon();
  }, [getPokemon]);
  React.useEffect(() => {
    console.log('state', state?.response);
  }, [state]);
  return <div>this is test </div>;
};

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Test />
        </a>
      </header>
    </div>
  );
}

export default App;
