import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import DeleteIcon from '../components/DeleteIcon';


export const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div className="container">
      {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
