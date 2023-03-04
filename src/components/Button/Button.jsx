const Button = (props) => {
  return (
    <button disabled={props.disabled ? "" : true} name={props.name} onClick={props.onClick}>
      Add User
    </button>
  );
};

export default Button;
