import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(25, 25, 25);
  border-radius: 0.75em;
  cursor: pointer;
  height: fit-content;
  position: relative;
  &:hover:before {
    opacity: 1;
  }
  &:before {
    background: linear-gradient(
      45deg,
      transparent 5%,
      rgb(255, 215, 137) 5%,
      transparent 99%
    );
    border-radius: inherit;
    content: "";
    inset: 0px;
    opacity: 0;
    position: absolute;
    transition: opacity 400ms;
    z-index: 5;
  }
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 10px;
`;

const Amount = styled.div`
  font-size: 24px;
`;
const Expiry = styled.div``;
const Name = styled.div``;
const Code = styled.div`
  position: relative;
  z-index: 10;
  font-size: 24px;
`;

const Button = styled.button`
  display: inline-block;
  position: relative;
  height: 15%;
  padding: 8px 16px;
  &:hover {
    cursor: pointer;
  }
  margin: 10px;
  z-index: 10;
`;

export default function Tile(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Container>
      <Logo src={props.image}></Logo>
      <Description>
        <Amount>{`Rs ${props.description?.amount}/-`}</Amount>
        <Expiry>{props.description?.name}</Expiry>
        <Name>{`Expiry Date: ${props.description?.expiry}`}</Name>
        {clicked && (
          <>
            <Code>{`Gift Voucher : ${props.description?.giftVoucher}`}</Code>
            <Code>{`Card : ${props.description?.card}`}</Code>
            <Code>{`Pin : ${props.description?.pin}`}</Code>
          </>
        )}
      </Description>
      <Button disabled={!props.visible} onClick={handleClick}>
        {clicked ? "Hide Code" : "Reveal Code"}
      </Button>
    </Container>
  );
}
