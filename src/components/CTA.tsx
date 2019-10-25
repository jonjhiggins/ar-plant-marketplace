import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import React from "react";

const styling = css`
  background-color: #fff;
  color: #000;
  padding: 12px;
  text-decoration: none;
  box-shadow: 3px 3px 0 #000;
  border: 1px solid;
  display: inline-flex;
`;

const CTALink = styled(Link)`
  ${styling}
`;

const CTAAnchor = styled("a")`
  ${styling}
`;

const Icon = styled("img")`
  display: inline-flex;
  margin-left: 12px;
`;

export default function CTA(props: any) {
  const middle = (
    <>
      <Heading {...props} letterSpacing="cta">
        {props.children}
      </Heading>
      <Icon src="/images/ic-arrows-bottom.svg" alt="" />
    </>
  );
  return props.to ? (
    <CTALink to={props.to}>{middle}</CTALink>
  ) : (
    <CTAAnchor href={props.href}>{middle}</CTAAnchor>
  );
}
