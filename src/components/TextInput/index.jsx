import './style.css';

export const TextInput = ({ searchValue, inputValue }) => {
  return (
    <input
      className="text-input"
      onChange={inputValue}
      value={searchValue}
      type="search"
      placeholder="Pesquisar"
    />
  );
}
