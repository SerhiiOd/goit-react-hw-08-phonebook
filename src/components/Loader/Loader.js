import BounceLoader from 'react-spinners/BounceLoader';

const override = {
  display: 'block',
  margin: '0 auto',
};

export const Loader = () => {
  return (
    <>
      <BounceLoader
        color={'#1363df'}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};
