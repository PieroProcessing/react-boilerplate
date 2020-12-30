import { useState } from 'react';
import PostRequest from './mutations.example';
import QueryPaginated from './use-query.paginated';

const UseQueryExample = (): JSX.Element => {
  const [example, setExample] = useState<boolean>(true);

  const handleSelect = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    setExample(currentTarget.getAttribute('value') === 'true');
  };
  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    setExample(currentTarget.getAttribute('data-value') === 'true');
  };

  return (
    <>
      <header className="d-inline-flex align-items-center justify-content-around w-100 py-3 border-bottom">
        <div className="btn btn-secondary" onClick={handleClick} data-value="false" aria-hidden="true">
          UseQueryPagination Example
        </div>
        <button type="button" className="btn btn-default btn-primary" onClick={handleSelect} value="true">
          Mutation Example
        </button>
      </header>
      {example ? <PostRequest /> : <QueryPaginated />}
    </>
  );
};
export default UseQueryExample;
