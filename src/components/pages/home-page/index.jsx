import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { COLOURS, FILTER_GENDER } from '../../../constants';
import { useActions } from '../../../hooks/use-actions';
import SortDropdown from '../../sort-dropdown';
import ProductsPage from '../products-page';

const SHeading = styled.div`
  color: ${COLOURS.textDark};
  font-size: 20px;
  font-weight: bold;
`;
const SLoading = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: ${COLOURS.textDark};
  padding: 0.5rem;
  border-radius: 8px;
  color: ${COLOURS.white};
`;
const SError = styled.div`
  margin-top: 3rem;
  color: ${COLOURS.errorText};
  background: ${COLOURS.errorBackground};
  padding: 1rem;
`;
const SPadding = styled.div`
  padding-top: 2rem;
`;

const HomePage = () => {
  const { updateFilter } = useActions();
  const { gender, loading, error } = useSelector(({ filter }) => filter);

  useEffect(() => {
    updateFilter({ gender: FILTER_GENDER.female });
  }, []);

  return (
    <div>
      {loading && <SLoading>Loading...</SLoading>}
      {gender && <SHeading>{gender.display}'s Clothing</SHeading>}
      <SortDropdown />
      {error && <SError>Error: {error}</SError>}
      <SPadding />
      <ProductsPage />
    </div>
  );
};

export default HomePage;
