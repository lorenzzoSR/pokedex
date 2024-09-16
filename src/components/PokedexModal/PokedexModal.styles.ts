import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo opaco */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Sobrepõe o resto da página */
`;

export const ModalContainer = styled.div`
  background-color: #ffcc00;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const ModalContent = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
    text-transform: capitalize;
  }

  p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }

  div {
    text-align: center;

    span {
      font-size: 14px;
      color: white;
      padding: 5px 10px;
      margin-right: 5px;
      border-radius: 5px;
      display: inline-block;
    }
  }
`;
