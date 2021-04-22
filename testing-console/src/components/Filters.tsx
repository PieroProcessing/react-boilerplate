// interface Props {
//     filters:

import { InputField } from '.';

// }
const inputs = [
  {
    type: 'text',
    name: 'id',
    value: '',
  },
  {
    type: 'text',
    name: 'name',
    value: '',
  },
];
const Filters = (): JSX.Element => {
  return (
    <form>
      {inputs.map((i) => (
        <InputField key={i.name} {...i} />
      ))}
    </form>
  );
};

export default Filters;
