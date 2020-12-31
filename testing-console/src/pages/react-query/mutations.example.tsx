import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import Pagination from '../../components/pagination.component';
import { RequestData } from '../../models/request';
import { ENDPOINT, usePost, useList } from '../../services';

const offset = 1;
const queryKeyPostRequest = 'paginated_request_list';
const obj = {
  name: 'morpheus',
  job: 'leader',
  email: '',
  first_name: '',
  last_name: '',
  avatar: '',
  id: new Date().toISOString(),
};
const PostRequest = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(1);

  const list = useList(queryKeyPostRequest, ENDPOINT.requestList, {
    page: String(page),
    per_page: String(12),
  });
  const add = usePost(queryClient, queryKeyPostRequest);

  useEffect((): (() => void) => {
    return (): Promise<void> => queryClient.cancelQueries(queryKeyPostRequest); /// check if necessary and dont cache data on component destroy;
  }, [queryClient]);
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('🚀 ~ file: App.tsx ~ line 42 ~ handleChange ~ handleChange', value);
  };
  const handlePagination = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    const accumulator = currentTarget.getAttribute('value');
    setPage((old) => Math.max(old + Number(accumulator), 1));
  };
  const handleMutations = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    const newData = currentTarget.getAttribute('data-value');
    if (newData) {
      add.mutate({ url: ENDPOINT.requestList, body: JSON.parse(newData) as RequestData });
    }
  };

  return (
    <>
      <section className="p-3">
        <form>
          <label className="d-flex flex-column" htmlFor="pokemon">
            <span>Choose your pokemon</span>
            <input type="text" name="pokemon" onChange={handleChange} />
          </label>
          <div className="btn btn-default btn-success" onClick={handleMutations} data-value={JSON.stringify(obj)} aria-hidden={true}>
            update
          </div>
        </form>
      </section>
      <section className="grid-wrapper">
        {(list.isLoading || list.isFetching) && <div className="text-warning">data loading....</div>}
        {list.isError && <div className="text-danger">ops... please try later...</div>}
        {list.isSuccess && list.data && list.data.data.length ? (
          list.data.data.map((user) => (
            <div className="card" key={user.id}>
              <img src={user.avatar} className="card-img-top" alt="avatar" />
              <div className="card-body">
                <h5 className="card-title">
                  {user.first_name} {user.last_name}
                </h5>
                <a href={`mailto: ${user.email}`} className="btn btn-primary">
                  Send Email
                </a>
              </div>
            </div>
          ))
        ) : (
          <div>All User are extinted. Sorry, try with Mars</div>
        )}
      </section>
      <Pagination
        page={page}
        offset={offset}
        handlePagination={handlePagination}
        count={list.data?.total_pages}
        first={1}
        next={page === list.data?.total_pages ? undefined : 'exist'}
      />
    </>
  );
};
export default PostRequest;
