import { Response } from '../../models';

interface QueryPaginatedModel {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: Response | undefined;
  handleRedirect: ({ currentTarget }: React.MouseEvent<HTMLElement>) => void;
}

const QueryPaginated = ({ isLoading, isError, isSuccess, data, handleRedirect }: QueryPaginatedModel): JSX.Element => {
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
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <button type="button" className="page-link" value={-1} aria-disabled="true">
              Previous
            </button>
          </li>

          <li className="page-item">
            <button type="button" className="page-link">
              1
            </button>
          </li>

          <li className="page-item">
            <button type="button" className="page-link" value={+1}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default QueryPaginated;
