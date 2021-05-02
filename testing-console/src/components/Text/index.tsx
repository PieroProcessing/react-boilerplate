import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducers/filtersSlice';
import { InputBaseProps, ParamTypes } from '../../models';

const Text = (props: InputBaseProps): JSX.Element => {
  const { name, value } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState(value);
  const { content }: ParamTypes = useParams();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setState(target.value);
    dispatch(setFilter({ content, data: { [target.name]: +target.value } }));
  };
  // const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>): void => {
  // };
  return <input type="Text" name={name} onChange={handleChange} value={value || state} />;
};

export default Text;
