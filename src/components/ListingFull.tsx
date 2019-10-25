import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { Listing as ListingType } from "../types";
import CTA from "./CTA";

interface Props {
  listing: ListingType;
}

export default function ListingFull({
  listing: { category, name, image, imageFull, description, greatFor }
}: Props) {
  const imageString = imageFull
    ? `/images/${imageFull}.png, /images/${imageFull}@2x.png 2x`
    : `/images/${image}-1.png, /images/${image}.png 2x`;
  return (
    <ListingWrapper>
      <ImageWrapper>
        <Image src={`/images/${image}-1.png`} srcSet={imageString} />
        <Heading size="l" as="h4" preLine={true}>
          {category}
        </Heading>
      </ImageWrapper>
      <Body>
        <Heading size="xl" as="h3" toLower={true} align="center">
          {name}
        </Heading>
        {description && (
          <Heading
            size="m"
            as="p"
            toLower={true}
            align="center"
            weight="normal"
            letterSpacing="normal"
            italic={true}
          >
            {description}
          </Heading>
        )}
        {greatFor && (
          <>
            <Heading size="m" as="p" align="center" weight="normal">
              Great for
            </Heading>
            <GreatForSection>
              {greatFor.map((item, index) => (
                <GreatFor
                  size="s"
                  as="div"
                  toLower={true}
                  align={"center"}
                  key={index}
                  letterSpacing="normal"
                  weight="normal"
                >
                  {item}
                </GreatFor>
              ))}
            </GreatForSection>
          </>
        )}
        <CTAWrapper>
          <CTA href="https://launch-ar">Preview</CTA>
        </CTAWrapper>
      </Body>
    </ListingWrapper>
  );
}

const ListingWrapper = styled("div")`
  padding: 30px;
`;

const ImageWrapper = styled("div")`
  padding-top: 100%;
  position: relative;
  margin: -30px -30px 0 -30px;
`;

const Body = styled("div")`
  background-color: #fff;
  position: relative;
  z-index: 1;
  margin-top: -90px;
  padding: 1px 30px;
  text-align: center;
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

const GreatForSection = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -3px;
  justify-content: center;
`;

const GreatFor = styled(Heading)`
  background-color: #ebeeea;
  border-radius: 3px;
  padding: 3px 6px;
  margin: 3px;
`;

const CTAWrapper = styled("div")`
  margin: 30px 0;
`;
