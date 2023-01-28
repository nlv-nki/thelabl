import "./Form.scss";
import InputField from "../InputField/InputField.jsx";
import Button from "../Button/Button.jsx";

const Form = () => {
  return (
    <form>
      <InputField fieldType="email" placeholder="Эл. почта" />
      <InputField fieldType="password" placeholder="Пароль" />
      <Button className="button" text="Войти"></Button>
      <div className="form__help-link">
        <a href="/registration/">Зарегистрироваться</a>
        <a href="/login/recover/">Забыли пароль?</a>
      </div>
    </form>
  );
};

export default Form;
