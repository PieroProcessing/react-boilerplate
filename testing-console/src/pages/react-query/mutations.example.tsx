import { useEffect, useState } from 'react';
import {
  MutateOptions,
  MutationFunction,
  QueryFunctionContext,
  QueryKey,
  UseMutateFunction,
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from 'react-query';
import { SetDataOptions } from 'react-query/types/core/query';
import { Updater } from 'react-query/types/core/utils';
import Pagination from '../../components/pagination.component';
import { PostParams, PostResponseModel, RequestResponse } from '../../models';
import { RequestData } from '../../models/request';
import { ENDPOINT, setUrlQeueryParams, _fetch, _post } from '../../services';

const offset = 1;
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
  // console.log('🚀 ~ file: mutations.example.tsx ~ line 31 ~ queryClient', queryClient);
  const [page, setPage] = useState<number>(1);
  const [items, setItems] = useState<RequestData[]>(); // for demostrations purpose only

  const { data, isLoading, isError, isSuccess, isFetching } = useQuery<RequestResponse, QueryFunctionContext>(
    ['paginated_request_list', { url: `${ENDPOINT.requestList}?${setUrlQeueryParams({ page: String(page), per_page: String(12) }).toString()}` }],
    _fetch,
    {},
  );
  const handleUpdater = (input: RequestResponse[] | undefined): void => {
    // console.log('🚀 ~ file: mutations.example.tsx ~ line 36 ~ queryClient.setQueryData ~ oldData', input);
  };
  const { mutate } = useMutation(_post, {
    onMutate: async (newData) => {
      await queryClient.cancelQueries('paginated_request_list');
      const snapshot = queryClient.getQueryData<RequestResponse>('paginated_request_list');
      if (snapshot) {
        const newSnapshot = {
          ...snapshot,
          data: [...snapshot.data, newData.body],
        };
        queryClient.setQueryData<RequestResponse>('paginated_request_list', newSnapshot);
        setItems(newSnapshot.data); // for demostrations purpose only
        return newSnapshot;
      }
      return snapshot;
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, variables, context) => {
      console.log('🚀 ~ file: mutations.example.tsx ~ line 61 ~ err, variables, context', err, variables, context);
    },
    // Always refetch after error or success:
    onSettled: async () => {
      // await queryClient.refetchQueries('paginated_request_list');
    },
  });

  // console.log('🚀 ~ file: mutations.example.tsx ~ line 47 ~ mutate', mutate);
  useEffect((): (() => void) => {
    setItems(data?.data);
    return (): Promise<void> => queryClient.cancelQueries('paginated_request_list'); /// check if necessary and dont cache data on component destroy;
  }, [data, queryClient]);
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
      mutate({ url: ENDPOINT.requestList, body: JSON.parse(newData) as RequestData });
    }
  };
  const handleRedirect = ({ currentTarget }: React.MouseEvent<HTMLElement>): void => {
    // console.log('🚀 ~ file: use-query.example.tsx ~ line 34 ~ handleRedirect ~ handleRedirect', currentTarget.getAttribute('data-value'));
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
        {(isLoading || isFetching) && <div className="text-warning">data loading....</div>}
        {isError && <div className="text-danger">ops... please try later...</div>}
        {isSuccess && items?.length ? (
          items?.map((user) => (
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
        count={data?.total_pages}
        first={1}
        next={page === data?.total_pages ? undefined : 'exist'}
      />
    </>
  );
};
export default PostRequest;
