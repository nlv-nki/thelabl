const InputField = (props) => {
  return <input name={props.name} onClick={props.onClick} onChange={props.onChange} />;
};

export default InputField;
