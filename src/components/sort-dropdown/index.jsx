import React from 'react';
import styled from 'styled-components';
import { FILTER_SORT } from '../../constants';
import { useActions } from '../../hooks/use-actions';
import Dropdown from '../dropdown';

const SSortDropdownContainer = styled.div`
  width: 100%;
  position: relative;
`;
const SDropdownWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const SortDropdown = () => {
  const { updateFilter } = useActions();

  const handleOnChange = (e) => {
    updateFilter({ sort: FILTER_SORT[e.target.value] });
  };

  return (
    <SSortDropdownContainer>
      <SDropdownWrapper>
        <Dropdown
          name="sort"
          id="sort"
          onChange={handleOnChange}
          items={Object.values(FILTER_SORT)}
        />
      </SDropdownWrapper>
    </SSortDropdownContainer>
  );
};

export default SortDropdown;
