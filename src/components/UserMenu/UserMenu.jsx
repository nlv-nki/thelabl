const UserMenu = (props) => {
  return (
    <div className="user-menu__list">
      <a href="#link" className="user-menu__item user-menu__city">
        {props.item}
      </a>
      <button className="button button--gray">Войти</button>
    </div>
  );
};

export default UserMenu;
