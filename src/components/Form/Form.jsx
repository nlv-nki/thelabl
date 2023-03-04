import InputField from "./../InputField/InputField.jsx";
import Button from "./../Button/Button.jsx";

const Form = () => {
  //   const [value, setValue] = useState(false);
  //   const handleSubmit = (value) => {
  //     console.log(value);
  //     setValue(value);
  //   };

  //console.log(value, 666);
  return (
    <>
      <InputField name="login" />
      <InputField name="password" />
      <InputField name="email" />
      <Button />
    </>
  );
};

export default Form;
