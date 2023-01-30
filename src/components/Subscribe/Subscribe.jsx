import "./_Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe__input-wrap">
      <div className="subscribe__input">
        <input placeholder="Введите адрес эл. почты" name="subscribe-input" className="subscribe__input__field" />
      </div>
      <div className="subscribe__btn">Подписаться</div>
    </div>
  );
};

export default Subscribe;
