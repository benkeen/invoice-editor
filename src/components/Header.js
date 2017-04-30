import React from 'react';

export const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Invoice Editor</a>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="http://github.com/benkeen/invoice-editor" target="_blank">Github</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
