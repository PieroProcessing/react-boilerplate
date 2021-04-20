import { call, CallEffect, ForkEffect, put, PutEffect, takeEvery } from '@redux-saga/core/effects';
import { RequestResponse } from '../../models';
import { _fetch } from '../../services';
import ENDPOINT from '../endpoints';
import { addListUsers, getUser } from '../reducers/userSlice';

const getUsers = (): Promise<RequestResponse> => {
  return _fetch<RequestResponse, Request>(ENDPOINT.requestList);
};

/* eslint-disable */
function* fetchUsers(): Generator<CallEffect<RequestResponse> | PutEffect<{ type: string; payload: RequestResponse | null }>, void, RequestResponse> {
  try {
    const users = yield call(getUsers);
    yield put(addListUsers(users));
  } catch (error) {
    console.log(error);
  }
}

export type UserSagaActionModel = ReturnType<typeof fetchUsers>;

function* userSaga(): Generator<ForkEffect<{ type: string }>, void, unknown> {
  yield takeEvery(getUser.type, fetchUsers);
}

export default userSaga;
