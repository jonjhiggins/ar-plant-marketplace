import React from "react";
import styled from "styled-components";
import Listing from "./Listing";
import { listings } from "../data";

export default function Listings() {
  return (
    <ListingsWrapper>
      {listings.map((listing, index) => (
        <Listing key={index} listing={listing} squareLayout={index % 2 === 0} />
      ))}
    </ListingsWrapper>
  );
}

const ListingsWrapper = styled("div")`
  padding: 30px;
`;
