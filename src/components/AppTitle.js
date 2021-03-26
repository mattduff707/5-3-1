import React from "react";
import styled from "styled-components";

const AppTitle = () => {
  return (
    <Wrapper>
      <Title>5/3/1 Calculator</Title>
      <SubTitle>Written by Jim Wendler</SubTitle>
      <Link href="https://www.jimwendler.com/collections/books-programs/products/5-3-1-second-edition-hard-copy">
        Buy now
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding-bottom: 10px;
`;

const Title = styled.h1`
  color: hsl(12, 45%, 13%);
  font-size: 40px;
`;
const SubTitle = styled.h2`
  color: hsl(14, 31%, 43%);
  font-size: 24px;
`;
const Link = styled.a``;

export default AppTitle;
