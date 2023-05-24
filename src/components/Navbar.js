import React from 'react';
import { Link } from 'react-router-dom';
import { BsBellFill, BsSearch } from 'react-icons/bs';

const Navbar = () => {
  const navbarStyle = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      backgroundColor: 'black', // Set the background color to black
      color: 'white', // Set the text color to white
    },
    title: {
      fontSize: '1.5rem',
      margin: 0,
    },
    navbar: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginRight: '1rem',
    },
    search: {
      display: 'flex',
      alignItems: 'center',
    },
    searchForm: {
      display: 'flex',
    },
    searchInput: {
      padding: '0.5rem',
      border: 'none',
      borderRadius: '4px 0 0 4px',
    },
    searchButton: {
      padding: '0.5rem',
      backgroundColor: '#333',
      border: 'none',
      borderRadius: '0 4px 4px 0',
      color: '#fff',
      cursor: 'pointer',
    },
    bellIcon: {
      fontSize: '1.2rem',
    },
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white', // Set the text color to white
  };

  return (
    <header>
      <div style={navbarStyle.container}>
        <h1 style={navbarStyle.title}>
          <span className="Watch" style={{ color: '#fff' }}>
            Watch
          </span>{' '}
          <span className="Flix" style={{ color: 'red' }}>
            Flix
          </span>
        </h1>
        <nav>
          <ul style={navbarStyle.navbar}>
                        <li style={navbarStyle.navItem}>
              <Link to="/Movies" style={linkStyle}>
                Movies
              </Link>
            </li>
            <li style={navbarStyle.navItem}>
              <Link to="/TvSeries" style={linkStyle}>
                TvSeries
              </Link>
            </li>
            <li style={navbarStyle.navItem}>
              <Link to="/Documentaries" style={linkStyle}>
                Documentaries
              </Link>
            </li>
            <li style={navbarStyle.navItem}>
              <Link to="/Categories" style={linkStyle}>
                Categories
              </Link>
            </li>
            <li style={navbarStyle.navItem}>
              <Link to="/Signup" style={linkStyle}>
                SignUp
              </Link>
            </li>
          </ul>
        </nav>
        <div style={navbarStyle.search}>
          <form style={navbarStyle.searchForm}>
            <input type="text" placeholder="Search..." style={navbarStyle.searchInput} />
            <button type="submit" style={navbarStyle.searchButton}>
              <BsSearch />
            </button>
          </form>
        </div>
        <div>
          <BsBellFill style={navbarStyle.bellIcon} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
