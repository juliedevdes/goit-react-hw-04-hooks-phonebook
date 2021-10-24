import ContacsForm from "./components/ContacsForm/ContacsForm";
import ContasctsList from "./components/ContactList/ContactsList";
import Filter from "./components/Filter/Filter";

import useLocalSt from "./hooks/useLocalSt";

import s from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useLocalSt("contacts", []);
  const [filter, setFilter] = useLocalSt("filter", "");

  const onSubmit = (formState) => {
    if (!contacts.some((el) => el.name === formState.name)) {
      setContacts((prevs) => [...prevs, formState]);
    } else {
      alert("There is already contact with the same name");
    }
  };

  const removeContact = (contactId) => {
    setContacts((s) => s.filter((contact) => contact.id !== contactId));
  };

  const updateFilter = (value) => {
    setFilter(value);
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={s.root}>
      <h2>Phonebook</h2>
      <ContacsForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={updateFilter} />
      <ContasctsList
        contacts={getVisibleContacts()}
        removeContact={removeContact}
      />
    </div>
  );
}
