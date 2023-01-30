import Subscribe from "./../Subscribe/Subscribe.jsx";
import CommonHeckbox from "./../Common-checkbox/Common-checkbox.jsx";
const Footer = () => {
  return (
    <>
      <div className="footer__left">
        <div className="footer__column">
          <span className="footer__title">О нас</span>
          <a href="#s">Работа у нас </a>
          <a href="#s">Работа у нас </a>
          <a href="#s">Работа у нас </a>
        </div>

        <div className="footer__column">
          <span className="footer__title">Контакты</span>
          <a href="#s">Обратная связь </a>
          <a href="#s">РДля прессы </a>
        </div>
      </div>
      <div className="footer__right">
        <span className="footer__title"> Подписывайтесь на рассылку</span>
        <Subscribe />
        <CommonHeckbox />
      </div>

      <div className="footer__info">
        <p>Контакт-центр +7 (495) 180 99 99 Правовая информация </p>
      </div>
    </>
  );
};

export default Footer;
