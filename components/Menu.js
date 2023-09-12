import Link from 'next/link';
import PropTypes from 'prop-types';

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link href="/">
            <span onClick={props.onToggleMenu}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <span onClick={props.onToggleMenu}>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <span onClick={props.onToggleMenu}>Blog</span>
          </Link>
        </li>
         <li>
          <Link href="/about">
              <span onClick={props.onToggleMenu}>About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
              <span onClick={props.onToggleMenu}>Contact</span>
          </Link>
        </li>
      {/*</ul>
      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li> */}
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
