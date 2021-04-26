import "../style/layout/_form.scss";

function Input(props) {
  const { name, label, placeholder, value, type, handleInput } = props;
  const handleInputChange = (ev) => {
    handleInput(ev);
  };

  return (
    <>
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={"form__input"}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required
      />
    </>
  );
}
Input.defaultProps = { type: "text" };
export default Input;
