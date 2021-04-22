import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { InputBaseProps, ParamTypes } from '../models';
import { setFilter } from '../redux/reducers/filtersSlice';

const InputField = (props: InputBaseProps): JSX.Element => {
  const { name, type, value } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState(value);
  const { content }: ParamTypes = useParams();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setState(target.value);
    dispatch(setFilter({ content, data: { [target.name]: +target.value } }));
  };
  // const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>): void => {
  // };
  return <input type={type} name={name} onChange={handleChange} value={value || state} />;
};

export default InputField;
