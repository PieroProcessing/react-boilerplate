import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  ParamTypes,
  TableModel,
  // RequestData
} from '../../models';
import { RootState } from '../../redux/reducers';
import { getData } from '../../redux/reducers/tableSlice';
import { ListData } from '../../components';

const Table = (): JSX.Element => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState): TableModel | null => state.table);
  const { content }: ParamTypes = useParams();

  useEffect((): void => {
    dispatch(getData(content));
  }, [content, dispatch]);

  return (
    <div>
      Table
      {data && data[content] && <ListData data={data[content].data} />}
    </div>
  );
};
export default Table;
