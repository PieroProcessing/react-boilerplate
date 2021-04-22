// interface Props {
//     filters:

import { Input } from '.';

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
        <Input key={i.name} {...i} />
      ))}
    </form>
  );
};

export default Filters;
