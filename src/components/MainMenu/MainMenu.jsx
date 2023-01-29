const MainMenu = () => {
  return (
    <div className="main-menu">
      <nav className="main-menu__list">
        <a href="/menu" className="main-menu__item">
          Меню
        </a>
        <a href="/offers" className="main-menu__item">
          Акции
        </a>
        <a href="/cafe" className="main-menu__item">
          Кафе
        </a>
        <a href="/kidscombo" className="main-menu__item">
          Кидз Комбо
        </a>
        <a href="/restaurants/map" className="main-menu__item">
          Мы на карте
        </a>
        <a href="/events" className="main-menu__item">
          Новинки
        </a>
        <a href="/articles/news" className="main-menu__item">
          Новости
        </a>
        <a href="/company" className="main-menu__item">
          О нас
        </a>
      </nav>
    </div>
  );
};

export default MainMenu;
