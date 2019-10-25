import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Heading from "./components/Heading";
import theme from "./styles/theme";
import Listings from "./components/Listings";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header>
          <Heading size="m" letterSpacing="wide">
            The Plant Store
          </Heading>
          <Listings />
        </Header>
      </ThemeProvider>
    </div>
  );
};

const Header = styled("header")`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
`;

export default App;
