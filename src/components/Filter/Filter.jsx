import PropTypes from 'prop-types';
import { FilterBlock, Input, Text } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice.js';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.target.value));

  return (
    <FilterBlock>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        placeholder="Name"
      />
    </FilterBlock>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
