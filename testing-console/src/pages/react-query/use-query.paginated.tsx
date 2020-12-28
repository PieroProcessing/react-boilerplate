import { useEffect, useState } from 'react';
import { QueryFunctionContext, useQuery, useQueryClient } from 'react-query';
import Pagination from '../../components/pagination.component';
import { Response } from '../../models';
import { ENDPOINT, setUrlQeueryParams, _fetch } from '../../services';

const QueryPaginated = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(0);

  const { data, isLoading, isError, isSuccess } = useQuery<Response, QueryFunctionContext>(
    ['paginated_pokemon_list', { url: `${ENDPOINT.pokemonList}?${setUrlQeueryParams({ offset: String(page), limit: '200' }).toString()}` }],
    _fetch,
    {
      keepPreviousData: true,
    },
  );
  useEffect((): (() => void) => {
    return (): Promise<void> => queryClient.cancelQueries('pokemons'); /// check if necessary and dont cache data on component destroy;
  }, [queryClient]);
  const handleRedirect = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    // console.log('🚀 ~ file: use-query.example.tsx ~ line 34 ~ handleRedirect ~ handleRedirect', currentTarget.getAttribute('data-value'));
  };
  const handlePagination = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    const accumulator = currentTarget.getAttribute('value');
    setPage((old) => Math.max(old + Number(accumulator), 0));
  };
  return (
    <section>
      {isLoading && <div className="text-warning">data loading....</div>}
      {isError && <div className="text-danger">ops... please try later...</div>}
      {isSuccess && data?.results.length ? (
        data?.results.map((pokemon) => (
          <div key={pokemon.name} onClick={handleRedirect} data-value={pokemon} aria-hidden="true" className="row">
            <div className="col bg-light p-1 border hover-secondary">{pokemon.name}</div>
          </div>
        ))
      ) : (
        <div>All Pokemon are extinted. Sorry, try with Digimons</div>
      )}
      <Pagination page={page} handlePagination={handlePagination} data={data} />
    </section>
  );
};
export default QueryPaginated;
