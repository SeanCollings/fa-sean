import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { COLOURS, FILTER_GENDER } from '../../constants';
import { useActions } from '../../hooks/use-actions';

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

const SGenderContainer = styled.div`
  display: flex;
  font-size: 18px;
  color: ${COLOURS.light};
  position: relative;
`;
const SGender = styled.div`
  min-width: 70px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    transition: background-color 0.25s cubic-bezier(0.3, 0, 0.3, 1);
  }
`;
const SLine = styled.div`
  width: 100%;
  position: absolute;
  border-bottom: 2px solid ${COLOURS.light};
  bottom: 0;
`;

const GenderFields = () => {
  const { updateFilter } = useActions();
  const { gender } = useSelector(({ filter }) => filter);

  const handleGenderSelect = (field) => () => {
    updateFilter({ gender: FILTER_GENDER[field] });
  };

  return (
    <SGenderContainer>
      {Object.values(FILTER_GENDER).map(({ display, field }) => (
        <SGender key={field} onClick={handleGenderSelect(field)}>
          <div>{display}</div>
          {gender.field === field && <SLine />}
        </SGender>
      ))}
    </SGenderContainer>
  );
};

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
