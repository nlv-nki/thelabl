import logo from "./logo.svg";
import "./App.scss";
import MainMenu from "./components/MainMenu/MainMenu.jsx";
import UserMenu from "./components/UserMenu/UserMenu";
import MainSlider from "./components/MainSlider/MainSlider.jsx";
function App() {
  return (
    <div className="page">
      <header className="header container">
        <div className="header__logo">
          <img src={logo} className="logo"></img>
        </div>
        <div className="header__content">
          <MainMenu className="main-menu main-menu__header" />
        </div>
        <div className="header__user-aria">
          <UserMenu item="Москва" />
        </div>
      </header>

      <main className="container">
        <MainSlider />
        {/* <Catalog>
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
        </Catalog> */}
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
