import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { COLOURS } from '../../../constants';

const SProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  opacity: ${({ isLoading }) => isLoading && '0.6'};
`;
const SProductContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  flex: 1 0 21%;
  // padding-top: 26%;
`;
const SProductWrapper = styled.div`
  cursor: pointer;
  height: 100%;
`;
const SImage = styled.img`
  width: 100%;
  margin-bottom: 0.5rem;
  background: ${COLOURS.gray};

  &:hover {
    transition: transform filter 0.25s;
    transform: scale(1.01);
    filter: brightness(80%);
  }
`;
const SDescriptionContainer = styled.div`
  width: 100%;
  color: ${COLOURS.textDark};
  font-size: 14px;
  margin: auto;
`;
const SName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const SPrice = styled.div`
  line-height: 1.5;
  font-weight: bold;
`;

const ProductDisplay = ({ product }) => {
  const handleProductSelect = () => {};

  if (!product) return <div />;

  return (
    <SProductWrapper onClick={handleProductSelect}>
      <SImage src={product._embedded?.images?.[0]?.url} alt={product.name} />
      <SDescriptionContainer>
        <SName>{product.name}</SName>
        <SPrice>${product.price?.toFixed(2)}</SPrice>
      </SDescriptionContainer>
    </SProductWrapper>
  );
};

const ProductsPage = () => {
  const { results, loading } = useSelector(({ filter }) => filter);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (results) {
      const { _embedded } = results;
      setProducts(_embedded?.product);
    }
  }, [results]);

  if (!results || !products?.length) return <div>No results</div>;

  return (
    <SProductsContainer isLoading={loading}>
      {[...products, ...Array(2).fill()].map((product) => {
        return (
          <SProductContainer key={product?.sku || Math.random()}>
            <ProductDisplay product={product} />
          </SProductContainer>
        );
      })}
    </SProductsContainer>
  );
};

export default ProductsPage;
