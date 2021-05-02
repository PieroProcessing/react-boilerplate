import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputBaseProps } from '../../models';
import { setInput } from '../../redux/reducers/formSlice';

const Text = (props: InputBaseProps): JSX.Element => {
  const { name, value, form } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState(value);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setState(target.value);
    dispatch(setInput({ name: form, value: { [target.name]: target.value } }));
  };
  // const handleBlur = ({ target }: ChangeEvent<HTMLInputElement>): void => {
  // };
  return <input type="Text" name={name} onChange={handleChange} value={value || state} />;
};

export default Text;
