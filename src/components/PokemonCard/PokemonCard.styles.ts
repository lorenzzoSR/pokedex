// src/components/PokemonCard/PokemonCard.styles.ts
import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const PokemonInfo = styled.div`
  margin-top: 10px;

  span {
    display: inline;
    font-size: 14px;
    color: #333;
  }

  h3 {
    margin: 5px 0;
    font-size: 18px;
    text-transform: capitalize;
    color: #333;
  }

  div {
    margin-top: 10px;
  }
`;

export const TypeBadge = styled.span<{ type: string }>`
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 12px;
  color: white;
  background-color: ${({ type }) => {
    switch (type) {
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "grass":
        return "#78C850";
      case "electric":
        return "#F8D030";
      case "ice":
        return "#98D8D8";
      case "fighting":
        return "#C03028";
      case "poison":
        return "#A040A0";
      case "ground":
        return "#E0C068";
      case "flying":
        return "#A890F0";
      case "psychic":
        return "#F85888";
      case "bug":
        return "#A8B820";
      case "rock":
        return "#B8A038";
      case "ghost":
        return "#705898";
      case "dragon":
        return "#7038F8";
      case "dark":
        return "#705848";
      case "steel":
        return "#B8B8D0";
      case "fairy":
        return "#EE99AC";
      default:
        return "#A8A878"; // Cor padrão para tipos desconhecidos
    }
  }};
`;
