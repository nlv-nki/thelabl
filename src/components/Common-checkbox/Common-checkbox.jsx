import "./_Common-checkbox.scss";
const CommonHeckbox = () => {
  return (
    <div className="personal-agreements subscribe__agree">
      <label className="common-checkbox">
        <input type="checkbox" name="subscribe-agree" className="common-checkbox__input" />
        <span className="common-checkbox__box"></span>
        <span className="common-checkbox__label">
          <p>Соглашаюсь на обработку персональных данных*</p>
        </span>
      </label>
      <div className="personal-agreements__error subscribe__error">Вы должны принять согласие на обработку персональных данных</div>
    </div>
  );
};

export default CommonHeckbox;
