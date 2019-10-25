import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Listing from "./Listing";

export default function Listings() {
  return (
    <ListingsWrapper>
      <Heading size="m">Listings</Heading>
      <Listing />
    </ListingsWrapper>
  );
}

const ListingsWrapper = styled("div")`
  border: 1px solid;
`;
