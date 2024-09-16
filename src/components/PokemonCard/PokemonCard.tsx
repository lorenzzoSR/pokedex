import React from "react";
import {
  PokemonCardContainer,
  PokemonImage,
  PokemonInfo,
  TypeBadge,
} from "./PokemonCard.styles";

interface PokemonCardProps {
  name: string;
  id: number;
  types: string[];
  onClick: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  id,
  types,
  onClick,
}) => {
  return (
    <PokemonCardContainer onClick={onClick}>
      <PokemonImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <PokemonInfo>
        <span>Nº {id.toString().padStart(3, "0")}</span>
        <h3>{name}</h3>
        <div>
          {types.map((type) => (
            <TypeBadge key={type} type={type}>
              {type}
            </TypeBadge>
          ))}
        </div>
      </PokemonInfo>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
