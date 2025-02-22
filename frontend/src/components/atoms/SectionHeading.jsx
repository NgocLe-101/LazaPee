import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

function SectionHeading({ title = 'Section Heading', className }) {
  const defaultClassName =
    'section-heading text-balance text-center font-display text-3xl font-normal uppercase lg:text-5xl';
  const mergedClassName = cn(defaultClassName, className);

  return <h2 className={mergedClassName}>{title}</h2>;
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionHeading;
