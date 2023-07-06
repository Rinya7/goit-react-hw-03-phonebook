import PropTypes from 'prop-types';
import { Input, Title, Div } from './Filter.styled';

export const Filter = ({ filter, filterForm }) => {
  return (
    <Div>
      <Title>Find contacts by name:</Title>
      <Input
        type="text"
        name="filter"
        value={filter}
        title="filter contacts"
        required
        onChange={filterForm}
      />
    </Div>
  );
  //  }
};

Filter.protoType = {
  filter: PropTypes.string.isRequired,
  filterByName: PropTypes.func,
};
