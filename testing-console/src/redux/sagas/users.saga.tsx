import { call, CallEffect, ForkEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { JsonPlaceholderModel } from '../../models';
import type from '../types';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const getApi = (): Promise<JsonPlaceholderModel[]> => {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (res): Promise<JsonPlaceholderModel[]> => (await res.json()) as JsonPlaceholderModel[])
    .catch((err) => {
      throw err;
    });
};

interface ErrorModel {
  message: string;
}
/* eslint-disable */
type FetchGeneratorModel = Generator<
  CallEffect<JsonPlaceholderModel[]> | PutEffect<{ type: string; users: JsonPlaceholderModel[] }> | PutEffect<{ type: string; message: string }>,
  void,
  unknown
>;
function* fetchUsers(): FetchGeneratorModel {
  try {
    const users = yield call(getApi);
    yield put({ type: type.GET_USERS_SUCCESS, users: users as JsonPlaceholderModel[] });
  } catch (error) {
    yield put({ type: type.GET_USERS_FAILED, message: (error as ErrorModel).message });
  }
}
export type UserSagaActionModel = ReturnType<typeof fetchUsers>;
function* userSaga(): Generator<ForkEffect<{ type: string }>, void, unknown> {
  yield takeEvery(type.GET_USERS_REQUESTED, fetchUsers);
}

export default userSaga;
