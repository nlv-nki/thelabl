import "./Button.scss";
const Button = (props) => {
  return <input className="button" type="button" value={props.text} />;
};

export default Button;
