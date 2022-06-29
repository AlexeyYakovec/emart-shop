import React from 'react';

//icons
import { ImStarEmpty } from 'react-icons/im';
import { BsSearch, BsBag } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { Squash as Hamburger } from 'hamburger-react';

const navLinks = [
  { name: 'Novelties', href: '/' },
  { name: 'Men`s', href: '/' },
  { name: 'Women`s', href: '/' },
  { name: 'Contacts', href: '/' },
];

function Header() {
  const [search, setSearch] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div className='header'>
      <div className='navbar'>
        <Hamburger className='navbar-burger' size={22} toggled={openMenu} toggle={setOpenMenu} />

        {/* logo */}
        <div className='navbar-logo'>
          <a className='navbar-logo-link' href='/'>
            LOGO.
          </a>
          <div className='navbar-language'>
            <span>EN</span>
          </div>
        </div>

        {/* navigation */}
        <nav className='navbar-nav'>
          <ul className='navbar-list'>
            {navLinks.map(({ name, href }) => (
              <li className='navbar-list-item'>
                <a className='item-link' href={href}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* actions */}
        <div className='navbar-actions'>
          <ImStarEmpty size={18} className='favorites actions-icon' />
          <BsSearch size={18} className='search actions-icon' onClick={() => setSearch(!search)} />
          <BsBag size={18} className='basket actions-icon' />
          <BiLogIn size={24} className='login actions-icon' />
        </div>

        {/* search block */}
        <div className={search ? 'navbar-search active' : 'navbar-search'}>
          <input type='search' name='' id='' placeholder='enter the sneakers' />
          <div className='navbar-search-position'>
            <BsSearch size={16} className='navbar-search-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
