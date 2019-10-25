import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { Listing as ListingType } from "../types";
import { Link } from "react-router-dom";

interface Props {
  listing: ListingType;
}

export default function ListingFull({ listing: { category, name } }: Props) {
  return (
    <ListingWrapper>
      <Heading size="l" as="h4" preLine={true}>
        {category}
      </Heading>
      <Heading size="l" as="h3" toLower={true}>
        {name}
      </Heading>
      <a href="https://launch-ar">Preview</a>
    </ListingWrapper>
  );
}

const ListingWrapper = styled("div")`
  padding: 30px;
`;
