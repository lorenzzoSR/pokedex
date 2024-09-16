import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: linear-gradient(180deg, #f8f9fa, #e9ecef);
  padding: 20px;
  border-right: 1px solid #ddd;
  transition: transform 0.3s ease-in-out;
  z-index: 900;
  overflow-y: auto;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

export const GenerationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #3b4cca;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2a3a94;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    background-image: url("/pikachu.png");
    background-size: cover;
  }
`;

export const Content = styled.div<{ $sidebarVisible: boolean }>`
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
  margin-left: ${(props) => (props.$sidebarVisible ? "200px" : "0")};
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  max-width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PokedexLogo = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 40px;
  font-family: "Arial", sans-serif;
  color: #ffcb05;
  text-shadow: -2px -2px 0 #3b4cca, /* borda azul */ 2px -2px 0 #3b4cca,
    -2px 2px 0 #3b4cca, 2px 2px 0 #3b4cca; /*  cria uma borda ao redor das letras */
  text-transform: uppercase; /* deixe o texto em maiúsculas */
  letter-spacing: 1px; /* um pouco de espaçamento entre as letras */
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 8px;
  left: 8px;
  background-color: #3b4cca;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #e0e0e0;
    color: #2a3a94;
  }
`;
