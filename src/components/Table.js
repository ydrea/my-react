import { useContext } from "react";
import { MyContext } from "../Context";
import { Row } from "./Row";

export const Table = () => {
  const { pokemon, filter, selectedSet } = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Type</td>
          <td>Select</td>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 10)
          .map((pokemon) => (
            <Row pokemon={pokemon}
              key={pokemon.id}
              onSelect={(pokemon) => selectedSet(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};
