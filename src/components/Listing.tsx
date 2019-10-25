import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { Listing as ListingType } from "../types";
import { Link } from "react-router-dom";

interface Props {
  listing: ListingType;
}

export default function Listing({ listing: { category, url } }: Props) {
  return (
    <ListingWrapper to={`/${url}`}>
      <Heading size="l" as="h3" preLine={true}>
        {category}
      </Heading>
    </ListingWrapper>
  );
}

const ListingWrapper = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;
