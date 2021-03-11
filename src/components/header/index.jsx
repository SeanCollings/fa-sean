import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { COLOURS } from '../../constants';
import GenderFields from '../gender-fields';

const SHeaderContainer = styled.div`
  background: ${COLOURS.dark};
  position: fixed;
  height: 4rem;
  width: 100%;
  z-index: 100;
`;
const SLeftContainer = styled.div`
  margin: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
  padding: 0 1rem 0;
`;
const SHeaderName = styled.div`
  color: ${COLOURS.light};
  font-size: 20px;
  cursor: pointer;
`;
const SHeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SRightContainer = styled.div`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 1.5rem;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  };

  return (
    <SHeaderContainer>
      <SHeaderContents>
        <SLeftContainer>
          <GenderFields />
        </SLeftContainer>
        <SRightContainer>
          <SHeaderName onClick={handleHomeClick}>Fa-sean</SHeaderName>
        </SRightContainer>
      </SHeaderContents>
    </SHeaderContainer>
  );
};

export default Header;
