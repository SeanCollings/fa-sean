import React from 'react';
import styled from 'styled-components';

const SLabel = styled.label`
  margin-right: 0.5rem;
`;
const SSelect = styled.select`
  position: relative;
  min-width: 12rem;
  height: 2rem;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #cacaca;
  outline: none;
`;

const Dropdown = ({
  labelText,
  name,
  id,
  items = [],
  onChange,
  defaultValue,
}) => {
  return (
    <>
      {labelText && <SLabel htmlFor={id}>{labelText}</SLabel>}
      <SSelect
        name={name}
        id={id}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {items.map(({ display, field }) => (
          <option value={field} key={display}>
            {display}
          </option>
        ))}
      </SSelect>
    </>
  );
};

export default Dropdown;
