import { Response } from '../models';

interface PaginationModel {
  page: number;
  handlePagination: ({ currentTarget }: React.MouseEvent<HTMLElement>) => void;
  data: Response | undefined;
}
const Pagination = ({ page, handlePagination, data }: PaginationModel): JSX.Element => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
          <button type="button" className="page-link" onClick={handlePagination} value={-200} disabled={page === 0}>
            Previous
          </button>
        </li>

        <li className="page-item">
          <button type="button" className="page-link">
            {page}
          </button>
        </li>

        <li className={`page-item ${!data?.next ? 'disabled' : ''}`}>
          <button type="button" className="page-link" onClick={handlePagination} value={+200} disabled={!data?.next}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
