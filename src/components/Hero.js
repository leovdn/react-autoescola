import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { breakAt, BreakpointSize } from "./Breakpoints";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${({ image }) => css`
    background: url(${image}), rgba(0, 0, 0, 0.4);
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  p,
  li {
    font-style: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${colorYellow};
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Hero = ({ title, children, image }) => {
  return (
    <Root image={image}>
      <Container>
        <Content>{children}</Content>
      </Container>
    </Root>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
