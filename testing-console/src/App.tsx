import { useEffect } from 'react';
import { useQuery } from 'react-query';

const url = 'https://pokeapi.co/api/v2/';
const fetchPokemon = async (): Promise<Response> => {
  const data = await fetch(url);
  return data.json() as Promise<Response>;
};

const obj = {
  key1: 'string',
  key2: {
    key2_1: 'string',
  },
};
const Test = (): JSX.Element => {
  // const [state, setState] = useState<{ response: Promise<Response> }>();
  const { data, status } = useQuery('pokemons', fetchPokemon);
  useEffect(() => {
    // void getPokemon();
    console.log('status', status);
  }, [status]);
  useEffect(() => {
    console.log('data', data);
  }, [data]);

  const handleSelect = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    console.log(
      '🚀 ~ file: App.tsx ~ line 23 ~ handleSelect ~ handleSelect',
      currentTarget.getAttribute('value'),
    );
  };
  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    console.log(
      '🚀 ~ file: App.tsx ~ line 33 ~ handleClick ~ handleClick',
      currentTarget.getAttribute('data-value'),
    );
  };
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('🚀 ~ file: App.tsx ~ line 42 ~ handleChange ~ handleChange', value);
  };
  return (
    <>
      <button type="button" onClick={handleSelect} value="value1">
        this is test
      </button>
      <div onClick={handleClick} data-value={obj} aria-hidden="true">
        this is test
      </div>
      <input type="text" onChange={handleChange} />
    </>
  );
};

function App(): JSX.Element {
  return (
    <div className="app-w">
      <Test />
    </div>
  );
}

export default App;
