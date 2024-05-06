import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Tile from "./components/tile";
import styled from "styled-components";

//images
import amazon from "../src/assets/images/amazon.png";
import nykka from "../src/assets/images/Nykaa.png";
import myntra from "../src/assets/images/myntra.png";
import bms from "../src/assets/images/bms.png";
import congrats from "../src/assets/images/modal.png";

const TileCard = styled.div`
  background-image: url("https://images.unsplash.com/photo-1565896311009-382b9e813b19?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987");
  background-position: center;
  background-size: cover;
  filter: ${(props) => (props.isModalOpen ? "blur(1.25em)" : "none")};
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  padding: 1em 0em;
  place-self: center;
  position: relative;
  width: calc(100% - 2em);
  z-index: 4;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const description = {
  amazon: {
    amount: 2000,
    expiry: "07-Apr-2025",
    name: "Amazon Gift Card",
    giftVoucher: "9B65-VEB5ZK-ZHVR",
    card: "",
    pin: "6014860507701539",
  },
  myntra: {
    amount: 1500,
    expiry: "26-Mar-2025",
    name: "Myntra store Gift Card",
    giftVoucher: "6001220282104928",
    card: "5366258475649616",
    pin: "249676",
  },
  bms: {
    amount: 1000,
    expiry: "",
    name: "BookMyShow Gift Card",
    giftVoucher: "8U8NPL8QA6",
    card: "1003610011194917",
    pin: "",
  },
  nykaa: {
    amount: 1500,
    expiry: "27-Mar-2025",
    name: "Nykaa Gift Card",
    giftVoucher: "6002940108897617",
    card: "",
    pin: "123788",
  },
};

// function Modal() {

// }

// export default Modal;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState();
  const [visible, setVisbile] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(true);
    setVisbile(false);
  }, []);

  const modal = () => {
    return (
      <Modal>
        <ModalContent>
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <Close className="close" onClick={toggleModal}>
                  &times;
                </Close>
                {/* <p>This is the modal content!</p> */}
                <img src={congrats} />
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    );
  };

  const handleChange = (e) => {
    setPhone(e.target.value);
    setVisbile(false);
  };

  const handleSubmit = () => {
    if (phone === "9713991992") setVisbile(true);
    else setVisbile(false);
  };

  return (
    // <Container>
    <>
      {isOpen && modal()}
      <p>{"Enter your phone number to verify"}</p>
      <Input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>{"Submit"}</button>
      {!visible && <p>{"Enter your phone number correctly Shahbaz Bhaiya"}</p>}
      <TileCard className="App" isModalOpen={isOpen}>
        <Tile
          image={amazon}
          description={description.amazon}
          visible={visible}
        />
        <Tile image={nykka} description={description.nykaa} visible={visible} />
        <Tile
          image={myntra}
          description={description.myntra}
          visible={visible}
        />
        <Tile image={bms} description={description.bms} visible={visible} />
      </TileCard>
    </>
    // </Container>
  );
}

export default App;
