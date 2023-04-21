import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  background: #e5e5e5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 30px;
`;
const CardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default CardList;
