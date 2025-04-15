// components/PageComponents/MainContent.js

import styled from 'styled-components';

const MainContent = ({ children }) => {
  return <MainContentWrapper>{children}</MainContentWrapper>;
};

const MainContentWrapper = styled.main`
  flex: 1;
  background-color:rgb(90, 90, 90);  // Dark grey almost black
  color: white;  // Ensure text color is white
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default MainContent;
