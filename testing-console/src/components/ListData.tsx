import { RequestData } from '../models';

interface Props {
  data: null | RequestData[];
}
const ListData = ({ data }: Props): JSX.Element => {
  return (
    <div>
      <ul>{data && data.map((el) => <li key={el.id}>{el.first_name || el.name}</li>)}</ul>
    </div>
  );
};

export default ListData;
