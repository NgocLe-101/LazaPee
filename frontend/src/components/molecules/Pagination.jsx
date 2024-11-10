import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className='flex py-4'>
      <button
        className='flex items-center rounded-lg border px-[0.875rem] py-2'
        onClick={() => {
          onPageChange(currentPage - 1);
        }}
      >
        <FaAngleLeft className='mr-2' />
        Previous
      </button>
      <div className='flex flex-1 justify-evenly'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`aspect-square rounded-lg p-3 text-center leading-none ${currentPage === i ? 'bg-neutral' : ''}`}
            onClick={() => {
              onPageChange(i);
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className='flex items-center rounded-lg border px-[0.875rem] py-2'
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
      >
        Next
        <FaAngleRight className='ml-2' />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Pagination;
