import { Button } from "@material-ui/core";
import { useContext } from "react";
import { MyContext } from "../Context";

// import { Type } from "../type";

// Row.propTypes = {
//   pokemon: PropTypes.arrayOf(Type),
// };

export const Row = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect(pokemon)}
      >
        Select
      </Button>
    </tr>
  );
};
