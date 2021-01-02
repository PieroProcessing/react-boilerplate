import { useQuery, useMutation, QueryFunctionContext, QueryObserverResult, QueryClient, UseMutationResult } from 'react-query';
import { RequestResponse, UrlQueryParamsModel, PostParams } from '../models';
import _fetch from './fetch.service';
import _post from './post.service';
import setUrlQeueryParams from './serch-params.service';

const useList = (key: string, url: string, query: UrlQueryParamsModel): QueryObserverResult<RequestResponse, QueryFunctionContext> => {
  return useQuery<RequestResponse, QueryFunctionContext>([key, { url: `${url}?${setUrlQeueryParams(query).toString()}` }], _fetch, {});
};

const usePost = (
  queryClient: QueryClient,
  key: string,
): UseMutationResult<RequestResponse, unknown, PostParams, () => RequestResponse | undefined> => {
  return useMutation(_post, {
    onMutate: async (postParams: PostParams) => {
      await queryClient.cancelQueries(key);
      const snapshot = queryClient.getQueryData<RequestResponse>(key);
      const oldSnapshot = { ...snapshot } as RequestResponse;

      queryClient.setQueryData<(old: RequestResponse) => RequestResponse | undefined>(key, (old: RequestResponse): RequestResponse | undefined => {
        if (snapshot) {
          snapshot.data.unshift(postParams.body);
          snapshot.total = snapshot.data.length;
        }
        return snapshot;
      });
      return (): RequestResponse | undefined => {
        // console.log('on return snapshot', snapshot);
        return queryClient.setQueryData<RequestResponse>(key, oldSnapshot);
      };
    },
    // If the mutation fails, use the context returned from onMutate to rollback
    onError: (err, variables, rollback) => {
      if (rollback) {
        rollback();
      }
    },

    // Always refetch after error or success:
    onSettled: async (): Promise<void> => {
      // await queryClient.invalidateQueries(key);
    },
  });
};

export { useList, usePost };
