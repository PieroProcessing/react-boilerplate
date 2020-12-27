import { useEffect, useState } from 'react';
import { QueryFunctionContext, useQuery, useQueryClient } from 'react-query';
import { Response } from '../../models';
import { _fetch, ENDPOINT } from '../../services';
import SimpleRequest from './use-query.simple-list';
import QueryPaginated from './use-query.paginated';

const UseQueryExample = (): JSX.Element => {
  const [example, setExample] = useState<boolean>(false);
  const { data, status, isLoading, isError, isSuccess } = useQuery<Response, QueryFunctionContext>(
    ['pokemons', { url: ENDPOINT.pokemonList }],
    _fetch,
    {},
  );
  const queryClient = useQueryClient();

  useEffect((): (() => void) => {
    return (): Promise<void> => queryClient.cancelQueries('pokemons'); /// check if necessary and dont cache data on component destroy;
  }, [data, queryClient]);

  const handleSelect = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    setExample(Boolean(currentTarget.getAttribute('value')));
  };
  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    setExample(Boolean(currentTarget.getAttribute('value')));
  };

  const handleRedirect = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    // console.log('🚀 ~ file: use-query.example.tsx ~ line 34 ~ handleRedirect ~ handleRedirect', currentTarget.getAttribute('data-value'));
  };
  return (
    <>
      <header className="d-inline-flex align-items-center justify-content-around w-100 py-3 border-bottom">
        <div className="btn btn-secondary" onClick={handleClick} data-value={false} aria-hidden="true">
          UseQueryPagination Example
        </div>
        <button type="button" className="btn btn-default btn-primary" onClick={handleSelect} value="true">
          UseQuery Example
        </button>
      </header>
      {example ? (
        <SimpleRequest />
      ) : (
        <QueryPaginated isLoading={isLoading} isError={isError} isSuccess={isSuccess} data={data} handleRedirect={handleRedirect} />
      )}
    </>
  );
};
export default UseQueryExample;
