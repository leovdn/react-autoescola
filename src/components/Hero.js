import React from "react";
import styled, { css } from "styled-components";

const Root = styled.div`
  ${({ image }) => css`
    background-image: url(${image});
    background-position: center;
    background-size: cover;
  `}
`;

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap");
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
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
  }
`;

const Hero = ({ title, children, image }) => {
  return (
    <Root image={image}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Root>
  );
};

export default Hero;
