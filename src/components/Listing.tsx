import React from "react";
import styled, { css } from "styled-components";
import Heading from "./Heading";
import { Listing as ListingType } from "../types";
import { Link } from "react-router-dom";

interface Props {
  listing: ListingType;
  squareLayout: boolean;
}

export default function Listing({
  listing: { category, url, image, darkText },
  squareLayout
}: Props) {
  return (
    <ListingWrapper to={`/${url}`} squareLayout={squareLayout}>
      <Inner squareLayout={squareLayout}>
        <Image
          src={`/images/${image}-1.png`}
          srcSet={`/images/${image}-1.png, /images/${image}.png 2x`}
        />
        <Body squareLayout={squareLayout}>
          <Heading
            size="xl"
            as="h3"
            preLine={true}
            color={darkText ? "black" : "white"}
            align="right"
          >
            {category}
          </Heading>
        </Body>
      </Inner>
    </ListingWrapper>
  );
}

const ListingWrapper = styled(Link)<{ squareLayout: boolean }>`
  display: block;
  color: inherit;
  text-decoration: none;
  position: relative;
  width: ${({ squareLayout }) => (squareLayout ? "calc(66% - 15px)" : null)};
  margin: ${({ squareLayout }) =>
    squareLayout ? "0 0 0 auto" : "-15px -30px"};
  z-index: ${({ squareLayout }) => (squareLayout ? 1 : 0)};

  ${({ squareLayout }) =>
    squareLayout
      ? css`
          &::before {
            content: "";
            position: absolute;
            top: -15px;
            left: -15px;
            width: 100%;
            height: 100%;
            border: 15px solid #fff;
          }
        `
      : null}
`;

const Inner = styled("div")<{ squareLayout: boolean }>`
  padding-top: ${({ squareLayout }) => (squareLayout ? "100%" : "66.6%")};
  background-color: white;
`;

const Image = styled("img")`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Body = styled("div")<{ squareLayout: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ squareLayout }) =>
    !squareLayout
      ? css`
          display: flex;
          align-items: center;
        `
      : null}

  & > h3 {
    ${({ squareLayout }) =>
      squareLayout
        ? css`
            margin: 0;
            position: relative;
            top: -3px;
            right: -5px;
            line-height: 1;
          `
        : css`
            margin: 0 0 0 30px;
            text-align: left;
          `}
  }
`;
