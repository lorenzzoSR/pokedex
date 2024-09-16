import React from "react";
import {
  ModalBackground,
  ModalContainer,
  PokemonImage,
  ModalContent,
  CloseButton,
} from "./PokedexModal.styles";
import { TypeBadge } from "../PokemonCard/PokemonCard.styles"; 

interface PokedexModalProps {
  pokemon: {
    id: number;
    name: string;
    types: { type: { name: string } }[];
  };
  onClose: () => void;
}

const PokedexModal: React.FC<PokedexModalProps> = ({ pokemon, onClose }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <PokemonImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <ModalContent>
          <h2>{pokemon.name}</h2>
          <p>Nº {pokemon.id.toString().padStart(3, "0")}</p>
          <div>
            <h4>Tipos:</h4>
            {pokemon.types.map((type) => (
              <TypeBadge key={type.type.name} type={type.type.name}>
                {" "}
                {/* Usando o TypeBadge com as cores */}
                {type.type.name}
              </TypeBadge>
            ))}
          </div>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default PokedexModal;
