import logo from "./logo.svg";
import "./App.scss";
import data from "./data/data";
import Menu from "./components/Menu/Menu.jsx";
import UserMenu from "./components/UserMenu/UserMenu";
import MainSlider from "./components/MainSlider/MainSlider.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="page">
      <header className="header container">
        <div className="header__logo">
          <img src={logo} alt="logo" className="logo"></img>
        </div>
        <div className="header__content">
          <Menu classes={["main-menu__header"]} type="menu" menuItems={data.mainMenuItems} />
        </div>
        <div className="header__user-aria">
          <UserMenu item="Москва" />
        </div>
      </header>

      <main className="container">
        <MainSlider />
        <div className="catalog">
          <Catalog />
        </div>
      </main>
      <footer className="footer container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
