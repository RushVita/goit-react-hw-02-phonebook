import { ListItem, PhoneList } from './Contacts.styled';
import { nanoid } from 'nanoid';

export const Contacts = ({ contacts }) => {
  return (
    <div>
      <PhoneList>
        {contacts.map(item => {
          return (
            <ListItem key={nanoid()}>
              {item.name}: {item.number}
            </ListItem>
          );
        })}
      </PhoneList>
    </div>
  );
};
