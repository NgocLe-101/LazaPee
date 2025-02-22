import { Link } from 'react-router-dom';
import { heroBanner } from '../../assets';
import PropTypes from 'prop-types';
import InverseButton from '../atoms/InverseButton';
import Image from '../atoms/Image';
export default function Hero({ displayTitle, displayText, infoModules }) {
  return (
    <section className='full-screen-section w-full bg-[#F2F0F1]'>
      <div className='grid h-full min-h-[83svh] w-full grid-cols-1 grid-rows-2 gap-4 px-4 lg:container lg:mx-auto lg:grid-cols-2 lg:grid-rows-1 lg:px-0'>
        <div className='my-auto py-6'>
          <h1 className='mb-5 w-full max-w-2xl text-balance font-display text-4xl font-bold leading-[0.95] tracking-wider md:text-[4rem] md:leading-none'>
            {displayTitle}
          </h1>
          <div className='mb-5 w-full max-w-prose'>
            <p className='text-balance font-primary text-base font-light opacity-60 md:text-sm'>
              {displayText}
            </p>
            <Link to='/product'>
              <InverseButton style={'mt-5 px-16 py-4 lg:w-auto rounded-full'}>
                SHOP NOW
              </InverseButton>
            </Link>
          </div>
          <div className='flex flex-wrap'>
            {infoModules.map((module) => {
              return (
                <div
                  className='w-fit flex-1 basis-36 px-5 py-2 text-center [&:first-child]:border-e-2 md:[&:nth-child(2)]:border-e-2'
                  key={module.secondaryText.toLowerCase().split(' ').join('-')}
                >
                  <p className='font-primary text-2xl font-semibold md:text-[2.5rem]'>
                    {module.primaryText}
                  </p>
                  <p className='font-primary text-xs font-light opacity-60 md:text-base'>
                    {module.secondaryText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          src={heroBanner}
          alt='hero-banner'
          className='h-full w-full object-cover object-right'
        />
      </div>
    </section>
  );
}

Hero.propTypes = {
  displayTitle: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  infoModules: PropTypes.array.isRequired,
};
