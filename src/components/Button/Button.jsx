const Button = ({ value }) => {
  return <button disabled={value ? "" : true}>Add User</button>;
};

export default Button;
