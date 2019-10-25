import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

export default function Listing() {
  return (
    <ListingWrapper>
      <Heading size="m">Listing</Heading>
    </ListingWrapper>
  );
}

const ListingWrapper = styled("div")`
  border: 1px solid;
`;
