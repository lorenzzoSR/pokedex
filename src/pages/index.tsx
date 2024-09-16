import { useEffect, useState } from "react";
import axios from "axios";
import { FiMenu, FiChevronLeft } from "react-icons/fi";
import {
  MainContainer,
  Sidebar,
  Logo,
  Content,
  GenerationButton,
  PokemonGrid,
  HeaderContainer,
  PokedexLogo,
  HeaderTitle,
  ToggleButton,
} from "../styles/HomePage.styles";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import PokedexModal from "../components/PokedexModal/PokedexModal"; // Importar o modal

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  id: number;
  name: string;
  types: { type: { name: string } }[];
}

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);
  const [generation, setGeneration] = useState<number>(1);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null
  );
  const [offset, setOffset] = useState<number>(0);
  const limit = 30;

  useEffect(() => {
    console.log("useEffect executado", { generation, offset });

    if (pokemonList.length > 0 && offset === 0) return;
    const fetchPokemonByGeneration = async () => {
      try {
        let baseUrl = "";

        if (generation === 1) {
          baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        } else if (generation === 2) {
          baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
            151 + offset
          }&limit=${limit}`;
        } else if (generation === 3) {
          baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
            251 + offset
          }&limit=${limit}`;
        } else if (generation === 4) {
          baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
            386 + offset
          }&limit=${limit}`;
        } else if (generation === 5) {
          baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
            493 + offset
          }&limit=${limit}`;
        } else if (generation === 6) {
          baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
            649 + offset
          }&limit=${limit}`;
        } else if (generation === 7) {
          baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
            721 + offset
          }&limit=${limit}`;
        } else if (generation === 8) {
          baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
            809 + offset
          }&limit=${limit}`;
        }

        const response = await axios.get(baseUrl);
        const results = await Promise.all(
          response.data.results.map(async (pokemon: Pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
          })
        );

        setPokemonList((prevList) => {
          const newList = [...prevList, ...results];
          const uniqueList = newList.filter(
            (pokemon, index, self) =>
              index === self.findIndex((p) => p.id === pokemon.id)
          );
          return uniqueList;
        });
      } catch (error) {
        console.error("Erro ao buscar dados da PokeAPI", error);
      }
    };

    fetchPokemonByGeneration();
  }, [generation, offset]);

  const loadMorePokemon = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const changeGeneration = (gen: number) => {
    setGeneration(gen);
    setOffset(0);
    setPokemonList([]);
  };

  return (
    <MainContainer>
      <ToggleButton onClick={() => setSidebarVisible(!sidebarVisible)}>
        {sidebarVisible ? <FiChevronLeft /> : <FiMenu />} {/* Ícones */}
      </ToggleButton>
      {sidebarVisible && (
        <Sidebar>
          <Logo src="/pokemon-logo.png" alt="Logo Pokémon" />
          {[1, 2, 3, 4, 5, 6, 7, 8].map((gen) => (
            <GenerationButton key={gen} onClick={() => changeGeneration(gen)}>
              Geração {gen}
            </GenerationButton>
          ))}
        </Sidebar>
      )}
      <Content $sidebarVisible={sidebarVisible}>
        <HeaderContainer>
          <PokedexLogo src="/pokedex.png" alt="Logo da Pokédex" />
          <HeaderTitle>Pokédex Interativa</HeaderTitle>
        </HeaderContainer>
        <PokemonGrid>
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              types={pokemon.types.map((type) => type.type.name)}
              onClick={() => setSelectedPokemon(pokemon)}
            />
          ))}
        </PokemonGrid>

        {/* Botão para carregar mais Pokémon */}
        <button onClick={loadMorePokemon}>Carregar mais</button>

        {selectedPokemon && (
          <PokedexModal
            pokemon={selectedPokemon}
            onClose={() => setSelectedPokemon(null)}
          />
        )}
      </Content>
    </MainContainer>
  );
};

export default HomePage;
