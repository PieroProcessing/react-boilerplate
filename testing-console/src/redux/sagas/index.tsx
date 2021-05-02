import { all, AllEffect, ForkEffect } from '@redux-saga/core/effects';

export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<{ type: string }>, void, unknown>>> {
  yield all([]);
}
