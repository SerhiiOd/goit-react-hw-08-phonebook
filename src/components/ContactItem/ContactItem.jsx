import { Item, ItemBlock, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onClick }) => {
  return (
    <Item key={id}>
      <ItemBlock>
        <p>
          {name} : {number}
        </p>
        <Button type="button" onClick={() => onClick(id)}>
          Delete
        </Button>
      </ItemBlock>
    </Item>
  );
};

export default ContactItem;
