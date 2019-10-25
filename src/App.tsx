import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Heading from "./components/Heading";
import theme from "./styles/theme";
import Listings from "./components/Listings";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { listings } from "./data";
import ListingFull from "./components/ListingFull";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header>
            <Heading size="m" as="h1" letterSpacing="wide">
              <Link to="/">The Plant Store</Link>
            </Heading>
          </Header>

          <main role="main">
            <Switch>
              <Route exact path="/">
                <Listings />
              </Route>
              {listings.map((listing, index) => {
                const { url, category } = listing;
                return (
                  <Route path={`/${url}`}>
                    <ListingFull listing={listing} />
                  </Route>
                );
              })}
            </Switch>
          </main>
        </Router>
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
