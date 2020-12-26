import { useState, useCallback, useEffect } from 'react';

const url = 'https://pokeapi.co/api/v2/';

const Test = (): JSX.Element => {
  const [state, setState] = useState<{ response: Promise<Response> }>();
  const getPokemon = useCallback(async (): Promise<void> => {
    const data = await fetch(url);
    setState({ response: (await data.json()) as Promise<Response> });
  }, []);
  useEffect(() => {
    void getPokemon();
  }, [getPokemon]);
  useEffect(() => {
    console.log('state', state?.response);
  }, [state]);

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('🚀 ~ file: App.tsx ~ line 23 ~ handleSelect ~ handleSelect', e);
  };
  return (
    <button type="button" onClick={handleSelect} value="test">
      this is test
    </button>
  );
};

function App(): JSX.Element {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
