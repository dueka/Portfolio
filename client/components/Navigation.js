export default function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp; </div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              {" "}
              IBKRice
            </a>
          </li>
          <li className="navigation__item">
            <a href="/about" className="navigation__link">
              {" "}
              About IBKRice
            </a>
          </li>
          <li className="navigation__item">
            <a href="/productlist" className="navigation__link">
              Products
            </a>
          </li>
          <li className="navigation__item">
            <a href="/recipes" className="navigation__link">
              Recipes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
