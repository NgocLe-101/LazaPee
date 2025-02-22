import { Link } from 'react-router-dom';
import ProductItem from '../molecules/ProductItem';

import PropTypes from 'prop-types';
import NoItemListNotification from '../molecules/NoItemListNotification';
import Pagination from '../molecules/Pagination';
import { Search } from 'lucide-react';

ProductListPanel.propTypes = {
  listTitle: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  sortByOptions: PropTypes.array.isRequired,
  sortByDefaultValue: PropTypes.string.isRequired,
  onSortByChange: PropTypes.func.isRequired,
  onFilterIconClick: PropTypes.func.isRequired,
};

function ProductListPanel({
  listTitle,
  products,
  currentPage,
  totalPages,
  onPageChange,
  sortByOptions,
  sortByDefaultValue,
  onSortByChange,
  onFilterIconClick,
  totalProducts,
  searchValue,
}) {
  return (
    <div className='flex-1'>
      {searchValue && (
        <div>
          <p className='text-2xl font-light text-opacity-60'>
            Kết quả tìm kiếm cho &quot;
            <span className='font-bold'>{searchValue}</span>&quot;
          </p>
        </div>
      )}
      <div className='md:flex md:justify-between'>
        {listTitle && (
          <h1 className='text-[2rem] font-semibold capitalize'>{listTitle}</h1>
        )}
        <div className='flex items-center gap-3 text-sm font-light text-opacity-60'>
          <p>
            Showing {currentPage}/{totalPages} page of {totalProducts} Products
          </p>
          <div
            className={'ml-auto w-fit rounded-full bg-neutral p-2 md:hidden'}
          >
            <Search className='h-4 w-4' onClick={onFilterIconClick} />
          </div>

          <div className='hidden md:block'>
            Sort by:
            {
              <select
                className='ml-2 cursor-pointer px-2 py-1 font-normal *:capitalize'
                defaultValue={sortByDefaultValue}
                onChange={(e) => onSortByChange(e.target.value)}
              >
                {sortByOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            }
          </div>
        </div>
      </div>
      <div className='line-below grid grid-cols-2 gap-[0.875rem] py-4 md:grid-cols-3 md:gap-5 md:p-4 lg:gap-9'>
        {products.length !== 0 ? (
          products.map((product) => (
            <Link to={`/product/details/${product.id}`} key={product.id}>
              <ProductItem product={product} />
            </Link>
          ))
        ) : (
          <NoItemListNotification message='Try changing the filters' />
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ProductListPanel;
