import { Response } from '../models';

interface PaginationModel {
  page: number;
  handlePagination: ({ currentTarget }: React.MouseEvent<HTMLElement>) => void;
  offset: number;
  next: string | undefined;
  first: number;
  count: number | undefined;
}
const Pagination = ({ page, handlePagination, offset, first, count, next }: PaginationModel): JSX.Element => {
  return (
    <nav aria-label="row">
      <ul className="pagination justify-content-between">
        <li className={`page-item ${page === first ? 'disabled' : ''}`}>
          <button type="button" className="page-link" onClick={handlePagination} value={-offset} disabled={page === first}>
            Previous
          </button>
        </li>

        <li className="page-item">
          <div className="d-flex align-center text-primary">
            {page} / {count}
          </div>
        </li>

        <li className={`page-item ${next ? '' : 'disabled'}`}>
          <button type="button" className="page-link" onClick={handlePagination} value={offset} disabled={!next}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
