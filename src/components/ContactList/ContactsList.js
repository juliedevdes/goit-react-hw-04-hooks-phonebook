import ContasctsListItem from "../ContactsListItem/ContactsListItem";
import s from "./ContactsList.module.css";
import PropTypes from "prop-types";

export default function ContasctsList({ contacts, removeContact }) {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <li className={s.item} key={contact.id}>
            <ContasctsListItem
              name={contact.name}
              number={contact.number}
              removeContact={removeContact}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

ContasctsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  removeContact: PropTypes.func.isRequired,
};
