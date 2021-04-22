import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { InputBaseProps, ParamTypes } from '../../models';
import { setFilter } from '../../redux/reducers/filtersSlice';
import { getData } from '../../redux/reducers/tableSlice';

const Input = (props: InputBaseProps): JSX.Element => {
  const { value, ...attr } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState(value || (attr.name !== 'number' ? '' : 0));
  const { content }: ParamTypes = useParams();
  useEffect((): void => {
    dispatch(getData(content));
  }, [content, dispatch]);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setState(+target.value ? +target.value : target.value);
    dispatch(setFilter({ content, data: { [target.name]: +target.value ? +target.value : target.value } }));
  };
  // const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>): void => {
  // };
  return <input {...attr} onChange={handleChange} value={state} />;
};

export default Input;
