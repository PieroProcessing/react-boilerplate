import { Response } from '../models';

interface PaginationModel {
  page: number;
  handlePagination: ({ currentTarget }: React.MouseEvent<HTMLElement>) => void;
  data: Response | undefined;
  offset: number;
}
const Pagination = ({ page, handlePagination, offset, data }: PaginationModel): JSX.Element => {
  return (
    <nav aria-label="row">
      <ul className="pagination justify-content-between">
        <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
          <button type="button" className="page-link" onClick={handlePagination} value={-offset} disabled={page === 0}>
            Previous
          </button>
        </li>

        <li className="page-item">
          <div className="d-flex align-center text-primary">
            {page} / {data?.count}
          </div>
        </li>

        <li className={`page-item ${!data?.next ? 'disabled' : ''}`}>
          <button type="button" className="page-link" onClick={handlePagination} value={offset} disabled={!data?.next}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
