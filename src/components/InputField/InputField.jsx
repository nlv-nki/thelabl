import "./InputField.scss";
const InputField = (props) => {
  return <input className="inputField" type={props.fieldType} placeholder={props.placeholder} />;
};

export default InputField;
