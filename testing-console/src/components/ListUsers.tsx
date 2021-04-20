import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RequestResponse } from '../models';
import { RootState } from '../redux/reducers';
import { getUser } from '../redux/reducers/userSlice';

const ListUsers = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState): RequestResponse | null => state.users);
  console.log('🚀 ~ file: LIstUsers.tsx ~ line 10 ~ users', users);
  useEffect((): void => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div>
      <ul>{users && users.data.map((user) => <li key={user.id}>{user.first_name}</li>)}</ul>
    </div>
  );
};

export default ListUsers;
