import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { InputBaseProps, ParamTypes } from '../../models';
import { setFilter } from '../../redux/reducers/filtersSlice';

const Input = (props: InputBaseProps): JSX.Element => {
  const { value, ...attr } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState(value || '');
  const { content }: ParamTypes = useParams();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    console.log('🚀 ~ file: Input.tsx ~ line 15 ~ handleChange ~ target', target);
    setState(target.value);
    dispatch(setFilter({ content, data: { [target.name]: target.value } }));
  };
  // const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>): void => {
  // };
  return <input {...attr} onChange={handleChange} value={value || state} />;
};

export default Input;
