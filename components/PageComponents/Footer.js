'use client';

import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <Content>
        <p>&copy; {new Date().getFullYear()} I-Witness. All rights reserved.</p>
      </Content>
    </FooterWrapper>
  );
}

// Styled Components
const FooterWrapper = styled.footer`
  height: 5vh;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: linear-gradient(to top, #4ade80, #065f46); /* reverse gradient */
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  color: white;
  font-weight: 500;
  text-align: center;
`;

export default Footer;