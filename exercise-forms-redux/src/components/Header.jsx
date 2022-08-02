import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">PERSONAL</Link>
        <Link to="/professionalform">PROFESSIONAL</Link>
        <Link to="/formdisplay">FORM</Link>
      </header>
    );
  }
}

export default Header;
