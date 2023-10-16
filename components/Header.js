import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header id="header" className="alt">
    <Link href="/" className="logo">
      Home
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
