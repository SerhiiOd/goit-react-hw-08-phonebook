import PropTypes from 'prop-types';

export const Image = ({ name, w, alt }) => {
  return (
    <>
      <img src={require(`../../images/${name}`)} alt={alt} width={w} />
    </>
  );
};

Image.propTypes = {
  name: PropTypes.string,
  w: PropTypes.string,
  alt: PropTypes.string,
};
