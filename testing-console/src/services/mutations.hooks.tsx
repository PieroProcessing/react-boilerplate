import { useQuery, useMutation, QueryFunctionContext, QueryObserverResult, QueryClient, UseMutationResult } from 'react-query';
import { RequestResponse, UrlQueryParamsModel, PostParams } from '../models';
import { RequestData } from '../models/request';
import _fetch from './fetch.service';
import _post from './post.service';
import setUrlQeueryParams from './serch-params.service';

const useList = (key: string, url: string, query: UrlQueryParamsModel): QueryObserverResult<RequestResponse, QueryFunctionContext> => {
  return useQuery<RequestResponse, QueryFunctionContext>([key, { url: `${url}?${setUrlQeueryParams(query).toString()}` }], _fetch, {});
};

const usePost = (queryClient: QueryClient, key: string): UseMutationResult<RequestResponse, unknown, PostParams, RequestData> => {
  return useMutation(_post, {
    onMutate: async (postParams: PostParams) => {
      await queryClient.cancelQueries(key);
      const snapshot = queryClient.getQueryData<RequestResponse>(key);
      const newSnapshot = (old: RequestResponse): RequestResponse | undefined => {
        console.log('old', old);
        if (snapshot) {
          snapshot.data.push(postParams.body);
        }
        return snapshot;
      };
      queryClient.setQueryData<(old: RequestResponse) => RequestResponse | undefined>(key, newSnapshot);
      return postParams.body; // this is the context
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, variables, context) => {
      console.log('🚀 ~ file: mutations.example.tsx ~ line 61 ~ err, variables, context', err, variables, context);
    },
    // Always refetch after error or success:
    onSettled: (newData, error, postParams, context): void => {},
  });
};

export { useList, usePost };
