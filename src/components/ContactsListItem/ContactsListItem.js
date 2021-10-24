import s from "./ContactsListItem.module.css";
import PropTypes from "prop-types";

export default function ContasctsListItem({ id, name, number, removeContact }) {
  return (
    <div>
      <span className={s.name}> {name}</span>
      <span className={s.num}> {number}</span>
      <button className={s.btn} name={name} onClick={() => removeContact(id)}>
        delete
      </button>
    </div>
  );
}

ContasctsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
