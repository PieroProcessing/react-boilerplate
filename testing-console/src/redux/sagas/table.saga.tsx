import { call, CallEffect, ForkEffect, put, PutEffect, takeEvery } from '@redux-saga/core/effects';
import { ResponseModel } from '../../models';
import { _fetch } from '../../services';
import { getData, addData } from '../reducers/tableSlice';

const getTableData = ({ url }: { url: string }): Promise<ResponseModel> => {
  return _fetch<ResponseModel, Request>(url);
};

/* eslint-disable */
function* fetchDataTable({
  payload,
}: {
  payload: string;
}): Generator<CallEffect<ResponseModel> | PutEffect<{ type: string; payload: { data: ResponseModel; content: string } }>, void, unknown> {
  try {
    const response = yield call(getTableData, { url: payload });
    yield put(
      addData({
        data: response as ResponseModel,
        content: payload,
      }),
    );
  } catch (error) {
    console.log('error', error);
  }
}

export type UserSagaActionModel = ReturnType<typeof fetchDataTable>;

function* tableSaga(): Generator<ForkEffect<{ type: string }>, void, unknown> {
  yield takeEvery(getData, fetchDataTable);
}

export default tableSaga;
