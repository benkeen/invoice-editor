import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/Header';

const ContentWrapper = styled.div`
  max-width: 800px;
`;

export const MainLayout = ({ children }) => (
  <div>
    <Header />
    <ContentWrapper className="container">
      {children}
    </ContentWrapper>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainLayout;
