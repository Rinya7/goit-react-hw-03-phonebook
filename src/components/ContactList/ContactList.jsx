import { Ul, Li, Text } from './ContactList.styled';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, buttonDelete }) => {
  return (
    <Ul>
      {contacts.map(({ name, id, number }) => (
        <Li key={id}>
          <Text>
            {name} tel: <span> {number}</span>
          </Text>

          <button type="button" name="delete" onClick={() => buttonDelete(id)}>
            Delete
          </button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      is: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  buttonDelete: PropTypes.func,
};
