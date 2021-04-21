import { all, AllEffect, ForkEffect } from '@redux-saga/core/effects';
import tableSaga from './table.saga';
import userSaga from './users.saga';

export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<{ type: string }>, void, unknown>>> {
  yield all([userSaga(), tableSaga()]);
}
