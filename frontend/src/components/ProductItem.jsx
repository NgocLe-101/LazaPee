import PropTypes from 'prop-types';
import StarRating from './StarRating';

function ProductItem({ product }) {
  return (
    <div className='flex h-full cursor-pointer flex-col transition-all [&>*]:mb-4'>
      <div className='overflow-hidden rounded-2xl bg-[#F0EEED] p-2'>
        <img
          src={product.image}
          className='aspect-square w-full overflow-hidden bg-[#F0EEED] object-contain'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <div className='flex-1'>
          <h2 className='line-clamp-2 text-balance text-base font-semibold capitalize lg:text-xl'>
            {product.title}
          </h2>
        </div>
        <div className='flex items-center gap-4'>
          <StarRating
            rating={product.rating.rate}
            name={`${product.id}-product`}
          />
          <p className='text-[0.75rem] font-light lg:text-sm'>
            {product.rating.rate}/5
          </p>
        </div>
        <div className='flex gap-3 text-xl font-semibold lg:text-2xl'>
          <p>${product.price}</p>
          <p className='line-through opacity-40'>
            ${Math.round(product.price * 1.2 * 10) / 10}
          </p>
          <div className='flex items-center justify-center rounded-xl bg-[#FF3333] bg-opacity-10 px-2 text-[0.625rem] text-[#FF3333] lg:px-4 lg:text-[0.75rem]'>
            -20%
          </div>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
