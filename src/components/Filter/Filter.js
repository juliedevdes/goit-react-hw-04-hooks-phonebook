import useLocalSt from "../../hooks/useLocalSt";

import s from "./Filter.module.css";
import PropTypes from "prop-types";

export default function Filter({ onChange }) {
  const [filterValue, setFilter] = useLocalSt("filterValue", "");

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  return (
    <label className={s.label}>
      search through your contacts
      <input
        placeholder="..."
        className={s.input}
        name="filterValue"
        onChange={handleFilterChange}
        value={filterValue}
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
