import React from 'react';
import styled from 'styled-components';
import { COLOURS } from '../../constants';

const SFooterWrapper = styled.footer`
  min-height: 5rem;
  position: relative;
  text-align: center;
  left: 0;
  width: 100%;
  font-size: 14px;
  background: ${COLOURS.dark};
`;
const SPadding = styled.div`
  padding: 1rem;
`;
const SLink = styled.a`
  color: ${COLOURS.textGray};
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${COLOURS.white};
  }
`;

const Footer = () => {
  return (
    <SFooterWrapper>
      <SPadding>
        <div>
          <SLink href="https://www.theiconic.com.au/" target="_blank">
            The Iconic
          </SLink>
        </div>
      </SPadding>
    </SFooterWrapper>
  );
};

export default Footer;
