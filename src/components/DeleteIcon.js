/**
 * Generic delete icon.
 */
import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.span`
  cursor: pointer;
  transition: color 0.15s; 
  &:hover {
    color: #aa0000;
  }
`;

const DeleteIcon = ({ onClick }) => (
  <StyledIcon className="glyphicon glyphicon-remove" onClick={onClick} />
);

export default DeleteIcon;

