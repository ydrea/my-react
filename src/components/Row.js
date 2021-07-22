import { Button } from "@material-ui/core";
import { props } from "bluebird";

import { Type } from "../type";

// Row.propTypes = {
//   pokemon: PropTypes.arrayOf(Type),
// };

export const Row = ({ pokemon, onSelect }) => (
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
